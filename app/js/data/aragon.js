/* =========================================================================
   Aragón case-study content — Hy2Market WP5 hydrogen mobility.
   Spain's first public hydrogen taxi (Fundación Hidrógeno Aragón, Huesca).
   Same reusable content model as the other regions: one object per region.
   Content drawn from the Aragón partner content-collection; figures still
   marked "to confirm" with FHA before final sign-off.
   ========================================================================= */
(function (root) {
  var data = {
    slug: 'aragon',
    breadcrumb: { label: 'Case studies', href: '/', here: 'Aragón' },

    // Landing-page card (otherwise derived from hero + breadcrumb).
    card: {
      kicker: 'MOBILITY · ARAGÓN',
      title: 'Aragón, Spain',
      blurb: 'Spain’s first public hydrogen taxi, running real service across Huesca on renewable hydrogen from Pyrenean water.',
      tags: ['Hydrogen mobility', 'Public transport', 'Hydrogen taxi'],
      accent: '#0a8a4f'
    },

    hero: {
      eyebrow: 'MOBILITY · ARAGÓN',
      // {hl} marks the yellow-underlined word
      titleHtml: 'From Pyrenean Water to Spain’s First Hydrogen <span class="hl">Taxi</span>',
      lead: 'For three months, Fundación Hidrógeno Aragón will power Spain’s first hydrogen taxi with renewable hydrogen produced from Pyrenean water — demonstrating how hydrogen can help decarbonise light public transport while bringing the technology closer to taxi operators and citizens.',
      tags: ['Hydrogen mobility', 'Public transport', 'First H₂ taxi in Spain', 'Fuel-cell taxi', 'Decarbonisation'],
      mediaCaption: 'Toyota Mirai fuel-cell taxi · Huesca · Walqa Technology Park',
      stats: [
        { num: '+10,000 km', label: 'to be driven by the fuel-cell taxi (estimation)' },
        { num: '+1,500 kg', label: 'CO₂ / GHG emissions avoided' },
        { num: '+100 kg', label: 'of clean hydrogen to be consumed' }
      ]
    },

    // Each partner: a bespoke logo lockup (logoHtml) + modal content.
    partners: [
      {
        id: 'fha', name: 'Fundación Hidrógeno de Aragón (FHA)',
        role: 'Coordinator · Aragón pilot delivery',
        body: 'Fundación Hidrógeno Aragón (FHA) coordinates Spain’s first hydrogen taxi demonstration. For three months, the fuel-cell taxi will operate as a regular taxi service across Huesca province, allowing the technology to be tested under real operating conditions while providing transport services to local citizens. A professional taxi driver was selected from several candidates to carry out the demonstration and gather practical experience with the vehicle in daily operation. The taxi will be refuelled primarily at FHA’s facilities in Walqa Technology Park, where the foundation operates two hydrogen refuelling stations.',
        col: true,
        logoHtml: '<span style="display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:#0a8a4f;color:#fff;font-weight:700;font-size:12px;">H₂</span><span style="font-weight:700;font-size:15px;color:#1a1a1a;letter-spacing:0.01em;">FHA <span style="color:#0a8a4f;font-weight:600;">Aragón</span></span>'
      },
      {
        id: 'raven', name: 'RAVEN SR Iberia',
        role: 'Task 5.1 coordinator · standardisation, barriers analysis & replication',
        body: 'RAVEN SR Iberia coordinates Task 5.1 — identifying the limitations, constraints and barriers to hydrogen mobility across the consortium’s regions, and mapping the major trucking routes and hubs for heavy hydrogen transport in the EU — alongside the standardisation and replication analysis that supports scale-up across the other Hy2Market regions.',
        gap: '8px',
        logoHtml: '<span style="font-weight:800;font-size:18px;color:#1a1a1a;letter-spacing:-0.02em;">RAVEN</span><span style="font-weight:500;font-size:11px;color:#666;letter-spacing:0.12em;text-transform:uppercase;">SR Iberia</span>'
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
      { tone: 'black', label: 'THE CHALLENGE', text: 'The challenge was to integrate hydrogen into everyday mobility services and demonstrate its value to citizens under real operating conditions. A hydrogen bus was considered first, but light-duty mobility was chosen for its higher demand, easier integration with FHA’s existing refuelling infrastructure, and the chance to strengthen operations while delivering a practical service to users.' },
      { tone: 'yellow', label: 'THE INNOVATION', text: 'The pilot uses hydrogen-powered taxis to bring the technology closer to citizens. Taxis link Huesca with surrounding municipalities, serving residents, students and patients travelling to key services. Their mix of short urban trips and longer interurban journeys creates a demanding real-world use case — an ideal way to demonstrate hydrogen mobility.' },
      { tone: 'black', label: 'THE OUTCOME', text: 'The project lays the foundations for hydrogen-powered light mobility in Aragón through the region’s first public hydrogen taxi. Beyond the vehicle itself, it has brought together key stakeholders to open the door to wider adoption — a reference case that could inspire similar initiatives across Aragón and the rest of Spain.' }
    ],

    video: { caption: 'Fundación Hidrógeno Aragón · Huesca — introducing Spain’s first public hydrogen taxi demonstration.' },

    region: {
      title: 'The region',
      paragraphs: [
        'Aragón is one of Spain’s leading hydrogen regions, combining a strong industrial base with a growing ecosystem of hydrogen production, research and refuelling infrastructure. While <strong>Zaragoza</strong> concentrates most of the population and economic activity, many smaller municipalities rely on regular connections with regional service centres such as <strong>Huesca</strong>, creating a constant demand for flexible mobility solutions.',
        'Through its hydrogen strategy and the work of organisations such as <strong>Fundación Hidrógeno Aragón</strong>, the region has become a reference point for new hydrogen applications. As transport remains one of the hardest sectors to decarbonise, Aragón is using real-world mobility projects to explore how hydrogen can complement other zero-emission technologies in demanding day-to-day operations.'
      ],
      map: {
        caption: 'Huesca · hydrogen operating area',
        pins: [
          { left: '30%', top: '52%', color: 'black', label: 'Huesca', sub: '· urban service' },
          { left: '24%', top: '40%', color: 'yellow', label: 'Walqa', sub: '· production + HRS' },
          { left: '68%', top: '58%', color: 'black', label: 'Surrounding municipalities', sub: 'interurban · ', right: true }
        ]
      }
    },

    opportunity: {
      title: 'The opportunity',
      leadHtml: 'Aragón’s opportunity is to demonstrate hydrogen where flexibility and range matter most: in <span class="mark">intensive taxi operations</span> connecting Huesca with surrounding municipalities.',
      body: 'The pilot uses a hydrogen-powered taxi to test the technology in one of the most demanding light-mobility applications. Unlike many private vehicles, taxis operate for long hours, cover significant distances and must remain available throughout the day. In Huesca, they also provide important connections between the city and nearby municipalities — allowing hydrogen mobility to be demonstrated under real operating conditions while bringing the technology closer to citizens.',
      startLabel: 'STARTING POSITION',
      startStats: [
        { num: '0 → 1', sub: 'public hydrogen taxis in Spain' },
        { num: 'Up to 650 km', sub: 'hydrogen range, refuelled in 5 minutes' }
      ]
    },

    solutions: {
      title: 'The solutions',
      intro: 'From hydrogen production to everyday passenger transport — three moving parts make up the demonstration. Open each to see the detail.',
      drawers: [
        {
          title: 'The vehicle',
          subtitle: 'A Toyota Mirai adapted for professional taxi service.',
          thumbGrad: 'linear-gradient(135deg,#2c3138,#15171b)', tex: 120,
          photoCaption: 'Toyota Mirai 2nd generation · fuel-cell electric vehicle',
          body: 'The pilot uses a <strong>second-generation Toyota Mirai</strong> fuel-cell electric vehicle adapted for taxi service. Hydrogen stored on board is converted into electricity through a fuel cell, powering the vehicle with no tailpipe emissions other than water vapour. Its combination of long driving range and fast refuelling makes it particularly suitable for intensive daily operation.',
          stats: [
            { n: 'Up to 650 km', l: 'zero-emission driving range' },
            { n: '< 5 min', l: 'refuelling time' }
          ]
        },
        {
          title: 'The route',
          subtitle: 'Real mobility for everyday users.',
          thumbGrad: 'linear-gradient(135deg,#3a4048,#1c2026)', tex: 60,
          photoCaption: 'The hydrogen taxi will operate across Huesca and surrounding municipalities',
          body: 'The hydrogen taxi will operate as a regular transport service, providing both urban and interurban journeys — connecting Huesca with nearby municipalities while serving residents, students and patients travelling to access key services. This combination of short city trips and longer regional journeys creates a demanding operating profile that reflects real mobility needs.',
          stats: [
            { n: 'Urban + interurban', l: 'Huesca &amp; nearby municipalities' },
            { n: '3 months', l: 'planned real-world service <span class="tc">(trip data to confirm)</span>' }
          ]
        },
        {
          title: 'The refuelling',
          subtitle: 'Renewable hydrogen produced and dispensed on site.',
          thumbGrad: 'linear-gradient(135deg,#26424a,#11272d)', tex: 90,
          photoCaption: 'FHA’s hydrogen production and refuelling facilities · Walqa Technology Park',
          body: 'The taxi is refuelled at Fundación Hidrógeno Aragón’s facilities in <strong>Walqa Technology Park</strong>, where renewable hydrogen is produced on site using solar electricity and an alkaline electrolyser. The station can dispense hydrogen at up to 700 bar, allowing the vehicle to be refuelled in less than five minutes, while a second 350-bar station provides additional operational flexibility — connecting production, refuelling and mobility within a single location.',
          stats: [
            { n: '700 bar', l: 'refuelling pressure' },
            { n: 'On-site', l: 'renewable H₂ production' }
          ]
        }
      ]
    },

    system: {
      title: 'How it works as one system',
      intro: 'A complete hydrogen mobility chain, from green production to public service. Hover any node to highlight it, click to open the detail.',
      chain: [
        { id: 'production', kicker: 'SUPPLY', name: 'Renewable hydrogen', sub: 'FHA production', title: 'Renewable hydrogen produced on site at FHA' },
        { id: 'refuelling', kicker: 'INFRASTRUCTURE', name: 'Hydrogen refuelling', sub: '700 bar HRS', title: 'FHA refuelling infrastructure · up to 700 bar' },
        { id: 'vehicle', kicker: 'VEHICLE', name: 'Toyota Mirai 2', sub: 'Fuel-cell taxi', core: true, title: 'Second-generation Toyota Mirai fuel-cell taxi' },
        { id: 'service', kicker: 'SERVICE', name: 'Public taxi service', sub: '15,000 km demonstration', title: 'Regular public taxi service · ~15,000 km' }
      ],
      branches: [
        { id: 'urban', name: 'Urban mobility', sub: 'Huesca', title: 'Daily stop-and-go trips within Huesca' },
        { id: 'regional', name: 'Regional connections', sub: 'Surrounding municipalities', title: 'Interurban services to nearby towns' },
        { id: 'future', name: 'Future deployment', sub: 'Aragón &amp; Spain', title: 'A reference case for wider adoption' },
        { id: 'awareness', name: 'Public awareness', sub: 'Citizens', title: 'Citizens experience hydrogen mobility directly' },
        { id: 'knowledge', name: 'Knowledge exchange', sub: 'Hy2Market · WP5', title: 'Data and lessons shared across the project' }
      ],
      nodeData: {
        production: { title: 'Renewable hydrogen production', tag: 'FHA · solar + alkaline electrolyser', body: 'Renewable hydrogen is produced at FHA’s facilities using solar electricity and an alkaline electrolyser. Producing the fuel on site allows the demonstration to connect renewable energy generation directly with transport applications.' },
        refuelling: { title: 'Hydrogen refuelling', tag: '700 bar HRS · Walqa Technology Park', body: 'The hydrogen is supplied through FHA’s refuelling infrastructure in Walqa Technology Park. The station can dispense hydrogen at up to 700 bar, allowing vehicle refuelling in less than five minutes and supporting regular taxi operations.' },
        vehicle: { title: 'Toyota Mirai 2 — fuel-cell taxi', tag: 'Second-generation fuel-cell electric vehicle', body: 'The demonstration vehicle is a second-generation Toyota Mirai adapted for professional taxi service. Its long driving range and rapid refuelling capability make it suitable for intensive daily operation.' },
        service: { title: 'Public taxi service', tag: '3 months · ~15,000 km demonstration', body: 'The hydrogen-powered taxi will operate as a regular public transport service for three months, covering an estimated 15,000 km. By combining urban and interurban journeys, the pilot will generate operational experience under real conditions while bringing hydrogen mobility directly to citizens.' },
        urban: { title: 'Urban mobility', tag: 'Huesca', body: 'Daily trips within Huesca will demonstrate the suitability of hydrogen vehicles for frequent stop-and-go operation, a common requirement in taxi services.' },
        regional: { title: 'Regional connections', tag: 'Surrounding municipalities', body: 'The taxi will also provide interurban services linking Huesca with nearby towns and villages, making use of the vehicle’s extended driving range and rapid refuelling capability.' },
        future: { title: 'Future deployment', tag: 'Aragón & Spain', body: 'As Aragón’s first public hydrogen taxi, the pilot creates a reference case for future hydrogen mobility initiatives and helps identify the conditions needed for wider adoption of fuel-cell vehicles. The taxi driver is already chosen and the vehicle is being adapted; the next steps are to complete the legalisation process, finalise the refuelling-station adaptations and officially launch the pilot.' },
        awareness: { title: 'Public awareness', tag: 'Citizens', body: 'Operating as a regular taxi service allows citizens to experience hydrogen mobility directly, increasing visibility and familiarity with this zero-emission transport technology — as well as with the hydrogen value chain and its value to their community.' },
        knowledge: { title: 'Knowledge exchange', tag: 'Hy2Market · WP5 mobility regions', body: 'Operational data and lessons learned will be shared with other Hy2Market partners, contributing to a better understanding of hydrogen mobility applications across different regions.' }
      }
    },

    process: {
      title: 'The process',
      // fillPercent = width of the black progress line (reaches the "current" node)
      fillPercent: '80%',
      steps: [
        { date: 'Early 2025', text: 'FHA begins exploring how hydrogen can be integrated into public mobility services in Aragón. The initial concept focuses on a hydrogen bus connecting Huesca and Walqa Technology Park.' },
        { date: 'Early 2026', text: 'The bus concept is reassessed after practical challenges with refuelling, site access for large vehicles and creating a new public route. FHA begins evaluating alternative mobility applications.' },
        { date: 'Mid 2026', text: 'A hydrogen taxi demonstration is selected as the preferred approach. FHA brings together Huesca City Council, local taxi associations and Toyota Spain to develop the pilot.' },
        { date: 'September 2026', text: 'Following an information session and selection process, the pilot taxi driver is chosen. The Toyota Mirai undergoes the final approval required to operate as a licensed taxi.' },
        { date: 'November 2026', text: 'Hydrogen taxi operations are scheduled to begin — launching Aragón’s first public hydrogen taxi demonstration, with three months of real-world service planned until January 2027.' }
      ]
    },

    lessons: {
      title: 'Lessons learned',
      leadHtml: 'Lessons learned will be documented once the demonstration has been completed.',
      body: 'The pilot is currently in its implementation phase. Operational experience, feedback from the taxi driver and users, and insights related to refuelling and day-to-day operation will be assessed after completion of the demonstration period.'
    },

    outcomes: {
      title: 'The outcomes',
      stats: [
        { tone: 'yellow', n: '15,000 km', l: 'planned demonstration distance' },
        { tone: 'grey', n: '3 months', l: 'planned operating period' },
        { tone: 'grey', n: '1 taxi', l: 'first public hydrogen taxi in Aragón & Spain' },
        { tone: 'black', n: 'Nov 2026', l: 'demonstration start' }
      ],
      narrative: 'Results will be published once the demonstration concludes and operational data has been evaluated.',
      pending: [
        { n: 'Pending', l: 'Results to be reported after pilot completion' }
      ]
    },

    knowledge: {
      title: 'Knowledge exchange',
      intro: 'Aragón contributes to Hy2Market’s hydrogen mobility activities by exploring the use of hydrogen-powered taxis in real transport services — expanding the range of mobility applications tested across the project and providing operational experience other regions can draw on.',
      cards: [
        { dir: 'out', arrow: '→', label: 'SHARING TO', region: 'Other mobility regions', country: '', text: 'Aragón’s experience will provide insights into hydrogen applications beyond buses and fleet vehicles, helping partners assess the suitability of hydrogen taxis and other light-duty mobility solutions.' },
        { dir: 'out', arrow: '→', label: 'SHARING TO', region: 'Spanish stakeholders', country: '', text: 'As the first public hydrogen taxi initiative in Aragón, the pilot can help public authorities, infrastructure operators and transport professionals better understand the practical requirements of hydrogen mobility deployment.' },
        { dir: 'in', arrow: '⇄', label: 'POOLED ACROSS WP5', region: 'The mobility network', country: '', text: 'Lessons and operational data generated by the pilot will feed Hy2Market’s wider knowledge-sharing activities, supporting future projects, replication efforts and mobility planning across participating regions.' }
      ]
    },

    quotesEyebrow: 'IN THEIR WORDS',
    quotes: [
      { text: 'Huesca is a city strongly committed to sustainability and mobility. We see this project as a very positive initiative and an opportunity to keep advancing the decarbonisation of transport, with the support and expertise of Fundación Hidrógeno Aragón.', name: 'Iván Rodríguez', role: 'Councillor for Mobility, Huesca City Council' },
      { text: 'I was interested in taking part because I enjoy driving, providing a good service to my customers and discovering new technologies. The vehicle is smooth, comfortable and easy to drive, and I am very excited to begin this pilot and learn what hydrogen mobility can offer.', name: 'Vanesa Pascual', role: 'Selected driver for the hydrogen taxi pilot' },
      { text: 'Aragón and Huesca already offer many of the elements needed to develop a hydrogen mobility ecosystem. Toyota is contributing a second-generation Mirai — a vehicle that combines the comfort and performance of a premium taxi service with the key advantages of hydrogen: long range and rapid refuelling.', name: 'Jaime Pérez', role: 'Hydrogen Specialist & ESG Strategy, Toyota Spain' },
      { text: 'The hydrogen market is still at an early stage. Its growth depends on four pillars: hydrogen producers, refuelling infrastructure, vehicle manufacturers and customers willing to adopt the technology. Continued institutional support and investment will be essential to create demand, build confidence and accelerate deployment.', name: 'Carolina de Castro', role: 'Head of Corporate Affairs & Hydrogen Business Area, Toyota Spain' }
    ],

    next: {
      eyebrow: 'CONTINUE THE STORY',
      allHref: '/',
      featured: {
        href: '/case-studies/medio-tejo/',
        kicker: 'NEXT CASE STUDY · MOBILITY',
        title: 'Médio Tejo: fuel-cell mobility on Portugal’s road network',
        lead: 'Aragón’s sister mobility region. See how Médio Tejo demonstrates fuel-cell vehicles and refuelling — the demonstration experience Hy2Market’s mobility regions share with one another.',
        chips: ['Portugal', 'Mobility', 'Refuelling'],
        caption: 'Médio Tejo · Portugal · fuel-cell mobility'
      },
      others: [
        { href: '/case-studies/upper-austria/', k: 'PRODUCTION', region: 'Upper Austria', country: '· Austria', d: 'An end-to-end green-hydrogen value chain built around a working electrolyser.' },
        { href: '/case-studies/asturias/', k: 'PRODUCTION', region: 'Asturias', country: '· Spain', d: 'Scaling green hydrogen in Spain’s industrial north.' },
        { href: '/case-studies/western-macedonia/', k: 'MOBILITY', region: 'Western Macedonia', country: '· Greece', d: 'A coal region turning to hydrogen for clean transport.' }
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
  root.CASE_STUDIES['aragon'] = data;
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
})(typeof window !== 'undefined' ? window : this);
