# Task: Blog Reading Progress Bar + RSS Feed

- **ID**: 017
- **Phase**: v1.1
- **Priority**: p3-low
- **Created**: 2026-03-14
- **Completed**: 2026-03-14
- **Depends On**: 008

## Description

Add a reading progress bar to individual blog post pages (thin bar at the top of viewport that fills as user scrolls). Also add an RSS feed at /feed.xml so readers can subscribe via RSS readers.

## Acceptance Criteria

- [x] Progress bar appears on blog post pages only
- [x] Bar fills proportionally as user scrolls through post
- [x] RSS feed accessible at /feed.xml
- [x] RSS feed includes all published posts with title, date, excerpt
- [x] `npm run build` succeeds

## Notes

- Progress bar: thin (3px), accent color, fixed at top
- RSS can be generated at build time from the MDX files
