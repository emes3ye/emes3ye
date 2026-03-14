Look in the `.tasks/active/` directory for task files.

1. List all .md files in `.tasks/active/`, sorted by filename ascending
2. For each file (starting from the lowest number):
   a. Read the file
   b. Check the "Depends On" field:
      - If "none" → this task is ready
      - If it lists task IDs (e.g., "001") → check that a file starting with that ID exists in `.tasks/done/`
      - If dependencies are NOT met → skip to the next file
   c. If dependencies are met → this is your task
3. If no actionable task is found, report "All tasks blocked or complete."

For the selected task:

1. Read the full description and every acceptance criterion carefully
2. Implement the task completely — create and edit all necessary files
3. After implementation, run `npm run build`
4. If the build fails, read the errors, fix them, and rebuild until it passes
5. Go through EACH acceptance criterion one by one and verify it is met
6. If any criterion is not met, fix the issue and re-verify
7. Update the task file:
   - Set "Completed" to today's date (YYYY-MM-DD format)
   - Check all acceptance criteria boxes: change `- [ ]` to `- [x]`
8. Move the completed task file from `.tasks/active/` to `.tasks/done/`:
   ```
   mv .tasks/active/[filename] .tasks/done/[filename]
   ```
9. Stage and commit all changes:
   ```
   git add -A
   git commit -m "Task [ID]: [task title] ✅"
   ```
10. Report:
    - What was completed
    - Any issues encountered and how they were resolved
    - What the next pending task is (if any)

IMPORTANT:
- Do NOT skip any acceptance criteria
- Do NOT mark a task done if the build fails
- Do NOT move on without committing
- Fix all issues before marking complete
- Only pick tasks from `.tasks/active/` — never from `.tasks/backlog/`
