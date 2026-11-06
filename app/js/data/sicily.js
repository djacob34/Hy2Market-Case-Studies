/* =========================================================================
   Sicily (Italy) case-study content — Industry / production spotlight.
   Green hydrogen blended into a 58 MW peaker turbine at Duferco's Giammoro
   site. Same content model as upper-austria.js: one object per region.
   Written as of the end of Hy2Market; on-site test results expected in 2027,
   so modelled/design figures carry that caveat and will be replaced by
   measured results. Drafted from Sicily_Case_Study_Content_Collection.docx
   (prepared for Francesco Sergi, CNR-ITAE, 2026-10-13).
   Still open for a later pass: hero/drawer photos, the Spanish knowledge-
   exchange partner, a couple of partner job titles, the design-phase date,
   and the plant's TRL before/after.
   ========================================================================= */
(function (root) {
  var data = {
    slug: 'sicily',
    card: {
      title: 'Sicily, Italy',
      blurb: 'A green-hydrogen plant beside a 58 MW peaker turbine in Giammoro, blending hydrogen made on site into the fuel that covers Italy’s demand peaks.',
      tags: ['Green hydrogen', 'Hydrogen blending', 'Grid balancing']
    },
    breadcrumb: { label: 'Case studies', href: '/', here: 'Sicily' },

    hero: {
      eyebrow: 'INDUSTRY · SICILY',
      titleHtml: 'Sicily blends green hydrogen into the <span class="hl">turbine</span> that balances the grid',
      lead: 'At Duferco’s site in Giammoro, Hy2Market built a green hydrogen plant with a 1 MW electrolyser beside an existing 58 MW peaker turbine. The plant is designed to blend hydrogen made on site into the turbine’s natural gas at up to 15% by volume, cutting the emissions of the power that covers Italy’s demand peaks. Results from testing the blend are expected in 2027.',
      tags: ['Green hydrogen', 'Electrolysis', 'Hydrogen blending', 'Peaker turbine', 'Grid balancing', 'Decarbonisation'],
      mediaCaption: 'Green hydrogen plant beside the peaker turbine · Giammoro, Sicily',
      stats: [
        { num: '1 MW', label: 'alkaline electrolyser supplied by De Nora' },
        { num: 'up to 15%', label: 'green hydrogen blended into the turbine’s natural gas, by volume' },
        { num: '58 MW', label: 'peaker turbine balancing the Italian power grid' }
      ]
    },

    partners: [
      {
        id: 'cnr', name: 'CNR-ITAE',
        role: 'Coordinator · Sicily pilot, modelling and system design',
        body: 'The Institute of Advanced Energy Technologies “Nicola Giordano” of Italy’s National Research Council coordinated the Sicily pilot and led Hy2Market’s work on green hydrogen production. Its team designed the plant with the industrial partners, modelled how it operates — including the effect of a hydrogen blend on the turbine’s emissions — and prepared the test protocol.',
        col: true,
        logoHtml: '<span style="font-weight:800;font-size:18px;color:#1a1a1a;letter-spacing:-0.01em;">CNR</span><span style="font-weight:500;font-size:11px;color:#666;letter-spacing:0.12em;text-transform:uppercase;">ITAE</span>'
      },
      {
        id: 'duferco', name: 'Duferco',
        role: 'Site owner · Giammoro plant and peaker turbine',
        body: 'Duferco owns the Giammoro site and the 58 MW peaker turbine at the centre of the pilot, and hosts the new hydrogen plant beside it. The turbine is called into operation by Terna, the operator of Italy’s electricity grid, to balance supply and demand.',
        logoHtml: '<span style="font-weight:800;font-size:18px;color:#1a1a1a;letter-spacing:-0.01em;">Duferco</span>'
      },
      {
        id: 'denora', name: 'De Nora',
        role: 'Electrolyser supplier',
        body: 'De Nora supplied the pilot’s 1 MW Dragonfly® alkaline electrolyser as a complete containerised system, built and factory-tested at its facility in Milan.',
        logoHtml: '<span style="font-weight:800;font-size:18px;color:#1a1a1a;letter-spacing:-0.01em;">De<span style="color:#0a8a4f;">Nora</span></span>'
      },
      {
        id: 'power', name: 'Power Evolution',
        role: 'Compression and storage',
        body: 'Power Evolution, a Sicilian engineering company, designed and installed the hydrogen compression and storage that connect the electrolyser to the turbine.',
        col: true,
        logoHtml: '<span style="font-weight:800;font-size:16px;color:#1a1a1a;letter-spacing:-0.01em;">Power</span><span style="font-weight:500;font-size:11px;color:#666;letter-spacing:0.1em;text-transform:uppercase;">Evolution</span>'
      },
      {
        id: 'snam', name: 'Snam',
        role: 'Natural gas network',
        body: 'Snam, Italy’s gas transmission system operator, supplies the natural gas into which the hydrogen is blended.',
        logoHtml: '<span style="font-weight:800;font-size:18px;color:#1a1a1a;letter-spacing:-0.01em;">Snam</span>'
      },
      {
        id: 'summit', name: 'Summit Engineering',
        role: 'Value-chain modelling · Northern Netherlands',
        body: 'Summit Engineering, based in Groningen, built an energy-system model of the Sicily pilot — electrolyser, storage and peaker turbine — working alongside CNR-ITAE and DEMCON so that results from different models could be compared.',
        col: true,
        logoHtml: '<span style="font-weight:800;font-size:16px;color:#1a1a1a;letter-spacing:-0.01em;">Summit</span><span style="font-weight:500;font-size:11px;color:#666;letter-spacing:0.1em;text-transform:uppercase;">Engineering</span>'
      },
      {
        id: 'demcon', name: 'DEMCON',
        role: 'Value-chain modelling · Netherlands',
        body: 'DEMCON modelled the hydrogen value chain with CNR-ITAE and Summit Engineering, testing scenarios for renewable energy availability and electricity prices in Italy, Spain and the Netherlands.',
        logoHtml: '<span style="font-weight:800;font-size:18px;color:#1a1a1a;letter-spacing:-0.01em;">DEMCON</span>'
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
      { tone: 'black', label: 'THE CHALLENGE', text: 'Peaker turbines keep the lights on when demand spikes: Terna, the operator of Italy’s electricity grid, calls the Giammoro turbine into operation for one to two hours a day. It burns natural gas. Green hydrogen could lower those emissions, but it costs several times more than hydrogen made from natural gas, and transporting it adds to the bill.' },
      { tone: 'yellow', label: 'THE INNOVATION', text: 'A complete hydrogen chain on one site. A 1 MW alkaline electrolyser runs on renewable electricity bought through a power purchase agreement; the hydrogen is compressed, stored at 200 bar and blended into the turbine’s natural gas at up to 15% by volume. CNR-ITAE coordinated the pilot with Duferco, De Nora, Power Evolution and Snam, with modelling support from Summit Engineering and DEMCON, under the EU’s I3 (Interregional Innovation Investments) Instrument.' },
      { tone: 'black', label: 'THE OUTCOME', text: 'Within Hy2Market the partners designed, built and integrated a complete green hydrogen plant beside a working peaker turbine. Modelling carried out in the project indicates that a 15% hydrogen blend can cut carbon monoxide emissions by nearly 30% and CO₂ emissions by around 9% while keeping turbine operation stable, with nitrogen oxide levels expected to hold steady. Results from on-site testing are expected in 2027.' }
    ],

    video: { caption: 'Francesco Sergi, Lead Researcher, CNR-ITAE — on why the Sicily pilot produces hydrogen next to a grid-balancing turbine, and what the modelling predicts.' },

    region: {
      title: 'The region',
      paragraphs: [
        'Giammoro sits on Sicily’s north-east coast, between <strong>Milazzo and Messina</strong>, on a former steelworks that Duferco is reconverting into an energy and logistics hub. Sicily has some of Italy’s strongest sun and wind, and the island’s south now leads the country in requests to connect new renewable capacity — but as a grid at the edge of the national network, Sicily leans on local plants that can be switched on to keep supply and demand in balance.',
        'Duferco’s gas-fired peaker turbine at Giammoro is one of them: <strong>Terna</strong>, the operator of Italy’s electricity grid, calls it into operation to steady the Sicilian system. The hydrogen plant is the first in the region to blend green hydrogen into a peaker turbine’s fuel — and part of a wider reconversion of the site, alongside solar, battery storage and a new container terminal, that turns the old steelworks towards clean energy.'
      ],
      map: {
        caption: 'Sicily · Giammoro, province of Messina',
        pins: [
          { left: '72%', top: '28%', color: 'yellow', label: 'Giammoro', sub: '· Duferco site' },
          { left: '30%', top: '58%', color: 'black', label: 'Sicily', sub: '· north-east coast' }
        ]
      }
    },

    opportunity: {
      title: 'The opportunity',
      leadHtml: 'The pilot was set up to show that green hydrogen can decarbonise peak-time electricity when it is <span class="mark">produced and used on the same site</span> — and that an existing gas turbine can take a hydrogen blend without losing stable operation.',
      body: 'Green hydrogen currently costs around €7–9 per kilogram, against roughly €1.50–2 for hydrogen made from natural gas. In Giammoro the hydrogen is not a product to sell: it is produced and consumed on the same site, which takes transport out of the equation and improves the economics. The test programme prepared in the project covers the whole chain — electrolyser, integrated plant and turbine — measuring CO₂ and nitrogen oxide emissions and any change in turbine efficiency on the blend.',
      startLabel: 'STARTING POSITION',
      startStats: [
        { num: '100% natural gas', sub: 'the turbine’s fuel before the pilot' },
        { num: '1–2 hours a day', sub: 'typical running time when the turbine is called on to cover demand peaks' }
      ]
    },

    solutions: {
      title: 'The solutions',
      intro: 'Three pieces of hardware and one model turn renewable electricity into lower-carbon peak power. Open each to see the detail.',
      drawers: [
        {
          title: 'The electrolyser',
          subtitle: '1 MW alkaline unit, containerised — around 20 kg of hydrogen an hour.',
          thumbGrad: 'linear-gradient(135deg,#2c3138,#15171b)', tex: 120,
          photoCaption: 'De Nora’s 1 MW Dragonfly® alkaline electrolyser',
          body: 'De Nora built the electrolyser as a complete containerised system and factory-tested it in Milan before delivering it to Giammoro. It runs on demineralised water from an on-site well and on renewable electricity bought through a power purchase agreement, which guarantees the hydrogen’s green origin under EU rules (RED II and the EU taxonomy).',
          stats: [
            { n: '1 MW', l: 'electrolyser capacity' },
            { n: '~20 kg/h', l: 'hydrogen output' }
          ]
        },
        {
          title: 'Compression and storage',
          subtitle: '200 bar · about an hour of full-load running on the blend.',
          thumbGrad: 'linear-gradient(135deg,#3a4048,#1c2026)', tex: 60,
          photoCaption: 'Hydrogen storage cylinders and their protective bunker at Giammoro',
          body: 'Power Evolution designed and installed the hydrogen compressor and storage. The hydrogen is compressed to 200 bar and kept in cylinders inside a protective bunker, as Italian regulations require. The storage is sized to run the turbine for about an hour at full load on a 15% blend — the length of a typical demand peak — and the electrolyser refills it in around ten hours.',
          stats: [
            { n: '200 bar', l: 'storage pressure' },
            { n: '~200 kg', l: 'hydrogen stored — about one hour of full-load blending' }
          ]
        },
        {
          title: 'The peaker turbine',
          subtitle: '58 MW · switched on by Terna to cover demand peaks.',
          thumbGrad: 'linear-gradient(135deg,#4a4a4a,#272727)', tex: 100,
          photoCaption: 'Duferco’s 58 MW peaker turbine at Giammoro',
          body: 'Duferco’s gas turbine is a peaker: Terna, the operator of Italy’s electricity grid, switches it on when demand peaks, typically for one to two hours a day. Running on a blend of up to 15% hydrogen called for some retrofit of the burner and injectors and a re-tuned control system, while keeping the turbine able to run normally on natural gas alone. Its water-and-steam cooling of the combustion chamber is expected to keep nitrogen oxide emissions in check.',
          stats: [
            { n: '58 MW', l: 'turbine capacity' },
            { n: 'up to 15%', l: 'hydrogen in the fuel blend, by volume' }
          ]
        },
        {
          title: 'The model',
          subtitle: 'The whole chain modelled before it was built — in three electricity markets.',
          thumbGrad: 'linear-gradient(135deg,#26424a,#11272d)', tex: 90,
          photoCaption: 'Model output / system diagram',
          body: 'The plant was modelled before it was built. CNR-ITAE modelled how a hydrogen blend changes the turbine’s emissions, using computational fluid dynamics to check for nitrogen oxides. With Summit Engineering and DEMCON, the team also modelled the entire value chain across scenarios for renewable energy availability and electricity prices in Italy, Spain and the Netherlands. The same approach can be adapted to other regions, markets and industrial hydrogen uses to test techno-economic feasibility.',
          stats: [
            { n: '~30%', l: 'modelled cut in carbon monoxide emissions at a 15% blend' },
            { n: '~9%', l: 'modelled cut in CO₂ emissions at a 15% blend' }
          ]
        }
      ]
    },

    system: {
      title: 'How it works as one system',
      intro: 'How green hydrogen made on site joins the gas supply of a 58 MW peaker turbine. Hover any node to highlight it, click to open the detail.',
      chain: [
        { id: 'electrolyser', kicker: 'PRODUCTION', name: 'Electrolyser', sub: '1 MW · 20 kg/h', title: 'Green hydrogen from renewable electricity and water' },
        { id: 'h2comp', kicker: 'COMPRESSION', name: 'Hydrogen compressor', sub: '200 bar', title: 'Raises the hydrogen to storage pressure' },
        { id: 'storage', kicker: 'STORAGE', name: 'Hydrogen storage', sub: '~1 hour at full load', title: 'Banks hydrogen between demand peaks' },
        { id: 'blending', kicker: 'BLENDING', name: 'Blending point', sub: 'up to 15% by volume', core: true, title: 'Hydrogen joins the natural gas' },
        { id: 'gascomp', kicker: 'COMPRESSION', name: 'Fuel compressor', sub: '58 bar', title: 'Brings the blended fuel to turbine inlet pressure' },
        { id: 'turbine', kicker: 'POWER', name: 'Peaker turbine', sub: '58 MW', title: 'Burns the blend and sends electricity to the grid' }
      ],
      branches: [
        { id: 'renewable', name: 'Renewable electricity · water', sub: 'PPA + on-site well', title: 'Inputs to the electrolyser' },
        { id: 'gas', name: 'Snam gas network', sub: '14–24 bar', title: 'Natural gas supply' },
        { id: 'stack', name: 'Stack', sub: 'emissions measured', title: 'Exhaust emissions measured in testing' }
      ],
      nodeData: {
        electrolyser: { title: 'Electrolyser', tag: '1 MW · ~20 kg/h', body: 'Makes green hydrogen from renewable electricity and demineralised water.' },
        h2comp: { title: 'Hydrogen compressor', tag: '200 bar', body: 'Raises the hydrogen to storage pressure.' },
        storage: { title: 'Hydrogen storage', tag: '~1 hour at full load', body: 'Banks hydrogen between demand peaks, so the electrolyser can run steadily while the turbine runs briefly.' },
        blending: { title: 'Blending point', tag: 'up to 15% by volume', body: 'Hydrogen joins the natural gas after the metering cabinet — up to about 200 kg an hour at full load.' },
        gascomp: { title: 'Fuel compressor', tag: '58 bar', body: 'Brings the blended fuel up to the turbine’s inlet pressure.' },
        turbine: { title: 'Peaker turbine', tag: '58 MW', body: 'Burns the blend and sends electricity to the grid when Terna calls it into operation.' },
        renewable: { title: 'Renewable electricity & water', tag: 'PPA + on-site well', body: 'A power purchase agreement supplies renewable electricity; an on-site well supplies the water.' },
        gas: { title: 'Snam gas network', tag: '14–24 bar', body: 'Natural gas arrives from Snam’s network through a fiscal metering cabinet and remains at least 85% of the fuel.' },
        stack: { title: 'Stack', tag: 'emissions measured', body: 'Testing measures CO₂, carbon monoxide and nitrogen oxides in the exhaust.' }
      }
    },

    process: {
      title: 'The process',
      fillPercent: '85.7%',
      steps: [
        { date: 'Design & modelling', text: 'The plant is designed and the full hydrogen chain modelled — including the effect of a hydrogen blend on the turbine’s emissions — before any construction begins.' },
        { date: 'May–June 2026', text: 'The Sicily partners sign their collaboration agreement and submit the permits to the Sicilian Region, the municipality and other local authorities.' },
        { date: 'End of June 2026', text: 'Construction starts in Giammoro: foundations, underground piping, platforms for the equipment and the pipe rack to the turbine.' },
        { date: 'September 2026', text: 'De Nora completes and factory-tests the electrolyser in Milan and delivers it to Giammoro.' },
        { date: 'Autumn 2026', text: 'Construction is completed while the regional authority reviews the plant’s integrated environmental authorisation.' },
        { date: 'January 2027', text: 'Hy2Market closes with the plant built. Commissioning and testing follow once the environmental authorisation is in place.' },
        { date: '2027 · You are here', current: true, text: 'Test results expected: hydrogen production first, then the turbine on a hydrogen blend.' }
      ]
    },

    lessons: {
      title: 'Lessons learned',
      leadHtml: 'Before the plant has even run, the lessons are about getting there: <span class="mark">model before you build, and start permitting early.</span>',
      bullets: [
        'Permitting sets the pace — Italy’s integrated environmental authorisation became the critical path: the plant could be built without it but not switched on, and the review ran through rounds of technical questions and meetings with the authorities.',
        'Integration reaches every system — bringing hydrogen into an existing industrial site meant coordinating fire protection, fire and gas detection, shutdown logic and medium-voltage electrical infrastructure, alongside the interfaces between production, storage and the turbine.',
        '“Hydrogen-ready” is a starting point — even a turbine rated hydrogen-ready needed some retrofit and a re-tuned control system to take a 15% blend.',
        'Model before investing — modelling gave an early answer on emissions, pointing to no increase in nitrogen oxides, and tested the system under different electricity prices and renewable supply before the plant was built.',
        'Make it where you use it — producing hydrogen on the site that consumes it avoids transport and gives green hydrogen a more realistic business case than buying it in.',
        'A step up in scale — for the Sicilian supply chain, the pilot meant moving from laboratory-scale systems to designing, installing and operating an industrial-scale hydrogen plant.'
      ]
    },

    outcomes: {
      title: 'The outcomes',
      stats: [
        { tone: 'yellow', n: '~30%', l: 'modelled cut in carbon monoxide emissions at a 15% hydrogen blend' },
        { tone: 'grey', n: '~9%', l: 'modelled cut in CO₂ emissions at a 15% hydrogen blend' },
        { tone: 'grey', n: 'Stable', l: 'turbine operation maintained in the model, with nitrogen oxides expected to hold steady' },
        { tone: 'black', n: '~20 kg/h', l: 'green hydrogen produced on site (design value)' }
      ],
      narrative: 'These are modelled, not measured, figures — on-site testing reports in 2027 and will replace them. The Sicily pilot’s result within Hy2Market is the plant itself: a full hydrogen chain designed, built and integrated next to a working power turbine. The modelling points to meaningful emission cuts at a 15% blend without destabilising the turbine, and testing will show how closely the plant matches the model.',
      pending: [
        { n: 'TRL', l: 'Technology readiness of the integrated plant — confirmed after testing' }
      ]
    },

    knowledge: {
      title: 'Knowledge exchange',
      intro: 'Sicily’s pilot was shaped with partners in other Hy2Market regions. Its hydrogen value chain was modelled together with engineering partners in the Netherlands, and the approach is built to travel: change the electricity market, the renewable resource and the industrial use, and it can test the feasibility of a hydrogen project elsewhere in Europe.',
      cards: [
        { dir: 'in', arrow: '⇄', label: 'WORKING WITH', region: 'Northern Netherlands', country: '· Netherlands', text: 'Summit Engineering in Groningen modelled the Sicily plant alongside CNR-ITAE and DEMCON, with weekly working sessions to compare results. Running more than one model on the same plant let the partners check one another’s findings before the investment was made.' },
        { dir: 'in', arrow: '⇄', label: 'POOLED ACROSS HY2MARKET', region: 'Decision-support tool', country: '', text: 'CNR-ITAE also developed a decision-support tool in Hy2Market to help industry choose hydrogen production technologies, drawing on information gathered from the project’s industrial cases — Sicily among them.' }
      ]
    },

    quotesEyebrow: 'IN THEIR WORDS',
    quotes: [
      { text: 'For Sicily, this project is more than a mere hydrogen plant development. It is a blueprint showing how renewable electricity, hydrogen production, storage and power generation work together to support both regional development and European decarbonisation goals.', name: 'Francesco Sergi', role: 'Lead Researcher · CNR-ITAE' },
      { text: 'De Nora supplied its 1 MW Dragonfly® alkaline electrolyzer, the core technology enabling renewable hydrogen production within the project. Beyond equipment delivery, it was an excellent opportunity to collaborate closely with partners across the hydrogen value chain — integrating hydrogen generation with downstream compression, storage and utilization.', name: 'Luca Vercellotti', role: 'De Nora' },
      { text: 'Hy2Market has given Duferco first-hand experience of the complexity of integrating hydrogen into an existing industrial energy site. This has provided valuable practical experience in managing the technical and regulatory challenges of introducing hydrogen into existing industrial assets.', name: 'Davide Baracchini', role: 'Duferco' },
      { text: 'The design and installation of a 1 MW hydrogen plant represented a highly complex engineering challenge for Power Evolution, requiring the integration of multiple interconnected subsystems — production, compression, storage, distribution and control. This experience enabled Power Evolution to progress from laboratory-scale systems to the design, deployment and operation of industrial-scale hydrogen facilities.', name: 'Power Evolution', role: '' }
    ],

    next: {
      eyebrow: 'CONTINUE THE STORY',
      allHref: '/',
      featured: {
        href: '/case-studies/upper-austria/',
        kicker: 'NEXT CASE STUDY · PRODUCTION',
        title: 'Upper Austria: an end-to-end green-hydrogen value chain',
        lead: 'Sicily’s sister production region. See how Upper Austria builds a complete green-hydrogen value chain around a working industrial electrolyser — the production experience Hy2Market’s industrial regions share with one another.',
        chips: ['Austria', 'Production', 'Electrolysis'],
        caption: 'Upper Austria · Austria · green-hydrogen production'
      },
      others: [
        { href: '/case-studies/medio-tejo/', k: 'MOBILITY', region: 'Médio Tejo', country: '· Portugal', d: 'A hydrogen bus in nine months of everyday public service across 11 municipalities.' },
        { href: '/case-studies/asturias/', k: 'PRODUCTION', region: 'Asturias', country: '· Spain', d: 'Scaling green hydrogen in Spain’s industrial north.' },
        { href: '/case-studies/western-macedonia/', k: 'HY2MARKET', region: 'Western Macedonia', country: '· Greece', d: 'A coal region turning to hydrogen for its just transition.' }
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
  root.CASE_STUDIES['sicily'] = data;
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
})(typeof window !== 'undefined' ? window : this);
