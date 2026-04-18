# Site Fonts Usage Report

Based on an analysis of your entire portfolio codebase, here are the fonts currently used, where they are applied, and their purpose.

## 1. Outfit (Sans-Serif)
**Status:** **Primary Font (Actively Used)**
**How it's loaded:** `<link>` tag in `index.html`

`Outfit` is configured as the default `sans` font in `tailwind.config.js`. This means it acts as the base font for almost all typography on your website.

**Where it is used:**
- **Global Typography:** Because it's the Tailwind default, it applies to all headings, paragraphs, and standard text elements across `App.jsx`, `Home.jsx`, `About.jsx`, `Projects.jsx`, `Contact.jsx`, etc.
- **Loader Component:** Explicitly set via `fontFamily="Outfit, sans-serif"` on the SVG text mask in `src/components/Loader.jsx`.
- **Project Details CSS:** Hardcoded as `font-family: 'Outfit', sans-serif;` for `.detail-hero-title`, `.detail-section-title`, and `.detail-back-button` in `src/styles/projectDetail.css`.

---

## 2. JetBrains Mono (Monospace)
**Status:** **Secondary Font (Actively Used)**
**How it's loaded:** `<link>` tag in `index.html`

`JetBrains Mono` is configured as the default `mono` font in `tailwind.config.js`. It's used to add a technical, developer-centric aesthetic to specific UI elements.

**Where it is used:**
- **Tech Stack Badges:** Used via the `font-mono` Tailwind class for all technology tags (e.g., `flutter`, `php`, `React`, `Firebase`, `IOT`) in `Projects.jsx` and `ProjectDetail.jsx`.
- **Keyboard Shortcuts:** Used for UI hints like the `<kbd>Ctrl K</kbd>` in `Nav.jsx` and `<kbd>ESC</kbd>` in `CommandPalette.jsx`.
- **Dates & Microcopy:** Used for timeline dates (`2023 — 2026`) in `About.jsx` and small status notices like "Not ready yet" in `ProjectDetail.jsx`.
- **Project Details CSS:** Hardcoded as `font-family: 'JetBrains Mono', monospace;` for metadata labels (`.detail-meta-item .meta-label`), tech tags (`.detail-tech-item`), external link buttons (`.detail-link-button`), and feature lists (`.feature-item`) in `src/styles/projectDetail.css`.

---

## 3. Inter
**Status:** **Imported, but UNUSED**
**How it's loaded:** `<link>` tag in `index.html`

**Where it is used:**
- **Nowhere!** The `Inter` font is being requested from Google Fonts in `index.html` on lines 60 (`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700&display=swap" rel="stylesheet">`), but it is not mapped in your `tailwind.config.js` and there is no CSS referencing it anywhere in the `src/` directory.

> **Recommendation:** You should remove the `<link>` tag for the `Inter` font from your `index.html` (line 60). Removing this unused font will save an unnecessary network request and further improve your website's loading speed!
