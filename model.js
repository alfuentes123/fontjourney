export const DEFAULT_STYLE = Object.freeze({
  font: 'Inter', size: 52, bold: false, italic: false,
  color: 'auto', background: 'transparent',
});
export const FONTS = Object.freeze(['Inter', 'Lora', 'IBM Plex Mono']);
const keys = Object.keys(DEFAULT_STYLE);
const sameStyle = (a, b) => keys.every(key => a[key] === b[key]);
export const textOf = runs => runs.map(run => run.text).join('');

export function normalize(runs) {
  const result = [];
  for (const run of runs) {
    if (!run.text) continue;
    const style = { ...DEFAULT_STYLE, ...run.style };
    const previous = result.at(-1);
    if (previous && sameStyle(previous.style, style)) previous.text += run.text;
    else result.push({ text: run.text, style });
  }
  return result;
}

export function styleAt(runs, offset) {
  let position = 0;
  for (const run of runs) {
    position += run.text.length;
    if (offset < position) return { ...run.style };
  }
  return { ...(runs.at(-1)?.style ?? DEFAULT_STYLE) };
}

export function sliceRuns(runs, start, end) {
  let position = 0;
  const result = [];
  for (const run of runs) {
    const from = Math.max(0, start - position);
    const to = Math.min(run.text.length, end - position);
    if (from < to) result.push({ text: run.text.slice(from, to), style: { ...run.style } });
    position += run.text.length;
  }
  return result;
}

export function formatRange(runs, start, end, patch) {
  const length = textOf(runs).length;
  start = Math.max(0, Math.min(length, start));
  end = Math.max(start, Math.min(length, end));
  return normalize([
    ...sliceRuns(runs, 0, start),
    ...sliceRuns(runs, start, end).map(run => ({ ...run, style: { ...run.style, ...patch } })),
    ...sliceRuns(runs, end, length),
  ]);
}

export function replaceRange(runs, start, end, text, style = styleAt(runs, start)) {
  const length = textOf(runs).length;
  start = Math.max(0, Math.min(length, start));
  end = Math.max(start, Math.min(length, end));
  return normalize([
    ...sliceRuns(runs, 0, start),
    { text, style },
    ...sliceRuns(runs, end, length),
  ]);
}

// Native composition edits can change the DOM in one step; preserve all untouched runs.
export function reconcileText(runs, nextText, style) {
  const previous = textOf(runs);
  let start = 0;
  while (start < previous.length && start < nextText.length && previous[start] === nextText[start]) start++;
  let oldEnd = previous.length;
  let newEnd = nextText.length;
  while (oldEnd > start && newEnd > start && previous[oldEnd - 1] === nextText[newEnd - 1]) {
    oldEnd--; newEnd--;
  }
  return replaceRange(runs, start, oldEnd, nextText.slice(start, newEnd), style);
}

export function selectionStyle(runs, start, end) {
  const selected = start === end ? [{ style: styleAt(runs, start) }] : sliceRuns(runs, start, end);
  const first = selected[0]?.style ?? DEFAULT_STYLE;
  return Object.fromEntries(keys.map(key => [key,
    selected.every(run => run.style[key] === first[key]) ? first[key] : null,
  ]));
}
