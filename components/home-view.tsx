"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Star, Play, PlayCircle, Youtube, Headphones, Megaphone, Smartphone, Users, Radio, ArrowRight } from "lucide-react"
import { CountUp } from "@/components/ui/count-up"
import { ApolloTracker } from "@/components/apollo-tracker"
import { LiveNowHero } from "@/components/live-now-hero"
import { TuneInPlatforms } from "@/components/tune-in-platforms"
import { FeaturedPodcastsSection } from "@/components/featured-podcasts-section"
import { PartnersMarquee } from "@/components/partners-marquee"
import { PopularShowsSection } from "@/components/popular-shows-section"

export function HomeView() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navigation />
      <ApolloTracker />
      <FrequencyBar />

      <main>
        <LiveNowHero />
        <TuneInPlatforms />

        {/* PROVEN REACH STATS */}
        <section className="py-8 sm:py-10 bg-background border-b border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-3 text-center justify-center items-start">
              {[
                { label: "Weekly Listeners", end: 100, suffix: "K+", icon: Headphones },
                { label: "Email Subscribers", end: 60, suffix: "K+", icon: Megaphone },
                { label: "WhatsApp Members", end: 12, suffix: "K+", icon: Smartphone },
                { label: "Monthly Instagram Reach", end: 500, suffix: "K+", icon: Users },
                { label: "Display Impressions", end: 216, suffix: "K+", icon: Star },
                { label: "Years On Air", end: 12, suffix: "", icon: Radio },
                { label: "Media Channels", end: 8, suffix: "+", icon: Play },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center px-1">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center mb-2.5 transition-transform hover:scale-110">
                    <stat.icon className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mb-1">
                    <CountUp end={stat.end} suffix={stat.suffix} duration={2500} />
                  </div>
                  <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-muted-foreground leading-tight text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* GROW YOUR BUSINESS CTA */}
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Grow Your Business With RadioNyra</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/70 hover:bg-muted text-foreground border border-border text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </section>

        {/* YOUTUBE CHANNEL ANALYTICS */}
        <section className="py-8 sm:py-12 bg-gradient-to-r from-red-950 via-zinc-950 to-black text-white border-b border-red-900/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-black uppercase tracking-widest mb-2.5">
                <Youtube className="w-4 h-4 fill-red-500 text-red-500" /> YouTube Channel Analytics
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight italic text-white text-center">
                @RadioNyraUSA on YouTube
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-1.5 text-center">
                Streaming Indian Subcontinent content since February 2021
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {[
                { icon: Youtube, label: "Subscribers", value: <CountUp end={1.05} decimals={2} suffix="K" duration={2500} /> },
                { icon: Play, label: "Videos Published", value: <CountUp end={279} suffix="" duration={2500} /> },
                { icon: PlayCircle, label: "Total Views", value: <CountUp end={173.3} decimals={1} suffix="K" duration={2500} /> },
                { icon: Star, label: "Watch Hours", value: <CountUp end={25000} suffix="+" duration={2500} /> },
              ].map((stat, i) => (
                <div key={i} className="bg-zinc-900/90 border border-red-500/20 p-4 sm:p-5 rounded-2xl text-center shadow-xl hover:border-red-500/50 transition-all group flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-5 h-5 fill-red-500" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400 text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST VIDEOS */}
        <FeaturedPodcastsSection />

        {/* OUR PARTNERS */}
        <section className="py-10 bg-background border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 border-l-4 border-primary pl-4 text-left">
              Our Partners
            </h2>
            <PartnersMarquee />
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-12 sm:py-16 bg-muted/30 border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic">
                Testimonials
              </h2>
            </div>
            <div className="max-w-2xl mx-auto bg-primary text-primary-foreground p-6 sm:p-10 text-center shadow-2xl relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="absolute top-0 left-0 text-[100px] sm:text-[140px] font-serif leading-none opacity-10 -translate-x-4 -translate-y-4 pointer-events-none">"</div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex justify-center gap-1.5 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-base sm:text-xl font-bold mb-6 leading-relaxed italic text-center max-w-lg">
                  "This platform has helped us reach the right audience and grow our brand in ways we never expected."
                </blockquote>
                <div className="flex flex-col items-center text-center">
                  <div className="font-black uppercase tracking-widest text-sm sm:text-base">Mihir Chakraborty</div>
                  <div className="text-[11px] sm:text-xs font-bold opacity-85 uppercase tracking-widest mt-1">CEO, MC Construction Co.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOSTS & SHOW POSTERS — sliding carousel */}
        <PopularShowsSection />

      </main>

      <Footer />
    </div>
  )
}
