# Radio Nyra SEO Phase Execution Status

**Updated:** November 19, 2026\
**Repository:** local working copy\
**Production:** no deployment performed

This register distinguishes work completed in the repository from work that depends on production access, business-owner confirmation, or time-based performance data.

## Completed locally

| Workstream | Completed work | Evidence / remaining check |
| --- | --- | --- |
| Audit and prioritization | Replaced unsupported keyword-metric claims with a source-based issue register and ranked recommendations. | See `RADIO_NYRA_SEO_AUDIT_AND_ACTION_PLAN.md`. |
| Keyword research | Mapped the 18 seed topics to intent, geography, qualitative opportunity, target page, and next action. | `outputs/01a1efd1-20cd-73c3-a52f-5fe7f6142370/RadioNyra_SEO_Keyword_Research.xlsx`; volume, difficulty, and competition remain marked not verified. |
| On-page SEO | Corrected the homepage frequency label, added the Hindi/Telugu topic to the homepage H1, created a dedicated podcast page, updated navigation/footer and sitemap, added missing canonicals, fixed city directory slugs, and replaced a dead press link. | The current build passed and generated 127 routes. The export contains 124 HTML documents and 101 unique sitemap URLs. Inspect production after deployment. |
| Telugu listener path | Replaced the broken “Listen Live” action on the Telugu landing page with a link to the RTV News on-demand archive. Updated the page copy so it does not promise an unconfigured Telugu online stream. | Current `lib/stations.ts` has no approved Telugu stream URL. Add it only after operations supplies it, then test actual playback. |
| Content plan | Prepared a 30-day calendar and eight editorial drafts. Seven are written; the guest recap is a production brief because no verified episode/guest was selected. | See `SEO_CONTENT_CALENDAR.md` and `content/SEO_30_60_90_EDITORIAL_DRAFTS.md`. Drafts are not wired into public blog routes or sitemap. |
| Podcast/video freshness | The standard prebuild step synced the latest 15 YouTube entries into the local feed used by the static build. | This happens through the existing build workflow; review descriptions and time-sensitive details before featuring a video in new editorial copy. |
| Measurement code | Confirmed audio click, play, pause, error, and actual `audio_stream_started` events exist in the player code. | The local build has no GA4/GTM ID configured, so these events are not known to be reaching an analytics property. |
| Page performance | Captured a live mobile PageSpeed report for the homepage: performance 67, LCP 9.5 s, TBT 350 ms, CLS 0, SEO 100; field data showed “No Data.” Compressed the decorative music art by 98% and Jyoti host image by 84% using right-sized WebP files, keeping the original images. | Rerun PageSpeed against production after deployment; obtain field data through Search Console/CrUX when available. Report: https://pagespeed.web.dev/analysis/https-www-radionyra-com/92s0il3n6v?form_factor=mobile |
| Technical crawl | Previous static crawl covered 124 exported HTML pages, 101 sitemap URLs, and 5,073 internal links; no unresolved internal targets or missing image alt attributes were reported. The latest export confirms the Telugu landing page has one self-canonical and the `/rtv-news` target is exported. | Does not substitute for Search Console or field performance data. |

## Still requires production/account access or owner confirmation

| Workstream | Required next action | Why it remains open |
| --- | --- | --- |
| Deployment | Deploy the reviewed local changes through Cloudflare Pages, then verify the live HTML and sitemap. | `wrangler.toml` targets the static `out` directory, but Wrangler is not installed/authenticated in this environment. The checkout has not been published to production. |
| Search Console and keyword data | Connect Search Console and export a dated 28-day baseline by query and page. Connect an approved keyword source for volume/difficulty if those figures are required. | No property or data connector is connected in this session. The workbook does not invent metrics. |
| Analytics | Configure the organization’s GA4 or GTM property and verify that `audio_stream_started`, video/podcast clicks, and page events arrive once per interaction. | `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_GTM_ID` are not configured in this local environment. |
| Telugu live stream | Provide the approved Telugu Radio.co streaming endpoint; then test it on desktop and mobile and restore the live-listen CTA. | The project currently stores an empty Telugu stream URL. Guessing an endpoint could break or misdirect listeners. |
| Core Web Vitals | Run dated mobile and desktop PageSpeed/CrUX checks on the homepage, Hindi page, Telugu page, podcast page, and Raleigh-Durham page. | One mobile lab run exists for the homepage, but the report had no field data. Retest after the image changes are live. |
| Directories | An official TuneIn profile and additional public listings were found; a listing owner must confirm control, stream URL, frequency, language, website, and logo, then request corrections. | Public discovery does not establish listing ownership or edit permission. Google Business Profile also requires eligibility and ownership confirmation. |
| Business claims | Have the owner verify displayed reach, email/social, event-attendance, and advertiser metrics with source and as-of date. | The current site displays figures, but this project contains no dated supporting exports. They are flagged for review and were not rewritten as facts in new copy. |
| Backlink outreach | Select a verified event, interview, or community resource and ask relevant partners to link to that useful asset. Log contacted site, date, URL, and outcome. | Prospects and strategy are documented; no outreach has been sent. |

## 30/60/90-day operating steps

- **Days 1–30 (Nov 19–Dec 18):** deploy and verify the local changes; confirm the stream and business facts; connect Search Console and analytics; capture the baseline and mobile performance reports; verify directory profiles; publish approved drafts at the planned cadence.
- **Days 31–60 (Dec 19–Jan 17):** review query/page exports; adjust titles and internal links based on evidence; expand distinct Triangle guides with named sources; publish the next four pieces; request corrections to verified listings; pursue two or three relevant community or event links.
- **Days 61–90 (Jan 18–Feb 16):** compare the same 28-day query/page period and analytics events against the baseline; revise pages with impressions and weak CTR; consolidate overlap only where query data supports it; review returning listeners and stream-start events.

The 60- and 90-day optimization decisions cannot be made honestly before their corresponding performance windows exist. Record actual changes and dates in this file when those windows arrive; do not report expected impact as measured growth.

## Latest verification

- `npm run build` passed after the Telugu listening-path and WebP image changes; Next.js generated 127 routes.
- The static export contains 124 HTML documents and 101 unique sitemap URLs. All sitemap entries resolve; the Telugu page has one self-canonical and its RTV archive link resolves.
- The previous full crawl checked 5,073 internal links without broken targets and found no missing image alt attributes. The newly added internal link points to an exported route.
- `npx tsc --noEmit --pretty false` still reports the known event-data inference errors in `app/news/page.tsx`, `components/home-view.tsx`, and `lib/event-data.ts`; these files are unchanged and the SEO edits add no new errors. Next.js build skips this type validation.
- `git diff --check` completed without whitespace errors.
