# anuta — portfolio

A simple, editorial one-page portfolio. No WordPress or external links; all media lives in `assets/`.

## Tech

- **HTML** — structure
- **CSS** — styling (poster-inspired palette, fluid layout)
- **JavaScript** — scroll reveal (elements appear as you scroll)

No build tools, no npm.

## Run locally

- **Option 1:** Double-click `index.html` in Finder.
- **Option 2:** From the project folder: `python3 -m http.server 8000` then open http://localhost:8000
- **Option 3:** In Cursor/VS Code, use the “Live Server” extension and open `index.html` with it.

## Media (no WordPress refs)

Put your own files in `assets/`:

- **assets/video/hero.mp4** — hero background video
- **assets/images/** — `hero-poster.jpg`, `about.jpg`, `mother-mays.jpg`, `heathers.jpg`
- **assets/resume.pdf** — linked from About

See `assets/README.md` for the full list. Until you add these, the hero uses the background colour and image placeholders may show as broken; add your files and they’ll load.

## Customize

- **Content** — `index.html` (text, paths)
- **Look** — `styles.css` (colours, fonts, spacing)
- **Paths** — Nav is path-style: `anuta/home`, `anuta/projects`, `anuta/contact` (anchors on one page)

## Deploy

Upload the project folder to Netlify, Vercel, or GitHub Pages (no build step).
