# Task: Home Page — Blog Preview + Final CTA

- **ID**: 005
- **Phase**: mvp
- **Priority**: p0-critical
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: 004

## Description

Add two final sections to the home page:

**Blog Preview Section**: Heading "Thoughts & Insights", subheading "On halal finance, technology, entrepreneurship, and personal growth." Show 3 placeholder blog cards in a row (stacked on mobile). Each card: date, title, one-line excerpt, "Read →" link. Titles: "How I Built My Website While I Slept", "Why Halal Investing Is the Future", "Faith, Fitness & Focus: My Daily Routine". "View all posts →" link to /blog. Clean typography, no images.

**Final CTA Section**: Full-width accent green (#2D5A3D) background, white text. Heading: "Let's Build Something Meaningful Together". Subtext: "Whether you're looking for a tech partner, investment opportunity, or just want to connect — I'd love to hear from you." White CTA button: "Start a Conversation" → /contact.

## Acceptance Criteria

- [x] 3 blog cards render in a row on desktop, stack on mobile
- [x] Each card shows date, title, excerpt, and "Read →" link
- [x] "View all posts →" links to /blog
- [x] CTA section has #2D5A3D background with white text
- [x] "Start a Conversation" button links to /contact
- [x] Both sections have scroll animations
- [x] Responsive at 375px, 768px, 1280px
- [x] `npm run build` succeeds

## Notes

- Blog card links can point to /blog for now (actual slugs come in Task 008)
- Ensure sufficient contrast on green background (white on #2D5A3D)
