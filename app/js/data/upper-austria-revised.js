/* =========================================================================
   Upper Austria case-study content.
   This is the reusable content model: one object per region. To add another
   regional case study, copy this shape into a new file (e.g. asturias.js),
   change the values, and point index.html at it (or register several and pick
   by slug). Fields marked with small HTML strings (logoHtml, mapShape, arc*)
   are intentionally bespoke visuals — everything else is plain data.

   Revised per the Upper Austria "Communication-Focused Revision" brief:
   public / high-level / partner-approved information only, with pre-existing
   H2FUTURE assets, Hy2Market activities and parallel H2FUTURE Follow-up
   investments kept clearly separate.
   ========================================================================= */
(function (root) {
  var data = {
    slug: 'upper-austria-revised',
    breadcrumb: { label: 'Case studies', href: '#', here: 'Upper Austria (revised)' },

    // Landing-card override so this reads clearly as the revised draft next to
    // the original Upper Austria card.
    card: {
      kicker: 'PRODUCTION · UPPER AUSTRIA · REVISED DRAFT',
      title: 'Upper Austria — Revised draft',
      blurb: 'Partner-review revision: public / high-level / partner-approved wording, with pre-existing H2FUTURE assets and Hy2Market activities kept separate. Compare against the original card.',
      accent: '#0A5C2E'
    },

    // Review banner shown at the top of the detail page (rendered only when
    // present) with a link across to the original for easy comparison.
    banner: {
      tag: 'REVISED DRAFT',
      text: 'Partner-review revision of the Upper Austria case study — not yet the published version.',
      link: { href: './case-study.html?region=upper-austria', label: 'View the original →' }
    },

    hero: {
      eyebrow: 'PRODUCTION · UPPER AUSTRIA',
      // {hl} marks the yellow-underlined word
      titleHtml: 'Adding Value at the Source: Integrating Green <span class="hl">Hydrogen</span> at voestalpine Linz',
      lead: 'At the voestalpine site in Linz, a 6 MW PEM electrolyser has produced green hydrogen since 2019. Hy2Market builds on that established industrial base: eight Austrian partners connect hydrogen production and handling, run an industrial methanation pilot, and add modelling, use-case analysis, regulation and knowledge exchange around a live steel site.',
      tags: ['Green hydrogen', 'Industrial integration', 'Methanation', 'Modelling', 'Knowledge exchange', 'Production'],
      // Cover animation of the voestalpine Linz site (muted, autoplay, looped)
      video: 'https://cdn.voestalpine.com/asset-47186e19-9647-41ac-b81f-9ee9d798085a/AnimationReal%20Linz%20Neues%20Ending%20EN%2019-10-23.mp4',
      mediaCaption: 'voestalpine Linz · Copyright: voestalpine AG, Source: voestalpine.com',
      stats: [
        { num: '6 MW', label: 'PEM electrolyser at voestalpine Linz — live since 2019 (H2FUTURE)' },
        { num: '8', label: 'Austrian partners across the value chain' },
        { num: 'Methanation', label: 'industrial pilot — a Hy2Market activity' }
      ]
    },

    // Each partner: logo lockup (logoHtml) + modal content. One short,
    // Hy2Market-approved role per partner; unverified technical performance and
    // asset-ownership statements removed. Roster + roles = official Hy2Market
    // Austria partner presentation.
    partners: [
      {
        id: 'voest', logo: 'voest.png', name: 'voestalpine',
        role: 'Site host · production & handling (WP2)',
        body: 'voestalpine hosts the Linz site where the existing electrolyser and hydrogen-handling equipment are integrated, and contributes to production and management in WP2.',
        bodyHtml: '<p>voestalpine, a globally leading technology group, hosts the industrial site in Linz where the 6 MW PEM electrolyser — pre-existing, from the H2FUTURE pilot — is integrated with additional hydrogen-handling equipment.</p>' +
          '<p><strong>WP2 — Green Hydrogen Production &amp; Management:</strong> integrating purification, compression, storage and handling equipment at the operating site so hydrogen can be conditioned and made available for onward use.</p>' +
          '<p>Also co-involved in the industrial-use work (hydrogen as feedstock), supporting Montanuniversität Leoben and K1-MET on catalytic methanation at the Linz site, plus project roll-out reporting and the final-conference site tour.</p>',
        logoHtml: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 4l9 16 9-16" stroke="#1a1a1a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="lg" style="font-weight:600;font-size:16px;color:#1a1a1a;">voestalpine</span>'
      },
      {
        id: 'verbund', logo: 'verbund.png', name: 'VERBUND',
        role: 'Electrolyser & renewable-power partner',
        body: 'VERBUND (through Verbund Green Hydrogen) partners with voestalpine on the electrolyser system and its renewable power supply.',
        bodyHtml: '<p>VERBUND coordinated the original H2FUTURE pilot (pre-existing context) and supplies renewable power to the electrolyser.</p>' +
          '<p>Under Hy2Market, <strong>Verbund Green Hydrogen</strong> works with voestalpine on the hydrogen-handling upgrade at the Linz site — purification and drying, compression and storage — raising the hydrogen towards fuel cell quality for demanding downstream uses.</p>',
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
        body: 'K1-MET implements and operates an industrial methanation pilot plant under real conditions at an integrated steel mill.',
        bodyHtml: '<p>K1-MET’s main contribution is implementing and operating a methanation pilot plant under real industrial conditions at an integrated steel mill.</p>' +
          '<p><strong>WP4 — Industrial Use of Hydrogen:</strong> testing how different parameters affect a pilot-scale methanation plant, including load-flexible dynamic operation under industrial conditions.</p>' +
          '<p><strong>Lead of Task 4.3 — Roll-out:</strong> evaluating potential roll-outs across Austria, Sicily, Asturias and Western Macedonia — analysing renewable energy sources, carbon-capture options, hydrogen production, gas infrastructure and challenges with public authorities.</p>' +
          '<p>Co-involved in D4.2 (industrial use of H₂), D4.3 (CCU facility tests), D4.5 (roll-out report) and the final-conference site tour.</p>',
        gap: '2px',
        logoHtml: '<span style="font-weight:700;font-size:18px;color:#c8102e;letter-spacing:-0.03em;">K1</span><span style="font-weight:700;font-size:18px;color:#1a1a1a;letter-spacing:-0.03em;">·MET</span>'
      },
      {
        id: 'mul', logo: 'mul.png', name: 'Montanuniversität Leoben',
        role: 'Methanation research · SNG pilot',
        body: 'Montanuniversität Leoben installed a pilot plant for catalytic methanation of CO₂ and green hydrogen at an integrated steel plant.',
        bodyHtml: '<p><strong>WP4 — Industrial Use of Hydrogen.</strong> Installation of a pilot plant for the catalytic methanation of CO₂ and hydrogen to synthetic natural gas (CH₄).</p>' +
          '<p>Demonstration of a low-maturity technology in a real industrial environment at an integrated steel plant, using real process gases — CO₂ captured from power-plant exhaust and green H₂ from a PEM electrolyser.</p>' +
          '<p>Experimental investigation of bulk and proprietary honeycomb-shaped catalysts for methanation under dynamic operating conditions, plus process simulations of CCU chains with green hydrogen.</p>',
        logoHtml: '<span class="logo-word">Montanuniversität Leoben</span>'
      },
      {
        id: 'ait', logo: 'ait.png', name: 'Austrian Institute of Technology',
        role: 'Research · industrial hydrogen use cases',
        body: 'AIT develops industrial use cases for hydrogen across steel, chemicals, polymers and fertilisers, with techno-economic analysis.',
        bodyHtml: '<p><strong>WP4 — Industrial Use of Hydrogen:</strong> developing industrial use cases for hydrogen in industry. Cases investigated by AIT include:</p>' +
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
        body: 'Prozess Optimal builds simulation models of the methanation pilot and of e-fuel / CCU process chains for WP2 and WP4.',
        bodyHtml: '<p><strong>Simulation models for WP2 and WP4.</strong></p>' +
          '<p><strong>Task 2.2 — Site Management &amp; Scale-up:</strong> a detailed process model of the methanation pilot (CO₂ scrubber, CO₂ compression, electrolysis, H₂ compression, methanation reactor), calibrated to test-run results and usable for optimisation and KPI determination. Lead of D2.13 and D2.14.</p>' +
          '<p><strong>Task 4.2 — Hydrogen as Feedstock:</strong> simulation models for CH₄ and NH₃ production with green hydrogen; e-fuel models for methanol and jet fuel; a Fischer-Tropsch unit; and a comparison of power-to-liquid e-fuel methods. Lead of D4.4; contributions to D4.9 and D4.10.</p>',
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
      { tone: 'yellow', label: 'THE EXISTING BASE', text: 'voestalpine Linz has operated a 6 MW PEM electrolyser since 2019 (the H2FUTURE pilot) — giving Austria a working industrial hydrogen asset and years of operating experience to build on.' },
      { tone: 'black', label: 'HY2MARKET’S CONTRIBUTION', text: 'Eight Austrian partners integrate hydrogen production and handling at the live site, run an industrial methanation pilot, and add modelling, use-case analysis, regulation and knowledge exchange — connecting and accelerating activity rather than building a new plant.' },
      { tone: 'black', label: 'RESULT TO DATE', text: 'Pilots integrated into a working steel site, transferable industrial use cases and process models produced, and lessons shared across the Hy2Market consortium.' }
    ],

    video: { caption: 'voestalpine Linz — the demonstration site for Hy2Market’s Austrian activities.' },

    region: {
      title: 'The region',
      paragraphs: [
        'Upper Austria is the industrial heartland of the country, anchored by heavy industry around <strong>Linz</strong> — home to the voestalpine site that serves as the demonstration location for this work.',
        'The activity draws on a wider Austrian partner network — coordination, research institutes and universities, a regional development agency and engineering partners — that provides the expertise base around the Linz demonstration site.'
      ],
      map: {
        caption: 'Linz · demonstration site',
        pins: [
          { left: '40%', top: '52%', color: 'black', label: 'Linz', sub: '· demonstration site' }
        ]
      }
    },

    opportunity: {
      title: 'The opportunity',
      leadHtml: 'Hy2Market’s advantage here is that it <span class="mark">builds on H2FUTURE and complements wider follow-up activity</span> — integrating and accelerating, rather than creating the electrolyser or the whole expansion.',
      body: 'The H2FUTURE pilot — coordinated by VERBUND with voestalpine, Siemens Energy, K1-MET, Austrian Power Grid and TNO — gave the region a working electrolyser and years of green-hydrogen operating experience. Separate H2FUTURE Follow-up investments continue in parallel. Hy2Market’s role is narrower and complementary: connecting hydrogen production and handling on site, adding an industrial methanation pilot, and bringing modelling, use-case analysis, regulation and knowledge exchange so these activities can transfer to other regions.',
      startLabel: 'STARTING POSITION',
      startStats: [
        { num: 'H2FUTURE', sub: 'working 6 MW electrolyser, live since 2019' },
        { num: 'Follow-up', sub: 'parallel H2FUTURE investments continue' }
      ]
    },

    solutions: {
      title: 'The solutions',
      intro: 'Hy2Market’s Austrian activities group into three public themes. Open each to see the detail.',
      drawers: [
        {
          title: 'Production, handling & site integration',
          subtitle: 'Conditioning and integrating hydrogen at a live industrial site.',
          thumbGrad: 'linear-gradient(135deg,#2c3138,#15171b)', tex: 120,
          photoCaption: 'Hydrogen handling · voestalpine Linz',
          body: 'voestalpine and Verbund Green Hydrogen integrate purification, compression, storage and handling equipment around the existing electrolyser — conditioning the hydrogen for demanding downstream uses. The focus is integration into an operating steel site, not building a new plant.',
          stats: [
            { n: 'On-site', l: 'integration at an operating site' },
            { n: 'Fuel cell quality', l: 'purification target <span class="tc">(detailed specs partner-approved only)</span>' }
          ],
          cta: { label: 'About the production & handling work', href: '#' }
        },
        {
          title: 'Mobile methanation',
          subtitle: 'A pilot converting hydrogen and CO₂ into synthetic methane.',
          thumbGrad: 'linear-gradient(135deg,#3a4048,#1c2026)', tex: 60,
          photoCaption: 'Methanation pilot · industrial conditions',
          body: 'K1-MET and Montanuniversität Leoben implement and operate an industrial methanation pilot at the Linz site, converting green hydrogen and captured CO₂ into synthetic natural gas under real process conditions — a Hy2Market activity that raises the maturity of the technology.',
          stats: [
            { n: 'Pilot plant', l: 'real industrial conditions' },
            { n: 'H₂ + CO₂ → CH₄', l: 'catalytic methanation' }
          ],
          cta: { label: 'About the methanation pilot', href: '#' }
        },
        {
          title: 'Modelling, use cases & knowledge transfer',
          subtitle: 'Analysis, process models and consortium-wide exchange.',
          thumbGrad: 'linear-gradient(135deg,#26424a,#11272d)', tex: 90,
          photoCaption: 'Modelling · use cases · knowledge exchange',
          body: 'AIT develops industrial hydrogen use cases with techno-economic analysis, Prozess Optimal builds process-simulation models, and WIVA P&G and Business Upper Austria lead regulation, standardisation and knowledge-exchange activities across the consortium.',
          stats: [
            { n: 'Use cases', l: 'industrial hydrogen (AIT)' },
            { n: 'Models + exchange', l: 'simulation, regulation, transfer' }
          ],
          cta: { label: 'About the analysis & transfer work', href: '#' }
        }
      ]
    },

    system: {
      title: 'How it works as one system',
      intro: 'How the pieces connect around the Linz site. Each node is labelled as pre-existing context, a Hy2Market contribution, or a status to confirm. Hover any node to highlight it, click to open the detail.',
      chain: [
        { id: 'power', kicker: 'PRE-EXISTING', name: 'Renewable power', sub: 'Hydro + wind', title: 'Renewable hydro + wind feeds the electrolyser (pre-existing)' },
        { id: 'electrolyser', kicker: 'PRE-EXISTING · H2FUTURE', name: '6 MW PEM electrolyser', sub: 'live since 2019', core: true, title: '6 MW PEM electrolyser, live since 2019 (H2FUTURE)' },
        { id: 'handling', kicker: 'HY2MARKET', name: 'Production & handling', sub: 'purification · compression · storage', title: 'On-site hydrogen production & handling (Hy2Market)' }
      ],
      branches: [
        { id: 'steel', name: 'Steelmaking trials', sub: 'H2FUTURE · pre-existing', title: 'Green H₂ trialled in steelmaking (H2FUTURE, pre-existing)' },
        { id: 'methanation', name: 'Methanation pilot', sub: 'Hy2Market · K1-MET / MU Leoben', title: 'Industrial methanation pilot (Hy2Market)' },
        { id: 'usecases', name: 'Industrial use cases', sub: 'Hy2Market · AIT', title: 'Industrial hydrogen use cases & analysis (Hy2Market)' },
        { id: 'exchange', name: 'Modelling & exchange', sub: 'Hy2Market · Prozess / WIVA / Business UA', title: 'Process modelling, regulation & knowledge exchange (Hy2Market)' }
      ],
      nodeData: {
        power: { title: 'Renewable power', tag: 'Pre-existing · hydro + wind', body: 'Renewable electricity from Austria’s hydro and wind capacity feeds the electrolyser, making the hydrogen green from the first electron. Pre-existing context, not a Hy2Market investment.' },
        electrolyser: { title: '6 MW PEM electrolyser', tag: 'Pre-existing · H2FUTURE · since 2019', body: 'A 6 MW PEM electrolyser at the voestalpine steel plant in Linz, operational since 2019 as part of the H2FUTURE pilot. This is the established industrial base Hy2Market builds on — not a Hy2Market asset.' },
        handling: { title: 'Production & handling', tag: 'Hy2Market contribution', body: 'Under Hy2Market, purification, compression, storage and handling equipment are integrated around the existing electrolyser at the operating site, conditioning the hydrogen for demanding downstream uses. Detailed specifications are shared only where partner-approved.' },
        steel: { title: 'Steelmaking trials', tag: 'Pre-existing · H2FUTURE', body: 'During the H2FUTURE pilot, green hydrogen from the electrolyser was trialled in steelmaking at voestalpine’s Linz plant — an early industrial test, part of the pre-existing baseline rather than a Hy2Market result.' },
        methanation: { title: 'Methanation pilot', tag: 'Hy2Market · K1-MET / MU Leoben', body: 'K1-MET and Montanuniversität Leoben operate an industrial methanation pilot that converts green hydrogen and captured CO₂ into synthetic natural gas under real process conditions — a Hy2Market activity.' },
        usecases: { title: 'Industrial use cases', tag: 'Hy2Market · AIT', body: 'AIT develops industrial hydrogen use cases across steel, chemicals, polymers and fertilisers, with techno-economic analysis identifying the best decarbonisation concept for each — a Hy2Market activity.' },
        exchange: { title: 'Modelling & knowledge exchange', tag: 'Hy2Market · Prozess / WIVA / Business UA', body: 'Prozess Optimal builds process-simulation models while WIVA P&G and Business Upper Austria lead regulation, standardisation and knowledge-exchange activities that make the results transferable across the consortium.' }
      }
    },

    process: {
      title: 'The process',
      // fillPercent = width of the black progress line (reaches the "current" node)
      fillPercent: '90%',
      steps: [
        { date: '2019', badge: true, dateMuted: '· H2FUTURE baseline', text: '6 MW PEM electrolyser online at voestalpine Linz; green-hydrogen production begins (pre-existing).' },
        { date: '2023', dateMuted: '· Hy2Market start', text: 'Austrian partners begin integration, methanation and analysis activities around the live site.' },
        { date: '2023–25', dateMuted: '· Hy2Market', text: 'Production and handling integrated on site; industrial methanation pilot operated under real conditions.' },
        { date: '2024–26', dateMuted: '· Hy2Market', text: 'Industrial hydrogen use cases, process simulations and regulation / standardisation work developed.' },
        { date: '2026 · You are here', current: true, text: 'Learning and output phase: results, lessons and guidance consolidated and shared; final conference in Linz.' }
      ]
    },

    lessons: {
      title: 'Lessons learned',
      leadHtml: 'Upper Austria’s central lesson is about integration: <span class="mark">the hard part is fitting new pilots into a live industrial site, not the technology itself.</span>',
      body: 'Working around an operating steel plant put permitting, safety and coordination at the centre — aligning eight partners, and integrating methanation and hydrogen-handling equipment into a running site, mattered as much as the engineering. Careful measurement and documentation under real industrial conditions is what makes results credible and transferable, and structured knowledge exchange is what turns a single site’s experience into role models other regions can reuse.'
    },

    outcomes: {
      title: 'The outcomes',
      // Hy2Market's own, partner-sourced output metrics (kept separate from the
      // pre-existing H2FUTURE baseline shown below). Figures come from the
      // official Hy2Market Austria partner presentation.
      stats: [
        { tone: 'yellow', n: '20 kW', l: 'methanation pilot operated under real industrial conditions (K1-MET / Montanuniversität Leoben)' },
        { tone: 'grey', n: '5–7', l: 'industrial hydrogen use cases analysed (AIT, Deliverable D4.8)' },
        { tone: 'grey', n: '5', l: 'public knowledge-exchange webinars delivered (Business Upper Austria)' },
        { tone: 'black', n: '4', l: 'regions assessed for roll-out: Austria, Sicily, Asturias, W. Macedonia (K1-MET, Task 4.3)' }
      ],
      narrative: 'The headline value is qualitative and structural: Hy2Market integrates, de-risks and connects activity around an established industrial hydrogen asset — operating a methanation pilot under real conditions, analysing real industrial use cases, and turning the experience into transferable role models. It builds on a substantial pre-existing base.',
      baselineLabel: 'Built on the H2FUTURE base (pre-existing)',
      baseline: [
        { n: '6 MW', l: 'PEM electrolyser at voestalpine Linz · live since 2019' },
        { n: '500+ t', l: 'green hydrogen already produced in H2FUTURE' },
        { n: '~1,200 m³/h', l: 'peak green-hydrogen output' }
      ]
    },

    knowledge: {
      title: 'Knowledge exchange',
      intro: 'Knowledge exchange runs mainly at programme level: consortium meetings, public webinars, standardisation and regulation guidance, and shared learning materials. Recipient regions and resulting actions are named only where documented.',
      cards: [
        { dir: 'out', arrow: '→', label: 'PROGRAMME LEVEL', region: 'Webinars & guidance', country: '', text: 'Business Upper Austria delivers public knowledge-exchange webinars, while WIVA P&G leads standardisation and regulation guidance and the consortium learning platform.' },
        { dir: 'out', arrow: '→', label: 'CONSORTIUM', region: 'Roll-out analysis', country: '', text: 'K1-MET assesses potential roll-outs across other Hy2Market regions, including Sicily, Asturias and Western Macedonia — documented in the project’s roll-out reporting.' }
      ]
    },

    // Quotes removed pending verbatim, partner-approved statements from
    // voestalpine, VERBUND and WIVA P&G (per revision brief item 12).

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
        { href: './case-study.html?region=netherlands', k: 'TRANSPORT', region: 'Northern Netherlands', country: '· NL', d: 'Flexible non-metallic pipelines that move the molecule.' },
        { href: './case-study.html?region=medio-tejo', k: 'MOBILITY', region: 'Médio Tejo', country: '· Portugal', d: 'A hydrogen bus in nine months of real public service.' }
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
  root.CASE_STUDIES['upper-austria-revised'] = data;
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
})(typeof window !== 'undefined' ? window : this);
