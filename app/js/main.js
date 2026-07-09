/* =========================================================================
   main.js — bootstrap: pick the region's data, render it, wire behavior.
   To render a different region, load its data file instead of upper-austria.js
   (or key off a ?region= param once several are registered).
   ========================================================================= */
(function () {
  'use strict';

  function boot() {
    var mount = document.getElementById('case-study-root');
    if (!mount) return;

    var registry = window.CASE_STUDIES || {};
    // default to upper-austria; allow ?region=<slug> to select another once registered
    var params = new URLSearchParams(window.location.search);
    var slug = params.get('region') || 'upper-austria';
    var data = registry[slug] || registry['upper-austria'] || Object.values(registry)[0];

    if (!data || !window.CaseStudyTemplate) {
      mount.innerHTML = '<p style="padding:40px;font-family:sans-serif;">No case-study data loaded.</p>';
      return;
    }

    document.title = (data.breadcrumb && data.breadcrumb.here ? data.breadcrumb.here + ' — ' : '') +
      'Hy2Market Case Study';

    mount.innerHTML = window.CaseStudyTemplate.renderCaseStudy(data);

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
