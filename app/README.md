# Hy2Market — Case Study page

A responsive, reusable case-study detail page for Hy2Market, implemented in plain
HTML/CSS/JS (no build step). The layout is a **template**; content is supplied by a
per-region **data object**, so all ten regional case studies share one codebase.

Fully populated with the **Upper Austria** case study, recreated from the Claude
Design handoff (`../project/Upper Austria Case Study.dc.html`) and the design intent
captured in `../chats/`.

## Run it

No build, no dependencies. Serve the `app/` folder over any static server:

```bash
cd app
python3 -m http.server 8000   # then open http://localhost:8000
```

(Opening `index.html` via `file://` also works; a server is only needed so the
`?region=` query param and font CDN behave normally.)

## File layout

```
app/
  index.html            Shell: <head>, fonts, mount point (#case-study-root), script tags
  css/styles.css        All styling. Brand tokens are CSS custom properties (:root).
                        Class-based; responsive at 1180 / 1024 / 860 / 560 px.
  js/
    data/
      upper-austria.js  CONTENT for one region as a plain object (window.CASE_STUDIES[slug])
    template.js         Pure renderer: CaseStudyTemplate.renderCaseStudy(data) -> HTML string
    interactions.js     Behavior: CaseStudyInteractions.initInteractions(root, data)
    main.js             Bootstrap: pick region -> render -> wire interactions
```

`template.js` is a **pure function** (data in, HTML string out — no DOM, no side
effects), which makes it testable in Node and keeps rendering separate from behavior.

## Interactions

- **Solutions accordions** — single-open; the photo/detail/stat-boxes/CTA reveal on open.
- **System diagram** — hover highlights a node; click opens a detail modal (Esc / overlay / ✕ closes).
- **Partner logos** — hover shows a tooltip; click opens a role modal.
- **Table of contents** — deterministic scroll-spy (active = last section past a fixed
  read-line); clicking a link highlights immediately and locks the spy through the smooth scroll.
- **Process timeline** — horizontal carousel; the arrows advance exactly one step at a time.
- **Quote carousel** — prev / next / dots; scales to 1–3 quotes.
- **Copy link**, and scroll-reveal on section entry (IntersectionObserver).

Accessibility niceties beyond the prototype: real `<button>`s, `aria-expanded` on
accordions, `role="dialog"`/focus handling + Esc on modals, keyboard focus rings,
and `prefers-reduced-motion` support.

## Add another region

1. Copy `js/data/upper-austria.js` to `js/data/<slug>.js`, change the `slug` and the
   content. Keep the object shape (see the field comments in that file). Fields whose
   names end in `Html`/`html` (and `logoHtml`, map pins, arcs) intentionally carry
   markup; everything else is plain text and is HTML-escaped on render.
2. Load it in `index.html` (replace or add alongside the existing data `<script>`).
3. With more than one region registered, `main.js` selects by `?region=<slug>`
   (defaults to `upper-austria`). Swap in your own router/CMS fetch as needed.

## Notes / fidelity

- Pixel values, colours and spacing are ported from the final design file, including
  the decisions the design chat landed on: **Inter** typeface, `#FFED00` yellow on a
  white canvas, **sharp corners on all boxes** (circles remain for dots/avatars/icon
  buttons), dark `#333`/64px-radius pill CTAs, the yellow download button, the linear
  connect-the-dots timeline, and the yellow EU-funded footer.
- Photography is represented with the design's industrial-texture placeholders. Drop in
  real imagery by giving `hero.mediaCaption`'s panel / drawer thumbnails real `<img>`s
  (or background-images) in the template.
- The Inter webfont loads from Google Fonts; offline it falls back to system fonts.
