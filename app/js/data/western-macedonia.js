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

   Visible copy stays free of internal deliverable/task/work-package codes (D6.3, Task 4.3, D4.5,
   Task 6.2, D6.2, WIVA P&G) throughout, including in the three "How CluBE contributed" drawers —
   described in plain language instead (e.g. "a strategy paper for EU policymakers due late 2026")
   while keeping the source's cautious, not-yet-public framing for the pending deliverables. CTA
   hrefs still point at the real documents (D6.3's PDF etc.) — only visible prose avoids the codes.

   2026-11-17 editorial pass: every block tightened to roughly Upper Austria's length (that page is
   the benchmark) — cards, drawers, the landscape popups and the outcomes tiles were all 2-4x too
   long and had become repetitive (the Outcome card and the landscape section both told the
   GREENH2ORN/North-1/pipeline story in full; the outcomes narrative re-stated its own stat tiles).
   Every fact, figure, name and both quotes are unchanged — only prose length and duplication.
   card.blurb was removed so the landing-page card falls back to hero.lead, same as other regions.

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
  // card.blurb intentionally omitted — landing.js falls back to hero.lead
  // when it's absent, same as every other region (keeps the two in sync
  // instead of maintaining near-duplicate copy in two places).
  card: {
    kicker: `KNOWLEDGE EXCHANGE · WESTERN MACEDONIA`,
    title: `Western Macedonia, Greece`
  },
  breadcrumb: { label: `Case studies`, href: `/`, here: `Western Macedonia` },

  hero: {
    eyebrow: `KNOWLEDGE EXCHANGE · WESTERN MACEDONIA`,
    titleHtml: `Western Macedonia prepares for <span class="hl">hydrogen</span> with training, data and standards work`,
    lead: `Western Macedonia is moving beyond lignite, and building the foundations for a hydrogen economy as it goes. Its infrastructure is still emerging, but training, standards work, and study visits to hydrogen frontrunners across Europe are turning cooperation into real regional capacity.`,
    tags: [`Just Transition`, `Knowledge Exchange`, `Training & Reskilling`, `Standards & Policy`, `Replication`],
    // three photos CluBE supplied for the region's energy landscape, auto-rotating
    // in place of a single hero shot — see hero() / .hero-slideshow in template.js.
    slideshow: [
      { src: `/assets/hero/western-macedonia-lignite-mine.jpg`, caption: `Lignite mine, Western Macedonia` },
      { src: `/assets/hero/western-macedonia-lignite-power-plant.jpg`, caption: `Lignite power plant, Western Macedonia` },
      { src: `/assets/hero/western-macedonia-pv-park.jpg`, caption: `PV Park, Kozani, Western Macedonia · toposol.gr` },
      { src: `/assets/hero/western-macedonia-wind-farm.jpg`, caption: `Askio onshore wind farm complex, Kozani, Western Macedonia · Iberdrola` }
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
    { tone: `yellow`, label: `THE CHALLENGE`, text: `Western Macedonia is moving away from decades of lignite dependence, but still lacks a mature hydrogen value chain and the heavy industry — steel, cement, refineries — that would drive demand. Greece's national hydrogen policy is still taking shape, leaving room for the region to find its own path.` },
    { tone: `black`, label: `THE APPROACH`, text: `CluBE is using Hy2Market to build the region's readiness rather than infrastructure: mapping training needs, feeding regional data into Europe-wide roll-out planning, contributing to EU standards work, and building ties with more advanced hydrogen regions through study visits — all feeding into Western Macedonia's own energy-transition plans.` },
    { tone: `black`, label: `THE OUTCOME`, text: `Western Macedonia entered the project without a mature hydrogen infrastructure. It now has a ready-to-use training framework, a seat in Europe's standards conversation, and real momentum behind LIFE GREENH2ORN, North-1 and a hydrogen-ready pipeline.` }
  ],

  region: {
    title: `The region`,
    paragraphs: [
      `Western Macedonia generated over 75% of Greece's electricity from lignite — until now. Its coal plants close by 2028, leaving a gap in jobs and skills that CluBE, a <strong>Kozani</strong>-based non-profit cluster, was set up to fill by steering the region toward bioeconomy and green hydrogen.`,
      `It brings real assets to that shift — abundant solar and wind, and a seat on one of Europe's prospective hydrogen export corridors from Greece into Western Europe. CluBE is Greece's only Hy2Market partner, linking local stakeholders to the wider European network.`
    ],
    map: {
      image: `/assets/maps/western-macedonia.png`,
      caption: `Western Macedonia · getting ready`,
      pins: [
        { left: `46%`, top: `48%`, color: `yellow`, label: `Kozani`, sub: `· CluBE HQ` },
        { left: `68%`, top: `58%`, color: `black`, label: `Coal plants`, sub: `closing by 2028 · `, right: true }
      ]
    }
  },

  knowledge: {
    title: `Knowledge exchange`,
    intro: `Hy2Market's biggest value for Western Macedonia has been connecting CluBE with people and regions already deploying hydrogen — new partnerships and real lessons learned.`,
    cards: [
      { dir: `in`, arrow: `←`, label: `LEARNING FROM`, region: `Médio Tejo`, country: `· Portugal`, text: `An informal exchange comparing hydrogen mobility pilots in Greece and Portugal — CluBE is studying Médio Tejo's hydrogen bus experience for lessons it can apply once its own refuelling station opens.` },
      { dir: `in`, arrow: `↔`, label: `IN PROGRESS`, region: `Netherlands & Austria partners`, country: ``, text: `CluBE is talking with Dutch and Austrian partners about turning sewage sludge and other residual streams into renewable hydrogen. It feeds a CluBE priority: a future biorefinery in Western Macedonia for resource recovery and hydrogen production.` }
    ]
  },

  solutions: {
    title: `How CluBE contributed`,
    intro: `Three work strands where CluBE fed regional expertise into Hy2Market's consortium-wide efforts. Open each for detail.`,
    drawers: [
      {
        title: `Knowledge exchange & training guidelines`,
        subtitle: `Turning years of hands-on hydrogen training experience into a Europe-wide playbook.`,
        thumbGrad: `linear-gradient(135deg,#2c3138,#15171b)`,
        tex: 120,
        photo: `/assets/media/western-macedonia/training.jpg`,
        photoCaption: `Training guidelines · knowledge exchange · Photo: Quilia on Unsplash`,
        body: `CluBE helped shape Hy2Market's training guidelines and its whitepaper — mapping the region's hydrogen skills gaps and needs, drawing on its own GreenSkillsforH2 programme, including four annual Hydrogen Summer Schools reaching hundreds of participants.` +
          `<ul style="line-height:1.6;margin:18px 0;padding-left:20px;">` +
            `<li style="margin:0 0 6px;">1st Hydrogen Summer ScH2ool: 78 participants</li>` +
            `<li style="margin:0 0 6px;">2nd Hydrogen Summer ScH2ool: 63 participants</li>` +
            `<li style="margin:0 0 6px;">3rd Hydrogen Summer ScH2ool: 46 participants</li>` +
            `<li style="margin:0 0 6px;">4th Hydrogen Summer ScH2ool: 78 participants</li>` +
            `<li><strong>Total: 371 participants across six training programmes</strong></li>` +
          `</ul>` +
          `<p style="margin:0;">More at <a href="https://greenskillsforhydrogen.eu/" target="_blank" rel="noopener">greenskillsforhydrogen.eu</a>.</p>`,
        ctas: [
          { label: `Read the training guidelines (D6.3)`, href: `https://hy2market.eu/wp-content/uploads/2025/11/D6.3-Final-Training-Guidelines.pdf` },
          { label: `Read the whitepaper`, href: `https://hy2market.eu/wp-content/uploads/2026/01/Hydrogen-Skills-and-Workforce-Insights-Hy2Market-White-Paper.pdf` }
        ]
      },
      {
        title: `Regional data for roll-out evaluation`,
        subtitle: `Feeding Western Macedonia's numbers into the consortium's Europe-wide roll-out picture.`,
        thumbGrad: `linear-gradient(135deg,#3a4048,#1c2026)`,
        tex: 60,
        photo: `/assets/media/western-macedonia/data.jpg`,
        photoCaption: `Regional data · roll-out evaluation · Photo: Gorilla ROI Data Connector on Unsplash`,
        body: `CluBE's role was supplying regional data, not modelling: sharing figures on CO₂ capture, renewable capacity and green hydrogen potential in Western Macedonia and Greece. That data feeds a roll-out report due across the whole consortium in late 2026, not yet public.`
      },
      {
        title: `Standards and policy input`,
        subtitle: `Getting Greek hydrogen stakeholders a voice in Europe's emerging standards conversation.`,
        thumbGrad: `linear-gradient(135deg,#26424a,#11272d)`,
        tex: 90,
        photo: `/assets/media/western-macedonia/standards.jpg`,
        photoCaption: `Standards & policy input · Photo: paws and prints on Unsplash`,
        body: `CluBE acted as Greece's bridge on hydrogen standards — distributing an EU-wide questionnaire on regulations to Greek stakeholders and industry. Results feed a strategy paper for EU policymakers and national authorities, due late 2026 and not yet public.`
      }
    ]
  },

  system: {
    title: `The regional hydrogen landscape`,
    branchLabel: `REGIONAL MOMENTUM`,
    intro: `A hydrogen refuelling station, a 50 MW electrolyser and a hydrogen-ready pipeline — the real momentum in Western Macedonia that Hy2Market's work is preparing the region to meet.`,
    disclaimer: `* Not a Hy2Market deliverable — regional momentum shown for context.`,
    branches: [
      { id: `greenh2orn`, name: `LIFE GREENH2ORN*`, sub: `H₂ refuelling station in Greece and its first with on-site green hydrogen production`, title: `LIFE GREENH2ORN — hydrogen refuelling station, Kozani` },
      { id: `northone`, name: `North-1*`, sub: `50 MW electrolyser · Hellenic Hydrogen`, title: `North-1 — 50 MW electrolyser, Amyntaio` },
      { id: `pipeline`, name: `H₂-ready pipeline*`, sub: `Inaugurated May 2026 · up to 100% H₂-ready`, title: `Existing pipeline, fully compatible with up to 100% hydrogen` },
      { id: `consulting`, name: `DEPA hydrogen strategy*`, sub: `Hydrogen strategy consulting`, title: `DEPA Commercial's Green Hydrogen Strategy — CluBE's advisory role` }
    ],
    nodeData: {
      greenh2orn: { title: `LIFE GREENH2ORN`, tag: `LIFE-funded · Municipality of Kozani`, body: `A LIFE-funded hydrogen refuelling station in Kozani — Greece's first with on-site green hydrogen production. Led by the Municipality of Kozani with partners including DEPA Commercial, European Dynamics, the University of Western Macedonia, DIADYMA, CluBE, Acea Infrastructure and B&T Composites. Serves municipal and partner fleets. September 2024–August 2029.` },
      northone: { title: `North-1`, tag: `Hellenic Hydrogen`, body: `A 50 MW electrolyser project led by Hellenic Hydrogen, funded by the EU's Just Transition Fund. Sited in Amyntaio, Western Macedonia, with approval expected soon and a target to complete by end of 2027. Capacity is expandable to 200 MW.` },
      pipeline: { title: `High-Pressure Natural Gas Pipeline to Western Macedonia`, tag: `Existing infrastructure`, body: `An existing pipeline already built to carry up to 100% hydrogen. Plans call for injecting North-1's green hydrogen once both projects are running — a few years out. 157 km, operated by DESFA, the Hellenic Gas Transmission System Operator.` },
      consulting: { title: `DEPA Commercial's Green Hydrogen Strategy`, tag: `Optional · outside Hy2Market's scope`, body: `CluBE has advised DEPA Commercial S.M.S.A. — Greece's national gas supplier and future owner of the LIFE GREENH2ORN refuelling station — on its green hydrogen strategy, helping bring European policy, regulation and market insight into the company's strategic planning.` }
    }
  },

  lessons: {
    title: `Lessons learned`,
    leadHtml: `The clearest lesson CluBE takes from Hy2Market: <span class="mark">interregional collaboration is essential</span>. It lets emerging regions like Western Macedonia learn from more mature ones through real knowledge exchange and proven approaches.`,
    bullets: [
      `Renewables are abundant and growing fast here, but without national hydrogen investment, the region can't yet follow the mature regions it studies.`,
      `With no local industrial offtake, unlike Upper Austria or Sicily, mobility — and longer-term, export along a Greece-to-Germany corridor — are the region's most realistic paths.`,
      `Training isn't one-size-fits-all — a safety officer and a project manager need entirely different curricula, which shaped how CluBE built its training guidelines.`
    ]
  },

  outcomes: {
    title: `The outcomes`,
    stats: [
      { tone: `yellow`, n: `3 work strands`, l: `training guidelines, regional roll-out data and a standards questionnaire` },
      { tone: `grey`, n: `Training framework`, l: `multi-format and ready to deploy for different audiences` },
      { tone: `grey`, n: `EU policy channel`, l: `live input into the emerging hydrogen standards conversation` },
      { tone: `black`, n: `New network`, l: `contacts across Europe's mature hydrogen regions, built through study visits` }
    ],
    narrative: `The bigger win here is relational: a network of contacts across Europe's more mature hydrogen regions, built through study visits and knowledge exchange, that CluBE can keep drawing on as its own hydrogen plans develop.`,
    baselineLabel: `By the numbers`,
    baseline: [
      { n: `371`, l: `participants trained across six programmes, under GreenSkillsforH2 and H2VE` },
      { n: `29`, l: `Greek stakeholders and companies provided with Hy2Market's regulations and standards questionnaire` }
    ]
  },

  quotesEyebrow: `IN THEIR WORDS`,
  quotes: [
    { text: `In Western Macedonia, the transition from lignite to clean energy has created both opportunities and gaps in the workforce. While many workers have strong energy backgrounds, almost none had prior exposure to hydrogen technologies. Through Hy2Market and other initiatives we launched targeted upskilling training programs with universities and training centers, helping to build a regional hydrogen skills ecosystem. The project has been key in linking local training to European market needs.`, name: `Nikolaos Ntavos`, role: `Co-Founder & Manager, CluBE` },
    { text: `Hy2Market has shown that the hydrogen transition depends not only on technology and infrastructure, but also on effective interregional cooperation. By connecting emerging regions such as Western Macedonia with more mature hydrogen ecosystems, the project has provided direct access to practical experience and lessons from real implementation. This interregional exchange has been valuable for identifying common challenges, understanding what works in practice and bringing relevant knowledge and best practices into our own regional transition, while contributing to a more integrated European hydrogen value chain.`, name: `Eleni Papista`, role: `Head of Clean Technologies and Hydrogen, CluBE` }
  ],

  next: {
    eyebrow: `CONTINUE THE STORY`,
    allHref: `/`,
    featured: {
      href: `/case-study.html?region=medio-tejo`,
      kicker: `CASE STUDY · MOBILITY`,
      title: `Médio Tejo: proving hydrogen mobility in daily public service`,
      lead: `The region Western Macedonia is watching most closely for mobility lessons. See how Médio Tejo put a hydrogen bus into nine months of real public routes.`,
      chips: [`Portugal`, `Mobility`, `Fuel-cell bus`],
      caption: `Caetano H2.City Gold · Médio Tejo`
    },
    others: [
      { href: `/case-study.html?region=upper-austria`, k: `PRODUCTION`, region: `Upper Austria`, country: `· Austria`, d: `Commissioning new hydrogen handling and piloting methanation around the H2FUTURE electrolyser in Linz.` },
      { href: `/case-study.html?region=asturias`, k: `PRODUCTION`, region: `Asturias`, country: `· Spain`, d: `A 150 MW hub built around a coal-era power plant.` },
      { href: `/case-study.html?region=netherlands`, k: `TRANSPORT`, region: `Netherlands`, country: `· NL`, d: `A flexible composite hydrogen pipeline, laid in ~two months.` }
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
