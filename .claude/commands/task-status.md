Show the current state of the task board.

1. Count and list all files in `.tasks/backlog/` (show ID, date, title, phase, priority)
2. Count and list all files in `.tasks/active/` (show ID, date, title, phase, priority, depends on)
3. Count and list all files in `.tasks/done/` (show ID, date created, date completed, title)

Format as a clean summary:

```
📋 TASK BOARD — emes3ye.com
========================================

✅ DONE ([count])
  001 | 2026-03-14 → 2026-03-14 | Project Scaffold
  002 | 2026-03-14 → 2026-03-15 | Hero Section
  ...

🔨 ACTIVE ([count])
  003 | 2026-03-14 | About Preview | p0-critical | depends: 002
  ...

📥 BACKLOG ([count])
  011 | 2026-03-14 | Newsletter Signup | v1.1 | p2-medium
  ...

========================================
Next up: Task [ID] — [title]
```

If there are blocked tasks in active (dependencies not met), flag them as ⛔ BLOCKED.
