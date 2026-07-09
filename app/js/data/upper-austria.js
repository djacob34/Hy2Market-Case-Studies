/* =========================================================================
   Upper Austria case-study content.
   This is the reusable content model: one object per region. To add another
   regional case study, copy this shape into a new file (e.g. asturias.js),
   change the values, and point index.html at it (or register several and pick
   by slug). Fields marked with small HTML strings (logoHtml, mapShape, arc*)
   are intentionally bespoke visuals — everything else is plain data.
   ========================================================================= */
(function (root) {
  var data = {
    slug: 'upper-austria',
    breadcrumb: { label: 'Case studies', href: '#', here: 'Upper Austria' },

    hero: {
      eyebrow: 'PRODUCTION · UPPER AUSTRIA',
      // {hl} marks the yellow-underlined word
      titleHtml: 'From Steel to Green: Building Austria’s End-to-End <span class="hl">Hydrogen</span> Value Chain',
      lead: 'Upper Austria isn’t promising a hydrogen future — it’s already built one. Around Europe’s largest industrial green-hydrogen pilot in Linz, Hy2Market is extending a working electrolyser into a complete value chain: compression, purification, storage and distribution.',
      tags: ['Green hydrogen', 'Electrolysis', 'Industrial decarbonisation', 'Steel', 'Storage', 'Production'],
      mediaCaption: 'voestalpine steel plant · Linz · H2FUTURE electrolyser',
      stats: [
        { num: '6 MW', label: 'PEM electrolyser, operational since 2019' },
        { num: '1,200 m³/h', label: 'green hydrogen output' },
        { num: 'World-first', label: 'geological underground H₂ storage · Gampern' }
      ]
    },

    // Each partner: a bespoke logo lockup (logoHtml) + modal content.
    partners: [
      {
        id: 'voest', name: 'voestalpine',
        role: 'Steelmaker · Linz · anchor offtaker',
        body: 'voestalpine hosts the 6 MW electrolyser at its Linz steel plant and was the original driver of hydrogen demand. Green hydrogen substitutes for fossil reductants in steelmaking — the anchor offtake that proved the electrolyser at industrial scale.',
        logoHtml: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 4l9 16 9-16" stroke="#1a1a1a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="lg" style="font-weight:600;font-size:16px;color:#1a1a1a;">voestalpine</span>'
      },
      {
        id: 'verbund', name: 'VERBUND',
        role: 'Utility · project coordination & infrastructure',
        body: 'VERBUND coordinated the H2FUTURE pilot and supplies renewable power to the electrolyser. As infrastructure partner it supports the compression stage that lifts low-pressure output to transportable pressures.',
        gap: '9px',
        logoHtml: '<svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M8 0L16 18H0z" fill="#0a5c46"/></svg><span style="font-weight:700;font-size:15px;color:#0a5c46;letter-spacing:0.06em;">VERBUND</span>'
      },
      {
        id: 'siemens', name: 'Siemens Energy',
        role: 'Technology supplier',
        body: 'Siemens Energy supplied the 6 MW PEM electrolyser operating in Linz since November 2019 — the core technology producing up to 1,200 m³/h of green hydrogen.',
        col: true,
        logoHtml: '<span style="font-weight:700;font-size:15px;color:#1a1a1a;letter-spacing:0.04em;">SIEMENS</span><span style="font-weight:500;font-size:11px;color:#009999;letter-spacing:0.16em;margin-top:2px;">ENERGY</span>'
      },
      {
        id: 'k1met', name: 'K1-MET',
        role: 'Metallurgical research (with TU Leoben)',
        body: 'K1-MET, together with TU Leoben, uses the hydrogen for methanation research — converting H₂ into synthetic methane for hard-to-electrify uses and advancing low-carbon metallurgy.',
        gap: '2px',
        logoHtml: '<span style="font-weight:700;font-size:18px;color:#c8102e;letter-spacing:-0.03em;">K1</span><span style="font-weight:700;font-size:18px;color:#1a1a1a;letter-spacing:-0.03em;">·MET</span>'
      },
      {
        id: 'rag', name: 'RAG Austria',
        role: 'Underground storage · Gampern',
        body: 'RAG Austria operates the world-first geological hydrogen storage in porous sandstone at Gampern (Underground Sun Storage 2030), returning hydrogen at injection-grade purity to give the whole chain seasonal resilience.',
        logoHtml: '<span style="font-weight:800;font-size:19px;color:#e2001a;letter-spacing:-0.02em;">RAG</span><span style="font-weight:500;font-size:11px;color:#666;letter-spacing:0.1em;text-transform:uppercase;">Austria</span>'
      },
      {
        id: 'wiva', name: 'WIVA P&G',
        role: 'Programme coordination & knowledge exchange',
        body: 'WIVA P&G coordinates the regional programme and leads knowledge exchange — advising Constanța (Romania) on feasibility studies while learning mobility demonstration from Médio Tejo (Portugal).',
        gap: '7px',
        logoHtml: '<span style="display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:#0072bc;color:#fff;font-weight:700;font-size:13px;">H₂</span><span style="font-weight:700;font-size:15px;color:#1a1a1a;letter-spacing:0.02em;">WIVA <span style="color:#0072bc;">P&amp;G</span></span>'
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
      { id: 'toc-outcomes', label: 'The outcomes' },
      { id: 'toc-knowledge', label: 'Knowledge exchange' }
    ],
    downloadHref: '#',

    overview: [
      { tone: 'yellow', label: 'THE INNOVATION', text: 'Hy2Market funded the missing links in the chain — multi-stage compression, purification to Grade 5.0, and a Renewable Hydrogen Station with trailer distribution — turning a captive supply into a regional hydrogen network.' },
      { tone: 'black', label: 'THE OUTCOME', text: 'A replicable, end-to-end production blueprint: from renewable electrons to certified hydrogen delivered across Austria, with TRL raised from 6–7 to 9.' }
    ],

    video: { caption: 'Gregor Offenthaler, Senior Project Manager, WIVA P&G — on building Austria’s hydrogen value chain.' },

    region: {
      title: 'The region',
      paragraphs: [
        'Upper Austria is one of Europe’s most advanced hydrogen regions and the industrial heartland of the country. Its economy is anchored by heavy industry around <strong>Linz</strong>, where voestalpine — one of Europe’s largest steelmakers — operates as the region’s flagship asset and the original driver of hydrogen demand.',
        'Activity now spreads across the region: <strong>Linz</strong> for production, <strong>Gampern</strong> for world-first geological underground storage, and <strong>Leoben</strong> for methanation research. Together they form a compact, end-to-end hydrogen corridor inside a single federal state.'
      ],
      map: {
        caption: 'Upper Austria · hydrogen corridor',
        pins: [
          { left: '26%', top: '54%', color: 'black', label: 'Linz', sub: '· production' },
          { left: '50%', top: '43%', color: 'yellow', label: 'Gampern', sub: '· storage' },
          { left: '72%', top: '52%', color: 'black', label: 'Leoben', sub: 'methanation · ', right: true }
        ]
      }
    },

    opportunity: {
      title: 'The opportunity',
      leadHtml: 'Upper Austria’s advantage is that it is <span class="mark">expanding what already exists</span> rather than starting from scratch.',
      body: 'The H2FUTURE pilot — coordinated by VERBUND with voestalpine, Siemens Energy, K1-MET, Austrian Power Grid and TNO — gave the region a working electrolyser and more than 500 tonnes of green-hydrogen operating experience. Hy2Market’s role is to unlock that proven supply for the wider economy.',
      startLabel: 'STARTING POSITION',
      startStats: [
        { num: '500+ t', sub: 'green hydrogen produced in H2FUTURE' },
        { num: 'Working asset', sub: '6 MW electrolyser live since 2019' }
      ]
    },

    solutions: {
      title: 'The solutions',
      intro: 'Hy2Market funded three missing links that turn a captive industrial supply into a regional network. Open each to see the detail.',
      drawers: [
        {
          title: 'Compression',
          subtitle: 'Lifting low-pressure hydrogen to usable, transportable pressures.',
          thumbGrad: 'linear-gradient(135deg,#2c3138,#15171b)', tex: 120,
          photoCaption: 'Compressor station · tube-trailer charging',
          body: 'The electrolyser outputs hydrogen at low pressure. Multi-stage compressor stations fill medium-pressure storage tanks and charge tube trailers up to 700 bar, with VERBUND as infrastructure partner alongside voestalpine.',
          stats: [
            { n: '700 bar', l: 'trailer-fill pressure' },
            { n: 'Multi-stage', l: 'compression <span class="tc">(capacity to confirm)</span>' }
          ],
          cta: { label: 'Read the compression deliverable', href: '#' }
        },
        {
          title: 'Purification',
          subtitle: 'From industrial-grade to mobility-grade hydrogen.',
          thumbGrad: 'linear-gradient(135deg,#3a4048,#1c2026)', tex: 60,
          photoCaption: 'Purification skid · Grade 5.0 polishing',
          body: 'Purification upgrades the hydrogen to <strong>Grade 5.0 (99.999%)</strong>, the quality required for fuel-cell mobility and sensitive industrial uses — opening offtake markets the raw electrolyser output could never serve.',
          stats: [
            { n: '99.999%', l: 'purity (Grade 5.0)' },
            { n: 'New markets', l: 'mobility + industry' }
          ],
          cta: { label: 'What Grade 5.0 unlocks', href: '#' }
        },
        {
          title: 'Refuelling &amp; distribution',
          subtitle: 'A Renewable Hydrogen Station and a fleet of trailers.',
          thumbGrad: 'linear-gradient(135deg,#26424a,#11272d)', tex: 90,
          photoCaption: 'Renewable Hydrogen Station · tube-trailer fleet',
          body: 'The Renewable Hydrogen Station (RHS) enables on-site refuelling, while tube trailers distribute hydrogen to offtakers across Austria and beyond — converting a single plant into a distribution hub.',
          stats: [
            { n: 'RHS', l: 'on-site refuelling' },
            { n: 'Tube-trailer', l: 'regional distribution <span class="tc">(offtaker count to confirm)</span>' }
          ],
          cta: { label: 'Explore the distribution model', href: '#' }
        }
      ]
    },

    system: {
      title: 'How it works as one system',
      intro: 'From renewable electrons to seven offtakes. Hover any node to highlight it, click to open the detail.',
      chain: [
        { id: 'power', kicker: 'INPUT', name: 'Renewable power', sub: 'Hydro + wind', title: 'Renewable hydro + wind feeds the electrolyser' },
        { id: 'electrolyser', kicker: 'CORE', name: '6 MW PEM electrolyser', sub: 'up to 1,200 m³/h', core: true, title: '6 MW PEM, Siemens Energy, live since 2019' },
        { id: 'compression', kicker: 'STEP', name: 'Compression', sub: 'to 700 bar', title: 'Multi-stage compression up to 700 bar' },
        { id: 'purification', kicker: 'STEP', name: 'Purification', sub: 'Grade 5.0', title: 'Upgraded to Grade 5.0 (99.999%)' }
      ],
      branches: [
        { id: 'storage', name: 'Underground storage', sub: 'RAG · Gampern', title: 'World-first geological storage, Gampern' },
        { id: 'rhs', name: 'RHS &amp; tube trailers', sub: 'Distribution hub', title: 'On-site refuelling + tube-trailer distribution' },
        { id: 'steel', name: 'Steel decarbonisation', sub: 'voestalpine', title: 'Green H₂ for steelmaking' },
        { id: 'mobility', name: 'Mobility', sub: 'FC vehicles, buses', title: 'Fuel-cell vehicles & buses' },
        { id: 'methanation', name: 'Methanation research', sub: 'K1-MET / TU Leoben', title: 'H₂ to synthetic methane research' }
      ],
      nodeData: {
        power: { title: 'Renewable power', tag: 'Hydro + wind · Austrian grid', body: 'Renewable electricity from Austria’s hydro and wind capacity feeds the electrolyser, making the hydrogen genuinely green from the first electron.' },
        electrolyser: { title: '6 MW PEM electrolyser', tag: 'Siemens Energy · Linz · since Nov 2019', body: 'A 6 MW PEM electrolyser supplied by Siemens Energy, operational at the voestalpine steel plant in Linz since November 2019. Produces up to 1,200 m³/h of green hydrogen; more than 500 tonnes were produced during the H2FUTURE pilot.' },
        compression: { title: 'Multi-stage compression', tag: 'VERBUND + voestalpine', body: 'Multi-stage compressor stations lift low-pressure electrolyser output to medium-pressure storage and charge tube trailers up to 700 bar — the step that makes the hydrogen transportable.' },
        purification: { title: 'Purification — Grade 5.0', tag: '99.999% purity', body: 'Purification upgrades the hydrogen to Grade 5.0 (99.999%), the quality required for fuel-cell mobility and sensitive industrial uses, unlocking offtake markets the raw output could never serve.' },
        storage: { title: 'Underground storage', tag: 'RAG · Gampern, Upper Austria', body: 'The world’s first geological hydrogen storage in porous sandstone, at Gampern (RAG, Underground Sun Storage 2030). Around 500,000 m³ stored across full cycles at injection-grade purity — seasonal resilience for the whole system.' },
        rhs: { title: 'Renewable Hydrogen Station & trailers', tag: 'On-site refuelling + regional distribution', body: 'The Renewable Hydrogen Station enables on-site refuelling, while tube trailers distribute hydrogen to offtakers across Austria and beyond — converting a single plant into a distribution hub.' },
        steel: { title: 'Steel decarbonisation', tag: 'voestalpine', body: 'Green hydrogen substitutes for fossil reductants in steelmaking, the original anchor offtake that proved the electrolyser at industrial scale.' },
        mobility: { title: 'Mobility', tag: 'Fuel-cell vehicles & buses', body: 'Grade 5.0 hydrogen at 700 bar fuels fuel-cell vehicles and buses — a new offtake market opened by purification and compression.' },
        methanation: { title: 'Methanation research', tag: 'K1-MET / TU Leoben', body: 'K1-MET and TU Leoben use the hydrogen for methanation research, converting H₂ into synthetic methane for hard-to-electrify uses.' }
      }
    },

    process: {
      title: 'The process',
      // fillPercent = width of the black progress line (reaches the "current" node)
      fillPercent: '83.4%',
      steps: [
        { date: '2018', badge: true, text: 'Green light for the world’s largest industrial hydrogen pilot in Linz.' },
        { date: 'Nov 2019', text: '6 MW PEM electrolyser comes online; H2FUTURE production begins.' },
        { date: '2021–22', text: '500+ tonnes of green hydrogen produced; offtake proven for steel.' },
        { date: '2023', text: 'World-first geological underground hydrogen storage demonstrated at Gampern.' },
        { date: '2023–25', dateMuted: '· Hy2Market', text: 'Compression, purification and RHS built out; value chain extended.' },
        { date: '2026 · You are here', current: true, text: 'End-to-end chain operational; TRL reaches 9; blueprint shared with peer regions.' }
      ]
    },

    lessons: {
      title: 'Lessons learned',
      leadHtml: 'As a "more developed" region, Upper Austria’s central lesson is blunt: <span class="mark">identify your offtakers before you build infrastructure.</span>',
      body: 'WIVA P&G advised Constanța (Romania) on feasibility studies for a Danube hydrogen hub, steering them to confirm demand first. Knowledge flows both ways — Upper Austria is learning mobility demonstration from Médio Tejo (Portugal) while offering production and renewable-capacity expertise in return.'
    },

    outcomes: {
      title: 'The outcomes',
      stats: [
        { tone: 'yellow', n: 'TRL 6–7 → 9', l: 'across production technologies' },
        { tone: 'grey', n: '500+ t', l: 'green hydrogen produced to date' },
        { tone: 'grey', n: 'Grade 5.0', l: 'now reaching mobility + new offtakers' },
        { tone: 'black', n: 'World-first', l: 'underground storage securing resilience' }
      ],
      narrative: 'Upper Austria now offers Europe a working, replicable model for turning a single industrial electrolyser into a regional hydrogen economy — and a playbook other Hy2Market regions can follow.',
      pending: [
        { n: '— t', l: 'Volumes distributed <em>(pending confirmation)</em>' },
        { n: '—', l: 'Number of offtakers <em>(pending)</em>' },
        { n: '— t CO₂', l: 'CO₂ avoided <em>(pending)</em>' }
      ]
    },

    knowledge: {
      title: 'Knowledge exchange',
      intro: 'As a "more developed" region, Upper Austria both shares hard-won expertise and learns from its peers — knowledge flows in both directions across the Hy2Market network.',
      cards: [
        { dir: 'out', arrow: '→', label: 'SHARING TO', region: 'Constanța', country: '· Romania', text: 'WIVA P&G advised on feasibility studies for a Danube hydrogen hub — steering the region to confirm demand before building infrastructure.' },
        { dir: 'in', arrow: '←', label: 'LEARNING FROM', region: 'Médio Tejo', country: '· Portugal', text: 'Mobility demonstration know-how — in exchange for Upper Austria’s production and renewable-capacity expertise.' }
      ]
    },

    quotesEyebrow: 'IN THEIR WORDS',
    quotes: [
      { text: 'We didn’t start from a blank sheet — we took a working electrolyser and built the missing links around it. That’s what makes this something other regions can actually copy.', name: 'Gregor Offenthaler', role: 'Senior Project Manager, WIVA P&G' },
      { text: 'Proving green hydrogen at industrial scale for steelmaking changed the conversation. It stopped being a pilot and became part of how we plan production.', name: 'Hydrogen Operations', role: 'voestalpine, Linz' },
      { text: 'Storing hydrogen underground in porous rock had never been done. Getting it back at injection-grade purity is what gives the whole chain its seasonal resilience.', name: 'Underground Sun Storage team', role: 'RAG Austria, Gampern' }
    ],

    next: {
      eyebrow: 'CONTINUE THE STORY',
      allHref: '#',
      featured: {
        href: '#',
        kicker: 'NEXT CASE STUDY · PRODUCTION',
        title: 'Asturias: scaling green hydrogen in Spain’s industrial north',
        lead: 'Upper Austria’s sister production region. See how Asturias pairs heavy industry with large-scale electrolysis to decarbonise steel, fertiliser and refining.',
        chips: ['Spain', 'Electrolysis', 'Steel'],
        caption: 'Asturias · Spain · industrial electrolysis'
      },
      others: [
        { href: '#', k: 'STORAGE', region: 'Gampern', country: '· Austria', d: 'World-first geological underground hydrogen storage.' },
        { href: './case-study.html?region=medio-tejo', k: 'MOBILITY', region: 'Médio Tejo'}, country: '· Portugal', d: 'Fuel-cell mobility demonstration and refuelling.' },
        { href: '#', k: 'DISTRIBUTION', region: 'Constanța', country: '· Romania', d: 'Building a Danube hydrogen hub from feasibility up.' }
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
  root.CASE_STUDIES['upper-austria'] = data;
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
})(typeof window !== 'undefined' ? window : this);
