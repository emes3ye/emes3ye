# Task: Merge /open-to-work Into /work + Fix Home Page Recruiter Section

- **ID**: 030
- **Phase**: v1.1
- **Priority**: p1-high
- **Created**: 2026-03-21
- **Completed**: 2026-03-21
- **Depends On**: 029

## Description

The `/work` page (`WorkContent.tsx`) contains entirely placeholder/fake career data —
Carrot Soft, Thoughtworks, Accenture UK, Sky UK — none of which is accurate.
The `/open-to-work` page (`OpenToWorkContent.tsx`) contains all the real, sourced data.

This task merges them:
1. **Replace** `/work` page content with the real data from `/open-to-work` (stats, projects, LP table, timeline, CTA)
2. **Delete** the `/open-to-work` route and redirect it to `/work`
3. **Update** the `RecruiterTeaser` home section — it also contains fake copy (references Thoughtworks, Accenture, Sky UK) and must be updated to reflect the real profile
4. **Add** a more visible "Open to Work" signal on the home page hero or nav area for recruiters

---

### Specific Changes

#### 1. `/work` page — replace with real content

Replace all fake data in `app/work/WorkContent.tsx` with the real content currently in
`app/open-to-work/OpenToWorkContent.tsx`. The `/work` page should now contain:

- **Hero** with "Open to L6 opportunities" pill, real positioning statement, CTA
- **By the Numbers** — all 8 stat cards (real figures):
  - $7.66B — Total licensed asset value automated (UEL Cap)
  - $1.6B — Payment risk mitigated (India SVOD Iceberg)
  - $59M — GL journal entries automated (TRAM2GL Luna)
  - 3,500 hrs — Manual work eliminated
  - 30× — Query performance (3 hrs → 6 min, A3P3 Lambda)
  - 2× — Customer Obsession Award winner
  - Exceeds High Bar — Forte rating, 2025
  - 504K lines — Code authored in 2025
- **Flagship Projects** — 4 projects with Outcome + L6 Signal callouts
- **Leadership Principles Evidence** table (7 LPs)
- **Career Timeline** — real timeline (competitive programming → Samsung → CodeMarshal → Tiger IT → Amazon → imfluence)
- **What I'm Looking For** section
- **CTA** — "Let's talk" + Download CV + LinkedIn

The `/work` page meta title should become:
`"Work & Experience — Shafiul Islam | Software Development Engineer II @ Amazon"`

Keep `noindex: false` (it should be findable, unlike `/open-to-work` which was hidden).

#### 2. Delete `/open-to-work` route, add redirect

- Delete `app/open-to-work/` directory entirely
- Add a redirect in `next.config.js` (or `next.config.ts`): `/open-to-work` → `/work` (permanent: 301)

#### 3. Update `RecruiterTeaser` home section (`components/sections/RecruiterTeaser.tsx`)

Replace all fake copy. The section should read:

**Label:** `For Recruiters & Hiring Managers`

**Heading:**
```
4+ years at Amazon.
Building at scale.
```

**Body:**
```
Software Development Engineer II at Amazon London — Prime Video FinSys.
$7.66B in automated asset management. Exceeds High Bar. Open to L6 / Staff Engineer opportunities.
```

**Skills pills** — replace fake list with real stack:
`Java`, `AWS`, `System Design`, `SQL`, `React`, `TypeScript`, `Distributed Systems`

**Buttons:**
- Primary: "View full profile →" → `/work` (already correct)
- Secondary: "Download CV" → `/resume.pdf` (already correct)

#### 4. Add a visible "Open to Work" marker on the home page

Add a small, tasteful "Open to Work" indicator visible to recruiters without being overbearing. Options (implement whichever fits best):

**Option A — Hero badge** (preferred): Add a pill/badge just above the hero headline in `components/sections/Hero.tsx`, similar to the one in `/open-to-work`:
```
● Open to L6 / Staff opportunities
```
Styled with `bg-accent/10 border border-accent/20 text-accent` — subtle green, pulsing dot.

**Option B — Nav link**: Add a subtly highlighted "Open to work" nav item that links to `/work`. Accent-coloured text, no background.

Implement whichever integrates more cleanly with existing components. Do not implement both — pick one.

---

### Files to Modify

| File | Action |
|---|---|
| `app/work/WorkContent.tsx` | Replace all fake data with real content from OpenToWorkContent.tsx |
| `app/work/page.tsx` | Update meta title; remove noindex |
| `app/open-to-work/` | Delete entire directory |
| `next.config.js` or `next.config.ts` | Add redirect /open-to-work → /work |
| `components/sections/RecruiterTeaser.tsx` | Update all copy with real data |
| `components/sections/Hero.tsx` OR nav component | Add "Open to Work" visible marker |

---

## Acceptance Criteria

- [x] `/work` page shows real Amazon career data — no references to Thoughtworks, Accenture, Sky UK, or Carrot Soft as "Founder & CEO"
- [x] `/work` includes all 8 stat cards with correct figures
- [x] `/work` includes 4 flagship project deep-dives with Outcome + L6 Signal
- [x] `/work` includes the 7-LP evidence table
- [x] `/work` includes the real career timeline (competitive programming → Amazon)
- [x] `/open-to-work` route is deleted
- [x] Visiting `/open-to-work` redirects to `/work` (301)
- [x] `RecruiterTeaser` on home page contains no fake company references (Thoughtworks, Accenture, Sky UK removed)
- [x] `RecruiterTeaser` skills pills reflect real stack (Java, AWS, System Design, etc.)
- [x] A visible "Open to Work" signal is present on the home page (hero badge or nav highlight)
- [x] `npm run build` succeeds with no TypeScript or lint errors
- [x] Responsive at 375px, 768px, 1280px

## Notes

- The `OpenToWorkContent.tsx` file can be used as the source of truth for all data — just adapt it into `WorkContent.tsx`
- The fake data in `WorkContent.tsx` was AI-generated placeholder content — none of it should survive this task
- Keep the `DownloadIcon` SVG (it's used in the CTA)
- The `/work` page should NOT have `noindex` — it's a public-facing work page, not a hidden pitch
- Do not add `noindex` to the home page — the "Open to Work" marker is intentionally public
