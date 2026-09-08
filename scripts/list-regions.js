#!/usr/bin/env node
/* =========================================================================
   scripts/list-regions.js — print every published region as
   "<slug>\t<expected substring>" (one per line), reading the exact same
   app/js/data/*.js files server.js discovers regions from. Draft/review
   regions (data.banner) are excluded — same rule as the sitemap.

   Used by scripts/check-deploy.sh so the deploy check never needs its own
   manually maintained region list.
   ========================================================================= */
'use strict';

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'app', 'js', 'data');

fs.readdirSync(DATA_DIR)
  .filter((f) => f.endsWith('.js'))
  .map((f) => require(path.join(DATA_DIR, f)))
  .filter((d) => d && d.slug && !d.banner)
  .sort((a, b) => a.slug.localeCompare(b.slug))
  .forEach((d) => {
    // breadcrumb.here is what actually renders on the case-study detail
    // page itself (breadcrumb + "View all case studies" back-link context);
    // card.title is landing-page-card-only text, so it's just the fallback.
    const expect = (d.breadcrumb && d.breadcrumb.here) || (d.card && d.card.title) || d.slug;
    process.stdout.write(d.slug + '\t' + expect + '\n');
  });
