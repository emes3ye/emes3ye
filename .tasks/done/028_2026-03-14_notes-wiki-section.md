# Task: Notes / Wiki Section — Personal Knowledge Base

- **ID**: 028
- **Phase**: v1.2
- **Priority**: p2-medium
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: none

## Description

Add a `/notes` section that serves as Shafiul's personal knowledge base — a living document of everything he's learning and interested in. Topics can span software engineering, business, cooking recipes, productivity, Islam, investing, and anything else. The tone is personal and exploratory, not tutorial-polished.

Layout is a classic two-pane docs UI:
- **Left pane**: collapsible sidebar with categories and nested sub-sections (e.g. "Cooking → Bangladeshi Recipes", "Tech → Git Workflows")
- **Right pane**: the selected note rendered from MDX

Content is MDX-based (same as the blog), stored in `content/notes/` with a folder-per-category structure. The sidebar is auto-generated from the filesystem.

## Acceptance Criteria

- [x] `/notes` route exists; visiting it redirects to or renders the first available note
- [x] `/notes/[...slug]` dynamic route renders individual MDX notes
- [x] MDX notes stored under `content/notes/[category]/[slug].mdx` with frontmatter: `title`, `description`, `category`, `updatedAt`
- [x] Left sidebar lists categories and their notes, auto-generated from content directory
- [x] Active note is highlighted in the sidebar
- [x] Sidebar is collapsible per category (accordion-style, no external library)
- [x] On mobile (375px) sidebar becomes a top dropdown or slide-in drawer; right pane fills full width
- [x] At least 3 sample notes across 2+ categories included (e.g. one tech, one recipe, one other)
- [x] MDX prose styled consistently with the blog (headings, code blocks, lists)
- [x] Nav link to `/notes` added (desktop + mobile)
- [x] Page is fully responsive at 375px, 768px, 1280px
- [x] `npm run build` succeeds with no TypeScript or lint errors

## Notes

- Content path: `content/notes/[category]/[slug].mdx`
- Use `gray-matter` (already used by blog) for frontmatter parsing
- Sidebar state (open/closed categories) can be client-side only — `"use client"` is fine for the sidebar component
- Keep the two-pane layout to a max-width of 1280px, with sidebar ~260px wide
- No search needed in this task — can be a future enhancement
- Design language: same tokens (fonts, colours, spacing) as the rest of the site — think Notion meets the existing minimal aesthetic
- The left pane should feel like GitBook / Obsidian Publish, not a generic nav list
