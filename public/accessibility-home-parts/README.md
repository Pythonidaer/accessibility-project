# Accessibility Home Page — Components (Parts)

The full `accessibility-home.html` is built from these part files. Edit the part that contains the content you want to change, then run the build to regenerate the full page.

**Next.js:** The same part files are used by the app at **`/accessibility`**. The page at `app/accessibility/page.tsx` reads these parts and renders them as React components (see `app/accessibility/`). So you can edit a part file and either run `npm run build:accessibility` to update the static HTML, or refresh `/accessibility` in the dev server to see changes (after restarting dev if you changed part files).

## How to use

1. **Edit a part** in this folder (see map below).
2. **Rebuild the full page** from the project root:
   ```bash
   npm run build:accessibility
   ```
   or:
   ```bash
   node scripts/build-accessibility-page.mjs
   ```
3. Open or refresh `public/accessibility-home.html` (or your dev server) to see changes.

## Part files (in order)

| File | What it contains | When to edit |
|------|------------------|--------------|
| **00-head-and-body-start.html** | `<head>` (meta, title, CSS/JS links), `<body>` start, `#allrecords` wrapper, scroll/anchor block (rec392128439), cursor block (rec392128443), `#home` anchor (rec392128444). | Change page title, add/remove stylesheets or scripts, or tweak scroll/anchor behavior. |
| **01-nav-and-hero.html** | Navigation (rec392128445), mobile hero (rec392128446), desktop hero (rec392128447), mobile hero 2 (rec392128448). | Change nav links, logo, or hero content and layout. |
| **02-intro-and-key-guides.html** | Intro block (rec392128449), spacers (rec392128450–452), key guides / color block (rec392128453, including copy-color script and `#accessibility-color` input). | Change intro text or the “key guides” / color block. |
| **03-wcag-section.html** | WCAG 2.1 / Principles / Laws section (rec392128454). Contains “Web, software + documents”, “WCAG 2.1 Level AA”, Principles (Perceivable, Operable, Understandable, Robust), Laws (Section 508, ADA Title II, Plain Language, etc.), color box, and Resources link. | **Most often edited.** Layout and styling for this section are overridden in `pagedemo-assets/css/accessibility-custom.css`; see `STYLE-MAP.md` for element IDs. |
| **04-resources-and-rest.html** | Spacers (rec392128455), resources section (rec392128456–457), mobile color scheme (rec392128459), and all remaining sections through the end of the page (footer, Table of Contents / Home links, closing scripts and `</body></html>`). | Change resources content, footer, or any section after the WCAG block. |

## Notes

- **Tilda structure:** Each “rec” is a Tilda record (section). The build script splits on record IDs; don’t remove or rename those `id="rec392128XXX"` attributes or the split/build may break.
- **Styling:** Section-specific overrides live in `pagedemo-assets/css/accessibility-custom.css`. Element IDs for the WCAG section are documented in the project’s **STYLE-MAP.md**.
- **Re-splitting:** If you edit the full `accessibility-home.html` by hand and want to re-create the part files from it, run:
  ```bash
  node scripts/build-accessibility-page.mjs --split
  ```
  That overwrites the part files with a fresh split of the current full file.
