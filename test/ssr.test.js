/* =========================================================================
   test/ssr.test.js — every region in app/js/data/ must be crawlable: its
   first HTTP response (no JS run) has to already contain that region's
   real headline and body copy, not the empty #case-study-root shell.

   Regions come from the same fs.readdirSync(DATA_DIR) scan server.js uses
   to build its registry — nothing here is a manually maintained list, so a
   new region file is covered automatically the moment it's added.

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

test('every case-study region renders full content in the initial HTML response', async () => {
  const regions = loadAllRegions();
  assert.ok(regions.length > 0, 'no region data files found under app/js/data/ — test setup is broken');

  for (const region of regions) {
    const res = await fetch(baseUrl + '/case-study.html?region=' + encodeURIComponent(region.slug));
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

    // None of this depended on running any JS — fetch() above never
    // executed app/js/main.js or interactions.js.
  }
});
