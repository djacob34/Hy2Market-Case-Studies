# Hy2Market — Case Studies

A responsive, reusable case-study site for Hy2Market, in plain HTML/CSS/JS (no
build step). One **template** renders every regional case study; content is
supplied by a per-region **data object**, so all case studies share one codebase.

- **Landing page** (`index.html`) — lists every registered case study as a card.
- **Case-study page** (`case-study.html?region=<slug>`) — renders one region from
  its data object using the shared template.

Currently live: **Upper Austria** (`case-study.html?region=upper-austria`),
recreated from the Claude Design handoff (`../project/Upper Austria Case Study.dc.html`)
and the design intent captured in `../chats/`.

## Run it

No build, no dependencies. Serve the `app/` folder over any static server:

```bash
cd app
python3 -m http.server 8000   # then open http://localhost:8000
```

(The `?region=` param needs a server to behave normally; `file://` works for the
landing page but not for switching regions.)

## File layout

```
app/
  index.html            Landing page — card grid of all case studies
  case-study.html       Detail page — renders one region by ?region=<slug>
  css/
    styles.css          Case-study (detail) styles + brand tokens (:root)
    landing.css         Landing-page-only styles (reuses the tokens above)
  js/
    data/
      upper-austria.js  CONTENT for one region: window.CASE_STUDIES[slug] = {...}
    template.js         Pure renderer: CaseStudyTemplate.renderCaseStudy(data) -> HTML
    interactions.js     Behavior for the detail page
    main.js             Detail bootstrap: pick region -> render -> wire interactions
    landing.js          Landing bootstrap: build cards from window.CASE_STUDIES
```

`template.js` is a **pure function** (data in, HTML string out — no DOM, no side
effects), which makes it testable in Node and keeps rendering separate from
behavior.

## Add a new case study

1. **Copy** `js/data/upper-austria.js` to `js/data/<your-slug>.js`.
2. **Change** `slug` to a unique value and fill in the content fields. Optionally
   add a `card: { kicker, title, blurb, tags, accent }` object to customise how
   the study appears on the landing page; otherwise the card is derived from
   `hero` + `breadcrumb`.
3. **Register** the new file by adding one `<script src="./js/data/<your-slug>.js"></script>`
   tag in BOTH `index.html` and `case-study.html`, alongside the existing region
   scripts.

That's it — the region is now reachable at `case-study.html?region=<your-slug>`
and appears automatically as a card on the landing page.
