/* =========================================================================
   interactions.js — attaches behavior to a rendered case-study.
   initInteractions(root, data): accordions, node/partner modals,
   TOC scroll-spy, process carousel, quote carousel, copy-link, scroll-reveal.
   ========================================================================= */
(function (root) {
  'use strict';

  function initInteractions(container, data) {
    container = container || document;

    /* ---------- scroll-reveal ---------- */
    (function () {
      var els = container.querySelectorAll('[data-reveal]');
      if (typeof IntersectionObserver === 'undefined') {
        els.forEach(function (el) { el.classList.add('is-visible'); });
        return;
      }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      requestAnimationFrame(function () { els.forEach(function (el) { io.observe(el); }); });
    })();

    /* ---------- solutions accordion (single-open) ---------- */
    (function () {
      var drawers = Array.prototype.slice.call(container.querySelectorAll('[data-drawer]'));
      drawers.forEach(function (dr) {
        var btn = dr.querySelector('.drawer-btn');
        btn.addEventListener('click', function () {
          var willOpen = dr.getAttribute('aria-expanded') !== 'true';
          drawers.forEach(function (o) {
            var open = o === dr && willOpen;
            o.setAttribute('aria-expanded', open ? 'true' : 'false');
            var b = o.querySelector('.drawer-btn');
            if (b) b.setAttribute('aria-expanded', open ? 'true' : 'false');
          });
        });
      });
    })();

    /* ---------- modals (node + partner) ---------- */
    var lastFocused = null;

    function openOverlay(overlay) {
      lastFocused = document.activeElement;
      overlay.hidden = false;
      var dialog = overlay.querySelector('.modal');
      if (dialog) dialog.focus();
    }
    function closeOverlay(overlay) {
      overlay.hidden = true;
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }
    function anyOpenOverlay() {
      return container.querySelector('.modal-overlay:not([hidden])');
    }

    var nodeOverlay = container.querySelector('[data-node-overlay]');
    var partnerOverlay = container.querySelector('[data-partner-overlay]');

    // node modal
    var nodeData = (data && data.system && data.system.nodeData) || {};
    container.querySelectorAll('[data-node]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var n = nodeData[btn.getAttribute('data-node')];
        if (!n || !nodeOverlay) return;
        nodeOverlay.querySelector('[data-node-title]').innerHTML = n.title;
        nodeOverlay.querySelector('[data-node-tag]').textContent = n.tag;
        nodeOverlay.querySelector('[data-node-body]').textContent = n.body;
        openOverlay(nodeOverlay);
      });
    });

    // partner modal
    var partnerData = {};
    ((data && data.partners) || []).forEach(function (p) { partnerData[p.id] = p; });
    container.querySelectorAll('[data-partner]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var p = partnerData[btn.getAttribute('data-partner')];
        if (!p || !partnerOverlay) return;
        var logoEl = partnerOverlay.querySelector('[data-partner-logo]');
        if (logoEl) logoEl.innerHTML = p.logoHtml || '';
        partnerOverlay.querySelector('[data-partner-title]').textContent = p.name;
        partnerOverlay.querySelector('[data-partner-role]').textContent = p.role;
        var bodyEl = partnerOverlay.querySelector('[data-partner-body]');
        // `bodyHtml` (rich, multi-paragraph) wins over plain `body` when present
        if (p.bodyHtml) { bodyEl.innerHTML = p.bodyHtml; } else { bodyEl.textContent = p.body || ''; }
        bodyEl.scrollTop = 0;
        openOverlay(partnerOverlay);
      });
    });

    // close: overlay click, close button, Esc
    [nodeOverlay, partnerOverlay].forEach(function (ov) {
      if (!ov) return;
      ov.addEventListener('click', function (e) {
        if (e.target === ov) closeOverlay(ov);
      });
      ov.querySelectorAll('[data-modal-close]').forEach(function (b) {
        b.addEventListener('click', function () { closeOverlay(ov); });
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var open = anyOpenOverlay();
        if (open) closeOverlay(open);
      }
    });

    /* ---------- copy link ---------- */
    (function () {
      var btn = container.querySelector('[data-copy-link]');
      var msg = container.querySelector('[data-copied-msg]');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var done = function () { if (msg) { msg.textContent = 'Link copied'; setTimeout(function () { msg.textContent = ''; }, 2000); } };
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(location.href).then(done, done);
          } else { done(); }
        } catch (e) { done(); }
      });
    })();

    /* ---------- process carousel (advance one item per click) ---------- */
    (function () {
      var el = container.querySelector('[data-carousel]');
      if (!el) return;
      var prev = container.querySelector('[data-carousel-prev]');
      var nextBtn = container.querySelector('[data-carousel-next]');
      var stepSize = function () {
        var track = el.firstElementChild;
        // timeline is a 6-column grid; one item = track width / columns
        var cols = 6;
        return track ? track.getBoundingClientRect().width / cols : 270;
      };
      if (prev) prev.addEventListener('click', function () { el.scrollBy({ left: -stepSize(), behavior: 'smooth' }); });
      if (nextBtn) nextBtn.addEventListener('click', function () { el.scrollBy({ left: stepSize(), behavior: 'smooth' }); });
    })();

    /* ---------- quote carousel ---------- */
    (function () {
      var quotes = (data && data.quotes) || [];
      if (!quotes.length) return;
      var textEl = container.querySelector('[data-quote-text]');
      var nameEl = container.querySelector('[data-quote-name]');
      var roleEl = container.querySelector('[data-quote-role]');
      var dots = Array.prototype.slice.call(container.querySelectorAll('[data-quote-dot]'));
      var i = 0;
      function render() {
        var q = quotes[i];
        if (textEl) textEl.textContent = q.text;
        if (nameEl) nameEl.textContent = q.name;
        if (roleEl) roleEl.textContent = q.role;
        dots.forEach(function (d, di) { d.classList.toggle('active', di === i); });
      }
      var prev = container.querySelector('[data-quote-prev]');
      var nextBtn = container.querySelector('[data-quote-next]');
      if (prev) prev.addEventListener('click', function () { i = (i - 1 + quotes.length) % quotes.length; render(); });
      if (nextBtn) nextBtn.addEventListener('click', function () { i = (i + 1) % quotes.length; render(); });
      dots.forEach(function (d, di) { d.addEventListener('click', function () { i = di; render(); }); });
      render();
    })();

    /* ---------- TOC scroll-spy (deterministic, click-locked) ---------- */
    (function () {
      var links = {};
      container.querySelectorAll('[data-toc-link]').forEach(function (a) { links[a.dataset.tocLink] = a; });
      var ids = Object.keys(links);
      if (!ids.length) return;

      function setActive(id) {
        ids.forEach(function (k) { links[k].classList.toggle('active', k === id); });
      }
      var LINE = 130;        // px from top of viewport
      var lockUntil = 0;
      function now() { return new Date().getTime(); }
      function computeActive() {
        if (now() < lockUntil) return;
        var current = ids[0];
        ids.forEach(function (id) {
          var el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top - LINE <= 1) current = id;
        });
        setActive(current);
      }
      setActive(ids[0]);
      window.addEventListener('scroll', computeActive, { passive: true });
      window.addEventListener('resize', computeActive);
      requestAnimationFrame(computeActive);

      ids.forEach(function (id) {
        links[id].addEventListener('click', function () {
          setActive(id);
          lockUntil = now() + 900;   // hold through the smooth scroll
        });
      });
    })();
  }

  var api = { initInteractions: initInteractions };
  root.CaseStudyInteractions = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : this);
