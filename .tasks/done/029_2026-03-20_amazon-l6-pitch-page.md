# Task: Amazon L6 Pitch — Recruiter-Facing "Why Hire Me" Page

- **ID**: 029
- **Phase**: v1.1
- **Priority**: p1-high
- **Created**: 2026-03-20
- **Completed**: 2026-03-20
- **Depends On**: 027 (recruiter portfolio base)

## Description

Create a dedicated, recruiter-facing page at `/open-to-work` (or `/l6`) that functions as a high-signal sales pitch for a Senior Software Engineer (L6) role at Amazon — or equivalent L6/Staff-level roles at other top-tier tech companies.

The page should read like a polished investor pitch deck in prose: confident, evidence-first, and built around real impact numbers. It must avoid generic "team player / passionate about software" language. Every claim must be anchored to a specific outcome, metric, or artefact.

### Target persona
Amazon recruiters or hiring managers screening for L6 candidates — they scan for scope, depth, judgment, and bar-raising behaviour. The page must surface those signals immediately without requiring them to dig.

---

### Page Structure

#### 1. Hero / Hook (above the fold)
- Name + current title: **Software Development Engineer II @ Amazon (4+ years)**
- One-line positioning: _"I build and own mission-critical financial systems at Amazon scale — billions of dollars, zero major incidents, and a track record of shipping things other engineers said were too complex."_
- Subtle "Open to L6 opportunities" badge/pill
- CTA: "Let's talk" → links to `/contact` or Calendly

#### 2. By the Numbers — Impact at a Glance
Visual stat cards (large numbers, short labels). Use the real figures:

| Stat | Label |
|---|---|
| **$7.66B** | Total licensed asset value automated (UEL Cap project) |
| **$1.6B** | Payment risk mitigated (India SVOD Iceberg — worldwide first) |
| **$59M** | GL journal entries automated (TRAM2GL Luna) |
| **3,500 hrs** | Manual work eliminated (India SVOD Iceberg) |
| **30×** | Query performance improvement (3 hrs → 6 min, A3P3 Lambda) |
| **2×** | Customer Obsession Award winner |
| **Exceeds High Bar** | Forte (Amazon performance review) rating, 2025 |
| **504K lines** | Code authored in 2025 alone |

#### 3. Deep Dive: 3–4 Flagship Projects
For each project: a short title, 2-sentence what/why, measurable outcome, and what L6 behaviour it demonstrates.

**Project 1 — UEL Cap Automation ($7.66B scope)**
- Owned the full technical design and delivery of an amortisation cap enforcement system touching 122,000+ run-of-series licences across 5 currencies
- VP-level visibility (tracked in Matthias's Asana); coordinated Accounting, Acquire, Cost Allocator, and PM teams across organisations
- L6 signal: ambiguous, org-wide problem → clear design doc → on-time delivery with full stakeholder alignment

**Project 2 — India SVOD Iceberg Launch (worldwide first, $1.6B risk)**
- Designed and delivered the first-ever India SVOD payment pipeline through Amazon's Iceberg system; eliminated ~3,500 manual processing hours
- Worked directly with Prime Video Business, Finance, Legal, and Accounting teams across time zones
- L6 signal: cross-org initiative with no playbook — drove it from blank page to production

**Project 3 — Security Bug: Found What the Red Team Missed**
- During TRAM Access Control Enhancement, identified a product-line-specific edit access vulnerability that the FORI OS Red Team (external security audit) had not caught
- Proactively flagged and fixed; acknowledged by VP-level Accounting leadership (Joe P, Dave H, Aniko)
- L6 signal: ownership beyond scope, security judgment, stakeholder trust

**Project 4 — A3P3 Lambda: 30× Performance**
- Inherited a broken reconciliation alarm (failing since August 2024); diagnosed root cause (448 DB round-trips per run), refactored to batch queries, migrated to Redshift SPECTRUM
- Reduced runtime from 3 hours to 6 minutes
- L6 signal: no one asked — took it on, fixed the underlying architecture, not just the symptom

#### 4. Amazon Leadership Principles — Evidence Mapping
A clean table or card grid mapping LPs to specific, named artefacts (not vague claims):

| Leadership Principle | Evidence |
|---|---|
| **Customer Obsession** | Won Q4 2024 + Q1 2025 FinSys Empty Chair Award; released TRAM Access Control ahead of schedule for accounting stakeholders |
| **Ownership** | Drove UEL Cap solo while team lead was OOO; owned Sev-2 response for 188 delayed partner payments (37 contracts, 182 resolved) |
| **Invent & Simplify** | Built automated email notifications for amortisation template changes on own initiative — no one asked |
| **Are Right, A Lot** | Pushed back on SNS/Salesforce integration proposal — identified 2/3 of fields were missing/wrong before external team set the wrong direction; wrote full technical assessment |
| **Dive Deep** | Diagnosed Hibernate flush-order race condition only visible outside debug mode; diagnosed n+1 join outage; traced Redshift IAM + DATASHARE → SPECTRUM migration path |
| **Deliver Results** | Exceeds High Bar performance rating; 250 code changes + 504K LOC in 2025; all major projects shipped on time |
| **Raise the Bar** | Certified Amazon interviewer (6+ loops); nominated for Bar Raiser (BRITNOM-124); selected as FinSys AI Bar Raiser to drive AI-Native adoption |

#### 5. Career Timeline (condensed)
Simple vertical timeline:
- **2018** — ACM ICPC Dhaka Regional (8th), BUET IUPC (9th), NCPC (7th) — competitive programming foundation
- **2018–2019** — Samsung R&D Bangladesh (iOS, VeoSens B2B healthcare)
- **2019–2020** — CodeMarshal (ML/CV: NID detector, 100% accuracy, no paid APIs)
- **2020–2021** — Tiger IT (Signal Protocol E2E encryption for desktop messaging)
- **2021–Present** — Amazon London (SDE II, Prime Video FinSys, financial systems at global scale)
- **2025–Present** — Building imfluence.co.uk (influencer platform for Muslim brands)

#### 6. What I'm Looking For
Short, honest paragraph:
- L6 / Senior SDE role at Amazon (or equivalent Staff Engineer at top-tier companies)
- Preference: systems with real financial or operational consequence — where correctness matters and the blast radius of a bug is measured in dollars, not pixels
- Open to: London / remote-friendly

#### 7. CTA
- Primary: "Book a 30-minute call" → Calendly
- Secondary: "Download CV" → PDF resume
- "Connect on LinkedIn" → linkedin.com/in/emes3ye

---

### Design Notes
- Page should feel like a *premium pitch document*, not a standard about page
- Use the existing design system (DM Sans body, Plus Jakarta Sans headings, #2D5A3D accent)
- Stat cards: large bold numbers in accent green (#2D5A3D), label in muted gray
- LP table: clean, borderless, alternating very-light background rows
- No stock images, no hero illustrations
- Add subtle fade-in animations on scroll (Intersection Observer, consistent with site)
- Meta title: "Shafiul Islam — Senior Software Engineer (L6) | Open to Work"
- Meta description: "4+ years at Amazon building mission-critical financial systems. $7.66B in automated asset management. Exceeds High Bar. Open to L6 opportunities."
- Add `noindex` meta tag option (configurable) in case Shafi wants this page private from general search

---

### Content Source Notes (do not include in page, for reference only)
- Resume: `/Users/shovon/Desktop/Personal/Interview/resume_shafi.pdf`
- Work logs: `/Users/shovon/Desktop/Personal/WORK LOG - 2024.docx`, `2025.docx`, `2026.docx`
- Performance data: `Shafi 2025 Year Report.docx`, `Personal Achievements Timeline.docx`
- All metrics above are sourced from those documents and are accurate

---

## Acceptance Criteria

- [x] Page exists at `/open-to-work` (or `/l6`) with correct routing
- [x] Hero section includes current role, one-line positioning statement, and CTA
- [x] "By the Numbers" section displays all 8 stat cards with correct figures
- [x] 4 flagship project deep-dives are present with metrics and L6 signal callouts
- [x] Leadership Principles evidence table is present with all 7 LPs mapped
- [x] Career timeline section is present and accurate
- [x] "What I'm Looking For" and CTA section are present
- [x] Page is linked from the existing recruiter/portfolio section (Task 027)
- [x] Meta title and description are set correctly
- [x] Scroll fade-in animations applied (Intersection Observer)
- [x] `npm run build` succeeds with no TypeScript or lint errors
- [x] Responsive at 375px, 768px, 1280px
- [x] All stat numbers match source documents exactly

## Notes

- The tone should be **confident, not arrogant** — let the numbers speak; avoid adjectives like "passionate", "driven", "innovative"
- All dollar figures are USD unless stated otherwise
- "Exceeds High Bar" is Amazon's top performance tier — make sure non-Amazon readers understand this context (add a brief footnote: "Amazon's top performance rating, awarded to <10% of engineers")
- The Bar Raiser reference may be sensitive — only include if Shafi confirms he's comfortable publishing it; default to omitting BRITNOM reference, keep the fact of being a certified interviewer
- The page is a *private recruitment tool* — consider adding it to the nav only as a hidden link, or gating it with a query param like `?ref=recruiter`
