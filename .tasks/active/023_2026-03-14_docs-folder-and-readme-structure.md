# Task: Restructure Docs — Move Project Docs to docs/ and Use Root README for Profile

- **ID**: 023
- **Phase**: v1.1
- **Priority**: p1-high
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: 022

## Description

Adopt a two-tier README strategy:
- Root `README.md` serves as the GitHub profile homepage content (personal brand landing, badges, links, CTA).
- Project/developer documentation moves to `docs/` (starting with `docs/README.md`) and relevant references updated.

Do not change content style; keep it consistent with the site's tone. Ensure the project remains fully buildable and that no public routes are affected.

## Acceptance Criteria

- [x] A `docs/` directory exists with `docs/README.md` containing project setup and developer instructions
- [x] Root `README.md` contains profile-facing content per Task 022
- [x] Internal references updated (if any) to point to docs/ instead of root README
- [x] Project builds successfully without changes to pages or components
- [x] `npm run build` succeeds
- [x] Responsive at 375px, 768px, 1280px

## Notes

- Keep CLAUDE.md as-is; it's already a good architecture/design reference
- Avoid breaking links in external docs (add a note in root README pointing to docs/)

