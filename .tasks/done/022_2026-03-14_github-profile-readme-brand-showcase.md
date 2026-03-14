# Task: GitHub Profile README — Personal Brand Showcase

- **ID**: 022
- **Phase**: v1.1
- **Priority**: p1-high
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: none

## Description

Prepare a polished GitHub Profile README for the special profile repository `emes3ye/emes3ye` so that the README renders on `https://github.com/emes3ye` and serves as a strong personal brand landing page. Keep it consistent with this site's design system and messaging.

Do NOT publish to a separate repo from here. Instead, create a ready-to-copy README in this project so it can be reviewed and iterated, along with simple instructions for creating and pushing the profile repo later.

Include:
- Clear hero intro (who you are, what you build, value proposition)
- Links: website (emes3ye.com), Carrot Soft site (carrotsoft.uk), email, LinkedIn, X/Twitter, GitHub
- Featured work: this site, Carrot Soft, notable repos; concise bullets with links
- Badges: followers, stars, profile views (shields.io), location/timezone optional
- GitHub cards: stats and top languages with `?username=emes3ye`
- Recent posts section linking to latest blog posts from `content/blog/` (manually listed, no automation)
- CTA: "Work with me" pointing to this site's Contact page
- Small note on faith-driven values if appropriate to brand voice

Maintain the profile content in the root `README.md` of this repo (this doubles as the source for your GitHub profile README). Include a short "How to publish" snippet at the bottom explaining how to create the `emes3ye/emes3ye` repo and push the README there.

Optional enhancement (if quick): Add a small "Follow on GitHub" CTA to the About page near the intro paragraph, reusing the existing Footer GitHub link styling.

## Acceptance Criteria

- [x] Root `README.md` contains complete, polished profile content tailored to `emes3ye`
- [x] Includes hero, links, featured work, badges, GitHub stats, and recent posts links
- [x] Uses correct username `emes3ye` in all badge and stats URLs
- [x] Includes step-by-step "How to publish" instructions for creating `emes3ye/emes3ye`
- [x] Tone matches site (personal, direct; no lorem ipsum)
- [x] If About-page CTA is added: renders cleanly on mobile and desktop, matches design system
- [x] `npm run build` succeeds
- [x] Responsive at 375px, 768px, 1280px

## Notes

- Profile README reference: GitHub shows the README from a repo named exactly `<username>/<username>` at `https://github.com/<username>`
- Use shields.io for badges (e.g., followers, stars) and `anuraghazra/github-readme-stats` for stats cards
- Maintain design system: DM Sans/Plus Jakarta sensibilities in copy and emoji usage; keep it minimal and confident
- Keep external image links reliable; do not add large local assets to this repo
