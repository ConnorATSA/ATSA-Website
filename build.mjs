// Production build for the ATSA website.
// Precompiles the JSX sources to plain minified JS (so Babel is NOT shipped to
// the browser), swaps in minified production React, and writes a ready-to-host
// static site to dist/. The repo root stays as a no-build dev fallback.
import esbuild from 'esbuild';
import { rmSync, mkdirSync, cpSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';

const DIST = 'dist';

// Files that contain JSX and must be transpiled.
const JSX_FILES = [
  'marketing/pages.js', 'marketing/header.js', 'marketing/home.js', 'marketing/courses.js', 'marketing/course-detail.js',
  'challenge/onboarding.js', 'challenge/checkin.js', 'challenge/tracker.js', 'challenge/team.js', 'challenge/growth.js',
  'src/entry-marketing.js', 'src/entry-landing.js', 'src/entry-app.js', 'src/root.js',
];

// Plain-JS / static assets copied verbatim.
const COPY = [
  'styles.css', 'robots.txt',
  'lib/ds-bundle.js', 'data/atsa-data.js',
  'challenge/content.js', 'challenge/store.js',
  'fonts', 'assets',
];

// 1. clean
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });

// 2. copy static
for (const p of COPY) cpSync(p, join(DIST, p), { recursive: true });

// 3. production React UMD
mkdirSync(join(DIST, 'vendor'), { recursive: true });
cpSync('node_modules/react/umd/react.production.min.js', join(DIST, 'vendor/react.production.min.js'));
cpSync('node_modules/react-dom/umd/react-dom.production.min.js', join(DIST, 'vendor/react-dom.production.min.js'));

// 4. transpile + minify each JSX file (classic runtime -> global React.createElement)
let totalIn = 0, totalOut = 0;
for (const f of JSX_FILES) {
  const code = readFileSync(f, 'utf8');
  const out = await esbuild.transform(code, { loader: 'jsx', jsx: 'transform', minify: true, target: 'es2018' });
  mkdirSync(join(DIST, dirname(f)), { recursive: true });
  writeFileSync(join(DIST, f), out.code);
  totalIn += code.length; totalOut += out.code.length;
}

// 5. derive the production index.html from the dev one
let html = readFileSync('index.html', 'utf8')
  .replace('vendor/react.development.js', 'vendor/react.production.min.js')
  .replace('vendor/react-dom.development.js', 'vendor/react-dom.production.min.js')
  .replace(/\n\s*<!-- 3\. Babel[^>]*-->\n\s*<script src="vendor\/babel\.min\.js"><\/script>\n/, '\n')
  .replace(/ type="text\/babel" data-presets="react"/g, '');
writeFileSync(join(DIST, 'index.html'), html);

console.log(`Built dist/  ·  JSX ${(totalIn/1024).toFixed(0)}KB -> ${(totalOut/1024).toFixed(0)}KB minified`);
console.log('Babel shipped to browser:', html.includes('babel'));
