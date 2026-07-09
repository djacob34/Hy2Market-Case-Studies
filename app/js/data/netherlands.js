/* =========================================================================
   Netherlands (Deventer) case-study content — Transport spotlight.
   SoluForce x Firan flexible composite hydrogen pipeline.
   Same content model as upper-austria.js: one object per region.
   NOTE: figures marked "(confirm)" are not yet verified against a partner
   source — see the Production Notes in the source brief.
   ========================================================================= */
(function (root) {
  var data = {
    slug: 'netherlands',
    // Optional landing-card overrides (otherwise derived from hero/breadcrumb).
    card: { title: 'Deventer, Netherlands' },
    breadcrumb: { label: 'Case studies', href: './index.html', here: 'Netherlands' },

    hero: {
      eyebrow: 'TRANSPORT · NETHERLANDS',
      titleHtml: 'Off the Spool, Into the Ground: A Flexible Hydrogen <span class="hl">Pipeline</span> for Deventer',
      lead: 'Everyone argues about how to make green hydrogen — but someone has to move the molecule. In Deventer, network developer Firan and pipe maker SoluForce put a fully-certified, entirely non-metallic hydrogen pipeline into the ground in about two months: phase zero of an open hydrogen distribution grid.',
      tags: ['Hydrogen transport', 'Flexible composite pipe', 'Reinforced thermoplastic (RTP)', 'Distribution grid', 'Non-metallic', 'Transport'],
      mediaCaption: 'SoluForce flexible composite pipe · laid from 400 m spools · Deventer',
      stats: [
        { num: '42 bar', label: 'certified max operating pressure · fully non-metallic pipe' },
        { num: '2 × 120 m', label: 'flexible composite pipeline installed, laid from 400 m spools' },
        { num: '~2 months', label: 'from go-decision to hydrogen pipe in the ground' }
      ]
    },

    partners: [
      {
        id: 'soluforce', name: 'SoluForce',
        role: 'Flexible composite pipe · manufacturer',
        body: 'SoluForce makes the non-metallic reinforced thermoplastic pipe (RTP) at the heart of the pilot — certified for hydrogen to a maximum operating pressure of 42 bar, delivered on 400 m spools and joined without welding. Deventer is the live demonstrator the company was looking for.',
        logoHtml: '<span style="font-weight:700;font-size:15px;color:#e2001a;letter-spacing:-0.01em;">Solu</span><span style="font-weight:700;font-size:15px;color:#1a1a1a;letter-spacing:-0.01em;">Force</span>'
      },
      {
        id: 'firan', name: 'Firan',
        role: 'Hydrogen network operator · Alliander group',
        body: 'Firan — a subsidiary of Alliander and sister company of DSO Liander — develops, builds and operates infrastructure for heat, cooling, renewable energy and, increasingly, hydrogen. In Deventer it designs the network and, once built, exploits the grid.',
        logoHtml: '<span style="font-weight:800;font-size:16px;color:#0072bc;letter-spacing:-0.01em;">Firan</span>'
      },
      {
        id: 'nec', name: 'New Energy Coalition',
        role: 'Project coordinator',
        body: 'New Energy Coalition coordinates the Hy2Market project overall, connecting the consortium partners and work packages across the participating regions.',
        col: true,
        logoHtml: '<span style="font-weight:700;font-size:13px;color:#1a1a1a;letter-spacing:0.01em;">New Energy</span><span style="font-weight:500;font-size:11px;color:#0a8f5c;letter-spacing:0.06em;margin-top:2px;">COALITION</span>'
      },
      {
        id: 'nefit', name: 'Nefit Bosch',
        role: 'Off-taker · Deventer',
        body: 'Nefit Bosch is the anchor off-taker: its local test facility takes the hydrogen delivered by the phase-zero connector at 9.5 bar.',
        gap: '7px',
        logoHtml: '<span style="font-weight:700;font-size:15px;color:#1a1a1a;">Nefit</span><span style="font-weight:600;font-size:13px;color:#e2001a;">Bosch</span>'
      },
      {
        id: 'grohw', name: 'GROHW',
        role: 'Regional hydrogen programme',
        body: 'The regional GROHW hydrogen programme frames the wider Deventer effort, including the hydrogen receiving station at Nefit Bosch.',
        logoHtml: '<span style="font-weight:800;font-size:17px;color:#0072bc;letter-spacing:0.02em;">GROHW</span>'
      },
      {
        id: 'alliander', name: 'Alliander',
        role: 'Parent DSO group',
        body: 'Alliander is the Dutch distribution group behind Firan and DSO Liander — the corporate context in which a future hydrogen network operator can standardise and scale distribution infrastructure.',
        logoHtml: '<span style="font-weight:700;font-size:15px;color:#e30613;letter-spacing:-0.01em;">alliander</span>'
      }
    ],

    toc: [
      { id: 'toc-overview', label: 'Overview' },
      { id: 'toc-region', label: 'The region' },
      { id: 'toc-opportunity', label: 'The opportunity' },
      { id: 'toc-solutions', label: 'The solutions' },
      { id: 'toc-system', label: 'How it works as one system' },
      { id: 'toc-process', label: 'The process' },
      { id: 'toc-lessons', label: 'Lessons learned' },
      { id: 'toc-outcomes', label: 'The outcomes' }
    ],
    downloadHref: '#',

    overview: [
      { tone: 'yellow', label: 'THE CHALLENGE', text: 'Green hydrogen is only useful if it can travel from where it is made to where it is used. Conventional steel pipelines are slow to permit, expensive to weld and lay, and vulnerable to hydrogen embrittlement — a poor fit for the short, distributed connections a local hydrogen grid actually needs.' },
      { tone: 'black', label: 'THE INNOVATION', text: 'Hy2Market paired an operator with a material: Firan, a future hydrogen network operator, and SoluForce, whose non-metallic reinforced thermoplastic pipe is certified for hydrogen, laid from 400 m spools and joined without welding — built as phase zero of an open distribution grid.' },
      { tone: 'black', label: 'THE OUTCOME', text: 'A working hydrogen line from the production point to industrial off-taker Nefit Bosch, in the ground in roughly two months — proving that flexible composite pipe is a fast, low-cost, embrittlement-free building block for regional hydrogen distribution.' }
    ],

    video: { caption: 'Benjamin Pilzer, Senior Business Developer Hydrogen, Firan, and Peter Cloos, Technical Manager, SoluForce — on building a local hydrogen grid in Deventer.' },

    region: {
      title: 'The region',
      paragraphs: [
        'The Netherlands is one of Europe’s most committed hydrogen markets, and its distribution network operators are already preparing to move the molecule at regional scale. <strong>Firan</strong> — a subsidiary of <strong>Alliander</strong> and sister company of the Dutch distribution system operator <strong>Liander</strong> — develops, builds and operates infrastructure for heat, cooling, renewable energy and, increasingly, hydrogen.',
        'The pilot sits in <strong>Deventer</strong>, where Firan is standardising what a future hydrogen distribution grid should look like. The anchor off-taker is <strong>Nefit Bosch</strong>, whose local test facility takes the hydrogen; the wider effort is coordinated through the regional <strong>GROHW</strong> hydrogen programme, with New Energy Coalition coordinating Hy2Market overall.'
      ],
      map: {
        caption: 'Netherlands · Deventer pilot',
        pins: [
          { left: '30%', top: '52%', color: 'black', label: 'Supply', sub: '· tube-trailer / electrolyser' },
          { left: '54%', top: '44%', color: 'yellow', label: 'Deventer', sub: '· phase-0 line' },
          { left: '74%', top: '54%', color: 'black', label: 'Nefit Bosch', sub: 'off-take · ', right: true }
        ]
      }
    },

    opportunity: {
      title: 'The opportunity',
      leadHtml: 'Firan and SoluForce were never supposed to work together — what connected them was the insight that transport is the <span class="mark">missing middle</span> of the hydrogen value chain.',
      body: 'Inside Hy2Market the two sat in different work packages: one an infrastructure operator, the other a materials manufacturer. In an early consortium meeting it became clear that more demonstrators were needed to prove reinforced thermoplastic pipe (RTP) for hydrogen — and Firan offered its Deventer site. For SoluForce it was the live demonstrator it was looking for; for Firan, RTP was a new material to test against its own safety, pressure and maintenance standards before trusting it in a grid meant to last decades.',
      startLabel: 'STARTING POSITION',
      startStats: [
        { num: 'Certified', sub: 'RTP pipe already rated for hydrogen to 42 bar' },
        { num: 'Deventer site', sub: 'real infrastructure need — a place to prove it' }
      ]
    },

    solutions: {
      title: 'The solutions',
      intro: 'Three things had to come together to make a hydrogen line this fast. Open each to see the detail.',
      drawers: [
        {
          title: 'The material',
          subtitle: 'A non-metallic pipe built for hydrogen.',
          thumbGrad: 'linear-gradient(135deg,#2c3138,#15171b)', tex: 120,
          photoCaption: 'SoluForce flexible composite pipe · fully non-metallic',
          body: 'SoluForce’s flexible composite pipe (FCP), a reinforced thermoplastic pipe, is entirely non-metallic — hydrogen never touches metal, eliminating the embrittlement risk that dogs steel. It is certified for hydrogen up to a maximum operating pressure of <strong>42 bar</strong>, at temperatures up to 65 °C, in 4″ and 6″ diameters, and is hydrogen-tight (permeation-free). Its cradle-to-grave carbon footprint is at least 75% lower than steel.',
          stats: [
            { n: '42 bar', l: 'certified hydrogen MOP' },
            { n: '≥75%', l: 'lower carbon footprint vs. steel' }
          ],
          cta: { label: 'How SoluForce certifies pipe for hydrogen', href: '#' }
        },
        {
          title: 'The installation',
          subtitle: 'Laid from a spool, joined without welding.',
          thumbGrad: 'linear-gradient(135deg,#3a4048,#1c2026)', tex: 60,
          photoCaption: 'Electrofusion joints · weld-free installation',
          body: 'The pipe is delivered on <strong>400-metre spools</strong> and installed in long continuous sections, so there are far fewer joints than a welded steel line. Connections use <strong>electrofusion</strong> rather than welding, with SoluForce training local contractors through its academy. The result is roughly <strong>70% lower installation cost</strong>, smaller crews, fewer permits, and a line that flexes through difficult terrain and confined spaces.',
          stats: [
            { n: '~70%', l: 'lower installation cost' },
            { n: '400 m', l: 'continuous spool lengths' }
          ],
          cta: { label: 'Why weld-free installation matters for hydrogen', href: '#' }
        },
        {
          title: 'The connection',
          subtitle: 'Production to off-take, and a grid to come.',
          thumbGrad: 'linear-gradient(135deg,#26424a,#11272d)', tex: 90,
          photoCaption: 'Phase 0 · 2 × 120 m connector, Deventer',
          body: 'The Deventer pilot lays <strong>2 × 120 m</strong> of pipe, connecting a tube-trailer bay and a future 2.5 MW electrolyser <span class="tc">(status to confirm)</span> to the <strong>Nefit Bosch</strong> test facility at 9.5 bar, with a planned local hydrogen grid running at 16 bar for wider industrial off-takers. This connector is deliberately scoped as <strong>phase zero</strong> of a larger open grid.',
          stats: [
            { n: '2 × 120 m', l: 'flexible composite line installed' },
            { n: '9.5 / 16 bar', l: 'off-take &amp; grid pressures' }
          ],
          cta: { label: 'Explore the open distribution grid', href: '#' }
        }
      ]
    },

    system: {
      title: 'How it works as one system',
      intro: 'From renewable power to an open grid. Hover any node to highlight it, click to open the detail.',
      chain: [
        { id: 'power', kicker: 'INPUT', name: 'Renewable power', sub: 'wind + solar', title: 'Renewable power feeds the future electrolyser' },
        { id: 'supply', kicker: 'SUPPLY', name: 'Electrolyser + trailer', sub: 'future 2.5 MW · tube-trailer', title: 'Future 2.5 MW electrolyser + tube-trailer supply' },
        { id: 'pipe', kicker: 'CORE', name: 'Flexible composite pipe', sub: 'phase 0 · 2 × 120 m', core: true, title: 'SoluForce FCP — non-metallic, certified to 42 bar' }
      ],
      branches: [
        { id: 'offtake', name: 'Nefit Bosch off-take', sub: 'test facility · 9.5 bar', title: 'Nefit Bosch off-take at 9.5 bar' },
        { id: 'grid', name: 'Open distribution grid', sub: 'phase 1 · 16 bar', title: 'Open 16 bar distribution grid (in development)' },
        { id: 'wider', name: 'Wider off-takers', sub: 'Deventer region', title: 'Wider industrial off-takers connect to the grid' }
      ],
      nodeData: {
        power: { title: 'Renewable power', tag: 'Wind + solar', body: 'Renewable electricity is the intended input to the future electrolyser, making the hydrogen genuinely green from the first electron.' },
        supply: { title: 'Electrolyser + tube-trailer supply', tag: 'Future 2.5 MW · trailer bay', body: 'A future 2.5 MW electrolyser and a tube-trailer bay supply hydrogen to the connector. The electrolyser is described as future in the source article — status to confirm.' },
        pipe: { title: 'SoluForce flexible composite pipe', tag: 'Phase 0 · 2 × 120 m · MOP 42 bar', body: 'Non-metallic reinforced thermoplastic pipe, certified for hydrogen to a maximum operating pressure of 42 bar; delivered on 400 m spools; electrofusion joints; permeation-free; installed as 2 × 120 m in Deventer — the demonstrator that proves RTP in live hydrogen service.' },
        offtake: { title: 'Nefit Bosch off-take', tag: 'Test facility · 9.5 bar', body: 'The phase-zero connector links the supply point to the Nefit Bosch off-take at 9.5 bar — the anchor demand that makes the pilot a working line rather than a test loop.' },
        grid: { title: 'Open distribution grid (phase 1)', tag: '16 bar · in development, pre-FID', body: 'An open 16 bar distribution grid that other companies can connect to; in development ahead of a final investment decision, targeted to be operational within roughly one year of the go-decision (timing to confirm).' },
        wider: { title: 'Wider industrial off-takers', tag: 'Deventer region', body: 'Once the open grid is live, wider industrial off-takers across the Deventer region can connect — turning phase zero into regional hydrogen distribution.' }
      }
    },

    process: {
      title: 'The process',
      fillPercent: '78%',
      steps: [
        { date: 'Consortium start', text: 'Firan and SoluForce enter Hy2Market in different work packages.' },
        { date: 'First meetings', text: 'Need for additional RTP demonstrators identified; Firan offers its Deventer site.' },
        { date: '~2 months', dateMuted: '· confirm dates', text: 'Permitting, location and financials sorted; construction begins.' },
        { date: 'Phase 0', text: '2 × 120 m flexible composite line laid; production-to-Nefit-Bosch connector complete.' },
        { date: '2026 · You are here', current: true, text: 'Phase 1 open distribution grid in development, right before a final investment decision.' },
        { date: 'Next', dateMuted: '· confirm', text: 'Grid targeted to be operational within roughly one year of the investment decision.' }
      ]
    },

    lessons: {
      title: 'Lessons learned',
      leadHtml: 'The pilot’s hardest lessons were organisational, not technical: <span class="mark">agree exactly who is responsible for what</span> before the pipe goes in.',
      body: 'Because RTP was a new material for Firan, both partners had to keep an open mind and share knowledge in both directions — Firan learning the material’s safety envelope, pressure ranges and maintenance needs; SoluForce learning how Dutch contractors and permitting work. The clearest takeaway was about contracts and scope of work — knowing precisely who is responsible for what. The transferable lesson is the partnership itself: a network operator and a materials manufacturer, from different work packages, aligning technically, organisationally and financially fast enough to get a pipe in the ground in two months.'
    },

    outcomes: {
      title: 'The outcomes',
      stats: [
        { tone: 'yellow', n: '2 × 120 m', l: 'hydrogen pipeline in the ground' },
        { tone: 'grey', n: '42 bar', l: 'certified, fully non-metallic — no embrittlement' },
        { tone: 'grey', n: '~2 months', l: 'from decision to operational connector' },
        { tone: 'black', n: 'Phase 1', l: 'open distribution grid now in development (pre-FID)' }
      ],
      narrative: 'The Deventer pilot turns a promising material into a proven building block. By pairing SoluForce’s flexible composite pipe with Firan’s role as a future hydrogen network operator, Hy2Market showed that regional hydrogen distribution doesn’t have to wait on slow, costly steel — and that phase zero of a real grid can be laid in weeks, not years. It is a replicable transport playbook other Hy2Market regions can follow as they connect their own producers to their own off-takers.',
      pending: [
        { n: '— t', l: 'H₂ volumes moved <em>(pending confirmation)</em>' },
        { n: '—', l: 'Connected off-takers <em>(pending)</em>' },
        { n: '— TRL', l: 'Transport-technology TRL change <em>(pending)</em>' }
      ]
    },

    quotesEyebrow: 'IN THEIR WORDS',
    quotes: [
      { text: 'For us it is crucial that a network is safe, reliable, and that it will work for tens of years. That’s what we stand for at Firan.', name: 'Benjamin Pilzer', role: 'Senior Business Developer Hydrogen, Firan' },
      { text: 'When the idea came on the table to actually realise it, it went really fast — within two months there was already construction work going on. Everything was sorted out, and now there’s a pipeline in the ground. It’s just perfect, like out of the book.', name: 'Peter Cloos', role: 'Technical Manager, SoluForce' },
      { text: 'At Firan we’re a distribution company. Our goal is to connect A with B: producer and off-take of hydrogen. And SoluForce is a producer of material for distribution pipelines. That’s where our roles come together.', name: 'Benjamin Pilzer', role: 'Firan' }
    ],

    next: {
      eyebrow: 'CONTINUE THE STORY',
      allHref: './index.html',
      featured: {
        href: './case-study.html?region=upper-austria',
        kicker: 'CASE STUDY · PRODUCTION',
        title: 'Upper Austria: from steel to a green hydrogen value chain',
        lead: 'Where the molecule is made. See how Hy2Market extended a working 6 MW electrolyser in Linz into a complete value chain — compression, purification, storage and distribution.',
        chips: ['Austria', 'Electrolysis', 'Steel'],
        caption: 'voestalpine steel plant · Linz · H2FUTURE electrolyser'
      },
      others: [
        { href: './case-study.html?region=upper-austria', k: 'PRODUCTION', region: 'Upper Austria', country: '· Austria', d: 'A working electrolyser extended into a regional hydrogen network.' },
        { href: './index.html', k: 'ALL', region: 'Every region', country: '', d: 'Browse the full set of Hy2Market case studies.' }
      ]
    },

    footer: {
      cofunded: 'Co-funded by<br>the European Union',
      cols: [
        { h: 'Visiting address:', html: 'Nijenborgh 6<br>9747 AG Groningen<br>The Netherlands' },
        { h: 'Postal address:', html: 'P.O. Box 70017<br>9704 AA Groningen<br>The Netherlands' }
      ],
      contact: {
        h: 'Contact:',
        phone: '+31 88 11 66 800',
        email: 'info@hy2market.eu',
        links: [
          { label: 'Privacy statement', href: '#' },
          { label: 'Cookie Statement', href: '#' },
          { label: 'Disclaimer', href: '#' }
        ]
      }
    }
  };

  root.CASE_STUDIES = root.CASE_STUDIES || {};
  root.CASE_STUDIES['netherlands'] = data;
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
})(typeof window !== 'undefined' ? window : this);
