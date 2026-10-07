import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import { getCaseStudies } from '../src/lib/projects.js';

// Use an installed Playwright package or the optional bundled-runtime module path.
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const origin = process.env.PREVIEW_URL || 'http://127.0.0.1:4173';
const browser = await chromium.launch({
  headless: true,
  ...(process.platform === 'win32' ? { channel: 'msedge' } : {}),
});
const context = await browser.newContext({ reducedMotion: 'reduce' });
const page = await context.newPage();
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(message.text());
});
const results = [];
await mkdir('tmp/qa', { recursive: true });

try {
  for (const width of [320, 375, 430, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 960 });
    for (const route of ['/', ...getCaseStudies().map((project) => `/projects/${project.slug}`)]) {
      await page.goto(origin + route, { waitUntil: 'networkidle' });
      await page.locator('h1').waitFor();
      const dimensions = await page.evaluate(() => ({
        client: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
      }));
      assert.ok(
        dimensions.scroll <= dimensions.client + 1,
        `Overflow at ${width}px on ${route}: ${JSON.stringify(dimensions)}`,
      );
      assert.equal(await page.locator('h1').count(), 1, `One H1 on ${route}`);
      for (const image of await page.locator('img').all()) await image.scrollIntoViewIfNeeded();
      await page
        .locator('img')
        .evaluateAll((images) =>
          Promise.all(images.map((image) => image.decode().catch(() => {}))),
        );
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      const broken = await page
        .locator('img')
        .evaluateAll((images) =>
          images
            .filter((image) => !image.complete || !image.naturalWidth)
            .map((image) => image.src),
        );
      assert.deepEqual(broken, [], `Broken images on ${route}`);
      if ((width === 1440 || width === 375 || width === 320 || width === 768) && route === '/') {
        await page.screenshot({ path: `tmp/qa/home-${width}.png`, fullPage: true });
        await page.screenshot({ path: `tmp/qa/hero-${width}.png` });
      }
      if (width === 1440 && route.includes('xiv'))
        await page.screenshot({ path: 'tmp/qa/case-study-desktop.png', fullPage: true });
      if ((width === 1440 || width === 375) && route === '/projects/luminara')
        await page.screenshot({ path: `tmp/qa/luminara-${width}.png`, fullPage: true });
      if ((width === 1440 || width === 375) && route === '/projects/nueve-fashion')
        await page.screenshot({ path: `tmp/qa/nueve-${width}.png`, fullPage: true });
      results.push(`${width}px ${route}: no overflow, one H1, no broken loaded images`);
    }
  }

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(origin, { waitUntil: 'networkidle' });
  const menu = page.locator('button[aria-controls="main-navigation"]');
  await menu.click();
  assert.equal(await menu.getAttribute('aria-expanded'), 'true');
  await page.keyboard.press('Escape');
  assert.equal(await menu.getAttribute('aria-expanded'), 'false');
  assert.equal(await menu.evaluate((element) => element === document.activeElement), true);
  await menu.click();
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'About', exact: true })
    .click();
  assert.equal(new URL(page.url()).hash, '#about');
  assert.equal(await menu.getAttribute('aria-expanded'), 'false');
  await page.waitForFunction(() => document.activeElement.id === 'about');
  results.push('Mobile menu opens, closes on Escape, returns focus, and navigates to sections');

  await page.getByRole('button', { name: 'Full-stack', exact: true }).click();
  assert.equal(await page.locator('#projects article').count(), 3);
  assert.deepEqual(await page.locator('#projects article h3').allTextContents(), [
    'Luminara',
    'Multimodal Phishing Detection',
    'Nueve Fashion',
  ]);
  await page.getByRole('button', { name: 'Shopify', exact: true }).click();
  assert.equal(await page.locator('#projects article').count(), 3);
  await page.getByRole('button', { name: /All work/ }).click();
  assert.equal(await page.locator('#projects article').count(), 6);
  results.push('Project filters show 3 full-stack, 3 Shopify, and 6 total projects');

  await page.getByRole('link', { name: 'Luminara', exact: true }).click();
  await page.waitForURL('**/projects/luminara');
  assert.equal(
    await page.getByRole('link', { name: 'View source', exact: true }).getAttribute('href'),
    'https://github.com/Syed-Asad-Abbas/Luminara',
  );
  assert.equal(
    await page.getByRole('link', { name: 'Visit live project', exact: true }).getAttribute('href'),
    'https://luminara1.vercel.app/',
  );
  assert.equal(await page.getByRole('button', { name: /Enlarge screenshot:/ }).count(), 6);
  await page.getByRole('link', { name: 'Back to selected work' }).click();
  await page.waitForURL('**/#projects');
  results.push('Luminara has six screenshots, the supplied repository and the demo link');

  await page.getByRole('link', { name: 'Nueve Fashion', exact: true }).click();
  await page.waitForURL('**/projects/nueve-fashion');
  assert.equal(
    await page.getByRole('link', { name: 'View source', exact: true }).getAttribute('href'),
    'https://github.com/Syed-Asad-Abbas/Nueve-Fashion-react',
  );
  assert.equal(
    await page.getByRole('link', { name: 'Visit live project', exact: true }).getAttribute('href'),
    'https://nuevefashion.netlify.app/',
  );
  assert.equal(await page.getByRole('button', { name: /Enlarge screenshot:/ }).count(), 4);
  results.push('Nueve has four screenshots, its source repository and Netlify live link');

  await page.getByRole('link', { name: 'Back to selected work' }).click();
  await page.waitForURL('**/#projects');
  await page.getByRole('link', { name: 'XIV Fashion Store', exact: true }).click();
  await page.waitForURL('**/projects/xiv-fashion-store');
  await page.waitForFunction(() => document.activeElement.id === 'main');
  assert.match(await page.title(), /XIV Fashion Store/);
  const imageButton = page.getByRole('button', { name: /Enlarge screenshot:/ }).first();
  await imageButton.click();
  const dialog = page.getByRole('dialog', { name: 'Project screenshot' });
  assert.equal(await dialog.isVisible(), true);
  await dialog.getByRole('button', { name: 'Next image', exact: true }).click();
  assert.equal(
    await dialog.getByRole('button', { name: 'Next image', exact: true }).isDisabled(),
    true,
  );
  await page.keyboard.press('Escape');
  assert.equal(await dialog.isVisible(), false);
  assert.equal(await imageButton.evaluate((element) => element === document.activeElement), true);
  results.push('Screenshot dialog opens, navigates, closes on Escape, and restores focus');

  await page
    .getByRole('navigation', { name: 'Project navigation' })
    .getByRole('link', { name: /NEXT PROJECT/ })
    .click();
  await page.waitForURL('**/projects/shopify-product-configurator');
  await page.goBack();
  await page.waitForURL('**/projects/xiv-fashion-store');
  await page.reload({ waitUntil: 'networkidle' });
  assert.equal(await page.getByRole('heading', { level: 1 }).innerText(), 'XIV Fashion Store');
  await page.getByRole('link', { name: 'Back to selected work' }).click();
  await page.waitForURL('**/#projects');
  results.push('Previous/next flow, browser back, deep-route refresh and return anchor work');

  await page.goto(`${origin}/projects/not-a-real-project`, { waitUntil: 'networkidle' });
  assert.match(await page.locator('h1').innerText(), /isn’t/);
  assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'), 'noindex,follow');
  await page.goto(`${origin}/not-a-real-page`, { waitUntil: 'networkidle' });
  assert.match(await page.title(), /Page not found/);
  results.push('Unknown project and unknown page render the accessible 404');

  for (const resume of ['shopify', 'fullstack']) {
    const response = await context.request.get(`${origin}/resume/asad-abbas-${resume}.pdf`);
    assert.equal(response.status(), 200);
    assert.equal((await response.body()).subarray(0, 4).toString(), '%PDF');
  }
  const html = await (await context.request.get(`${origin}/projects/xiv-fashion-store/`)).text();
  assert.match(html, /<title>XIV Fashion Store/);
  assert.match(html, /The overview/);
  results.push('Both resume PDFs and prerendered case-study HTML are served correctly');

  await page.goto(origin, { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Skip to content');
  await page.keyboard.press('Enter');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'main');
  assert.equal(
    await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior),
    'auto',
  );
  results.push('Keyboard skip link and reduced-motion styles work');

  assert.deepEqual(errors, [], 'Browser console or runtime errors');
  results.push('No console errors, runtime errors, or hydration warnings');
  await writeFile(
    'tmp/qa/results.json',
    JSON.stringify({ passed: true, checks: results, errors }, null, 2),
  );
  console.log(`Browser QA passed: ${results.length} checks. Screenshots and report: tmp/qa/`);
} finally {
  await browser.close();
}
