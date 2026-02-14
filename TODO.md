# Accessibility Project — TODO

---

## Current: Patrice Hero scroll effect

**Fix:** Once the user scrolls down past the hero, there should **never be a white gap below the color gradient bar**.

- **Where:** `components/PatriceHero/` — `PatriceHero.tsx`, `PatriceHero.module.css`
- **Behavior today:** When you scroll, a fixed blue “gradient” bar appears (hero bar), and a blue fill + “Patrice” / “Lumumba” text are clipped to the region below it (`.belowBarClip`). A white gap can appear below the blue gradient/bar.
- **Goal:** The blue fill should extend to the bottom of the viewport (or otherwise cover the area below the bar) so no white gap is visible at any scroll position. Adjust the blue overlay height, the clip region, or the layout so the area below the bar is always filled (e.g. blue overlay fills the full below-bar region or extends to 100vh from the bar down).

---

## What is Tilda / Tilda JS?

**Tilda** is a no-code website builder (like Wix or Squarespace). You design pages in a visual editor at [tilda.cc](https://tilda.cc); it outputs HTML, CSS, and JavaScript.

**Tilda JS** refers to the JavaScript files you get when you export a Tilda page. In this project they live in `public/pagedemo-assets/js/`:

- `tilda-scripts-3.0.min.js` — Core runtime (layout, scrolling, events)
- `tilda-blocks-2.8.js` — Block logic (T396 artboards, T280 nav, etc.)
- `tilda-zero-1.0.min.js` — Zero Block / custom block support
- `tilda-events-1.0.min.js` — Event handlers
- `tilda-animation-1.0.min.js` — Basic animations
- `tilda-animation-sbs-1.0.min.js` — Scroll-based animations
- `tilda-animation-ext-1.0.min.js` — Extended animation helpers
- `tilda-fallback-1.0.min.js` — Polyfills / fallbacks

**It is not a public npm package.** It is proprietary code shipped with Tilda exports. It expects specific HTML structure (e.g. `data-record-type`, `data-elem-id`, classes like `t396`, `t396__artboard`) and manipulates the DOM for:

- Scroll-linked positioning and parallax
- Responsive layout (grid, artboard)
- Menu / nav behavior
- Lazy loading
- Fade-in / step-by-step animations

You cannot “use Tilda” as a general-purpose library in other projects. It only works with HTML exported from Tilda. Moving to React components means gradually replacing this dependency with your own logic and CSS.

---

## Migration to React Components

**Goal:** Turn the current Tilda HTML injection into React components so you can:
- Break effects into understandable pieces
- Learn and control the CSS
- Make changes without depending on the original Tilda design

---

### Phase 1: Document & Extract

- [x] **Map record IDs to sections** — List each `rec392128XXX` with a short description (e.g. `rec392128445` = nav, `rec392128457` = horizontal strip). Reference: `accessibility-overrides.css` quick reference. → `RECORD-IDS.md`
- [x] **Identify CSS dependencies** — Which styles come from `tilda-blocks-2.14.css`, `tilda-grid-3.0.min.css`, and `accessibility-overrides.css`? Create a simple map (e.g. in `STYLE-MAP.md`). → `STYLE-MAP.md`
- [x] **Extract reusable `TildaHtmlRenderer`** — Move the HTML + script-injection logic from `AccessibilityContent.tsx` into a generic `components/TildaHtmlRenderer.tsx` that accepts an HTML string and runs inline scripts. Use it from `AccessibilityContent` so the pattern is reusable.
- [x] **Add section components (wrapper only)** — Create `components/sections/NavAndHero.tsx`, `IntroAndKeyGuides.tsx`, `WcagSection.tsx`, `ResourcesAndRest.tsx` that each load one part file and pass it to `TildaHtmlRenderer`. No JSX rewrite yet; just organization. → Section getters in `components/sections/` (NavAndHero, IntroAndKeyGuides, WcagSection, ResourcesAndRest); page composes HTML and passes to single `TildaHtmlRenderer`.

---

### Phase 2: Replace One Section with React

- [ ] **Pick a simpler section** — Start with the intro block (`rec392128449`) or Key guides (`rec392128451`) — fewer animations.
- [ ] **Rewrite as JSX** — Build the same structure in React (headings, paragraphs, links) using semantic HTML.
- [ ] **Port styles to CSS modules or Tailwind** — Copy the relevant styles into a module (e.g. `IntroBlock.module.css`) or Tailwind classes. Remove reliance on Tilda classes for that section.
- [ ] **Swap in the new component** — Replace the HTML string for that part with the new React component. Verify layout and behavior.
- [ ] **Document prompts for changes** — Add a short note (in this TODO or a `PROMPTING.md`) on how to describe CSS/layout changes for AI (e.g. “change padding on the intro block” → which component, which class).

---

### Phase 3: Iterate & Refine

- [ ] **Replace complex sections** — Move to WCAG section, Resources section, horizontal strips. Each may require re-implementing scroll effects or animations with CSS/JS or libraries.
- [ ] **Remove Tilda JS where possible** — As sections become pure React, you can stop loading some Tilda scripts for those blocks. Measure impact.
- [ ] **Create a style system** — Variables, spacing scale, typography (e.g. in `globals.css` or a design tokens file) so new components fit the design.
- [ ] **Decide on `/` vs `/accessibility`** — Right now `/` serves `accessibility-home.html`, `/accessibility` uses the Next.js route. Eventually unify or document the split.

---

## Prompts for AI-Assisted CSS Changes

When asking for layout or style changes, include:

1. **Component or section** — e.g. “the intro block”, “the nav”, “rec392128454”
2. **What to change** — e.g. “increase spacing below the heading”, “make the links bolder”
3. **Where the styles live** — e.g. “in `accessibility-overrides.css`”, “in the component’s CSS module”

Example: *“In the WCAG section (rec392128454), increase the left padding of the principles list. The styles are in `accessibility-overrides.css`.”*

---

## Quick Reference

| Route | Source |
|-------|--------|
| `/` | `public/accessibility-home.html` (rewrite) |
| `/accessibility` | `app/accessibility/` — reads parts, injects via `AccessibilityContent` |

| Part file | Content |
|-----------|---------|
| `00-head-and-body-start.html` | Head, scripts, `#allrecords` open |
| `01-nav-and-hero.html` | Nav, hero, “Digital Accessibility” |
| `02-intro-and-key-guides.html` | Intro text, Key guides, copy-color block |
| `03-wcag-section.html` | WCAG principles, Section 508, Laws, etc. |
| `04-resources-and-rest.html` | Resources, Standards, Social media, etc. |
