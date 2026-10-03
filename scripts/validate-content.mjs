import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { projects } from '../src/data/projects.js';
import { profile } from '../src/data/profile.js';
import { socials } from '../src/data/socials.js';
import { skillCategories } from '../src/data/skills.js';

const unique = (values, label) => assert.equal(new Set(values).size, values.length, `Duplicate ${label}`);
const asset = path => assert.ok(path?.startsWith('/') && existsSync(resolve('public', path.slice(1))), `Missing local asset: ${path}`);
const url = value => { if (value) assert.equal(new URL(value).protocol, 'https:', `Use HTTPS: ${value}`); };
unique(projects.map(p => p.id), 'project IDs');
unique(projects.map(p => p.slug), 'project slugs');
unique(projects.map(p => p.order), 'project orders');
unique(skillCategories.map(s => s.id), 'skill categories');
assert.match(profile.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
if (profile.siteUrl) { url(profile.siteUrl); assert.equal(profile.siteUrl, new URL(profile.siteUrl).origin, 'siteUrl must be an origin without a trailing slash'); }
profile.resumes.forEach(resume => asset(resume.href));
socials.forEach(social => url(social.href));
for (const project of projects) {
  assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  for (const field of ['title', 'category', 'description', 'shortDescription']) assert.ok(project[field]?.trim(), `Missing ${field}: ${project.slug}`);
  assert.ok(Array.isArray(project.technologies) && project.technologies.length, `Missing technologies: ${project.slug}`);
  assert.equal(typeof project.published, 'boolean');
  url(project.githubUrl); url(project.liveUrl);
  for (const image of [project.thumbnail, ...(project.images || [])].filter(Boolean)) {
    asset(image.src); assert.ok(image.alt?.trim(), `Missing alt: ${image.src}`);
    assert.ok(image.width > 0 && image.height > 0, `Missing dimensions: ${image.src}`);
  }
}
console.log(`Content valid: ${projects.length} projects, ${skillCategories.length} skill categories, ${profile.resumes.length} resumes.`);
