# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm install
npm run dev      # Astro dev server at http://localhost:4321
npm run build    # `astro check && astro build` → ./dist (this is what CI runs)
npm run preview  # serve the production build
```

There is no test or lint script; `astro check` (TypeScript + Astro diagnostics) inside `npm run build` is the only automated verification.

## Architecture

Static Astro 7 site (Tailwind CSS 4 via `@tailwindcss/vite`) for the Ambystech open source projects, deployed to GitHub Pages at ambystech.io. `.github/workflows/deploy.yml` builds and deploys on push to `main`.

- **Projects are a content collection**, not hardcoded. Each `src/content/projects/*.md` file is one project; its frontmatter (schema in `src/content.config.ts`) drives the hero terminal, project cards and footer, and its markdown body becomes the detail page at `/projects/<file-name>/` (`src/pages/projects/[id].astro`). Adding a project = adding a `.md` file. Frontmatter `icon` and `tile` are enums, and `icon` names must exist in `@ambystech/ui`'s icon set. Listings sort by `order` via `getProjects()` in `src/utils/projects.ts`, which also holds the registry-URL and language-pill helpers.
- **Shared design system:** header, footer, `CTABand`, `Icon`, design tokens and the `.container-site` / `.btn-*` / `.tag` / `.section-*` utilities come from `@ambystech/ui` (`github:ambystechcom/ambystech-ui`, pinned by tag in `package.json`), shared with the corporate site. Check there before adding a component here. `src/styles/global.css` imports its `theme.css` and adds an `@source` for `node_modules/@ambystech/ui/src` because Tailwind 4 doesn't scan `node_modules`. Upgrade with `npm i github:ambystechcom/ambystech-ui#vX.Y.Z`. The package is resolved over https so CI needs no SSH key; keep it that way.
- **Site-wide constants** (company/legal name, contact email, corporate and social URLs) are in `src/data/site.json`. `src/layouts/Layout.astro` handles SEO, canonical URLs and JSON-LD; OG images live in `public/og/`.

## Gotchas

- `astro.config.mjs` deliberately pins Astro 6 behaviors under Astro 7: `compressHTML: true` (templates rely on whitespace between inline elements) and `markdown.processor: unified()` (instead of the default Sätteri) so project pages render as before. Keep these in sync with the corporate site.
- `package.json` has a stray `"astro": "^7.3.5"` inside `scripts`; it is not a real script.
- Visual identity (palette, motion, card language) must stay aligned with the corporate site; tokens are defined in the shared package, not locally.
