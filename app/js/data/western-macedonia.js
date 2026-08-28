/* Hy2Market case study data — Knowledge Exchange spotlight: Western Macedonia, Greece (partner: CLUBE).
   Unlike the other four regions, Western Macedonia has no Hy2Market-built hardware pilot of its own —
   no electrolyser, no pipeline, no bus. Its story is a coal region using Hy2Market's knowledge-exchange
   work (training guidelines, roll-out data, standards input, study visits) to get ready to move once
   national hydrogen investment and its own momentum projects (GREENH2ORN, NorthOne) arrive.
   Registered as window.CASE_STUDIES['western-macedonia'] — view at case-study.html?region=western-macedonia

   Several fields are still pending partner confirmation and are marked verbatim as
   "[DATA NEEDED — ...]" placeholders per CLUBE's follow-up email — do not remove or fill these in
   without a confirmed source; they are meant to stay visible on the rendered page until resolved.

   Visible copy is deliberately free of internal WP/deliverable/task codes (e.g. "WP6", "D6.3",
   "Task 4.3") — those are consortium-internal shorthand, not something a public visitor needs.

   Structural notes (see template.js for the supporting, backward-compatible changes):
   - hero.stats is omitted — no confirmed figures for a padded 3-tile grid.
   - partners has exactly one entry (CLUBE) — template.js renders a single "regional partner" card
     instead of the multi-logo band when partners.length === 1 (partnerSpotlight()).
   - sectionOrder promotes "knowledge exchange" to right after the opportunity triad, ahead of "how
     CLUBE contributed" — this is this region's core story, not a closing note (template.js:
     renderCaseStudy() now renders sections from a data-driven order when sectionOrder is present).
   - No "process" section (no infrastructure timeline of Hy2Market's own to show) and no separate
     elaborated "opportunity" section — the challenge/approach/outcome triad above already carries
     that content verbatim, so it isn't duplicated further down the page.
   - system.chain is omitted (there's no Hy2Market-built production chain here) — only system.branches.
     Each node label carries a trailing "*" instead of a repeated "not a Hy2Market output" kicker;
     system.disclaimer renders the shared footnote once, below the diagram (template.js: system() now
     tolerates a missing chain, an overridable branch-label, and an optional disclaimer line).
   - lessons.bullets renders as a list instead of lessons.body prose (template.js: lessons() now
     supports either). */
(function (root) {
  var data = {
  slug: `western-macedonia`,
  card: {
    kicker: `KNOWLEDGE EXCHANGE · WESTERN MACEDONIA`,
    title: `Western Macedonia, Greece`,
    blurb: `Western Macedonia has no hydrogen plant, no pipeline, no bus of its own — yet. What it has is CLUBE: a partner using Hy2Market to build training frameworks, feed EU standards work, and get a coal region ready to move the moment national investment arrives.`
  },
  breadcrumb: { label: `Case studies`, href: `./index.html`, here: `Western Macedonia` },

  hero: {
    eyebrow: `KNOWLEDGE EXCHANGE · WESTERN MACEDONIA`,
    titleHtml: `Watch, Learn, Prepare: Western Macedonia's <span class="hl">Hydrogen</span> Readiness`,
    lead: `Most Hy2Market regions are proving a working hydrogen value chain. Western Macedonia is proving something else: how a region with no hydrogen infrastructure of its own yet turns a knowledge-exchange project into a running start — through training, standards work, and study visits to hydrogen frontrunners across Europe.`,
    tags: [`Just Transition`, `Knowledge Exchange`, `Training & Reskilling`, `Standards & Policy`, `Replication`],
    // three photos CLUBE supplied for the region's energy landscape, auto-rotating
    // in place of a single hero shot — see hero() / .hero-slideshow in template.js.
    slideshow: [
      { src: `./assets/hero/western-macedonia-lignite.jpg`, caption: `Lignite mines and power plants, Western Macedonia` },
      { src: `./assets/hero/western-macedonia-pv-park.jpg`, caption: `PV Park, Kozani, Western Macedonia · toposol.gr` },
      { src: `./assets/hero/western-macedonia-wind-farm.jpg`, caption: `Askio onshore wind farm complex, Kozani, Western Macedonia · Iberdrola` }
    ]
    // no hero.stats: no confirmed figures for a padded 3-tile grid.
  },

  partners: [
    {
      id: `clube`, name: `CLUBE`, logo: `clube.png`,
      role: `CLUBE — Cluster of Bioeconomy and Environment of Western Macedonia. The region's sole Hy2Market partner, and its link to the wider European hydrogen knowledge exchange.`,
      bodyHtml: `<p>A nonprofit cluster organization based in Kozani, driving bioeconomy and green hydrogen innovation across Western Macedonia through research, training, and business development. CLUBE represents the region as its only Hy2Market partner.</p>`,
      logoHtml: `<span class="logo-word">CLUBE</span>`
    }
  ],

  toc: [
    { id: `toc-overview`, label: `The opportunity` },
    { id: `toc-region`, label: `The region` },
    { id: `toc-knowledge`, label: `Knowledge exchange` },
    { id: `toc-solutions`, label: `How CLUBE contributed` },
    { id: `toc-system`, label: `The regional hydrogen landscape` },
    { id: `toc-lessons`, label: `Lessons learned` },
    { id: `toc-outcomes`, label: `The outcomes` }
  ],

  // Knowledge exchange promoted ahead of "how CLUBE contributed" — see template.js note above.
  // No video: the only clip supplied turned out to be about a different
  // project, so this region has nothing to show here for now. The
  // video-embed capability itself (template.js/interactions.js) is real and
  // stays available for whenever a genuine Western Macedonia clip exists —
  // just add a `video: { caption, youtubeId }` block and 'video' back into
  // this order (its normal slot is right after 'overview').
  sectionOrder: [`overview`, `region`, `knowledge`, `solutions`, `system`, `lessons`, `outcomes`],

  downloadHref: `#`,

  overview: [
    { tone: `yellow`, label: `THE CHALLENGE`, text: `Western Macedonia doesn't have a hydrogen project running yet. There's no existing electrolyser, no offtaker, no built value chain to extend — and Greece's national government has not yet made a firm commitment to hydrogen investment, leaving the region without the policy backing more developed hydrogen regions already have. On top of that, the region has none of the heavy industry — steel, cement, refineries — that gives other Hy2Market regions a ready industrial use case for hydrogen.` },
    { tone: `black`, label: `THE APPROACH`, text: `Rather than building infrastructure of its own within Hy2Market's timeframe, CLUBE used the project to get Western Macedonia ready to move fast once the moment comes: mapping training needs across the hydrogen value chain, contributing regional data to help the consortium evaluate where roll-out makes sense, feeding into Europe-wide standards and policy work, and building a network of contacts across more mature hydrogen regions through study visits and knowledge exchange.` },
    { tone: `black`, label: `THE OUTCOME`, text: `A region that entered the project with no hydrogen infrastructure now has a training framework ready to deploy, a channel into the EU's hydrogen standards conversation, and direct relationships with the partners and regions it will need as its own projects — a second Greek hydrogen refuelling station, an electrolyser with an initial capacity of 50 MW (expandable to 200 MW), a hydrogen-ready pipeline — move from planning toward construction.` }
  ],

  region: {
    title: `The region`,
    paragraphs: [
      `Western Macedonia was Greece's energy heart for generations — a lignite-mining region that once generated more than 75% of the country's electricity. That era is ending: the region's coal-fired power plants are due to close by 2028, backed by Greek government, EU, and Just Transition Mechanism funding.`,
      `The shutdown leaves a real gap to fill — both in generation capacity and in the jobs and skills built up around coal over decades. That's exactly the gap CLUBE was set up to work on: a nonprofit cluster organization based in <strong>Kozani</strong>, the regional capital, formed to steer the local economy toward bioeconomy and green hydrogen and to help the region's workforce reskill for what comes next.`,
      `What Western Macedonia brings to that shift is real: abundant solar and wind capacity already feeding the grid, and a location that sits on one of Europe's prospective hydrogen export corridors, running from Greece up toward Germany. CLUBE is Greece's only Hy2Market partner and the only one representing the region in the consortium — which puts it in a position to connect Greek hydrogen stakeholders to a much wider European network.`,
      `What comes next for the region is still being written, and CLUBE is one of the organizations working to make sure hydrogen is part of the answer.`
    ],
    map: {
      caption: `Western Macedonia · getting ready`,
      pins: [
        { left: `46%`, top: `48%`, color: `yellow`, label: `Kozani`, sub: `· CLUBE HQ` },
        { left: `68%`, top: `58%`, color: `black`, label: `Coal plants`, sub: `closing by 2028 · `, right: true }
      ]
    }
  },

  knowledge: {
    title: `Knowledge exchange`,
    intro: `Hy2Market's clearest value for Western Macedonia has been the people it put CLUBE in a room with.`,
    cards: [
      { dir: `in`, arrow: `←`, label: `LEARNING FROM`, region: `Médio Tejo`, country: `· Portugal`, text: `An informal exchange comparing notes on mobility pilots — CLUBE is looking at Médio Tejo's hydrogen bus experience for lessons it can apply once its own refuelling station comes online.` },
      { dir: `in`, arrow: `↔`, label: `IN PROGRESS`, region: `Netherlands & Austria partners`, country: ``, text: `CLUBE is in active conversations with hydrogen partners in the Netherlands and Austria about waste-to-hydrogen — turning sludge and other residues into hydrogen feedstock.` }
    ]
  },

  solutions: {
    title: `How CLUBE contributed`,
    intro: `Not a built technology — three work strands where CLUBE fed its regional expertise into Hy2Market's consortium-wide efforts. Open each to see the detail.`,
    drawers: [
      {
        title: `Knowledge exchange & training guidelines`,
        subtitle: `Turning years of hands-on hydrogen training experience into a Europe-wide playbook.`,
        thumbGrad: `linear-gradient(135deg,#2c3138,#15171b)`,
        tex: 120,
        photoCaption: `Training guidelines · knowledge exchange`,
        body: `CLUBE contributed to Hy2Market's training guidelines — desk research mapping the hydrogen skills landscape and training opportunities across the consortium's regions, benchmarked against Western Macedonia's own. CLUBE drew directly on its experience running GreenSkillsforH2 (the European Hydrogen Skills Alliance project) — including four annual hydrogen summer schools and masterclasses — to help define the different training formats the guidelines recommend, tailored to what each hydrogen profession actually needs, from safety officers to project managers.` +
          `<ul style="font-size:17px;line-height:1.6;color:var(--ink);margin:18px 0;padding-left:20px;">` +
            `<li style="margin:0 0 6px;">Masterclass "One-Day Hydrogen": 70 participants</li>` +
            `<li style="margin:0 0 6px;">Hydrogen Summer ScH2ool: 78 participants</li>` +
            `<li style="margin:0 0 6px;">"Engineering our Future: Developing Hydrogen Skills" technical seminar: 36 participants</li>` +
            `<li style="margin:0 0 6px;">2nd Hydrogen Summer ScH2ool: 63 participants</li>` +
            `<li style="margin:0 0 6px;">3rd Hydrogen Summer ScH2ool: 46 participants</li>` +
            `<li style="margin:0 0 6px;">4th Hydrogen Summer ScH2ool: 78 participants</li>` +
            `<li><strong>Total: 371 participants across six training programmes</strong></li>` +
          `</ul>` +
          `<p style="font-size:17px;line-height:1.5;color:var(--ink);margin:0 0 22px;">These trainings were delivered through the GreenSkillsforH2 (European Hydrogen Skills Alliance) project — more information at <a href="https://greenskillsforhydrogen.eu/" target="_blank" rel="noopener">greenskillsforhydrogen.eu</a>.</p>` +
          `<a class="cta-pill" href="https://hy2market.eu/wp-content/uploads/2026/01/Hydrogen-Skills-and-Workforce-Insights-Hy2Market-White-Paper.pdf" target="_blank" rel="noopener">Read the whitepaper <span class="arrow">→</span></a>`,
        cta: { label: `Read the training guidelines`, href: `https://hy2market.eu/wp-content/uploads/2025/11/D6.3-Final-Training-Guidelines.pdf` }
      },
      {
        title: `Regional data for roll-out evaluation`,
        subtitle: `Feeding Western Macedonia's numbers into the consortium's Europe-wide roll-out picture.`,
        thumbGrad: `linear-gradient(135deg,#3a4048,#1c2026)`,
        tex: 60,
        photoCaption: `Regional data · roll-out evaluation`,
        body: `CLUBE didn't run modelling or simulations of its own — but it did contribute regional data on CO₂ capture projects, renewable energy capacity, and green hydrogen potential in Western Macedonia and Greece more broadly, feeding the consortium's evaluation of where hydrogen roll-out is most viable across its regions. This data isn't publicly published yet — it feeds into a consortium-wide roll-out report expected later in 2026.`
      },
      {
        title: `Standards and policy input`,
        subtitle: `Getting Greek hydrogen stakeholders a voice in Europe's emerging standards conversation.`,
        thumbGrad: `linear-gradient(135deg,#26424a,#11272d)`,
        tex: 90,
        photoCaption: `Standards & policy input`,
        body: `When the consortium needed input on hydrogen regulations and standards from across its countries, CLUBE acted as the bridge to Greece — distributing a stakeholder questionnaire to national and regional hydrogen players and channelling their responses back. Results are being compiled into a strategy paper for the European Commission and EU policy makers, expected by the end of 2026 — not yet publicly available.`
      }
    ]
  },

  system: {
    title: `The regional hydrogen landscape`,
    branchLabel: `REGIONAL MOMENTUM`,
    intro: `A second hydrogen refuelling station, a 50 MW electrolyser, a hydrogen-ready pipeline, and the industry relationships CLUBE has built around them — the real momentum in Western Macedonia that Hy2Market's work is preparing the region to meet.`,
    disclaimer: `* Not a Hy2Market deliverable — regional momentum shown for context.`,
    branches: [
      { id: `greenh2orn`, name: `GREENH2ORN*`, sub: `Greece's 2nd H₂ refuelling station`, title: `GREENH2ORN — LIFE-funded hydrogen refuelling station, Kozani` },
      { id: `northone`, name: `NorthOne*`, sub: `50 MW electrolyser · Hellenic Hydrogen`, title: `NorthOne — 50 MW electrolyser near Kozani` },
      { id: `pipeline`, name: `Hydrogen-ready pipeline*`, sub: `existing line · up to 100% H₂`, title: `Existing pipeline built to carry up to 100% hydrogen` },
      { id: `consulting`, kicker: `OPTIONAL`, name: `DEPA / Hellenic Hydrogen / PPC*`, sub: `Hydrogen strategy consulting`, title: `CLUBE's advisory relationships beyond Hy2Market (optional — confirm before publishing)` }
    ],
    nodeData: {
      greenh2orn: { title: `GREENH2ORN`, tag: `LIFE-funded · Municipality of Kozani`, body: `A LIFE-funded project building Greece's second hydrogen refuelling station — and its first with on-site green hydrogen production. Coordinated by the Municipality of Kozani; currently in the land-securing and construction-planning phase. End use: municipal fleet vehicles, plus private vehicles for the project's consortium partners. Timeline: September 2024 – August 2029 (60-month project). Capacity: an MW-scale electrolysis plant for green hydrogen production for mobility use. Partners: Municipality of Kozani, DEPA Commercial S.A., European Dynamics, University of Western Macedonia, DIADYMA S.A. Waste Management of Western Macedonia, CLUBE, Acea Infrastructure S.p.A., B&T Composites S.A.` },
      northone: { title: `NorthOne`, tag: `Hellenic Hydrogen`, body: `A 50 MW electrolyser project coordinated by Hellenic Hydrogen, sited near Kozani. Approval is expected in the coming months, with a target to complete the facility by the end of 2027. Initial capacity of 50 MW, expandable up to 200 MW.` },
      pipeline: { title: `The hydrogen-ready pipeline`, tag: `Existing infrastructure`, body: `An existing pipeline in the region already built to carry up to 100% hydrogen. Plans call for injecting NorthOne's green hydrogen output once both projects are operational — a step still a few years out. 157 km, operated by the Hellenic Gas Transmission System Operator S.A. (DESFA).` },
      consulting: { title: `DEPA / Hellenic Hydrogen / PPC`, tag: `Optional · outside Hy2Market's scope`, body: `Beyond its Hy2Market role, CLUBE has advised DEPA (Greece's national gas company, and future owner of the GREENH2ORN refuelling station) on its hydrogen strategy, and maintains relationships with Hellenic Hydrogen and Greece's Public Power Corporation (PPC) around hydrogen as an industrial feedstock and storage medium for intermittent renewables.` }
    }
  },

  lessons: {
    title: `Lessons learned`,
    leadHtml: `The clearest lesson CLUBE takes from Hy2Market is that <span class="mark">policy has to move first</span>.`,
    bullets: [
      `Renewables are already abundant in Western Macedonia — solar and wind capacity is growing fast — but without a national commitment to hydrogen investment, the region can't yet follow the more mature regions it has been studying.`,
      `There's no local industrial offtake to build around, unlike Upper Austria or Sicily, which leaves mobility — and, longer-term, hydrogen export along a Greece-to-Germany corridor — as the region's most realistic paths.`,
      `Training isn't one-size-fits-all: a hydrogen safety officer and a hydrogen project manager need entirely different curricula, a distinction that directly shaped how CLUBE structured its contribution to the training guidelines.`
    ]
  },

  outcomes: {
    title: `The outcomes`,
    stats: [
      { tone: `yellow`, n: `3 deliverables`, l: `contributed to — training guidelines, regional roll-out data, and a standards questionnaire` },
      { tone: `grey`, n: `Training framework`, l: `multi-format, ready to deploy once national investment arrives` },
      { tone: `grey`, n: `EU policy channel`, l: `live input into the emerging hydrogen standards conversation` },
      { tone: `black`, n: `New network`, l: `contacts across Europe's more mature hydrogen regions, built through study visits` }
    ],
    narrative: `By the numbers, Western Macedonia's Hy2Market story isn't about megawatts or kilometres of pipe — it's contributions banked for later: input across three fronts — training guidelines, regional roll-out data, and a standards questionnaire — a multi-format training framework ready to deploy once national investment arrives, and a live channel into the EU's emerging hydrogen policy conversation. The bigger outcome is relational: a network of contacts across Europe's more mature hydrogen regions that CLUBE didn't have before the project, built through study visits and knowledge-exchange meetings.`,
    pending: [
      { n: `371`, l: `A total number of 371 participants were engaged across six training programmes implemented by CluBE in Western Macedonia in the frame of GreenSkillsforH2` },
      { n: `29`, l: `Greek hydrogen stakeholders and industrial companies the regulations and standards questionnaire was sent to for their input` }
    ]
  },

  quotesEyebrow: `IN THEIR WORDS`,
  quotes: [
    { text: `In Western Macedonia, the transition from lignite to clean energy has created both opportunities and gaps in the workforce. While many workers have strong energy backgrounds, almost none had prior exposure to hydrogen technologies. Through Hy2Market and other initiatives we launched targeted upskilling training programs with universities and training centers, helping to build a regional hydrogen skills ecosystem. The project has been key in linking local training to European market needs.`, name: `Nikolaos Ntavos`, role: `Co-Founder & Manager, CLUBE` },
    { text: `Hy2Market has shown that the hydrogen transition depends not only on technology and infrastructure, but also on effective interregional cooperation. By connecting emerging regions such as Western Macedonia with more mature hydrogen ecosystems, the project has provided direct access to practical experience and lessons from real implementation. This interregional exchange has been valuable for identifying common challenges, understanding what works in practice and bringing relevant knowledge and best practices into our own regional transition, while contributing to a more integrated European hydrogen value chain.`, name: `Eleni Papista`, role: `Head of Clean Technologies and Hydrogen, CLUBE` }
  ],

  next: {
    eyebrow: `CONTINUE THE STORY`,
    allHref: `./index.html`,
    featured: {
      href: `./case-study.html?region=medio-tejo`,
      kicker: `CASE STUDY · MOBILITY`,
      title: `Médio Tejo: proving hydrogen mobility in daily public service`,
      lead: `The region Western Macedonia is watching most closely for mobility lessons. See how Médio Tejo put a hydrogen bus into nine months of real public routes.`,
      chips: [`Portugal`, `Mobility`, `Fuel-cell bus`],
      caption: `Caetano H2.City Gold · Médio Tejo`
    },
    others: [
      { href: `./case-study.html?region=upper-austria`, k: `PRODUCTION`, region: `Upper Austria`, country: `· Austria`, d: `A working electrolyser extended into a regional hydrogen network.` },
      { href: `./case-study.html?region=asturias`, k: `PRODUCTION`, region: `Asturias`, country: `· Spain`, d: `A 150 MW hub built around a coal-era power plant.` },
      { href: `./case-study.html?region=netherlands`, k: `TRANSPORT`, region: `Netherlands`, country: `· NL`, d: `A flexible composite hydrogen pipeline, laid in ~two months.` }
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
  root.CASE_STUDIES['western-macedonia'] = data;
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
})(typeof window !== 'undefined' ? window : this);
