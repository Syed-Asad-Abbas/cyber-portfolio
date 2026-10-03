import { projects } from '../data/projects.js';

export const getPublishedProjects = (source = projects) => source.filter(p => p.published).toSorted((a, b) => a.order - b.order);
export const getCaseStudies = (source = projects) => getPublishedProjects(source).filter(p => p.caseStudy && Object.values(p.caseStudy).some(value => Array.isArray(value) ? value.length > 0 : Boolean(value?.trim?.())));
export const findProject = slug => getCaseStudies().find(p => p.slug === slug);
export function getProjectNeighbors(slug, source = projects) {
  const entries = getCaseStudies(source);
  const index = entries.findIndex(p => p.slug === slug);
  return index < 0 ? {} : { previous: entries[index - 1], next: entries[index + 1] };
}
