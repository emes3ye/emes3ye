# Task: Prayer Time Widget in Footer

- **ID**: 020
- **Phase**: v1.2
- **Priority**: p3-low
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: 010

## Description

Add a subtle prayer time display in the footer showing the next salah time based on the visitor's location (using browser geolocation or IP-based location). Use the Aladhan API (https://aladhan.com/prayer-times-api) for prayer time data. Show: next prayer name and time. Fallback to London times if location unavailable.

## Acceptance Criteria

- [x] Footer shows next prayer name and time
- [x] Uses visitor location or falls back to London
- [x] Updates dynamically
- [x] Doesn't break layout if API fails
- [x] `npm run build` succeeds

## Notes

- Aladhan API is free and doesn't require a key
- Keep it subtle — small text in footer, not a prominent widget
- This is a personal touch that reflects your identity
