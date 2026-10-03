import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { render } from '../dist/server/entry-server.js';
import { getCaseStudies } from '../src/lib/projects.js';
import { getMetadata } from '../src/lib/metadata.js';
import { profile } from '../src/data/profile.js';

const template = await readFile('dist/index.html', 'utf8');
const escape = (text) =>
  String(text).replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char],
  );
const paths = ['/', ...getCaseStudies().map((project) => `/projects/${project.slug}`), '/404'];
for (const path of paths) {
  const meta = getMetadata(path);
  const head = [
    `<meta name="prerendered-path" content="${escape(path)}">`,
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}">`,
    `<meta name="robots" content="${meta.noindex ? 'noindex,follow' : 'index,follow'}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${escape(meta.title)}">`,
    `<meta property="og:description" content="${escape(meta.description)}">`,
    `<meta property="og:image" content="${escape(profile.siteUrl + meta.image)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escape(meta.title)}">`,
    `<meta name="twitter:description" content="${escape(meta.description)}">`,
    `<meta name="twitter:image" content="${escape(profile.siteUrl + meta.image)}">`,
    ...(meta.canonical
      ? [
          `<link rel="canonical" href="${escape(meta.canonical)}">`,
          `<meta property="og:url" content="${escape(meta.canonical)}">`,
        ]
      : []),
  ].join('\n    ');
  const output =
    path === '/' ? 'dist/index.html' : path === '/404' ? 'dist/404.html' : `dist${path}/index.html`;
  await mkdir(resolve(output, '..'), { recursive: true });
  await writeFile(
    output,
    template.replace('<!--page-head-->', head).replace('<!--app-html-->', render(path)),
  );
}
await writeFile(
  'dist/robots.txt',
  `User-agent: *\nAllow: /\n${profile.siteUrl ? `Sitemap: ${profile.siteUrl}/sitemap.xml\n` : ''}`,
);
if (profile.siteUrl) {
  const urls = paths
    .filter((path) => path !== '/404')
    .map((path) => `<url><loc>${escape(profile.siteUrl + path)}</loc></url>`)
    .join('');
  await writeFile(
    'dist/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
  );
}
await rm('dist/server', { recursive: true, force: true });
console.log(
  `Prerendered ${paths.length} routes. ${profile.siteUrl ? 'Canonical URLs and sitemap included.' : 'Production domain not set; canonical URLs and sitemap deferred.'}`,
);
