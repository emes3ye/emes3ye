# emes3ye.com — Developer Documentation

Personal brand website for Shafiul Islam ([emes3ye.com](https://emes3ye.com)).

> **Architecture and design-system reference:** see `CLAUDE.md` in the project root.

---

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Content**: MDX (blog posts)
- **Deployment**: Render (static/SSR) or Vercel

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
app/
  page.tsx                  → Home (Hero, About preview, Ventures, Blog preview, CTA)
  about/page.tsx            → Full story, values, interests
  ventures/page.tsx         → Business portfolio
  blog/page.tsx             → Blog listing
  blog/[slug]/page.tsx      → Individual post
  contact/page.tsx          → Contact form
  not-found.tsx             → Custom 404
  api/contact/route.ts      → Contact form handler

content/
  blog/                     → MDX blog posts (one file per post)

components/
  layout/                   → Nav, Footer, Layout
  ui/                       → Reusable UI (Button, Card, Badge, …)
  sections/                 → Page sections (Hero, AboutPreview, VentureCards, …)

docs/                       → Developer documentation (this folder)
```

---

## Writing a Blog Post

1. Create a new `.mdx` file in `content/blog/`:

```
content/blog/your-post-slug.mdx
```

2. Add frontmatter at the top:

```mdx
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "One-sentence summary shown on listing page."
tags: ["tag-one", "tag-two"]
slug: "your-post-slug"
---

Your content here…
```

3. The post appears automatically on `/blog` and at `/blog/your-post-slug` — no config needed.

---

## Design System

See `CLAUDE.md` for the full design-system reference (colours, fonts, spacing, animation rules).

Quick summary:

| Token | Value |
|---|---|
| Background | `#FAFAFA` |
| Text | `#1A1A1A` |
| Accent | `#2D5A3D` (deep green) |
| Secondary | `#C8956C` (warm copper) |
| Muted | `#6B7280` |
| Heading font | Plus Jakarta Sans (600–800) |
| Body font | DM Sans |

---

## Task System

Tasks live in `.tasks/` and flow through three stages:

```
.tasks/backlog/  →  .tasks/active/  →  .tasks/done/
```

See `CLAUDE.md` → "Task System" section for the full workflow, file naming convention, and slash commands.
