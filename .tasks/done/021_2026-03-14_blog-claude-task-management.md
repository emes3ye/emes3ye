# Task: Blog Post — How I Use Claude for Task Management

- **ID**: 021
- **Phase**: v1.1
- **Priority**: p1-high
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: none

## Description

Write and publish a full blog post about using Claude Code as an autonomous task management system — how the `.tasks/` folder system, custom slash commands, and `run-tasks.sh` replaced third-party project management tools (Jira, Linear, Notion) for building this site.

The post should cover:

- **The problem**: traditional PM tools break the flow between planning and execution; context-switching kills momentum
- **The solution**: a file-based task system that lives inside the repo — backlog/, active/, done/ folders, one markdown file per task
- **How it works**: anatomy of a task file (ID, phase, priority, depends-on, acceptance criteria), the three-folder flow, slash commands (`/build-next-task`, `/new-task`, `/promote-task`, `/task-status`)
- **The autonomous loop**: `run-tasks.sh` — how Claude picks up tasks headless, builds, verifies, commits, and moves to done without human input
- **Results**: 10 tasks, full MVP site, shipped overnight — no Jira, no Linear, no Notion, no integrations
- **Why it works better**: git-native history, zero external dependencies, Claude reads files natively, acceptance criteria double as automated QA
- **Who this is for**: solo founders, indie hackers, small teams who want to ship faster without PM overhead

Tone: personal and direct (matching existing blog posts). Include real examples from this project (actual task file snippets, the run-tasks.sh loop, CLAUDE.md).

Save as: `content/blog/how-i-use-claude-for-task-management.mdx`

Frontmatter:
- slug: `how-i-use-claude-for-task-management`
- tags: `[claude-code, agentic-development, productivity, task-management]`
- date: `2026-03-14`

## Acceptance Criteria

- [x] MDX file created at `content/blog/how-i-use-claude-for-task-management.mdx`
- [x] Frontmatter complete: title, date, excerpt, tags, slug
- [x] Post is 600–1000 words (substantive but not padded)
- [x] Covers all 7 topics listed in the description
- [x] Includes at least one real code/file snippet (task file example or bash snippet)
- [x] Tone matches existing posts (personal, direct, ends with "Jazakallah khair")
- [x] Post appears on `/blog` listing page sorted correctly by date
- [x] Post renders correctly at `/blog/how-i-use-claude-for-task-management`
- [x] `npm run build` succeeds
- [x] Responsive at 375px, 768px, 1280px

## Notes

- Look at existing posts in `content/blog/` for tone reference
- Real snippets from `.tasks/templates/task-template.md` and `run-tasks.sh` make the post credible
- This post is also a lead magnet — it demonstrates the system to other founders who might hire Carrot Soft
- No need to update `BlogPreview` in `app/page.tsx` — it calls `getAllPosts()` dynamically, so the new post will appear automatically
