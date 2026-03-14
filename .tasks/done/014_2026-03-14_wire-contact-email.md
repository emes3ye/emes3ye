# Task: Wire Contact Form to Send Real Emails

- **ID**: 014
- **Phase**: v1.1
- **Priority**: p1-high
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: 009

## Description

Replace the placeholder API route (app/api/contact/route.ts) with a real email sender using Resend. Form submissions should send an email to hello@emes3ye.com with the sender's details and message. Add rate limiting to prevent spam.

## Acceptance Criteria

- [x] Form submissions send a real email via Resend
- [x] Email includes sender name, email, subject, and message
- [x] Rate limiting prevents more than 5 submissions per IP per hour
- [x] Error handling for failed sends
- [x] Environment variable for Resend API key (RESEND_API_KEY)
- [x] `npm run build` succeeds

## Notes

- Resend has a generous free tier (100 emails/day)
- Store API key in .env.local (add to .gitignore)
