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

520 font families are bundled with this project. Every one is
open source and free for commercial use under the SIL Open Font License 1.1.
Fonts are stored in the repository and the site makes no external font requests.
Keep the license files when redistributing the fonts.
See [font sources and licenses](assets/fonts/README.md)
for the inventory, the pinned source commit, and SHA-256 checksums.

### Adding fonts

1. Verify the font is open source and free for commercial use. Add its files
   and full license to a new family directory in `assets/fonts/`.
2. Add `@font-face` rules in `styles.css` with the correct weights and styles.
   Sources must stay relative to this site; do not point at a font CDN.
3. Add the family to `FONTS` in `model.js`. The picker uses this list directly.
4. Update `assets/fonts/manifest.json` with the source paths, file hashes, and
   face descriptors. The unit and browser checks use this manifest.
5. Run `npm test`. The optional browser check is described above.
6. Update `assets/fonts/README.md`: one table row per family, source URLs and
   pinned version, copyright/license details, and SHA-256 checksums.
