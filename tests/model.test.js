import test from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_STYLE, normalize, textOf, styleAt, sliceRuns, formatRange, replaceRange, reconcileText, selectionStyle } from '../model.js';
const sample = () => normalize([{ text: 'Hello world', style: DEFAULT_STYLE }]);

test('normalize merges equal neighbors and drops empty runs without mutating input', () => {
  const input = [{ text: 'a', style: {} }, { text: '', style: {} }, { text: 'b', style: {} }];
  assert.deepEqual(normalize(input), [{ text: 'ab', style: DEFAULT_STYLE }]);
  assert.equal(input[0].text, 'a');
});
test('format just the selected substring, then combine matching styles', () => {
  const original = sample();
  const result = formatRange(original, 1, 5, { bold: true, color: '#ff0000' });
  assert.deepEqual(result.map(run => run.text), ['H', 'ello', ' world']);
  assert.equal(result[1].style.bold, true);
  assert.equal(result[0].style.bold, false);
  assert.equal(textOf(original), 'Hello world');
  assert.deepEqual(formatRange(result, 0, 11, DEFAULT_STYLE), original);
});
test('mixed styles are represented explicitly', () => {
  const runs = formatRange(sample(), 0, 5, { italic: true });
  assert.equal(selectionStyle(runs, 0, 11).italic, null);
  assert.equal(selectionStyle(runs, 0, 5).italic, true);
  assert.equal(selectionStyle(runs, 0, 11).font, 'Inter');
});
test('replacement crosses formatting boundaries and preserves unselected text', () => {
  const runs = formatRange(sample(), 2, 8, { size: 80 });
  const result = replaceRange(runs, 1, 10, 'X', { ...DEFAULT_STYLE, italic: true });
  assert.equal(textOf(result), 'HXd');
  assert.equal(result[1].style.italic, true);
  assert.equal(result[0].style.italic, false);
});
test('empty documents, multiline text, unicode and out-of-bounds ranges', () => {
  const runs = replaceRange([], 0, 0, 'A😀\nB');
  assert.equal(textOf(runs), 'A😀\nB');
  assert.equal(textOf(sliceRuns(runs, 1, 3)), '😀');
  assert.deepEqual(formatRange(runs, -5, 100, { bold: true }), [{ text: 'A😀\nB', style: { ...DEFAULT_STYLE, bold: true } }]);
  assert.deepEqual(replaceRange(runs, 0, 100, ''), []);
  assert.deepEqual(styleAt([], 0), DEFAULT_STYLE);
});
test('reconcile native input preserves formatting outside the changed text', () => {
  const runs = formatRange(sample(), 6, 11, { font: 'Lora' });
  const result = reconcileText(runs, 'Hello! world', { ...DEFAULT_STYLE, italic: true });
  assert.equal(textOf(result), 'Hello! world');
  assert.equal(result.at(-1).style.font, 'Lora');
  assert.equal(result.find(run => run.text === '!').style.italic, true);
});
test('automatic theme color stays distinct from an explicitly chosen matching color', () => {
  const runs = formatRange(sample(), 0, 5, { color: '#18171c' });
  assert.equal(runs.length, 2);
  assert.equal(runs[0].style.color, '#18171c');
  assert.equal(runs[1].style.color, 'auto');
  assert.equal(selectionStyle(runs, 0, 11).color, null);
  assert.deepEqual(formatRange(runs, 0, 11, DEFAULT_STYLE), sample());
});
test('collapsed formatting does not change existing runs', () => {
  assert.deepEqual(formatRange(sample(), 3, 3, { bold: true }), sample());
});
test('selection formatting retains unrelated styles in each run', () => {
  const runs = formatRange(sample(), 0, 5, { background: '#00ff00' });
  const result = formatRange(runs, 0, 11, { color: '#0000ff' });
  assert.equal(result[0].style.background, '#00ff00');
  assert.equal(result[1].style.background, 'transparent');
  assert.ok(result.every(run => run.style.color === '#0000ff'));
});
