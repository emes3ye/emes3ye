# Task: Newsletter Signup Integration

- **ID**: 011
- **Phase**: v1.1
- **Priority**: p2-medium
- **Created**: 2026-03-14
- **Completed**: pending
- **Depends On**: 010

## Description

Add a newsletter signup form to the site using Resend or ConvertKit. Place it on the blog listing page (below the header) and on the home page (above the final CTA section). Simple email input + subscribe button. Store subscribers and send a welcome email.

## Acceptance Criteria

- [ ] Newsletter form renders on blog listing and home page
- [ ] Email validation works
- [ ] Successful signup shows confirmation message
- [ ] Integration with email service (Resend or ConvertKit) works
- [ ] Welcome email sends on signup
- [ ] `npm run build` succeeds
- [ ] Responsive at 375px, 768px, 1280px

## Notes

- Resend is simpler to set up with Next.js
- Keep the form minimal — just email + button, no name required
