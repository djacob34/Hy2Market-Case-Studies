/* Hy2Market case study data — Production spotlight: Asturias H2 Valley (Aboño), Spain.
   EDP's 150 MW green-hydrogen hub next to the Aboño power plant, sized around industrial
   offtake and beside the Aboño Unit 2 boiler, converted from coal to natural gas with hydrogen-capable burners.
   Registered as window.CASE_STUDIES['asturias'] — view at case-study.html?region=asturias
   Mirrors the schema used by js/data/upper-austria.js. Every section is populated. */
(function (root) {
  var data = {
  slug: `asturias`,
  card: { title: `Asturias, Spain` },
  breadcrumb: { label: `Case studies`, href: `/`, here: `Asturias` },

  hero: {
    eyebrow: `PRODUCTION · ASTURIAS`,
    titleHtml: `Asturias: A Hydrogen Hub Built Around the <span class="hl">Industry That Will Use It</span>`,
    lead: `Much of the hydrogen conversation stops at the electrolyser. Asturias goes further — pairing a planned 150 MW production hub with the industry that will consume its hydrogen, on the site of the Aboño power plant: a former coal plant whose Unit 2 now runs on natural gas, through burners built to take hydrogen too. It is a full-stack answer, built on the bones of the region's fossil-fuel past.`,
    tags: [`Green hydrogen`, `Industrial decarbonisation`, `Electrolysis`, `Power-plant retrofit`, `Just transition`, `Production`],
    mediaCaption: `Aboño thermal power plant, Unit 2 chimney · Gijón · Asturias`,
    slideshow: [
      { src: `/assets/media/asturias/hero.jpg`, caption: `Aboño thermal power plant · Gijón · Asturias · Photo: Borvan53, CC BY-SA 4.0, via Wikimedia Commons` }
    ],
    stats: [
      { num: `150 MW`, label: `planned first-phase electrolyser capacity` },
      { num: `~20,000 t`, label: `green hydrogen a year, by design` },
      { num: `~130 kt`, label: `CO₂ a year the hub is designed to avoid` }
    ]
  },

  partners: [
    { id: `edp`, name: `EDP`, logo: `edp.png`, role: `Project lead · hub developer & Aboño owner`, body: `Consortium lead for Asturias. EDP is developing the Asturias H2 Valley — a green-hydrogen hub on the Aboño site. With Corporación Masaveu, through their 50/50 joint venture Aboño Generaciones Eléctricas, it has also converted the plant's Unit 2 from coal to natural gas, using burners designed to burn hydrogen as well.`, logoHtml: `<span class="logo-word">EDP</span>` },
    { id: `alsa`, name: `ALSA`, logo: `alsa.png`, role: `Mobility partner`, body: `Consortium partner and regional passenger-transport operator — a hydrogen-bus mobility pathway (its H2-bus test starts in Madrid and transfers to Asturias once fuelling is available).`, logoHtml: `<span class="logo-word">ALSA</span>` },
    { id: `hidritec`, name: `HIDRITEC`, logo: `hidritec.png`, role: `Water treatment · electrolysis`, body: `Consortium partner developing and manufacturing a demineralised-water treatment container adapted for a large (≈100 MW-scale) electrolysis plant like the one foreseen at the EDP site.`, logoHtml: `<span class="logo-word">HIDRITEC</span>` },
    { id: `faen`, name: `FAEN`, logo: `faen.png`, role: `Asturian Energy Foundation (associated)`, body: `Associated partner — the Fundación Asturiana de la Energía, supporting Asturias's energy transition and the local hydrogen ecosystem.`, logoHtml: `<span class="logo-word">FAEN</span>` }
  ],

  toc: [
    { id: `toc-overview`, label: `Overview` },
    { id: `toc-region`, label: `The region` },
    { id: `toc-opportunity`, label: `The opportunity` },
    { id: `toc-solutions`, label: `The solutions` },
    { id: `toc-system`, label: `How it works as one system` },
    { id: `toc-process`, label: `The process` },
    { id: `toc-lessons`, label: `Lessons learned` },
    { id: `toc-outcomes`, label: `The outcomes` },
    { id: `toc-knowledge`, label: `Knowledge exchange` }
  ],

  downloadHref: `#`,

  overview: [
    { tone: `yellow`, label: `THE CHALLENGE`, text: `Asturias is a coal-and-steel heartland that has to decarbonise without hollowing out the industry that built it. A standalone electrolyser risks producing hydrogen no one has committed to buy — and a coal plant like Aboño is the kind of asset a just transition usually retires rather than repurposes.` },
    { tone: `black`, label: `THE INNOVATION`, text: `EDP is building the Asturias H2 Valley: a 150 MW green-hydrogen production hub next to the Aboño power plant near Gijón, sized from the start around real industrial offtake rather than production alone — and sitting beside a converted power-plant boiler that can take hydrogen in its fuel mix.` },
    { tone: `black`, label: `THE OUTCOME`, text: `A full-stack production blueprint for coal regions in transition: an electrolyser, an anchor industrial consumer, and a feasibility path to scale from 150 MW toward 500 MW — with the permits already in hand and the build now going to tender.` }
  ],

  video: {
    caption: `Vanessa Hernández, EDP — on building the Asturias H2 Valley around the industry that will use its hydrogen.`
  },

  region: {
    title: `The region`,
    paragraphs: [
      `Asturias sits on Spain's northern coast — a compact, mountainous region that was for a century the country's coal-and-steel engine. <strong>Gijón</strong> and its surroundings still hold one of Spain's densest concentrations of heavy industry: steelmaking, refining, glass, zinc and chemicals, all clustered within a few kilometres of the same port and grid. That industry never left; what changed is that its fuel has to.`,
      `The <strong>Aboño thermal power plant</strong>, on the coast just outside Gijón, is emblematic of that shift. Built to burn coal, it is exactly the kind of asset a just transition has to reckon with — and exactly the kind of site EDP chose to build its hydrogen future on, rather than around. In July 2025 its Unit 2 came back online on natural gas, after all 30 coal burners were replaced with burners designed for natural gas and hydrogen. The region's advantage is that the customers, the infrastructure and the institutional will are already in the same place.`
    ],
    map: {
      image: `/assets/maps/asturias.png`,
      caption: `Asturias · hydrogen production hub`,
      pins: [
        { left: `40%`, top: `40%`, color: `yellow`, label: `Aboño`, sub: `· hub + retrofit` },
        { left: `50%`, top: `50%`, color: `black`, label: `Gijón`, sub: `· industrial cluster` },
        { left: `72%`, top: `56%`, color: `black`, label: `Offtakers`, sub: `steel · chemicals · glass`, right: true }
      ]
    }
  },

  opportunity: {
    title: `The opportunity`,
    leadHtml: `Asturias's advantage is that it is <span class="mark">building production and demand as a matched pair</span> — not standing up an electrolyser and hoping offtakers appear.`,
    body: `EDP sized the hub around industry that is already on the doorstep and already needs to decarbonise. As project director Rafael Cabañeros puts it, the region offered three things at once: a strong industry with real needs, mature energy infrastructure and security of supply, and a regional ecosystem — social, administrative and institutional — willing to support the project. Few places in Europe combine all three around a single site.`,
    startLabel: `STARTING POSITION`,
    startStats: [
      { num: `~130 kt/yr`, sub: `CO₂ the region's hydrogen hub is designed to avoid` },
      { num: `Coal → gas + H₂`, sub: `Aboño Unit 2 converted in 2025 with hydrogen-capable burners — repurposed, not retired` }
    ]
  },

  solutions: {
    title: `The solutions`,
    intro: `Three moving parts make the hub work as one system. Open each to see the detail.`,
    drawers: [
      {
        title: `The production hub`,
        subtitle: `A 150 MW electrolyser sized around real demand.`,
        thumbGrad: `linear-gradient(135deg,#2c3138,#15171b)`,
        tex: 120,
        photo: `/assets/media/asturias/electrolyser.jpg`,
        photoCaption: `Electrolyser modules like this will be scaled up to 150 MW in the Asturias H2 Valley (illustrative) · Photo: Bubble60, CC BY-SA 4.0, via Wikimedia Commons`,
        body: `The Asturias H2 Valley's first phase is a <strong>150 MW</strong> green-hydrogen plant beside the Aboño site, backed by EDP Renewables' generation and part-funded through the EU Innovation Fund and Spain's IPCEI Hy2Use programme. It is designed to produce roughly 20,000 tonnes of renewable hydrogen a year and to cut greenhouse-gas emissions by 99.98% versus the fossil fuels it displaces.`,
        stats: [
          { n: `150 MW`, l: `first-phase capacity` },
          { n: `~20,000 t/yr`, l: `green hydrogen` }
        ],
        cta: { label: `Inside the Asturias H2 Valley`, href: `#` }
      },
      {
        title: `The offtake`,
        subtitle: `Hydrogen built for industry, not just for show.`,
        thumbGrad: `linear-gradient(135deg,#3a4048,#1c2026)`,
        tex: 60,
        photo: `/assets/media/asturias/cluster.jpg`,
        photoCaption: `Industrial cluster · methanol & ammonia (illustrative) · Photo: Red Shuheart on Unsplash`,
        body: `The hub's main purpose is to supply nearby industrial companies that will use the hydrogen directly, or convert it into carriers such as <strong>methanol and ammonia</strong>. EDP is also exploring co-transport of hydrogen, oxygen, ammonia and heat to those customers — treating the whole industrial cluster, not a single plant, as the offtaker.`,
        stats: [
          { n: `Methanol · Ammonia`, l: `target carriers` },
          { n: `H₂ · O₂ · NH₃ · heat`, l: `co-transport under study` }
        ],
        cta: { label: `Who takes the hydrogen`, href: `#` }
      },
      {
        title: `The retrofit`,
        subtitle: `A converted boiler ready to burn hydrogen.`,
        thumbGrad: `linear-gradient(135deg,#26424a,#11272d)`,
        tex: 90,
        photo: `/assets/media/asturias/abono-still.jpg`,
        photoCaption: `Aboño Unit 2 · converted to natural gas and hydrogen · Photo: Hy2Market / EDP`,
        body: `In 2025 Aboño's Unit 2 was converted from coal: all 30 coal burners were replaced with burners designed to run on natural gas and hydrogen, and the unit came back online in July 2025. Once the hub is producing, the plan is to replace around <strong>10%</strong> of the natural gas in the boiler with hydrogen — turning a coal-transition asset into a first, on-site consumer of the hub's own hydrogen.`,
        stats: [
          { n: `~10%`, l: `planned hydrogen share of the boiler fuel` },
          { n: `Unit 2`, l: `repurposed, not retired` }
        ],
        cta: { label: `How the boiler retrofit works`, href: `#` }
      }
    ]
  },

  system: {
    title: `How it works as one system`,
    intro: `From renewable power to industry and a retrofitted boiler. Hover any node to highlight it, click to open the detail.`,
    chain: [
      { id: `power`, kicker: `INPUT`, name: `Renewable electricity`, sub: `EDP Renewables`, title: `Renewable power from EDP Renewables` },
      { id: `electrolyser`, kicker: `CORE`, name: `150 MW electrolyser`, sub: `Asturias H2 Valley`, core: true, title: `150 MW electrolyser — Asturias H2 Valley` },
      { id: `hydrogen`, kicker: `STEP`, name: `Green hydrogen`, sub: `~20,000 t/yr`, title: `~20,000 t/yr green hydrogen` },
      { id: `offtake`, kicker: `STEP`, name: `Industrial offtake`, sub: `+ Aboño boiler blend`, title: `Industrial offtake plus Aboño boiler blend` }
    ],
    branches: [
      { id: `abono`, name: `Aboño Unit 2`, sub: `~10% H₂ planned`, title: `Aboño Unit 2 boiler — around 10% hydrogen planned` },
      { id: `carriers`, name: `Methanol / ammonia`, sub: `industrial carriers`, title: `Methanol and ammonia carriers` },
      { id: `cotransport`, name: `Co-transport`, sub: `H₂ · O₂ · NH₃ · heat`, title: `Co-transport of hydrogen, oxygen, ammonia and heat` },
      { id: `scaleup`, name: `Scale-up`, sub: `toward 500 MW`, title: `Feasibility scale-up toward 500 MW` },
      { id: `exchange`, name: `Knowledge exchange`, sub: `Upper Austria`, title: `Knowledge exchange with Upper Austria` }
    ],
    nodeData: {
      power: { title: `Renewable electricity`, tag: `EDP Renewables`, body: `Renewable generation from EDP Renewables feeds the electrolyser, making the hydrogen genuinely green.` },
      electrolyser: { title: `150 MW electrolyser`, tag: `Asturias H2 Valley · Aboño`, body: `The first-phase 150 MW green-hydrogen plant beside the Aboño site, part-funded by the EU Innovation Fund, designed to produce ~20,000 t/yr and cut emissions by 99.98% versus displaced fossil fuels.` },
      hydrogen: { title: `Green hydrogen`, tag: `~20,000 t/yr`, body: `Roughly 20,000 tonnes of renewable hydrogen per year — the hub's output, sized around real industrial demand rather than production alone.` },
      offtake: { title: `Industrial offtake`, tag: `Cluster + Aboño boiler`, body: `Hydrogen goes to nearby industrial companies — used directly or converted into methanol and ammonia — and to the Aboño Unit 2 boiler as a first on-site consumer.` },
      abono: { title: `Aboño Unit 2 boiler`, tag: `~10% H₂ planned in fuel mix`, body: `Aboño's Unit 2 was converted from coal in 2025, with burners designed to run on natural gas and hydrogen. The plan is to replace around 10% of the natural gas in the boiler with hydrogen from the hub — a coal-transition asset becoming a hydrogen consumer.` },
      carriers: { title: `Methanol & ammonia`, tag: `Industrial carriers`, body: `Industrial offtakers can convert the hydrogen into carriers such as methanol and ammonia — higher-value, easier-to-move forms for the cluster.` },
      cotransport: { title: `Co-transport`, tag: `H₂ · O₂ · NH₃ · heat`, body: `EDP is exploring co-transport of hydrogen, oxygen, ammonia and heat to customers — treating the whole industrial cluster, not a single plant, as the offtaker.` },
      scaleup: { title: `Scale-up toward 500 MW`, tag: `Feasibility study`, body: `A feasibility study is already looking past the first 150 MW toward 500 MW, if market conditions allow.` },
      exchange: { title: `Knowledge exchange`, tag: `With Upper Austria`, body: `Asturias is paired with Upper Austria — the other end of the Hy2Market production axis — sharing offtake-integration and retrofit know-how and drawing on electrolyser-deployment experience in return.` }
    }
  },

  process: {
    title: `The process`,
    fillPercent: `83.4%`,
    steps: [
      { date: `20th century`, badge: `ERA`, text: `Aboño and Asturias built around coal, steel and heavy industry.` },
      { date: `Jul 2023`, text: `EDP's Asturias H2 Valley is selected for the EU Innovation Fund (grant of ~€18.07M) — a separate EU stream from Hy2Market itself, which is funded by the EU I3 (Interregional Innovation Investments) instrument.` },
      { date: `Permits`, text: `Main permits secured for the hydrogen hub: environmental, grid-access and urban-planning permits all granted.` },
      { date: `Apr 2025`, text: `Spain confirms €78M of IPCEI Hy2Use aid for the Asturias H2 Valley.` },
      { date: `Jul 2025`, text: `Aboño Unit 2 comes back online on natural gas, with all 30 coal burners replaced by burners designed for natural gas and hydrogen.` },
      { date: `2026 · You are here`, current: true, text: `EPC contract for the first 150 MW phase out to tender, with a feasibility study underway to scale toward 500 MW.` }
    ]
  },

  lessons: {
    title: `Lessons learned`,
    leadHtml: `The central lesson from Asturias is about <span class="mark">anchoring production in demand.</span>`,
    body: `A hydrogen hub is only as bankable as the customers standing next to it — so EDP sized the Asturias H2 Valley around an existing industrial cluster and lined up a first on-site consumer in the converted Aboño boiler, rather than building capacity and waiting for a market to arrive. The second lesson is that the fossil past can be an asset, not just a liability: the permits, the grid connection, the skilled workforce and the political mandate for a just transition were already concentrated at Aboño. Reusing that foundation — converting a boiler instead of only decommissioning it — is what let a 150 MW project move from idea to tender with its consents already in hand.`
  },

  outcomes: {
    title: `The outcomes`,
    stats: [
      { tone: `yellow`, n: `150 MW`, l: `planned first-phase electrolyser capacity` },
      { tone: `grey`, n: `~130 kt/yr`, l: `CO₂ / GHG the hub is designed to avoid` },
      { tone: `grey`, n: `99.98%`, l: `design GHG reduction vs. displaced fossil fuels` },
      { tone: `black`, n: `500 MW`, l: `scale-up under feasibility study` }
    ],
    narrative: `Asturias offers the consortium a full-stack production answer — electrolyser, industrial offtake and a retrofitted power plant, permitted and heading to construction on the site of a former coal asset. With the environmental, access and urban permits granted and the EPC contract now at tender, the question shifts from "will it be allowed?" to "how fast can it scale?" — and a feasibility study is already looking past the first 150 MW toward 500.`,
    pending: [
      { n: `—`, l: `Industrial offtakers with signed supply agreements <em>(pending confirmation)</em>` },
      { n: `— t/yr`, l: `Methanol / ammonia carrier volumes <em>(pending)</em>` },
      { n: `— TRL`, l: `TRL change for production + retrofit technology <em>(pending)</em>` },
      { n: `20XX`, l: `First-phase operational start date <em>(pending confirmation)</em>` }
    ]
  },

  knowledge: {
    title: `Knowledge exchange`,
    intro: `As a full-stack production region — electrolyser plus industrial offtaker — Asturias is paired with Upper Austria, the other end of the Hy2Market production axis. Knowledge flows in both directions across the network.`,
    cards: [
      { dir: `out`, arrow: `→`, label: `SHARING TO`, region: `Upper Austria`, country: `· Austria`, text: `Industrial-offtake integration and power-plant retrofit know-how — how to size a hub around an existing industrial cluster and turn a coal-era boiler into a hydrogen consumer.` },
      { dir: `in`, arrow: `←`, label: `LEARNING FROM`, region: `Upper Austria`, country: `· Austria`, text: `Electrolyser deployment and renewable-production experience, in exchange for Asturias's offtake and retrofit expertise.` }
    ]
  },

  quotesEyebrow: `IN THEIR WORDS`,
  quotes: [
    { text: `EDP is building a hydrogen hub called the Asturias Hydrogen Valley, of about 150 megawatts. Two years ago we were granted the main permits — the environmental permit, the access permit and the urban permit — and now we are discussing the EPC contract, the tendering.`, name: `Vanessa Hernández`, role: `EDP` },
    { text: `We aim to produce about 20 kilotons of renewable hydrogen per year, and to avoid about 130 kilotons of CO₂ per year. At the Aboño power plant our idea is to replace about 10% of the natural gas in the boiler with hydrogen — but our main focus is supplying industry, to produce carriers such as methanol and ammonia.`, name: `Vanessa Hernández`, role: `EDP` },
    { text: `EDP chose Asturias for three reasons: a strong industry with real needs, the maturity and security of its energy infrastructure, and the regional ecosystem — social and administrative — that supports these projects.`, name: `Rafael Cabañeros`, role: `EDP Spain` }
  ],

  next: {
    eyebrow: `CONTINUE THE STORY`,
    allHref: `/`,
    featured: {
      href: `/case-study.html?region=upper-austria`,
      kicker: `CASE STUDY · PRODUCTION`,
      title: `Upper Austria: adding value at the source at voestalpine Linz`,
      lead: `The other end of the production axis — where Hy2Market partners piloted methanation and new hydrogen use cases alongside voestalpine's H2FUTURE electrolyser in Linz. The region Asturias exchanges know-how with.`,
      chips: [`Austria`, `Electrolysis`, `Steel`],
      caption: `voestalpine steel plant · Linz · H2FUTURE electrolyser`
    },
    others: [
      { href: `/case-study.html?region=medio-tejo`, k: `MOBILITY`, region: `Médio Tejo`, country: `Portugal`, d: `A hydrogen bus in everyday public service.` },
      { href: `/case-study.html?region=netherlands`, k: `TRANSPORT`, region: `Netherlands`, country: `· NL`, d: `Flexible composite pipe — under a canal and a railway.` }
    ]
  },

  footer: {
    cofunded: `Co-funded by<br>the European Union`,
    cols: [
      { h: `Visiting address:`, html: `Nijenborgh 6<br>9747 AG Groningen<br>The Netherlands` },
      { h: `Postal address:`, html: `P.O. Box 70017<br>9704 AA Groningen<br>The Netherlands` }
    ],
    contact: { h: `Contact:`, phone: `+31 88 11 66 800`, email: `info@hy2market.eu`, links: [{ label: `Privacy statement`, href: `#` }] }
  }
  };

  root.CASE_STUDIES = root.CASE_STUDIES || {};
  root.CASE_STUDIES['asturias'] = data;
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
})(typeof window !== 'undefined' ? window : this);
