# Task: CityRunway Affiliate Monetisation

- **ID**: 032
- **Phase**: v1.1
- **Priority**: p2-medium
- **Created**: 2026-03-22
- **Completed**: pending
- **Depends On**: 031

## Description

Add indirect monetisation to CityRunway (`cityrunway.emes3ye.com`). Users are in active travel planning mode — high purchase intent. The goal is to surface affiliate links naturally without disrupting the discovery experience.

This task is implemented in the **cityrunway** repo, not emes3ye. It is tracked here for portfolio planning visibility.

### Strategy

1. **Skyscanner affiliate** — Each destination card gets a "Search flights ↗" link that deep-links to Skyscanner with the route pre-filled (`dep_iata=LCY&dest_iata=AMS`). Skyscanner pays per click-through.
   - Sign up: https://www.partners.skyscanner.net
   - Link format: `https://www.skyscanner.net/transport/flights/{from}/{to}/`

2. **Booking.com affiliate** — Below the destination grid, a subtle "Find hotels in {city}" strip using Booking.com's affiliate widget or deep link.
   - Sign up: https://www.booking.com/affiliate-program

3. **Buy Me a Coffee** — Already live in footer.

4. **Future: travel insurance** — Add a World Nomads or SafetyWing banner once affiliate accounts are approved.

## Acceptance Criteria (cityrunway repo)

- [ ] Each `DestinationCard` has a small "Search flights ↗" link that opens Skyscanner pre-filled with the route
- [ ] Skyscanner link uses affiliate tracking parameter (add your affiliate ID once approved)
- [ ] Link opens in new tab with `rel="noopener noreferrer"`
- [ ] Link is visually secondary — amber text, not a full button (doesn't dominate the card)
- [ ] Booking.com "Find hotels" strip below destination grid (optional, only if affiliate approved)
- [ ] Build passes with `npm run build`
- [ ] No performance regression — affiliate links are plain anchors, no heavy widgets

## Notes

Priority: get Skyscanner affiliate account approved first — it's the highest-intent touchpoint.
Booking.com affiliate is secondary; can be added later without a separate task.
Keep monetisation tasteful — this is a utility tool for real travellers, not an ad farm.
