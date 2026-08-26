---
name: axo
repo: Axo
url: https://github.com/ambystechcom/Axo
language: TypeScript
registry: npm
packageName: "@ambystech/axo"
install: npx @ambystech/axo new my-talk
accent: bluetiful
terminalAbout: static slide decks
tagline: Slide decks that need no runtime
description: Write slides in MDX and components in .axo — Axo compiles the deck to plain HTML that opens off a USB stick with no wifi, no React and no hydration, and exports to PDF.
topics: [presentations, mdx, static-site]
order: 4
---

**A static deck framework.** Slides in `.mdx`, components in `.axo`, output is plain HTML with **no runtime** — no React, no hydration, no islands. A deck renders at a venue with no wifi, opens by double-click off a USB stick, and exports to PDF.

## Quick start

```bash
npx @ambystech/axo new my-talk --starter lightning --title "My talk"
cd my-talk && npm install && npm run dev
```

`axo new` with no flags asks what kind of deck you want, its title and visibility, and can install for you. It never blocks a script: with `--yes`, no TTY, or in CI it takes the defaults and says so.

## A deck is thin

```
my-talk/
  slides/          one .mdx per slide      ← what you edit
  components/      your .axo components    ← optional
  layouts/         your .axo layouts       ← optional
  css/deck.css     this deck's CSS
  assets/
  axo.config.mjs   title, visibility, footer
```

That's all. The compiler, the built-in components and layouts, the theme, Reveal, the fonts and Mermaid all live in `@ambystech/axo`. **`npm update @ambystech/axo` upgrades every deck you own** — which is the difference between a framework and a folder you copied.

## A slide

```mdx
---
layout: title
---

<Eyebrow>Ambystech · Lightning Talk</Eyebrow>

# AmbyKit

<Subtitle>Spec-Driven Development for AI coding assistants</Subtitle>

<Notes>
- Speaker notes. Not a script.
</Notes>
```

Components compose — you nest children, you don't pass data arrays:

```mdx
<Matrix columns={['Spec-Kit', 'OpenSpec', 'AmbyKit']}>
  <Row label="Install"           cells={['Python', 'npm', 'npm']} />
  <Row label="Everyone has this" cells={['✓', '✓', '✓']} tie />
  <Row label="Only we do this"   cells={['—', '—', '✓']} reveal />
</Matrix>
```

## A component

`.axo` is a frontmatter script that runs at compile time, then a template. **The filename is the component name.** Drop it in `components/`; there is no registration step.

```axo
---
const { name, price, featured } = Axo.props;
---

<div class:list={['step', featured && 'featured']}>
  <span class="n">{name}</span>
  <h4>{price}</h4>
  <p><slot /></p>
</div>
```

**A deck component named after a built-in overrides it.** Want a different `Matrix`? Put `Matrix.axo` in your deck. You never fork the framework, and everything else keeps upgrading.

**No `client:*`, no islands, no runtime** — by design. A `client:load` is a compile error. That's what keeps a deck working offline.

## Visibility is a guard, not a label

A footer that says CONFIDENTIAL doesn't stop anyone publishing a deck; it only documents the leak. `visibility` in `axo.config.mjs` is the thing that does:

| `visibility` | `axo build` | workflow | delivery |
|---|---|---|---|
| `public` | builds | deploys to Pages | public URL |
| `internal` | builds, warns | none | behind auth / handover |
| `confidential` | **refuses** (`--force` to override) | none | PDF only |

It fails closed: an unset visibility is treated as confidential. A non-public deck also gets a `noindex, nofollow, noarchive` robots tag, and no deploy workflow is written at all.

## Commands

| Command | Description |
|---|---|
| `axo new <dir>` | Scaffold a deck |
| `axo dev` | Compile, watch and live-reload |
| `axo build` | Static site in `dist/` (refuses if confidential) |
| `axo preview` | Serve `dist/` |
| `axo pdf [out]` | Export to PDF |
| `axo check` | Compile without writing a site |
| `axo ls` | List every component and layout |
| `axo doctor` | Check the deck and the toolchain |

Writing `.axo` in VS Code or Cursor? The editor extension in the repo gives you colour, completion and diagnostics.
