# emes3ye.com — Personal Brand Website

## Project Overview
Personal brand website for Shafiul Islam (emes3ye.com).
Stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, MDX for blog.
Design: Clean & minimal, Apple-inspired. No generic AI aesthetics.
Goal: Lead generation for Personal Brand, Carrot Soft (carrotsoft.uk) and digital marketing agency.

## Design System
- **Fonts**: DM Sans (body), Plus Jakarta Sans (headings 600-800) — via Google Fonts
- **Colors**:
  - Background: #FAFAFA (off-white)
  - Text: #1A1A1A (near-black)
  - Accent: #2D5A3D (deep green)
  - Secondary: #C8956C (warm copper)
  - Muted: #6B7280 (gray)
- **Principles**: Generous whitespace, large confident typography, subtle fade-in animations on scroll (Intersection Observer), mobile-first responsive design
- **No**: stock images, generic AI fonts (Inter, Roboto, Arial), purple gradients, excessive decoration

## Architecture
```
app/
  page.tsx              → Home (Hero + About + Ventures + Blog + CTA)
  about/page.tsx        → Full story, values, interests
  ventures/page.tsx     → Business portfolio
  blog/page.tsx         → Blog listing
  blog/[slug]/page.tsx  → Individual post
  contact/page.tsx      → Contact form
  not-found.tsx         → Custom 404
  api/contact/route.ts  → Contact form handler
content/
  blog/                 → MDX blog posts
components/
  layout/               → Nav, Footer, Layout
  ui/                   → Reusable UI components (buttons, cards, badges)
  sections/             → Page sections (Hero, AboutPreview, VentureCards, etc.)
```

## Commands
- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run lint` — Run linter

## Task System

Tasks live in the `.tasks/` directory and flow through three stages:

```
.tasks/backlog/   →   .tasks/active/   →   .tasks/done/
  (ideas)             (building now)        (shipped)
```

- `.tasks/backlog/` — Future tasks. Create new ideas here first. Move to active/ when ready to build.
- `.tasks/active/` — Tasks to build NOW. Claude picks from here (lowest number first).
- `.tasks/done/` — Completed tasks. Moved here automatically. Never modify.
- `.tasks/templates/task-template.md` — Template for creating new tasks.
- `.tasks/logs/` — Build run logs.

### File naming convention
`NNN_YYYY-MM-DD_short-description.md`

Example: `015_2026-04-02_halal-investment-calculator.md`

### How to pick up a task:
1. List files in `.tasks/active/` sorted by filename ascending (lowest number first)
2. Check "Depends On" field — skip if dependency task files are NOT in `.tasks/done/`
3. Read the task description and acceptance criteria
4. Implement fully
5. Verify ALL acceptance criteria are met
6. Run `npm run build` — fix any errors until it passes
7. Update the task file:
   - Change "Completed" from "pending" to today's date (YYYY-MM-DD)
   - Check off all acceptance criteria boxes with [x]
8. Move the file: `mv .tasks/active/[filename] .tasks/done/[filename]`
9. Git add all changes and commit: "Task NNN: [title] ✅"
10. Move to next pending task

### How to add a new task:
1. Copy `.tasks/templates/task-template.md` to `.tasks/backlog/NNN_YYYY-MM-DD_description.md`
2. Fill in all fields
3. When ready to build, move it from `backlog/` to `active/`

## Rules
- Always use TypeScript (strict mode)
- Always use Tailwind CSS (no inline styles, no CSS modules, no styled-components)
- Components go in the `components/` directory, organised by type
- All pages must be responsive (mobile-first: 375px → 768px → 1280px)
- Use semantic HTML and proper heading hierarchy (one h1 per page)
- Scroll animations: Intersection Observer only (no external animation libraries)
- Never use generic AI fonts (Inter, Roboto, Arial, system-ui)
- Prefer Server Components; use "use client" only when necessary
- Git commit after each completed task with clear descriptive messages
- If a build fails, fix all errors before proceeding
