# Radio Nyra

Responsive Radio Nyra website built with Next.js. Site content for the show directory, hosts, featured YouTube videos, event, audience figures, frequencies, partner logos, and testimonials lives in [`content/radio-content.json`](content/radio-content.json); edit that file to update these sections. Place or replace images in `public/` and keep the paths in the JSON in sync.

## Local setup

1. Copy `.env.example` to `.env.local`.
2. Add the contact form endpoint, newsletter provider endpoint, and optional Google Analytics measurement ID.
3. Install dependencies with `npm install` and start the site with `npm run dev`.

Contact and advertising forms use `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`. Configure the provider endpoint and its Radio Nyra recipient in that provider’s settings. The form reports success only when the provider returns a successful response. Newsletter signup uses `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` and also requires a successful response.

The homepage's YouTube cards use the newest four full-length uploads from the Radio Nyra channel. `npm run build` refreshes the public RSS snapshot through `scripts/sync-youtube.mjs` before exporting the site; `npm run sync:youtube` can refresh it manually. If YouTube is unavailable, the sync keeps the last successful snapshot.

Listeners can send song requests, show feedback, topic ideas, and messages at `/listener-voice`. These submissions use the contact form provider endpoint above and are not stored by this static site. Configure the endpoint before accepting messages. A poll voting system and submission review dashboard need a protected backend/data store.

The YouTube episode panel displays channel-provided descriptions and verified metadata. It does not invent summaries, highlights, guests, or timestamps. AI summaries and transcript-based chapter markers need a configured server-side AI/transcription service.

The site currently exports static pages. Admin routes remain unavailable until server-side authentication and protected data storage are configured; browser-only passwords and session flags are not secure authentication.

## Stream and contact details

- Hindi stream: edit `STATIONS.Hindi.streamUrl` in [`lib/stations.ts`](lib/stations.ts).
- Telugu stream: set `STATIONS.Telugu.streamUrl` in the same file when the stream URL is provided. It is intentionally blank until then.
- Contact email and address: replace the marked values in `content/radio-content.json`.
- Form email destination: set the recipient in the configured contact form provider; the website sends submissions to its configured endpoint.
- Analytics: set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`.

## Remaining placeholders

- Telugu stream URL.
- Contact email and street address.
- Approved Steve Rao host photo.
- Contact/advertising form provider endpoint and recipient.
- Newsletter email provider endpoint.
- Google Analytics measurement ID, if analytics is enabled.
