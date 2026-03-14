# Task: Codex Helper Scripts — new-task, promote-task, task-status

- **ID**: 025
- **Phase**: v1.1
- **Priority**: p2-medium
- **Created**: 2026-03-14
- **Completed**: pending
- **Depends On**: none

## Description

Add simple bash wrappers to invoke Codex with existing command prompts so they can be run ad-hoc outside the headless runner. Scripts should re-read the prompt files each time and pass through arguments.

Scripts:
- `bin/codex-new-task` → reads `.claude/commands/new-task.md`, passes `$@` as arguments
- `bin/codex-promote-task` → reads `.claude/commands/promote-task.md`, passes `$@`
- `bin/codex-task-status` → reads `.claude/commands/task-status.md`

All should take an overridable `CODEX_CMD` env var (default `codex`) and mirror the `--allowedTools` used in the headless runner.

## Acceptance Criteria

- [ ] `bin/codex-new-task`, `bin/codex-promote-task`, `bin/codex-task-status` exist and are executable
- [ ] Each script reads the respective `.claude/commands/*.md` prompt fresh per run
- [ ] Arguments forwarded correctly to the prompt where applicable
- [ ] Uses the same tool allowlist and `--max-turns` as `run-codex-tasks.sh`
- [ ] Document usage examples in `docs/README.md` or a short `docs/codex-cli.md`
- [ ] `npm run build` succeeds

## Notes

- Keep implementation minimal; no extra dependencies
- Ensure scripts fail with clear errors if the Codex CLI is not found

