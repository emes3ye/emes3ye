# Task: Home Page — About Preview Section

- **ID**: 003
- **Phase**: mvp
- **Priority**: p0-critical
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: 002

## Description

Add an "About" preview section below the hero on the home page.

- Section heading: "The Journey"
- A brief 3-4 sentence paragraph: "I'm Shafiul Islam — a tenured software engineer at Amazon with 8+ years of experience, founder of Carrot Soft, and a halal investor building businesses rooted in Islamic principles. From restaurants to rent-to-rent properties to digital marketing, I believe in creating opportunities that empower people financially so they can pursue their true purpose. Every day, I strive to be a better version of myself."
- A "Read my full story →" link to /about
- Layout: text on left (60%), a placeholder div for a future photo on right (40%) with a subtle accent-colored geometric shape or border behind it
- Fade-in-on-scroll animation using Intersection Observer
- On mobile: stack vertically (text first, then placeholder image area)

## Acceptance Criteria

- [x] Section renders below the hero
- [x] Heading, paragraph, and link all display correctly
- [x] "Read my full story →" navigates to /about
- [x] Two-column layout on desktop (60/40 split)
- [x] Stacks vertically on mobile
- [x] Scroll animation triggers when section enters viewport
- [x] Placeholder image area has accent-colored decorative element
- [x] Responsive at 375px, 768px, 1280px
- [x] `npm run build` succeeds

## Notes

- Create a reusable Intersection Observer hook (useInView or similar) — it will be used by other sections too
- The placeholder image area should look intentional, not broken
