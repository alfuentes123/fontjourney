import { DEFAULT_STYLE, FONTS, textOf, styleAt, normalize, formatRange, replaceRange, reconcileText, selectionStyle } from './model.js';
import { clamp, hexToRgb, rgbToHex, rgbToHsv, hsvToRgb } from './color.js';

const $ = id => document.getElementById(id);
const editor = $('editor');
// Keep the theme default separate from an explicitly chosen preview color.
const resolveColor = color => color === 'auto'
  ? getComputedStyle(document.documentElement).getPropertyValue('--ink-primary').trim() : color;
const initialText = 'The best ideas\nstart with a little\ncuriosity.';
let runs = normalize([{ text: initialText, style: DEFAULT_STYLE }]);
let saved = { start: 0, end: 0 };
let pending = { ...DEFAULT_STYLE };
let composing = false;
let undoStack = [];
let redoStack = [];
const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });

function snapshot() {
  return { runs: structuredClone(runs), saved: { ...saved }, pending: { ...pending } };
}
function remember() {
  undoStack.push(snapshot());
  if (undoStack.length > 150) undoStack.shift();
  redoStack = [];
}
function history(redo = false) {
  const source = redo ? redoStack : undoStack;
  const target = redo ? undoStack : redoStack;
  if (!source.length) return;
  target.push(snapshot());
  ({ runs, saved, pending } = source.pop());
  render(true);
}

function offsetAt(node, offset) {
  const range = document.createRange();
  range.selectNodeContents(editor);
  range.setEnd(node, offset);
  return range.toString().length;
}
function readSelection() {
  const selection = window.getSelection();
  if (!selection?.rangeCount || !editor.contains(selection.anchorNode) || !editor.contains(selection.focusNode)) return false;
  const anchor = offsetAt(selection.anchorNode, selection.anchorOffset);
  const focus = offsetAt(selection.focusNode, selection.focusOffset);
  const start = Math.min(anchor, focus), end = Math.max(anchor, focus);
  if (start !== saved.start || end !== saved.end) {
    saved = { start, end };
    pending = styleAt(runs, start === end && start > 0 ? start - 1 : start);
  }
  return true;
}
function pointAt(offset) {
  const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (offset <= node.length) return [node, offset];
    offset -= node.length;
  }
  return [editor, editor.childNodes.length];
}
function restoreSelection(focus = false) {
  const active = document.activeElement;
  if (focus) editor.focus({ preventScroll: true });
  const range = document.createRange();
  range.setStart(...pointAt(saved.start));
  range.setEnd(...pointAt(saved.end));
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  if (!focus && active && active !== editor && active !== document.body) active.focus({ preventScroll: true });
}
function render(focus = false, restore = true) {
  const fragment = document.createDocumentFragment();
  for (const run of runs) {
    const span = document.createElement('span');
    span.textContent = run.text;
    Object.assign(span.style, {
      fontFamily: `"${run.style.font}"`, fontSize: `${run.style.size}px`,
      fontWeight: run.style.bold ? '700' : '400', fontStyle: run.style.italic ? 'italic' : 'normal',
      color: run.style.color === 'auto' ? 'inherit' : run.style.color, backgroundColor: run.style.background,
    });
    fragment.append(span);
  }
  // A trailing line break keeps the final empty line reachable in contenteditable.
  if (!runs.length || textOf(runs).endsWith('\n')) fragment.append(document.createElement('br'));
  editor.replaceChildren(fragment);
  if (restore) restoreSelection(focus);
  updateToolbar();
}
function currentStyle() {
  return saved.start === saved.end ? pending : selectionStyle(runs, saved.start, saved.end);
}
function updateToolbar() {
  const style = currentStyle();
  if (document.activeElement !== $('font-family')) $('font-family').value = style.font ?? '';
  if (document.activeElement !== $('font-size')) $('font-size').value = style.size ?? '';
  $('font-size').placeholder = style.size === null ? 'Mixed' : '52';
  for (const key of ['bold', 'italic']) $(key + '-button').setAttribute('aria-pressed', style[key] === null ? 'mixed' : String(style[key]));
  for (const [name, key] of [['text', 'color'], ['background', 'background']]) {
    const color = resolveColor(style[key]);
    $(name + '-color-toggle').style.background = !color || color === 'transparent'
      ? 'repeating-conic-gradient(var(--checker-dark) 0% 25%, var(--checker-light) 0% 50%) 0 / 10px 10px' : color;
    $(name + '-color-value').textContent = color === null ? 'Mixed' : color === 'transparent' ? 'None' : color.toUpperCase();
    pickers[name]?.sync(color);
  }
  const count = [...textOf(runs)].length;
  $('character-count').textContent = `${count} character${count === 1 ? '' : 's'}`;
  const selected = [...textOf(runs).slice(saved.start, saved.end)].length;
  $('selection-status').textContent = selected ? `${selected} character${selected === 1 ? '' : 's'} selected` : '';
}
function apply(patch) {
  if (saved.start !== saved.end) {
    remember();
    runs = formatRange(runs, saved.start, saved.end, patch);
    pending = { ...pending, ...patch };
    render();
  } else {
    pending = { ...pending, ...patch };
    updateToolbar();
  }
}
function insert(text) {
  remember();
  runs = replaceRange(runs, saved.start, saved.end, text.replace(/\r\n?/g, '\n'), pending);
  const end = saved.start + text.replace(/\r\n?/g, '\n').length;
  saved = { start: end, end };
  render(true);
}
function deleteText(direction, word = false) {
  let { start, end } = saved;
  const text = textOf(runs);
  if (start === end) {
    const boundaries = [...segmenter.segment(text)].map(part => part.index);
    boundaries.push(text.length);
    if (direction < 0) start = boundaries.filter(index => index < start).at(-1) ?? 0;
    else end = boundaries.find(index => index > end) ?? text.length;
    if (word && direction < 0) start = saved.start - (text.slice(0, saved.start).match(/\S+\s*$/u)?.[0].length ?? 0);
    if (word && direction > 0) end = saved.end + (text.slice(saved.end).match(/^\s*\S+/u)?.[0].length ?? 0);
  }
  if (start === end) return;
  remember();
  runs = replaceRange(runs, start, end, '', pending);
  saved = { start, end: start };
  render(true);
}

const pickers = {};
function createPicker(name, key) {
  const popup = $(name + '-color-picker');
  const toggle = $(name + '-color-toggle');
  const canvas = $(name + '-wheel');
  const context = canvas.getContext('2d');
  const brightness = $(name + '-brightness');
  const inputs = ['r', 'g', 'b'].map(channel => $(name + '-' + channel));
  let hsv = { h: 0, s: 0, v: 1 };
  let lastValue;
  function draw() {
    const size = canvas.width, radius = size / 2 - 5, center = size / 2;
    const image = context.createImageData(size, size);
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const dx = x - center, dy = y - center, distance = Math.hypot(dx, dy);
      if (distance > radius) continue;
      const hue = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360;
      const rgb = hsvToRgb(hue, distance / radius, hsv.v);
      const offset = (y * size + x) * 4;
      image.data.set([...rgb, 255], offset);
    }
    context.putImageData(image, 0, 0);
    const angle = hsv.h * Math.PI / 180;
    context.beginPath();
    context.arc(center + Math.cos(angle) * hsv.s * radius, center + Math.sin(angle) * hsv.s * radius, 5, 0, Math.PI * 2);
    context.lineWidth = 2;
    context.strokeStyle = 'white'; context.stroke();
    context.beginPath();
    context.arc(center + Math.cos(angle) * hsv.s * radius, center + Math.sin(angle) * hsv.s * radius, 6.5, 0, Math.PI * 2);
    context.lineWidth = 1; context.strokeStyle = '#18171c'; context.stroke();
    canvas.setAttribute('aria-valuenow', String(Math.round(hsv.h)));
    canvas.setAttribute('aria-valuetext', `Hue ${Math.round(hsv.h)} degrees, saturation ${Math.round(hsv.s * 100)} percent, brightness ${Math.round(hsv.v * 100)} percent`);
  }
  function sync(value) {
    value = resolveColor(value);
    if (value === lastValue) return;
    lastValue = value;
    const rgb = hexToRgb(value && value !== 'transparent' ? value : '#ffffff');
    hsv = rgbToHsv(...rgb);
    inputs.forEach((input, index) => { if (document.activeElement !== input) input.value = rgb[index]; });
    brightness.value = Math.round(hsv.v * 100);
    if (!popup.hidden) draw();
  }
  function choose() {
    const color = rgbToHex(...hsvToRgb(hsv.h, hsv.s, hsv.v));
    // Preserve hue at zero brightness / saturation so the wheel remains navigable.
    lastValue = color;
    inputs.forEach((input, index) => { input.value = hexToRgb(color)[index]; });
    brightness.value = Math.round(hsv.v * 100);
    apply({ [key]: color });
    draw();
  }
  function close() { popup.hidden = true; toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', () => {
    const opening = popup.hidden;
    Object.values(pickers).forEach(picker => picker.close());
    popup.hidden = !opening;
    toggle.setAttribute('aria-expanded', String(opening));
    if (opening) { sync(currentStyle()[key]); draw(); }
  });
  inputs.forEach(input => input.addEventListener('input', () => {
    if (!inputs.every(field => field.value !== '' && field.validity.valid)) return;
    const rgb = inputs.map(field => Number(field.value));
    hsv = rgbToHsv(...rgb);
    apply({ [key]: rgbToHex(...rgb) });
    draw();
  }));
  brightness.addEventListener('input', () => { hsv.v = Number(brightness.value) / 100; choose(); });
  function fromPointer(event) {
    const bounds = canvas.getBoundingClientRect();
    const x = (event.clientX - bounds.left) * canvas.width / bounds.width - canvas.width / 2;
    const y = (event.clientY - bounds.top) * canvas.height / bounds.height - canvas.height / 2;
    hsv.h = (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
    hsv.s = clamp(Math.hypot(x, y) / (canvas.width / 2 - 5), 0, 1);
    choose();
  }
  canvas.addEventListener('pointerdown', event => {
    event.preventDefault(); canvas.focus({ preventScroll: true }); canvas.setPointerCapture(event.pointerId); fromPointer(event);
  });
  canvas.addEventListener('pointermove', event => { if (canvas.hasPointerCapture(event.pointerId)) fromPointer(event); });
  canvas.addEventListener('pointerup', event => { if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId); });
  canvas.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const step = event.shiftKey ? 10 : 1;
    if (event.key === 'ArrowLeft') hsv.h = (hsv.h - step + 360) % 360;
    if (event.key === 'ArrowRight') hsv.h = (hsv.h + step) % 360;
    if (event.key === 'ArrowUp') hsv.s = clamp(hsv.s + step / 100, 0, 1);
    if (event.key === 'ArrowDown') hsv.s = clamp(hsv.s - step / 100, 0, 1);
    choose();
  });
  popup.addEventListener('keydown', event => { if (event.key === 'Escape') { close(); toggle.focus(); } });
  document.querySelector(`[data-close-picker="${name}"]`).addEventListener('click', () => { close(); toggle.focus(); });
  return { sync, close };
}
pickers.text = createPicker('text', 'color');
pickers.background = createPicker('background', 'background');

$('font-family').addEventListener('change', event => { if (FONTS.includes(event.target.value)) apply({ font: event.target.value }); });
$('font-size').addEventListener('input', event => {
  const input = event.target;
  if (input.value && input.validity.valid) apply({ size: Number(input.value) });
});
$('font-size').addEventListener('change', () => {
  const input = $('font-size');
  if (!input.value || !input.validity.valid) { input.value = pending.size; updateToolbar(); }
});
for (const key of ['bold', 'italic']) $(key + '-button').addEventListener('click', () => apply({ [key]: currentStyle()[key] !== true }));
$('clear-background').addEventListener('click', () => apply({ background: 'transparent' }));
document.querySelectorAll('[data-select-all]').forEach(button => {
  button.addEventListener('click', () => {
    saved = { start: 0, end: textOf(runs).length };
    pending = styleAt(runs, 0);
    restoreSelection(true); updateToolbar();
  });
});
$('reset-button').addEventListener('click', () => {
  remember();
  runs = normalize([{ text: textOf(runs), style: DEFAULT_STYLE }]);
  pending = { ...DEFAULT_STYLE };
  render();
});
document.addEventListener('selectionchange', () => {
  if (!composing && readSelection()) updateToolbar();
});

editor.addEventListener('beforeinput', event => {
  if (composing || event.isComposing || !event.cancelable) return;
  readSelection();
  const type = event.inputType;
  if (type === 'insertText' || type === 'insertReplacementText') {
    event.preventDefault(); insert(event.data ?? '');
  } else if (type === 'insertParagraph' || type === 'insertLineBreak') {
    event.preventDefault(); insert('\n');
  } else if (type.startsWith('delete')) {
    // Cut is handled by the clipboard listener, including plain-text copying.
    if (type === 'deleteByCut') return;
    event.preventDefault(); deleteText(type.endsWith('Backward') ? -1 : 1, type.includes('Word'));
  } else if (type === 'historyUndo' || type === 'historyRedo') {
    event.preventDefault(); history(type === 'historyRedo');
  } else if (type.startsWith('format')) event.preventDefault();
});
function reconcileNativeEdit() {
  // Enter/paste are intercepted, so native composition edits contain only inline text.
  const next = editor.textContent;
  if (next === textOf(runs)) return;
  const selection = window.getSelection();
  const caret = selection?.focusNode && editor.contains(selection.focusNode)
    ? offsetAt(selection.focusNode, selection.focusOffset) : next.length;
  remember();
  runs = reconcileText(runs, next, pending);
  saved = { start: caret, end: caret };
  render(true);
}
editor.addEventListener('input', () => { if (!composing) reconcileNativeEdit(); });
editor.addEventListener('compositionstart', () => { readSelection(); composing = true; });
editor.addEventListener('compositionend', () => { composing = false; reconcileNativeEdit(); });
editor.addEventListener('paste', event => {
  event.preventDefault(); readSelection(); insert(event.clipboardData.getData('text/plain'));
});
editor.addEventListener('drop', event => { event.preventDefault(); });
editor.addEventListener('dragstart', event => { event.preventDefault(); });
editor.addEventListener('copy', event => {
  readSelection();
  if (saved.start === saved.end) return;
  event.preventDefault(); event.clipboardData.setData('text/plain', textOf(runs).slice(saved.start, saved.end));
});
editor.addEventListener('cut', event => {
  readSelection();
  if (saved.start === saved.end) return;
  event.preventDefault(); event.clipboardData.setData('text/plain', textOf(runs).slice(saved.start, saved.end)); deleteText(-1);
});
editor.addEventListener('keydown', event => {
  if (event.isComposing || composing || !(event.ctrlKey || event.metaKey) || event.altKey) return;
  const key = event.key.toLowerCase();
  if (key === 'b' || key === 'i') {
    event.preventDefault(); readSelection();
    const property = key === 'b' ? 'bold' : 'italic';
    apply({ [property]: currentStyle()[property] !== true });
  } else if (key === 'z' || key === 'y') {
    event.preventDefault(); history(key === 'y' || event.shiftKey);
  }
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateToolbar);

// Creating a DOM selection can focus a contenteditable even without focus().
render(false, false);
