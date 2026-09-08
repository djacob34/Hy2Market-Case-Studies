/* =========================================================================
   server.js — minimal Node/Express server that makes every case-study page
   real, crawlable HTML on first response, instead of an empty SPA shell
   that only fills in after client-side JS runs.

   Reuses the exact same render functions the browser already uses —
   app/js/template.js and app/js/landing.js are pure, DOM-free functions
   that export via CommonJS specifically for this purpose (see the
   `typeof module !== 'undefined'` guards at the bottom of each). Nothing
   about the rendering logic is duplicated here; this just calls it
   server-side, on every request, so output can never drift from what the
   client would have produced anyway. app/js/main.js and app/js/landing.js
   detect the resulting server-rendered markup on load and skip their own
   redundant client-side re-render, going straight to wiring up behavior
   (accordions, modals, carousels, etc. via interactions.js).

   Replaces the previous Caddy-only static file server (see git history for
   the old Caddyfile) — Caddy had no way to vary a response by query string
   (?region=<slug>), which is exactly what every case-study URL depends on.
   ========================================================================= */
'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, 'app');
const DATA_DIR = path.join(APP_DIR, 'js', 'data');

const CaseStudyTemplate = require(path.join(APP_DIR, 'js', 'template.js'));
const Landing = require(path.join(APP_DIR, 'js', 'landing.js'));

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Load every region's data file exactly like index.html/case-study.html's
// <script> tags do (same files, same order doesn't matter — each attaches
// itself by its own slug), building the same registry window.CASE_STUDIES
// holds in the browser.
function loadCaseStudies() {
  const registry = {};
  fs.readdirSync(DATA_DIR)
    .filter((f) => f.endsWith('.js'))
    .forEach((f) => {
      // bust Node's require cache so a restart always reflects the latest
      // content on disk (this process is expected to be restarted on
      // deploy, not hot-reloaded, but this keeps `npm start` during local
      // development honest too).
      const full = path.join(DATA_DIR, f);
      delete require.cache[require.resolve(full)];
      const data = require(full);
      if (data && data.slug) registry[data.slug] = data;
    });
  return registry;
}

function readShell(file) {
  return fs.readFileSync(path.join(APP_DIR, file), 'utf8');
}

function renderIndexHtml(baseUrl) {
  const registry = loadCaseStudies();
  const studies = Object.keys(registry).map((k) => registry[k]);
  const cardsHtml = studies.length
    ? studies.map(Landing.cardHtml).join('')
    : '<p class="cs-empty">No case studies registered yet.</p>';

  let html = readShell('index.html');
  html = html.replace(
    /(<main id="cs-grid"[^>]*>)[\s\S]*?(<\/main>)/,
    '$1' + cardsHtml + '$2'
  );
  if (baseUrl) {
    html = html.replace('</head>', '<link rel="canonical" href="' + esc(baseUrl + '/') + '">\n</head>');
  }
  return html;
}

function stripTags(s) {
  return String(s == null ? '' : s).replace(/<[^>]+>/g, '');
}

function renderCaseStudyHtml(regionSlug, baseUrl) {
  const registry = loadCaseStudies();
  const slug = regionSlug || 'upper-austria';
  const data = registry[slug] || registry['upper-austria'] || Object.values(registry)[0];

  let html = readShell('case-study.html');
  if (!data) return html;

  // Mirrors main.js's own fixup exactly: a region's breadcrumb.href is often
  // left as '#' in its data file, relying on this to point it at the
  // landing page. main.js only gets a chance to apply this when it actually
  // re-renders — which it now skips whenever server-rendered markup is
  // already present (see main.js) — so it has to happen here too, or the
  // "View all case studies" link and breadcrumb both go nowhere.
  if (data.breadcrumb && (!data.breadcrumb.href || data.breadcrumb.href === '#')) {
    data.breadcrumb.href = './index.html';
  }

  // A render failure must be loud, not a silent fallback to the empty
  // shell — an empty shell for one region and full content for every other
  // one looks exactly like "this region just has no content" to whoever's
  // debugging it, when it's actually a crash. Log it and blow up the
  // request instead so it shows up as a 500, not quietly-missing copy.
  let rendered;
  try {
    rendered = CaseStudyTemplate.renderCaseStudy(data);
  } catch (renderErr) {
    console.error('[server] SSR render failed for region "' + slug + '":', renderErr);
    const wrapped = new Error('SSR render failed for region "' + slug + '": ' + renderErr.message);
    wrapped.status = 500;
    throw wrapped;
  }
  html = html.replace(
    /(<div id="case-study-root"[^>]*>)[\s\S]*?(<\/div>)/,
    '$1' + rendered + '$2'
  );

  const pageTitle = (data.breadcrumb && data.breadcrumb.here ? data.breadcrumb.here + ' — ' : '') +
    'Hy2Market Case Study';
  html = html.replace(/<title>.*?<\/title>/, '<title>' + esc(pageTitle) + '</title>');

  const description = (data.card && data.card.blurb) || (data.hero && data.hero.lead) ||
    'A Hy2Market regional green-hydrogen case study.';
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    '<meta name="description" content="' + esc(description) + '">'
  );

  // Canonical link + JSON-LD: supplementary metadata for crawlers/search
  // engines, generated from the same region data as the visible page —
  // never a substitute for the content already in the HTML body above.
  if (baseUrl) {
    const canonicalUrl = baseUrl + '/case-study.html?region=' + encodeURIComponent(slug);
    const headline = stripTags((data.hero && data.hero.titleHtml) || pageTitle);
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: headline,
      description: description,
      url: canonicalUrl,
      inLanguage: 'en'
    };
    const headExtra =
      '<link rel="canonical" href="' + esc(canonicalUrl) + '">\n' +
      '  <script type="application/ld+json">' + JSON.stringify(jsonLd).replace(/</g, '\\u003c') + '</script>\n';
    html = html.replace('</head>', headExtra + '</head>');
  }

  // Draft/review pages (identified by the same `data.banner` flag that
  // renders the "REVISED DRAFT"-style banner on the page itself, e.g.
  // upper-austria-revised) stay fully server-rendered and reachable — a
  // reviewer's link has to keep working — but are marked noindex so they
  // aren't treated as a public, canonical case study alongside the real
  // regions. Driven by the same flag the content already uses, not a
  // hardcoded slug, so any future draft page gets this automatically.
  if (data.banner) {
    html = html.replace('</head>', '<meta name="robots" content="noindex, nofollow">\n</head>');
  }

  return html;
}

const app = express();

// Trust the platform's proxy (Railway et al. terminate TLS upstream) so
// req.protocol/req.get('host') reflect the real public URL, not an internal
// http://localhost hop — needed to build a correct canonical link.
app.set('trust proxy', true);

function baseUrlFor(req) {
  return req.protocol + '://' + req.get('host');
}

// Always revalidate — matches the old Caddyfile's intent ("content updates
// show immediately"), which matters more here than on most static sites
// since these pages are actively being edited/reviewed.
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache');
  next();
});

app.get(['/', '/index.html'], (req, res) => {
  res.type('html').send(renderIndexHtml(baseUrlFor(req)));
});

app.get('/case-study.html', (req, res) => {
  const region = typeof req.query.region === 'string' ? req.query.region : undefined;
  res.type('html').send(renderCaseStudyHtml(region, baseUrlFor(req)));
});

// Everything else that's a real file (css, js, images, fonts) — served as-is.
app.use(express.static(APP_DIR, { index: false }));

// SPA-style fallback for anything unmatched, mirroring the old Caddyfile's
// `try_files {path} {path}/ /index.html`.
app.use((req, res) => {
  res.type('html').send(renderIndexHtml(baseUrlFor(req)));
});

// Must be last, and take 4 args, for Express to treat it as an error
// handler. A thrown SSR error lands here as a visible 500 with the region
// and cause logged server-side — never the silent empty shell.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error('[server] request failed:', req.originalUrl, err);
  res.status(err.status || 500).type('text/plain').send(
    'Server error rendering this page' + (err.message ? ': ' + err.message : '') + '.\n' +
    'This has been logged — it does not mean the region has no content.'
  );
});

// Exporting `app` (without starting it) lets tests spin up their own
// ephemeral-port instance instead of fighting over a fixed PORT.
module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log('Hy2Market case studies server listening on :' + PORT);
  });
}
