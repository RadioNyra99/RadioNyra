# Radio Nyra Technical Audit

Date: 2026-08-20

## Current Architecture

- Framework: Next.js 16.0.10 App Router with React 19.2.0.
- Rendering/deployment mode: static export via `output: "export"` in `next.config.mjs`.
- Styling: Tailwind CSS 4, Radix UI primitives, shadcn-style component wrappers in `components/ui`.
- Package manager state: npm scripts are present, with both `package-lock.json` and `pnpm-lock.yaml` in the repo. The active local install is npm.
- TypeScript: enabled with `strict: true`, but production builds currently skip type validation through `typescript.ignoreBuildErrors`.

## Current Pages

- Primary routes include home, about, advertise, contact, events, schedule, podcasts, blog, news, hosts, YouTube, video library, shorts, social hub, partners, services, markets, FM stations, gallery, FAQ, legal pages, and admin pages.
- Dynamic routes exist for blog posts, shows, testimonials, gallery years, and market pages.
- Static metadata routes exist for `robots.txt` and `sitemap.xml`.

## Current Components

- Global shell: `Navigation`, `Footer`, `GlobalSiteFeatures`.
- Audio: `AudioProvider`, `AudioPlayer`, `ListenLiveButton`, `FrequencyBar`.
- Homepage/media: `HomeView`, `YouTubeWatchSection`, `VideoCard`, `ShowsMarquee`, `PartnersMarquee`, `NewsletterSection`, `AdvertiserSection`.
- UI system: Radix-based components under `components/ui`.

## Current Integrations

- Radio.co streams and status APIs are configured in `lib/stations.ts`.
- YouTube content uses `lib/youtube-service.ts`, with API, RSS proxy, and hard-coded fallback videos.
- Analytics scaffolding exists in `lib/analytics.ts`; GA4, GTM, and Meta Pixel are conditionally loaded from public environment variables.
- Social/contact/platform data is centralized in `lib/site-data.ts`.

## Technical Issues Found

- `npm run lint` was broken because ESLint and config files were missing.
- `next build` passes, but type validation is explicitly skipped.
- The repo contains both npm and pnpm lockfiles, which can cause dependency drift.
- Several root log/build artifacts are tracked or untracked in the working tree.
- Some visible/content files have prior encoding artifacts, especially old copied text and comments.
- Many core files already had uncommitted changes before this pass.

## SEO Issues

- Global metadata, Open Graph data, sitemap, robots, and structured data are present.
- The sitemap is manually maintained, so new routes can be missed.
- Local SEO is currently market-focused rather than city-page focused. That avoids thin city pages, but dedicated Raleigh/Durham/Cary/Morrisville/Apex/Chapel Hill content can be expanded later with unique copy.

## Performance Issues

- Homepage is client-heavy and includes video, animation, global popups, chat, and a 3D scene.
- YouTube embeds are deferred until a user opens a video card, which is good.
- `next/image` is not broadly used because static export has `images.unoptimized: true`; images rely on manual optimization.
- Build warns that `baseline-browser-mapping` is older than two months.

## UX Issues

- Desktop dropdown parent links for Listen, Community, and Media previously pointed to fragment routes rather than durable pages.
- The audio player is persistent and visible, but needed stronger control labels and event instrumentation.
- Mobile navigation is comprehensive and scrollable, but should be visually regression-tested at 320px through tablet widths.

## Accessibility Issues

- Several icon-only controls needed explicit accessible labels.
- More automated accessibility testing should be added before production.
- The project should keep auditing keyboard focus behavior for menus, popups, audio controls, and video dialogs.

## Recommended Changes

- Keep the existing architecture and improve incrementally.
- Re-enable type checking in production after resolving TypeScript errors.
- Generate sitemap entries from route/data sources where practical.
- Continue moving repeated content into typed data structures.
- Add Playwright or equivalent smoke tests for navigation, audio controls, YouTube dialogs, and contact/advertise forms.
- Run a dependency audit remediation pass separately, avoiding force upgrades until breaking changes are reviewed.

## Incremental Review — 2026-11-12

### Verified architecture and constraints

- The app is Next.js 16 App Router with React 19 and Tailwind CSS 4. `next.config.mjs` uses `output: "export"`, so production pages are static.
- Main content comes from `content/radio-content.json`, supporting TypeScript data modules, and a YouTube RSS snapshot in `lib/youtube-live.json`.
- Hindi and Telugu playback live in the shared `AudioProvider` and `AudioPlayer`. The stream URLs were left unchanged.
- YouTube has no-key RSS sync (`scripts/sync-youtube.mjs`) and an archived fallback. The build runs the sync before static export and retains the last good snapshot if the feed fails.
- `.env.example` shows external contact and newsletter endpoints are not configured. No database, secure admin service, AI provider, or transcript source is configured in this checkout.

### Implemented in this pass

- Homepage search now filters the local index by content category, ranks matching title/keyword/description text, shows relevant thumbnails, and retains an empty state. It has no network loading state because results are local.
- The YouTube homepage section now displays the newest four full-length uploads from the synchronized feed, with upload dates. The latest RSS refresh completed on 2026-11-12; the channel feed is the source of record.
- Episode details use the actual channel description and verified feed metadata. The UI states that transcript and chapter timestamps are unavailable; no AI summary or fabricated highlights are shown.
- `/listener-voice` accepts song requests, show feedback, topic ideas, and messages through the configured contact provider. The endpoint is currently blank, so delivery requires provider configuration.
- Removed the browser-embedded admin password flow. Since static export has no server-side session validation or protected database, all admin routes now explain that secure authentication and storage are required before the tools can be enabled.
- Reduced the global end-of-page spacing and filled the reserved fixed-player area with the footer color to avoid a detached blank strip while preserving room for the persistent player and mobile navigation.

### Remaining work requiring backend services or verified source data

- Persisting listener submissions, actual poll voting, and an administrator review dashboard require a protected backend/database and authenticated server sessions.
- AI episode summaries, highlights, tags, and timestamps require transcript or source-text access plus a server-side AI integration and an editorial approval step. No AI-generated copy is shown without those sources.
- Blog draft generation currently has no connected AI service. Admin tools are gated until secure authentication is added.
- Audience figures, partner testimonials, and their ratings are static content. Confirm their source and current approval before treating them as verified reporting.
- The contact/newsletter provider endpoints, Telugu stream URL, contact details, and approved Steve Rao photo remain project configuration/content tasks.

### Checks

- `npx tsc --noEmit --pretty false` passed before the final homepage feed prop and footer-spacing edits; rerun after those edits.
- Local HTTP checks returned 200 for `/`, `/listener-voice`, `/admin`, and `/admin/dashboard`.
- Full lint and production build status should be recorded after the final rerun; production build currently intentionally skips type errors in Next config, so standalone `tsc` remains important.
