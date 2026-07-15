<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="src/assets/ambystech-logo.svg" />
    <img src="src/assets/ambystech-logo-oscuro.svg" alt="Ambystech" width="240" />
  </picture>
</p>

# ambystech.io — Ambystech Open Source

The Ambystech open source projects site, built with [Astro](https://astro.build) and [Tailwind CSS 4](https://tailwindcss.com), deployed to GitHub Pages at [ambystech.io](https://ambystech.io).

It showcases the libraries and tools the Ambystech team publishes under MIT:

- [Ambystech.Elaris.UI](https://github.com/ambystechcom/Ambystech.Elaris.UI) — true-color terminal UI for .NET
- [Ambystech.Neo4j.Repository](https://github.com/ambystechcom/Ambystech.Neo4j.Repository) — generic repository pattern for Neo4j
- [AmbyKit](https://github.com/ambystechcom/AmbyKit) — spec-driven development for AI coding agents

## Development

```sh
npm install
npm run dev      # local dev server at localhost:4321
npm run build    # type-check and build to ./dist
npm run preview  # preview the production build
```

## Content

Projects are an Astro content collection: each one is a markdown file in `src/content/projects/` (schema in `src/content.config.ts`). The frontmatter drives the hero terminal, the project cards and the footer; the markdown body becomes the project's detail page at `/projects/<file-name>/`. To add a project, drop in a new `.md` file.

Site-wide constants (company name, legal name, contact email, corporate/social URLs) live in `src/data/site.json`.

The visual identity (palette, motion, card language) is shared with the [Ambystech corporate site](https://www.ambystech.com); design tokens are defined in the `@theme` block of `src/styles/global.css`.
