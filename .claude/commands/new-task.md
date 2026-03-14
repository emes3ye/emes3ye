Create a new task file in `.tasks/backlog/`.

1. Check the highest task ID across ALL folders (backlog/, active/, done/)
2. Assign the next sequential ID (e.g., if highest is 020, use 021)
3. Use today's date in the filename
4. Filename format: `NNN_YYYY-MM-DD_short-description.md`

If $ARGUMENTS is provided, use it as the task description to generate the full task file.

If no argument is provided, ask:
- What should this task do? (brief description)
- What phase? (mvp, v1.1, v1.2)
- What priority? (p0-critical, p1-high, p2-medium, p3-low)
- Any dependencies? (task IDs or "none")

Generate the task file using the template from `.tasks/templates/task-template.md`.
Write clear, specific acceptance criteria based on the description.
Always include `npm run build` succeeds and responsive checks in acceptance criteria.

Save to `.tasks/backlog/` and report:
- The file path created
- Task ID assigned
- Reminder: use `/promote-task [ID]` to move it to active when ready
