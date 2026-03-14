# Blog Post 2: How I Use Claude Code as My Project Manager — A Task System That Builds Itself

*By Shafiul Islam*

---

**Bismillah.**

In my first post, I wrote about building my personal website while I slept. But that was only half the story. The real breakthrough wasn't the code — it was the task management system I built around it.

Most developers who use AI coding tools work like this: open the tool, type a prompt, review the output, type another prompt. Rinse, repeat. The AI has no memory of what you've done, no sense of what's next, and no way to verify its own work.

I wanted something different. I wanted to define all the work upfront, walk away, and let the AI pick up tasks one at a time, build them, test them, commit them, and move on. A self-managing project board where the AI is both the developer and the task runner.

This post breaks down the system I built. It's simple, it's file-based, and you can steal it for your own projects today.

---

## The Problem With Flat Task Lists

My first attempt was a single `tasks.md` file — ten tasks in a numbered list. It worked for the initial build, but I immediately ran into problems:

**Context pollution.** Claude Code reads the entire file every session. Once I had 10 completed tasks and 5 new ones, it was wasting tokens reading old "done" items that didn't matter anymore.

**No history.** When did I finish the hero section? When did I add the blog? The flat file had no timestamps, no completion dates, no audit trail.

**No staging area.** I had ideas for future features (newsletter, dark mode, prayer time widget) mixed in with the tasks I wanted built right now. Everything looked equally urgent.

**Scaling pain.** Adding a new feature meant editing a long file, renumbering things, and hoping Claude picked the right one. It felt fragile.

I needed a system that separates *what I want to build someday* from *what I'm building now* from *what's already done*.

---

## The Three-Folder System

The answer turned out to be embarrassingly simple: three folders.

```
.tasks/
├── backlog/     ← Ideas and future tasks (staging area)
├── active/      ← Tasks to build NOW (Claude picks from here)
├── done/        ← Completed tasks (auto-moved, date-stamped)
├── logs/        ← Build run logs
└── templates/
    └── task-template.md
```

Each task is its own markdown file. The filename carries the metadata you need at a glance:

```
001_2026-03-14_project-scaffold.md
002_2026-03-14_hero-section.md
011_2026-03-14_newsletter-signup.md
```

Task ID. Date created. What it is. You can `ls .tasks/done/` and see your entire shipping history without opening a single file.

### How It Flows

```
IDEA → backlog/ → active/ → done/
```

**Backlog** is your brain dump. Every feature idea, bug fix, or improvement starts here. No pressure. No priority. Just capture it.

**Active** is your sprint. When you're ready to build something, you move it from backlog to active. Claude only reads from `active/` — it never touches the backlog, so your context stays clean.

**Done** is your history. When a task is complete, the file moves here with a completion date stamped inside. Git tracks the movement, so you have a full audit trail.

---

## Anatomy of a Task File

Every task follows the same template:

```markdown
# Task: Home Page — Hero Section

- **ID**: 002
- **Phase**: mvp
- **Priority**: p0-critical
- **Created**: 2026-03-14
- **Completed**: pending
- **Depends On**: 001

## Description

[What to build — specific and clear]

## Acceptance Criteria

- [ ] Hero fills full viewport height
- [ ] Both CTA buttons link correctly
- [ ] Fade-up animation plays on load
- [ ] Responsive at 375px, 768px, 1280px
- [ ] `npm run build` succeeds

## Notes

[Context, constraints, design references]
```

A few things to notice:

**Dependencies are explicit.** Task 002 depends on 001. Claude checks if 001 is in `done/` before starting 002. No more building a hero section before the project scaffold exists.

**Acceptance criteria are checkboxes.** Claude goes through each one, verifies it, and checks it off. If the build fails, it fixes the error before marking done. This is the closest thing to automated QA you can get without writing actual tests.

**Phase and priority give you planning power.** You can look at your backlog and see all v1.1 features at a glance, or filter for p1-high priority items.

**The completion date is your timestamp.** When Claude finishes a task, it stamps today's date in the "Completed" field. Combined with git history, you know exactly when every feature shipped.

---

## The Slash Commands

Claude Code supports custom slash commands — reusable prompt templates stored as markdown files. I built four that make the system work:

### `/build-next-task` — The Builder
This is the core command. It reads `active/`, finds the first task whose dependencies are met, builds it, verifies the acceptance criteria, moves the file to `done/`, and commits. This is what the autonomous task runner calls in a loop.

### `/new-task` — The Creator
Creates a new task file in `backlog/` from a description. It auto-assigns the next ID, uses today's date, and generates acceptance criteria from the template. You can type `/new-task Add dark mode toggle` and get a properly structured task file in seconds.

### `/promote-task` — The Scheduler
Moves a task from `backlog/` to `active/`. You can promote by ID (`/promote-task 015`) or by keyword (`/promote-task newsletter`). This is how you decide what gets built next.

### `/task-status` — The Board
Shows a clean overview of everything across all three folders. How many tasks are done, what's in progress, what's blocked, and what's in the backlog. It's your kanban board in the terminal.

---

## The "Go to Bed" Script

The magic glue is a bash script that runs Claude Code in headless mode (`-p` flag), looping through all active tasks:

```bash
for i in $(seq 1 $MAX_ITERATIONS); do
    # Check if there are active tasks left
    ACTIVE_COUNT=$(ls -1 .tasks/active/*.md | wc -l)
    if [ "$ACTIVE_COUNT" -eq 0 ]; then
        echo "All done!"
        break
    fi

    # Run Claude headless
    claude -p "Read .claude/commands/build-next-task.md and follow those instructions." \
        --allowedTools "Read" "Write" "Edit" "Bash(npm *)" "Bash(git *)"

    sleep 15  # Rate limit protection
done
```

The `--allowedTools` flag pre-approves what Claude can do, so it doesn't stop to ask permission every 5 seconds. The script logs everything to `.tasks/logs/` so you can review what happened while you were away.

Run it, go to bed. Wake up, check the logs and `git log`.

---

## Why Files, Not a Database?

You might wonder why I didn't use Jira, Linear, Notion, or a database. A few reasons:

**Git-native.** Every task movement is a git operation. You get full version history, diffs, and the ability to roll back. Try doing that with a Notion board.

**Claude reads files.** Claude Code works with your filesystem. It can `ls .tasks/active/`, read a markdown file, and `mv` it to `done/`. It can't query a Jira API without MCP configuration. Files are the path of least resistance.

**Zero dependencies.** No SaaS accounts, no API keys, no sync issues. The system lives in your repo. Clone it and you have everything.

**Human-readable.** You can browse the task files in GitHub, in VS Code, or with `cat` in the terminal. No UI required. The filenames alone tell you the story.

**Portable.** This system works for any project. Swap the task contents and it works for a SaaS product, a mobile app, a data pipeline, or a documentation site. The structure is universal.

---

## Lessons From Using This System

**Start tasks in the backlog, not active.** It's tempting to create tasks directly in `active/`, but the backlog forces you to think before you commit. Not every idea deserves to be built next.

**Keep tasks atomic.** One task = one deployable unit. "Build the about page" is good. "Build the about page and fix the nav and add dark mode" is three tasks pretending to be one.

**Dependencies prevent chaos.** Without them, Claude might try to build the blog post page before the blog system exists. The dependency chain ensures things happen in order.

**The date in the filename is more useful than you'd think.** Six months from now, `ls .tasks/done/` gives you a chronological timeline of your entire project. You can see when you shipped the MVP, when you added the newsletter, when you fixed that nasty bug.

**Backlog grooming matters.** Once a month, open `backlog/` and delete or rewrite tasks that no longer make sense. A stale backlog is worse than no backlog.

---

## Recreate This For Your Project

The full system is open source. Here's how to set it up:

```bash
# Create the structure
mkdir -p .tasks/{backlog,active,done,logs,templates}
mkdir -p .claude/{commands,agents}

# Copy the template
# (grab task-template.md from my repo)

# Create your first task
cp .tasks/templates/task-template.md .tasks/backlog/001_$(date +%Y-%m-%d)_your-first-task.md
# Edit it with your details

# When ready to build, move to active
mv .tasks/backlog/001_*.md .tasks/active/

# Run it
claude
> /build-next-task
```

That's the entire system. Three folders, a template, and a few slash commands.

---

## What's Next

The task management system is the foundation. In the next post, I'll cover the subagent system — how I use specialised AI reviewers that check code quality, verify accessibility, and run E2E checks after every task. Think of it as automated code review that runs while you sleep.

If you want to follow along, the full project (including all task files, commands, and the runner script) is on my GitHub: [github.com/emes3ye/emes3ye.com](https://github.com/emes3ye)

If you build something with this system, let me know. I'd love to see what you ship.

*Jazakallah khair for reading. May your backlogs stay short and your done/ folder stay full.*

---

*Built with intention. Managed with discipline. Alhamdulillah.*
