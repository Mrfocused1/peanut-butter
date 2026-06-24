# Nutri Nut

Premium marketing site for **Nutri Nut** — peanut butter made from 100% roasted peanuts. Built as a responsive, single-page experience that matches the desktop and mobile design references pixel-for-pixel.

## Stack

- **Vite + React** (plain CSS, no UI framework)
- Component-scoped CSS, mobile-first responsive layouts
- WebP imagery with transparent cut-outs; SVG icons and a hand-authored brush-stroke underline
- Distressed/grunge headline treatment via a CSS mask texture

## Sections

- **Hero** — distressed Archivo Black headline, hand-drawn brush underline, product jar, floating peanuts/leaves, in-viewport feature icons
- **Just One Ingredient** — top-down bowl with a rotating "Just One Ingredient" stamp
- **Why Nutri Nut** — OTHERS vs NUTRI NUT comparison table

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Verification tooling

`shot.mjs` and `measure.mjs` drive the system Chrome via `puppeteer-core` to capture
element/full-page screenshots and detect horizontal-overflow regressions:

```bash
node shot.mjs 390 out.png ".why" 844     # element screenshot at a given viewport
node measure.mjs 390                      # report any elements exceeding the viewport width
```
