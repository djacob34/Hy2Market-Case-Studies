/* =========================================================================
   prerender.js — generates static HTML fragments under app/prerendered/,
   one per region, so non-JS clients (crawlers, link-preview bots, tools
   that fetch raw HTML without executing JavaScript) see real content when
   they load case-study.html?region=<slug>.

   These fragments are what Caddy's `templates` directive inlines into
   case-study.html's #case-study-root for the matching ?region= value (see
   Caddyfile). On any browser with JS enabled, main.js immediately
   overwrites that markup with the live, interactive render — the
   fragments are a fallback only, never the source of truth.

   Run this after editing any file under js/data/ or js/template.js:
     node app/scripts/prerender.js
   ========================================================================= */
'use strict';

const fs = require('fs');
const path = require('path');

const REGIONS = [
  'upper-austria',
  'netherlands',
  'medio-tejo',
  'asturias',
  'western-macedonia',
  'upper-austria-revised'
];

const template = require('../js/template.js');
const outDir = path.join(__dirname, '..', 'prerendered');

fs.mkdirSync(outDir, { recursive: true });

for (const slug of REGIONS) {
  const data = require(`../js/data/${slug}.js`);
  const html = template.renderCaseStudy(data);
  // Caddy's `include` action (see Caddyfile) executes the included file as
  // a text/template itself, recursively. A stray "{{" in region content
  // (an em-dash pasted as literal braces, a code snippet, etc.) would break
  // parsing and 500 the live page for that region — fail loudly instead.
  if (html.includes('{{') || html.includes('}}')) {
    console.error(`ERROR: prerendered/${slug}.html contains "{{" or "}}", ` +
      'which Caddy would try to parse as a template action. Find and ' +
      'remove/escape it in js/data/' + slug + '.js before committing.');
    process.exitCode = 1;
    continue;
  }
  fs.writeFileSync(path.join(outDir, `${slug}.html`), html);
  console.log(`wrote prerendered/${slug}.html (${html.length} bytes)`);
}
