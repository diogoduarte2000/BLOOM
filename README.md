# BLOOM Living — AI-Built Landing Page

> A fully responsive real estate landing page for **Bloom Living**, a residential development in Quinta de Moreira, Maia, Portugal — built entirely with AI assistance using Claude Code inside the **Cowork** environment by Anthropic.

🔗 **Live:** [bloom-react-smoky.vercel.app](https://bloom-react-smoky.vercel.app)  
📦 **Repo:** [github.com/diogoduarte2000/BLOOM](https://github.com/diogoduarte2000/BLOOM)

---

## How This Project Was Built

This project is a real-world experiment in **AI-driven front-end development**. No boilerplate generators, no UI kits — just a design, screenshots, and a conversation with Claude.

### The Tool: Claude Code + Cowork

The entire project was built inside **[Cowork](https://claude.ai)**, a development environment powered by **Claude Code** (Anthropic). Cowork gives Claude access to the local filesystem, terminal, git, and browser — allowing it to read, write, and run code directly on the machine, not just suggest it.

Key capabilities used throughout the project:

- 📁 **File read/write** — Claude created and edited every `.jsx` and `.css` file directly
- 💻 **Terminal access** — ran `npm install`, `npm run dev`, `npm run build`, git commands
- 🔍 **Code search** — grepped across the codebase to find style conflicts and component references
- 🌐 **Vercel deploy** — pushed to production via `npx vercel deploy --prod` from within the session
- 🧠 **Large context window** — the full codebase (~2500 lines of CSS + 650 lines of JSX) was kept in context simultaneously, allowing Claude to reason about cross-file interactions without losing track

---

### 1. From Screenshot to First Version

The process started with **screenshots of a design mockup**. The images were passed directly to Claude inside the Cowork session, which analysed the visual layout — sections, typography, colours, spacing — and generated the initial React component tree and CSS to match. The first working version was running in the browser in a single session.

No Figma export, no hand-coded HTML first. Just: *"here's what it should look like"* → working code.

### 2. Iterative Improvement & Code Review

From that first version, the project evolved through **many rounds of feedback and review**:

- Sections were examined one by one, comparing the live render against the original design
- Claude performed **code reviews** on request — identifying redundant CSS rules, inconsistent spacing tokens, and component structure issues
- Fixes were applied surgically: targeted edits to specific classes or JSX blocks, without rewriting entire files
- The CSS was progressively refactored: consolidating `padding` overrides, removing dead rules, organising breakpoints into a logical order

Git commits tracked each meaningful improvement, from `version1` through `iPad & global CSS fixes` to the final polish pass.

### 3. The Biggest Challenge — Three Responsive Breakpoints

The hardest part of the entire project was making the layout look correct across **three completely different screen profiles**:

| Target | Condition |
|---|---|
| 🖥️ **Desktop / Windows** | Wide landscape, `min-width: 1024px` |
| 📱 **iPad** | `min-width: 821px`, portrait & landscape aspect ratios |
| 📱 **iPhone** | `max-width: 480px`, `max-aspect-ratio: 5/9` |

The challenge wasn't writing each layout individually — it was keeping all three working at once. Fixing a padding issue on desktop would shift the iPad layout. Adjusting a grid on iPad would break mobile. Every change required checking three views.

The strategy that made it manageable:

- **`clamp()`** for fluid typography — font sizes that scale continuously between breakpoints without jumping
- **`aspect-ratio` media queries** alongside `max-width` — to target iPad landscape specifically, which shares a width with some desktop windows
- **Ordered breakpoint blocks** — desktop base styles → tablet overrides → mobile overrides, never mixed
- **Targeted surgical fixes** — instead of rewriting a section, adding a single rule to a specific breakpoint block
- Claude reasoned through the cascade explicitly, explaining why a rule was being placed in one block and not another

---

## Project Stats

| | |
|---|---|
| Components | 13 React components |
| Lines of CSS | ~1,873 |
| Lines of JSX | ~650 |
| Commits | 13 |
| Breakpoints | 3 (desktop, iPad, iPhone) |
| Time to first working version | Single session |
| External UI libraries | 0 |

---

## Tech Stack

| Tool | Role |
|---|---|
| **React 18** | Component-based UI |
| **Vite 5** | Build tool & dev server |
| **Vanilla CSS** | All styles — custom properties, Grid, Flexbox, `clamp()` |
| **SVG assets** | Illustrations, icons, maps — all vector |
| **GitHub** | Version control |
| **Vercel** | Hosting & continuous deployment |
| **Claude Code (Cowork)** | AI pair programmer — wrote, edited, reviewed, deployed |

---

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
# output → dist/
```

## Project Structure

```
src/
  components/
    Hero.jsx            # Hero section with headline and CTA
    Intro.jsx           # Intro text block
    FullPhoto.jsx       # Full-width interior photo
    Offers.jsx          # What Bloom Living offers
    Efficiency.jsx      # Energy efficiency rating cards (A+++)
    NotFinished.jsx     # Living concept + accordion FAQ
    Discover.jsx        # Brochure + virtual tour CTA
    Connected.jsx       # Location map section
    Gallery.jsx         # Photo gallery grid
    PlotsForSale.jsx    # Aerial map with plot badges (Lote 7 / Lote 8)
    AvailableHomes.jsx  # Available units listing
    Contact.jsx         # Contact form
    Footer.jsx          # Footer with links and banner image
  index.css             # All styles (~1873 lines, 3 breakpoints)
  App.jsx               # Root component, section order
  main.jsx              # Entry point
public/
  assets/               # SVG illustrations and maps
  icons/                # UI icons (SVG)
```

---

*Built with [Claude Code](https://claude.ai/code) inside Cowork — 100% AI-assisted development, from first screenshot to production deploy.*
