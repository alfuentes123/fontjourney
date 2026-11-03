# Font Journey

A minimal font playground with selection formatting, RGB and color-wheel
controls. No runtime dependencies or build step.
Fonts are bundled locally, nothing is uploaded or saved.

## Run locally

Clone this repository and open its directory. With **Node.js 22+** installed, run:

```sh
npm start
```

Open **http://localhost:8080**. No `npm install` is needed.

## Docker

From the repository directory, with Docker and Compose installed:

```sh
docker compose up --build
```

Open **http://localhost:8080**. The container is accessible only from your
machine. Stop it with `Ctrl+C`, or use `docker compose down` if running detached.

## Tests

```sh
npm test
```

Optional browser tests require temporary Playwright tooling:

```sh
npm install --no-save --package-lock=false playwright
npx playwright install chromium
node tests/browser-check.mjs
```

## Fonts

Bundled fonts are free for commercial use under SIL OFL 1.1. Keep their
licenses when redistributing. See [font sources and licenses](assets/fonts/README.md)
for the font inventory and licensing details.

### Adding fonts

1. Verify the font is open source and free for commercial use. Add its files
   and full license to a new family directory in `assets/fonts/`.
2. Add `@font-face` rules in `styles.css` with the correct weights and styles.
3. Add the family to `FONTS` in `model.js` and the font selector in `index.html`.
4. Update the expected font faces and files in `tests/browser-check.mjs`, then
   run the unit and browser tests above.
5. Update `assets/fonts/README.md`: one table row per family, source URLs and
   pinned version, copyright/license details, and SHA-256 checksums. Keep all
   family-specific documentation there; this README needs no per-font updates.
