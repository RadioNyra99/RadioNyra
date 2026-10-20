"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Star, Play, Megaphone, PlayCircle, Youtube, Radio } from "lucide-react"
import { CountUp } from "@/components/ui/count-up"
import { ApolloTracker } from "@/components/apollo-tracker"
import { LiveNowHero } from "@/components/live-now-hero"
import { TuneInPlatforms } from "@/components/tune-in-platforms"
import { FeaturedPodcastsSection } from "@/components/featured-podcasts-section"
import { PartnersMarquee } from "@/components/partners-marquee"
import { RtvPlayer } from "@/components/rtv-player"
import { Button } from "@/components/ui/button"
import { CommunityEventsSection } from "@/components/community-events-section"

export function HomeView() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navigation />
      <ApolloTracker />
      <FrequencyBar />

      <main>
        {/* LIVE NOW HERO */}
        <LiveNowHero />

        {/* TUNE-IN PLATFORM STRIP */}
        <TuneInPlatforms />

        {/* RTV DAILY NEWS BULLETIN */}
        <section id="rtv-news" className="py-10 bg-gradient-to-b from-background via-muted/20 to-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-black uppercase tracking-widest mb-2">
                  <Radio className="w-3.5 h-3.5 animate-pulse" /> Official Daily News
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">
                  Radio Nyra Presents <span className="text-red-600">RTV NEWS</span> on 99.9 FM-HD3
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                  Listen to today's Telugu news bulletin on-demand &bull; Broadcasting on Radio Nyra 99.9 FM-HD3
                </p>
              </div>
              <Button
                variant="outline"
                className="text-foreground hover:bg-red-600 hover:text-white font-bold uppercase tracking-widest rounded-none border-2 border-foreground hover:border-red-600 transition-all h-10 px-6 text-xs cursor-pointer"
                asChild
              >
                <Link href="/rtv-news">Full News Center &amp; Archive</Link>
              </Button>
            </div>
            <div className="max-w-5xl mx-auto">
              <RtvPlayer />
            </div>
          </div>
        </section>

        {/* YOUTUBE CHANNEL ANALYTICS */}
        <section className="py-8 bg-gradient-to-r from-red-950 via-zinc-950 to-black text-white border-b border-red-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-black uppercase tracking-widest mb-2">
                <Youtube className="w-4 h-4 fill-red-500 text-red-500" /> YouTube Channel Analytics
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white">
                @RadioNyraUSA on YouTube
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                Streaming Indian Subcontinent content since February 2021
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { icon: Youtube, label: "Subscribers", value: <CountUp end={1.05} decimals={2} suffix="K" duration={2500} /> },
                { icon: Play, label: "Videos Published", value: <CountUp end={279} suffix="" duration={2500} /> },
                { icon: PlayCircle, label: "Total Views", value: <CountUp end={173.3} decimals={1} suffix="K" duration={2500} /> },
                { icon: Star, label: "Watch Hours", value: <CountUp end={25000} suffix="+" duration={2500} /> },
              ].map((stat, i) => (
                <div key={i} className="bg-zinc-900/90 border border-red-500/20 p-4 sm:p-5 rounded-2xl text-center shadow-xl hover:border-red-500/50 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-5 h-5 fill-red-500" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROVEN REACH & ENGAGEMENT */}
        <section className="py-10 bg-muted/30 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-green-200 dark:border-green-800">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Verified Audience Data
              </div>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">Proven Reach &amp; Engagement</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: "Instagram", stat1: <CountUp end={10400} duration={2000} suffix="+" />, l1: "Followers", stat2: <CountUp end={8.4} decimals={1} duration={2000} suffix="%" />, l2: "Engagement Rate" },
                { label: "Email", stat1: <CountUp end={60000} duration={2000} suffix="+" />, l1: "Subscribers", stat2: <CountUp end={34.2} decimals={1} duration={2000} suffix="%" />, l2: "Open Rate" },
                { label: "WhatsApp", stat1: <CountUp end={12000} duration={2000} suffix="+" />, l1: "Members", stat2: <CountUp end={78} duration={2000} suffix="%" />, l2: "Open Rate" },
              ].map((card) => (
                <div key={card.label} className="bg-card p-6 border border-border shadow-sm rounded-none text-center">
                  <h3 className="text-lg font-black uppercase tracking-tighter text-primary mb-3">{card.label}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-black">{card.stat1}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-0.5">{card.l1}</div>
                    </div>
                    <div>
                      <div className="text-xl font-black">{card.stat2}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-0.5">{card.l2}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm font-black uppercase tracking-widest text-muted-foreground mt-6">
              Total Community Reach: <span className="text-foreground">100,000+ Listeners</span>
            </p>
          </div>
        </section>

        {/* LATEST FULL-LENGTH VIDEOS & PODCASTS */}
        <FeaturedPodcastsSection />

        {/* COMMUNITY EVENTS */}
        <CommunityEventsSection />

        {/* OUR PARTNERS */}
        <section className="py-8 bg-background border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-6 border-l-4 border-primary pl-4 text-left">Our Partners</h2>
            <PartnersMarquee />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-10 bg-muted/30 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">Testimonials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  quote: "Radio Nyra brought incredible energy to the A.R. Rahman Tour. Their reach into the South Asian community is unmatched.",
                  name: "Kash Patel",
                  title: "Kash Patel Productions – A.R. Rahman Tour",
                },
                {
                  quote: "We saw a real spike in foot traffic after our Radio Nyra campaign. The South Asian audience in the Triangle truly listens.",
                  name: "Royal Spice Team",
                  title: "Royal Spice Indian Restaurant, Cary NC",
                },
                {
                  quote: "This platform has helped us reach the right audience and grow our brand in ways we never expected.",
                  name: "Mihir Chakraborty",
                  title: "CEO, MC Construction Co.",
                },
              ].map((t, i) => (
                <div key={i} className="bg-card border border-border p-6 rounded-none shadow-sm flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <blockquote className="text-sm font-medium italic leading-relaxed text-muted-foreground flex-1">
                    "{t.quote}"
                  </blockquote>
                  <div>
                    <div className="font-black uppercase tracking-widest text-xs">{t.name}</div>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">{t.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
