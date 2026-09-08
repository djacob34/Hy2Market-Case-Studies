/* Hy2Market case study data — Knowledge Exchange spotlight: Western Macedonia, Greece (partner: CluBE).
   Unlike the other four regions, Western Macedonia has no Hy2Market-built hardware pilot of its own —
   no electrolyser, no pipeline, no bus. Its story is a coal region using Hy2Market's knowledge-exchange
   work (training guidelines, roll-out data, standards input, study visits) to get ready to move once
   national hydrogen investment and its own momentum projects (LIFE GREENH2ORN, North-1) arrive.
   Registered as window.CASE_STUDIES['western-macedonia'] — view at case-study.html?region=western-macedonia

   Content synced against CluBE's own reviewed content-collection document (2026-09-07), which flagged
   specific sections for revision via Word comments — those revisions are applied verbatim below. Two
   renames apply throughout, per explicit review comments: "CLUBE" -> "CluBE", and the North-1 project's
   node/references from "NorthOne" -> "North-1".

   As of this sync, every item that document flagged has a confirmed answer, so there are no
   remaining visitor-facing "[DATA NEEDED — ...]" markers on this page. If a future round reopens
   one, mark it the same way and keep it visible until it has a confirmed source.

   The training, roll-out and standards drawers under "How CluBE contributed" name their specific
   deliverable/task identifiers (D6.3, Task 4.3, D4.5, Task 6.2, D6.2, WIVA P&G) verbatim, per
   explicit partner instruction, rather than the internal-code-free phrasing used elsewhere on this
   page — and keep the source's cautious, not-yet-public framing for D4.5 and D6.2 rather than
   stating either as a confirmed fact.

   Structural notes (see template.js for the supporting, backward-compatible changes):
   - hero.stats is omitted — no confirmed figures for a padded 3-tile grid; hero.slideshow (three
     regional photos CluBE supplied) auto-rotates in its place — see hero() in template.js.
   - partners has exactly one entry (CluBE) — template.js renders a single "regional partner" card
     instead of the multi-logo band when partners.length === 1 (partnerSpotlight()).
   - sectionOrder promotes "knowledge exchange" to right after the opportunity triad, ahead of "how
     CluBE contributed" — this is this region's core story, not a closing note (template.js:
     renderCaseStudy() now renders sections from a data-driven order when sectionOrder is present).
   - No "process" section (no infrastructure timeline of Hy2Market's own to show) and no separate
     elaborated "opportunity" section — the challenge/approach/outcome triad above already carries
     that content verbatim, so it isn't duplicated further down the page. No video section either —
     the only clip supplied turned out to be about a different project (see template.js/interactions.js
     for the still-available, unused-here video-embed capability).
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
    blurb: `Western Macedonia does not yet have a mature or fully established hydrogen infrastructure, but it has strong potential to develop a regional hydrogen ecosystem as part of its wider energy transition. The region is helping to lay the foundations for future hydrogen deployment by building knowledge and skills, and learning from more advanced hydrogen regions though Hy2Market and other hydrogen projects. CluBE supports this process by connecting regional needs and opportunities with relevant European experience, networks and developments.`
  },
  breadcrumb: { label: `Case studies`, href: `./index.html`, here: `Western Macedonia` },

  hero: {
    eyebrow: `KNOWLEDGE EXCHANGE · WESTERN MACEDONIA`,
    titleHtml: `Watch, Learn, Prepare: Western Macedonia's <span class="hl">Hydrogen</span> Readiness`,
    lead: `Most Hy2Market regions are demonstrating working hydrogen value chains. Western Macedonia is showing how a region at the centre of the energy transition can build the foundations for a competitive hydrogen economy. While its hydrogen infrastructure is still emerging, the region has significant potential to use hydrogen as a driver of decarbonisation, and a just transition. Through training, standards development, knowledge exchange, and study visits to hydrogen frontrunners across Europe, Western Macedonia is turning European cooperation into practical capacity and long-term regional value.`,
    tags: [`Just Transition`, `Knowledge Exchange`, `Training & Reskilling`, `Standards & Policy`, `Replication`],
    // three photos CluBE supplied for the region's energy landscape, auto-rotating
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
      id: `clube`, name: `CluBE`, logo: `clube.png`,
      role: `Cluster of Bioeconomy and Environment of Western Macedonia. The region's sole Hy2Market partner, and its link to the wider European hydrogen knowledge exchange.`,
      bodyHtml: `<p>A non-profit regional cluster based in Kozani, established by local actors and stakeholders to promote synergies, driving bioeconomy and green hydrogen innovation across Western Macedonia through collaboration, research, training, stakeholder engagement, capacity building, knowledge transfer, R&amp;D and business development. CluBE is appointed as the official national contact point for Greece in the European Hydrogen Observatory and a member of Hydrogen Europe. CluBE represents the region as its only Hy2Market partner.</p>`,
      logoHtml: `<span class="logo-word">CluBE</span>`
    }
  ],

  toc: [
    { id: `toc-overview`, label: `The opportunity` },
    { id: `toc-region`, label: `The region` },
    { id: `toc-knowledge`, label: `Knowledge exchange` },
    { id: `toc-solutions`, label: `How CluBE contributed` },
    { id: `toc-system`, label: `The regional hydrogen landscape` },
    { id: `toc-lessons`, label: `Lessons learned` },
    { id: `toc-outcomes`, label: `The outcomes` }
  ],

  // Knowledge exchange promoted ahead of "how CluBE contributed" — see template.js note above.
  sectionOrder: [`overview`, `region`, `knowledge`, `solutions`, `system`, `lessons`, `outcomes`],

  downloadHref: `#`,

  overview: [
    { tone: `yellow`, label: `THE CHALLENGE`, text: `Western Macedonia is a transition region undergoing an energy transformation as it moves away from its long-standing dependence on lignite and towards a decarbonised energy system. The main challenge is not only the absence of hydrogen infrastructure, but the need to integrate hydrogen into a broader regional energy and economic transition. The region does not yet have a mature hydrogen value chain, established production capacity or a strong base of existing end users. In particular, large-scale end-use industrial applications remain limited because the region does not host the concentration of heavy industries, such as steel, cement or refineries, that could provide immediate and continuous hydrogen demand. At the same time, Greece's national hydrogen landscape is still evolving, with the relevant policy and regulatory framework not yet maturely established. This creates uncertainty, but also an opportunity for Western Macedonia to shape a hydrogen pathway tailored to its transition needs, regional assets and future economic development.` },
    { tone: `black`, label: `THE APPROACH`, text: `As Western Macedonia lays the foundations for its emerging hydrogen economy, CluBE has utilized Hy2Market to strengthen the region's readiness for future deployment, rather than building infrastructure of its own within Hy2Market's timeframe. Its activities include mapping training needs across the hydrogen value chain, contributing regional data to support the consortium's assessment of suitable roll-out opportunities, participating in European standards and policy work, and building strong connections with more developed regions through study visits and knowledge exchange. As an emerging hydrogen region, Western Macedonia is also interested in assessing the potential of replicating relevant project activities, results and innovations, drawing on the experience, feedback and best practices of regions with more advanced hydrogen infrastructure and deployment. By following the project's developments closely, CluBE helps connect these outcomes with Western Macedonia's evolving regional plans, investment priorities and wider energy-transition strategy.` },
    { tone: `black`, label: `THE OUTCOME`, text: `A region that entered the project without a mature and established hydrogen infrastructure, but it is now building both the capacity and the project pipeline needed for deployment. Alongside a ready-to-use training framework, access to European standards discussions and direct links with more advanced hydrogen regions, the region is advancing several flagship initiatives. LIFE GREENH2ORN will deploy a hydrogen refuelling station in Greece — the first with on-site green hydrogen production in the country — in Kozani, supporting zero-emission municipal mobility. The Amyntaio North-1 project by Hellenic Hydrogen will be the first off-grid commercial renewable hydrogen production plant in South-Eastern Europe, with an initial capacity of 50 MW, expandable to 200 MW, while the Western Macedonia high-pressure NG pipeline by DESFA is designed to become fully hydrogen-ready. Together, these developments mark a clear shift from preparation toward implementation.` }
  ],

  region: {
    title: `The region`,
    paragraphs: [
      `Western Macedonia has been Greece's “energy heart” for generations — a lignite-mining region that once generated more than 75% of the country's electricity. That era is ending: the region's coal-fired power plants are due to close by 2028, backed by Greek government, EU, and Just Transition Mechanism funding.`,
      `The shutdown leaves a real gap to fill — both in generation capacity and in the jobs and skills built up around coal over decades. That's exactly the gap CluBE was set up to work on: a non-profit regional innovation cluster based in <strong>Kozani</strong>, the regional capital, formed to steer the local economy toward bioeconomy and green hydrogen and to help the region's workforce reskill for what comes next.`,
      `What Western Macedonia brings to that shift is real: abundant solar and wind capacity already feeding the grid, and a location that sits on one of Europe's prospective hydrogen export corridors, running from Greece up toward Western Europe. CluBE is Greece's only Hy2Market partner and the only one representing the region in the consortium — which puts it in a position to connect Greek hydrogen stakeholders to a much wider European network.`,
      `What comes next for the region is still being written, and CluBE is one of the organizations working to make sure hydrogen is part of the answer.`
    ],
    map: {
      caption: `Western Macedonia · getting ready`,
      pins: [
        { left: `46%`, top: `48%`, color: `yellow`, label: `Kozani`, sub: `· CluBE HQ` },
        { left: `68%`, top: `58%`, color: `black`, label: `Coal plants`, sub: `closing by 2028 · `, right: true }
      ]
    }
  },

  knowledge: {
    title: `Knowledge exchange`,
    intro: `Hy2Market's clearest value for Western Macedonia has been the opportunity it gave CluBE to connect with people, organisations and regions with practical experience in hydrogen development, enabling direct knowledge exchange, stronger partnerships, creation of synergies and learning from more mature hydrogen ecosystems.`,
    cards: [
      { dir: `in`, arrow: `←`, label: `LEARNING FROM`, region: `Médio Tejo`, country: `· Portugal`, text: `An informal exchange comparing experience on mobility pilots, mapping the current status of hydrogen mobility deployment in Greece and Portugal, two emerging hydrogen markets — CluBE is looking at Médio Tejo's hydrogen bus experience for lessons it can apply once its own hydrogen refuelling station is operational.` },
      { dir: `in`, arrow: `↔`, label: `IN PROGRESS`, region: `Netherlands & Austria partners`, country: ``, text: `CluBE is in active conversations with the project consortium, including hydrogen partners in the Netherlands and Austria, to explore waste-to-hydrogen pathways and the conversion of sewage sludge and other residual streams into renewable hydrogen. This closely aligns with one of CluBE's strategic priorities: assessing the potential to establish a biorefinery in Western Macedonia that could support regional resource valorisation, circular-economy development and future hydrogen production.` }
    ]
  },

  solutions: {
    title: `How CluBE contributed`,
    intro: `Not a built technology — three work strands where CluBE fed its regional expertise into Hy2Market's consortium-wide efforts. Open each to see the detail.`,
    drawers: [
      {
        title: `Knowledge exchange & training guidelines`,
        subtitle: `Turning years of hands-on hydrogen training experience into a Europe-wide playbook.`,
        thumbGrad: `linear-gradient(135deg,#2c3138,#15171b)`,
        tex: 120,
        photoCaption: `Training guidelines · knowledge exchange`,
        body: `CluBE contributed to Hy2Market's training guidelines Deliverable (D6.3) and Whitepaper — desk research mapping the hydrogen skills landscape and training opportunities across some of the consortium's regions, benchmarked against Western Macedonia's own, developing key insights and practical recommendations for hydrogen training and analyzing consortium insights on hydrogen skills development. CluBE drew directly on its experience as a partner in the GreenSkillsforH2 (European Hydrogen Skills Alliance) Erasmus+ project — including the successful organization and implementation of four annual Hydrogen Summer ScH2ools and other training formats, such as masterclasses and technical seminars, in Western Macedonia — to help define the different training formats the guidelines recommend, tailored to what different hydrogen professions actually need, from safety officers and technical staff to project managers.` +
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
        body: `CluBE's contribution focused on supplying regional data and supporting roll-out evaluation rather than conducting standalone modelling or simulations. As part of Task 4.3 – Evaluation and Roll-out, CluBE contributed to Hy2Market's evaluation and roll-out work by providing regional technical data and sharing plans and projects regarding CO₂ capture and utilization, renewable energy capacity, and green hydrogen potential in Western Macedonia and Greece more broadly, feeding the consortium's evaluation of where hydrogen roll-out is most viable across its regions. This data feeds into Deliverable D4.5 – Report Roll-out. D4.5 is due in October 2026 (M45) and is not expected to be public yet.`
      },
      {
        title: `Standards and policy input`,
        subtitle: `Getting Greek hydrogen stakeholders a voice in Europe's emerging standards conversation.`,
        thumbGrad: `linear-gradient(135deg,#26424a,#11272d)`,
        tex: 90,
        photoCaption: `Standards & policy input`,
        body: `When the consortium needed input on hydrogen regulations and standards from across its countries, CluBE acted as the bridge to Greece — distributing the questionnaire on hydrogen regulations and standards to national and regional hydrogen players, industries and stakeholders, as part of Task 6.2 – Standardisation and Regulation, led by WIVA P&amp;G. Results gathered by all countries were later compiled and presented across the consortium. The work is expected to feed into Deliverable D6.2, due in December 2026 (M47) — a strategy paper to be presented to the European Commission and EU policy makers, as well as national and regional authorities, to accelerate the implementation of hydrogen solutions in Europe. D6.2 is due in December 2026 (M47), and the output is not expected to be publicly citable yet.`
      }
    ]
  },

  system: {
    title: `The regional hydrogen landscape`,
    branchLabel: `REGIONAL MOMENTUM`,
    intro: `A hydrogen refuelling station, a 50 MW electrolyser, a hydrogen-ready pipeline, and the industry and strategic relationships CluBE has built around them — the real momentum in Western Macedonia that Hy2Market's work is preparing the region to meet.`,
    disclaimer: `* Not a Hy2Market deliverable — regional momentum shown for context.`,
    branches: [
      { id: `greenh2orn`, name: `LIFE GREENH2ORN*`, sub: `H₂ refuelling station in Greece and its first with on-site green hydrogen production`, title: `LIFE GREENH2ORN — hydrogen refuelling station, Kozani` },
      { id: `northone`, name: `North-1*`, sub: `50 MW electrolyser · Hellenic Hydrogen`, title: `North-1 — 50 MW electrolyser, Amyntaio` },
      { id: `pipeline`, name: `High-Pressure Natural Gas Pipeline to Western Macedonia*`, sub: `Inaugurated May 2026 · up to 100% H₂-ready`, title: `Existing pipeline, fully compatible with up to 100% hydrogen` },
      { id: `consulting`, name: `DEPA Commercial's Green Hydrogen Strategy*`, sub: `Hydrogen strategy consulting`, title: `DEPA Commercial's Green Hydrogen Strategy — CluBE's advisory role` }
    ],
    nodeData: {
      greenh2orn: { title: `LIFE GREENH2ORN`, tag: `LIFE-funded · Municipality of Kozani`, body: `A LIFE-funded project building a hydrogen refuelling station in Greece — and its first with on-site green hydrogen production. Coordinated by the Municipality of Kozani; currently in the land-securing and construction-planning phase. End use: municipal fleet vehicles, plus private vehicles for the project's consortium partners. Timeline: September 2024 – August 2029 (60-month project). Capacity: an MW-scale electrolysis plant for green hydrogen production for mobility use. Partners: Municipality of Kozani, DEPA Commercial S.A., European Dynamics, University of Western Macedonia, DIADYMA S.A. Waste Management of Western Macedonia, CluBE, Acea Infrastructure S.p.A., B&T Composites S.A.` },
      northone: { title: `North-1`, tag: `Hellenic Hydrogen`, body: `A 50 MW electrolyser project coordinated by Hellenic Hydrogen, which has received funding from the EU's Just Transition Fund. It is sited in Amyntaio, Western Macedonia. Approval is expected in the coming months, with a target to complete the facility by the end of 2027. Initial capacity of 50 MW, expandable up to 200 MW.` },
      pipeline: { title: `High-Pressure Natural Gas Pipeline to Western Macedonia`, tag: `Existing infrastructure`, body: `An existing pipeline in the region already built to be fully compatible with the transport of up to 100% hydrogen. Plans call for injecting North-1's green hydrogen output once both projects are operational — a step still a few years out. 157 km, operated by the Hellenic Gas Transmission System Operator S.A. (DESFA).` },
      consulting: { title: `DEPA Commercial's Green Hydrogen Strategy`, tag: `Optional · outside Hy2Market's scope`, body: `CluBE has collaborated with and provided strategic consulting services as a technical advisor to DEPA Commercial S.M.S.A. (Greece's national natural gas supply company, and future owner of the LIFE GREENH2ORN hydrogen refuelling station) on the formulation of its green hydrogen strategy, supporting the integration of European policy frameworks, regulatory considerations, and market and technology insights into the company's strategic planning. This collaboration further strengthens CluBE's role as a trusted technical partner in hydrogen and the energy transition, contributing to the future energy landscape in Greece.` }
    }
  },

  lessons: {
    title: `Lessons learned`,
    leadHtml: `The clearest lesson CluBE takes from Hy2Market is that <span class="mark">interregional collaboration is essential</span>. It allows emerging and less developed hydrogen regions such as Western Macedonia to learn from more mature regions through knowledge exchange, best practices and proven approaches to hydrogen deployment.`,
    bullets: [
      `Renewables are already abundant in Western Macedonia — solar and wind capacity is growing fast — but without a national commitment to hydrogen investment, the region can't yet follow the more mature regions it has been studying.`,
      `There's no local industrial offtake to build around, unlike Upper Austria or Sicily, which leaves mobility — and, longer-term, hydrogen export along a Greece-to-Germany corridor — as the region's most realistic paths.`,
      `Training isn't one-size-fits-all: a hydrogen safety officer and a hydrogen project manager need entirely different curricula, a distinction that directly shaped how CluBE structured its contribution to the training guidelines.`
    ]
  },

  outcomes: {
    title: `The outcomes`,
    stats: [
      { tone: `yellow`, n: `Contribution to three deliverables/activities`, l: `contributed to — training guidelines, regional roll-out data, and a standards questionnaire` },
      { tone: `grey`, n: `Training framework`, l: `multi-format, ready-to-deploy for different target audiences (students, occupational profiles)` },
      { tone: `grey`, n: `EU policy channel`, l: `live input into the emerging hydrogen standards conversation` },
      { tone: `black`, n: `Interregional hydrogen connections & synergies`, l: `contacts across Europe's more mature hydrogen regions, built through study visits and exchanges` }
    ],
    narrative: `By the numbers, Western Macedonia's Hy2Market story isn't about megawatts or kilometres of pipe — it's contributions banked for later: input across three fronts — training guidelines, regional roll-out data, and a standards questionnaire — a multi-format training framework ready to deploy once national investment arrives, and a live channel into the EU's emerging hydrogen policy conversation. The bigger outcome is relational: a network of contacts across Europe's more mature hydrogen regions that CluBE enriched and strengthened through the project, built through study visits and knowledge-exchange meetings.`,
    pending: [
      { n: `371`, l: `A total number of 371 participants were engaged across six training programmes implemented by CluBE in Western Macedonia in the frame of GreenSkillsforH2 and H2VE projects` },
      { n: `29`, l: `Greek hydrogen stakeholders and industrial companies provided with Hy2Market's regulations and standards questionnaire for their input` }
    ]
  },

  quotesEyebrow: `IN THEIR WORDS`,
  quotes: [
    { text: `In Western Macedonia, the transition from lignite to clean energy has created both opportunities and gaps in the workforce. While many workers have strong energy backgrounds, almost none had prior exposure to hydrogen technologies. Through Hy2Market and other initiatives we launched targeted upskilling training programs with universities and training centers, helping to build a regional hydrogen skills ecosystem. The project has been key in linking local training to European market needs.`, name: `Nikolaos Ntavos`, role: `Co-Founder & Manager, CluBE` },
    { text: `Hy2Market has shown that the hydrogen transition depends not only on technology and infrastructure, but also on effective interregional cooperation. By connecting emerging regions such as Western Macedonia with more mature hydrogen ecosystems, the project has provided direct access to practical experience and lessons from real implementation. This interregional exchange has been valuable for identifying common challenges, understanding what works in practice and bringing relevant knowledge and best practices into our own regional transition, while contributing to a more integrated European hydrogen value chain.`, name: `Eleni Papista`, role: `Head of Clean Technologies and Hydrogen, CluBE` }
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
