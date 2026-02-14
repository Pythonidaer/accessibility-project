# CSS Dependencies — Style Map

Where styles for the accessibility page come from and what they cover.

## Files (load order)

Loaded by `app/accessibility/TildaAssets.tsx` (styles) and `app/accessibility/layout.tsx` (scripts):

| File | Path | Role |
|------|------|------|
| **tilda-grid-3.0.min.css** | `public/pagedemo-assets/css/tilda-grid-3.0.min.css` | Layout: containers, columns, responsive grid |
| **tilda-blocks-2.14.css** | `public/pagedemo-assets/css/tilda-blocks-2.14.css` | Block types, typography, nav, hero (T396), animations |
| **tilda-animation-1.0.min.css** | `public/pagedemo-assets/css/tilda-animation-1.0.min.css` | Animation utilities |
| **tilda-carousel-1.0.min.css** | `public/pagedemo-assets/css/tilda-carousel-1.0.min.css` | Carousel blocks (if used) |
| **custom.css** | `public/pagedemo-assets/css/custom.css` | Project-level custom styles |
| **accessibility-overrides.css** | `public/pagedemo-assets/css/accessibility-overrides.css` | Page-specific overrides keyed by record ID |
| **accessibility-custom.css** | `public/pagedemo-assets/css/accessibility-custom.css` | Extra accessibility-page custom styles |

---

## tilda-grid-3.0.min.css

- **Purpose:** Layout and responsive grid.
- **Key selectors:** `.t-container`, `.t-container_10`, `.t-container_8`, `.t-col`, `.t-col_1` … `.t-col_12`, `.t-row`, `.t-prefix_*`, `.t-width_*`, `.t-cell`, `.t-clear`.
- **Use:** Structure for Tilda blocks; breakpoints (e.g. 1200px, 960px) change column widths and stacking.

---

## tilda-blocks-2.14.css

- **Purpose:** Base styles for all Tilda block types and global page shell.
- **Key areas:**
  - **Page shell:** `.t-body`, `#allrecords`, `.t-records` — base links, lists, fonts.
  - **Typography:** `.t-text`, `.t-name`, `.t-heading`, `.t-title`, `.t-descr`, `.t-uptitle` and size variants (`_xs`, `_sm`, `_md`, `_lg`, etc.).
  - **Spacing:** `.t-rec_pt_*`, `.t-rec_pb_*` (record padding top/bottom).
  - **Buttons:** `.t-btn`, `.t-btntext`.
  - **Nav (T280):** `.t280`, `.t280__container`, `.t280__menu`, `.t280__burger`, etc.
  - **Hero / artboard (T396):** `.t396`, `.t396__artboard`, `.t396__carrier`, `.t396__filter`, `.t396__elem`, `.tn-atom`, `.tn-elem`.
  - **Visibility:** `.t-screenmin-*`, `.t-screenmax-*`, `.t-hidden`, `.r_anim`, `.r_showed`, `.r_hidden`.
  - **Other blocks:** `.t014` (share), `.t270` (forms), `.t360` (progress), `.t449`, `.t453`, `.t607`, etc.
- **Use:** Required for structure and look of nav, hero, text blocks, and Tilda-specific classes in the HTML.

---

## accessibility-overrides.css

- **Purpose:** Overrides and tweaks for this page only, keyed by record ID.
- **Key pattern:** `#rec392128XXX ...` — each section (see `RECORD-IDS.md`) has its own block.
- **Contains:** Layout/sizing overrides for artboards, filters, carriers; typography and positioning for `.tn-elem[data-elem-id="..."]`; nav menu styles; responsive overrides per breakpoint.
- **Use:** When changing layout or look of a specific section, target the right `#rec392128XXX` in this file (or in a component’s CSS module once a section is migrated to React).

---

## Hero “Patrice Lumumba” scroll — long blue section

The “Patrice Lumumba” text that scrolls across the screen lives inside the **desktop hero record** `#rec392128447`. The “container that is so long” is the **artboard** inside that record.

### What controls the length

| What | Where | Value | Role |
|------|--------|--------|------|
| **Artboard height** | `#rec392128447 .t396__artboard` (and `.t396__filter`, `.t396__carrier`) in `accessibility-overrides.css` | `min-height: 3300px` | Total scroll height of the hero block. You scroll 3300px before the next section starts. |
| **Artboard height (HTML)** | `01-nav-and-hero.html`: `.t396__artboard` for rec392128447 | `data-artboard-height="3300"` | Tilda JS may read this and set height; CSS overrides with `min-height` / `height`. |
| **Gradient bar** | `#rec392128447 .tn-elem[data-elem-id="1555570485788"]` | `height: 512px` | Visual blue bar at top; not what makes the “long” scroll. |
| **Scroll text** | “Patrice” = `1553518957591`, “Lumumba” = `1555681936853` | `data-animate-sbs-event="scroll"` | Animation runs over scroll distance `di: 1000`–`1400` px; then elements stay `fixed`. |

So the **3300px artboard** is what makes you scroll through a long stretch of blue after the words finish animating. The blue bar and text become `position: fixed` and fill the viewport while you keep scrolling through the rest of the 3300px.

### Why shortening the artboard broke the layout

When the artboard was reduced (e.g. to 1600px):

- The **next section** `#rec392128449` (intro: “Patrice Lumumba rose from…”) started sooner in the document.
- The hero’s **fixed** layers (blue bar, scroll text) are fixed to the **viewport**, not to the hero record. So they keep painting on top of the page as you scroll.
- With a shorter artboard, you reached rec392128449 after less scroll, but those fixed hero layers were still on top, so the intro text appeared **under** the blue (or in the same “section” visually). The intro block has `background-color: #ffffff` and its own artboard height (960px etc.); the issue was **stacking**: the hero’s fixed elements stayed above it.

### What to change in proportion if you shorten the hero again

To shorten the long blue section **without** breaking the intro:

1. **Shorten the hero artboard**
   - **CSS:** `accessibility-overrides.css` → `#rec392128447 .t396__artboard`, `.t396__filter`, `.t396__carrier`: reduce `min-height` (and if you set it, `height`) from 3300px to the new value (e.g. 2000px). Use `!important` if Tilda JS sets height from HTML.
   - **HTML (optional but consistent):** In `01-nav-and-hero.html`, on the artboard div for rec392128447, change `data-artboard-height="3300"` to the same new value so Tilda’s scripts don’t fight the CSS.

2. **Keep the intro section on top of the blue**
   - **CSS:** In `accessibility-overrides.css`, give the intro record (and/or its artboard) a **higher stacking order** than the hero’s fixed elements so that when you scroll to it, the white intro block draws **above** the blue:
     - e.g. `#rec392128449 { position: relative; z-index: 50; }` (or another value higher than the hero’s fixed layers, which use z-index in the 1–30 range). That way the “different looking section” (white background) is clearly on top once you scroll past the hero.

3. **Optional: shorten the scroll animation**
   - The “Patrice” / “Lumumba” animation runs over **di: 1000–1400** px in the HTML (`data-animate-sbs-opts`). If you want the words to finish earlier in a shorter hero, you’d change those `di` values in `01-nav-and-hero.html` (and in the mobile hero `#rec392128448` if you want the same there). That’s proportional to how much you shortened the artboard (e.g. if artboard is 2000px, you might use di: 600, 1000 so the fixed phase is shorter).

**Summary:** The long container is the **artboard** (3300px) in **rec392128447**. Change that in CSS (and optionally in HTML). To avoid the intro appearing “in blue,” raise **rec392128449**’s z-index so it stacks above the hero’s fixed layers.

---

## Summary

| Need to change… | Prefer editing… |
|-----------------|------------------|
| Global layout (containers, columns) | `tilda-grid-3.0.min.css` (or a local copy if you don’t want to touch vendor file) |
| Typography, buttons, nav, hero, block behavior | `tilda-blocks-2.14.css` (or port to CSS modules/Tailwind when rewriting a section) |
| One specific section (e.g. intro, WCAG, resources) | `accessibility-overrides.css` → `#rec392128XXX` (see RECORD-IDS.md) |
| Page-wide custom rules | `accessibility-overrides.css` or `accessibility-custom.css` |
