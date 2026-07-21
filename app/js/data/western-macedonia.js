/* Hy2Market case study data — Knowledge Exchange spotlight: Western Macedonia, Greece (partner: CLUBE).
   Unlike the other four regions, Western Macedonia has no Hy2Market-built hardware pilot of its own —
   no electrolyser, no pipeline, no bus. Its story is a coal region using Hy2Market's knowledge-exchange
   work (training guidelines, roll-out data, standards input, study visits) to get ready to move once
   national hydrogen investment and its own momentum projects (GREENH2ORN, NorthOne) arrive.
   Registered as window.CASE_STUDIES['western-macedonia'] — view at case-study.html?region=western-macedonia

   Several fields are still pending partner confirmation and are marked verbatim as
   "[DATA NEEDED — ...]" placeholders per CLUBE's follow-up email — do not remove or fill these in
   without a confirmed source; they are meant to stay visible on the rendered page until resolved.

   Structural notes (see template.js for the supporting, backward-compatible changes):
   - hero.stats is omitted — no confirmed figures for a padded 3-tile grid; the one confirmed
     regional snapshot line lives in hero.lead instead (template.js: hero() now tolerates no stats).
   - partners has exactly one entry (CLUBE) — template.js renders a single "regional partner" card
     instead of the multi-logo band when partners.length === 1 (partnerSpotlight()).
   - sectionOrder promotes "knowledge exchange" to right after the opportunity triad, ahead of "how
     CLUBE contributed" — this is this region's core story, not a closing note (template.js:
     renderCaseStudy() now renders sections from a data-driven order when sectionOrder is present).
   - No "process" section (no infrastructure timeline of Hy2Market's own to show) and no separate
     elaborated "opportunity" section — the challenge/approach/outcome triad above already carries
     that content verbatim, so it isn't duplicated further down the page.
   - system.chain is omitted (there's no Hy2Market-built production chain here) — only system.branches,
     each carrying a "NOT A HY2MARKET OUTPUT" kicker directly on the tile (template.js: system() now
     tolerates a missing chain and an overridable branch-label). */
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
    titleHtml: `Watch, Learn, Prepare: How Western Macedonia Is Building <span class="hl">Hydrogen</span> Readiness Before the Infrastructure Arrives`,
    lead: `Most Hy2Market regions are proving a working hydrogen value chain. Western Macedonia is proving something else: how a coal region with no hydrogen infrastructure of its own yet turns a knowledge-exchange project into a running start — through training, standards work, and study visits to hydrogen frontrunners across Europe. Western Macedonia once generated more than 75% of Greece's electricity from lignite. Its coal-fired power plants are due to close by 2028. [DATA NEEDED — CLUBE to confirm these figures are OK to publish; sourced from the public Hy2Market regional highlight article, not stated directly on the interview call]`,
    tags: [`Just Transition`, `Knowledge Exchange`, `Training & Reskilling`, `Standards & Policy`, `Replication`],
    mediaCaption: `Kozani, Western Macedonia — regional capital and CLUBE's home base. [DATA NEEDED — CLUBE to send a representative photo]`
    // no hero.stats: no confirmed figures for a 3-tile grid — see the snapshot line folded into lead above.
  },

  partners: [
    {
      id: `clube`, name: `CLUBE`,
      role: `CLUBE — Cluster of Bioeconomy and Environment of Western Macedonia. The region's sole Hy2Market partner, and its link to the wider European hydrogen knowledge exchange.`,
      bodyHtml: `<p>A nonprofit cluster organization based in Kozani, driving bioeconomy and green hydrogen innovation across Western Macedonia through research, training, and business development. CLUBE represents the region as its only Hy2Market partner.</p>` +
        `<p class="data-needed">[DATA NEEDED — CLUBE to confirm/refine this wording, send a logo file, and say whether they want a team/office photo]</p>`,
      dataNeeded: `[DATA NEEDED — CLUBE to confirm/refine this wording, send a logo file, and say whether they want a team/office photo]`,
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
  sectionOrder: [`overview`, `region`, `knowledge`, `solutions`, `system`, `lessons`, `outcomes`],

  downloadHref: `#`,

  overview: [
    { tone: `yellow`, label: `THE CHALLENGE`, text: `Western Macedonia doesn't have a hydrogen project running yet. There's no existing electrolyser, no offtaker, no built value chain to extend — and Greece's national government has not yet made a firm commitment to hydrogen investment, leaving the region without the policy backing more developed hydrogen regions already have. On top of that, the region has none of the heavy industry — steel, cement, refineries — that gives other Hy2Market regions a ready industrial use case for hydrogen.` },
    { tone: `black`, label: `THE APPROACH`, text: `Rather than building infrastructure of its own within Hy2Market's timeframe, CLUBE used the project to get Western Macedonia ready to move fast once the moment comes: mapping training needs across the hydrogen value chain, contributing regional data to help the consortium evaluate where roll-out makes sense, feeding into Europe-wide standards and policy work, and building a network of contacts across more mature hydrogen regions through study visits and knowledge exchange.` },
    { tone: `black`, label: `THE OUTCOME`, text: `A region that entered the project with no hydrogen infrastructure now has a training framework ready to deploy, a channel into the EU's hydrogen standards conversation, and direct relationships with the partners and regions it will need as its own projects — a second Greek hydrogen refuelling station, a 15 MW electrolyser, a hydrogen-ready pipeline — move from planning toward construction.` }
  ],

  region: {
    title: `The region`,
    paragraphs: [
      `Western Macedonia was Greece's energy heart for generations — a lignite-mining region that once generated more than 75% of the country's electricity. That era is ending: the region's coal-fired power plants are due to close by 2028, backed by Greek government, EU, and Just Transition Mechanism funding.`,
      `What comes next is still being written, and CLUBE, based in the regional capital <strong>Kozani</strong>, is one of the organizations working to make sure hydrogen is part of the answer.`
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
      { dir: `in`, arrow: `←`, label: `LEARNING FROM`, region: `Médio Tejo`, country: `· Portugal`, text: `An informal exchange comparing notes on mobility pilots — CLUBE is looking at Médio Tejo's hydrogen bus experience for lessons it can apply once its own refuelling station comes online. [DATA NEEDED — confirm whether CLUBE wants the Médio Tejo exchange named explicitly]` },
      { dir: `in`, arrow: `↔`, label: `IN PROGRESS`, region: `Netherlands & Austria partners`, country: ``, text: `A still-open conversation exploring waste-to-hydrogen — valorizing sludge and other residues into hydrogen feedstock — effectively filling the gap left in Work Package 2 when RAVEN exited the project. That conversation is expected to resume after summer 2026. [DATA NEEDED — update once the waste-to-hydrogen conversation resumes]` }
    ]
  },

  solutions: {
    title: `How CLUBE contributed`,
    intro: `Not a built technology — three work strands where CLUBE fed its regional expertise into Hy2Market's consortium-wide efforts. Open each to see the detail.`,
    drawers: [
      {
        title: `Knowledge exchange & training guidelines (WP6, D6.3)`,
        subtitle: `Turning years of hands-on hydrogen training experience into a Europe-wide playbook.`,
        thumbGrad: `linear-gradient(135deg,#2c3138,#15171b)`,
        tex: 120,
        photoCaption: `WP6 · training guidelines · knowledge exchange`,
        body: `As part of Work Package 6, CLUBE contributed to Hy2Market's D6.3 training guidelines — desk research mapping the hydrogen skills landscape and training opportunities across the consortium's regions, benchmarked against Western Macedonia's own. CLUBE drew directly on its experience running GreenSkillsforH2 (the European Hydrogen Skills Alliance project) — including four annual hydrogen summer schools and masterclasses — to help define the different training formats the guidelines recommend, tailored to what each hydrogen profession actually needs, from safety officers to project managers. <span class="data-needed">[DATA NEEDED — exact GreenSkillsforH2 summer-school participant statistics, and how CLUBE wants that project credited/linked]</span>`,
        cta: { label: `Read D6.3 on hy2market.eu/results (once public)`, href: `#` }
      },
      {
        title: `Regional data for roll-out evaluation (WP4, T4.3 / D4.5)`,
        subtitle: `Feeding Western Macedonia's numbers into the consortium's Europe-wide roll-out picture.`,
        thumbGrad: `linear-gradient(135deg,#3a4048,#1c2026)`,
        tex: 60,
        photoCaption: `WP4 · Task 4.3 · regional data`,
        body: `CLUBE didn't run modelling or simulations of its own — but it did contribute regional data on CO₂ capture projects, renewable energy capacity, and green hydrogen potential in Western Macedonia and Greece more broadly, feeding Task 4.3's evaluation of where hydrogen roll-out is most viable across the consortium's regions. <span class="data-needed">[DATA NEEDED — confirm deliverable number D4.5 and whether it's public/linkable]</span>`
      },
      {
        title: `Standards and policy input (WP6, T6.2)`,
        subtitle: `Getting Greek hydrogen stakeholders a voice in Europe's emerging standards conversation.`,
        thumbGrad: `linear-gradient(135deg,#26424a,#11272d)`,
        tex: 90,
        photoCaption: `WP6 · Task 6.2 · standards & policy`,
        body: `When Task 6.2 needed input on hydrogen regulations and standards from across the consortium's countries, CLUBE acted as the bridge to Greece — distributing a stakeholder questionnaire to national and regional hydrogen players and channelling their responses back into the task. Results were later compiled and presented across the consortium, and are expected to inform an EU-wide hydrogen policy letter. <span class="data-needed">[DATA NEEDED — confirm whether the questionnaire results are citable as a named output, and who leads Task 6.2 (believed to be Gregor Offenthaler / WIVA P&G)]</span>`
      }
    ]
  },

  system: {
    title: `The regional hydrogen landscape`,
    branchLabel: `REGIONAL MOMENTUM`,
    intro: `None of the following is a Hy2Market deliverable — it's the momentum in Western Macedonia that Hy2Market is helping CLUBE get ready for.`,
    branches: [
      { id: `greenh2orn`, kicker: `NOT A HY2MARKET OUTPUT`, name: `GREENH2ORN`, sub: `Greece's 2nd H₂ refuelling station`, title: `GREENH2ORN — LIFE-funded hydrogen refuelling station, Kozani (not a Hy2Market output)` },
      { id: `northone`, kicker: `NOT A HY2MARKET OUTPUT`, name: `NorthOne`, sub: `15 MW electrolyser · Hellenic Hydrogen`, title: `NorthOne — 15 MW electrolyser near Kozani (not a Hy2Market output)` },
      { id: `pipeline`, kicker: `NOT A HY2MARKET OUTPUT`, name: `Hydrogen-ready pipeline`, sub: `existing line · up to 100% H₂`, title: `Existing pipeline built to carry up to 100% hydrogen (not a Hy2Market output)` },
      { id: `consulting`, kicker: `OPTIONAL · NOT A HY2MARKET OUTPUT`, name: `Hydrogen strategy consulting`, sub: `DEPA · Hellenic Hydrogen · PPC`, title: `CLUBE's advisory relationships beyond Hy2Market (optional — confirm before publishing)` }
    ],
    nodeData: {
      greenh2orn: { title: `GREENH2ORN`, tag: `LIFE-funded · Municipality of Kozani · not a Hy2Market output`, body: `A LIFE-funded project building Greece's second hydrogen refuelling station — and its first with on-site green hydrogen production. Coordinated by the Municipality of Kozani; currently in the land-securing and construction-planning phase. End use: municipal fleet vehicles, plus private vehicles for the project's consortium partners. [DATA NEEDED — full GREENH2ORN project packet: timeline, partners, capacity figures]` },
      northone: { title: `NorthOne`, tag: `Hellenic Hydrogen · not a Hy2Market output`, body: `A 15 MW electrolyser project coordinated by Hellenic Hydrogen, greenlit and expected to begin construction within months, sited near Kozani. [DATA NEEDED — construction start date and output/capacity figures]` },
      pipeline: { title: `The hydrogen-ready pipeline`, tag: `Existing infrastructure · not a Hy2Market output`, body: `An existing pipeline in the region already built to carry up to 100% hydrogen. Plans call for injecting NorthOne's green hydrogen output once both projects are operational — a step still a few years out. [DATA NEEDED — confirm pipeline length and operator/owner before publishing any figure]` },
      consulting: { title: `Hydrogen strategy consulting`, tag: `Optional · outside Hy2Market's scope`, body: `Beyond its Hy2Market role, CLUBE has advised DEPA (Greece's national gas company, and future owner of the GREENH2ORN refuelling station) on its hydrogen strategy, and maintains relationships with Hellenic Hydrogen and Greece's Public Power Corporation (PPC) around hydrogen as an industrial feedstock and storage medium for intermittent renewables. [DATA NEEDED — confirm CLUBE wants this named on the page at all, since it's outside Hy2Market's scope]` }
    }
  },

  lessons: {
    title: `Lessons learned`,
    leadHtml: `The clearest lesson CLUBE takes from Hy2Market is that <span class="mark">policy has to move first</span>.`,
    body: `Renewables are already abundant in Western Macedonia — solar and wind capacity is growing fast — but without a national commitment to hydrogen investment, the region can't yet follow the more mature regions it has been studying. The second lesson: there's no local industrial offtake to build around, unlike Upper Austria or Sicily, which leaves mobility — and, longer-term, hydrogen export along a Greece-to-Germany corridor — as the region's most realistic paths. A more granular lesson: training isn't one-size-fits-all. A hydrogen safety officer and a hydrogen project manager need entirely different curricula, a distinction that directly shaped how CLUBE structured its contribution to the training guidelines.`
  },

  outcomes: {
    title: `The outcomes`,
    stats: [
      { tone: `yellow`, n: `3 deliverables`, l: `D6.3, D4.5, and the Task 6.2 standards questionnaire — CLUBE input banked for later` },
      { tone: `grey`, n: `Training framework`, l: `multi-format, ready to deploy once national investment arrives` },
      { tone: `grey`, n: `EU policy channel`, l: `live input into the Task 6.2 hydrogen standards conversation` },
      { tone: `black`, n: `New network`, l: `contacts across Europe's more mature hydrogen regions, built through study visits` }
    ],
    narrative: `By the numbers, Western Macedonia's Hy2Market story isn't about megawatts or kilometres of pipe — it's contributions banked for later: input to three deliverables (D6.3, D4.5, and the Task 6.2 standards questionnaire), a multi-format training framework ready to deploy once national investment arrives, and a live channel into the EU's emerging hydrogen policy conversation. The bigger outcome is relational: a network of contacts across Europe's more mature hydrogen regions that CLUBE didn't have before the project, built through study visits and knowledge-exchange meetings.`,
    pending: [
      { n: `—`, l: `<em>[DATA NEEDED — any concrete numbers CLUBE can share (study-visit count, questionnaire responses, etc.)]</em>` }
    ]
  },

  quotesEyebrow: `IN THEIR WORDS`,
  quotes: [
    { text: `[DATA NEEDED — pending. Both Eleni Papista and Athanasia Ioannidou (CLUBE) said they'd send a pull-quote by email, both leaning toward "interregionality" / the interregional hydrogen supply chain as the theme. Do not fabricate a quote — leave this slot empty/placeholder until quotes arrive.]`, name: `Quote pending`, role: `CLUBE — awaiting confirmation` }
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
