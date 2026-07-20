/* Hy2Market case study data — Transport spotlight: SoluForce flexible composite pipe in the Netherlands
   Two deployments woven together: the Deventer distribution connector (with Firan) and the Delfzijl
   H2-hub pipeline (HyEnergy TransStore / Green Planet) — a first-of-its-kind line pulled beneath a
   canal AND a ProRail railway.
   Registered as window.CASE_STUDIES['netherlands'] — view at case-study.html?region=netherlands
   Mirrors the exact schema used by js/data/upper-austria.js. Every section is populated.
   Figures wrapped in <span class="tc">…</span> are not yet partner-verified. */
(function (root) {
  var data = {
  slug: `netherlands`,
  breadcrumb: { label: `Case studies`, href: `./index.html`, here: `Netherlands` },

  hero: {
    eyebrow: `TRANSPORT · NETHERLANDS`,
    titleHtml: `Off the Spool, Under the Rails: Flexible <span class="hl">Hydrogen</span> Pipelines for the Netherlands`,
    lead: `Everyone argues about how to make green hydrogen — but someone has to move the molecule. In the Netherlands, SoluForce's non-metallic flexible pipe is doing exactly that: a distribution connector laid with Firan in Deventer in about two months, and a first-of-its-kind hub line in Delfzijl pulled beneath a canal and a national railway.`,
    tags: [`Hydrogen transport`, `Flexible composite pipe`, `Reinforced thermoplastic`, `First-of-its-kind crossing`, `Distribution grid`, `Transport`],
    mediaCaption: `SoluForce flexible composite pipe · Delfzijl canal & rail crossing · Deventer grid`,
    stats: [
      { num: `First-of-its-kind`, label: `flexible H₂ pipe pulled under a canal at Delfzijl (rail crossing to confirm)` },
      { num: `52 bar`, label: `certified hydrogen MOP · fully non-metallic pipe` },
      { num: `~2 months`, label: `Deventer connector: from go-decision to pipe in the ground` }
    ]
  },

  partners: [
    { id: `soluforce`, logo: 'soluforce.png', name: `SoluForce`, role: `Flexible composite pipe`, body: `Consortium partner (Northern Netherlands). Manufacturer of the non-metallic reinforced thermoplastic pipe (RTP) certified for hydrogen — the material in both the Deventer and Delfzijl deployments.`, logoHtml: `<span class="logo-word">SoluForce</span>` },
    { id: `firan`, logo: 'firan.png', name: `Firan`, role: `Network developer (Alliander)`, body: `Consortium partner (Eastern Netherlands), part of Alliander (as is the DSO Liander). A future hydrogen network operator, Firan develops the open distribution grid in Deventer that the SoluForce connector feeds.`, logoHtml: `<span class="logo-word">Firan</span>` },
    { id: `hts`, logo: 'hts.png', name: `HyEnergy TransStore`, role: `Delfzijl pipeline deployment`, body: `Consortium partner (Northern Netherlands) investing in the permitting and deployment of the SoluForce pipe for the Delfzijl H2 hub, including the Oosterhornkanaal crossing. The hub itself is developed and operated by Green Planet, with HyPlanet running the trailer-filling station.`, logoHtml: `<span class="logo-word">HyEnergy TransStore</span>` },
    { id: `hyet`, logo: 'hyet.png', name: `HYET Hydrogen`, role: `Electrochemical compression / purification`, body: `Consortium partner developing electrochemical hydrogen purification and compression (EHPC) technology, adapting it to the pipeline parameters, feed purities and pressures of the regional demo sites.`, logoHtml: `<span class="logo-word">HYET Hydrogen</span>` },
    { id: `nec`, logo: 'nec.png', name: `New Energy Coalition`, role: `Project coordinator`, body: `Coordinator of the Hy2Market project, based in the Northern Netherlands.`, logoHtml: `<span class="logo-word">New Energy Coalition</span>` },
    { id: `demcon`, logo: 'demcon.png', name: `Demcon`, role: `Pipe demonstrator partner`, body: `Consortium partner (Northern Netherlands) working alongside SoluForce on the flexible-composite-pipe demonstrator.`, logoHtml: `<span class="logo-word">Demcon</span>` }
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
    { tone: `yellow`, label: `THE CHALLENGE`, text: `Green hydrogen is only useful if it can travel from where it is made to where it is used. Conventional steel pipelines are slow to permit, expensive to weld and lay, and vulnerable to hydrogen embrittlement — a poor fit for the short, distributed and obstacle-crossing routes a regional hydrogen network actually needs.` },
    { tone: `black`, label: `THE INNOVATION`, text: `One material, two deployments. SoluForce's non-metallic reinforced thermoplastic pipe — certified for hydrogen, laid from 400 m spools, joined without welding — is used both as a distribution connector in Deventer (built as phase zero of an open grid with Firan) and, in Delfzijl, pulled beneath a canal and a ProRail railway in a first-of-its-kind dual crossing for the HyEnergy TransStore hydrogen hub.` },
    { tone: `black`, label: `THE OUTCOME`, text: `In Deventer, a hydrogen line from production to off-taker Nefit Bosch, in the ground in roughly two months. In Delfzijl, a hub pipeline crossing infrastructure no hydrogen line had crossed before — proving flexible composite pipe as a fast, low-cost, embrittlement-free building block for the Dutch hydrogen network.` }
  ],

  video: {
    caption: `Benjamin Pilzer, Senior Business Developer Hydrogen, Firan, and Peter Cloos, Technical Manager, SoluForce — on building a local hydrogen grid in Deventer.`
  },

  region: {
    title: `The region`,
    paragraphs: [
      `The Netherlands is one of Europe's most committed hydrogen markets, and its network operators are already moving the molecule at regional scale. In Deventer, Firan — a subsidiary of Alliander and sister of the DSO Liander — is standardising a future hydrogen distribution grid, with Nefit Bosch as the anchor off-taker and New Energy Coalition coordinating Hy2Market.`,
      `Some 200 km north-east, in the industrial cluster around Delfzijl, HyEnergy TransStore (hub developed by Green Planet) is building a hydrogen hub fed in part by chlor-alkali by-product hydrogen from Nobian. Both projects run on the same SoluForce flexible composite pipe — which is what makes the Delfzijl crossing beneath the Oosterhornkanaal — and, in a first-of-its-kind step, a railway <span class="tc">(rail crossing to confirm)</span> — possible in the first place.`
    ],
    map: {
      caption: `Netherlands · two SoluForce deployments`,
      pins: [
        { left: `44%`, top: `48%`, color: `black`, label: `Deventer`, sub: `· connector` },
        { left: `46%`, top: `57%`, color: `yellow`, label: `Nefit Bosch`, sub: `· off-take` },
        { left: `54%`, top: `16%`, color: `black`, label: `Delfzijl`, sub: `hub · crossing · `, right: true }
      ]
    }
  },

  opportunity: {
    title: `The opportunity`,
    leadHtml: `Green hydrogen is only useful if it can travel — and steel is a <span class="hl">slow, costly, embrittlement-prone</span> way to move it over short, awkward routes.`,
    body: `SoluForce's non-metallic pipe changes that calculus, and Hy2Market gave it two live proving grounds. In Deventer, Firan and SoluForce — originally in different work packages — came together when the consortium flagged the need for RTP demonstrators. In Delfzijl, the same pipe is the enabling technology for a hydrogen hub whose route has to pass under a canal and a ProRail railway, a crossing that would be daunting for rigid steel but routine for a flexible line pulled through a bore.`,
    startLabel: `STARTING POSITION`,
    startStats: [
      { num: `2 sites`, sub: `Deventer distribution + Delfzijl hub, one shared material` },
      { num: `Canal crossing`, sub: `Oosterhornkanaal, Delfzijl · dual rail crossing to confirm` }
    ]
  },

  solutions: {
    title: `The solutions`,
    intro: `Three things make this work: a hydrogen-ready material, an installation method that goes where steel can't, and two real deployments proving it.`,
    drawers: [
      {
        title: `A pipe built for hydrogen`,
        subtitle: `From steel's embrittlement problem to a fully composite line.`,
        thumbGrad: `linear-gradient(135deg,#2c3138,#15171b)`,
        tex: 120,
        photoCaption: `SoluForce reinforced thermoplastic pipe`,
        body: `SoluForce's flexible composite pipe is entirely non-metallic — hydrogen never touches metal, eliminating the embrittlement that dogs steel. It is certified for hydrogen to a maximum operating pressure of 52 bar (up to 65 °C), in 4″ and 6″ diameters, with a polymer core wrapped in high-strength reinforcement, and is hydrogen-tight (permeation-free).`,
        stats: [
          { n: `52 bar`, l: `certified hydrogen MOP` },
          { n: `≥75%`, l: `lower carbon footprint vs. steel` }
        ],
        cta: { label: `How SoluForce certifies pipe for hydrogen`, href: `#` }
      },
      {
        title: `Laid from a spool — and pulled under obstacles`,
        subtitle: `Weld-free installation that goes where steel can't.`,
        thumbGrad: `linear-gradient(135deg,#3a3320,#17140b)`,
        tex: 120,
        photoCaption: `400 m spool · bore-pull under canal & railway`,
        body: `The pipe is delivered on 400-metre spools and installed in long continuous sections joined by electrofusion, not welding — smaller crews, fewer permits, ~70% lower installation cost. Because it is flexible and comes in continuous lengths, it can also be pulled through a pre-made bore: in Delfzijl, a single length is drawn beneath the Oosterhornkanaal — and, in a first-of-its-kind dual crossing, a ProRail railway <span class="tc">(rail crossing to confirm)</span> — which rigid steel could not make so cleanly.`,
        stats: [
          { n: `First-of-its-kind`, l: `pulled under a canal · <span class="tc">rail crossing to confirm</span>` },
          { n: `~70%`, l: `lower installation cost vs. steel` }
        ],
        cta: { label: `Why weld-free, flexible pipe unlocks hard routes`, href: `#` }
      },
      {
        title: `Two deployments, one material`,
        subtitle: `A distribution connector in Deventer, a hub pipeline in Delfzijl.`,
        thumbGrad: `linear-gradient(135deg,#20302c,#0b1714)`,
        tex: 120,
        photoCaption: `Deventer connector · Delfzijl H2 hub`,
        body: `In Deventer, 2 × 120 m connects a tube-trailer bay and a future 2.5 MW electrolyser <span class="tc">(status to confirm)</span> to Nefit Bosch at 9.5 bar, with a planned 16 bar local grid — phase zero of an open network. In Delfzijl, the pipe links a hydrogen hub (fed partly by Nobian chlor-alkali by-product) to HyPlanet's bulk trailer-filling station, targeting an initial capacity above 2,000 kg/day and a scale-up toward ~4,000 kg/day.`,
        stats: [
          { n: `2 × 120 m`, l: `Deventer connector installed` },
          { n: `>2,000 kg/day`, l: `Delfzijl hub capacity (scaling to ~4,000)` }
        ],
        cta: { label: `Explore both Dutch deployments`, href: `#` }
      }
    ]
  },

  system: {
    title: `How it works as one system`,
    intro: `The same SoluForce transport method — from hydrogen supply, through the flexible pipe, to the off-take — plays out in two Dutch deployments.`,
    chain: [
      { id: `supply`, kicker: `INPUT`, name: `Hydrogen supply`, sub: `Trailer · electrolyser · by-product`, title: `Trailers, a future electrolyser and Nobian by-product feed the lines` },
      { id: `pipe`, kicker: `STEP`, name: `SoluForce FCP`, sub: `Non-metallic RTP`, title: `Flexible composite pipe carries the hydrogen` },
      { id: `install`, kicker: `STEP`, name: `Spool & bore-pull`, sub: `Weld-free`, title: `Laid from 400 m spools; pulled through bores where needed` },
      { id: `offtake`, kicker: `STEP`, name: `Off-take`, sub: `Nefit Bosch · HyPlanet`, title: `Delivered to industrial off-take and trailer filling` }
    ],
    branches: [
      { id: `deventer`, name: `Deventer connector`, sub: `Firan · 9.5 / 16 bar`, title: `Phase-zero distribution connector (Deventer)` },
      { id: `delfzijl`, name: `Delfzijl H2 hub`, sub: `HTS · >2,000 kg/day`, title: `Hydrogen hub pipeline (Delfzijl)` },
      { id: `crossing`, name: `Canal + rail crossing`, sub: `First-of-its-kind`, title: `Pulled under a canal and a ProRail railway` },
      { id: `operators`, name: `Firan · HTS`, sub: `Develop · realize · exploit`, title: `Operators that build and run the networks` },
      { id: `replication`, name: `Replication`, sub: `Other regions`, title: `A transport blueprint others can copy` }
    ],
    nodeData: {
      supply: { title: `Hydrogen supply`, tag: `Trailer · future electrolyser · Nobian by-product`, body: `Hydrogen enters from tube-trailer bays and a planned 2.5 MW electrolyser in Deventer, and in Delfzijl partly from Nobian chlor-alkali by-product hydrogen — local, scalable supply points for each deployment.` },
      pipe: { title: `SoluForce flexible composite pipe`, tag: `Reinforced thermoplastic · MOP 52 bar`, body: `A fully non-metallic reinforced thermoplastic pipe certified for hydrogen to 52 bar. Hydrogen never touches metal, so there is no embrittlement risk, and the pipe is hydrogen-tight (permeation-free).` },
      install: { title: `Spool & bore-pull installation`, tag: `Weld-free · 400 m spools`, body: `Delivered on 400 m spools and installed in long continuous runs with electrofusion joints instead of welding. Its flexibility lets a single length be pulled through a pre-made bore — how the Delfzijl line crosses beneath a canal and a railway.` },
      offtake: { title: `Off-take`, tag: `Nefit Bosch · HyPlanet trailer filling`, body: `In Deventer the line delivers to the Nefit Bosch test facility at 9.5 bar; in Delfzijl it feeds HyPlanet's bulk hydrogen trailer-filling station at the hub.` },
      deventer: { title: `Deventer connector`, tag: `Firan · phase 0 · 9.5 / 16 bar`, body: `2 × 120 m linking a tube-trailer bay and future electrolyser to Nefit Bosch at 9.5 bar, as phase zero of a planned 16 bar open distribution grid developed by Firan.` },
      delfzijl: { title: `Delfzijl H2 hub`, tag: `HyEnergy TransStore · Green Planet`, body: `A hydrogen hub owned by HyEnergy TransStore (hub developed by Green Planet), fed partly by Nobian by-product hydrogen, targeting >2,000 kg/day initially and ~4,000 kg/day at scale-up.` },
      crossing: { title: `First-of-its-kind crossing`, tag: `Under a canal AND a ProRail railway`, body: `The Delfzijl line is pulled beneath the Oosterhornkanaal (canal) and, in a first-of-its-kind dual crossing, a railway managed by ProRail. <span class="tc">(The rail crossing is not yet independently verified — to confirm with partners.)</span>` },
      operators: { title: `Firan & HyEnergy TransStore`, tag: `Network operators`, body: `Firan is a future hydrogen distribution system operator in Deventer; HyEnergy TransStore owns and operates the Delfzijl hub asset. Both design, realise and then run their networks.` },
      replication: { title: `A transport blueprint`, tag: `Other Hy2Market regions`, body: `A weld-free, low-cost, embrittlement-free way to connect a producer to an off-taker fast — even under canals and railways — a transport playbook other Hy2Market regions can copy.` }
    }
  },

  process: {
    title: `The process`,
    fillPercent: `60%`,
    steps: [
      { date: `Hy2Market start`, badge: `HY2MARKET`, text: `Firan and SoluForce enter Hy2Market in different work packages; SoluForce's flexible pipe is earmarked for live Dutch deployments.` },
      { date: `Deventer`, text: `A 2 × 120 m connector to Nefit Bosch is permitted, financed and laid in roughly two months — phase zero of an open grid. <span class="tc">(exact dates to confirm)</span>` },
      { date: `Dec 2025`, text: `Construction begins on the Delfzijl hub pipeline — the SoluForce line is pulled beneath the Oosterhornkanaal, and — in a first-of-its-kind step, <span class="tc">to confirm</span> — a ProRail railway.` },
      { date: `End 2026`, text: `Delfzijl hub pipeline commissioning targeted.` },
      { date: `Now`, dateMuted: `in progress`, text: `Deventer's phase-1 open grid sits pre-final-investment-decision; the Delfzijl hub moves toward commissioning.` },
      { date: `Q2 2027`, current: true, text: `Full operation of the Delfzijl hub expected — initial capacity >2,000 kg/day, scalable to ~4,000 kg/day.` }
    ]
  },

  lessons: {
    title: `Lessons learned`,
    leadHtml: `The hardest lessons were organisational, not technical — and the clearest was about <span class="hl">scope of work</span>.`,
    body: `Because RTP was a new material for Firan, both partners had to keep an open mind and share knowledge in both directions — Firan learning the material's safety envelope, pressure ranges and maintenance needs; SoluForce learning Dutch contractors and permitting on its second or third installation in the country. Crossing live infrastructure at Delfzijl — a canal and a ProRail railway — adds another layer of coordination and permitting, which makes the same lesson sharper: define, in detail, who is responsible for what before you build. The transferable model is the partnership itself — operator and manufacturer aligning fast enough to lay pipe in weeks, even under obstacles.`
  },

  outcomes: {
    title: `The outcomes`,
    stats: [
      { tone: `yellow`, n: `First-of-its-kind`, l: `H₂ pipe under the Oosterhornkanaal · Delfzijl (rail crossing to confirm)` },
      { tone: `grey`, n: `52 bar`, l: `certified, non-metallic — no embrittlement` },
      { tone: `grey`, n: `>2,000 kg/day`, l: `Delfzijl hub capacity, scaling to ~4,000` },
      { tone: `black`, n: `2 × 120 m`, l: `Deventer connector in the ground` }
    ],
    narrative: `Across two deployments, the Dutch pilots turn a promising material into a proven building block. SoluForce's flexible composite pipe let Firan lay a distribution connector in Deventer in weeks, and let HyEnergy TransStore route a hub pipeline beneath a canal and a national railway in Delfzijl — a crossing steel could not make so cleanly. Together they show regional hydrogen transport doesn't have to wait on slow, costly infrastructure, and hand the consortium a replicable playbook for connecting producers to off-takers.`,
    pending: [
      { n: `—`, l: `Deventer construction dates <em>(pending confirmation)</em>` },
      { n: `—`, l: `2.5 MW electrolyser status <em>(pending confirmation)</em>` },
      { n: `—`, l: `Delfzijl final capacity & commissioning <em>(partner targets)</em>` }
    ]
  },

  knowledge: {
    title: `Knowledge exchange`,
    intro: `What these Dutch deployments offer the consortium — and what the partners exchanged with each other.`,
    cards: [
      { dir: `out`, arrow: `→`, label: `SHARING WITH`, region: `Hy2Market regions`, country: `Europe`, text: `A weld-free, low-cost transport blueprint — including how to cross canals and railways — that other regions can copy to connect their own producers and off-takers.` },
      { dir: `in`, arrow: `↔`, label: `EXCHANGED`, region: `Operators ↔ SoluForce`, country: `Netherlands`, text: `Firan and HyEnergy TransStore learned the pipe's safety, pressure and installation envelope; SoluForce learned Dutch permitting, contractors and infrastructure-crossing practice.` }
    ]
  },

  quotesEyebrow: `IN THEIR WORDS`,
  quotes: [
    { text: `When the idea came on the table to actually realise it, it went really fast — within two months there was already construction work going on, and now there's a pipeline in the ground. It's just perfect, like out of the book.`, name: `Peter Cloos`, role: `Technical Manager, SoluForce` },
    { text: `At Firan we're a distribution company — our goal is to connect A with B: producer and off-take of hydrogen. And SoluForce is a producer of material for distribution pipelines. That's where our roles come together.`, name: `Benjamin Pilzer`, role: `Senior Business Developer Hydrogen, Firan` },
    { text: `It's very important to really look at the scope of work, so that we know exactly who is responsible for what. That was something we learned in the project.`, name: `Peter Cloos`, role: `Technical Manager, SoluForce` }
  ],

  next: {
    eyebrow: `CONTINUE THE STORY`,
    allHref: `./index.html`,
    featured: {
      href: `./case-study.html?region=upper-austria`,
      kicker: `PRODUCTION · UPPER AUSTRIA`,
      title: `From Steel to Green`,
      lead: `How Upper Austria built an end-to-end hydrogen value chain around Europe's largest industrial green-hydrogen pilot.`,
      chips: [`Production`, `Electrolysis`, `Storage`],
      caption: `voestalpine · Linz`
    },
    others: [
      { href: `./case-study.html?region=medio-tejo`, k: `MOBILITY`, region: `Médio Tejo`, country: `Portugal`, d: `A hydrogen bus in everyday public service.` },
      { href: `./case-study.html?region=asturias`, k: `PRODUCTION`, region: `Asturias`, country: `Spain`, d: `Green hydrogen for industry and buses.` },
      { href: `./case-study.html?region=aragon`, k: `MOBILITY`, region: `Aragon`, country: `Spain`, d: `Spain's first hydrogen taxi service.` }
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
  root.CASE_STUDIES['netherlands'] = data;
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
})(typeof window !== 'undefined' ? window : this);
