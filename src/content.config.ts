import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    /** Short display name, lowercase — rendered in the terminal and card headers */
    name: z.string(),
    /** Full repository name on GitHub */
    repo: z.string(),
    url: z.url(),
    language: z.string(),
    registry: z.enum(['NuGet', 'npm']),
    packageName: z.string(),
    install: z.string(),
    license: z.string().default('MIT'),
    /** Gradient tile behind the project icon (design-system accent tiles) */
    tile: z.enum(['blue', 'purple', 'fuchsia']),
    /** Icon name from @ambystech/ui (data/icons.ts) */
    icon: z.enum(['code', 'database', 'agent', 'laptop']),
    tagline: z.string(),
    description: z.string(),
    topics: z.array(z.string()),
    /** Position in listings, lowest first */
    order: z.number().default(99),
  }),
});

export const collections = { projects };
