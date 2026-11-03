import test from 'node:test';
import assert from 'node:assert/strict';
import { rgbToHex, hexToRgb, rgbToHsv, hsvToRgb, clamp } from '../color.js';

test('RGB hex conversion, bounds, and case', () => {
  assert.equal(rgbToHex(255, 0, 16), '#ff0010');
  assert.equal(rgbToHex(-1, 256, 0.5), '#00ff01');
  assert.deepEqual(hexToRgb('#AAbbCC'), [170, 187, 204]);
  assert.throws(() => hexToRgb('red'), TypeError);
  assert.throws(() => hexToRgb('#fff'), TypeError);
  assert.equal(clamp(4, 0, 1), 1);
});
test('HSV primary colors and achromatic colors', () => {
  assert.deepEqual(hsvToRgb(0, 1, 1), [255, 0, 0]);
  assert.deepEqual(hsvToRgb(120, 1, 1), [0, 255, 0]);
  assert.deepEqual(hsvToRgb(240, 1, 1), [0, 0, 255]);
  assert.deepEqual(hsvToRgb(360, 1, 1), [255, 0, 0]);
  assert.deepEqual(hsvToRgb(-120, 1, 1), [0, 0, 255]);
  assert.deepEqual(rgbToHsv(0, 0, 0), { h: 0, s: 0, v: 0 });
  assert.deepEqual(rgbToHsv(255, 255, 255), { h: 0, s: 0, v: 1 });
});
test('RGB HSV round trips across the gamut to within one channel step', () => {
  for (let r = 0; r <= 255; r += 17) for (let g = 0; g <= 255; g += 17) for (let b = 0; b <= 255; b += 17) {
    const { h, s, v } = rgbToHsv(r, g, b);
    const actual = hsvToRgb(h, s, v);
    [r, g, b].forEach((channel, index) => assert.ok(Math.abs(channel - actual[index]) <= 1));
  }
});
