# Task: Wire Contact Form to Send Real Emails

- **ID**: 014
- **Phase**: v1.1
- **Priority**: p1-high
- **Created**: 2026-03-14
- **Completed**: pending
- **Depends On**: 009

## Description

Replace the placeholder API route (app/api/contact/route.ts) with a real email sender using Resend. Form submissions should send an email to hello@emes3ye.com with the sender's details and message. Add rate limiting to prevent spam.

## Acceptance Criteria

- [ ] Form submissions send a real email via Resend
- [ ] Email includes sender name, email, subject, and message
- [ ] Rate limiting prevents more than 5 submissions per IP per hour
- [ ] Error handling for failed sends
- [ ] Environment variable for Resend API key (RESEND_API_KEY)
- [ ] `npm run build` succeeds

## Notes

- Resend has a generous free tier (100 emails/day)
- Store API key in .env.local (add to .gitignore)
