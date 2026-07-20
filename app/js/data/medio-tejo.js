/* =========================================================================
   Médio Tejo (Portugal) case-study content — Mobility spotlight.
   Caetano H2.City Gold hydrogen bus, nine months in daily public service.
   Same content model as upper-austria.js: one object per region.
   NOTE: figures marked "(confirm)"/"(pending)" are not yet verified against a
   partner source — see the source brief's flagged-for-confirmation notes.
   ========================================================================= */
(function (root) {
  var data = {
    slug: 'medio-tejo',
    card: { title: 'Médio Tejo, Portugal' },
    breadcrumb: { label: 'Case studies', href: './index.html', here: 'Médio Tejo' },

    hero: {
      eyebrow: 'MOBILITY · MÉDIO TEJO',
      titleHtml: 'On the Road to Proof: How Médio Tejo Put a <span class="hl">Hydrogen</span> Bus Into Everyday Public Service',
      lead: 'While much of the hydrogen conversation is about plants and pipelines, Médio Tejo put the technology to work somewhere people actually feel it — on a public bus, running real routes, carrying real passengers, across 11 municipalities, for nine months straight.',
      tags: ['Hydrogen mobility', 'Public transport', 'Fuel-cell bus', 'Decarbonisation', 'Rural mobility', 'Mobility'],
      mediaCaption: 'Caetano H2.City Gold hydrogen bus · Médio Tejo · urban route, Abrantes',
      stats: [
        { num: '30,769 km', label: 'driven in real public service' },
        { num: '41.9 tonnes', label: 'CO₂ / GHG emissions avoided' },
        { num: '11 municipalities', label: 'served across the pilot' }
      ]
    },

    partners: [
      {
        id: 'irradiare', name: 'IrRADIARE',
        role: 'Technical lead · pilot delivery',
        body: 'IrRADIARE led the technical delivery of the pilot — sourcing the vehicle and refuelling infrastructure as a matched pair and running Portugal’s first hydrogen bus in daily public service.',
        logoHtml: '<span style="font-weight:700;font-size:15px;color:#0a8f5c;letter-spacing:0.01em;">IrRADIARE</span>'
      },
      {
        id: 'mt21', name: 'Médio Tejo 21',
        role: 'Regional coordinator',
        body: 'Médio Tejo 21 coordinated the demonstration across the 11 municipalities of the region, aligning the pilot with the HyTagus Valley hydrogen initiative.',
        gap: '5px',
        logoHtml: '<span style="font-weight:700;font-size:14px;color:#1a1a1a;">Médio Tejo</span><span style="font-weight:800;font-size:15px;color:#e2001a;">21</span>'
      },
      {
        id: 'rodoviaria', name: 'Rodoviária Tejo',
        role: 'Regional bus operator',
        body: 'Rodoviária Tejo is the regional public-transport operator. Persuaded by nine months of fault-free service, it is now pursuing national funding for a three-bus fleet expansion.',
        logoHtml: '<span style="font-weight:700;font-size:14px;color:#0072bc;letter-spacing:0.01em;">Rodoviária Tejo</span>'
      },
      {
        id: 'caetano', name: 'CaetanoBus',
        role: 'Bus manufacturer',
        body: 'CaetanoBus builds the H2.City Gold fuel-cell bus used in the pilot — a 62-passenger vehicle developed with support from Portugal 2020 and the Recovery and Resilience Mechanism.',
        col: true,
        logoHtml: '<span style="font-weight:700;font-size:15px;color:#c8102e;">Caetano</span><span style="font-weight:600;font-size:15px;color:#1a1a1a;">Bus</span>'
      },
      {
        id: 'toyota', name: 'Toyota',
        role: 'Fuel-cell technology',
        body: 'Toyota supplies the FC Stack Generation 2 fuel-cell technology at the heart of the H2.City Gold bus.',
        logoHtml: '<span style="font-weight:700;font-size:15px;color:#eb0a1e;letter-spacing:0.03em;">TOYOTA</span>'
      },
      {
        id: 'prf', name: 'PRF – Gas Solutions',
        role: 'Portable refuelling station',
        body: 'PRF – Gas Solutions provided the portable hydrogen refuelling station — relocated mid-pilot from Abrantes to Tomar, so neither site needed a permanent build.',
        col: true,
        logoHtml: '<span style="font-weight:800;font-size:16px;color:#1a1a1a;letter-spacing:0.02em;">PRF</span><span style="font-weight:500;font-size:10px;color:#666;letter-spacing:0.12em;text-transform:uppercase;margin-top:2px;">Gas Solutions</span>'
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
      { tone: 'yellow', label: 'THE CHALLENGE', text: 'Public transport drives 38% of Médio Tejo’s greenhouse gas emissions, the single largest source in the region. Long distances between towns and hilly terrain make battery-electric buses a poor fit — the region needed proof that hydrogen could work in daily service, not just in a lab.' },
      { tone: 'black', label: 'THE INNOVATION', text: 'Hy2Market funded a nine-month, real-world deployment of a Caetano H2.City Gold hydrogen bus, coordinated by Médio Tejo 21 with IrRADIARE — proving hydrogen mobility across two different duty cycles on a single portable refuelling station.' },
      { tone: 'black', label: 'THE OUTCOME', text: 'A replicable proof point for rural and hilly regions: 30,769 km driven with zero technical issues, now feeding a permanent fleet transition at the regional operator.' }
    ],

    video: { caption: 'Inês Silva, IrRADIARE — on running Portugal’s first hydrogen bus in daily public service.' },

    region: {
      title: 'The region',
      paragraphs: [
        'Médio Tejo sits along the Tagus river in central Portugal — 11 municipalities spread across hilly, sparsely populated terrain, anchored by towns like <strong>Abrantes</strong> and <strong>Tomar</strong>. The distances between population centres are long and the roads climb and fall, conditions that work against battery-electric buses far more than they work against hydrogen.',
        'Since the 2021 closure of the <strong>Pego</strong> coal power plant, the region has committed to shifting away from a fossil-fuel-based economy — a transition formalised in the <strong>HyTagus Valley</strong> hydrogen initiative. Transport is the region’s single largest emissions source, responsible for <strong>38%</strong> of its greenhouse-gas output.'
      ],
      map: {
        caption: 'Médio Tejo · hydrogen mobility corridor',
        pins: [
          { left: '30%', top: '56%', color: 'black', label: 'Abrantes', sub: '· urban route' },
          { left: '64%', top: '42%', color: 'yellow', label: 'Tomar', sub: '· inter-city' },
          { left: '80%', top: '58%', color: 'black', label: 'Pego', sub: 'former coal · ', right: true }
        ]
      }
    },

    opportunity: {
      title: 'The opportunity',
      leadHtml: 'Médio Tejo’s advantage is that it is <span class="mark">proving hydrogen works in the hardest conditions first</span> — long distances, hilly terrain, low population density — rather than starting somewhere easier.',
      body: 'IrRADIARE and Médio Tejo 21 sourced the vehicle and the refuelling infrastructure as a matched pair, which is what let a single pilot test two very different duty cycles in sequence: a dense urban circuit, then a longer inter-city route, without committing to permanent fixed infrastructure at either site first.',
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
          subtitle: 'A 62-passenger fuel-cell bus built for daily service.',
          thumbGrad: 'linear-gradient(135deg,#2c3138,#15171b)', tex: 120,
          photoCaption: 'Caetano H2.City Gold · Toyota FC Stack Gen 2',
          body: 'Caetano H2.City Gold, built on <strong>Toyota FC Stack Generation 2</strong> fuel-cell technology, developed with support from Portugal 2020 and the Recovery and Resilience Mechanism. Batteries, tanks and fuel cell sit on the roof, keeping the cabin wide and low-noise.',
          stats: [
            { n: '62', l: 'passenger capacity' },
            { n: '~6.8 kg', l: 'H₂ per 100 km (measured average)' }
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
          body: 'A portable hydrogen refuelling station from <strong>PRF – Gas Solutions</strong> relocated from the Municipal Shipyard in Abrantes to the Trucking Center in Tomar partway through the pilot — no permanent build required at either site.',
          stats: [
            { n: 'Portable', l: 'hydrogen refuelling station' },
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
        { id: 'hrs', kicker: 'CORE', name: 'PRF portable HRS', sub: 'relocatable · 2 sites', core: true, title: 'PRF portable hydrogen refuelling station' },
        { id: 'bus', kicker: 'STEP', name: 'Caetano H2.City Gold', sub: '62 passengers', title: 'Caetano H2.City Gold fuel-cell bus' },
        { id: 'service', kicker: 'STEP', name: 'Public route service', sub: '~200 km/day', title: 'Daily public service, ~200 km/day' }
      ],
      branches: [
        { id: 'urban', name: 'Urban route', sub: 'Abrantes', title: 'Urban circuit based in Abrantes' },
        { id: 'intercity', name: 'Inter-city route', sub: 'Tomar → 6 cities', title: 'Inter-city route based in Tomar' },
        { id: 'fleet', name: 'Fleet expansion', sub: 'Rodoviária Tejo', title: 'Fleet expansion at Rodoviária Tejo' },
        { id: 'capacitation', name: 'Capacitation project', sub: 'industrial sector', title: 'Regional industrial capacitation project' },
        { id: 'exchange', name: 'Knowledge exchange', sub: 'Upper Austria', title: 'Knowledge exchange with Upper Austria' }
      ],
      nodeData: {
        supply: { title: 'Green hydrogen supply', tag: 'Delivered to the portable HRS', body: 'Green hydrogen is delivered to the portable refuelling station, the input that keeps the bus in daily service across both duty cycles.' },
        hrs: { title: 'PRF portable refuelling station', tag: 'Relocatable · Abrantes → Tomar', body: 'A portable hydrogen refuelling station from PRF – Gas Solutions. Because it is relocatable, one station served two different sites — the Municipal Shipyard in Abrantes, then the Trucking Center in Tomar — with no permanent build at either.' },
        bus: { title: 'Caetano H2.City Gold', tag: 'Toyota FC Stack Gen 2 · 62 passengers', body: 'A 62-passenger fuel-cell bus built by CaetanoBus on Toyota FC Stack Generation 2 technology. Batteries, tanks and fuel cell sit on the roof; measured consumption averaged ~6.8 kg H₂ per 100 km.' },
        service: { title: 'Public route service', tag: '~200 km/day · 11 municipalities', body: 'The bus ran real public routes averaging ~200 km a day, serving all 11 municipalities over nine months and 30,769 km with zero technical issues.' },
        urban: { title: 'Urban route · Abrantes', tag: 'Nov 2023 – Apr 2024', body: 'The first duty cycle: a dense urban circuit based in Abrantes, refuelled at the Municipal Shipyard station.' },
        intercity: { title: 'Inter-city route · Tomar', tag: 'Apr – Aug 2024', body: 'The second duty cycle: a longer inter-city route based in Tomar, including student-transport routes to spread awareness of the technology.' },
        fleet: { title: 'Fleet expansion', tag: 'Rodoviária Tejo · 3 buses', body: 'Convinced by nine fault-free months, Rodoviária Tejo is pursuing national funding for a three-bus fleet — the pilot doing the persuading a brochure could not.' },
        capacitation: { title: 'Capacitation project', tag: 'Regional industrial sector', body: 'A regional knowledge-sharing programme carrying the pilot’s learnings to Médio Tejo’s wider industrial sector. (Stated by IrRADIARE; not yet corroborated publicly.)' },
        exchange: { title: 'Knowledge exchange', tag: 'With Upper Austria', body: 'Médio Tejo shares mobility-demonstration know-how with Upper Austria — cited directly in Upper Austria’s own case study — and draws production and renewable-capacity expertise in return.' }
      }
    },

    process: {
      title: 'The process',
      fillPercent: '83.4%',
      steps: [
        { date: '2021', badge: true, text: 'Pego coal power plant closes; the HyTagus Valley hydrogen initiative launches.' },
        { date: '13 Nov 2023', text: 'Hydrogen bus pilot launches, based in Abrantes, coordinated by Médio Tejo 21 with IrRADIARE.' },
        { date: 'Apr 2024', text: 'Refuelling station relocates to Tomar; the bus shifts to the inter-city route.' },
        { date: 'Aug 2024', text: 'Nine-month demonstration concludes: 30,769 km driven, zero technical issues.' },
        { date: 'Aug 2024', dateMuted: '· Hy2Market', text: 'Results published; Interreg Europe features the pilot as a good practice.' },
        { date: '2026 · You are here', current: true, text: 'Rodoviária Tejo pursues national funding for a 3-bus fleet expansion; capacitation project underway.' }
      ]
    },

    lessons: {
      title: 'Lessons learned',
      leadHtml: 'The central lesson is about sequencing: <span class="mark">prove reliability on real routes before asking an operator to commit capital.</span>',
      body: 'Médio Tejo’s pilot has already become a reference point inside Hy2Market — Upper Austria’s own case study names Médio Tejo as a leading example of hydrogen mobility in practice. Nine months without a single technical issue is what moved Rodoviária Tejo to seek national funding for its own fleet: the pilot did the persuading that a brochure or a lab demo could not.'
    },

    outcomes: {
      title: 'The outcomes',
      stats: [
        { tone: 'yellow', n: '30,769 km', l: 'driven in real public service' },
        { tone: 'grey', n: '41.9 t', l: 'CO₂ / GHG avoided' },
        { tone: 'grey', n: '0', l: 'technical issues across 9 months' },
        { tone: 'black', n: '3 buses', l: 'fleet expansion now underway' }
      ],
      narrative: 'Médio Tejo now offers the rest of the consortium a working, real-world answer to the question every rural or hilly region asks before investing: does a hydrogen bus survive daily service? Nine months of proof is now feeding a permanent fleet transition — and a regional knowledge-sharing programme aimed at Médio Tejo’s wider industrial sector.',
      pending: [
        { n: '— passengers', l: 'Passengers carried <em>(pending confirmation)</em>' },
        { n: '—', l: 'Industrial partners in capacitation project <em>(pending)</em>' },
        { n: '— TRL', l: 'TRL change for the mobility technology <em>(pending)</em>' }
      ]
    },

    knowledge: {
      title: 'Knowledge exchange',
      intro: 'As a region proving mobility demonstration in practice, Médio Tejo both shares hard-won operational expertise and draws on more industrially advanced regions for production know-how — knowledge flows in both directions across the Hy2Market network.',
      cards: [
        { dir: 'out', arrow: '→', label: 'SHARING TO', region: 'Upper Austria', country: '· Austria', text: 'Mobility-demonstration know-how — cited directly in Upper Austria’s own Hy2Market case study as a leading example of hydrogen mobility in practice.' },
        { dir: 'in', arrow: '←', label: 'LEARNING FROM', region: 'Upper Austria', country: '· Austria', text: 'Production and renewable-capacity expertise, in exchange for Médio Tejo’s mobility-demonstration know-how.' }
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
