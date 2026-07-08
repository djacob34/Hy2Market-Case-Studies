# # Hy2Market Upper Austria Case Study

_Started 2026-06-28 13:43 UTC_

---

## User

# Design prompt — Hy2Market case study detail page

> Paste everything below the line into Claude (design/prototype mode). It specifies the layout, the interaction model, and is pre-filled with real Upper Austria content so the prototype reads like a finished page, not lorem ipsum. Figures marked *(confirm)* are not yet verified by the partner — keep them but visually they can be treated as final.

---

## ROLE & GOAL

Design and build a **responsive, single-page HTML/React prototype** of a **case study detail page** for **Hy2Market**, an EU-funded (ERDF I3) interregional hydrogen project. This is the template that all ten regional case studies will use, so build it as a reusable layout — but populate it fully with the **Upper Austria** case study so it reads as a real, finished page. Make it feel like an award-winning industrial-storytelling page (think Awwwards energy sites): confident, editorial, technically credible, human.

## BRAND & VISUAL DIRECTION

Match the official Hy2Market brand exactly, as defined in the project Figma. Use these design tokens:

**Colour**
- Brand yellow: `#FFED00` (primary accent — section markers, key stats, buttons, hover/active states, the hero theme)
- Black: `#000000` (typography on light/yellow; full-bleed dark sections)
- White: `#FFFFFF` (canvas; logo tiles)
- Three approved theme treatments — use them deliberately: **yellow bg / black text**, **white bg / black text**, **black bg / white text**. Default the page to white-canvas/black-text; use a yellow block for the hero and a black block for one high-impact section (e.g. the integration diagram).

**Typography**
- Typeface: **Inter Tight** throughout.
- Headings: Inter Tight SemiBold, large and tight — hero title ~56–65px, `letter-spacing: -1%` (~-0.65px), `line-height: 1` (none).
- Body/labels: Inter Tight Regular/Medium, ~18–24px, `line-height: 1.1`, `letter-spacing: -1%`.

**Brand motifs (recreate these)**
- **Curved-arc line motif:** a thin sweeping arc/swoosh in the top-right corner of the hero (and reusable as a section divider) — the board's signature decoration. Render as an inline SVG curve.
- **Hy2Market wordmark** top-right of the hero.
- **List style:** small filled **circular bullets (~18px)** connected by a thin **vertical line** down the left edge — use this for the sidebar meta list and any vertical detail lists, echoing the event-card date/time/format list.
- **Logo tiles:** partner logos sit in **white tiles with a subtle backdrop-blur**, evenly spaced.

**General**
- Generous white space; sharp, engineering-grade hierarchy — confident, not playful.
- Photography: real industrial imagery (electrolysers, steel plant, trailers, pipework). Tasteful placeholders where none specified.
- Subtle scroll-reveal animation; motion aids comprehension, never decorates.

## OVERALL LAYOUT

A **two-column body** beneath a full-width hero:
- **Left column: a sticky sidebar** that stays in view the whole scroll (region, partners, value-chain part, capacity, share links, download button).
- **Right column: the main narrative**, ~70% width, containing the summary box, video, and Body sections 1–7.
- On mobile, the sidebar collapses to a compact card pinned under the hero.

---

## SECTION-BY-SECTION SPEC (with Upper Austria content)

### HERO (full width)
- **Background image:** voestalpine steel plant / electrolyser in Linz (placeholder ok).
- **Eyebrow:** `PRODUCTION · UPPER AUSTRIA`
- **Title:** *From Steel to Green: Building Austria's End-to-End Hydrogen Value Chain*
- **Description (1–2 sentences):** Upper Austria isn't promising a hydrogen future — it's already built one. Around Europe's largest industrial green-hydrogen pilot in Linz, Hy2Market is extending a working electrolyser into a complete value chain: compression, purification, storage and distribution.
- **3 stat blocks (large number + label):**
  1. **6 MW** — PEM electrolyser, operational since 2019
  2. **1,200 m³/h** — green hydrogen output
  3. **World-first** — geological underground H₂ storage *(Gampern, Upper Austria)*
- **Partner logos (up to 6):** voestalpine · VERBUND · Siemens Energy · K1-MET · RAG Austria · WIVA P&G
- **Tags (pills):** Green hydrogen · Electrolysis · Industrial decarbonisation · Steel · Storage · Production

### STICKY LEFT SIDEBAR (persists down the whole page)
- **Region:** Upper Austria (Linz region)
- **Partners (text list):** WIVA P&G (lead) · voestalpine · VERBUND · Siemens Energy · K1-MET · RAG Austria · AIT · Process Optimal
- **Value chain part:** Production *(paired with Asturias)*
- **Capacity:** 6 MW electrolyser · 1,200 m³/h · purified to Grade 5.0 · trailer-filled to 700 bar
- **Share:** LinkedIn, X, copy-link icons
- **Button:** ⬇ Download case study (PDF)

### SUMMARY BOX (top of right column, boxed/shaded panel)
Three labelled blocks side by side (stack on mobile):
- **The challenge —** A 6 MW electrolyser was already producing green hydrogen for steelmaking in Linz, but the output was locked to a single industrial use: low-pressure, single-offtaker, no way to reach mobility or other industries.
- **The innovation —** Hy2Market funded the missing links in the chain — multi-stage compression, purification to Grade 5.0, and a Renewable Hydrogen Station with trailer distribution — turning a captive supply into a regional hydrogen network.
- **The outcome —** A replicable, end-to-end production blueprint: from renewable electrons to certified hydrogen delivered across Austria, with TRL raised from 6–7 to 9.

### VIDEO PLACEMENT (below summary box)
16:9 embed block, captioned: *"Gregor Offenthaler, Senior Project Manager, WIVA P&G — on building Austria's hydrogen value chain."*

### BODY 1 — THE REGION (rich text + map)
Rich-text describing Upper Austria as one of Europe's most advanced hydrogen regions and its industrial heartland around Linz; voestalpine as the anchor asset; the spread of activity from Linz (production) to Gampern (storage) to Leoben (methanation research). **Include a map placement** marking Linz, Gampern and Leoben.

### BODY 2 — THE OPPORTUNITY (rich text)
The strategic insight: Upper Austria's advantage is that it is *expanding what already exists* rather than starting from scratch. The H2FUTURE pilot (VERBUND-coordinated; voestalpine, Siemens Energy, K1-MET, Austrian Power Grid, TNO) gave the region a working electrolyser and 500+ tonnes of green hydrogen experience. Hy2Market's role is to unlock that supply for the wider economy.

### BODY 3 — THE SOLUTIONS (accordion drawers)
Intro line, then **three accordion drawers**. Each closed drawer shows: title, one-line subtext, small thumbnail photo. **On open:** the drawer expands, the photo enlarges, and a rich-text field reveals the detail — **ending in two stat boxes** and an **optional tertiary CTA link**.

1. **Compression** — *Lifting low-pressure hydrogen to usable, transportable pressures.*
   - Detail: The electrolyser outputs hydrogen at low pressure. Multi-stage compressor stations fill medium-pressure storage tanks and charge tube trailers up to 700 bar, with VERBUND as infrastructure partner alongside voestalpine.
   - Stat boxes: **700 bar** trailer-fill pressure · **Multi-stage** compression *(capacity to confirm)*
   - CTA: → Read the compression deliverable
2. **Purification** — *From industrial-grade to mobility-grade hydrogen.*
   - Detail: Purification upgrades the hydrogen to **Grade 5.0 (99.999%)**, the quality required for fuel-cell mobility and sensitive industrial uses — opening offtake markets the raw electrolyser output could never serve.
   - Stat boxes: **99.999%** purity (Grade 5.0) · **New markets** mobility + industry
   - CTA: → What Grade 5.0 unlocks
3. **Refuelling & distribution** — *A Renewable Hydrogen Station and a fleet of trailers.*
   - Detail: The Renewable Hydrogen Station (RHS) enables on-site refuelling, while tube trailers distribute hydrogen to offtakers across Austria and beyond — converting a single plant into a distribution hub.
   - Stat boxes: **RHS** on-site refuelling · **Tube-trailer** regional distribution *(offtaker count to confirm)*
   - CTA: → Explore the distribution model

### BODY 4 — INTEGRATION (interactive system diagram)
An **alternate, visual module** (distinct from the accordions) that shows how the technologies work together as one system. Lay out a left-to-right flow diagram:

**Renewable power → 6 MW PEM electrolyser → Compression → Purification (Grade 5.0) → [branches]**
- → **Underground storage** (RAG, Gampern porous sandstone)
- → **Renewable Hydrogen Station / tube trailers**
- → **Steel decarbonisation** (voestalpine)
- → **Mobility** (fuel-cell vehicles, buses)
- → **Methanation research** (K1-MET / TU Leoben)

Each node has a **hover state** (highlights + short tooltip). **On click**, open a larger **popup/modal** with a fuller description, e.g.:
- *Electrolyser:* 6 MW PEM, Siemens Energy, operational at the Linz steel plant since November 2019; up to 1,200 m³/h; 500+ tonnes produced in H2FUTURE.
- *Underground storage:* World's first geological hydrogen storage in porous sandstone, Gampern, Upper Austria (RAG, Underground Sun Storage 2030); ~500,000 m³ stored across full cycles; injection-grade purity.
- *Methanation:* K1-MET / TU Leoben use the hydrogen for methanation research, converting H₂ into synthetic methane.

### BODY 5 — THE PROCESS (5-year timeline)
A horizontal timeline module showing project development with a "you are here" marker:
- **2018** — Green light for the world's largest industrial hydrogen pilot in Linz
- **Nov 2019** — 6 MW PEM electrolyser comes online; H2FUTURE production begins
- **2021–22** — 500+ tonnes of green hydrogen produced; offtake proven for steel
- **2023** — World-first geological underground hydrogen storage demonstrated at Gampern
- **2023–25 (Hy2Market)** — Compression, purification and RHS built out; value chain extended
- **2026** — End-to-end chain operational; TRL reaches 9; blueprint shared with peer regions *(you are here)*

### BODY 6 — LESSONS LEARNED (rich text)
Austria as a "more developed" region sharing hard-won expertise: the central lesson is **identify your offtakers before you build infrastructure**. Concrete example: WIVA P&G advised Constanța (Romania) on feasibility studies for a Danube hydrogen hub, steering them to confirm demand first. Knowledge flows both ways — Upper Austria learns mobility demonstration from Médio Tejo (Portugal) while offering production and renewable-capacity expertise in return.

### BODY 7 — THE OUTCOMES (rich text + stat strip)
Close on impact. A consistent stat strip plus a short narrative:
- **TRL 6–7 → 9** across the production technologies
- **500+ tonnes** green hydrogen produced to date
- **Grade 5.0** hydrogen now reaching mobility + new industrial offtakers
- **World-first** underground storage securing long-term system resilience
Narrative: Upper Austria now offers Europe a working, replicable model for turning a single industrial electrolyser into a regional hydrogen economy — and a playbook other Hy2Market regions can follow.
*(Volumes distributed, number of offtakers and CO₂ avoided are pending partner confirmation — leave styled placeholders.)*

---

## INTERACTION SUMMARY (build these)
- Sticky left sidebar through full scroll; collapses on mobile.
- Body 3: accordion drawers — photo enlarges on open, reveals rich text, ends with two stat boxes + optional CTA.
- Body 4: flow diagram with node hover states + click-to-open detail modals.
- Body 5: horizontal timeline with a current-position marker.
- Smooth scroll-reveal on section entry.

## OUTPUT
A single self-contained file (React + Tailwind preferred, or HTML/CSS/JS). No external data calls. Use placeholder images where none specified. Prioritise polish on the hero, the accordion drawers (Body 3) and the integration diagram (Body 4) — those are the showcase moments.

## Assistant

_[tool: list_files]_

The design system is empty, but the brief is fully self-contained with all brand tokens. I'll build the Upper Austria case study page directly as a Design Component, in chunks to keep each write small.

Let me set up the todo list and write the skeleton (logic + hero + sidebar + summary).

_[tool: update_todos]_

_[tool: set_project_title]_

_[tool: dc_write]_

Skeleton done. Now Body 1 (region + map) and Body 2 (opportunity).

_[tool: dc_html_str_replace]_

Now Body 3 — the accordion drawers.

_[tool: dc_html_str_replace]_

Now Body 4 — the interactive integration diagram (black showcase section) plus the click-to-open modal.

_[tool: dc_html_str_replace]_

Now the timeline (Body 5), lessons (Body 6), outcomes (Body 7), and the node modal.

_[tool: dc_html_str_replace]_

_[tool: update_todos]_

Let me check the rendered output before verification.

_[tool: show_html]_

_[tool: ready_for_verification]_

Built the full Upper Austria case study page as a single Design Component, populated with all the real content from the brief.

What's in it:
- **Yellow hero** with arc motif, wordmark, eyebrow, title, tags, and the 3 stat blocks; **black partner-logo band** with blur tiles.
- **Sticky left sidebar** (region, partners, value-chain part, capacity, share icons + copy-link, download button) using the circular-bullet/vertical-line motif.
- **Summary box**, captioned 16:9 video, then Bodies 1–7: region + pinned map (Linz/Gampern/Leoben), opportunity, **accordion drawers** (open to reveal photo + rich text + two stat boxes + CTA), the **black interactive integration diagram** (hover-highlight nodes, click for detail modals), the **5-year timeline** with a "you are here" marker at 2026, lessons, and outcomes with styled placeholders for the pending figures.

Two notes: images are intentional industrial-texture placeholders (drop in real photos when ready), and the layout is tuned for desktop — the mobile sidebar-collapse can be added if you want me to take it there.

## User

the hero should be white background, with only yellow accents. 

The project partners bar should be logos, not names

The floating bar on the left should be sticky on scroll

The process I want as a carousel and larger font size

Reference the hy2market website: hy2market.eu for stylings too so it feels continuous

## Assistant

I have the brand context. Let me grab the site's actual corner-decoration motif to make it feel continuous.

_[tool: read_file]_

_[tool: web_fetch]_

_[tool: web_fetch]_

Now making the edits. First, the carousel logic:

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

Now fix the sticky bug (remove `overflow-x:hidden`) and rebuild the hero as white with yellow accents:

_[tool: str_replace_edit]_

Now the partner logos — replacing plain names with styled logo lockups in white tiles:

_[tool: str_replace_edit]_

Now convert the process timeline into a carousel with larger fonts. Let me read the current Body 5:

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

All four changes are in: white hero with yellow accents, styled partner logos, sticky-sidebar fix (removed the `overflow-x:hidden` ancestor that was breaking it), and the process as a larger-font carousel with prev/next controls.

_[tool: ready_for_verification]_

Done. Summary of the changes:

- **Hero** is now white with yellow accents only — yellow corner-arc motif, a yellow underline on "Hydrogen," yellow eyebrow dot and stat tick-marks.
- **Partner bar** now shows styled logo lockups (voestalpine, VERBUND, Siemens Energy, K1-MET, RAG Austria, WIVA P&G) in white tiles instead of plain names. These are typographic approximations — drop in the official SVGs when you have them.
- **Sticky sidebar** now actually sticks on scroll (an ancestor `overflow` rule was silently disabling it).
- **The process** is a swipeable carousel with larger 20px body text and prev/next controls, "you are here" highlighted at 2026.

I also nudged styling toward hy2market.eu's feel (corner-arc decoration, bullet/line motif). One note: the partner marks are stylized, not the real brand files — swap them in for pixel accuracy.

## User

Found issues — fixing…

## Assistant

The ref isn't attaching. Switching to id-based lookup:

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

Carousel arrows now use a direct id lookup instead of the ref. Fixed.

_[tool: ready_for_verification]_

Fixed — the carousel prev/next arrows now scroll the track via a direct `getElementById` lookup. Everything else from the verifier passed.

## User

I liked the timeline style before - not cards, but a linear approach, connecting the dots in a line. Match the website stylings exactly, CTAs, outline stroke, eyebrow styling

## Assistant

Let me pull the site's actual stylesheet to match CTAs, strokes, and eyebrow styling exactly.I can only match what's observable from the site (I can't fetch its CSS directly), so I'll align to its signature patterns: the dash-prefixed "– Label" CTAs/eyebrows and thin black outline strokes, and restore the linear connect-the-dots timeline (kept scrollable with the arrows).

Let me rebuild the timeline as linear dots-on-a-line:

_[tool: read_file]_

_[tool: web_fetch]_

_[tool: str_replace_edit]_

Now update the CTAs to the site's dash-prefixed outlined-stroke style:

_[tool: str_replace_edit]_

Update the hero eyebrow to the site's dash lead-in style:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Restored the linear connect-the-dots timeline (now scrollable with the arrows), switched CTAs to the site's dash-prefixed outlined-stroke pills, and matched the eyebrow to the site's dash lead-in.

_[tool: ready_for_verification]_

Done. The process is back to a linear connect-the-dots timeline on a single line (larger 18–20px type, still scrollable via the arrows), CTAs now use the site's dash-prefixed outlined-stroke pills with yellow hover, and the hero eyebrow uses the dash lead-in to match the website.

One caveat I'll flag again: I'm matching the site's *observed* patterns (dash labels, thin black strokes, yellow hover) rather than its exact CSS — I can't pull the live stylesheet. If you can share the site's button/eyebrow CSS or a screenshot, I can tighten it to pixel-exact.

## User

here's the CSS from the website: h5 {
	margin: 0;
	padding: 0;
	font-size: 14pt;
	line-height: 22pt;
	font-family: 'Inter', sans-serif;
	font-weight: 600;
	color: #000;
}

h5 a {
	font-size: 14pt;
	text-decoration: none !important;
}

.col-2 a {
	background-color: #333;
	color: #fff;
	padding: 16px;
	border-radius: 64px;
	text-decoration: none !important;

}

.col-2 a:hover {
	background-color: #555;
}

.subscribe_btn:hover {
	background-color: #fff89b !important
}

.subscribe_btn {
	background-color: #ffed00 !important;
	padding: 1em;
	border-radius: 4px;
	margin-bottom: 2em;
	display: inline-block;
}

.subscribe_btn a {
	background-color: initial;
	color: #000;
	padding: 0;
	border-radius: 0;
}

.subscribe_btn a:hover {
	background-color: initial;
}

ul {
	max-width: 800px;
}

h3.ea-header {
	padding-top: 0;
}

## Assistant

That CSS is gold — and it tells me the dashes I saw were markdown artifacts, not real design. The site actually uses two button styles: dark-grey pills (`#333`, radius 64px, hover `#555`) and the yellow subscribe button (`#ffed00`, radius 4px, hover `#fff89b`). Let me match those exactly.

_[tool: str_replace_edit]_

CTAs now match the site exactly — dark `#333` pills (radius 64px, hover `#555`) for the tertiary links and the yellow subscribe-button style (radius 4px, hover `#fff89b`) for the download button.

_[tool: ready_for_verification]_

Matched the real CSS: tertiary CTAs are now dark `#333` pills with 64px radius and `#555` hover, and the download button uses the subscribe-button treatment (`#ffed00`, 4px radius, `#fff89b` hover). The dashes are gone — those were markdown artifacts from the page fetch, not actual design.

## User

the sticky box should be aligned with the left margin of the whole page, this allows the main body be a bit wider

To advance the carousel for the process, one click to the right should just advance one item at a time, not switch all of the items in the carousel

dont need the numbers next to each body section

The knowledge exchange section can go at the bottom, doesnt belong in the lessons learned section

Leave more whitespace between the sections

## Assistant

Good, clear changes. Let me find the relevant markup.

_[tool: grep]_

_[tool: read_file]_

Making all five changes. First the structural edits (container width, remove section numbers, restructure lessons, move knowledge exchange out):

_[tool: str_replace_edit]_

Now bump section spacing (all `margin-top:84px` → `120px`) and add the Knowledge Exchange section at the bottom:

_[tool: dc_html_str_replace]_

_[tool: str_replace_edit]_

Now the carousel — advance one item per click:

_[tool: dc_js_str_replace]_

The track's first children are the connecting lines, not items — so step should be one sixth of the track width:

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

All five changes are in:

- The body now spans full page width with the sidebar flush to the page's left margin (56px, matching the hero).
- Carousel arrows advance exactly one item per click.
- Removed the 01–07 numbers from section headers.
- Knowledge exchange is now its own full-width section at the very bottom (two directional cards), out of Lessons learned.
- Increased section spacing to 120px throughout.

