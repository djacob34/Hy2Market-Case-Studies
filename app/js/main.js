/* =========================================================================
   main.js — bootstrap: pick the region's data, render it, wire behavior.
   The region is chosen by the ?region=<slug> query param; the landing page
   (index.html) links here. Defaults to upper-austria.
   ========================================================================= */
(function () {
  'use strict';

  function boot() {
    var mount = document.getElementById('case-study-root');
    if (!mount) return;

    var registry = window.CASE_STUDIES || {};
    var params = new URLSearchParams(window.location.search);
    var slug = params.get('region') || 'upper-austria';
    var data = registry[slug] || registry['upper-austria'] || Object.values(registry)[0];

    if (!data || !window.CaseStudyTemplate) {
      mount.innerHTML = '<p style="padding:40px;font-family:sans-serif;">No case-study data loaded.</p>';
      return;
    }

    // "Case studies" breadcrumb links back to the landing page.
    if (data.breadcrumb && (!data.breadcrumb.href || data.breadcrumb.href === '#')) {
      data.breadcrumb.href = './index.html';
    }

    document.title = (data.breadcrumb && data.breadcrumb.here ? data.breadcrumb.here + ' — ' : '') +
      'Hy2Market Case Study';

    // If the server already rendered this region's markup into the mount
    // (see server.js), it's identical to what we'd produce here — skip the
    // redundant re-render and go straight to wiring up behavior. Falls back
    // to a full client render when there's nothing there yet (e.g. served
    // as a plain static file with no SSR in front of it).
    if (!mount.children.length) {
      mount.innerHTML = window.CaseStudyTemplate.renderCaseStudy(data);
    }

    if (window.CaseStudyInteractions) {
      window.CaseStudyInteractions.initInteractions(mount, data);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
