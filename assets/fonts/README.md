# Bundled fonts

All fonts are self-hosted so the site makes no external font requests. Each
family is licensed under the **SIL Open Font License, Version 1.1 (OFL-1.1)**;
the full, unmodified license text for each family sits next to its font files
as `OFL.txt`.

## Layout

| Family | Files | Styles |
| --- | --- | --- |
| Inter | `inter/regular.ttf`, `inter/italic.ttf` | Variable weights 100–900; normal and italic |
| Lora | `lora/regular.ttf`, `lora/italic.ttf` | Variable weights 400–700; normal and italic |
| IBM Plex Mono | `ibm-plex-mono/regular.ttf`, `ibm-plex-mono/bold.ttf`, `ibm-plex-mono/italic.ttf`, `ibm-plex-mono/bold-italic.ttf` | Static weights 400 (regular) and 700 (bold); normal and italic |

Inter has `opsz` (optical size) and `wght` axes; Lora has a `wght` axis. When
declaring them in `@font-face`, use a weight range (for example
`font-weight: 100 900` for Inter, `400 700` for Lora) and the matching
`font-style`.

## Provenance

Every file was downloaded from the Google Fonts repository,
<https://github.com/google/fonts>, pinned to commit
`2fe1e8c6b137fb13041a7cfca6fdcd8a910ea4dc` (the `main` branch tip on
2026-11-02). Files were copied byte-for-byte and only renamed; they are
**not** modified, subset, or converted.

Base URL for the links below:
`https://raw.githubusercontent.com/google/fonts/2fe1e8c6b137fb13041a7cfca6fdcd8a910ea4dc/`

### Inter

- Copyright 2020 The Inter Project Authors (<https://github.com/rsms/inter>)
- `inter/regular.ttf`: `<base>ofl/inter/Inter%5Bopsz%2Cwght%5D.ttf`
- `inter/italic.ttf`: `<base>ofl/inter/Inter-Italic%5Bopsz%2Cwght%5D.ttf`
- `inter/OFL.txt`: `<base>ofl/inter/OFL.txt`

### Lora

- Copyright 2011 The Lora Project Authors (<https://github.com/cyrealtype/Lora-Cyrillic>), with Reserved Font Name "Lora"
- `lora/regular.ttf`: `<base>ofl/lora/Lora%5Bwght%5D.ttf`
- `lora/italic.ttf`: `<base>ofl/lora/Lora-Italic%5Bwght%5D.ttf`
- `lora/OFL.txt`: `<base>ofl/lora/OFL.txt`

### IBM Plex Mono

- Copyright 2017 IBM Corp. with Reserved Font Name "Plex"
- `ibm-plex-mono/regular.ttf`: `<base>ofl/ibmplexmono/IBMPlexMono-Regular.ttf`
- `ibm-plex-mono/bold.ttf`: `<base>ofl/ibmplexmono/IBMPlexMono-Bold.ttf`
- `ibm-plex-mono/italic.ttf`: `<base>ofl/ibmplexmono/IBMPlexMono-Italic.ttf`
- `ibm-plex-mono/bold-italic.ttf`: `<base>ofl/ibmplexmono/IBMPlexMono-BoldItalic.ttf`
- `ibm-plex-mono/OFL.txt`: `<base>ofl/ibmplexmono/OFL.txt`

## Checksums (SHA-256)

```
29160a80ff49ddcab2c97711247e08b1fab27a484a329ce8b813d820dc559031  inter/regular.ttf
acd98e64795781b2058f07b18475e0ecee2a0fe2b42a49e2f9e37d0d6bf66ce6  inter/italic.ttf
5b9321a4298cfeb6b34354164a1c3afc3db114569984c502b9b35d988fd58c57  inter/OFL.txt
822a6621ccbe8d97d20ac88c1c41f5615c9c2c202eaa75f272cd452aac6475a7  lora/regular.ttf
22d8d8854b53807aa664ca34f2031a9ed57a1d0dea296b8b96cdd3aad937a2b3  lora/italic.ttf
1d9a970809ac804b582a6ce7f0ebc4e7fefcbfd7ff6299cad35ee656a21be716  lora/OFL.txt
6a3412f058c7d8dfd9170c41e85ade48e5156ecb89356110ca57a0a27734af46  ibm-plex-mono/regular.ttf
ac27abd6450a64dd94467580a02fe6235156d5b92f2926ebbc8e7489df64e0be  ibm-plex-mono/bold.ttf
3362fc791b0652193328b862c1c5f23a789bc7288b1617fa63302f88689a2a34  ibm-plex-mono/italic.ttf
af4e05a761e98c1adf064c48a6352c9bec1a6ad70982cd2a544149323391f98e  ibm-plex-mono/bold-italic.ttf
7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da  ibm-plex-mono/OFL.txt
```

## Commercial use

These three families are released under OFL-1.1 (verified from the `OFL.txt`
files above, each headed "SIL OPEN FONT LICENSE Version 1.1 - 26 February
2007"). OFL-1.1 permits commercial use, including bundling the fonts with
software that is sold. Use is **subject to the bundled license terms**, notably:

- The font files may be used, studied, copied, and redistributed with this
  software; the copyright notice and `OFL.txt` must accompany them. Keep the
  `OFL.txt` files in this directory with the fonts.
- The font files may not be sold by themselves.
- Modified versions (subsetting, format conversion, editing outlines) must not
  use a Reserved Font Name ("Lora", "Plex") and must stay under the OFL.
- The names of the copyright holders and authors may not be used to endorse
  or promote a derivative product without their written permission.

This summary is not legal advice; the `OFL.txt` files are the authoritative
terms. Any font added later must be checked individually: not every open-source
or "free" font permits commercial use.
