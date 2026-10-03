import test from 'node:test';
import assert from 'node:assert/strict';
import { getPublishedProjects, getCaseStudies, getProjectNeighbors, findProject } from '../src/lib/projects.js';
import { getMetadata } from '../src/lib/metadata.js';

const sample = [
  { slug: 'last', published: true, order: 4, caseStudy: { overview: 'Last' } },
  { slug: 'draft', published: false, order: 2, caseStudy: { overview: 'Draft' } },
  { slug: 'summary', published: true, order: 3 },
  { slug: 'first', published: true, order: 1, caseStudy: { overview: 'First' } },
];
test('Publication and ordering do not mutate the content source', () => {
  assert.deepEqual(getPublishedProjects(sample).map(p => p.slug), ['first', 'summary', 'last']);
  assert.equal(sample[0].slug, 'last');
});
test('Case-study navigation skips drafts and summary-only projects without wrapping', () => {
  assert.deepEqual(getCaseStudies(sample).map(p => p.slug), ['first', 'last']);
  assert.equal(getProjectNeighbors('first', sample).previous, undefined);
  assert.equal(getProjectNeighbors('first', sample).next.slug, 'last');
  assert.equal(getProjectNeighbors('last', sample).next, undefined);
  assert.deepEqual(getProjectNeighbors('missing', sample), {});
});
test('Empty case studies are not routable', () => {
  assert.equal(getCaseStudies([{ slug: 'empty', published: true, caseStudy: { overview: ' ', results: [] } }]).length, 0);
  assert.equal(findProject('unpublished-or-missing'), undefined);
});
test('Metadata distinguishes home, real projects and missing URLs', () => {
  assert.match(getMetadata('/').title, /Shopify/);
  assert.match(getMetadata('/projects/xiv-fashion-store').title, /XIV Fashion Store/);
  assert.equal(getMetadata('/projects/missing').noindex, true);
  assert.notEqual(getMetadata('/').description, getMetadata('/projects/xiv-fashion-store').description);
});
