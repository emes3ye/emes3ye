Move one or more tasks from `.tasks/backlog/` to `.tasks/active/`.

If $ARGUMENTS is provided, use it to identify which task(s) to promote:
- If it's a number (e.g., "011"), find the file starting with that ID in backlog/
- If it's a keyword (e.g., "newsletter"), search backlog/ filenames for a match
- If it's "all phase v1.1", move all backlog tasks with Phase: v1.1

If no argument is provided:
1. List all files in `.tasks/backlog/` with their ID, title, phase, and priority
2. Ask which task(s) to move to active

For each task being promoted:
1. Move the file: `mv .tasks/backlog/[filename] .tasks/active/[filename]`
2. Report what was moved

After moving:
- Show the current state: how many tasks in backlog/, active/, done/
- Suggest running `/build-next-task` to start building

Do NOT modify the task file contents — just move it.
