# Radio Nyra website and SEO implementation report

Review date: 2026-10-25  
Website: https://www.radionyra.com/  
Project: Next.js App Router, React 19, Tailwind CSS 4, static export (`out/`)

## Summary

Implemented SEO metadata and crawlability changes, corrected static-export deployment output configuration, removed unsupported audience and campaign figures from public marketing/reporting surfaces, stopped the `/telugu` alias from auto-starting audio, and prepared a researched directory tracker. No production deployment, directory submission, analytics account connection, or Search Console submission was performed.

## Baseline findings

| Issue | Affected page or component | Severity | Fix | Verification |
|---|---|---|---|---|
| `/admin/` was blocked in `robots.txt`, preventing crawlers from seeing its noindex metadata. | `app/robots.ts`, admin route | Medium | Removed `/admin/` from the disallow list and added noindex metadata on admin pages. | Check generated `robots.txt` and `/admin` HTML metadata. |
| Sitemap included non-canonical or non-public routes and applied generic update dates. | `app/sitemap.ts` | High | Rebuilt the sitemap from public core routes and known city, show, news, testimonial, and blog data; omitted admin, submit, analytics, and alias routes. | Parse generated sitemap and confirm route-to-file coverage. |
| Root page metadata and structured data included unsupported details and duplicate/inaccurate search actions. | `app/layout.tsx`, `app/page.tsx`, `lib/seo-schemas.ts` | Medium | Revised titles/descriptions and graph identifiers; removed unsupported search action, default video duration, and selected unverified claims. | Inspect built HTML and parse JSON-LD. |
| `/telugu` redirected by rendering a page that auto-started playback. | `app/telugu/page.tsx`, `app/telugu/layout.tsx` | High | Reused the Telugu listening page without autoplay and gave the alias its own canonical metadata. | Check generated HTML and manually verify playback requires user action. |
| Audience, social, YouTube, campaign and testimonial metrics appeared as static values without a connected measurement source. | Homepage, YouTube hub, about, services, advertise, ecosystem, testimonials, analytics, admin dashboard, market pages | High | Removed unsupported public figures, made YouTube metrics depend on available API responses, and replaced fake analytics/admin values with explicit unavailable states. | Search changed source/output for stale hardcoded values; verify dynamic values only render from data. |
| Analytics page presented unsupported performance results; click intent could be confused with listening. | `/analytics`, player tracking | High | Replaced the page with a measurement-status explanation and distinguished `Listen Live` intent from `audio_stream_started`. | Inspect page and analytics event definitions; actual account event reporting still requires access. |
| Amplify artifact path was `.next` despite static export output. | `amplify.yml` | High | Set artifact base directory to `out`. | Production build and inspect configured output files. |
| A plaintext deployment credential was present in `DEPLOY.md`. | `DEPLOY.md` | Critical | Removed the credential block from the working file. It may remain in Git history and must be rotated by the account owner. | Confirm no plaintext credential remains in the current file; do not treat history as sanitized. |

This is a source and live-endpoint baseline, not a complete crawl or a measured performance audit. No historical analytics, Search Console report, Lighthouse run, or real-user Core Web Vitals data was supplied.

## Implemented changes

- Reworked global and page-specific metadata for the homepage, Telugu landing pages, kids shows, and noindex routes.
- Added descriptive homepage WebPage JSON-LD and aligned organization/station graph IDs; removed unsupported search action and selected unsupported structured-data properties.
- Rebuilt the XML sitemap with public routes and dynamic content slugs; excluded analytics, admin, submission forms, and the Telugu alias.
- Updated `robots.txt` so crawler-visible noindex pages can be crawled.
- Kept Radio.co stream URLs intact. The checked endpoints were:
  - Hindi: `https://streams.radio.co/s8d06d0298/listen`
  - Telugu: `https://s4.radio.co/sefba541aa/listen`
- Removed automatic playback from `/telugu`; manual Listen Live controls remain on the station page.
- Improved internal links between the station pages, schedule, RTV news, and podcasts.
- Removed unsupported audience, demographic, channel, and campaign-result numbers from public reporting and marketing sections. No listener growth or SEO improvement is claimed.
- Made YouTube channel metrics unavailable when the channel API does not return current values; removed hardcoded subscriber, views, video-count, and watch-hour fallbacks.
- Changed the admin dashboard to show unavailable data and unmonitored station health instead of invented metrics/activity.
- Changed Amplify's artifact directory from `.next` to `out`, matching Next.js static export.
- Removed the inline deployment credential from `DEPLOY.md`; credential rotation is still required.

## Directory research

Research notes and prepared Hindi/Telugu station details are in [RADIO_DIRECTORY_TRACKER.md](./RADIO_DIRECTORY_TRACKER.md). RadioIndia and Radiyox are marked **Ready for Submission** because the station copy and streams are prepared. Streema entries need correction; TuneIn and Internet-Radio.com require owner eligibility/account or technical checks. No directory has been submitted to or approved by Radio Nyra on this task.

## Measurement report

| Metric | Baseline | Current | Change |
|---|---|---|---|
| Organic sessions | Not available | Not available | Not calculated |
| Search clicks | Not available | Not available | Not calculated |
| Search impressions | Not available | Not available | Not calculated |
| Hindi Listen Live clicks | Not available | Not available | Not calculated |
| Telugu Listen Live clicks | Not available | Not available | Not calculated |
| Referral sessions | Not available | Not available | Not calculated |
| Core Web Vitals | Not measured | Not measured | Not calculated |

The source supports optional environment-configured GA4, Google Tag Manager, and Meta Pixel tags; this task did not inspect environment values or analytics accounts. The site has event hooks for player interactions, but no connected report was available to validate volume, consent configuration, or event delivery. Search Console data and a comparable pre-change period are required before reporting SEO results. A `Listen Live` click is an intent event, not a confirmed listener or listening session.

## Verification record

| Check | Result |
|---|---|
| Live Hindi stream HEAD request | HTTP 200, `audio/mpeg` (2026-10-25) |
| Live Telugu stream HEAD request | HTTP 200, `audio/mpeg` (2026-10-25) |
| Live `/robots.txt` | HTTP 200 (2026-10-25) |
| Live `/sitemap.xml` | HTTP 200 (2026-10-25) |
| Live `/telugu-radio-usa` | HTTP 200 (2026-10-25) |
| `npm run lint` | Pass: exit code 0; 0 errors and 129 warnings across the repository. |
| Static production build | Pass: `SKIP_YOUTUBE_SYNC=1 npm run build`; 119/119 static pages generated. YouTube snapshot syncing was skipped to preserve the existing user-edited snapshot. |
| Generated sitemap, robots, metadata and JSON-LD checks | Pass: 97 sitemap URLs, 0 missing exported pages; `/telugu` and `/analytics` omitted; canonical Telugu route included; one canonical on homepage and both Telugu pages; admin/analytics noindex directives present; homepage JSON-LD 2/2 valid and Telugu JSON-LD 1/1 valid. |
| Desktop visual check | Homepage rendered in Brave at desktop width (1536 px); navigation, frequency ribbon, both Listen Live buttons, show cards, and app links were visible. |
| Mobile visual check | Not completed. Computer Use was interrupted during the mobile viewport setup. |
| Browser-console review | Not completed. No console result is claimed. |

## Pending owner tasks

1. Rotate the deployment credential that was previously committed in `DEPLOY.md`; removing it from the working tree does not remove it from prior Git history.
2. Provide owner access to Search Console and GA4 (and confirm consent requirements) to establish a baseline and validate event delivery.
3. Submit the prepared Hindi and Telugu directory listings or correction requests through owner accounts; confirm any fees, licenses, rights, and current platform terms.
4. Confirm station directory artwork, contact authorization, current market/frequency details, and any distribution or rebroadcast rights before submission.
5. Review the generated static output and decide whether admin features should remain in a static export. The current admin session check is client-side and is not server-side access control.
6. Deploy only after the production owner reviews the build and hosting configuration; no deployment or DNS changes were made.
