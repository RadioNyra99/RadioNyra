"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ApolloTracker } from "@/components/apollo-tracker"
import { LiveNowHero } from "@/components/live-now-hero"
import { CitySelectorBar } from "@/components/city-selector-bar"
import { ComingUpSchedule } from "@/components/coming-up-schedule"
import { RtvPlayer } from "@/components/rtv-player"
import { PopularShowsSection } from "@/components/popular-shows-section"
import { FeaturedPodcastsSection } from "@/components/featured-podcasts-section"
import { LatestNewsSection } from "@/components/latest-news-section"
import { FeaturedVideosSection } from "@/components/featured-videos-section"
import { CommunityEventsSection } from "@/components/community-events-section"
import { PartnersMarquee } from "@/components/partners-marquee"
import { Section, SectionHeading } from "@/components/section"

/**
 * Homepage composition. Ordered around listener journeys: listen first, then
 * what is on, then shows, podcasts, news, video and community. Every block is
 * a shared Section so spacing and typography stay identical to the inner pages.
 */
export function HomeView() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navigation />
      <ApolloTracker />

      <main>
        <LiveNowHero />
        <CitySelectorBar />
        <ComingUpSchedule />

        {/* Daily Telugu bulletin — player only, archive lives on /rtv-news */}
        <Section id="rtv-news" variant="alt">
          <SectionHeading
            eyebrow="Daily bulletin"
            title="RTV Telugu News"
            description="On-demand Telugu news for 99.9 FM HD3 listeners."
            href="/rtv-news"
            linkLabel="News centre & archive"
          />
          <div className="mx-auto max-w-5xl">
            <RtvPlayer showArchive={false} />
          </div>
        </Section>

        <PopularShowsSection />
        <FeaturedPodcastsSection />
        <LatestNewsSection />
        <FeaturedVideosSection />
        <CommunityEventsSection />

        {/* Partners */}
        <Section id="partners" variant="tight">
          <SectionHeading
            eyebrow="Partners"
            title="Our partners"
            href="/partners"
            linkLabel="All partners"
          />
          <PartnersMarquee />
        </Section>

        {/* Advertise — one quiet route instead of a popup */}
        <Section variant="alt">
          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <span className="eyebrow">Advertise</span>
              <h2 className="section-title">Grow with Radio Nyra</h2>
              <p className="lede mt-1.5">
                Radio, podcasts, digital and community campaigns across seven US markets.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/advertise"
                className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Advertise with us
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-full border border-border px-6 text-xs font-bold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
