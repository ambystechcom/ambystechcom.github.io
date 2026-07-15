import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    /** Short display name, lowercase — rendered in the terminal and card headers */
    name: z.string(),
    /** Full repository name on GitHub */
    repo: z.string(),
    url: z.string().url(),
    language: z.string(),
    registry: z.enum(['NuGet', 'npm']),
    packageName: z.string(),
    install: z.string(),
    license: z.string().default('MIT'),
    accent: z.enum(['fuchsia', 'sky', 'orchid']),
    /** Very short label for the hero terminal's ABOUT column */
    terminalAbout: z.string(),
    tagline: z.string(),
    description: z.string(),
    topics: z.array(z.string()),
    /** Position in listings, lowest first */
    order: z.number().default(99),
  }),
});

export const collections = { projects };
