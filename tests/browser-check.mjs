// Optional end-to-end browser verification for Font Journey.
//
// This is NOT part of `npm test` (which only runs tests/*.test.js with Node's
// built-in runner). It needs Playwright, which is deliberately not a declared
// dependency of the project. Install it temporarily, without touching
// package.json or creating a lockfile:
//
//   npm install --no-save --package-lock=false playwright
//   npx playwright install chromium
//   node tests/browser-check.mjs [name-filter]
//
// The script starts `node server.js` on 127.0.0.1:8187, drives headless
// Chromium through the real UI, and always shuts both down in a `finally`.
// Set HEADED=1 to watch the browser. Exit codes: 0 all passed, 1 a check
// failed, 2 tooling (Playwright/Chromium) unavailable.

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8187;
const externalUrl = process.argv[2] === '--url' ? process.argv[3] : null;
if (process.argv[2] === '--url' && !externalUrl) throw new Error('--url needs an HTTP origin');
const ORIGIN = externalUrl ? new URL(externalUrl).origin : `http://127.0.0.1:${PORT}`;
const filter = process.argv[externalUrl ? 4 : 2];

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error([
    'Playwright is not installed, so the browser check cannot run.',
    'Install it temporarily (nothing is saved to package.json):',
    '  npm install --no-save --package-lock=false playwright',
    '  npx playwright install chromium',
  ].join('\n'));
  process.exit(2);
}

// ---------------------------------------------------------------- server ---

function startServer() {
  const child = spawn(process.execPath, ['server.js'], {
    cwd: root,
    env: { ...process.env, PORT: String(PORT) },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let output = '';
  const ready = new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`server did not become ready in 10s. Output:\n${output}`)), 10_000);
    child.stdout.on('data', chunk => {
      output += chunk;
      if (output.includes('is ready')) { clearTimeout(timer); resolve(); }
    });
    child.stderr.on('data', chunk => { output += chunk; });
    child.on('error', error => { clearTimeout(timer); reject(error); });
    child.on('exit', code => { clearTimeout(timer); reject(new Error(`server exited early (code ${code}). Output:\n${output}`)); });
  });
  return { child, ready };
}

async function stopServer(child) {
  if (child.exitCode !== null || child.signalCode) return;
  const exited = new Promise(resolve => child.once('exit', resolve));
  child.kill();
  await Promise.race([exited, new Promise(resolve => setTimeout(resolve, 3000))]);
}

// --------------------------------------------------------------- helpers ---

const INITIAL_TEXT = 'The best ideas\nstart with a little\ncuriosity.';
const DEFAULT = {
  font: 'Inter', size: '52px', weight: '400', italic: 'normal',
  color: 'rgb(24, 23, 28)', bg: 'rgba(0, 0, 0, 0)',
};
const BEST = [4, 8]; // offsets of "best" in INITIAL_TEXT

const settle = page => page.evaluate(() => new Promise(resolve =>
  requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(resolve, 0)))));

const readState = page => page.evaluate(() => {
  const editor = document.getElementById('editor');
  const chars = [];
  const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const css = getComputedStyle(node.parentElement);
    const style = {
      font: css.fontFamily.replaceAll('"', ''), size: css.fontSize, weight: css.fontWeight,
      italic: css.fontStyle, color: css.color, bg: css.backgroundColor,
    };
    for (let i = 0; i < node.data.length; i++) chars.push({ ch: node.data[i], style });
  }
  return { text: editor.textContent, chars, tags: [...editor.querySelectorAll('*')].map(el => el.tagName) };
});

const readToolbar = page => page.evaluate(() => {
  const $ = id => document.getElementById(id);
  return {
    font: $('font-family').textContent === 'Mixed' ? '' : $('font-family').textContent,
    size: $('font-size').value, sizePlaceholder: $('font-size').placeholder,
    bold: $('bold-button').getAttribute('aria-pressed'),
    italic: $('italic-button').getAttribute('aria-pressed'),
    textColor: $('text-color-value').textContent, background: $('background-color-value').textContent,
    status: $('selection-status').textContent, count: $('character-count').textContent,
  };
});

async function select(page, start, end = start) {
  await page.evaluate(({ start, end }) => {
    const editor = document.getElementById('editor');
    editor.focus();
    const point = offset => {
      const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (offset <= node.length) return [node, offset];
        offset -= node.length;
      }
      return [editor, editor.childNodes.length];
    };
    const range = document.createRange();
    range.setStart(...point(start));
    range.setEnd(...point(end));
    const selection = getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }, { start, end });
  await settle(page);
}

const charRect = (page, index) => page.evaluate(index => {
  const walker = document.createTreeWalker(document.getElementById('editor'), NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (index < node.length) {
      const range = document.createRange();
      range.setStart(node, index);
      range.setEnd(node, index + 1);
      const { left, right, top, bottom } = range.getBoundingClientRect();
      return { left, right, top, bottom };
    }
    index -= node.length;
  }
  return null;
}, index);

/** Every character must match DEFAULT plus the listed [start, end, patch] ranges. */
function expectStyles(state, patches = []) {
  state.chars.forEach((char, index) => {
    const want = { ...DEFAULT };
    for (const [start, end, patch] of patches) if (index >= start && index < end) Object.assign(want, patch);
    assert.deepStrictEqual(char.style, want, `style of char #${index} ${JSON.stringify(char.ch)} in ${JSON.stringify(state.text)}`);
  });
}

async function openPicker(page, name) {
  const popup = page.locator(`#${name}-color-picker`);
  if (await popup.isHidden()) await page.click(`#${name}-color-toggle`);
  await popup.waitFor({ state: 'visible' });
}

async function setRgb(page, name, [r, g, b]) {
  await openPicker(page, name);
  for (const [channel, value] of [['r', r], ['g', g], ['b', b]]) await page.fill(`#${name}-${channel}`, String(value));
  await settle(page);
}

const readRgb = (page, name) => page.evaluate(name =>
  ['r', 'g', 'b'].map(channel => Number(document.getElementById(`${name}-${channel}`).value)), name);

function assertNear(actual, expected, tolerance, label) {
  actual.forEach((value, i) => assert.ok(Math.abs(value - expected[i]) <= tolerance,
    `${label}: channel ${'rgb'[i]} was ${value}, expected ${expected[i]} ±${tolerance} (got [${actual}])`));
}

const cssRgb = ([r, g, b]) => `rgb(${r}, ${g}, ${b})`;

const clipboardEvent = (page, type, payload = {}) => page.evaluate(({ type, payload }) => {
  const data = new DataTransfer();
  for (const [format, value] of Object.entries(payload)) data.setData(format, value);
  const event = new ClipboardEvent(type, { clipboardData: data, bubbles: true, cancelable: true });
  const notCancelled = document.getElementById('editor').dispatchEvent(event);
  return { cancelled: !notCancelled, text: data.getData('text/plain') };
}, { type, payload });

async function openApp(page) {
  await page.goto(`${ORIGIN}/`);
  await page.waitForFunction(() => document.getElementById('editor')?.textContent.length > 0);
  await settle(page);
}

async function clickEndOfLastLine(page) {
  await page.locator('#editor').scrollIntoViewIfNeeded();
  const lastChar = (await readState(page)).text.length - 1;
  const rect = await charRect(page, lastChar);
  const box = await page.locator('#editor').boundingBox();
  await page.mouse.click(box.x + box.width - 14, rect.top + (rect.bottom - rect.top) / 2);
  await settle(page);
}

async function overflowReport(page, expectedWidth) {
  return page.evaluate(expectedWidth => {
    const offenders = [];
    // Editor text is checked glyph by glyph below: pre-wrap lets a trailing space
    // hang past the edge, which is invisible and never scrolls.
    for (const el of document.querySelectorAll('body *')) {
      if (el.closest('.sr-only') || el.closest('#editor')) continue;
      const rect = el.getBoundingClientRect();
      if (!rect.width && !rect.height) continue;
      if (rect.right > expectedWidth + 1 || rect.left < -1) {
        offenders.push(`<${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : ''}> x=${Math.round(rect.left)}..${Math.round(rect.right)}`);
      }
    }
    const walker = document.createTreeWalker(document.getElementById('editor'), NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      for (let i = 0; i < node.length; i++) {
        if (/\s/.test(node.data[i])) continue;
        const range = document.createRange();
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        const rect = range.getBoundingClientRect();
        if (rect.right > expectedWidth + 1 || rect.left < -1) {
          offenders.push(`editor glyph ${JSON.stringify(node.data[i])} #${i} x=${Math.round(rect.left)}..${Math.round(rect.right)}`);
          break;
        }
      }
    }
    return {
      documentScrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      offenders: offenders.slice(0, 8),
    };
  }, expectedWidth);
}

async function assertNoOverflow(page, width, label) {
  const report = await overflowReport(page, width);
  assert.ok(report.documentScrollWidth <= width && report.bodyScrollWidth <= width && report.offenders.length === 0,
    `horizontal overflow at ${width}px (${label}): ${JSON.stringify(report)}`);
}

// ---------------------------------------------------------------- runner ---

const tests = [];
const test = (name, fn, contextOptions = {}) => tests.push({ name, fn, contextOptions });

async function runTest(browser, { name, fn, contextOptions }) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: 'light', ...contextOptions });
  const seen = { pageErrors: [], consoleErrors: [], failedRequests: [], externalRequests: [], requests: [], responses: [] };
  // Anything that is not our own origin is blocked and recorded.
  await context.route(url => url.origin !== ORIGIN, route => {
    seen.externalRequests.push(route.request().url());
    return route.abort();
  });
  const page = await context.newPage();
  page.setDefaultTimeout(10_000);
  page.on('pageerror', error => seen.pageErrors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') seen.consoleErrors.push(message.text()); });
  page.on('requestfailed', request => {
    if (request.url().startsWith(ORIGIN)) seen.failedRequests.push(`${request.url()} ${request.failure()?.errorText}`);
  });
  page.on('request', request => seen.requests.push(request.url()));
  page.on('response', response => seen.responses.push({
    url: response.url(), status: response.status(), type: response.headers()['content-type'] ?? '',
  }));
  try {
    await fn(page, { context, seen });
    assert.deepStrictEqual(seen.pageErrors, [], 'uncaught page errors');
    assert.deepStrictEqual(seen.consoleErrors, [], 'console errors');
    assert.deepStrictEqual(seen.externalRequests, [], 'external network requests');
    assert.deepStrictEqual(seen.failedRequests, [], 'failed local requests');
  } finally {
    await context.close();
  }
}

// ----------------------------------------------------------------- tests ---

test('initial state: content, toolbar defaults, nothing selected', async page => {
  await openApp(page);
  const state = await readState(page);
  assert.equal(state.text, INITIAL_TEXT);
  expectStyles(state);
  assert.deepStrictEqual(await readToolbar(page), {
    font: 'Inter', size: '52', sizePlaceholder: '52', bold: 'false', italic: 'false',
    textColor: '#18171C', background: 'None',
    status: '', count: `${INITIAL_TEXT.length} characters`,
  });
  assert.equal(await page.evaluate(() => document.activeElement === document.body), true, 'app must not steal focus on load');
  assert.equal(await page.getAttribute('#editor', 'contenteditable'), 'true');
  assert.equal(await page.evaluate(() => document.getElementById('text-color-picker').hidden && document.getElementById('background-color-picker').hidden), true);
});

test('SVG favicon is linked and served with the correct content type', async page => {
  await openApp(page);
  const icon = page.locator('link[rel="icon"]');
  assert.equal(await icon.getAttribute('href'), 'f.svg');
  assert.equal(await icon.getAttribute('type'), 'image/svg+xml');
  const response = await page.request.get(`${ORIGIN}/f.svg`);
  assert.equal(response.status(), 200);
  assert.match(response.headers()['content-type'], /^image\/svg\+xml\b/);
  assert.match(await response.text(), /<svg\b/);
});

test('branding and simplified page copy', async page => {
  await openApp(page);
  assert.equal(await page.title(), 'Font Journey');
  assert.equal(await page.locator('.brand').textContent(), 'Font Journey');
  assert.equal(await page.locator('h1').textContent(), 'Try a font, play with color, and see what feels right.');
  assert.equal(await page.locator('.intro-copy').textContent(), 'Every font here is open source and free for commercial use.');
  assert.equal(await page.locator('.brand-mark, .header-note, .eyebrow, .panel-title, .panel-caption, .control-help, .workspace-note').count(), 0);
  assert.equal(await page.locator('.site-footer').textContent(), 'Font sources & commercial-use licenses ↗');
  assert.equal((await readToolbar(page)).status, '');
  assert.equal(await page.locator('#editor').getAttribute('aria-describedby'), null);
});

for (const scheme of ['light', 'dark']) {
  test(`system theme ${scheme}: neutral accents, readable preview and color controls`, async page => {
    await openApp(page);
    const dark = scheme === 'dark';
    const colors = await page.evaluate(() => {
      const css = element => getComputedStyle(element);
      const editor = document.getElementById('editor');
      const selection = getComputedStyle(editor, '::selection');
      return {
        page: css(document.body).backgroundColor,
        surface: css(editor).backgroundColor,
        ink: css(editor.firstElementChild).color,
        accent: css(document.documentElement).getPropertyValue('--accent').trim(),
        selection: selection.backgroundColor,
        selectionInk: selection.color,
        link: css(document.querySelector('.site-footer a')).color,
      };
    });
    assert.deepStrictEqual(colors, dark ? {
      page: 'rgb(20, 20, 20)', surface: 'rgb(28, 28, 28)', ink: 'rgb(245, 245, 245)',
      accent: '#ffffff', selection: 'rgb(255, 255, 255)', selectionInk: 'rgb(20, 20, 20)', link: 'rgb(255, 255, 255)',
    } : {
      page: 'rgb(250, 248, 245)', surface: 'rgb(255, 255, 255)', ink: 'rgb(24, 23, 28)',
      accent: '#525252', selection: 'rgb(212, 212, 212)', selectionInk: 'rgb(24, 23, 28)', link: 'rgb(82, 82, 82)',
    });
    assert.equal((await readToolbar(page)).textColor, dark ? '#F5F5F5' : '#18171C');
    await page.click('#select-all-button');
    await page.click('#bold-button');
    await page.waitForFunction(expected => getComputedStyle(document.getElementById('bold-button')).borderColor === expected,
      dark ? 'rgb(255, 255, 255)' : 'rgb(82, 82, 82)');
    await setRgb(page, 'text', [100, 150, 200]);
    await setRgb(page, 'background', [200, 100, 50]);
    expectStyles(await readState(page), [[0, INITIAL_TEXT.length, {
      weight: '700', color: 'rgb(100, 150, 200)', bg: 'rgb(200, 100, 50)',
    }]]);
    await page.click('#reset-button');
    const reset = await readState(page);
    assert.equal(reset.text, INITIAL_TEXT);
    assert.ok(reset.chars.every(char => char.style.color === colors.ink && char.style.bg === 'rgba(0, 0, 0, 0)'));
    await page.setViewportSize({ width: 375, height: 800 });
    await assertNoOverflow(page, 375, `${scheme} theme`);
  }, { colorScheme: scheme });
}

test('system theme switches live without changing explicit preview colors or selection', async page => {
  await openApp(page);
  await select(page, ...BEST);
  // Explicitly choosing the light-mode default must not become theme-dependent.
  await setRgb(page, 'text', [24, 23, 28]);
  await setRgb(page, 'background', [230, 220, 20]);
  await select(page, ...BEST);
  for (const scheme of ['dark', 'light', 'dark']) {
    await page.emulateMedia({ colorScheme: scheme });
    await settle(page);
    const state = await readState(page);
    assert.equal(state.text, INITIAL_TEXT);
    state.chars.forEach((char, index) => {
      const explicit = index >= BEST[0] && index < BEST[1];
      assert.equal(char.style.color, explicit || scheme === 'light' ? 'rgb(24, 23, 28)' : 'rgb(245, 245, 245)');
      assert.equal(char.style.bg, explicit ? 'rgb(230, 220, 20)' : 'rgba(0, 0, 0, 0)');
    });
    assert.equal(await page.evaluate(() => getSelection().toString()), 'best');
  }
  await select(page, 0, 3);
  assert.equal((await readToolbar(page)).textColor, '#F5F5F5');
  await openPicker(page, 'text');
  assert.deepStrictEqual(await readRgb(page, 'text'), [245, 245, 245]);
  await page.emulateMedia({ colorScheme: 'light' });
  await settle(page);
  assert.equal((await readToolbar(page)).textColor, '#18171C');
  assert.deepStrictEqual(await readRgb(page, 'text'), [24, 23, 28]);
});

test('fonts: catalog is local, sample faces load, no external requests, works offline afterwards', async (page, { context, seen }) => {
  const manifest = JSON.parse(await readFile(path.join(root, 'assets', 'fonts', 'manifest.json'), 'utf8'));
  const expected = manifest.families.flatMap(family => family.files
    .filter(file => file.local.endsWith('.ttf'))
    .map(file => ({ family: family.name, style: file.style, weight: file.weight })));
  const loadSpec = (family, file) => {
    const [min, max] = file.weight.split(' ').map(Number);
    const weight = max == null ? min : (min <= 400 && 400 <= max ? 400 : min);
    return `${file.style === 'italic' ? 'italic ' : ''}${weight} 20px "${family.name}"`;
  };
  const originals = ['Inter', 'Lora', 'IBM Plex Mono'];
  const sampleFamilies = manifest.families.filter(family => originals.includes(family.name));
  const extra = manifest.families.find(family => !originals.includes(family.name));
  if (extra) sampleFamilies.push(extra);
  const specs = sampleFamilies.flatMap(family => family.files.filter(file => file.local.endsWith('.ttf')).map(file => loadSpec(family, file)));
  await openApp(page);
  const loaded = await page.evaluate(async ({ specs, expected }) => {
    const counts = {};
    for (const spec of specs) counts[spec] = (await document.fonts.load(spec, 'Hamburgefonstiv')).length;
    const faces = [...document.fonts].map(face => ({
      family: face.family.replaceAll('"', ''), style: face.style, weight: face.weight, status: face.status,
    }));
    const key = face => `${face.family}\0${face.style}\0${face.weight}`;
    const registered = new Set(faces.map(key));
    return {
      counts,
      faces,
      missing: expected.filter(face => !registered.has(key(face))).slice(0, 5),
      optionCount: document.querySelectorAll('#font-options [role="option"]').length,
    };
  }, { specs, expected });
  for (const spec of specs) assert.equal(loaded.counts[spec], 1, `exactly one @font-face should match ${spec}`);
  assert.equal(loaded.faces.length, expected.length, `expected ${expected.length} @font-face rules`);
  assert.deepEqual(loaded.missing, []);
  assert.equal(loaded.optionCount, manifest.families.length);
  assert.ok(loaded.faces.filter(face => originals.includes(face.family)).every(face => face.status === 'loaded'));
  const byFamily = family => loaded.faces.filter(face => face.family === family);
  assert.equal(byFamily('Inter').length, 2);
  assert.equal(byFamily('Lora').length, 2);
  assert.equal(byFamily('IBM Plex Mono').length, 4);

  const fontFiles = sampleFamilies.flatMap(family => family.files
    .filter(file => file.local.endsWith('.ttf'))
    .map(file => `/assets/fonts/${family.slug}/${file.local}`));
  const catalogFiles = new Set(manifest.families.flatMap(family => family.files
    .filter(file => file.local.endsWith('.ttf'))
    .map(file => `/assets/fonts/${family.slug}/${file.local}`)));
  for (const file of fontFiles) {
    const response = seen.responses.find(r => r.url === ORIGIN + file);
    assert.ok(response, `${file} was never requested`);
    assert.equal(response.status, 200, file);
    assert.match(response.type, /^font\/ttf/, `${file} content-type`);
  }
  // Only the app shell and bundled fonts may be requested at all.
  const allowed = new Set(['/', '/index.html', '/styles.css', '/app.js', '/model.js', '/color.js', '/f.svg']);
  for (const url of seen.requests) {
    if (url.startsWith('data:')) continue;
    assert.ok(url.startsWith(ORIGIN + '/'), `request left the origin: ${url}`);
    const pathname = new URL(url).pathname;
    assert.ok(allowed.has(pathname) || catalogFiles.has(pathname), `unexpected request: ${pathname}`);
  }

  // Cut the network entirely: formatting with every face must keep working.
  await context.setOffline(true);
  await select(page, 0, INITIAL_TEXT.length);
  await page.click('#bold-button');
  await page.click('#italic-button');
  for (const family of ['Lora', 'IBM Plex Mono', 'Inter']) {
    await chooseFont(page, family);
    const state = await readState(page);
    assert.ok(state.chars.every(c => c.style.font === family && c.style.weight === '700' && c.style.italic === 'italic'), `all text should be bold italic ${family}`);
    assert.equal(await page.evaluate(spec => document.fonts.check(spec), `italic 700 20px "${family}"`), true, `${family} bold italic available offline`);
  }
  assert.deepStrictEqual(seen.externalRequests, []);
});

async function chooseFont(page, family) {
  await page.click('#font-family');
  await page.getByRole('option', { name: family, exact: true }).click();
  await page.press('#font-family', 'Escape');
}

test('font picker previews highlights and stays open after choosing', async page => {
  await openApp(page);
  await select(page, 0, 4);
  const picker = page.locator('#font-family');
  const fonts = async () => (await readState(page)).chars.map(char => char.style.font);
  await picker.click();
  await page.getByRole('option', { name: 'Lora', exact: true }).hover();
  assert.deepEqual((await fonts()).slice(0, 5), ['Lora', 'Lora', 'Lora', 'Lora', 'Inter']);
  assert.equal(await picker.textContent(), 'Inter');
  await picker.press('ArrowDown');
  assert.equal((await fonts())[0], 'IBM Plex Mono');
  await picker.press('Enter');
  assert.equal(await picker.getAttribute('aria-expanded'), 'true');
  assert.equal(await picker.textContent(), 'IBM Plex Mono');
  await page.getByRole('option', { name: 'Lora', exact: true }).click();
  assert.equal(await picker.getAttribute('aria-expanded'), 'true');
  await picker.press('ArrowDown');
  assert.equal((await fonts())[0], 'IBM Plex Mono');
  await page.locator('#page-title').click();
  assert.equal(await picker.getAttribute('aria-expanded'), 'false');
  assert.equal((await fonts())[0], 'Lora');
  await page.press('#editor', 'Control+z');
  assert.equal((await fonts())[0], 'IBM Plex Mono');
  await picker.press('l');
  assert.equal((await fonts())[0], 'Lora');
  await picker.press('Escape');
  assert.equal((await fonts())[0], 'IBM Plex Mono');
});

test('partial selection via keyboard: font, size, bold, italic keep the selection', async page => {
  await openApp(page);
  await page.click('#editor', { position: { x: 6, y: 6 } });
  await page.keyboard.press('Control+Home');
  for (let i = 0; i < 4; i++) await page.keyboard.press('ArrowRight');
  for (let i = 0; i < 4; i++) await page.keyboard.press('Shift+ArrowRight');
  await settle(page);
  assert.equal((await readToolbar(page)).status, '4 characters selected');

  const [start, end] = BEST;
  const patches = [];

  await chooseFont(page, 'Lora');
  patches.push([start, end, { font: 'Lora' }]);
  expectStyles(await readState(page), patches);
  assert.equal((await readToolbar(page)).status, '4 characters selected', 'selection kept after font change');

  await page.fill('#font-size', '80');
  patches[0][2].size = '80px';
  expectStyles(await readState(page), patches);
  assert.equal((await readToolbar(page)).status, '4 characters selected', 'selection kept after size change');

  await page.click('#bold-button');
  patches[0][2].weight = '700';
  expectStyles(await readState(page), patches);
  assert.equal((await readToolbar(page)).bold, 'true');

  await page.click('#italic-button');
  patches[0][2].italic = 'italic';
  expectStyles(await readState(page), patches);
  assert.equal((await readToolbar(page)).italic, 'true');
  assert.equal((await readState(page)).text, INITIAL_TEXT, 'formatting must not change the text');
  assert.equal((await readToolbar(page)).status, '4 characters selected', 'selection kept after all toolbar clicks');

  // Toggle bold and italic off again.
  await page.click('#bold-button');
  await page.click('#italic-button');
  delete patches[0][2].weight;
  delete patches[0][2].italic;
  expectStyles(await readState(page), patches);
  assert.deepStrictEqual([(await readToolbar(page)).bold, (await readToolbar(page)).italic], ['false', 'false']);

  // The toolbar mirrors whatever is selected.
  await select(page, 0, 3);
  assert.deepStrictEqual(
    (({ font, size, bold }) => ({ font, size, bold }))(await readToolbar(page)),
    { font: 'Inter', size: '52', bold: 'false' });
  await select(page, 4, 8);
  assert.deepStrictEqual(
    (({ font, size }) => ({ font, size }))(await readToolbar(page)), { font: 'Lora', size: '80' });
  await select(page, 2, 6);
  const mixed = await readToolbar(page);
  assert.equal(mixed.font, '', 'font select is blank when the selection mixes fonts');
  assert.equal(mixed.size, '');
  assert.equal(mixed.sizePlaceholder, 'Mixed');
});

test('font size input rejects invalid values and recovers on blur', async page => {
  await openApp(page);
  await select(page, ...BEST);
  await page.fill('#font-size', '500'); // above max 200
  expectStyles(await readState(page));
  await page.fill('#font-size', '3'); // below min 8
  expectStyles(await readState(page));
  await page.fill('#font-size', '');
  await page.press('#font-size', 'Tab');
  await settle(page);
  assert.equal(await page.inputValue('#font-size'), '52', 'invalid size reverts to the current size on blur');
  expectStyles(await readState(page));
  await page.fill('#font-size', '200');
  expectStyles(await readState(page), [[4, 8, { size: '200px' }]]);
});

test('partial selection via mouse drag, then Ctrl+B / Ctrl+I shortcuts', async page => {
  await openApp(page);
  await page.locator('#editor').scrollIntoViewIfNeeded();
  const first = await charRect(page, 4);
  const last = await charRect(page, 7);
  const y = first.top + (first.bottom - first.top) / 2;
  await page.mouse.move(first.left + 1, y);
  await page.mouse.down();
  await page.mouse.move(last.right - 1, y, { steps: 8 });
  await page.mouse.up();
  await settle(page);
  assert.equal((await readToolbar(page)).status, '4 characters selected');
  await page.keyboard.press('Control+B');
  await page.keyboard.press('Control+I');
  expectStyles(await readState(page), [[4, 8, { weight: '700', italic: 'italic' }]]);
  assert.deepStrictEqual([(await readToolbar(page)).bold, (await readToolbar(page)).italic], ['true', 'true']);
  await page.keyboard.press('Control+B');
  expectStyles(await readState(page), [[4, 8, { italic: 'italic' }]]);
});

test('RGB text and background colors; typing digit by digit; clear background', async page => {
  await openApp(page);
  await select(page, ...BEST);

  await openPicker(page, 'text');
  assert.equal(await page.getAttribute('#text-color-toggle', 'aria-expanded'), 'true');
  assert.deepStrictEqual(await readRgb(page, 'text'), [24, 23, 28], 'RGB fields start at the selection color');
  await setRgb(page, 'text', [255, 0, 0]);
  expectStyles(await readState(page), [[4, 8, { color: 'rgb(255, 0, 0)' }]]);
  assert.equal((await readToolbar(page)).textColor, '#FF0000');
  assert.equal((await readToolbar(page)).status, '4 characters selected', 'selection kept after RGB entry');

  // Real keystrokes: the caret must not jump around while the field re-syncs.
  await page.focus('#text-g');
  await page.keyboard.press('Control+A');
  await page.keyboard.type('200');
  assert.equal(await page.inputValue('#text-g'), '200', 'digits typed into an RGB field stay in order');
  expectStyles(await readState(page), [[4, 8, { color: 'rgb(255, 200, 0)' }]]);

  // Invalid / partial values are ignored, not applied.
  await page.fill('#text-b', '300');
  expectStyles(await readState(page), [[4, 8, { color: 'rgb(255, 200, 0)' }]]);
  await page.fill('#text-b', '');
  expectStyles(await readState(page), [[4, 8, { color: 'rgb(255, 200, 0)' }]]);
  await page.fill('#text-b', '10');
  expectStyles(await readState(page), [[4, 8, { color: 'rgb(255, 200, 10)' }]]);

  // Background (highlight) is independent and also keeps the selection.
  await setRgb(page, 'background', [255, 235, 59]);
  assert.equal(await page.locator('#text-color-picker').isHidden(), true, 'opening one picker closes the other');
  expectStyles(await readState(page), [[4, 8, { color: 'rgb(255, 200, 10)', bg: 'rgb(255, 235, 59)' }]]);
  assert.equal((await readToolbar(page)).background, '#FFEB3B');
  assert.equal((await readToolbar(page)).status, '4 characters selected');

  // A second range with a different highlight; clearing affects only the selection.
  await select(page, 10, 14);
  await setRgb(page, 'background', [0, 255, 255]);
  await select(page, ...BEST);
  await page.click('#clear-background');
  expectStyles(await readState(page), [
    [4, 8, { color: 'rgb(255, 200, 10)' }],
    [10, 14, { bg: 'rgb(0, 255, 255)' }],
  ]);
  assert.equal((await readToolbar(page)).background, 'None');
  assert.equal((await readToolbar(page)).status, '4 characters selected');

  // Done closes the popover and returns focus to its toggle.
  await openPicker(page, 'background');
  await page.click('[data-close-picker="background"]');
  assert.equal(await page.locator('#background-color-picker').isHidden(), true);
  assert.equal(await page.evaluate(() => document.activeElement.id), 'background-color-toggle');
});

test('color wheel: pointer click/drag, keyboard, brightness, Escape', async page => {
  await openApp(page);
  await select(page, ...BEST);
  await openPicker(page, 'text');
  const wheel = page.locator('#text-wheel');

  // Default text color is almost black, so raise brightness first.
  await page.fill('#text-brightness', '100');
  await settle(page);
  const afterBrightness = await readRgb(page, 'text');
  assert.ok(Math.max(...afterBrightness) >= 254, `brightness 100 should reach full value, got ${afterBrightness}`);
  const state = await readState(page);
  assert.equal(state.chars[4].style.color, cssRgb(afterBrightness), 'editor color follows the RGB fields');

  await wheel.scrollIntoViewIfNeeded();
  const box = await wheel.boundingBox();
  const radius = 79 * (box.width / 168); // the drawn rim, in CSS pixels
  const cx = box.x + box.width / 2, cy = box.y + box.height / 2;

  // Pointer: half-way out along hue 0 -> light red.
  await page.mouse.click(cx + radius * 0.5, cy);
  await settle(page);
  assertNear(await readRgb(page, 'text'), [255, 128, 128], 3, 'wheel click at 50% saturation');
  expectStyles(await readState(page), [[4, 8, { color: cssRgb(await readRgb(page, 'text')) }]]);

  // Pointer: bottom edge = hue 90, full saturation -> chartreuse.
  await page.mouse.click(cx, cy + radius);
  await settle(page);
  assertNear(await readRgb(page, 'text'), [128, 255, 0], 6, 'wheel click at hue 90');
  assert.equal((await readToolbar(page)).status, '4 characters selected', 'wheel clicks keep the editor selection');

  // Pointer drag with capture: ending far outside the wheel clamps to the rim.
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.move(cx + radius * 0.5, cy, { steps: 4 });
  await page.mouse.move(box.x + box.width + 60, cy, { steps: 6 });
  await page.mouse.up();
  await settle(page);
  assertNear(await readRgb(page, 'text'), [255, 0, 0], 6, 'drag outside the wheel clamps to full saturation at hue 0');
  const afterDrag = await readRgb(page, 'text');
  await page.mouse.move(cx - radius * 0.5, cy, { steps: 4 }); // no button pressed: must not recolor
  await settle(page);
  assert.deepStrictEqual(await readRgb(page, 'text'), afterDrag, 'hovering without a pressed button changes nothing');

  // Keyboard on the focused canvas.
  const hue = () => wheel.getAttribute('aria-valuenow').then(Number);
  const circular = (a, b) => Math.min(Math.abs(a - b), 360 - Math.abs(a - b));
  const saturation = () => wheel.getAttribute('aria-valuetext').then(text => Number(/saturation (\d+) percent/.exec(text)[1]));
  await wheel.focus();
  const h0 = await hue();
  await page.keyboard.press('ArrowRight');
  assert.equal(circular(await hue(), h0 + 1), 0, 'ArrowRight is +1 degree');
  await page.keyboard.press('Shift+ArrowRight');
  assert.equal(circular(await hue(), h0 + 11), 0, 'Shift+ArrowRight is +10 degrees');
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowLeft');
  assert.equal(circular(await hue(), h0 + 9), 0, 'ArrowLeft is -1 degree');
  for (let i = 0; i < 20; i++) await page.keyboard.press('ArrowLeft'); // crosses 0 -> wraps
  assert.equal(circular(await hue(), h0 + 9 - 20), 0, 'hue wraps around 0/360');
  assert.equal(await saturation(), 100);
  await page.keyboard.press('ArrowDown');
  assert.equal(await saturation(), 99, 'ArrowDown is -1% saturation');
  await page.keyboard.press('Shift+ArrowDown');
  assert.equal(await saturation(), 89, 'Shift+ArrowDown is -10% saturation');
  await page.keyboard.press('ArrowUp');
  assert.equal(await saturation(), 90);
  for (let i = 0; i < 30; i++) await page.keyboard.press('ArrowUp');
  assert.equal(await saturation(), 100, 'saturation clamps at 100');
  assert.equal((await readState(page)).chars[4].style.color, cssRgb(await readRgb(page, 'text')), 'keyboard changes reach the text');
  assert.equal((await readToolbar(page)).status, '4 characters selected');
  // Arrow keys on the canvas must not edit or move the editor text.
  assert.equal((await readState(page)).text, INITIAL_TEXT);

  // Brightness slider halves the value channel.
  await page.fill('#text-brightness', '50');
  await settle(page);
  assert.ok(Math.max(...await readRgb(page, 'text')) >= 126 && Math.max(...await readRgb(page, 'text')) <= 129, 'brightness 50 => value ~128');
  expectStyles(await readState(page), [[4, 8, { color: cssRgb(await readRgb(page, 'text')) }]]);

  // Escape closes the popover and focuses its toggle.
  await wheel.focus();
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#text-color-picker').isHidden(), true);
  assert.equal(await page.evaluate(() => document.activeElement.id), 'text-color-toggle');
  assert.equal(await page.getAttribute('#text-color-toggle', 'aria-expanded'), 'false');

  // The highlight wheel is independent: it must not touch the text color.
  const textColor = (await readState(page)).chars[4].style.color;
  await openPicker(page, 'background');
  await page.focus('#background-wheel');
  await page.keyboard.press('ArrowUp');
  const state2 = await readState(page);
  assert.equal(state2.chars[4].style.color, textColor, 'highlight wheel leaves text color alone');
  assert.notEqual(state2.chars[4].style.bg, DEFAULT.bg, 'highlight wheel sets a highlight');
  assert.equal(state2.chars[0].style.bg, DEFAULT.bg, 'highlight only affects the selection');
});

test('collapsed caret: toolbar choices apply to the next letters only', async page => {
  await openApp(page);
  const base = INITIAL_TEXT.length;
  await clickEndOfLastLine(page);
  assert.equal((await readToolbar(page)).status, '');
  await page.click('#bold-button');
  await page.fill('#font-size', '30');
  await chooseFont(page, 'IBM Plex Mono');
  await setRgb(page, 'text', [200, 0, 0]);
  await setRgb(page, 'background', [255, 235, 59]);
  assert.equal((await readState(page)).text, INITIAL_TEXT, 'a collapsed caret changes no existing text');
  expectStyles(await readState(page));
  assert.equal((await readToolbar(page)).bold, 'true');

  await clickEndOfLastLine(page); // click back into the text, same caret position
  await page.keyboard.type(' Hello');
  const state = await readState(page);
  assert.equal(state.text, INITIAL_TEXT + ' Hello');
  expectStyles(state, [[base, base + 6, {
    font: 'IBM Plex Mono', size: '30px', weight: '700', color: 'rgb(200, 0, 0)', bg: 'rgb(255, 235, 59)',
  }]]);

  // Moving the caret elsewhere adopts the style found there.
  await page.keyboard.press('Control+Home');
  await page.keyboard.press('ArrowRight');
  await settle(page);
  assert.equal((await readToolbar(page)).bold, 'false');
  await page.keyboard.type('Q');
  const moved = await readState(page);
  assert.equal(moved.text, 'T' + 'Q' + INITIAL_TEXT.slice(1) + ' Hello');
  assert.deepStrictEqual(moved.chars[1].style, DEFAULT, 'text typed at the start uses the local style');
});

test('collapsed caret: keyboard shortcuts, inheritance, empty editor', async page => {
  await openApp(page);
  const base = INITIAL_TEXT.length;
  await page.click('#editor', { position: { x: 6, y: 6 } });
  await page.keyboard.press('Control+End');
  await page.keyboard.press('Control+B');
  await page.keyboard.type('AB');
  await page.keyboard.press('Control+B');
  await page.keyboard.type('cd');
  await page.keyboard.press('Control+I');
  await page.keyboard.type('ef');
  let state = await readState(page);
  assert.equal(state.text, INITIAL_TEXT + 'ABcdef');
  expectStyles(state, [[base, base + 2, { weight: '700' }], [base + 4, base + 6, { italic: 'italic' }]]);

  // Typing at a style boundary: before "b" uses the local (plain) style, after
  // a bold range inherits bold from the preceding character.
  await select(page, ...BEST);
  await page.keyboard.press('Control+B');
  await select(page, 4);
  await page.keyboard.type('Y');
  await select(page, 9); // just after the bold "best"
  await page.keyboard.type('X');
  state = await readState(page);
  assert.equal(state.text.slice(0, 12), 'The YbestX i');
  // "Y" is plain, "X" joined the bold word (5..10); the earlier AB / ef runs shifted right by 2.
  expectStyles(state, [[5, 10, { weight: '700' }], [base + 2, base + 4, { weight: '700' }], [base + 6, base + 8, { italic: 'italic' }]]);

  // Empty editor keeps the chosen pending format.
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Control+B'); // everything is mixed-bold -> becomes bold
  await page.keyboard.press('Backspace');
  state = await readState(page);
  assert.equal(state.text, '', 'select all + Backspace empties the editor');
  assert.equal((await readToolbar(page)).count, '0 characters');
  await page.keyboard.type('Hi');
  state = await readState(page);
  assert.equal(state.text, 'Hi');
  expectStyles(state, [[0, 2, { weight: '700' }]]);
});

test('multiline: Enter, Shift+Enter, trailing newlines, typing order, deletion', async page => {
  await openApp(page);
  await page.click('#editor', { position: { x: 6, y: 6 } });
  await page.keyboard.press('Control+End');
  await page.keyboard.press('Enter');
  let state = await readState(page);
  assert.equal(state.text, INITIAL_TEXT + '\n');
  await page.keyboard.type('Next line');
  state = await readState(page);
  assert.equal(state.text, INITIAL_TEXT + '\nNext line', 'typing after Enter lands on the new line, in order');
  const above = await charRect(page, INITIAL_TEXT.length - 1);
  const below = await charRect(page, INITIAL_TEXT.length + 1);
  assert.ok(below.top > above.top + 10, `new text must render on a new visual line (${above.top} vs ${below.top})`);

  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await page.keyboard.type('Z');
  state = await readState(page);
  assert.equal(state.text, INITIAL_TEXT + '\nNext line\n\nZ', 'consecutive Enters keep blank lines');
  const zIndex = state.text.length - 1;
  assert.ok((await charRect(page, zIndex)).top > (await charRect(page, zIndex - 3)).top + 10, 'Z is two lines below');

  await page.keyboard.press('Shift+Enter');
  await page.keyboard.type('S');
  assert.equal((await readState(page)).text, INITIAL_TEXT + '\nNext line\n\nZ\nS', 'Shift+Enter also breaks the line');

  // Enter in the middle splits the text exactly there.
  await select(page, 14);
  await page.keyboard.press('Enter');
  assert.equal((await readState(page)).text.slice(0, 24), 'The best ideas\n\nstart wi');
  await page.keyboard.press('Backspace');
  assert.equal((await readState(page)).text.slice(0, 22), 'The best ideas\nstart w');
  await page.keyboard.press('Delete');
  assert.equal((await readState(page)).text.slice(0, 21), 'The best ideasstart w', 'Delete removes the newline after the caret');

  // Typing in the middle keeps the caret after each character.
  await select(page, 4);
  await page.keyboard.type('XYZ');
  assert.equal((await readState(page)).text.slice(0, 12), 'The XYZbest ');
  // Replacing a selection.
  await select(page, 4, 7);
  await page.keyboard.type('Q');
  assert.equal((await readState(page)).text.slice(0, 10), 'The Qbest ');
  // Word deletion.
  await select(page, 10);
  await page.keyboard.press('Control+Backspace');
  assert.equal((await readState(page)).text.slice(0, 8), 'The idea', 'Ctrl+Backspace deletes the previous word');
  // Typed markup stays text.
  await select(page, 0);
  await page.keyboard.type('<b>x</b>');
  state = await readState(page);
  assert.ok(state.text.startsWith('<b>x</b>The idea'), state.text.slice(0, 20));
  assert.ok(state.tags.every(tag => tag === 'SPAN' || tag === 'BR'), `only spans/br allowed in the editor, got ${state.tags}`);

  // Native select all then typing replaces everything.
  await page.keyboard.press('Control+A');
  await page.keyboard.type('Z');
  assert.equal((await readState(page)).text, 'Z');
  assert.equal((await readToolbar(page)).count, '1 character');
});

test('paste escapes HTML (simulated clipboard); copy and cut use plain text', async page => {
  await openApp(page);
  const payload = '<img src=x onerror="window.__pwned=1"><script>window.__pwned=2</script><b>bold</b> & "q" é\r\nline2\rline3';
  const expected = payload.replace(/\r\n?/g, '\n');
  await select(page, ...BEST);
  const pasted = await clipboardEvent(page, 'paste', {
    'text/plain': payload,
    'text/html': '<img src=x onerror="window.__pwned=3"><b>html</b>',
  });
  assert.equal(pasted.cancelled, true, 'paste must be intercepted');
  let state = await readState(page);
  assert.equal(state.text, 'The ' + expected + INITIAL_TEXT.slice(8), 'plain text replaces the selection, markup is literal text');
  assert.ok(state.tags.every(tag => tag === 'SPAN' || tag === 'BR'), `no injected elements, got ${state.tags}`);
  assert.equal(await page.evaluate(() => window.__pwned), undefined, 'no injected script ran');
  assert.equal(await page.evaluate(() => document.querySelectorAll('#editor img, #editor script, #editor b').length), 0);
  assert.equal((await readToolbar(page)).count, `${state.text.length} characters`);

  // HTML-only clipboard pastes nothing harmful (empty plain text).
  const before = state.text;
  await select(page, 0);
  await clipboardEvent(page, 'paste', { 'text/html': '<b>only html</b>' });
  assert.equal((await readState(page)).text, before, 'html-only clipboard inserts nothing');

  // Copy / cut deliver the selected plain text and ignore collapsed selections.
  await select(page, 4, 7);
  const copied = await clipboardEvent(page, 'copy');
  assert.deepStrictEqual(copied, { cancelled: true, text: before.slice(4, 7) });
  assert.equal((await readState(page)).text, before, 'copy does not alter the text');
  const cut = await clipboardEvent(page, 'cut');
  assert.deepStrictEqual(cut, { cancelled: true, text: before.slice(4, 7) });
  assert.equal((await readState(page)).text, before.slice(0, 4) + before.slice(7), 'cut removes the selection');
  await select(page, 2);
  assert.equal((await clipboardEvent(page, 'copy')).cancelled, false, 'collapsed copy is left to the browser');

  // Drop is disabled.
  const dropCancelled = await page.evaluate(() => {
    const data = new DataTransfer();
    data.setData('text/plain', 'dropped');
    return !document.getElementById('editor').dispatchEvent(new DragEvent('drop', { dataTransfer: data, bubbles: true, cancelable: true }));
  });
  assert.equal(dropCancelled, true);
  assert.ok(!(await readState(page)).text.includes('dropped'));
});

test('undo / redo for formatting and typing', async page => {
  await openApp(page);
  await select(page, ...BEST);
  await page.click('#bold-button');
  await chooseFont(page, 'Lora');
  expectStyles(await readState(page), [[4, 8, { weight: '700', font: 'Lora' }]]);
  await page.evaluate(() => document.getElementById('editor').focus());

  await page.keyboard.press('Control+Z');
  expectStyles(await readState(page), [[4, 8, { weight: '700' }]]);
  await page.keyboard.press('Control+Z');
  expectStyles(await readState(page));
  assert.equal((await readToolbar(page)).status, '4 characters selected', 'undo restores the selection too');
  await page.keyboard.press('Control+Z'); // nothing left: harmless
  expectStyles(await readState(page));

  await page.keyboard.press('Control+Y');
  expectStyles(await readState(page), [[4, 8, { weight: '700' }]]);
  await page.keyboard.press('Control+Shift+Z');
  expectStyles(await readState(page), [[4, 8, { weight: '700', font: 'Lora' }]]);
  await page.keyboard.press('Control+Y'); // nothing left
  expectStyles(await readState(page), [[4, 8, { weight: '700', font: 'Lora' }]]);

  // Typing: one undo step per inserted character; a new edit clears redo.
  await page.keyboard.press('Control+End');
  await page.keyboard.type('abc');
  assert.equal((await readState(page)).text, INITIAL_TEXT + 'abc');
  await page.keyboard.press('Control+Z');
  await page.keyboard.press('Control+Z');
  await page.keyboard.press('Control+Z');
  assert.equal((await readState(page)).text, INITIAL_TEXT);
  await page.keyboard.press('Control+Y');
  await page.keyboard.press('Control+Y');
  assert.equal((await readState(page)).text, INITIAL_TEXT + 'ab');
  await page.keyboard.type('Z');
  await page.keyboard.press('Control+Y');
  assert.equal((await readState(page)).text, INITIAL_TEXT + 'abZ', 'redo history is dropped after a new edit');
  // Undoing a deletion brings the text back.
  await page.keyboard.press('Backspace');
  assert.equal((await readState(page)).text, INITIAL_TEXT + 'ab');
  await page.keyboard.press('Control+Z');
  assert.equal((await readState(page)).text, INITIAL_TEXT + 'abZ');
});

test('reset formatting keeps the text, and can be undone', async page => {
  await openApp(page);
  await select(page, ...BEST);
  await chooseFont(page, 'IBM Plex Mono');
  await page.click('#bold-button');
  await setRgb(page, 'text', [0, 128, 255]);
  await setRgb(page, 'background', [250, 240, 100]);
  await select(page, 15, 20);
  await page.fill('#font-size', '90');
  await page.click('#italic-button');
  await page.click('#editor', { position: { x: 6, y: 6 } });
  await page.keyboard.press('Control+End');
  await page.keyboard.press('Enter');
  await page.keyboard.type('third fourth');
  const formatted = await readState(page);
  const text = formatted.text;
  assert.ok(text.endsWith('curiosity.\nthird fourth'));
  assert.ok(formatted.chars.some(c => c.style.font === 'IBM Plex Mono'));

  await page.click('#reset-button');
  const reset = await readState(page);
  assert.equal(reset.text, text, 'reset keeps every character, including newlines');
  expectStyles(reset);
  assert.deepStrictEqual((({ font, size, bold, italic, textColor, background }) => ({ font, size, bold, italic, textColor, background }))(await readToolbar(page)),
    { font: 'Inter', size: '52', bold: 'false', italic: 'false', textColor: '#18171C', background: 'None' });

  // New typing after reset is default-styled.
  await page.click('#editor', { position: { x: 6, y: 6 } });
  await page.keyboard.press('Control+End');
  await page.keyboard.type('!');
  const after = await readState(page);
  assert.equal(after.text, text + '!');
  expectStyles(after);

  // Reset is undoable: formatting returns.
  await page.keyboard.press('Control+Z'); // undo "!"
  await page.keyboard.press('Control+Z'); // undo reset
  const undone = await readState(page);
  assert.equal(undone.text, text);
  assert.ok(undone.chars.some(c => c.style.font === 'IBM Plex Mono' && c.style.weight === '700'), 'formatting restored by undo');
});

test('select all button and mixed-state toolbar', async page => {
  await openApp(page);
  const length = INITIAL_TEXT.length;
  await page.click('#select-all-button');
  await settle(page);
  assert.equal((await readToolbar(page)).status, `${length} characters selected`);
  assert.equal(await page.evaluate(() => getSelection().toString().replace(/\r/g, '')), INITIAL_TEXT);
  assert.equal(await page.evaluate(() => document.activeElement.id), 'editor', 'select all focuses the editor');

  await page.click('#bold-button');
  expectStyles(await readState(page), [[0, length, { weight: '700' }]]);
  assert.equal((await readToolbar(page)).bold, 'true');

  // Make parts differ, then select everything again.
  await select(page, ...BEST);
  await page.click('#italic-button');
  await select(page, 0, 3);
  await chooseFont(page, 'Lora');
  await page.fill('#font-size', '30');
  await setRgb(page, 'text', [10, 20, 30]);
  await page.click('#select-all-button');
  await settle(page);
  const mixed = await readToolbar(page);
  assert.equal(mixed.bold, 'true', 'bold is uniform');
  assert.equal(mixed.italic, 'mixed', 'italic is mixed');
  assert.equal(mixed.size, '');
  assert.equal(mixed.sizePlaceholder, 'Mixed');
  assert.equal(mixed.font, '');
  assert.equal(mixed.textColor, 'Mixed');
  await page.click('#italic-button'); // from mixed => everything italic
  assert.ok((await readState(page)).chars.every(c => c.style.italic === 'italic'));
  assert.equal((await readToolbar(page)).italic, 'true');
  await page.click('#italic-button');
  assert.ok((await readState(page)).chars.every(c => c.style.italic === 'normal'));
  assert.equal((await readState(page)).text, INITIAL_TEXT);
});

test('font and color select-all buttons share selection behavior', async page => {
  await openApp(page);
  assert.equal(await page.locator('[data-select-all]').count(), 2);
  assert.equal(await page.locator('.preview-toolbar [data-select-all]').count(), 0);
  assert.equal(await page.locator('#font-family').locator('xpath=../..').locator('[data-select-all]').count(), 1);
  assert.equal(await page.locator('.color-control').first().locator('[data-select-all]').count(), 1);
  for (const button of ['#select-all-button', '#select-all-color-button']) {
    await select(page, ...BEST);
    await page.click(button);
    await settle(page);
    assert.equal(await page.evaluate(() => getSelection().toString()), INITIAL_TEXT);
    assert.equal(await page.evaluate(() => document.activeElement.id), 'editor');
    assert.equal((await readToolbar(page)).status, `${INITIAL_TEXT.length} characters selected`);
  }
  await setRgb(page, 'text', [100, 50, 200]);
  expectStyles(await readState(page), [[0, INITIAL_TEXT.length, { color: 'rgb(100, 50, 200)' }]]);
});

for (const [width, mobile] of [[320, true], [375, true], [414, true], [768, false]]) {
  test(`${mobile ? 'mobile' : 'tablet'} ${width}px: no horizontal overflow`, async page => {
    await openApp(page);
    await assertNoOverflow(page, width, 'initial');

    // Touch / tap interactions.
    if (mobile) {
      await select(page, ...BEST);
      await page.tap('#bold-button');
      expectStyles(await readState(page), [[4, 8, { weight: '700' }]]);
      for (const button of ['#select-all-button', '#select-all-color-button']) {
        await select(page, ...BEST);
        await page.tap(button);
        await settle(page);
        assert.equal((await readToolbar(page)).status, `${INITIAL_TEXT.length} characters selected`);
      }
    }

    await page.click('#text-color-toggle');
    await page.click('#background-color-toggle');
    await openPicker(page, 'background');
    await assertNoOverflow(page, width, 'color picker open');
    await page.click('#text-color-toggle');
    await assertNoOverflow(page, width, 'text picker open');

    await select(page, 0, INITIAL_TEXT.length);
    await page.fill('#font-size', '200');
    await settle(page);
    await assertNoOverflow(page, width, '200px text');

    await select(page, 0, INITIAL_TEXT.length);
    await clipboardEvent(page, 'paste', { 'text/plain': 'W'.repeat(60) + ' ' + 'https://example.com/' + 'a'.repeat(80) });
    await settle(page);
    await assertNoOverflow(page, width, 'long unbreakable words');
    const editorBox = await page.locator('#editor').boundingBox();
    assert.ok(editorBox.x >= -1 && editorBox.x + editorBox.width <= width + 1, `editor stays within ${width}px: ${JSON.stringify(editorBox)}`);

    await chooseFont(page, 'IBM Plex Mono');
    await page.click('#bold-button');
    await settle(page);
    await assertNoOverflow(page, width, 'monospace bold long text');
  }, { viewport: { width, height: 800 }, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: mobile ? 2 : 1 });
}

// ------------------------------------------------------------------- main ---

const selected = tests.filter(t => !filter || t.name.toLowerCase().includes(filter.toLowerCase()));
if (!selected.length) {
  console.error(`No test matches "${filter}".`);
  process.exit(1);
}

const { child: server, ready } = externalUrl ? { child: null, ready: Promise.resolve() } : startServer();
let browser;
let failures = 0;
try {
  await ready;
  try {
    browser = await chromium.launch({ headless: process.env.HEADED !== '1' });
  } catch (error) {
    console.error(`Could not launch Chromium. Try: npx playwright install chromium\n${error.message}`);
    process.exitCode = 2;
    throw error;
  }
  for (const entry of selected) {
    const started = Date.now();
    try {
      await runTest(browser, entry);
      console.log(`PASS  ${entry.name} (${Date.now() - started} ms)`);
    } catch (error) {
      failures++;
      console.log(`FAIL  ${entry.name}`);
      console.log(String(error.stack ?? error).split('\n').map(line => '      ' + line).join('\n'));
    }
  }
  console.log(`\n${selected.length - failures}/${selected.length} browser checks passed`);
  if (failures) process.exitCode = 1;
} catch (error) {
  if (process.exitCode !== 2) { console.error(error.stack ?? error); process.exitCode = 1; }
} finally {
  await browser?.close().catch(() => {});
  if (server) await stopServer(server);
}
