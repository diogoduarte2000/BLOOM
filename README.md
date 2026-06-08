# BLOOM Living — AI-Built Landing Page

> A fully responsive real estate landing page for **Bloom Living**, a residential development in Quinta de Moreira, Maia, Portugal — built entirely with AI assistance using Claude Code.

🔗 **Live:** [bloom-react-smoky.vercel.app](https://bloom-react-smoky.vercel.app)

---

## How This Project Was Built

This project is an experiment in **AI-driven front-end development** — from the first pixel to production, the entire build process was guided by conversations with Claude (Anthropic).

### 1. From Screenshot to First Version

The process started with **screenshots of a design mockup**. Instead of writing code from scratch, the screenshots were passed directly to Claude, which analysed the visual layout and generated the initial React components and CSS to match it. This gave an immediate working foundation without any manual translation from design to code.

### 2. Iterative Improvement & Code Review

From that first version, the project evolved through **continuous feedback loops**:

- Sections were reviewed one by one, with visual comparisons against the original design
- Claude suggested and applied fixes — spacing, typography, colour accuracy, component structure
- Code reviews were requested at each stage to catch redundancies, improve CSS organisation, and refine component logic
- The codebase was progressively cleaned up: consolidating styles, removing overrides, and making the architecture more maintainable

### 3. The Biggest Challenge — Three Responsive Breakpoints

The hardest part of the project was making everything look right across **three completely different aspect ratios**:

| Target | Breakpoint |
|---|---|
| 🖥️ Desktop / Windows | Wide landscape screens |
| 📱 iPad | Tablet portrait & landscape |
| 📱 iPhone | Mobile portrait |

Each layout required its own set of rules. The challenge was that fixing a spacing issue on desktop would often break the iPad layout, and adjusting the iPad version would ripple into the mobile view. This was solved using a combination of:

- `clamp()` for fluid typography that scales across viewports
- CSS media queries with `max-width`, `aspect-ratio`, and combined conditions
- Separate override blocks per breakpoint, carefully ordered to avoid conflicts
- Repeated visual testing and targeted fixes per device profile

Claude was used to reason through conflicting breakpoints, propose media query strategies, and apply surgical CSS fixes without disturbing the other views.

---

## Tech Stack

- **React 18** — component-based UI
- **Vite** — fast build tool and dev server
- **Vanilla CSS** — custom properties, CSS Grid, Flexbox, `clamp()`
- **SVG assets** — all illustrations, icons and maps
- **Vercel** — deployment and hosting

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Project Structure

```
src/
  components/
    Hero.jsx            # Hero section with headline
    Intro.jsx           # Intro text block
    FullPhoto.jsx       # Full-width interior photo
    Offers.jsx          # What Bloom Living offers
    Efficiency.jsx      # Energy efficiency rating cards
    NotFinished.jsx     # Living concept + accordion FAQ
    Discover.jsx        # Brochure + virtual tour CTA
    Connected.jsx       # Location map section
    Gallery.jsx         # Photo gallery grid
    PlotsForSale.jsx    # Aerial map with plot badges
    AvailableHomes.jsx  # Available units listing
    Contact.jsx         # Contact form
    Footer.jsx          # Footer with links and banner
  index.css             # All styles (desktop + tablet + mobile)
  App.jsx
  main.jsx
public/
  assets/               # SVG images and maps
  icons/                # UI icons
```

---

*Built with [Claude Code](https://claude.ai/code) — 100% AI-assisted development.*
