# Task: Home Page — Ventures Section

- **ID**: 004
- **Phase**: mvp
- **Priority**: p0-critical
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: 003

## Description

Add a "Ventures" section below the About preview on the home page. Heading: "What I'm Building". Display 4 venture cards in a 2x2 grid (stacked on mobile):

1. **Carrot Soft** — "A bootstrap software company delivering digital solutions for businesses ready to scale." External link to carrotsoft.uk
2. **Digital Marketing Agency** — "Helping brands grow their online presence with data-driven strategies and authentic storytelling."
3. **Restaurant Investments** — "Investing in halal food businesses that serve communities with quality and integrity."
4. **Rent to Rent Property** — "Building a property portfolio that generates sustainable, halal income streams."

Each card: numbered label (01-04) in accent color, bold heading, one-line description, hover lift+shadow. Carrot Soft gets external link icon and links to carrotsoft.uk in new tab. "See all ventures →" link to /ventures below grid. Staggered fade-in-on-scroll.

## Acceptance Criteria

- [x] 4 venture cards render in a 2x2 grid on desktop
- [x] Cards stack to single column on mobile
- [x] Each card has number, name, and description
- [x] Hover effect works (lift + shadow)
- [x] Carrot Soft card links to carrotsoft.uk in new tab with external link icon
- [x] "See all ventures →" links to /ventures
- [x] Staggered scroll animation (each card fades in with slight delay)
- [x] Responsive at 375px, 768px, 1280px
- [x] `npm run build` succeeds

## Notes

- Reuse Intersection Observer hook from Task 003
- External link icon: simple SVG arrow (↗)
- Cards should have consistent height within the grid
