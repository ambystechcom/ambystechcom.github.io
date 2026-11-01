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

/** Language pill modifier (see .lang-* in global.css) */
export function langClass(data: ProjectData): string {
  return data.language === 'C#' ? 'lang-csharp' : 'lang-typescript';
}
