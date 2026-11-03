import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FONTS } from '../model.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fontsDir = path.join(root, 'assets', 'fonts');
const PIN = '2fe1e8c6b137fb13041a7cfca6fdcd8a910ea4dc';
const OFL_BODY_SHA256 = '0339f4642e8741dea4841c236d258f360ffbe6e2cd3d032fbd0c10d1de8f58d1';
const NAME_RE = /^[A-Za-z0-9][A-Za-z0-9 .'+-]{0,60}$/;
const LOCAL_RE = /^(?:regular|bold|italic|bold-italic)\.ttf$|^OFL\.txt$/;
const PINNED_EXISTING = {
  'inter/regular.ttf': '29160a80ff49ddcab2c97711247e08b1fab27a484a329ce8b813d820dc559031',
  'inter/italic.ttf': 'acd98e64795781b2058f07b18475e0ecee2a0fe2b42a49e2f9e37d0d6bf66ce6',
  'inter/OFL.txt': '5b9321a4298cfeb6b34354164a1c3afc3db114569984c502b9b35d988fd58c57',
  'lora/regular.ttf': '822a6621ccbe8d97d20ac88c1c41f5615c9c2c202eaa75f272cd452aac6475a7',
  'lora/italic.ttf': '22d8d8854b53807aa664ca34f2031a9ed57a1d0dea296b8b96cdd3aad937a2b3',
  'lora/OFL.txt': '1d9a970809ac804b582a6ce7f0ebc4e7fefcbfd7ff6299cad35ee656a21be716',
  'ibm-plex-mono/regular.ttf': '6a3412f058c7d8dfd9170c41e85ade48e5156ecb89356110ca57a0a27734af46',
  'ibm-plex-mono/bold.ttf': 'ac27abd6450a64dd94467580a02fe6235156d5b92f2926ebbc8e7489df64e0be',
  'ibm-plex-mono/italic.ttf': '3362fc791b0652193328b862c1c5f23a789bc7288b1617fa63302f88689a2a34',
  'ibm-plex-mono/bold-italic.ttf': 'af4e05a761e98c1adf064c48a6352c9bec1a6ad70982cd2a544149323391f98e',
  'ibm-plex-mono/OFL.txt': '7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da',
};

function sha256(buf) {
  return createHash('sha256').update(buf).digest('hex');
}

function licenseWords(text) {
  const norm = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const marker = 'SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007';
  const at = norm.indexOf(marker);
  if (at < 0 || !norm.includes('This Font Software is licensed under the SIL Open Font License, Version 1.1.')) return null;
  return norm.slice(at).replace(/\s+/g, ' ').trim();
}

function utf16be(buf, start, end) {
  const swapped = Buffer.alloc(end - start);
  for (let i = 0; i < swapped.length; i += 2) {
    swapped[i] = buf[start + i + 1];
    swapped[i + 1] = buf[start + i];
  }
  return swapped.toString('utf16le');
}

function familyName(buf) {
  assert.ok(buf.length >= 12 && buf.length <= 2_500_000);
  assert.notEqual(buf.subarray(0, 2).toString('latin1'), 'MZ');
  const sig = buf.readUInt32BE(0);
  assert.ok(sig === 0x00010000 || sig === 0x74727565, 'TrueType signature');
  const numTables = buf.readUInt16BE(4);
  assert.ok(numTables >= 5 && numTables <= 64);
  assert.ok(12 + numTables * 16 <= buf.length);
  let name = null;
  const tags = new Set();
  for (let i = 0; i < numTables; i++) {
    const at = 12 + i * 16;
    const tag = buf.toString('latin1', at, at + 4);
    assert.match(tag, /^[\x20-\x7e]{4}$/);
    const offset = buf.readUInt32BE(at + 8);
    const length = buf.readUInt32BE(at + 12);
    assert.ok(offset <= buf.length && length <= buf.length - offset, tag);
    assert.equal(tags.has(tag), false);
    tags.add(tag);
    if (tag === 'name') name = { offset, length };
  }
  assert.ok(tags.has('name') && tags.has('head') && tags.has('cmap') && tags.has('OS/2'));
  assert.ok(tags.has('glyf') || tags.has('CFF ') || tags.has('CFF2'));
  assert.ok(name && name.length >= 6);
  const count = buf.readUInt16BE(name.offset + 2);
  const stringOffset = buf.readUInt16BE(name.offset + 4);
  assert.ok(count >= 1 && count <= 400 && 6 + count * 12 <= name.length);
  let family = '';
  let rank = -1;
  for (let i = 0; i < count; i++) {
    const rec = name.offset + 6 + i * 12;
    const platform = buf.readUInt16BE(rec);
    const encoding = buf.readUInt16BE(rec + 2);
    const language = buf.readUInt16BE(rec + 4);
    const nameId = buf.readUInt16BE(rec + 6);
    const length = buf.readUInt16BE(rec + 8);
    const offset = buf.readUInt16BE(rec + 10);
    assert.ok(stringOffset + offset + length <= name.length);
    if (nameId !== 16 && nameId !== 1) continue;
    if (!((platform === 3 || platform === 0) && (encoding === 1 || encoding === 10) && length % 2 === 0)) continue;
    const text = utf16be(buf, name.offset + stringOffset + offset, name.offset + stringOffset + offset + length).replace(/\0/g, '').trim();
    const next = platform === 3 && language === 0x409 ? 3 : 2;
    const idRank = nameId === 16 ? 10 : 0;
    if (idRank + next > rank && text) {
      family = text;
      rank = idRank + next;
    }
  }
  return family;
}

const manifest = JSON.parse(await readFile(path.join(fontsDir, 'manifest.json'), 'utf8'));

test('catalog has at least 510 distinct commercially usable families', () => {
  assert.equal(manifest.version, 1);
  assert.equal(manifest.repository, 'https://github.com/google/fonts');
  assert.equal(manifest.commit, PIN);
  assert.equal(manifest.license, 'OFL-1.1');
  assert.equal(manifest.oflBodySha256, OFL_BODY_SHA256);
  assert.ok(manifest.families.length >= 510, `only ${manifest.families.length} families`);
  assert.equal(new Set(manifest.families.map(family => family.name)).size, manifest.families.length);
  assert.equal(new Set(manifest.families.map(family => family.slug)).size, manifest.families.length);
  assert.deepEqual(manifest.families.slice(0, 3).map(family => family.name), ['Inter', 'Lora', 'IBM Plex Mono']);
  for (const family of manifest.families) {
    assert.match(family.name, NAME_RE);
    assert.match(family.slug, /^[a-z0-9-]+$/);
    assert.match(family.directory, /^[a-z0-9]+$/);
    assert.ok(family.copyright.length > 0);
    assert.ok(family.copyright.every(line => line.startsWith('Copyright') && !/[`<>]/.test(line)));
    assert.ok(family.files.some(file => file.local === 'OFL.txt'));
    assert.ok(family.files.some(file => file.local === 'regular.ttf'));
    for (const file of family.files) {
      assert.match(file.local, LOCAL_RE);
      assert.match(file.sha256, /^[a-f0-9]{64}$/);
      assert.match(file.source, new RegExp(`^ofl/${family.directory}/`));
      assert.equal(file.source.includes('..'), false);
      assert.equal(file.source.includes('\\'), false);
      if (file.local.endsWith('.ttf')) {
        assert.ok(file.style === 'normal' || file.style === 'italic');
        assert.match(file.weight, /^\d{1,4}(?: \d{1,4})?$/);
      }
    }
  }
});

test('every bundled file matches its checksum, license, and font structure', async () => {
  const entries = await readdir(fontsDir, { withFileTypes: true });
  const rootFiles = entries.filter(entry => entry.isFile()).map(entry => entry.name).sort();
  assert.deepEqual(rootFiles, ['README.md', 'manifest.json']);
  const dirs = entries.filter(entry => entry.isDirectory()).map(entry => entry.name).sort();
  assert.deepEqual(dirs, manifest.families.map(family => family.slug).sort());
  for (const family of manifest.families) {
    const dir = path.join(fontsDir, family.slug);
    const names = (await readdir(dir)).sort();
    assert.deepEqual(names, family.files.map(file => file.local).sort());
    for (const file of family.files) {
      const rel = `${family.slug}/${file.local}`;
      const buf = await readFile(path.join(dir, file.local));
      assert.equal(sha256(buf), file.sha256, rel);
      assert.equal(buf.length, file.bytes, rel);
      if (PINNED_EXISTING[rel]) assert.equal(file.sha256, PINNED_EXISTING[rel], rel);
      if (file.local === 'OFL.txt') {
        const text = buf.toString('utf8');
        assert.equal(text.includes('\0'), false, rel);
        assert.equal(sha256(Buffer.from(licenseWords(text))), OFL_BODY_SHA256, rel);
        assert.ok(text.includes('This Font Software is licensed under the SIL Open Font License, Version 1.1.'), rel);
      } else {
        assert.equal(familyName(buf), family.name, rel);
      }
    }
  }
});

test('app wiring stays local and matches the catalog', async () => {
  assert.deepEqual([...FONTS], manifest.families.map(family => family.name));
  const html = await readFile(path.join(root, 'index.html'), 'utf8');
  const options = [...html.matchAll(/<option>([^<]*)<\/option>/g)].map(match => match[1]);
  assert.deepEqual(options, manifest.families.map(family => family.name));
  const css = await readFile(path.join(root, 'styles.css'), 'utf8');
  assert.equal(css.includes('http://'), false);
  assert.equal(css.includes('https://'), false);
  const faces = [...css.matchAll(/@font-face\s*\{[^}]+\}/g)].map(match => {
    const family = match[0].match(/font-family:\s*"([^"]+)"/)?.[1];
    const src = match[0].match(/src:\s*url\("([^"]+)"\) format\("truetype"\)/)?.[1];
    const weight = match[0].match(/font-weight:\s*([^;]+);/)?.[1];
    const style = match[0].match(/font-style:\s*(normal|italic);/)?.[1];
    return { family, src, weight, style };
  });
  const expected = manifest.families.flatMap(family => family.files.filter(file => file.local.endsWith('.ttf')).map(file => ({
    family: family.name,
    src: `assets/fonts/${family.slug}/${file.local}`,
    weight: file.weight,
    style: file.style,
  })));
  assert.deepEqual(faces, expected);
  const readme = await readFile(path.join(fontsDir, 'README.md'), 'utf8');
  assert.ok(readme.includes(PIN));
  assert.ok(readme.includes(OFL_BODY_SHA256));
  assert.equal(readme.includes('fonts.gstatic.com'), false);
  assert.equal(readme.includes('fonts.googleapis.com'), false);
  for (const family of manifest.families) {
    assert.ok(readme.includes(`### ${family.name}`), family.name);
    for (const file of family.files) assert.ok(readme.includes(file.sha256), file.sha256);
  }
  const rootReadme = await readFile(path.join(root, 'README.md'), 'utf8');
  assert.match(rootReadme, new RegExp(`${manifest.families.length} font families`));
  assert.match(rootReadme, /SIL Open Font License 1\.1/);
  const server = await readFile(path.join(root, 'server.js'), 'utf8');
  assert.match(server, /startsWith\('\/assets\/fonts\/'\)/);
  assert.match(server, /includes\('\.\.'\)/);
});
