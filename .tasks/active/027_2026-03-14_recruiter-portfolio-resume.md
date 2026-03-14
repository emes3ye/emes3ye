# Task: Recruiter-Facing Portfolio & Resume Showcase

- **ID**: 027
- **Phase**: v1.1
- **Priority**: p1-high
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: none

## Description

The personal brand site currently underrepresents Shafiul's professional employment profile. Recruiters landing on the site should immediately understand his seniority, technical depth, and career history — not just his entrepreneurial ventures.

This task adds a dedicated **Work / Resume** section (or page) that:
- Highlights current role and job title prominently
- Shows a curated career timeline (employer, role, dates, key impact)
- Embeds or links a downloadable PDF resume
- Surfaces key technical skills / stack with visual hierarchy
- Includes a clear CTA for recruiters ("Let's talk" → contact page or calendar)

A short "For Recruiters" teaser block should also appear on the homepage, linking through to the full Work page.

## Acceptance Criteria

- [x] New `/work` page exists with a proper `<h1>` and full career timeline
- [x] Current role and title are displayed prominently at the top
- [x] At least 3 career entries shown (employer, title, date range, 2-3 impact bullets)
- [x] Downloadable resume link (PDF placeholder acceptable; file stored in `public/`)
- [x] Key skills section rendered with badge/tag components from the existing design system
- [x] "For Recruiters" teaser block added to the homepage (below Hero or above CTA)
- [x] Nav link to `/work` added (desktop + mobile nav)
- [x] All text uses the existing font/colour tokens (no new colours introduced)
- [x] Page is fully responsive at 375px, 768px, 1280px
- [x] `npm run build` succeeds with no TypeScript or lint errors

## Notes

- Keep the tone professional but personal — not a dry CV dump. Match the clean, minimal Apple-inspired aesthetic.
- Use Server Components; no "use client" unless strictly needed.
- Career timeline can use a simple vertical list or timeline component — no external animation libraries.
- PDF resume file: place at `public/resume.pdf` (user will swap in the real file; a placeholder is fine for now).
- Scroll fade-in animation (Intersection Observer) on timeline entries is a nice touch.
- Page slug: `/work` (not `/resume` or `/cv`) — feels more natural and less transactional.
