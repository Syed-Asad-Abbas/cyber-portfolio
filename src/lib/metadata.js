import { profile } from '../data/profile.js';
import { findProject } from './projects.js';

export function getMetadata(pathname) {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  const project = match ? findProject(match[1]) : undefined;
  const home = pathname === '/';
  const title = home
    ? `${profile.name} — ${profile.role}`
    : project
      ? `${project.title} — ${profile.name}`
      : `Page not found — ${profile.name}`;
  return {
    title,
    description: home
      ? 'Custom Shopify storefronts, thoughtful React interfaces, and full-stack development. Explore selected work by Asad Abbas, based in Lahore, Pakistan.'
      : project?.description ||
        'This page could not be found. Explore the portfolio and selected work of Asad Abbas.',
    image: project?.thumbnail?.src || '/images/portrait.webp',
    canonical: profile.siteUrl
      ? `${profile.siteUrl}${home ? '/' : pathname.replace(/\/$/, '')}`
      : '',
    noindex: !home && !project,
  };
}

export function updateMetadata(pathname) {
  const metadata = getMetadata(pathname);
  document.title = metadata.title;
  const setMeta = (key, value, property = false) => {
    const attribute = property ? 'property' : 'name';
    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
    if (!value) {
      element?.remove();
      return;
    }
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, key);
      document.head.append(element);
    }
    element.content = value;
  };
  setMeta('description', metadata.description);
  setMeta('og:title', metadata.title, true);
  setMeta('og:description', metadata.description, true);
  setMeta('og:type', 'website', true);
  setMeta('og:image', `${profile.siteUrl}${metadata.image}`, true);
  setMeta('og:url', metadata.canonical, true);
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', metadata.title);
  setMeta('twitter:description', metadata.description);
  setMeta('twitter:image', `${profile.siteUrl}${metadata.image}`);
  setMeta('robots', metadata.noindex ? 'noindex,follow' : 'index,follow');
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (metadata.canonical) {
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = metadata.canonical;
  } else {
    canonical?.remove();
  }
}
