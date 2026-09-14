# Akash Godbole

A personal website with native essays, notes, and media. Built with Next.js and exported as static HTML for GitHub Pages.

## Development

```sh
npm install
npm run dev
```

## Publish a piece

Create `content/writing/your-title.md`. The filename becomes `/writing/your-title`.

```md
---
title: "Your title"
date: "2026-09-14"
description: "A short description for feeds and link previews."
kind: "Essay"
draft: true
---

Your opening paragraph.

## A section

Write in Markdown. Links, lists, quotes, code blocks, and images are supported.
```

- Use `Essay`, `Note`, or `Media` for `kind`.
- Keep dates quoted, in `YYYY-MM-DD` format. Use `YYYY-MM` when only the publication month is known; the page displays the month and year and omits precise timestamps from feeds and metadata.
- Drafts can be visited directly in `npm run dev`, with a visible draft notice. They are excluded from the homepage, archive, feed, sitemap, and production article output.
- When ready, set `draft: false`, run `npm run build`, and deploy `out/` using the existing hosting workflow.
- Published pieces appear automatically on the homepage, Writing, RSS, and sitemap. An empty published body fails the build.

## Images and media

Put media files in `public/media/` and reference them from Markdown:

```md
![A useful description of the image](/media/example.jpg)
```

For captions, audio, or video, use HTML in the Markdown:

```html
<figure>
  <img src="/media/example.jpg" alt="Describe the image" width="1200" height="800" loading="lazy" />
  <figcaption>A brief caption.</figcaption>
</figure>

<audio controls preload="metadata" src="/media/recording.mp3"></audio>

<video controls preload="metadata" poster="/media/poster.jpg">
  <source src="/media/clip.mp4" type="video/mp4" />
  <track kind="captions" src="/media/captions.vtt" srclang="en" label="English" default />
</video>
```

Include transcripts for audio and captions for video. Markdown is trusted repository content and supports raw HTML; do not feed visitor-submitted text into the renderer.

## Checks

```sh
npm run lint
npm run build
```

The site uses system fonts, no external content service, and no client-side article fetches. Domain metadata is configured in `app/layout.tsx` and `lib/writing.ts`; GitHub Pages uses `public/CNAME`.
