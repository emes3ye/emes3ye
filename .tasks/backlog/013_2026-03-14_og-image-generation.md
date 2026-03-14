# Task: OpenGraph Image Auto-Generation for Blog Posts

- **ID**: 013
- **Phase**: v1.1
- **Priority**: p2-medium
- **Created**: 2026-03-14
- **Completed**: pending
- **Depends On**: 008

## Description

Auto-generate OpenGraph images for each blog post using @vercel/og or a custom solution. Each OG image should include the post title, author name "Shafiul Islam", and the site branding (accent green background or accent-colored elements). This improves social media sharing.

## Acceptance Criteria

- [ ] Each blog post has a unique OG image
- [ ] OG images include post title and author name
- [ ] Images follow the site's design system
- [ ] og:image meta tag set correctly per post
- [ ] `npm run build` succeeds

## Notes

- @vercel/og uses Edge runtime to generate images on the fly
- Keep design consistent with the site's brand
