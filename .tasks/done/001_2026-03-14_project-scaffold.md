# Task: Project Scaffold

- **ID**: 001
- **Phase**: mvp
- **Priority**: p0-critical
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: none

## Description

Initialize Next.js 14 project (App Router) with TypeScript and Tailwind CSS. Set up custom Tailwind config with the design system colors. Configure Google Fonts (DM Sans for body, Plus Jakarta Sans for headings weight 600-800). Create the root layout with:

- A sticky minimal navbar: logo text "SHAFIUL ISLAM", nav links (About, Ventures, Blog, Contact), hamburger menu on mobile
- A footer with social link placeholders (LinkedIn, Twitter/X, GitHub) and copyright "© 2026 Shafiul Islam"
- Smooth scroll behavior globally
- Metadata: title "Shafiul Islam — Entrepreneur, Engineer, Investor", description about halal entrepreneurship and tech

Do NOT add any page content yet — just the scaffold and layout.

## Acceptance Criteria

- [x] `npm run dev` starts without errors
- [x] `npm run build` succeeds
- [x] Nav is sticky, shows all links on desktop
- [x] Nav collapses to hamburger on mobile (375px)
- [x] Footer renders with social links and copyright
- [x] Custom fonts (DM Sans + Plus Jakarta Sans) load correctly
- [x] Tailwind colors match design system: bg #FAFAFA, text #1A1A1A, accent #2D5A3D, secondary #C8956C, muted #6B7280
- [x] Responsive at 375px, 768px, 1280px

## Notes

- No external animation libraries — CSS only for now
- Use semantic HTML throughout
- Keep the nav clean and minimal — Apple-inspired
- Font source: Google Fonts
