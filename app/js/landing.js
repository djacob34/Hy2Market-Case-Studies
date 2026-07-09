/* =========================================================================
   landing.js — builds the case-study index (card grid) for index.html.
   Reads every region registered in window.CASE_STUDIES (populated by the
   js/data/*.js files) and renders a card linking to
   case-study.html?region=<slug>. No build step, no dependencies.

   Card fields derive from each region's data object (hero + breadcrumb), so a
   card stays in sync with its case study automatically. A region may override
   any card field via an optional `card` object on its data:
     card: { kicker, title, blurb, tags: [..], accent: '#RRGGBB' }
   ========================================================================= */
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function cardHtml(d) {
    var c = d.card || {};
    var hero = d.hero || {};
    var slug = d.slug || '';
    var kicker = c.kicker || hero.eyebrow || '';
    var title = c.title || (d.breadcrumb && d.breadcrumb.here) || slug;
    var blurb = c.blurb || hero.lead || '';
    var tags = (c.tags || hero.tags || []).slice(0, 3);
    var accent = c.accent || 'var(--yellow)';
    var href = 'case-study.html?region=' + encodeURIComponent(slug);

    var tagHtml = tags.map(function (t) {
      return '<span class="tag">' + esc(t) + '</span>';
    }).join('');

    return '' +
      '<a class="cs-card" href="' + esc(href) + '">' +
        '<span class="cs-card-bar" style="background:' + esc(accent) + ';"></span>' +
        '<span class="cs-card-kicker">' + esc(kicker) + '</span>' +
        '<span class="cs-card-title">' + esc(title) + '</span>' +
        '<span class="cs-card-blurb">' + esc(blurb) + '</span>' +
        '<span class="cs-card-tags">' + tagHtml + '</span>' +
        '<span class="cs-card-cta">Read case study' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
        '</span>' +
      '</a>';
  }

  function boot() {
    var grid = document.getElementById('cs-grid');
    if (!grid) return;
    var registry = window.CASE_STUDIES || {};
    var studies = Object.keys(registry).map(function (k) { return registry[k]; });

    if (!studies.length) {
      grid.innerHTML = '<p class="cs-empty">No case studies registered yet.</p>';
      return;
    }
    grid.innerHTML = studies.map(cardHtml).join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
