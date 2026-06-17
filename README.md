# ATSA website — with The 1% Better Challenge embedded

The Aquatic Training Solutions Australia website, built from the approved ATSA
Design System components, with **The 1% Better Challenge** embedded as part of
the site. One static, deployable site — no backend required.

## What's here

A single React app (hash-routed) with three sections:

| Route | Section |
|-------|---------|
| `#/` | **Marketing site** — home, professional-development catalogue, course detail (shared ATSA header/footer) |
| `#/challenge` | **The 1% Better Challenge** landing page |
| `#/challenge/app` | The **Challenge app** — onboarding, daily check-in, 100-day tracker, team leaderboard, badges & reflections, profile |

The Challenge app saves progress in the browser (`localStorage`) so it behaves
like the real thing. Sign-up, the daily check-in, forgiving streaks, badges and
reflections all work today. There's an **"Explore a demo account"** button on
onboarding that seeds 34 days of progress so you can see a populated tracker.

## How it's built

These are your **real approved components**, extracted from the design-system
bundles — not a re-creation. Files:

```
index.html            Loads everything in order; defines logo asset paths
styles.css            Merged design-system CSS (tokens, fonts, component styles)
vendor/               React 18 + ReactDOM + Babel (exact versions the designs used)
lib/ds-bundle.js      The ATSA component library (Button, Card, Icon, …)
data/atsa-data.js     Marketing demo data
marketing/*.js        Header/Footer, Home, Courses, Course detail
challenge/
  content.js          All 100 days · 10 themes · "why it works" (source of truth)
  store.js            Client-side store (localStorage; swap for a real backend later)
  onboarding/checkin/tracker/team/growth.js
src/
  entry-marketing.js  Marketing section app           (window.MarketingApp)
  entry-landing.js    Challenge landing               (window.ChallengeLanding)
  entry-app.js        Challenge app                   (window.ChallengeApp)
  root.js             Top-level hash router + nav
assets/logos/         ATSA logo, reversed logo, icon, favicon (SVG)
fonts/                Self-hosted Montserrat + Open Sans (woff2)
server.mjs            Tiny static server for local preview
```

JSX is transpiled in the browser by Babel (same approach the design tool used).
It works as-is; see "Production polish" below to remove the load-time flash.

## Two ways it runs

- **Dev (no build):** the repo root. `index.html` loads dev React + in-browser
  Babel, so you can edit any source file and just refresh. Slight load flash.
- **Production (built):** `npm run build` → `dist/`. Precompiles the JSX to
  minified JS, swaps in **production React**, and ships **no Babel**. This is
  what Netlify serves. ~1.3 MB vs 5 MB, no flash, no console warnings.

## Preview locally

```bash
node server.mjs            # dev version  -> http://localhost:8140
npm run build              # build the production site into dist/
node server.mjs dist 8141  # built version -> http://localhost:8141
```

(Serve over http, not `file://` — the browser blocks the script loads otherwise.)

## Deploy to Netlify

Config is in `netlify.toml` (`command = "npm run build"`, `publish = "dist"`).

- **Git-based (recommended):** push this folder to a repo and "Import from Git"
  in Netlify — it installs deps, runs the build, and publishes `dist/`.
- **CLI:** `npm run build && npx netlify-cli deploy --prod --dir dist`
- **Drag-and-drop:** `npm run build`, then drag the **`dist/`** folder onto
  <https://app.netlify.com/drop>.

`robots.txt` currently blocks search engines (pre-launch) — delete it or remove
the `Disallow` when you want the site discoverable.

## Next step toward the full product

Replace `challenge/store.js` (localStorage) with real accounts + a database
(e.g. Supabase) and email, per the original Build Prompt — the store's API is the
seam to do that behind, so the UI doesn't change.
