# Case study navigation design

_Started 2026-06-30 14:50 UTC_

---

## User

at the bottom of the page, add a module to read the next case study that keeps the user engaged

the sticky box on the left can be a table of contents that highlights where you are in the story + the sharing links and download CTA

## Assistant

_[tool: read_file]_

_[tool: list_files]_

I have the full picture. The design vocabulary is clear (Inter Tight, `#FFED00` yellow, black, arc motifs). Let me make both changes: convert the sidebar into a scroll-spy table of contents (keeping share + download), and add an engaging "next case study" module at the bottom.

First, add anchor IDs to each section heading:

_[tool: str_replace_edit]_

Now replace the sidebar metadata block with the table of contents:

_[tool: str_replace_edit]_

Now add the engaging "next case study" module at the bottom — full-bleed, matching the dark/yellow vocabulary:

_[tool: str_replace_edit]_

Now wire up the scroll-spy in `componentDidMount`:

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Both changes are in:

- **Left sticky box → table of contents.** Now an "On this page" nav listing all nine story sections; the active section highlights (black bold text + yellow accent bar) as you scroll, and clicking jumps to it. The share links (LinkedIn, X, copy) and the yellow Download CTA remain below it.
- **Next case study module** at the bottom: a full-bleed black band with a large featured "Asturias" card (the sister production region, hover-lift + arc motif) plus three smaller links to other regions in the value chain — Gampern (storage), Médio Tejo (mobility), Constanța (distribution).

All links point to `#` placeholders — swap in real case-study URLs when you have them.

## User

the activation should only come when the section is mid-screen

## Assistant

_[tool: str_replace_edit]_

Done — the active TOC item now switches only when a section heading crosses the vertical center of the screen.

## User

Save as standalone HTML: Upper Austria Case Study.dc.html

## Assistant

No code-referenced resources here — all visuals are inline SVG/CSS and fonts load via a `<link>`, which the bundler handles. I just need to add the thumbnail template, then bundle a copy.

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

The standalone file bundled cleanly with no errors. Delivering it:

_[tool: present_fs_item_for_download]_

Done — single self-contained HTML file (406 KB), works fully offline with fonts and all assets inlined.

## User

"The file is a bundled format with compressed assets — I can't read the design directly from it." - feedback on the HTML file produced

## Assistant

The bundler compresses assets into a loader shim, which makes the markup unreadable. Since this design has essentially no binary assets — just `support.js` and a Google Fonts link — I can produce a **flat, readable** standalone file instead: the design markup stays as plain HTML, with the runtime inlined directly.

_[tool: read_file]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: get_webview_logs]_

Renders clean. This version keeps all the design markup as plain, readable HTML — the runtime is inlined inwith no asset compression. The only external reference is the Google Fonts link (falls back to system fonts offline; the prior bundle inlined fonts but compressed everything, which is what made it unreadable).

_[tool: present_fs_item_for_download]_

This version's design source is directly readable as plain HTML. If you also need fonts to render offline, the earlier compressed bundle covers that — they're the two trade-offs (readable vs. fully-inlined).

## User

I need the design to match the existing hy2market website a bit better - it feels off now https://hy2market.eu/

## Assistant

Let me look at the actual site to understand its visual language.I have the structure but `web_fetch` only returns text — I need to see the actual colors, type, and motifs. Let me grab the brand's own decoration asset to read its real palette.`web_fetch` only gives me text, and the brand assets aren't directly fetchable — so I can't actually see the site's colors, type, or motif treatment, which is exactly what I'd need to match it. Rather than guess and drift further, a screenshot would let me match it precisely.

_[tool: questions_v2]_

_[tool: web_fetch]_

_[tool: web_fetch]_

## User

here is a screenshot

## Assistant

Now I can see it clearly. The real site is **light and airy** (white background, generous whitespace), with yellow used as bold solid blocks (newsletter button, highlighted card, the whole footer band) and the logo is **black "Hy / Market" with the "2" in a solid yellow circle** — not yellow text. The decorative corner arcs are very fine concentric yellow+grey lines, and photography is black & white with yellow light-trail accents.

My version leans too dark (big black bands) and the wordmark/arcs/font are off. Let me re-skin to match. First let me re-read the current state of key spots.

_[tool: grep]_

Now I'll re-skin to match: switch to the brand's friendlier grotesque (Mukta), fix the wordmark to the real lockup (black "Hy/Market" + "2" in a yellow circle), lighten the dark bands to white, make the corner arcs fine like the real ones, shift placeholder images to black-&-white with a yellow light-streak, and add the signature yellow footer band. Let me read the next-case-study block exactly first.

_[tool: read_file]_

Now I'll apply the re-skin. Batch 1 — fonts, hero topbar with the correct logo lockup, finer arcs, B&W hero image, and lightening the partner band:

_[tool: str_replace_edit]_

Batch 2 — partner chips to white-with-border (light band), and the hero image caption sits fine. Update the six chip backgrounds:

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: run_script]_

Batch 3 — recolor the next-case-study block to light via scoped replacements, and fix the thumbnail wordmark:

_[tool: run_script]_

Now add the signature yellow footer band:

_[tool: str_replace_edit]_

Let me verify the re-skin visually.

_[tool: show_html]_

Logo lockup, topbar, B&W image panel and fine arcs all match the brand now. Let me check the partner band and footer.

_[tool: multi_screenshot]_

The hero headline is a touch large in Mukta (wider metrics). Let me trim it slightly so it doesn't dominate, matching the brand's lighter headline feel:

_[tool: str_replace_edit]_

I've re-skinned the case study to match hy2market.eu. Let me hand off to verification.

_[tool: ready_for_verification]_

Re-skinned to match the real Hy2Market site:

- **Logo** now the correct lockup — black "Hy / Market" with the "2" in a yellow circle — in a clean top bar with a "Case studies / Upper Austria" breadcrumb (and a white-circle variant on the yellow footer).
- **Lightened** the heavy black bands: the partner strip and the entire next-case-study module are now white/light with bordered cards, matching the site's airy feel. The one remaining dark block (the system diagram) stays as a deliberate focal contrast, like the site's black photo cards.
- **Type** switched from Inter Tight to **Mukta**, the friendlier grotesque the site uses.
- **Corner arcs** are now fine concentric yellow+grey lines like the brand decoration, and placeholder images are **black-&-white with a yellow light-streak** echoing their photography.
- Added the signature **solid-yellow footer** with the EU "Co-funded by" emblem, addresses and policy links.

Note the standalone/readable exports still hold the previous (dark) version — regenerate those if you need them updated.

