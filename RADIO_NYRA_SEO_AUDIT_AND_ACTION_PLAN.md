# Radio Nyra SEO Audit and Growth Plan

**Audit date:** November 18, 2026
**Scope:** Current repository, Next.js metadata and route setup, generated sitemap/robots endpoints on the live site, public search-result discovery, and public radio-directory listings.
**Deployment status:** Code changes in this checkout are not yet live. No production deployment was performed.

## Executive summary

Radio Nyra already has useful SEO foundations: distinct metadata on key landing pages, canonical URLs on many routes, structured data, a robots file, a sitemap, internal links, and city and market pages. The live `robots.txt` and `sitemap.xml` both returned HTTP 200 on the audit date. The live sitemap contained 100 unique URLs and no duplicate URL entries; it did not include a dedicated podcast landing page.

The most actionable issues found were a wrong Telugu frequency (`99.3 FM-HD3`) in the homepage frequency banner while the site's other station information says `99.9 FM HD3`, and `/podcasts` redirecting to the general YouTube page. I corrected these in the working tree, created a server-rendered podcast landing page with unique metadata, added its sitemap and navigation links, and added canonical tags to the YouTube and North Carolina hubs. The homepage H1 now names Hindi and Telugu radio directly.

Search Console, analytics, a paid keyword database, and field performance data were not connected or available. Accordingly, current rankings, clicks, impressions, search volume, keyword difficulty, Core Web Vitals, and traffic change are **not verified**. This report makes no traffic-growth or ranking guarantees.

## Audit evidence and boundaries

- Production `https://www.radionyra.com/robots.txt`: HTTP 200; permits Googlebot, Bingbot, and other crawlers sitewide except `/api/`; includes the sitemap URL.
- Production `https://www.radionyra.com/sitemap.xml`: HTTP 200; 100 unique `<loc>` URLs, with no duplicates. `/podcasts` was absent before the local change. The working-tree sitemap now has 101 unique URLs.
- Production homepage/search crawl: the public page text showed `99.3 FM-HD3` for Telugu alongside several `99.9 FM HD3` mentions. The repeated site information and repository data support correcting the single banner value to 99.9; confirm against the station's current broadcast details before publishing.
- A public TuneIn profile exists for Radio Nyra. Its listing is discoverable at [TuneIn: Radio Nyra](https://tunein.com/radio/Radio-Nyra-999-s303043/). Search results also surfaced [TingFM](https://tingfm.com/radio/35019), [123LIVE](https://www.123live.com/en/radio/us/radio-nyra-10692/), and [World's Radio](https://www.worldsradio.com/stations/3c602e0a-c718-4ac7-be60-b77919a50533); their ownership, stream accuracy, and editability should be checked before campaign work.
- The repository is configured for Next.js static export. This audit cannot confirm live Google indexing, production response codes for every page, mobile field performance, stream playback, or business profile ownership.
- The prior September 10 audit document included keyword-volume/difficulty figures and claims about `/_next/` being blocked and a root canonical forcing all pages to `/`. Those claims are not supported by the current files/live robots response; the current root metadata has no global canonical and `robots.txt` does not block `/_next/`. Treat the prior numeric keyword estimates and causal traffic-loss narrative as unverified, not as measured facts.

## Prioritized issue register

| Issue and why it matters | Priority | Recommendation | Status | Expected impact | Verification |
| --- | --- | --- | --- | --- | --- |
| Homepage frequency banner labels Telugu as 99.3 FM-HD3, inconsistent with the rest of the site's 99.9 FM HD3 information. Incorrect station facts can confuse listeners and weaken trust. | High | Keep broadcast information consistent with the confirmed station details. | Corrected to 99.9 in `components/home-frequency-banner.tsx`; pending build and deployment. | More accurate local station information and fewer listener errors. | Inspect exported homepage HTML and the live page after deployment. Confirm the frequency with station operations. |
| `/podcasts` redirected to the general `/youtube` page, leaving podcast-intent visitors without a dedicated destination and preventing the sitemap from describing that page. | High | Give video podcasts and interviews their own indexable page and link it from navigation and footer. | Dedicated page, unique title/description/canonical, sitemap entry, and site links added in this checkout; pending build and deployment. | Better match for podcast and interview searches; a clearer path to watch content. | Confirm `/podcasts` exports as a content page, appears once in the sitemap, has a self-canonical, and is linked internally. Inspect live behavior after deployment. |
| The live sitemap had no `/podcasts` URL. A URL missing from a sitemap may be harder to discover, though sitemap inclusion alone does not guarantee indexing. | Medium | Keep the sitemap aligned with indexable pages and omit redirects, admin pages, and noindex submission forms. | `/podcasts` added locally. The live sitemap remains unchanged until deployment. | Better crawl discovery for the new content hub. | Parse exported `sitemap.xml`; check for unique URLs and exclude utility/admin pages. Submit the live sitemap in Search Console. |
| Five sitemap pages (`/partners`, `/markets`, `/trending-music`, `/video-library`, `/social-hub`) lacked explicit self-canonicals. | Medium | Set self-canonicals for intended indexable pages. | Added route-level canonicals; pending final build check. `/youtube` and `/north-carolina` also now have explicit canonicals. | Clearer preferred URLs where query parameters or aliases may exist. | Inspect final HTML for one correct canonical per sitemap page. |
| The homepage H1 was a brand tagline with no language or radio-format context. Searchers and assistive technology benefit from a direct topic heading. | Medium | Keep the brand voice but mention the Hindi and Telugu radio offer in the H1. | Updated in `components/live-now-hero.tsx`. | Clearer page topic and improved first-screen understanding. | Inspect the static homepage H1 and verify the visible layout at mobile and desktop widths. |
| The Telugu station's `streamUrl` is blank in `lib/stations.ts`. The repository therefore cannot establish that its online player starts playback. | Critical for listener conversion | Obtain the current approved Telugu stream URL from station operations and configure it. Do not substitute a guessed endpoint. | The Telugu landing page now links to the RTV on-demand archive instead of presenting a dead live-player action; stream configuration remains open. | Gives online visitors a relevant Telugu audio destination while preventing a false promise of live playback. | Add the approved endpoint, then test desktop/mobile playback, status, pause, and station switching. |
| Search volume, difficulty, competitive ranking, and current positions are not available from the connected sources. | High for planning | Use Google Search Console for queries/positions and Keyword Planner or a named SEO database for volume/KD; preserve the date, location, network, and source. | Not measured. The keyword workbook marks these fields unverified instead of using prior unsupported figures. | Enables evidence-based prioritization and baseline reporting. | Record dated exports and tool/source names; compare the same query and geography over time. |
| Field Core Web Vitals were unavailable, and one mobile lab run found a slow homepage LCP. | High | Reduce the oversized hero/host image downloads, then run mobile and desktop PageSpeed checks across the main landing pages and monitor field data when available. | Live homepage PSI mobile run: performance 67, LCP 9.5 s, TBT 350 ms, CLS 0; field data showed “No Data.” Two large local image assets were converted to responsive-size WebP variants. | Lower image transfer cost may improve load experience; the live score has not been retested after the local change. | [PageSpeed Insights mobile report](https://pagespeed.web.dev/analysis/https-www-radionyra-com/92s0il3n6v?form_factor=mobile); rerun after deployment and monitor Search Console/CrUX field data. |
| Homepage and community content display audience/reach figures, and some older search snippets use unsupported superlatives. No source or reporting date for the displayed figures was available here. | Medium | Keep only approved figures with an owner, source, and as-of date. Prefer factual descriptions to unverifiable “#1” or “largest” claims. | Needs content-owner confirmation; no audience numbers were changed. | More trustworthy copy and fewer stale claims in snippets. | Reconcile each claim to approved analytics or business records, then review live and indexed snippets. |
| Public radio-directory coverage exists but details are not fully verified across platforms. The TuneIn search result uses a broad legacy tagline and does not establish whether the listing's current stream and Telugu details are correct. | Medium | Claim/verify official listings, update language, stream links, market/frequency details, site URL, logo, and ownership; track edits and approval. | TuneIn presence confirmed; full listing audit remains open. Other listings surfaced but need direct owner/editor verification. | More accurate branded discovery and referral listening. | Check each platform's official profile and test each outgoing stream link after edits. |
| Several pages publish time-sensitive event/news items, and directory information can change. Stale local content can undermine relevance and listener confidence. | Medium | Add a review date and source to event/listing content; remove expired listings and refresh evergreen guides. | Editorial process recommended; content owners needed. | Better local usefulness and repeat visits. | Monthly review of dates, venues, hours, external URLs, and owner contacts. |

## Technical and on-page review

### Crawlability and indexation

- `robots.txt` is present, accessible, and does not block `/_next/`. Only `/api/` is disallowed in the current rules.
- `sitemap.xml` is present and accessible. It includes core, market, city, blog, show, and Telugu bulletin routes; the new podcast page is included in the local source now.
- `/admin`, `/analytics`, `/events/submit`, and `/directory/submit` carry `noindex` metadata or are absent from the sitemap. Keep them out of the index.
- Blog posts, show pages, city hubs, market pages, and RTV episodes use route-level or generated metadata. Several legacy city radio pages already canonicalize to their corresponding North Carolina city hubs, avoiding separate preferred URLs.
- Search Console is needed to confirm indexed/canonical-selected states, coverage errors, crawl requests, and performance. None can be inferred from the sitemap alone.

### Metadata and page structure

Key landing pages already have distinct metadata and intent-focused routes. The local implementation adds/clarifies metadata for the podcast hub and explicit canonicals for `/youtube` and `/north-carolina`. Avoid adding repeated `keywords` meta tags as a ranking tactic; focus on visible copy, page intent, internal links, and useful original content.

Recommended page targets and SERP copy:

| Page | Primary intent | Recommended title | Recommended description / on-page focus |
| --- | --- | --- | --- |
| `/` | Hindi/Telugu radio listening | Radio Nyra | Hindi & Telugu Radio, News & Podcasts | Listen live to Radio Nyra Hindi and Telugu radio, with music, community news, shows, interviews, and events. H1: “Hindi & Telugu Radio, Wherever You Go.” |
| `/indian-radio-usa` | Indian radio online in the USA | Indian Radio USA | Hindi & Telugu Live Radio | Radio Nyra | Listen to Hindi and Telugu radio online with Radio Nyra. Explore Bollywood and Tollywood shows, community news, interviews, and events. |
| `/bollywood-radio-online` | Bollywood/Hindi music listening | Bollywood Radio Online | Live Hindi Music | Radio Nyra | Listen to Radio Nyra Hindi for Bollywood music, shows, and community programming online and in Raleigh-Durham. |
| `/telugu-radio-usa` | Telugu radio and Tollywood music | Telugu Radio USA | Tollywood Music & News | Radio Nyra | Listen to Telugu music, news, and community programming with Radio Nyra online and on 99.9 FM HD3 in Raleigh-Durham. |
| `/podcasts` | Indian podcasts and interviews | Indian Podcasts & Interviews | Radio Nyra | Watch Radio Nyra video podcasts, interviews, and community conversations featuring Indian and South Asian voices in the USA. |
| `/shows` and `/shows/[slug]` | Radio shows and hosts | Radio Nyra Shows & Schedule | Meet the Hosts | Browse Hindi and Telugu programs, current show times, and host profiles; link each show page to the schedule and relevant episodes. |
| `/rtv-news` and `/rtv-news/[date]` | Telugu news audio | Telugu News Bulletins | RTV News on Radio Nyra | Listen to dated RTV Telugu news bulletins and read episode-specific summaries; keep episode titles and dates unique. |
| `/markets/raleigh-durham` | Local station and frequency | Indian Radio in Raleigh-Durham, NC | Radio Nyra | Listen to Hindi and Telugu radio in the Triangle; show verified HD channel and local coverage details. |
| `/north-carolina` and `/north-carolina/[city]` | Triangle community/local radio | South Asian Community in North Carolina | Radio Nyra | Explore city-specific community resources, verified events, and local listening information for the Research Triangle. Keep each city page distinct and useful. |
| `/events` | Local Indian/South Asian events | Indian & South Asian Events in Raleigh-Durham | Radio Nyra | Find current community event listings around Raleigh, Durham, Cary, and Morrisville; show dates, venues, and organizer links. |
| `/news` and `/blog/[slug]` | Indian/South Asian news and stories | Indian Community News & Stories | Radio Nyra | Publish original, dated coverage with named sources and clear local or cultural relevance. Keep post metadata specific to its subject. |
| `/advertise` | Reach South Asian audiences | Advertise to South Asian Audiences | Radio Nyra | Explore Radio Nyra's broadcast, digital, and event advertising options; use only approved audience figures and case studies. |

Descriptions are recommendations, not claims that search engines will display them verbatim. Page titles already in the repository often match these recommendations; confirm the rendered production HTML after deployment.

### Structured data and images

- Organization, RadioStation, BroadcastService, WebSite, and homepage WebPage JSON-LD are present in the app. Keep facts aligned with approved station, phone, social, and service-area information.
- Most inspected image components have descriptive `alt`; decorative graphics correctly use empty alt text. A full rendered-page check is needed to find missing attributes in all generated content.
- Static export uses unoptimized Next images. This is compatible with export, but does not by itself make large images efficient. Measure real image sizes and page performance before prioritizing conversions.
- A November 19, 2026 PageSpeed Insights mobile lab run on the live homepage scored 67 for performance and 100 for SEO. Lighthouse measured LCP at 9.5 s, TBT at 350 ms, and CLS at 0; CrUX field data was unavailable. The report estimated 951 KiB of image-delivery savings and 440 ms from render-blocking requests. This is a lab snapshot, not a real-user Core Web Vitals baseline.
- Based on the report, the repository now uses a 144×288 WebP version of the decorative homepage music art (528,688 bytes to 12,120 bytes) and a 640×640 WebP host image (258,852 bytes to 40,804 bytes). The original image files remain in place. Re-run PageSpeed after deployment to measure the result.

## Keyword plan

The workbook maps the 18 seed topics from the brief to intent, geography, relative opportunity, and an existing or planned destination. Search volume, keyword difficulty, and competitor metrics are explicitly marked **Not verified** because no source dataset or account access was supplied. Priority/opportunity labels are qualitative planning judgments, not ranking forecasts.

| Cluster | Target pages | Opportunity focus |
| --- | --- | --- |
| Indian/Hindi/Telugu radio USA | `/indian-radio-usa`, `/bollywood-radio-online`, `/telugu-radio-usa` | High relevance to core listen intent; national competition and demand require measurement. |
| Hindi music and Bollywood online | `/bollywood-radio-online`, homepage | Match direct play intent; make the Hindi listen action easy to find. |
| Podcasts, interviews, and talk shows | `/podcasts`, `/shows`, `/rtv-news` | Use dedicated category pages, useful episode text, host names, and links to full episodes. |
| Raleigh-Durham and North Carolina community | `/markets/raleigh-durham`, `/north-carolina`, city hubs, `/events` | Strongest geographic fit; create distinct local information rather than repeated city templates. |
| Indian news and entertainment | `/news`, `/blog`, `/rtv-news` | Publish original, dated, sourced coverage and summaries that add value beyond video embeds. |

## Local SEO and directory plan

- Keep Radio Nyra's real-world name, website, phone, approved address/service area, social links, and broadcast facts consistent across the site and directory listings.
- A Google Business Profile is not automatic for a radio brand. Google states eligible businesses must make in-person contact with customers during stated hours; confirm the actual studio/customer-visit setup before creating or editing a profile. If eligible, use the real business name and accurate address/service area, not keyword-stuffed naming. See [Google Business Profile eligibility](https://support.google.com/business/answer/13763036?hl=en) and [representation guidelines](https://support.google.com/business/answer/3038177?hl=en).
- Confirm the existing [TuneIn Radio Nyra profile](https://tunein.com/radio/Radio-Nyra-999-s303043/) is controlled by the organization. Review its public station name/tagline, current stream link, language, market, frequency, logo, website, and any Telugu channel distinction.
- Verify ownership and status for directory pages surfaced on TingFM, 123LIVE, and World's Radio before creating duplicates or submitting edits. Record URL, owner account, NAP/stream accuracy, date checked, and next review.
- Prioritize links earned through real media partnerships: event pages, community organizations, local cultural groups, universities, and interviewed artists. Offer a useful event recap, interview, or community resource. Avoid bulk submissions and paid/spam link packages.

## Content and listener growth

- Use the updated 30-day publishing plan in `SEO_CONTENT_CALENDAR.md` for one or two original posts per week.
- Give each useful article one main query and one listener action, such as Listen Live, open a dated Telugu bulletin, browse the schedule, or watch an interview.
- Add editorial summaries and accurate guest/show information to video and audio pages. Do not publish invented transcripts, episode highlights, audience counts, or ranking claims.
- Measure organic visits to live-player actions, stream starts, returning visitors, and podcast/video clicks once GA4/GTM events are verified. A visitor count alone does not show listening success.
- Keep playback user-initiated, preserve stream controls, and avoid intrusive popups.

## 30/60/90-day roadmap

| Period | Work | Completion evidence |
| --- | --- | --- |
| Days 1–30 | Deploy and verify the local SEO changes; confirm frequencies and Telugu stream endpoint; connect or export Search Console and analytics; check indexed URLs; measure key mobile pages; claim/review the TuneIn profile; publish the eight planned pieces at a sustainable cadence after editorial approval. | Production HTML and sitemap checked; playback tested; baseline report has date, geography, query/page exports, and CWV source; listing audit logged; approved article URLs live. |
| Days 31–60 | Use Search Console queries to refine title/description and internal links; expand the best-performing Raleigh-Durham guides with unique sources; publish the next four pieces; correct verified directory details; seek two or three relevant community/event media links. | Query/page review; refreshed city content; published articles; directory entries updated; earned links recorded. |
| Days 61–90 | Compare performance against the first 28-day baseline; improve pages with impressions but weak CTR; update or consolidate underperforming overlapping content; review returning listeners and play actions; maintain the publishing and listing review cadence. | 90-day comparison by page/query and engagement events, with changes tied to measured evidence. |

## Measurement plan

| KPI | Baseline | Measurement source | Review cadence |
| --- | --- | --- | --- |
| Organic clicks and impressions | Not available in this audit | Google Search Console | Weekly; compare rolling 28-day periods |
| Query/page positions and CTR | Not available in this audit | Google Search Console | Weekly |
| Indexed canonical pages and sitemap status | Live sitemap has 100 URLs; index status unavailable | Search Console Pages report + sitemap | Monthly and after release |
| Mobile LCP, INP, CLS | Field data unavailable; one homepage mobile lab snapshot recorded (LCP 9.5 s, CLS 0) | Search Console/CrUX plus PageSpeed Insights | Monthly and after the image optimization is deployed |
| Live listen actions and stream starts | Not measured | GA4/GTM events plus stream-provider logs | Weekly after event validation |
| Returning visitors and podcast/video engagement | Not measured | GA4 and YouTube analytics | Monthly |

Set numerical objectives only after capturing a reliable baseline and agreeing the reporting window. Do not use the old report's unsupported volume/difficulty figures or traffic-growth percentages as measured KPIs.

## Implementation status

### Completed in the working tree

- Corrected the isolated homepage frequency label from 99.3 to 99.9 FM-HD3.
- Replaced the `/podcasts` redirect with a dedicated, server-rendered video-podcast/interview landing page and unique metadata.
- Added `/podcasts` to the sitemap and linked it from the site navigation and footer.
- Added explicit self-canonicals for `/youtube` and `/north-carolina`.
- Added self-canonicals for `/partners`, `/markets`, `/trending-music`, `/video-library`, and `/social-hub` after the export audit found them missing.
- Fixed generated city-hub links for multi-word city names and replaced a stale press-page URL that returned HTTP 404.
- Updated the homepage H1 to name Hindi and Telugu radio.
- Changed the Telugu landing page's live-listen action to a relevant RTV on-demand link while the online stream endpoint is unconfigured; removed copy that promised Telugu live online playback.
- Converted two PageSpeed-identified image assets to smaller WebP files and updated their references; original source images were retained.
- Replaced the stale content calendar with a route-accurate 30-day plan.
- Prepared seven fact-checked editorial drafts and one interview production brief; these are not published content.
- Replaced the prior audit's unverified numeric keyword claims with a source-based audit and qualitative keyword map.

### Pending or blocked on data/access

- Deploy the built site, then recheck the live frequency, `/podcasts`, canonical tags, and sitemap. Changes are still only in this working tree.
- Confirm the Telugu stream URL with station operations and test the player.
- Connect Search Console/analytics and an approved keyword data source for numeric demand, difficulty, ranking, traffic, and engagement baselines.
- Measure mobile/desktop Core Web Vitals and rerun the internal-link crawl against production after deployment.
- Confirm audience claims, Google Business Profile eligibility/ownership, and full radio-directory data with their respective owners.

### Verification completed

- `npm run build` passed. Next.js compiled successfully and generated the static export routes.
- A second build after the Telugu listener-path change also passed and generated 127 routes. The export contains 124 HTML documents and 101 unique sitemap URLs; the Telugu page has one self-canonical and links to the exported RTV News route.
- The build reports that type validation is skipped by the project's Next.js configuration. A repeated `npx tsc --noEmit --pretty false` reports the same existing event-data inference errors in `app/news/page.tsx`, `components/home-view.tsx`, and `lib/event-data.ts`; none of those files were changed in this SEO pass, and the SEO changes add no new type errors.
- Static export review covered 124 HTML documents. All had a title and meta description. All 101 sitemap URLs resolve to exported pages and have exactly one canonical URL.
- The sitemap has 101 unique URLs, all resolving to exported pages. The previous full crawler checked 5,073 internal links and found no broken targets; the latest export confirms the new Telugu archive link resolves. No generated `<img>` tags were missing an `alt` attribute in the prior crawl.
- The live robots and sitemap endpoints returned HTTP 200. The stale Diwali URL linked from the press page returned HTTP 404 and has been replaced with the current events route in this checkout.
