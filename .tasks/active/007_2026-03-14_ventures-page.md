# Task: Ventures Page

- **ID**: 007
- **Phase**: mvp
- **Priority**: p1-high
- **Created**: 2026-03-14
- **Completed**: pending
- **Depends On**: 006

## Description

Create app/ventures/page.tsx. Header: "Ventures & Investments" with subtitle about halal principles. Each venture as full-width section with alternating layout (text left/right):

1. **Carrot Soft** (carrotsoft.uk) — Bootstrap software company. In-house products: Eat Halal Food, DDMS, Portal, Teamtrack. External link button. Status: "Active"
2. **Digital Marketing Agency** — SEO, Social Media, Content Strategy, Paid Ads. Status: "Active"
3. **Restaurant Investments** — Halal restaurant portfolio across London. Status: "Investing"
4. **Rent to Rent Property** — Halal property income portfolio. Status: "Growing"

Each section: large decorative number (01-04), status badge (pill-shaped), description, subtle dividers. Contact CTA at bottom: "Interested in partnering? Let's talk." → /contact.

## Acceptance Criteria

- [ ] 4 venture sections render with alternating layouts
- [ ] Each section has decorative number, description, and status badge
- [ ] Carrot Soft links to carrotsoft.uk (new tab)
- [ ] Status badges: Active=accent green, Investing=secondary copper, Growing=muted gray
- [ ] Alternating layout stacks on mobile
- [ ] Contact CTA links to /contact
- [ ] Page metadata: title "Ventures — Shafiul Islam"
- [ ] Scroll animations on each section
- [ ] Responsive at 375px, 768px, 1280px
- [ ] `npm run build` succeeds

## Notes

- Carrot Soft section should mention in-house products by name
