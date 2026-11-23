/* =========================================================================
   test/ssr.test.js — every region in app/js/data/ must be crawlable: its
   first HTTP response (no JS run) has to already contain that region's
   real headline and body copy, not the empty #case-study-root shell. Also
   covers the routing layer around that: the legacy ?region= URLs redirect
   to the canonical clean path, robots.txt/sitemap.xml are correct, and
   response headers are conventional (public, cacheable — not no-store).

   Regions come from the same fs.readdirSync(DATA_DIR) scan server.js uses
   to build its registry — nothing here is a manually maintained list, so a
   new region file is covered automatically the moment it's added.

   This only proves the app itself serves full SSR HTML with sane headers.
   It runs against an in-process server, not the public Railway domain, so
   it cannot catch a problem introduced between Railway's edge and this
   process (CDN, proxy, DNS) — see .github/workflows/deploy-check.yml for
   that half of the picture, which runs from GitHub's network against the
   live URL.

   Run: npm test  (node --test)
   ========================================================================= */
'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const DATA_DIR = path.join(__dirname, '..', 'app', 'js', 'data');
const app = require('../server.js');

function stripTags(s) {
  return String(s == null ? '' : s).replace(/<[^>]+>/g, '');
}

function loadAllRegions() {
  return fs.readdirSync(DATA_DIR)
    .filter((f) => f.endsWith('.js'))
    .map((f) => require(path.join(DATA_DIR, f)))
    .filter((d) => d && d.slug);
}

let server;
let baseUrl;

test.before(async () => {
  server = app.listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  baseUrl = 'http://127.0.0.1:' + server.address().port;
});

test.after(() => {
  server.close();
});

test('every case-study region renders full content at its clean /case-studies/<slug>/ URL', async () => {
  const regions = loadAllRegions();
  assert.ok(regions.length > 0, 'no region data files found under app/js/data/ — test setup is broken');

  for (const region of regions) {
    const res = await fetch(baseUrl + '/case-studies/' + encodeURIComponent(region.slug) + '/');
    const html = await res.text();

    assert.equal(res.status, 200, region.slug + ': expected HTTP 200, got ' + res.status);

    // The root must not be the empty shell app/case-study.html ships with —
    // that's exactly what a non-JS crawler sees when SSR didn't run.
    assert.ok(
      !/<div id="case-study-root"[^>]*><\/div>/.test(html),
      region.slug + ': #case-study-root is empty — this region did not get server-rendered'
    );

    const regionName = (region.breadcrumb && region.breadcrumb.here) || (region.card && region.card.title);
    assert.ok(regionName, region.slug + ': fixture has no region name to check against');
    assert.ok(html.includes(regionName), region.slug + ': missing region name "' + regionName + '"');

    const headline = region.hero && stripTags(region.hero.titleHtml);
    assert.ok(headline, region.slug + ': fixture has no hero headline to check against');
    assert.ok(html.includes('<h1'), region.slug + ': missing an <h1> heading');
    assert.ok(html.includes(headline), region.slug + ': missing hero headline text');

    // Substantive body copy, not just a title — the hero lead paragraph.
    if (region.hero && region.hero.lead) {
      assert.ok(html.includes(region.hero.lead), region.slug + ': missing hero lead paragraph');
    }

    // Substantive overall: guard against a region that passes every string
    // check above via just the hero, but has an otherwise-truncated or
    // failed render for the rest of the page (overview, solutions, system,
    // outcomes, etc.). 20KB is comfortably below every current region's
    // actual size (30KB+) but well above a hero-only fragment.
    assert.ok(
      html.length > 20000,
      region.slug + ': response is only ' + html.length + ' bytes — looks truncated, not a full page'
    );

    // Draft/review regions (flagged via data.banner, e.g. the "REVISED
    // DRAFT" partner-review page) must stay fully server-rendered and
    // reachable, but marked noindex so they aren't picked up as a public,
    // canonical case study. Published regions must NOT carry that tag.
    const hasNoindex = /<meta name="robots" content="noindex/.test(html);
    if (region.banner) {
      assert.ok(hasNoindex, region.slug + ': draft region (has data.banner) should be marked noindex');
    } else {
      assert.ok(!hasNoindex, region.slug + ': published region should not be marked noindex');
    }

    // None of this depended on running any JS — fetch() above never
    // executed app/js/main.js or interactions.js.
  }
});

test('legacy ?region= URLs 301-redirect to the clean /case-studies/<slug>/ route', async () => {
  const regions = loadAllRegions();
  for (const region of regions) {
    const res = await fetch(
      baseUrl + '/case-study.html?region=' + encodeURIComponent(region.slug),
      { redirect: 'manual' }
    );
    assert.equal(res.status, 301, region.slug + ': expected a 301 redirect, got ' + res.status);
    assert.equal(
      res.headers.get('location'),
      '/case-studies/' + encodeURIComponent(region.slug) + '/',
      region.slug + ': redirected to the wrong location'
    );
  }
});

test('/case-study.html with no region redirects to the default region', async () => {
  const res = await fetch(baseUrl + '/case-study.html', { redirect: 'manual' });
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), '/case-studies/upper-austria/');
});

test('/case-studies/<slug> (no trailing slash) redirects to the trailing-slash form', async () => {
  const res = await fetch(baseUrl + '/case-studies/asturias', { redirect: 'manual' });
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), '/case-studies/asturias/');
});

test('robots.txt allows crawling and points to the sitemap', async () => {
  const res = await fetch(baseUrl + '/robots.txt');
  const body = await res.text();
  assert.equal(res.status, 200);
  assert.match(body, /Allow:\s*\//);
  assert.match(body, /Sitemap:\s*\S+\/sitemap\.xml/);
});

test('sitemap.xml lists every published region and excludes draft/review ones', async () => {
  const regions = loadAllRegions();
  const res = await fetch(baseUrl + '/sitemap.xml');
  const body = await res.text();
  assert.equal(res.status, 200);
  for (const region of regions) {
    const loc = '/case-studies/' + region.slug + '/';
    if (region.banner) {
      assert.ok(!body.includes(loc), region.slug + ': draft region should not be in the sitemap');
    } else {
      assert.ok(body.includes(loc), region.slug + ': published region missing from the sitemap');
    }
  }
});

test('a case-study response advertises a public, cacheable Cache-Control', async () => {
  const res = await fetch(baseUrl + '/case-studies/upper-austria/');
  const cc = res.headers.get('cache-control') || '';
  assert.match(cc, /public/);
  assert.doesNotMatch(cc, /no-store|private/);
});

test('retired Upper Austria draft slug 301-redirects to the published page', async () => {
  for (const path of ['/case-studies/upper-austria-revised/', '/case-studies/upper-austria-revised']) {
    const res = await fetch(baseUrl + path, { redirect: 'manual' });
    assert.equal(res.status, 301, path);
    assert.equal(res.headers.get('location'), '/case-studies/upper-austria/', path);
  }
});

test('local CSS/JS links carry a content-hash ?v= so a new deploy never pairs new HTML with cached old CSS', async () => {
  for (const url of ['/', '/case-studies/upper-austria/']) {
    const html = await (await fetch(baseUrl + url)).text();
    const links = html.match(/(?:href|src)="\/(?:css|js)\/[^"]+"/g) || [];
    assert.ok(links.length > 0, url + ' has local CSS/JS links');
    for (const l of links) assert.match(l, /\?v=[0-9a-f]{10}"$/, url + ': ' + l + ' is versioned');
    const css = html.match(/href="(\/css\/styles\.css\?v=[0-9a-f]+)"/);
    assert.ok(css, url + ' links styles.css');
    const res = await fetch(baseUrl + css[1]);
    assert.equal(res.status, 200);
    assert.match(res.headers.get('content-type') || '', /text\/css/);
  }
});

test('versioned assets: matching hash is long-cached, mismatched hash is never cached', async () => {
  const html = await (await fetch(baseUrl + '/')).text();
  const url = html.match(/href="(\/css\/styles\.css\?v=[0-9a-f]+)"/)[1];
  const ok = await fetch(baseUrl + url);
  assert.match(ok.headers.get('cache-control') || '', /immutable/);
  const stale = await fetch(baseUrl + '/css/styles.css?v=0000000000');
  assert.equal(stale.status, 200);
  assert.match(stale.headers.get('cache-control') || '', /no-store/);
});

test('every "continue the story" card shows the same image as that region\'s index card', async () => {
  const regions = loadAllRegions();
  const bySlug = Object.fromEntries(regions.map((d) => [d.slug, d]));
  const indexImg = (d) => {
    const h = d.hero || {};
    return (h.slideshow && h.slideshow[0] && h.slideshow[0].src) || h.poster || null;
  };
  for (const d of regions) {
    if (!d.next) continue;
    const html = await (await fetch(baseUrl + '/case-studies/' + d.slug + '/')).text();
    const next = html.slice(html.indexOf('<section class="next"'));
    const cards = [...next.matchAll(/<a class="(?:featured|region-card)" href="\/case-studies\/([^/]+)\/">([\s\S]*?)<\/a>/g)];
    assert.equal(cards.length, 1 + d.next.others.length, d.slug + ': every next card links to a clean /case-studies/<slug>/ URL');
    for (const [, slug, body] of cards) {
      const want = indexImg(bySlug[slug]);
      if (!want) continue;
      assert.ok(body.includes("url('" + want + "')"), d.slug + ' → ' + slug + ' card uses ' + want);
    }
  }
});
