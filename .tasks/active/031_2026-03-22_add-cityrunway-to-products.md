# Task: Add CityRunway to Products Page

- **ID**: 031
- **Phase**: v1
- **Priority**: p1-high
- **Created**: 2026-03-22
- **Completed**: pending
- **Depends On**: none

## Description

Add CityRunway as a new product entry on the `/products` page.

CityRunway is a destination discovery tool — users pick any departure airport and instantly see every city they can fly to directly, with the airlines serving each route. It helps travellers explore possibilities and plan their next trip, not track specific flights.

Hosted at `cityrunway.emes3ye.com`.

### Indirect monetisation strategy

CityRunway earns through intent-driven affiliate placement — users are in active travel planning mode, making them high-intent buyers:

1. **Flight affiliate links** — Each destination card links to a flight search (Skyscanner/Kayak affiliate) pre-filled with that route. Earn per click-through or booking.
2. **Hotel affiliate links** — Below destinations, surface hotel suggestions for each city via Booking.com or Hotels.com affiliate.
3. **Travel insurance** — Subtle banner or footer link to a travel insurance partner (e.g. World Nomads).
4. **Buy Me a Coffee** — Low-friction tip jar for users who find the tool genuinely useful.

This is indirect monetisation: the tool is free and useful, but every interaction (clicking a destination) is a natural hand-off to a revenue-generating partner.

## Acceptance Criteria

- [ ] New entry added to the `products` array in `app/products/page.tsx`:
  - `slug`: `"cityrunway"`
  - `name`: `"CityRunway"`
  - `tagline`: `"Discover where you can fly from any airport."`
  - `description`: `"Pick any departure airport and instantly see every destination you can reach by direct flight — airlines, cities, and routes at a glance. Built for curious travellers who want to explore their options, not parse a timetable."`
  - `status`: `"Live"`
  - `platform`: `"Web App"`
  - `href`: `"https://cityrunway.emes3ye.com"` (external link, new tab)
- [ ] Card uses `target="_blank"` with `rel="noopener noreferrer"`
- [ ] CTA reads "Explore destinations ↗" (not "View product →")
- [ ] Card renders correctly on mobile and desktop
- [ ] Build passes with `npm run build`

## Notes

CityRunway lives at `cityrunway.emes3ye.com` — link out directly, no internal product page needed.
The indirect monetisation angle (affiliate links) is a future task; this task is just the portfolio listing.
Future task: add a "Monetisation" section to the CityRunway product that describes the affiliate strategy in more detail, similar to how LeetView has a dedicated product page.
