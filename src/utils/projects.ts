import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;
export type ProjectData = ProjectEntry['data'];

/** All projects, sorted by their frontmatter `order` */
export async function getProjects(): Promise<ProjectEntry[]> {
  const entries = await getCollection('projects');
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** Registry page for the published package */
export function packageUrl(data: ProjectData): string {
  return data.registry === 'npm'
    ? `https://www.npmjs.com/package/${data.packageName}`
    : `https://www.nuget.org/packages/${data.packageName}/`;
}

/** Brand hue assigned to each project, as CSS values */
export const accents: Record<ProjectData['accent'], { color: string; soft: string }> = {
  fuchsia: { color: 'var(--color-fanatic-fuchsia)', soft: 'rgba(238, 17, 153, 0.45)' },
  sky: { color: 'var(--color-vivid-sky-blue)', soft: 'rgba(0, 204, 255, 0.4)' },
  orchid: { color: 'var(--color-dark-orchid)', soft: 'rgba(153, 50, 204, 0.5)' },
  bluetiful: { color: 'var(--color-bluetiful)', soft: 'rgba(60, 105, 231, 0.5)' },
};
