/* =========================================================================
   template.js — pure functions that turn a case-study data object into markup.
   No DOM access, no side effects: renderCaseStudy(data) -> HTML string.
   (Behavior is attached separately in interactions.js.)
   ========================================================================= */
(function (root) {
  'use strict';

  // escape only where we insert untrusted-ish text (attributes / plain text).
  // Rich fields that intentionally carry markup are named *Html / *html.
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  var ARC_TL =
    '<svg class="arc-tl" viewBox="0 0 400 400" fill="none" aria-hidden="true">' +
      '<path class="arc-draw" d="M398,2 A396,396 0 0 0 2,398" stroke="#FFED00" stroke-width="1.5" stroke-dasharray="1600"/>' +
      '<path d="M370,2 A368,368 0 0 0 2,370" stroke="#d8d8d8" stroke-width="1"/>' +
      '<path d="M344,2 A342,342 0 0 0 2,344" stroke="rgba(255,237,0,0.45)" stroke-width="1"/>' +
    '</svg>';

  var ARC_TR =
    '<svg class="arc-tr" viewBox="0 0 420 420" fill="none" aria-hidden="true">' +
      '<path class="arc-draw" d="M10,410 A400,400 0 0 1 410,10" stroke="#FFED00" stroke-width="1.5" stroke-dasharray="1300"/>' +
      '<path d="M44,410 A366,366 0 0 1 410,44" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>' +
      '<path d="M78,410 A332,332 0 0 1 410,78" stroke="rgba(255,237,0,0.4)" stroke-width="1"/>' +
    '</svg>';

  var BRAND =
    '<span class="brand-lockup">Hy<span class="two">2</span>Market</span>';

  function chevron(dir) {
    var d = dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6';
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="' + d + '"/></svg>';
  }

  /* ---- HERO ---- */
  function hero(d) {
    var h = d.hero;
    var stats = h.stats.map(function (s) {
      return '<div class="hero-stat"><div class="stat-tick"></div>' +
        '<div class="stat-num">' + esc(s.num) + '</div>' +
        '<div class="stat-label">' + esc(s.label) + '</div></div>';
    }).join('');
    var tags = h.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('');
    var bc = d.breadcrumb;
    return '' +
    '<header class="hero">' +
      ARC_TL +
      '<div class="topbar">' +
        '<div class="topbar-left">' +
          '<a class="hero-back" href="' + esc(bc.href) + '">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>' +
            'View all case studies</a>' +
          BRAND +
        '</div>' +
        '<nav class="breadcrumb" aria-label="Breadcrumb">' +
          '<a href="' + esc(bc.href) + '">' + esc(bc.label) + '</a><span>/</span>' +
          '<span class="here">' + esc(bc.here) + '</span>' +
        '</nav>' +
      '</div>' +
      '<div class="hero-grid">' +
        '<div class="hero-text">' +
          '<p class="eyebrow hero-eyebrow"><span class="tick"></span>' + esc(h.eyebrow) + '</p>' +
          '<div>' +
            '<h1 class="hero-title">' + h.titleHtml + '</h1>' +
            '<p class="hero-lead">' + esc(h.lead) + '</p>' +
            '<div class="tags">' + tags + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="hero-media">' +
          '<div class="media-grain"></div>' +
          '<div class="light-streak"></div><div class="light-streak thin"></div>' +
          '<div class="media-caption">' + esc(h.mediaCaption) + '</div>' +
          ARC_TR +
        '</div>' +
      '</div>' +
      '<div class="hero-stats">' + stats + '</div>' +
    '</header>';
  }

  /* ---- PARTNER BAND ---- */
  function partners(d) {
    var logos = d.partners.map(function (p) {
      var cls = 'partner' + (p.col ? ' lg-col' : '');
      var style = p.gap ? ' style="gap:' + esc(p.gap) + ';"' : '';
      return '<button type="button" class="' + cls + '" data-partner="' + esc(p.id) + '"' + style + '>' +
        p.logoHtml +
        '<span class="partner-tip" role="tooltip">Click to learn about this partner’s role</span>' +
      '</button>';
    }).join('');
    return '' +
    '<section class="partners" aria-label="Project partners">' +
      '<div class="partners-inner">' +
        '<span class="partners-label">PROJECT PARTNERS</span>' +
        '<div class="partner-logos">' + logos + '</div>' +
      '</div>' +
    '</section>';
  }

  /* ---- SIDEBAR / TOC ---- */
  function sidebar(d) {
    var links = d.toc.map(function (t) {
      return '<a class="toc-link" href="#' + esc(t.id) + '" data-toc-link="' + esc(t.id) + '">' +
        '<span class="toc-bar"></span><span>' + esc(t.label) + '</span></a>';
    }).join('');
    return '' +
    '<aside class="sidebar">' +
      '<div class="toc-card">' +
        '<div class="toc-label">ON THIS PAGE</div>' +
        '<nav class="toc-nav" aria-label="On this page">' + links + '</nav>' +
        '<div class="toc-rule"></div>' +
        '<div class="share-label">SHARE</div>' +
        '<div class="share-row">' +
          '<a class="share-btn in" href="https://www.linkedin.com" target="_blank" rel="noopener" aria-label="Share on LinkedIn">in</a>' +
          '<a class="share-btn x" href="https://x.com" target="_blank" rel="noopener" aria-label="Share on X">X</a>' +
          '<button type="button" class="share-btn" data-copy-link title="Copy link" aria-label="Copy link">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="share-copied" data-copied-msg aria-live="polite"></div>' +
        '<a class="download-btn" href="' + esc(d.downloadHref) + '">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>' +
          'Download case study</a>' +
      '</div>' +
    '</aside>';
  }

  // The anchor id lives on the <section> wrapper; headings must not duplicate it.
  function secHead(title, opts) {
    opts = opts || {};
    var dotCls = 'dot' + (opts.plainDot ? ' dot--plain' : '');
    return '<div class="sec-head"><div class="title-row"><span class="' + dotCls + '"></span>' +
      '<h2 class="sec-title">' + esc(title) + '</h2></div></div>';
  }

  /* ---- OVERVIEW (summary box) ---- */
  // The "outcome" block is pulled out and rendered as a centered, highlighted
  // callout below the challenge/innovation blocks. It is identified by an
  // OUTCOME label (falling back to the last block if none matches).
  function overview(d) {
    var items = d.overview || [];
    var outcome = null, leads = [];
    items.forEach(function (o) {
      if (!outcome && /outcome/i.test(o.label)) outcome = o;
      else leads.push(o);
    });
    if (!outcome && items.length) { outcome = items[items.length - 1]; leads = items.slice(0, -1); }

    function block(o) {
      return '<div class="ov-block"><div class="ov-label"><span class="ov-dot ' +
        (o.tone === 'black' ? 'black' : 'yellow') + '"></span>' + esc(o.label) + '</div>' +
        '<p class="ov-text">' + esc(o.text) + '</p></div>';
    }
    var leadsHtml = leads.length
      ? '<div class="ov-leads">' + leads.map(block).join('') + '</div>' : '';
    var outcomeHtml = outcome
      ? '<div class="ov-outcome"><div class="ov-label"><span class="ov-dot yellow"></span>' +
          esc(outcome.label) + '</div><p class="ov-text">' + esc(outcome.text) + '</p></div>'
      : '';
    return '<section id="toc-overview" class="overview" data-reveal>' + leadsHtml + outcomeHtml + '</section>';
  }

  /* ---- VIDEO ---- */
  function video(d) {
    return '' +
    '<section class="video" data-reveal>' +
      '<div class="video-frame">' +
        '<div class="video-grain"></div>' +
        '<button type="button" class="video-play" aria-label="Play video">' +
          '<svg width="26" height="26" viewBox="0 0 24 24" fill="#000"><path d="M8 5v14l11-7z"/></svg>' +
        '</button>' +
      '</div>' +
      '<p class="video-caption">' + esc(d.video.caption) + '</p>' +
    '</section>';
  }

  /* ---- REGION + MAP ---- */
  function region(d) {
    var r = d.region;
    var paras = r.paragraphs.map(function (p) { return '<p class="prose">' + p + '</p>'; }).join('');
    var pins = r.map.pins.map(function (p) {
      var labelCls = 'plabel' + (p.right ? ' right' : '');
      var label = p.right
        ? '<span class="sub">' + esc(p.sub) + '</span>' + esc(p.label)
        : esc(p.label) + ' <span class="sub">' + esc(p.sub) + '</span>';
      return '<div class="pin" style="left:' + esc(p.left) + '; top:' + esc(p.top) + ';">' +
        '<span class="marker ' + (p.color === 'yellow' ? 'yellow' : 'black') + '"></span>' +
        '<span class="' + labelCls + '">' + label + '</span></div>';
    }).join('');
    return '' +
    '<section id="toc-region" class="section mt-block" data-reveal>' +
      secHead(r.title) +
      '<div class="region-grid">' +
        '<div>' + paras + '</div>' +
        '<div class="map">' +
          '<div class="map-grid"></div>' +
          '<svg class="shape" viewBox="0 0 100 86" fill="none" preserveAspectRatio="none" aria-hidden="true">' +
            '<path d="M14,40 C24,24 44,18 58,24 C70,29 84,26 90,40 C94,52 82,62 70,60 C60,58 50,70 38,66 C24,61 8,54 14,40 Z" fill="rgba(255,237,0,0.16)" stroke="#cfcfca" stroke-width="0.5"/>' +
            '<path d="M28,50 L52,42 L74,48" stroke="#000" stroke-width="0.5" stroke-dasharray="2 2"/>' +
          '</svg>' +
          pins +
          '<span class="map-caption">' + esc(r.map.caption) + '</span>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ---- OPPORTUNITY ---- */
  function opportunity(d) {
    var o = d.opportunity;
    var stats = [];
    o.startStats.forEach(function (s, i) {
      if (i > 0) stats.push('<div class="scd-rule"></div>');
      stats.push('<div><div class="scd-num">' + esc(s.num) + '</div><div class="scd-sub">' + esc(s.sub) + '</div></div>');
    });
    return '' +
    '<section id="toc-opportunity" class="section mt-block" data-reveal>' +
      secHead(o.title) +
      '<div class="opp-grid">' +
        '<div><p class="lead-para">' + o.leadHtml + '</p><p class="prose">' + esc(o.body) + '</p></div>' +
        '<div class="stat-card-dark"><div class="scd-label">' + esc(o.startLabel) + '</div>' +
          '<div class="scd-list">' + stats.join('') + '</div></div>' +
      '</div>' +
    '</section>';
  }

  /* ---- SOLUTIONS (accordions) ---- */
  function solutions(d) {
    var s = d.solutions;
    var drawers = s.drawers.map(function (dr, i) {
      var tex = 'repeating-linear-gradient(' + dr.tex + 'deg, rgba(255,255,255,0.06) 0 2px, transparent 2px 14px)';
      var texBig = 'repeating-linear-gradient(' + dr.tex + 'deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 22px)';
      var stats = dr.stats.map(function (st) {
        return '<div class="stat-box"><div class="n">' + esc(st.n) + '</div><div class="l">' + st.l + '</div></div>';
      }).join('');
      var cta = dr.cta ? '<a class="cta-pill" href="' + esc(dr.cta.href) + '">' + esc(dr.cta.label) + ' <span class="arrow">→</span></a>' : '';
      var panelId = 'drawer-panel-' + i;
      return '' +
      '<div class="drawer" data-drawer="' + i + '" aria-expanded="false">' +
        '<button type="button" class="drawer-btn" aria-expanded="false" aria-controls="' + panelId + '">' +
          '<div class="drawer-thumb" style="background:' + dr.thumbGrad + ';"><div class="tex" style="background:' + tex + ';"></div></div>' +
          '<div class="drawer-meta"><div class="drawer-title">' + dr.title + '</div>' +
            '<div class="drawer-sub">' + esc(dr.subtitle) + '</div></div>' +
          '<span class="drawer-toggle" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span>' +
        '</button>' +
        '<div class="drawer-panel" id="' + panelId + '" role="region">' +
          '<div class="drawer-photo" style="background:' + dr.thumbGrad + ';"><div class="tex" style="background:' + texBig + ';"></div>' +
            '<span class="cap">' + esc(dr.photoCaption) + '</span></div>' +
          '<p class="drawer-body">' + dr.body + '</p>' +
          '<div class="stat-boxes">' + stats + '</div>' +
          cta +
        '</div>' +
      '</div>';
    }).join('');
    return '' +
    '<section id="toc-solutions" class="section mt-block" data-reveal>' +
      '<div class="sec-head" style="margin-bottom:14px;"><div class="title-row"><span class="dot"></span>' +
        '<h2 class="sec-title">' + esc(s.title) + '</h2></div></div>' +
      '<p class="intro">' + esc(s.intro) + '</p>' + drawers +
    '</section>';
  }

  /* ---- SYSTEM DIAGRAM ---- */
  function system(d) {
    var s = d.system;
    function node(n, extraCls) {
      var cls = 'node' + (n.core ? ' core' : '') + (extraCls ? ' ' + extraCls : '');
      var kicker = n.kicker ? '<div class="kicker">' + esc(n.kicker) + '</div>' : '';
      return '<button type="button" class="' + cls + '" data-node="' + esc(n.id) + '" title="' + esc(n.title) + '">' +
        kicker + '<div class="nname">' + n.name + '</div><div class="nsub">' + n.sub + '</div></button>';
    }
    var chain = [];
    s.chain.forEach(function (n, i) {
      if (i > 0) chain.push('<div class="chain-arrow" aria-hidden="true">→</div>');
      chain.push(node(n));
    });
    var branches = s.branches.map(function (n) { return node(n); }).join('');
    return '' +
    '<section id="toc-system" class="section mt-block" data-reveal>' +
      '<div class="system">' +
        '<div class="sec-head"><div class="title-row"><span class="dot dot--plain"></span>' +
          '<h2 class="sec-title">' + esc(s.title) + '</h2></div></div>' +
        '<p class="system-intro">' + esc(s.intro) + '</p>' +
        '<div class="chain">' + chain.join('') + '</div>' +
        '<div class="branch-label"><span class="bdot"></span><span class="btxt">BRANCHES TO</span><span class="bline"></span></div>' +
        '<div class="branches">' + branches + '</div>' +
      '</div>' +
    '</section>';
  }

  /* ---- PROCESS (timeline carousel) ---- */
  function process(d) {
    var p = d.process;
    var steps = p.steps.map(function (st) {
      var stepCls = 'tl-step' + (st.current ? ' current' : '');
      var date;
      if (st.current) {
        date = '<div class="tl-date here">' + esc(st.date) + '</div>';
      } else if (st.badge) {
        date = '<div class="tl-date year-badge">' + esc(st.date) + '</div>';
      } else {
        var mut = st.dateMuted ? ' <span class="muted">' + esc(st.dateMuted) + '</span>' : '';
        date = '<div class="tl-date">' + esc(st.date) + mut + '</div>';
      }
      return '<div class="' + stepCls + '"><span class="tl-node"></span>' + date +
        '<p class="tl-text">' + esc(st.text) + '</p></div>';
    }).join('');
    return '' +
    '<section id="toc-process" class="section mt-block" data-reveal>' +
      '<div class="process-head">' +
        '<div class="sec-head" style="margin-bottom:0;"><div class="title-row"><span class="dot"></span>' +
          '<h2 class="sec-title">' + esc(p.title) + '</h2></div></div>' +
        '<div class="carousel-nav">' +
          '<button type="button" class="nav-btn" data-carousel-prev aria-label="Previous">' + chevron('left') + '</button>' +
          '<button type="button" class="nav-btn" data-carousel-next aria-label="Next">' + chevron('right') + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="carousel" data-carousel>' +
        '<div class="timeline">' +
          '<div class="timeline-base"></div>' +
          '<div class="timeline-fill" style="width:' + esc(p.fillPercent) + ';"></div>' +
          steps +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ---- LESSONS ---- */
  function lessons(d) {
    var l = d.lessons;
    return '' +
    '<section id="toc-lessons" class="section mt-block" data-reveal>' +
      secHead(l.title) +
      '<div class="measure"><p class="lead-para">' + l.leadHtml + '</p>' +
        '<p class="prose">' + esc(l.body) + '</p></div>' +
    '</section>';
  }

  /* ---- OUTCOMES ---- */
  function outcomes(d) {
    var o = d.outcomes;
    var stats = o.stats.map(function (s) {
      return '<div class="oc ' + esc(s.tone) + '"><div class="n">' + esc(s.n) + '</div><div class="l">' + esc(s.l) + '</div></div>';
    }).join('');
    var pending = o.pending.map(function (pn) {
      return '<div class="pending"><div class="n">' + esc(pn.n) + '</div><div class="l">' + pn.l + '</div></div>';
    }).join('');
    return '' +
    '<section id="toc-outcomes" class="section mt-block" data-reveal>' +
      secHead(o.title) +
      '<div class="outcome-stats">' + stats + '</div>' +
      '<p class="outcome-narrative">' + esc(o.narrative) + '</p>' +
      '<div class="pending-row">' + pending + '</div>' +
    '</section>';
  }

  /* ---- KNOWLEDGE EXCHANGE ---- */
  function knowledge(d) {
    var k = d.knowledge;
    var cards = k.cards.map(function (c) {
      return '<div class="kx-card"><div class="kx-top">' +
        '<span class="kx-badge ' + (c.dir === 'in' ? 'in' : 'out') + '">' + esc(c.arrow) + '</span>' +
        '<div class="kx-dir">' + esc(c.label) + '</div></div>' +
        '<div class="kx-region">' + esc(c.region) + ' <span class="c">' + esc(c.country) + '</span></div>' +
        '<p class="kx-text">' + esc(c.text) + '</p></div>';
    }).join('');
    return '' +
    '<section id="toc-knowledge" class="section mt-block" data-reveal>' +
      '<div class="sec-head" style="margin-bottom:18px;"><div class="title-row"><span class="dot"></span>' +
        '<h2 class="sec-title">' + esc(k.title) + '</h2></div></div>' +
      '<p class="intro">' + esc(k.intro) + '</p>' +
      '<div class="kx-grid">' + cards + '</div>' +
    '</section>';
  }

  /* ---- MODALS (empty shells, populated by interactions.js) ---- */
  function modals() {
    function closeBtn() {
      return '<button type="button" class="modal-close" data-modal-close aria-label="Close">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>';
    }
    return '' +
    '<div class="modal-overlay" data-node-overlay hidden>' +
      '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="node-modal-title" tabindex="-1">' +
        closeBtn() +
        '<div class="modal-kicker">SYSTEM NODE</div>' +
        '<h3 id="node-modal-title" data-node-title></h3>' +
        '<div class="modal-tag" data-node-tag></div>' +
        '<p class="modal-body" data-node-body></p>' +
      '</div>' +
    '</div>' +
    '<div class="modal-overlay" data-partner-overlay hidden>' +
      '<div class="modal partner" role="dialog" aria-modal="true" aria-labelledby="partner-modal-title" tabindex="-1">' +
        closeBtn() +
        '<div class="modal-kicker">PROJECT PARTNER</div>' +
        '<h3 id="partner-modal-title" data-partner-title></h3>' +
        '<div class="modal-tag" data-partner-role></div>' +
        '<p class="modal-body" data-partner-body></p>' +
      '</div>' +
    '</div>';
  }

  /* ---- QUOTES ---- */
  function quotes(d) {
    var dots = d.quotes.map(function (_, i) {
      return '<button type="button" class="qdot' + (i === 0 ? ' active' : '') + '" data-quote-dot="' + i + '" aria-label="Go to quote ' + (i + 1) + '"></button>';
    }).join('');
    return '' +
    '<section class="quotes" aria-label="Quotes">' +
      '<div class="wrap">' +
        '<p class="eyebrow"><span class="dash"></span>' + esc(d.quotesEyebrow) + '</p>' +
        '<div class="quote-grid">' +
          '<span class="quote-mark" aria-hidden="true">“</span>' +
          '<div>' +
            '<blockquote class="quote-text" data-quote-text></blockquote>' +
            '<div class="quote-attr"><span class="rule"></span><div>' +
              '<div class="quote-name" data-quote-name></div>' +
              '<div class="quote-role" data-quote-role></div>' +
            '</div></div>' +
          '</div>' +
        '</div>' +
        '<div class="quote-controls">' +
          '<div class="quote-dots">' + dots + '</div>' +
          '<div class="quote-nav">' +
            '<button type="button" class="qnav-btn" data-quote-prev aria-label="Previous quote"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>' +
            '<button type="button" class="qnav-btn" data-quote-next aria-label="Next quote"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ---- NEXT CASE STUDY ---- */
  function next(d) {
    var n = d.next;
    var f = n.featured;
    var chips = f.chips.map(function (c) { return '<span class="chip">' + esc(c) + '</span>'; }).join('');
    var others = n.others.map(function (o) {
      return '<a class="region-card" href="' + esc(o.href) + '">' +
        '<div class="k">' + esc(o.k) + '</div>' +
        '<div class="r">' + esc(o.region) + ' <span class="c">' + esc(o.country) + '</span></div>' +
        '<div class="d">' + esc(o.d) + '</div>' +
        '<span class="read">Read →</span></a>';
    }).join('');
    return '' +
    '<section class="next" aria-label="Next case study">' +
      '<div class="wrap">' +
        '<div class="next-head">' +
          '<p class="eyebrow"><span class="dash"></span>' + esc(n.eyebrow) + '</p>' +
          '<a class="all-link" href="' + esc(n.allHref) + '">All case studies <span>→</span></a>' +
        '</div>' +
        '<a class="featured" href="' + esc(f.href) + '">' +
          '<div class="featured-text">' +
            '<div class="featured-kicker"><span class="d"></span>' + esc(f.kicker) + '</div>' +
            '<div><h2 class="featured-title">' + esc(f.title) + '</h2>' +
              '<p class="featured-lead">' + esc(f.lead) + '</p></div>' +
            '<div class="featured-foot"><div class="chip-row">' + chips + '</div>' +
              '<span class="read-cta">Read case study <span class="circ">→</span></span></div>' +
          '</div>' +
          '<div class="featured-media">' +
            '<div class="media-grain"></div>' +
            '<div class="light-streak"></div>' +
            '<svg class="arc" viewBox="0 0 420 420" fill="none" aria-hidden="true">' +
              '<path d="M410,10 A400,400 0 0 1 10,410" stroke="#FFED00" stroke-width="2.5"/>' +
              '<path d="M410,70 A340,340 0 0 1 70,410" stroke="rgba(255,237,0,0.35)" stroke-width="1.5"/>' +
            '</svg>' +
            '<span class="cap">' + esc(f.caption) + '</span>' +
          '</div>' +
        '</a>' +
        '<div class="other-regions">' + others + '</div>' +
      '</div>' +
    '</section>';
  }

  /* ---- FOOTER ---- */
  function footer(d) {
    var f = d.footer;
    var cols = f.cols.map(function (c) {
      return '<div class="footer-col"><div class="h">' + esc(c.h) + '</div>' + c.html + '</div>';
    }).join('');
    var flinks = f.contact.links.map(function (l) {
      return '<a href="' + esc(l.href) + '">' + esc(l.label) + '</a>';
    }).join('');
    return '' +
    '<footer class="footer">' +
      '<div class="footer-grid">' +
        '<div>' + BRAND +
          '<div class="eu">' +
            '<svg width="46" height="32" viewBox="0 0 46 32" aria-hidden="true"><rect width="46" height="32" rx="2" fill="#003399"/><g fill="#FFCC00"><circle cx="23" cy="8" r="1.2"/><circle cx="27.5" cy="9.2" r="1.2"/><circle cx="30.8" cy="12.5" r="1.2"/><circle cx="32" cy="16" r="1.2"/><circle cx="30.8" cy="19.5" r="1.2"/><circle cx="27.5" cy="22.8" r="1.2"/><circle cx="23" cy="24" r="1.2"/><circle cx="18.5" cy="22.8" r="1.2"/><circle cx="15.2" cy="19.5" r="1.2"/><circle cx="14" cy="16" r="1.2"/><circle cx="15.2" cy="12.5" r="1.2"/><circle cx="18.5" cy="9.2" r="1.2"/></g></svg>' +
            '<span class="eu-text">' + f.cofunded + '</span>' +
          '</div>' +
        '</div>' +
        cols +
        '<div class="footer-col"><div class="h">' + esc(f.contact.h) + '</div>' +
          esc(f.contact.phone) + '<br>' +
          '<a href="mailto:' + esc(f.contact.email) + '">' + esc(f.contact.email) + '</a>' +
          '<div class="footer-links">' + flinks + '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';
  }

  // Each body section renders only when its data key is present, so a case
  // study can omit sections that don't apply to it (e.g. knowledge exchange).
  function renderCaseStudy(d) {
    return '' +
      hero(d) +
      partners(d) +
      '<div class="body-wrap"><div class="body-grid">' +
        sidebar(d) +
        '<main class="main">' +
          (d.overview ? overview(d) : '') +
          (d.video ? video(d) : '') +
          (d.region ? region(d) : '') +
          (d.opportunity ? opportunity(d) : '') +
          (d.solutions ? solutions(d) : '') +
          (d.system ? system(d) : '') +
          (d.process ? process(d) : '') +
          (d.lessons ? lessons(d) : '') +
          (d.outcomes ? outcomes(d) : '') +
          (d.knowledge ? knowledge(d) : '') +
          modals() +
        '</main>' +
      '</div></div>' +
      (d.quotes ? quotes(d) : '') +
      (d.next ? next(d) : '') +
      footer(d);
  }

  var api = { renderCaseStudy: renderCaseStudy };
  root.CaseStudyTemplate = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : this);
