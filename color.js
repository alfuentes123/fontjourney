export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(value => Math.round(clamp(value, 0, 255)).toString(16).padStart(2, '0')).join('');
}

export function hexToRgb(hex) {
  if (!/^#[0-9a-f]{6}$/i.test(hex)) throw new TypeError('Expected a six-digit hex color');
  return [1, 3, 5].map(offset => parseInt(hex.slice(offset, offset + 2), 16));
}

export function rgbToHsv(r, g, b) {
  [r, g, b] = [r, g, b].map(value => clamp(value, 0, 255) / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b), delta = max - min;
  let h = 0;
  if (delta) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h = (h * 60 + 360) % 360;
  }
  return { h, s: max === 0 ? 0 : delta / max, v: max };
}

export function hsvToRgb(h, s, v) {
  h = ((h % 360) + 360) % 360;
  s = clamp(s, 0, 1); v = clamp(v, 0, 1);
  const chroma = v * s, x = chroma * (1 - Math.abs((h / 60) % 2 - 1)), m = v - chroma;
  const sector = Math.floor(h / 60);
  const rgb = [[chroma, x, 0], [x, chroma, 0], [0, chroma, x], [0, x, chroma], [x, 0, chroma], [chroma, 0, x]][sector];
  return rgb.map(value => Math.round((value + m) * 255));
}
