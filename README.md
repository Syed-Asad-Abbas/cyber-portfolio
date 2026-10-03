# Asad Abbas — Developer Portfolio

A content-driven React portfolio for Shopify and full-stack development. Includes a responsive homepage, four case studies, project filtering, screenshot galleries, two résumé downloads, and static HTML generated for every published page.

## Run locally

Verified with Node.js 22.14.0. From this directory:

```sh
npm ci
npm run dev
```

The development server prints its local address. For a production preview:

```sh
npm run build
npm run preview -- --port 4173
```

On the current Windows machine the default npm shim points to a missing user installation. Use the existing working CLI instead; no global configuration change is necessary:

```powershell
node 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js' run dev
node 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js' run build
node 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js' run preview -- --port 4173
```

## Edit content

| Change                                               | File                     |
| ---------------------------------------------------- | ------------------------ |
| Name, headline, About, email, location, résumé links | `src/data/profile.js`    |
| GitHub, LinkedIn, additional professional platforms  | `src/data/socials.js`    |
| Navigation labels and anchor destinations            | `src/data/navigation.js` |
| Skill labels, categories, ordering and icons         | `src/data/skills.js`     |
| Projects, ordering, links and case-study content     | `src/data/projects.js`   |
| Employment and education                             | `src/data/experience.js` |
| Image paths and intrinsic dimensions                 | `src/data/images.js`     |
| Shared colors, fonts and spacing                     | `src/styles/tokens.css`  |

Skill array order controls display order. Each skill can be a string, or an object such as `{ label: 'TypeScript', icon: 'window' }` for an optional icon. Category icons and optional skill icons use the keys in `src/components/ui/Icon.jsx`. Add a new SVG path there only when introducing a new icon; changing existing icons is a data edit.

## Add a project

1. Add optimized screenshots to `public/images/`. Prefer WebP, meaningful filenames and sensible dimensions.
2. Add image records to `src/data/images.js`, or provide `src`, `width`, `height` and `alt` directly in the project object.
3. Add an entry in `src/data/projects.js` with a unique `id`, clean `slug`, title, category, descriptions, technologies, publication flag and numeric order.
4. Set `featured: true` for the prominent homepage treatment. Keep the flagship count small.
5. Add meaningful optional `caseStudy` content to create a route. A summary-only project can omit it.
6. Add real HTTPS `githubUrl` and `liveUrl` values when available. Empty values hide those actions.
7. Run `npm run build` and `npm test`.

Use `published: false` for a draft. Previous/next navigation follows `order` and skips drafts and summary-only entries. Preserve slugs after publication; configure a redirect if an existing slug must change.

Supported case-study fields: `overview`, `problem`, `objectives`, `implementation` (title/text pairs), `challenges`, `solution`, `technicalDecisions`, `results`, and `lessons`. Empty optional content is omitted. Do not add unverified metrics or achievements.

## Assets and content provenance

- Professional details, skills, employment and education are based on the two supplied résumés.
- XIV, the configurator, and the analysis platform are supported by résumé descriptions and supplied screenshots.
- The Shoppable Lookbook is explicitly presented as a feature showcase of the gallery work described with XIV, rather than an unrelated client engagement.
- Case-study problem/objective wording is editorial framing of the described implementation. Review it before publishing.
- Original assets remain untouched. Local optimized copies live under `public/images`; unchanged copies of both résumés live under `public/resume`.
- `scripts/prepare-assets.py` records original asset mappings. It is a one-time local import script, requires Pillow and the supplied Windows source files, and is not needed to build or run the site.
- Project-specific repositories, demos, performance metrics, and the final production domain were not supplied. No placeholder URLs or fabricated metrics are used.
- RAG concierge, Luminara, and any additional projects can be added when their content is ready.

## Verification

```sh
npm run validate
npm test
npm run format:check
npm run build
```

Browser QA is an optional development script using Playwright and headless Edge on Windows. It is not a runtime dependency. Start the production preview first, then use an available Playwright installation:

```powershell
$env:PLAYWRIGHT_MODULE = 'C:\Users\asad\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\playwright'
node scripts/browser-check.mjs
```

If Playwright is installed in the project separately, `npm run test:browser` works without this environment variable. The script uses Chromium on non-Windows hosts; that browser must be available in the Playwright installation. Optional `PREVIEW_URL` overrides the default `http://127.0.0.1:4173`.

The script checks the homepage and all case studies at 320, 375, 430, 768, 1024, 1440 and 1920px. It also checks menus, keyboard focus, filters, screenshot dialogs, history, PDF responses, metadata and console errors. Screenshots and the report go to ignored `tmp/qa/`.

## Build and deployment

`npm run build` validates data, creates browser assets, renders the React tree into route-specific HTML, then removes the temporary server bundle. Output lives in `dist/`. No server is required at runtime.

The site is not deployed yet. Before deployment:

1. Set `profile.siteUrl` to the confirmed HTTPS origin, without a trailing slash. The build will then emit canonical URLs, absolute sharing-image URLs and `sitemap.xml`.
2. Choose a static host and publish `dist/`.
3. Ensure `/projects/example` resolves the generated `/projects/example/index.html` and unknown routes serve `404.html` with HTTP 404. Avoid a blanket homepage rewrite that hides the generated project HTML from crawlers.
4. Verify direct links, reloads, redirects, sharing previews and PDF downloads on the actual domain.

Local Vite preview falls back to the app for unknown URLs; its HTTP status is not production 404 validation. Unknown URLs still render the not-found UI without hydration mismatch.

Contact uses email and professional links. There is no contact-form service, analytics integration or backend credential requirement.

## Checkpoints and continuing work

Read `PROJECT_STATUS.md` and `TASKS.md` before changes. Keep scope small, run relevant checks, and update those files. Use `git log --oneline` to inspect checkpoints. To undo a committed regression, prefer `git revert <commit>` after inspecting the working tree; do not discard unrelated changes.

The repository was initially created by the sandbox account. If Git reports dubious ownership in this specific workspace, commands can use `git -c safe.directory=E:/portfolio-shopify ...` without changing the global Git configuration.
