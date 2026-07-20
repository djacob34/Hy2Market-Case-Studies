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
      lead: 'Upper Austria isn’t promising a hydrogen future — it’s already built one. Around Europe’s largest industrial green-hydrogen pilot in Linz, Hy2Market is extending a working electrolyser into a complete value chain: compression, purification and distribution.',
      tags: ['Green hydrogen', 'Electrolysis', 'Industrial decarbonisation', 'Steel', 'Storage', 'Production'],
      // Cover animation of the voestalpine Linz site (muted, autoplay, looped)
      video: 'https://cdn.voestalpine.com/asset-47186e19-9647-41ac-b81f-9ee9d798085a/AnimationReal%20Linz%20Neues%20Ending%20EN%2019-10-23.mp4',
      mediaCaption: 'voestalpine Linz · Copyright: voestalpine AG, Source: voestalpine.com',
      stats: [
        { num: '6 MW', label: 'PEM electrolyser, operational since 2019' },
        { num: '1,200 m³/h', label: 'green hydrogen output' },
        { num: 'World-first', label: 'geological underground H₂ storage · Gampern' }
      ]
    },

    // Each partner: logo lockup (logoHtml) + modal content. Rich per-partner
    // contributions live in bodyHtml (scrollable in the popup); body is a short
    // fallback. Roster = official Hy2Market Austria partner presentation.
    partners: [
      {
        id: 'voest', logo: 'voest.png', name: 'voestalpine',
        role: 'Electrolyser host · production chain (WP2)',
        body: 'voestalpine hosts and upgraded the 6 MW PEM electrolyser at its Linz site — adding purification, drying, compression to 500 bar, storage and a trailer filling station.',
        bodyHtml: '<p>voestalpine, a globally leading technology group, hosts the 6 MW PEM electrolyser at its Linz site.</p>' +
          '<p><strong>Main contribution:</strong> upgrading the electrolyser with a purification and drying system for high-quality hydrogen, plus several compressors to pressurise hydrogen up to 500 bar.</p>' +
          '<p><strong>WP2 — Green Hydrogen Production &amp; Management:</strong> installation and commissioning of compressors, a purification system, a storage system and a trailer filling station. Hydrogen is provided for pipeline supply and trailer distribution at 300, 380 and 500 bar — completing the production chain from production through pressurisation, purification, storage and filling, with an analysis system for quality control.</p>' +
          '<p>Co-involved in T4.2 (hydrogen as feedstock) — supporting Montanuniversität Leoben and K1-MET to operate catalytic methanation at the voestalpine Linz power station — plus D4.5 (roll-out report) and the final-conference site tour.</p>',
        logoHtml: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 4l9 16 9-16" stroke="#1a1a1a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="lg" style="font-weight:600;font-size:16px;color:#1a1a1a;">voestalpine</span>'
      },
      {
        id: 'verbund', logo: 'verbund.png', name: 'VERBUND',
        role: 'Electrolyser upgrade partner (Verbund Green Hydrogen)',
        body: 'VERBUND (through Verbund Green Hydrogen) partners with voestalpine to upgrade the H2FUTURE electrolyser — adding purification and drying, compression and storage.',
        bodyHtml: '<p>VERBUND coordinated the original H2FUTURE pilot and supplies renewable power to the electrolyser.</p>' +
          '<p>Under Hy2Market, <strong>Verbund Green Hydrogen</strong> partners with voestalpine to upgrade the 6 MW PEM electrolyser system at voestalpine Linz:</p>' +
          '<ul>' +
            '<li>a purification and drying unit that reduces residual oxygen and moisture to below 1 ppmv, lifting the hydrogen to fuel cell quality (99.999%);</li>' +
            '<li>compression (Hiperbaric technology) reaching up to 500 bar;</li>' +
            '<li>storage tanks holding roughly one tonne of hydrogen in total.</li>' +
          '</ul>',
        gap: '9px',
        logoHtml: '<svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M8 0L16 18H0z" fill="#0a5c46"/></svg><span style="font-weight:700;font-size:15px;color:#0a5c46;letter-spacing:0.06em;">VERBUND</span>'
      },
      {
        id: 'wiva', logo: 'wiva.png', name: 'WIVA P&G',
        role: 'Coordinator · WP4 & WP6 lead',
        body: 'WIVA P&G coordinates all Austrian activities and leads WP4 (Industrial Use of Hydrogen) and WP6 (Knowledge Exchange).',
        bodyHtml: '<p>WIVA P&amp;G coordinates all Austrian activities in the project.</p>' +
          '<p><strong>WP4 lead — Industrial Use of Hydrogen:</strong> raising the TRL for hydrogen use in industry, both as an energy carrier and as feedstock, and translating industrial pilots into transferable role models.</p>' +
          '<p><strong>WP6 lead — Knowledge Exchange:</strong> ensuring results, lessons learned and best practices from all value-chain work packages are collected, structured and shared across the consortium.</p>' +
          '<p><strong>Task 6.2 — Standardisation &amp; Regulation:</strong> collecting and validating implementation-based evidence on how hydrogen standards, regulations and procedures affect deployment, and deriving transferable recommendations for faster, clearer projects.</p>' +
          '<p>Also contributes to Task 6.3 (final training guidelines), the Learning Platform (best practices, challenges, lessons learned, technical results) and Deliverable 7.4 (final conference).</p>',
        gap: '7px',
        logoHtml: '<span style="display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:#0072bc;color:#fff;font-weight:700;font-size:13px;">H₂</span><span style="font-weight:700;font-size:15px;color:#1a1a1a;letter-spacing:0.02em;">WIVA <span style="color:#0072bc;">P&amp;G</span></span>'
      },
      {
        id: 'k1met', logo: 'k1met.png', name: 'K1-MET',
        role: 'Methanation pilot · WP4 · roll-out lead',
        body: 'K1-MET implements and operates a methanation pilot plant under real industrial conditions at an integrated steel mill.',
        bodyHtml: '<p>K1-MET’s main contribution is implementing and operating a methanation pilot plant under real industrial conditions at an integrated steel mill.</p>' +
          '<p><strong>WP4 — Industrial Use of Hydrogen:</strong> testing how different parameters affect a 20 kW methanation plant, including load-flexible dynamic operation under industrial conditions.</p>' +
          '<p><strong>Lead of Task 4.3 — Roll-out:</strong> evaluating potential roll-outs across Austria, Sicily, Asturias and Western Macedonia — analysing renewable energy sources, carbon-capture options, hydrogen production, gas infrastructure and challenges with public authorities.</p>' +
          '<p>Co-involved in D4.2 (industrial use of H₂), D4.3 (CCU facility tests), D4.5 (roll-out report) and the final-conference site tour.</p>',
        gap: '2px',
        logoHtml: '<span style="font-weight:700;font-size:18px;color:#c8102e;letter-spacing:-0.03em;">K1</span><span style="font-weight:700;font-size:18px;color:#1a1a1a;letter-spacing:-0.03em;">·MET</span>'
      },
      {
        id: 'mul', logo: 'mul.png', name: 'Montanuniversität Leoben',
        role: 'Methanation research · Leoben',
        body: 'Montanuniversität Leoben installed a 20 kW SNG pilot plant for catalytic methanation of CO₂ and green hydrogen at an integrated steel plant.',
        bodyHtml: '<p><strong>WP4 — Industrial Use of Hydrogen.</strong> Installation of a 20 kW<sub>SNG</sub> pilot plant for the catalytic methanation of CO₂ and hydrogen to synthetic natural gas (CH₄).</p>' +
          '<p>Demonstration of an originally TRL4 technology in a TRL6/7 environment at an integrated steel plant, using real process gases — CO₂ captured from power-plant exhaust and green H₂ produced with a PEM electrolyser.</p>' +
          '<p>Experimental investigation of bulk and proprietary honeycomb-shaped catalysts for methanation under dynamic operating conditions, plus Aspen Plus® simulations of CCU process chains with green hydrogen (e.g. Fischer-Tropsch).</p>',
        logoHtml: '<span class="logo-word">Montanuniversität Leoben</span>'
      },
      {
        id: 'ait', logo: 'ait.png', name: 'Austrian Institute of Technology',
        role: 'Research · industrial hydrogen use cases',
        body: 'AIT develops 5–7 industrial use cases for hydrogen across steel, chemicals, polymers and fertilisers, with detailed techno-economic analysis.',
        bodyHtml: '<p><strong>WP4 — Industrial Use of Hydrogen:</strong> developing 5–7 industrial use cases for hydrogen in industry. Cases investigated by AIT include:</p>' +
          '<ul>' +
            '<li>Steel — hydrogen used directly as fuel in reheating furnaces</li>' +
            '<li>Steel — hydrogen converted to synthetic natural gas for reheating furnaces</li>' +
            '<li>Furnaces (steel, aluminium, ceramics) — hydrogen converted to ammonia (NH₃) as fuel</li>' +
            '<li>Chemical — hydrogen as feedstock for carbon-neutral methanol</li>' +
            '<li>Polymer — hydrogen as feedstock for carbon-neutral olefins</li>' +
            '<li>Fertilisers, urea, polymer — hydrogen as feedstock for carbon-neutral ammonia</li>' +
          '</ul>' +
          '<p>Each case is analysed for the specifics of country, site, company and application, with processes and furnaces modelled in detail and techno-economic studies identifying the best decarbonisation concept. Results are summarised in Deliverable D4.8.</p>',
        logoHtml: '<span class="logo-word">AIT</span>'
      },
      {
        id: 'biz-ooe', logo: 'biz-ooe.png', name: 'Business Upper Austria',
        role: 'Regional agency · knowledge exchange & events',
        body: 'Business Upper Austria runs knowledge-exchange webinars, dissemination materials and the final project conference in Linz.',
        bodyHtml: '<p><strong>WP6 — Knowledge Exchange webinars:</strong> organising and delivering five knowledge-exchange webinars for the public and consortium, each with three keynotes (consortium, Austrian and international speakers), disseminated through internal and project channels.</p>' +
          '<p><strong>WP7 — Dissemination:</strong> developing a roll-up and factsheet promoting the project and the hydrogen sector, displayed at multiple locations in Linz.</p>' +
          '<p><strong>Task 7.4 — Final Conference:</strong> planning and organising the final project conference (November 2026, Linz), run alongside the established annual H2Convention in Linz to expand reach.</p>' +
          '<p><strong>Task 6.4 — Final training guidelines:</strong> a questionnaire assessing hydrogen knowledge needs and preferred learning formats, plus analysis of the results and desk research, compiled into an extended report and a white paper.</p>',
        logoHtml: '<span class="logo-word">Business Upper Austria</span>'
      },
      {
        id: 'prozess', logo: 'prozess.png', name: 'Prozess Optimal',
        role: 'Process simulation · WP2 & WP4',
        body: 'Prozess Optimal builds ASPEN simulation models of the methanation pilot and of e-fuel / CCU process chains for WP2 and WP4.',
        bodyHtml: '<p><strong>Simulation models for WP2 and WP4.</strong></p>' +
          '<p><strong>Task 2.2 — Site Management &amp; Scale-up:</strong> a detailed ASPEN HYSYS model of the methanation pilot (CO₂ scrubber, CO₂ compression, electrolysis, H₂ compression, methanation reactor), with kinetic parameters calibrated to test-run results — usable for optimisation and to determine KPIs. Lead of D2.13 and D2.14.</p>' +
          '<p><strong>Task 4.2 — Hydrogen as Feedstock:</strong> simulation models for CH₄ and NH₃ production with green hydrogen (characteristic energy demands); e-fuel models for methanol and jet fuel; a Fischer-Tropsch unit; and a comparison of the two power-to-liquid e-fuel methods on a 1 GW electrolyser sample case. Lead of D4.4; contributions to D4.9 and D4.10.</p>',
        logoHtml: '<span class="logo-word">Prozess Optimal</span>'
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
      { tone: 'yellow', label: 'THE CHALLENGE', text: 'Upper Austria already had a working electrolyser — but its green hydrogen was effectively captive: produced at low pressure and industrial grade, with no way to compress, purify or distribute it beyond a single site. A proven supply risked staying locked in place.' },
      { tone: 'black', label: 'THE INNOVATION', text: 'Hy2Market funded the missing links in the chain — multi-stage compression, purification to fuel cell quality, and a trailer filling station for distribution — turning a captive supply into a regional hydrogen network.' },
      { tone: 'black', label: 'THE OUTCOME', text: 'A replicable, end-to-end production blueprint: from renewable electrons to certified hydrogen delivered across Austria, with TRL raised from 6–7 to 9.' }
    ],

    video: { caption: 'Gregor Offenthaler, Senior Project Manager, WIVA P&G — on building Austria’s hydrogen value chain.' },

    region: {
      title: 'The region',
      paragraphs: [
        'Upper Austria is one of Europe’s most advanced hydrogen regions and the industrial heartland of the country. Its economy is anchored by heavy industry around <strong>Linz</strong>, where voestalpine — a globally leading technology group — operates as the region’s flagship asset.',
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
          body: 'The electrolyser outputs hydrogen at low pressure. Multi-stage compressor stations fill medium-pressure storage tanks and charge tube trailers up to 500 bar, with VERBUND as partner alongside voestalpine.',
          stats: [
            { n: '500 bar', l: 'trailer-fill pressure' },
            { n: 'Multi-stage', l: 'compression <span class="tc">(capacity to confirm)</span>' }
          ],
          cta: { label: 'Read the compression deliverable', href: '#' }
        },
        {
          title: 'Purification',
          subtitle: 'From industrial-grade to mobility-grade hydrogen.',
          thumbGrad: 'linear-gradient(135deg,#3a4048,#1c2026)', tex: 60,
          photoCaption: 'Purification skid · fuel-cell-quality polishing',
          body: 'Purification upgrades the hydrogen to <strong>fuel cell quality (99.999%)</strong>, required for fuel-cell mobility and sensitive industrial uses — opening offtake markets the raw electrolyser output could never serve.',
          stats: [
            { n: '99.999%', l: 'fuel cell quality' },
            { n: 'New markets', l: 'mobility + industry' }
          ],
          cta: { label: 'What fuel cell quality unlocks', href: '#' }
        },
        {
          title: 'Distribution',
          subtitle: 'A trailer filling station and a fleet of tube trailers.',
          thumbGrad: 'linear-gradient(135deg,#26424a,#11272d)', tex: 90,
          photoCaption: 'Trailer filling station · tube-trailer fleet',
          body: 'The trailer filling station enables the distribution of hydrogen to offtakers across Austria and beyond — converting a single plant into a distribution hub.',
          stats: [
            { n: 'Filling station', l: 'trailer loading' },
            { n: 'Tube-trailer', l: 'regional distribution <span class="tc">(offtaker count to confirm)</span>' }
          ],
          cta: { label: 'Explore the distribution model', href: '#' }
        }
      ]
    },

    system: {
      title: 'How it works as one system',
      intro: 'From renewable electrons to offtakes across the region. Hover any node to highlight it, click to open the detail.',
      chain: [
        { id: 'power', kicker: 'INPUT', name: 'Renewable power', sub: 'Hydro + wind', title: 'Renewable hydro + wind feeds the electrolyser' },
        { id: 'electrolyser', kicker: 'CORE', name: '6 MW PEM electrolyser', sub: 'up to 1,200 m³/h', core: true, title: '6 MW PEM, Siemens Energy, live since 2019' },
        { id: 'compression', kicker: 'STEP', name: 'Compression', sub: 'to 500 bar', title: 'Multi-stage compression up to 500 bar' },
        { id: 'purification', kicker: 'STEP', name: 'Purification', sub: 'fuel cell quality', title: 'Upgraded to fuel cell quality (99.999%)' }
      ],
      branches: [
        { id: 'rhs', name: 'Trailer filling &amp; trailers', sub: 'Distribution hub', title: 'Trailer filling station + tube-trailer distribution' },
        { id: 'steel', name: 'Steelmaking (H2FUTURE)', sub: 'voestalpine', title: 'Green H₂ trialled in steelmaking (H2FUTURE)' },
        { id: 'mobility', name: 'Mobility', sub: 'FC vehicles, buses', title: 'Fuel-cell vehicles & buses' },
        { id: 'methanation', name: 'Methanation research', sub: 'K1-MET / TU Leoben', title: 'H₂ to synthetic methane research' }
      ],
      nodeData: {
        power: { title: 'Renewable power', tag: 'Hydro + wind · Austrian grid', body: 'Renewable electricity from Austria’s hydro and wind capacity feeds the electrolyser, making the hydrogen genuinely green from the first electron.' },
        electrolyser: { title: '6 MW PEM electrolyser', tag: 'Siemens Energy · Linz · since Nov 2019', body: 'A 6 MW PEM electrolyser supplied by Siemens Energy, operational at the voestalpine steel plant in Linz since November 2019. Produces up to 1,200 m³/h of green hydrogen; more than 500 tonnes were produced during the H2FUTURE pilot.' },
        compression: { title: 'Multi-stage compression', tag: 'VERBUND + voestalpine', body: 'Multi-stage compressor stations lift low-pressure electrolyser output to medium-pressure storage and charge tube trailers up to 500 bar — the step that makes the hydrogen transportable.' },
        purification: { title: 'Purification — fuel cell quality', tag: '99.999% purity', body: 'Purification upgrades the hydrogen to fuel cell quality (99.999%), required for fuel-cell mobility and sensitive industrial uses, unlocking offtake markets the raw output could never serve.' },
        rhs: { title: 'Trailer filling station & trailers', tag: 'Regional trailer distribution', body: 'The trailer filling station enables the distribution of hydrogen by tube trailer to offtakers across Austria and beyond — converting a single plant into a distribution hub.' },
        steel: { title: 'Steelmaking (H2FUTURE)', tag: 'voestalpine', body: 'During the H2FUTURE pilot, green hydrogen from the electrolyser was trialled in steelmaking processes at voestalpine’s Linz plant — an early industrial test of the technology.' },
        mobility: { title: 'Mobility', tag: 'Fuel-cell vehicles & buses', body: 'Fuel-cell-quality hydrogen at 500 bar fuels fuel-cell vehicles and buses — a new offtake market opened by purification and compression.' },
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
        { date: '2021–22', text: '500+ tonnes of green hydrogen produced; hydrogen trialled in steelmaking (H2FUTURE).' },
        { date: '2023', text: 'RAG demonstrates world-first geological underground hydrogen storage at Gampern (independent of H2FUTURE).' },
        { date: '2023–25', dateMuted: '· Hy2Market', text: 'Compression, purification and trailer filling built out; value chain extended.' },
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
        { tone: 'grey', n: 'Fuel cell quality', l: 'now reaching mobility + new offtakers' },
        { tone: 'black', n: 'Regional hub', l: 'one plant now feeds offtakers across Austria' }
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
      { text: 'Storing hydrogen underground in porous rock had never been done. Getting it back at injection-grade purity proves that seasonal underground storage can work.', name: 'Underground Sun Storage team', role: 'RAG Austria, Gampern' }
    ],

    next: {
      eyebrow: 'CONTINUE THE STORY',
      allHref: '#',
      featured: {
        href: './case-study.html?region=asturias',
        kicker: 'NEXT CASE STUDY · PRODUCTION',
        title: 'Asturias: scaling green hydrogen in Spain’s industrial north',
        lead: 'Upper Austria’s sister production region. See how Asturias pairs heavy industry with large-scale electrolysis to decarbonise steel, fertiliser and refining.',
        chips: ['Spain', 'Electrolysis', 'Steel'],
        caption: 'Asturias · Spain · industrial electrolysis'
      },
      others: [
        { href: '#', k: 'STORAGE', region: 'Gampern', country: '· Austria', d: 'World-first geological underground hydrogen storage.' },
        { href: './case-study.html?region=medio-tejo', k: 'MOBILITY', region: 'Médio Tejo', country: '· Portugal', d: 'Fuel-cell mobility demonstration and refuelling.' },
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
