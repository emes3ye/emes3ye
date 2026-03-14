# Task: Newsletter Signup Integration

- **ID**: 011
- **Phase**: v1.1
- **Priority**: p2-medium
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: 010

## Description

Add a newsletter signup form to the site using Resend or ConvertKit. Place it on the blog listing page (below the header) and on the home page (above the final CTA section). Simple email input + subscribe button. Store subscribers and send a welcome email.

## Acceptance Criteria

- [x] Newsletter form renders on blog listing and home page
- [x] Email validation works
- [x] Successful signup shows confirmation message
- [x] Integration with email service (Resend or ConvertKit) works
- [x] Welcome email sends on signup
- [x] `npm run build` succeeds
- [x] Responsive at 375px, 768px, 1280px

## Notes

- Resend is simpler to set up with Next.js
- Keep the form minimal — just email + button, no name required
