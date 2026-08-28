/* =========================================================================
   Médio Tejo (Portugal) case-study content — Mobility spotlight.
   Caetano H2.City Gold hydrogen bus, nine months in daily public service.
   Same content model as upper-austria.js: one object per region.
   Reviewed against Médio Tejo 21 and IrRADIARE's partner review
   (Medio_Tejo_Case_Study_Content_Collection.docx, last updated 2026-08-28).
   NOTE: figures still marked "(pending)" are not yet confirmed by a partner
   source; a fourth quote from Médio Tejo 21 is pending and will be added
   separately once received.
   ========================================================================= */
(function (root) {
  var data = {
    slug: 'medio-tejo',
    card: { title: 'Médio Tejo, Portugal' },
    breadcrumb: { label: 'Case studies', href: './index.html', here: 'Médio Tejo' },

    hero: {
      eyebrow: 'MOBILITY · MÉDIO TEJO',
      titleHtml: 'On the Road to Proof: How Médio Tejo Deployed a <span class="hl">Hydrogen</span> Bus Into Everyday Public Service',
      lead: 'While much of the hydrogen conversation is about plants and pipelines, Médio Tejo deployed the technology somewhere people actually experience it — on a public bus, running real routes, carrying real passengers, across 11 municipalities, for nine months straight.',
      tags: ['Hydrogen mobility', 'Public transport', 'Fuel-cell bus', 'Decarbonisation', 'Rural mobility', 'Mobility'],
      mediaCaption: 'Caetano H2.City Gold hydrogen bus · Médio Tejo · urban route, Abrantes, Tomar',
      stats: [
        { num: '32,612 km', label: 'driven in real public service' },
        { num: '28 tonnes', label: 'CO₂ / GHG emissions avoided' },
        { num: '~11,000 litres', label: 'diesel avoided' },
        { num: '11 municipalities', label: 'served across the pilot' }
      ]
    },

    partners: [
      {
        id: 'mt21', logo: 'mt21.png', name: 'Médio Tejo 21',
        role: 'Coordinator · mobility work package and pilot delivery',
        body: 'Médio Tejo 21 — the Agência Regional de Energia e Ambiente do Médio Tejo — coordinated the implementation and operation of the hydrogen mobility demonstration pilot in Médio Tejo region. The agency coordinated the installation of the portable hydrogen refuelling station and the integration of the hydrogen bus into regular public transport services, while ensuring ongoing coordination with the relevant regional stakeholders, including municipalities, public safety authorities and the public transport operator. The CaetanoBus H2.City Gold, operator Rodoviária do Tejo and the PRF – Gás Solutions portable refuelling station were the bus, fuel-cell and refuelling suppliers (not Hy2Market consortium partners).',
        gap: '5px',
        logoHtml: '<span style="font-weight:700;font-size:14px;color:#1a1a1a;">Médio Tejo</span><span style="font-weight:800;font-size:15px;color:#e2001a;">21</span>'
      },
      {
        id: 'irradiare', logo: 'irradiare.png', name: 'IrRADIARE',
        role: 'Technical partner · pilot monitoring and technical support',
        body: 'IrRADIARE provided technical support to the pilot and led the development of the Hy2Market mobility platform, which enabled operational data from the hydrogen bus to be collected, visualised and monitored, supporting the analysis of key performance indicators throughout the demonstration.',
        logoHtml: '<span style="font-weight:700;font-size:15px;color:#0a8f5c;letter-spacing:0.01em;">IrRADIARE</span>'
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
      { tone: 'yellow', label: 'THE CHALLENGE', text: 'Public transport in the Médio Tejo region faces the challenge of providing reliable, low-emission mobility across a geographically dispersed territory, with hilly terrain. The challenge was to demonstrate the operational feasibility of hydrogen buses under real public transport conditions, while building awareness and acceptance of hydrogen technologies among passengers and local communities.' },
      { tone: 'black', label: 'THE INNOVATION', text: 'Hy2Market funded a nine-month, real-world deployment of a Caetano H2.City Gold hydrogen bus, coordinated by Médio Tejo 21 with technical support from IrRADIARE — proving hydrogen mobility across two different duty cycles on a single portable refuelling station.' },
      { tone: 'black', label: 'THE OUTCOME', text: 'A replicable proof point for rural and hilly regions: 32,612 km driven with zero technical issues, now feeding a permanent fleet transition at the regional operator.' }
    ],

    video: { caption: 'Inês Silva, IrRADIARE — on running Médio Tejo’s first hydrogen bus in daily public service.' },

    region: {
      title: 'The region',
      paragraphs: [
        'Médio Tejo sits along the Tagus River in central Portugal — a region comprising 11 municipalities, with population centres spread across a geographically dispersed and hilly territory, including towns such as <strong>Abrantes</strong> and <strong>Tomar</strong>. The distances between population centres are long and the roads climb and fall, making hydrogen fuel-cell buses a resilient solution for zero-emission public transport.',
        'The Médio Tejo region has developed a hydrogen strategy as part of its energy transition. In 2019, the region presented the <strong>HyTagus Valley</strong> initiative, aimed at developing a regional hydrogen value chain and promoting hydrogen applications across different sectors, including transport.'
      ],
      map: {
        caption: 'Médio Tejo · hydrogen mobility corridor',
        pins: [
          { left: '30%', top: '56%', color: 'black', label: 'Abrantes', sub: '· urban route' },
          { left: '64%', top: '42%', color: 'yellow', label: 'Tomar', sub: '· inter-city' }
        ]
      }
    },

    opportunity: {
      title: 'The opportunity',
      leadHtml: 'The Médio Tejo pilot offered an opportunity to demonstrate the operational feasibility of hydrogen mobility in a real regional public transport context, testing the bus across different routes and operating conditions — long distances, hilly terrain, low population density.',
      body: 'Médio Tejo 21 coordinated the pilot implementation, enabling a single demonstration to test two distinct operating contexts in sequence: an urban circuit in Abrantes, followed by longer regional and inter-city routes from Tomar. The portable hydrogen refuelling station was moved between the two locations, allowing the same bus and refuelling solution to be tested in both settings without requiring permanent refuelling infrastructure from the outset.',
      startLabel: 'STARTING POSITION',
      startStats: [
        { num: '38%', sub: 'of regional GHG emissions come from transport' },
        { num: 'Zero → one', sub: 'hydrogen buses in daily regional service before this pilot' }
      ]
    },

    solutions: {
      title: 'The solutions',
      intro: 'Three moving parts made the demonstration work. Open each to see the detail.',
      drawers: [
        {
          title: 'The vehicle',
          subtitle: 'A 64-passenger fuel-cell bus built for daily service.',
          thumbGrad: 'linear-gradient(135deg,#2c3138,#15171b)', tex: 120,
          photoCaption: 'Caetano H2.City Gold',
          body: 'CaetanoBus H2.City Gold, developed and manufactured by Portuguese bus manufacturer CaetanoBus, uses hydrogen fuel-cell technology to generate electricity on board and power its electric drivetrain. The batteries, hydrogen tanks and fuel cell are mounted on the roof, optimizing interior space.',
          stats: [
            { n: '64', l: 'passenger capacity' },
            { n: '5.37 kg', l: 'H₂ per 100 km (measured average)' }
          ]
        },
        {
          title: 'The route',
          subtitle: 'Two duty cycles, one bus, nine months.',
          thumbGrad: 'linear-gradient(135deg,#3a4048,#1c2026)', tex: 60,
          photoCaption: 'Urban circuit, Abrantes → inter-city, Tomar',
          body: 'The bus averaged 200 km a day across circuits serving all 11 municipalities. Urban route based in <strong>Abrantes</strong> (Nov 2023–Apr 2024), then an inter-city route based in <strong>Tomar</strong> (Apr–Aug 2024), deliberately including student-transport routes to help spread awareness of the technology.',
          stats: [
            { n: '200 km', l: 'average daily distance' },
            { n: '11', l: 'municipalities served' }
          ]
        },
        {
          title: 'The refuelling',
          subtitle: 'One portable station, two sites.',
          thumbGrad: 'linear-gradient(135deg,#26424a,#11272d)', tex: 90,
          photoCaption: 'PRF portable HRS · relocated Abrantes → Tomar',
          body: 'A mobile hydrogen refuelling station from <strong>PRF – Gas Solutions</strong> relocated from the Municipal Shipyard in Abrantes to the Central Bus Terminal in Tomar partway through the pilot — no permanent build required at either site.',
          stats: [
            { n: 'Mobile', l: 'hydrogen refuelling station' },
            { n: '2 sites', l: 'Abrantes → Tomar' }
          ]
        }
      ]
    },

    system: {
      title: 'How it works as one system',
      intro: 'From hydrogen supply to public service on real routes. Hover any node to highlight it, click to open the detail.',
      chain: [
        { id: 'supply', kicker: 'INPUT', name: 'Green hydrogen supply', sub: 'delivered to the HRS', title: 'Green hydrogen supplied to the portable station' },
        { id: 'hrs', kicker: 'CORE', name: 'PRF mobile HRS', sub: 'relocatable · 2 sites', core: true, title: 'PRF mobile hydrogen refuelling station' },
        { id: 'bus', kicker: 'STEP', name: 'Caetano H2.City Gold', sub: '64 passengers', title: 'Caetano H2.City Gold fuel-cell bus' },
        { id: 'service', kicker: 'STEP', name: 'Public route service', sub: '~200 km/day', title: 'Daily public service, ~200 km/day' }
      ],
      branches: [
        { id: 'urban', name: 'Urban route', sub: 'Abrantes', title: 'Urban circuit based in Abrantes' },
        { id: 'intercity', name: 'Inter-city route', sub: 'Tomar', title: 'Inter-city route based in Tomar' },
        { id: 'fleet', name: 'Fleet expansion', sub: 'Rodoviária Tejo', title: 'Fleet expansion at Rodoviária Tejo' },
        { id: 'capacitation', name: 'Demonstration project', sub: 'mobility sector', title: 'Demonstration project — mobility sector' },
        { id: 'exchange', name: 'Knowledge exchange', sub: 'WP5 mobility regions', title: 'Knowledge exchange across the WP5 mobility regions' }
      ],
      nodeData: {
        supply: { title: 'Green hydrogen supply', tag: 'Delivered to the portable HRS', body: 'Green hydrogen is delivered to the portable refuelling station, the input that keeps the bus in daily service across both duty cycles.' },
        hrs: { title: 'PRF mobile refuelling station', tag: 'Relocatable · Abrantes → Tomar', body: 'A mobile hydrogen refuelling station from PRF – Gas Solutions. Because it is relocatable, a single station served two different sites — the Municipal Shipyard in Abrantes, then the Central Bus Terminal in Tomar — with no permanent infrastructure required at either site.' },
        bus: { title: 'Caetano H2.City Gold', tag: 'Advanced fuel-cell technology · 64 passengers', body: 'A 64-passenger fuel-cell bus built by CaetanoBus using advanced second-generation fuel-cell technology. Batteries, tanks and fuel cell are mounted on the roof; measured consumption averaged 5.37 kg H₂ per 100 km.' },
        service: { title: 'Public route service', tag: '~200 km/day · 11 municipalities', body: 'The bus ran real public routes averaging ~200 km a day, serving the region’s 11 municipalities over nine months and 32,612 km with zero technical issues.' },
        urban: { title: 'Urban route · Abrantes', tag: 'Nov 2023 – Apr 2024', body: 'The first duty cycle: a dense urban circuit based in Abrantes (Nov 2023 – Apr 2024). The route covered the city’s busiest areas, the industrial zone and the hospital, as well as secondary schools. The aim was to maximize the visibility of the project, disseminating and raising awareness of H₂ mobility.' },
        intercity: { title: 'Inter-city route · Tomar', tag: 'Apr – Jul 2024', body: 'The second duty cycle: a longer inter-city route based in Tomar (Apr – Jul 2024). The route covered connections between urban centres in the region to test bus consumption and performance on open-road circuits across varied terrain — from flat stretches to more rugged landscapes — while allowing a wider public to experience H₂ mobility.' },
        fleet: { title: 'Fleet expansion', tag: 'Rodoviária Tejo · 3 buses', body: 'Building on nine fault-free months, Rodoviária do Tejo applied for national funding for a three-bus fleet — turning a successful demonstration into a long-term operational commitment.' },
        capacitation: { title: 'Demonstration project', tag: 'Operational viability · mobility sector', body: 'A real-world demonstration proving the technical viability of hydrogen buses on Médio Tejo routes, delivering practical operational insights and training for local public transport stakeholders.' },
        exchange: { title: 'Knowledge exchange', tag: 'WP5 · mobility regions', body: 'As WP5 lead, Médio Tejo 21 facilitates knowledge exchange between the mobility pilot regions — Asturias, Aragon, Constanța and Médio Tejo — bringing together lessons from their distinct pilot experiences. The collaboration provides a framework to compare operational approaches, barriers and enabling conditions for hydrogen mobility, with the findings brought together in the demonstration report (D5.2).' }
      }
    },

    process: {
      title: 'The process',
      fillPercent: '83.4%',
      steps: [
        { date: '2019', badge: true, text: 'Médio Tejo presents the HyTagus Valley hydrogen initiative.' },
        { date: '13 Nov 2023', text: 'Hydrogen bus pilot launches, based in Abrantes, coordinated by Médio Tejo 21 with IrRADIARE.' },
        { date: 'Apr 2024', text: 'Refuelling station relocates to Tomar; the bus shifts to the inter-city route.' },
        { date: 'Aug 2024', text: 'Nine-month demonstration concludes: 32,612 km driven, zero technical issues.' },
        { date: 'Aug 2024', dateMuted: '· Hy2Market', text: 'Results published.' },
        { date: '2026 · You are here', current: true, text: 'Rodoviária Tejo applied for national funding for a 3-bus fleet expansion.' }
      ]
    },

    lessons: {
      title: 'Lessons learned',
      leadHtml: 'Demonstrating hydrogen mobility in real public transport conditions provides the operational evidence needed to guide future investment and broader deployment.',
      body: 'Médio Tejo’s pilot has already become a reference point inside Hy2Market — Upper Austria’s own case study names Médio Tejo as a leading example of hydrogen mobility in practice. Nine months of fault-free operation and proven route performance gave Rodoviária do Tejo the confidence to apply for national funding for a permanent fleet.'
    },

    outcomes: {
      title: 'The outcomes',
      stats: [
        { tone: 'yellow', n: '32,612 km', l: 'driven in real public service' },
        { tone: 'grey', n: '5.37 kg H₂/100km', l: 'average hydrogen consumption' },
        { tone: 'grey', n: '28 tonnes', l: 'CO₂ / GHG avoided' },
        { tone: 'grey', n: '0', l: 'technical issues across 9 months' },
        { tone: 'grey', n: '~11,000 litres', l: 'diesel avoided' },
        { tone: 'black', n: '3 buses', l: 'fleet expansion now underway' }
      ],
      narrative: 'Médio Tejo now offers the rest of the consortium a working, real-world answer to the question every rural or hilly region asks before investing: does a hydrogen bus survive daily service? Nine months of real-world evidence are now powering a permanent fleet transition and inspiring wider adoption across the public transport sector.',
      pending: [
        { n: '— passengers', l: 'Passengers carried <em>(not tracked during the pilot)</em>' },
        { n: '— TRL', l: 'TRL change for the mobility technology <em>(pending)</em>' }
      ]
    },

    knowledge: {
      title: 'Knowledge exchange',
      intro: 'Médio Tejo leads WP5 (Hydrogen Mobility) — the work package where Hy2Market’s mobility regions share what they learn from putting hydrogen vehicles into real service. Its completed nine-month bus pilot is the reference the other regions’ demonstrations build on, while barriers, standards and refuelling know-how flow back across the cluster.',
      cards: [
        { dir: 'out', arrow: '→', label: 'SHARING TO', region: 'Asturias', country: '· Spain', text: 'ALSA is running a Toyota/CaetanoBus fuel-cell bus on real lines at 200–300 km/day over a 36-month test. Médio Tejo’s duty-cycle results and 5.37 kg H₂/100 km consumption give a fleet operator a proven benchmark for a longer-duration trial.' },
        { dir: 'out', arrow: '→', label: 'SHARING TO', region: 'Constanța', country: '· Romania', text: 'MEDGreen and IAC Special Projects are designing an innovative 100 kW fuel-cell minibus. Médio Tejo’s real-world operating experience helps de-risk the vehicle concept before a wheel is built.' },
        { dir: 'in', arrow: '↔', label: 'POOLED ACROSS WP5', region: 'The mobility network', country: '', text: 'Lessons flow back too: Constanța coordinates the regional pilots into a shared demonstration report (D5.2), while Northern Netherlands and Western Macedonia add regulatory and roll-out perspective from the barriers-and-standards work (Task 5.1).' }
      ]
    },

    quotesEyebrow: 'IN THEIR WORDS',
    quotes: [
      { text: 'With this demonstration we prove that in Médio Tejo, it’s feasible to use hydrogen buses, they are reliable. We had no technical issues during the whole demonstration period.', name: 'Inês Silva', role: 'IrRADIARE' },
      { text: 'Médio Tejo, as a region, aims to promote the energy transition of the public bus sector using hydrogen. In the region, the distances between the cities are very big, the terrain is a bit hilly, so hydrogen becomes a better solution than electric vehicles.', name: 'Inês Silva', role: 'IrRADIARE' },
      { text: 'The learnings that we achieved here in the Hy2Market project, we would like to share with the industrial sector in the region.', name: 'Inês Silva', role: 'IrRADIARE' }
    ],

    next: {
      eyebrow: 'CONTINUE THE STORY',
      allHref: './index.html',
      featured: {
        href: './case-study.html?region=upper-austria',
        kicker: 'CASE STUDY · PRODUCTION',
        title: 'Upper Austria: from steel to a green hydrogen value chain',
        lead: 'The production partner that cites Médio Tejo in its own story. See how Hy2Market extended a working 6 MW electrolyser in Linz into a complete value chain.',
        chips: ['Austria', 'Electrolysis', 'Steel'],
        caption: 'voestalpine steel plant · Linz · H2FUTURE electrolyser'
      },
      others: [
        { href: './case-study.html?region=upper-austria', k: 'PRODUCTION', region: 'Upper Austria', country: '· Austria', d: 'A working electrolyser extended into a regional hydrogen network.' },
        { href: './case-study.html?region=netherlands', k: 'TRANSPORT', region: 'Deventer', country: '· Netherlands', d: 'A flexible composite hydrogen pipeline, laid in ~two months.' }
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
  root.CASE_STUDIES['medio-tejo'] = data;
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
})(typeof window !== 'undefined' ? window : this);
