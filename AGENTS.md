# Repository Guidelines

## Project Structure & Module Organization
- `index.html` is the single-page site with all content sections.
- `styles.css` contains the site styling (minified); site behavior is inline or minimal JS in `index.html`.
- Static assets live at repo root: `*.svg`, `*.png`, `favicon.*`, `site.webmanifest`, `sitemap.xml`.
- `compendium/` is the built static output of the policy compendium.
- `compendium-src/` is the Docusaurus source for the compendium (content, config, and build).

## Build, Test, and Development Commands
- `python -m http.server 8000`: serve the root site locally at `http://localhost:8000`.
- `cd compendium-src && npm install`: install compendium dependencies (first time).
- `cd compendium-src && npm start`: run the compendium dev server with live reload.
- `cd compendium-src && npm run build`: build the compendium static site into `compendium-src/build/`.

## Coding Style & Naming Conventions
- Keep edits minimal and consistent with existing formatting in `index.html`.
- `styles.css` is minified; avoid reformatting unless intentionally changing styles.
- Use clear, descriptive asset names similar to existing patterns (`noun-*.svg`, `guy_*.png`).
- Prefer semantic HTML and keep content updates in `index.html`.

## Testing Guidelines
- No automated tests are configured for the root site.
- For the compendium, validate by running `npm start` or `npm run build` in `compendium-src/` and checking for errors.

## Commit & Pull Request Guidelines
- Commit messages follow an imperative, sentence-case style (e.g., "Add Resources section", "Update poster slider text").
- PRs should include a short summary, list of key changes, and screenshots/GIFs for visual updates.
- If editing the compendium, note whether `compendium-src/build/` was regenerated.

## Configuration & Content Notes
- Domain and SEO artifacts live at the root (`CNAME`, `sitemap.xml`, `site.webmanifest`).
- Contact details and structured data are embedded in `index.html`; update both when making business info changes.
