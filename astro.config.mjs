import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ambystech.io',
  base: '/',
  // Astro 7 defaults to JSX whitespace rules, which drop the spaces between
  // inline elements the templates rely on; keep the v6 compression.
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    // Astro 7 defaults to the Sätteri processor; keep unified (remark/rehype)
    // so rendered project pages stay as they were. Same setting as corporate.
    processor: unified(),
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
