# RadioNyra UX Correction Audit

## Confirmed Homepage Issues

- The homepage was too long for a media-first experience. Important listening, news, podcasts, shows, partners, newsletter, advertiser pitch, testimonials, statistics, AI promo, and platform explanations all competed on one page.
- Several sections repeated the same positioning language about Radio Nyra as a community media network, which increased reading effort before users reached playable content.
- The RTV news player included the full archive on the homepage, creating extra scrolling where a compact latest-news player is more appropriate.
- Automatic install prompts and decorative global background effects added friction and performance cost without helping users listen faster.
- The live player was present, but the page around it diluted the primary action with many secondary CTAs.

## Changes Made

- Shortened the homepage to prioritize listening, current schedule, RTV news, latest discovery, podcasts, shows, partners, and newsletter.
- Removed homepage blocks that belong better on dedicated pages: audience-stat grids, YouTube analytics, testimonials, advertiser pitch, AI promo section, and “listen everywhere” explainer.
- Kept detailed SEO/content pages intact instead of deleting useful information from the site.
- Made the RTV homepage block use the latest player only, with archive access through `/rtv-news`.
- Reduced homepage podcast cards from eight to four.
- Reduced homepage show cards to four featured shows.
- Removed the automatic install-app popup from the global site shell.
- Removed the global animated background layer to reduce visual noise and rendering work.
- Added an `audio_stream_started` analytics event when the browser confirms playback has actually begun.

## Listenership Decline Investigation

Confirmed from the codebase:

- GA/GTM/Meta tracking only runs when the related environment variables are configured.
- Existing listen-click tracking can record intent before audio playback actually succeeds.
- Stream errors are tracked, and the new playback-start event gives a cleaner signal for actual successful listening.
- The current repo does not include private Radio.co, GA4, Search Console, or hosting analytics exports, so the 60K to 25K decline cannot be proven from source code alone.

Possible causes to verify with data:

- Homepage friction: users may have needed too much scrolling or parsing before listening.
- Mobile UX: stacked content, sticky controls, popups, or slow loading could reduce plays.
- Stream reliability: failed playback, buffering, CORS/audio errors, or station metadata failures.
- Traffic source changes: search ranking, social referral drops, paid campaign changes, or app traffic shifts.
- Measurement changes: tracking IDs, stream analytics definitions, bot filtering, or domain/app attribution may have changed.
- Performance: image weight, JavaScript volume, and global effects can hurt mobile engagement.

## Data Needed Next

- Radio.co listener sessions before and after the redesign.
- GA4 events for `listen_live_click`, `audio_play`, `audio_stream_started`, and `audio_error`.
- Mobile vs. desktop play-start conversion.
- Search Console clicks/impressions for top listening queries.
- Page speed/Core Web Vitals for homepage on mobile.
- Any deployment dates, DNS/domain changes, app changes, or campaign changes around the reported decline.
