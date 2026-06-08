# Bloom Living

Landing page for **Bloom Living** — a residential real estate development in Quinta de Moreira, Maia, Portugal.

## Tech Stack

- **React 18** — UI library
- **Vite** — build tool and dev server
- **CSS Vanilla** — custom properties, CSS Grid, `clamp()` for responsive typography
- **SVG assets** — all illustrations, icons and maps as inline/external SVGs

## Features

- Fully responsive (desktop, tablet, mobile)
- Smooth scroll navigation
- Interactive accordion (NotFinished section)
- Aerial map with plot badges (Lote 7 / Lote 8)
- Gallery grid
- Energy efficiency cards
- Footer with banner image

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
    Hero.jsx          # Hero section
    Intro.jsx         # Intro text
    FullPhoto.jsx     # Full-width interior photo
    Offers.jsx        # What Bloom Living offers
    Efficiency.jsx    # Energy efficiency cards
    NotFinished.jsx   # Living concept + accordion
    Discover.jsx      # Brochure + virtual tour CTA
    Connected.jsx     # Map section
    Gallery.jsx       # Photo gallery
    PlotsForSale.jsx  # Aerial map with plot badges
    AvailableHomes.jsx
    Contact.jsx
    Footer.jsx
  index.css           # All styles
  App.jsx
  main.jsx
public/
  assets/             # SVG images and maps
  icons/              # UI icons
```
