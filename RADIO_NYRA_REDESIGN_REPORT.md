# Radio Nyra — Redesign & Optimization Final Report

Date: 2026-10-12

## 1. Summary

The existing Next.js site was redesigned in place across every public route: the
visual system, homepage, navigation, inner pages, metadata and the persistent
audio player were all reworked so the site leads with listening and visuals
instead of long promotional text. No page was deleted, no working integration was
removed, and nothing was deployed.

## 2. Architecture (unchanged)

- Next.js 16 App Router, React 19, Tailwind CSS 4, Radix/shadcn UI, TypeScript strict.
- Static export (`output: "export"`) — 115 static pages generated.
- Streams: Radio.co Hindi (99.9 FM HD4) and Telugu (99.9 FM HD3) from `lib/stations.ts`.

## 3. Key Changes

### Design system (shared)
- Editorial palette in `app/globals.css`: ink-on-paper light theme, restrained brand
  red (#d9241c), dark theme, consistent radii.
- Shared primitives: `Section` / `SectionHeading` (`components/section.tsx`),
  `PageHeader` (`components/ui/page-header.tsx`), `.media-card` with fixed aspect
  ratios (1:1, 4:3, 16:9, 9:16), `.eyebrow`, `.lede`, `.section-title`.
- Focus-visible styles and a `prefers-reduced-motion` block that disables all
  animation for users who ask for it.

### Homepage (`components/home-view.tsx` and section components)
Order is now listener-first: live hero → city hubs → on-air/coming-up → RTV news →
featured shows → latest podcasts → latest news → featured videos → community &
events → partners → advertise strip. Removed: statistics grids, AI promo, audience
pitch blocks, testimonial walls and duplicated positioning copy.

### Persistent mini-player (`components/audio-player.tsx`, `components/audio-context.tsx`)
- The `<audio>` element is mounted once, outside the visibility conditional and
  outside route components, so navigating internal pages keeps playback and never
  creates a second stream.
- Fixed a real double-toggle bug: the `showAudioPlayer` custom event and its
  callers both toggled play state, so "Listen Live" could start-then-immediately-
  stop playback. Intent now travels on the event (`toggle` flag) and `play()` /
  `pause()` are idempotent.
- **External pause sync (new):** browsers, OS media keys and disconnected headsets
  can pause the element without touching app state; previously the UI kept showing
  "Pause" while nothing was audible. The element now reports `onPause`/`onPlay`
  back into state (guarded so programmatic pauses and station-switch `src` swaps
  are not misread), and the controls recover by pressing play again.
- Buffering indicator, error message with exponential-backoff reconnect
  (1s → 16s), Media Session metadata and lock-screen controls, hide-while-playing
  button, station dropdown, volume/mute.

### Navigation & popups
- Removed the intrusive "Advertise With Us" popup (`components/advertise-popup.tsx`
  deleted) and the automatic install-app prompt from the global shell.
- Compact header with dropdowns organised around listener journeys (Listen,
  Shows, Podcasts, News, Videos, Events, Community, About) plus search.
- Mobile: bottom navigation (Listen / News / Events / Near Me / Ask Nyra) and a
  floating play button that never overlaps the mini-player.

### Inner pages
- Oversized italic `font-black`/`text-8xl`-`text-9xl` headings replaced with the
  shared `PageHeader` + `font-extrabold` scale on all public pages (schedule,
  about, contact, hosts, press, services, partners, faq, festival calendar,
  community sub-sites, markets, SEO landing pages, etc.).
- `font-black` → `font-extrabold` across all non-admin pages and components.
- Existing SEO copy, structured data, canonicals and URLs were preserved; the
  schedule page keeps its day-tab behaviour and BroadcastEvent schema.

### SEO
- Fixed duplicated titles (`Schedule | Radio Nyra | Radio Nyra`) caused by the
  root `%s | Radio Nyra` template stacking on page titles that already contained
  the brand; keyword-rich titles use `title.absolute` where needed.
- Added metadata layouts for 11 client pages that previously exported none and
  fell back to the homepage title (near-me, directory, testimonials, services,
  festival-calendar, ecosystem, creative-studio, syndication, community-impact,
  interviews, shorts).
- `robots.txt` and `sitemap.xml` verified present and correct.

### Technical quality
- Re-enabled TypeScript checking in production builds (removed
  `typescript.ignoreBuildErrors`) — the build now type-checks and passes.
- ESLint: 0 errors (111 pre-existing unused-symbol warnings remain, mostly in
  components not part of the redesign).

## 4. Verification Performed

| Check | Result |
|---|---|
| `npx tsc --noEmit` | Pass (0 errors) |
| `npx eslint .` | 0 errors, 111 pre-existing warnings |
| `npx next build` (static export, type checking on) | Pass — 115/115 pages |
| Route check (52 public routes + dynamic pages) | 52/52 HTTP 200 |
| Static export contents | All key HTML + robots.txt + sitemap.xml present, audio element and stream URLs embedded, no popup markup |
| Live playback in browser (Hindi 99.9 FM HD4) | Plays — verified `paused:false`, progressing currentTime, `icy-name:Radio Nyra Hindi`, 128 kbps |
| Playback survives internal navigation | Verified — same audio element continues on /podcasts, single `<audio>`, no duplicate stream |
| Station switch Hindi ↔ Telugu | Verified — correct stream URL each way |
| Pause / restart / hide-while-playing | Verified |
| External pause sync (simulated browser pause) | Verified — UI returns to "Listen" and restart works |
| No autoplay on load | Verified — element starts paused on fresh load and after reload |
| Mobile layout (390×844) | No horizontal overflow, player fits, bottom nav and FAB present, hero button 48px |
| Console | Clean except a pre-existing third-party Apollo tracker SSL warning (go.radionyra.com) |

**Honest limitation:** the external-pause-at-t=180 event observed during testing
was the preview browser suspending the hidden webview (session restart), not a
site bug — but it exposed the state-desync described above, which is now fixed.

## 5. Listener-Decline Investigation (60K+ → ~25K)

**What the codebase proves:**
- Analytics (GA4/GTM/Meta) only load when environment variables are configured, so
  historical listener counts cannot be validated from source alone.
- The old click tracking recorded *intent* (`listen_live_click`) before audio
  actually started. A listener whose playback failed still counted as a "listen
  click", inflating earlier numbers. The new `audio_stream_started` event fires
  only when the browser confirms playback, giving a cleaner (and likely lower)
  but honest signal — part of a reported decline may be a measurement change.
- The previous site carried heavy global friction: automatic install prompts, an
  advertising popup, a global animated background layer, a 3D scene and a very long
  homepage — all of which hurt mobile play-start conversion, the most likely real
  listener loss. These are now removed.
- Stream reliability: both Radio.co endpoints verified live (200, audio/mpeg,
  128 kbps). The player now has reconnect-with-backoff and honest error states.

**What cannot be proven from this repo (needs team data):**
- Radio.co listener-session counts before/after the change.
- GA4 funnel: `listen_live_click` vs `audio_stream_started` vs `audio_error`,
  split mobile/desktop.
- Search Console clicks for listening queries; any campaign/DNS/app changes
  around the decline window.

**Recommendation:** compare Radio.co sessions with the new `audio_stream_started`
count for the same period. If stream-starts track Radio.co but "listen clicks"
were higher historically, the decline is (partly) a tracking-definition artefact.
If stream-starts genuinely fell with traffic flat, investigate mobile performance
and referral sources — both now materially improved by this redesign.

## 6. Files Changed (summary)

- Design/global: `app/globals.css`, `components/section.tsx`, `components/ui/page-header.tsx`
- Homepage: `components/home-view.tsx`, `live-now-hero.tsx`, `coming-up-schedule.tsx`,
  `popular-shows-section.tsx`, `featured-podcasts-section.tsx`, `latest-news-section.tsx`,
  `featured-videos-section.tsx`, `community-events-section.tsx`, `city-selector-bar.tsx`
- Player: `components/audio-player.tsx`, `components/audio-context.tsx`,
  `components/global-site-features.tsx`, `lib/audio-player-utils.ts`
- Shell: `components/navigation.tsx`, `components/footer.tsx`, `components/mobile-bottom-nav.tsx`,
  `components/mobile-fab.tsx`, `components/site-search.tsx`, `components/nyra-chat.tsx`
- Deleted: `components/advertise-popup.tsx`
- Pages: ~25 `app/**/page.tsx` restyled; 11 new metadata `layout.tsx` files;
  title fixes across layouts; `app/sitemap.ts` and `next.config.mjs` updated
- Audit docs: `RADIO_NYRA_TECHNICAL_AUDIT.md`, `RADIO_NYRA_UX_CORRECTION_AUDIT.md`,
  this report

## 7. Required Credentials / External Access

None to run the site. To complete the listenership investigation the team should
supply: Radio.co dashboard listener exports, GA4 property access (or the
`NEXT_PUBLIC_GA_MEASUREMENT_ID` / GTM / Meta pixel env values), and Google Search
Console access.

## 8. Not Done / Remaining

- Not deployed; production untouched (per instructions).
- 111 pre-existing ESLint warnings (unused imports) in components outside the
  redesign scope; no errors.
- `next/font` preload warnings for Inter subsets in dev are cosmetic.
- Playwright-style automated smoke tests recommended but not added (no test
  runner configured in the repo).
