# Project status

Date: 2026-10-04
Current stage: all six requested stages complete. First complete working version ready for review/model switch.
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

## Completed scope

1. Initial architecture: React/Vite/JavaScript, CSS Modules, local data, Git checkpoints.
2. Navigation/routing: homepage anchors, mobile menu, four clean case-study routes, previous/next, not-found UI, keyboard focus management.
3. Design system: off-white/forest-green editorial style, responsive type, reusable elements, focus and reduced-motion styles.
4. Homepage: hero with supplied warm portrait, filtered selected work, About, skills, experience, contact, footer.
5. Project data: four sourced projects, conditional case-study sections/links, optimized screenshot copies, image enlargement, validated content. Both supplied resumes are downloadable.
6. Working version: successful production/prerender build, tests, browser checks, README and this handover.

## Verification evidence

- `npm run build`: passed; homepage, four case studies and 404 generated as HTML.
- `npm test`: 4 passing regression tests for publication, ordering, navigation boundaries, empty/unknown projects and metadata.
- `scripts/browser-check.mjs`: 43 passing checks in headless Microsoft Edge.
- Homepage and all four case studies checked at 320, 375, 430, 768, 1024, 1440, 1920px; no horizontal overflow, broken images or extra H1s.
- Mobile menu open/close/Escape, focus return, section navigation, project filters, screenshot dialog, browser back, deep-route refresh, contact/resume assets and reduced motion checked.
- No browser console errors, runtime errors, or hydration warnings.
- Desktop, mobile and case-study screenshots inspected. Raw report/screenshots: ignored `tmp/qa/`.
- JavaScript bundle approximately 95 KB gzip; CSS approximately 5.6 KB gzip. This is build output, not a Lighthouse score.

## Run and review

Local production preview: `http://127.0.0.1:4173/`. It was started for this session; restart with the README command if no longer running. The preview was requested in the Codex browser panel.

The machine's default npm shim is broken, so use the explicit installed npm CLI documented above and in README. Sandbox process-launch failures required approved outside-sandbox commands. Git may need the repository-scoped safe.directory argument because the initial .git owner is the sandbox account; no global configuration was changed.

## Remaining decisions (do not fabricate)

- No production deployment performed. Confirm final host/domain before deployment. `profile.siteUrl` is intentionally blank; absolute sharing URLs, canonical tags and sitemap activate when set.
- Real project-specific GitHub and demo URLs remain absent and their buttons are hidden.
- Case-study editorial framing should be reviewed by Asad before publication. No invented commercial outcomes, measured improvements or client claims.
- Shoppable Lookbook is described as a feature showcase of the gallery work listed with XIV.
- RAG concierge/Luminara/additional projects are not yet published in this version.
- Current browser QA covers Edge, not physical devices or Safari. Production-host redirects and real HTTP 404 status are not verified by Vite preview.

## Handover instruction

Read this file, TASKS.md and README.md before continuing. Preserve the current architecture and supplied assets. Ask for the user's next design/content change rather than rebuilding. Update centralized data for content edits. Make small changes, run the relevant checks, then commit a new stable checkpoint. The requested first-version scope is finished; further features or deployment are separate work.
