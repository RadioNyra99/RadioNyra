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
