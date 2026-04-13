# Design System Strategy: The Digital Architect

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Architect."** This system moves away from the "noisy" and "cluttered" developer templates of the past decade, favoring an editorial, gallery-like experience that treats code as art. 

We achieve a high-end feel through **Intentional Asymmetry** and **Tonal Depth**. By breaking the rigid 12-column grid with staggered content blocks and oversized headings, we create a sense of bespoke craftsmanship. The "futuristic" touch isn't achieved through heavy sci-fi tropes, but through precision, extreme legibility, and a sophisticated use of luminescence against a deep, void-like background.

---

## 2. Colors: The Luminescent Void
The palette is rooted in `#0e0e13` (`surface`), a near-black that provides more depth than pure `#000000`. 

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be established through:
- **Tonal Shifts:** Transitioning from `surface` to `surface-container-low` to signal a new content area.
- **Negative Space:** Using the spacing scale to create distinct islands of information.

### Surface Hierarchy & Nesting
Treat the interface as a physical stack of semi-transparent materials.
- **Base Layer:** `surface` (#0e0e13).
- **Secondary Containers:** `surface-container-low` (#131319) for large background sections.
- **Interactive/Floating Elements:** `surface-container-high` (#1f1f26) or `highest` (#25252d) for cards and modals.

### The "Glass & Gradient" Rule
To create the "neon accent" requested, avoid flat fills. Use **Signature Textures**:
- **CTA Backgrounds:** A linear gradient from `primary` (#9fa7ff) to `secondary` (#be83fa) at a 45-degree angle.
- **Glassmorphism:** For navigation bars or floating cards, use `surface-container-lowest` at 60% opacity with a `24px` backdrop-blur. This allows the subtle glow of background gradients to bleed through, creating a "frosted tech" aesthetic.

---

## 3. Typography: Editorial Precision
The typography system juxtaposes the human-centric warmth of **Manrope** with the technical precision of **Space Grotesk**.

- **Display & Headlines (Manrope):** Use `display-lg` for hero statements. Tighten letter-spacing by `-0.02em` to achieve a premium, compressed editorial look.
- **Accents (Space Grotesk):** All `label` roles and technical metadata (e.g., "v1.0.4", "TypeScript") must use the monospace-leaning Space Grotesk. This provides the "subtle futuristic touch" without sacrificing professional clarity.
- **Body (Inter):** The workhorse. `body-lg` at 1rem ensures maximum readability for long-form case studies.

---

## 4. Elevation & Depth
In this design system, light—not shadows—defines space.

- **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-low` section creates a natural "inset" feel.
- **Ambient Shadows:** Standard drop shadows are banned. If a floating effect is required, use an "Ambient Glow": a shadow with a 64px blur, 4% opacity, using the `primary` color (#9fa7ff) instead of black.
- **The "Ghost Border" Fallback:** If a container lacks contrast, use a "Ghost Border": `outline-variant` (#48474d) at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `secondary`), `md` corner radius (0.375rem). No border. Text: `label-md` (bold).
- **Secondary:** Transparent background with a `Ghost Border`. On hover, the border opacity increases to 40%.
- **Tertiary/Ghost:** No container. Uses `primary` text color with a `Space Grotesk` font for a "terminal link" feel.

### Cards (Project Tiles)
- **Styling:** No borders. Background: `surface-container-low`. 
- **Interaction:** On hover, the background shifts to `surface-container-high` and the card scales by 1.02x. 
- **Spacing:** Minimum `2rem` (32px) internal padding to maintain the "premium" feel.

### Chips (Tech Stack)
- **Styling:** `surface-container-highest` background. Corner radius: `full`. 
- **Typography:** `label-sm` (Space Grotesk). These should look like tiny, precise hardware labels.

### Input Fields
- **Styling:** Underline-only or subtle `surface-container-high` fill. 
- **Focus State:** The underline transitions into a gradient (`primary` to `tertiary`) with a subtle `2px` glow.

### Signature Component: The "Code Ribbon"
A decorative, horizontal scrolling element using `label-md` in `Space Grotesk` that displays git commits or tech keywords. It uses `tertiary_dim` color with 20% opacity to act as a background texture.

---

## 6. Do's and Don'ts

### Do:
- **Use "Aggressive" Whitespace:** If you think there is enough space, add 20% more. Premium design breathes.
- **Embrace Asymmetry:** Offset your text columns. Place an image 10% off-center to create visual interest.
- **Subtle Motion:** Use slow (500ms+) ease-in-out transitions for color shifts.

### Don't:
- **Don't use 100% White:** Always use `on-surface` (#f9f5fd) for text. Pure white (#FFFFFF) is too harsh for a dark-themed "Digital Architect" look.
- **Don't use Dividers:** Avoid horizontal lines (`<hr>`). Use a `48px` or `64px` gap instead.
- **Don't use Standard Icons:** Use thin-stroke (1px or 1.5px) icons to match the high-end typography. Heavy icons will break the sophisticated aesthetic.