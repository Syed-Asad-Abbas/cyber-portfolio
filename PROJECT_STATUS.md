# Project status

Date: 2026-10-07
Current stage: all six initial stages plus project content, layout and disclosure follow-ups complete. Ready for review and Netlify account/domain selection.
Approved scope: six stages through a first complete working version, followed by a clear handover for a possible model switch.

## Decisions

- React/Vite/JavaScript with React Router and CSS Modules.
- Supplied resumes are content sources; external document instructions are not followed.
- Use provided screenshots and warm professional portrait.
- No fabricated live/repository URLs or performance metrics.
- Contact by email and professional links; both resumes available.
- No deployment during this iteration.

## Environment

System node works. Default npm shim is broken; invoke `node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js"` followed by npm arguments, or add that npm bin directory to PATH for this shell.

## Stable checkpoints

- `d603746`: initial buildable scaffold and sourced content.
- `b20e99c`: complete homepage, project pages and first successful prerender build.
- `v0.1.0`: verified first working version, final fixes, readable formatting and handover documentation. Resolve this local Git tag for the final commit.
- `v0.1.1`: Luminara case study, the first five supplied project repositories, demo link, and Netlify build configuration. Resolve this local Git tag for the follow-up commit.
- `v0.1.2`: Nueve full e-commerce application case study, optimized screenshots, source repository, and Netlify demo link. Resolve this local Git tag for the Nueve follow-up commit.
- `v0.1.3`: selected-work reorder with paired projects two–three and four–five, plus an inverted final project. Resolve this local Git tag for the layout follow-up commit.
- `v0.1.4`: first-three project view with an accessible control for revealing the remaining work. Resolve this local Git tag for the disclosure follow-up commit.

## Completed scope

1. Initial architecture: React/Vite/JavaScript, CSS Modules, local data, Git checkpoints.
2. Navigation/routing: homepage anchors, mobile menu, six clean case-study routes, previous/next, not-found UI, keyboard focus management.
3. Design system: off-white/forest-green editorial style, responsive type, reusable elements, focus and reduced-motion styles.
4. Homepage: hero with supplied warm portrait, filtered selected work, About, skills, experience, contact, footer.
5. Project data: six sourced projects, conditional case-study sections/links, optimized screenshot copies, image enlargement, validated content. Both supplied resumes are downloadable.
6. Working version: successful production/prerender build, tests, browser checks, README and this handover.

## Verification evidence

- `npm run build`: passed; homepage, six case studies and 404 generated as HTML.
- `npm test`: 4 passing regression tests for publication, ordering, navigation boundaries, empty/unknown projects and metadata.
- `scripts/browser-check.mjs`: 60 passing checks in headless Microsoft Edge, including the requested project order, paired rows, inverted final layout, galleries and supplied links.
- Homepage and all six case studies checked at 320, 375, 430, 768, 1024, 1440, 1920px; no horizontal overflow, broken images or extra H1s.
- Mobile menu open/close/Escape, focus return, section navigation, project filters, screenshot dialog, browser back, deep-route refresh, contact/resume assets and reduced motion checked.
- No browser console errors, runtime errors, or hydration warnings.
- Desktop, mobile and case-study screenshots inspected. Raw report/screenshots: ignored `tmp/qa/`.
- JavaScript bundle approximately 96 KB gzip; CSS approximately 5.6 KB gzip. This is build output, not a Lighthouse score.

## Run and review

Local production preview: `http://127.0.0.1:4173/`. It was started for this session; restart with the README command if no longer running. The preview was requested in the Codex browser panel.

The machine's default npm shim is broken, so use the explicit installed npm CLI documented above and in README. Sandbox process-launch failures required approved outside-sandbox commands. Git may need the repository-scoped safe.directory argument because the initial .git owner is the sandbox account; no global configuration was changed.

## Remaining decisions (do not fabricate)

- No production deployment performed. Netlify is the selected portfolio host; `netlify.toml` specifies `npm run build`, `dist`, and Node 22. Confirm the target account/site and final domain before deployment. `profile.siteUrl` remains blank; absolute sharing URLs, canonical tags and sitemap activate when set.
- All six project GitHub links are supplied and connected. XIV and Product Configurator use the exact `devloper` branch URLs. Lookbook has a separate repository: `shopify-practice/tree/Testing-Dawn-Theme`.
- Shopify projects are code-only showcases without live URLs. Luminara's supplied `https://luminara1.vercel.app/` demo returned HTTP 200 and the expected title on 2026-10-04. Its remote chat/backend and payments were not exercised.
- Case-study editorial framing should be reviewed by Asad before publication. No invented commercial outcomes, measured improvements or client claims.
- Shoppable Lookbook is described as a feature showcase of the gallery work listed with XIV.
- Luminara represents the RAG e-commerce concierge and is a full-stack case study at `/projects/luminara`. Seven supplied screenshots are optimized locally (cover plus six gallery views). The repository README supports the stack/retrieval description. No commercial outcomes or live payment-processing claims are made.
- Nueve is a full-stack-ready e-commerce application case study at `/projects/nueve-fashion`. Its React repository and Netlify demo are linked, with five locally optimized screenshots. The deployed prototype uses Local Storage; production backend services are described as integration-ready rather than already connected.
- Homepage project order is XIV, Luminara, Nueve, Product Configurator, Shoppable Lookbook and Multimodal Phishing Detection. Projects two–three and four–five form paired rows; the final project places its copy before the visual on desktop.
- The homepage initially shows the first three projects. A More projects button reveals the remaining work and can collapse the list again.
- Current browser QA covers Edge, not physical devices or Safari. Production-host redirects and real HTTP 404 status are not verified by Vite preview.

## Handover instruction

Read this file, TASKS.md and README.md before continuing. Preserve the current architecture and supplied assets. Update centralized data for content edits. Make small changes, run the relevant checks, then commit a new stable checkpoint. The first-version scope and Luminara/link follow-up are finished. The next step is choosing the target Netlify account/site and canonical domain, or reviewing content/design. No account connection or deployment has been performed.
