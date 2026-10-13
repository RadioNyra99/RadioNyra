import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { RtvPlayer } from "@/components/rtv-player"
import { RTV_TELUGU_NEWS_EPISODES } from "@/lib/rtv-news-data"
import { Radio, Newspaper, Clock, MapPin, Sparkles, Volume2, Globe, ChevronRight, Calendar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "RTV News | Daily News Bulletins on Radio Nyra 99.9 FM-HD3 & HD4",
  description:
    "Listen to daily RTV News broadcasts on Radio Nyra 99.9 FM-HD3 (Telugu) and 99.9 FM-HD4 (Hindi). Streaming daily news audio bulletins across Raleigh-Durham and nationwide.",
  alternates: {
    canonical: "/rtv-news",
  },
}

export default function RtvNewsPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navigation />
      <FrequencyBar />

      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-extrabold uppercase tracking-widest mb-3">
              <Radio className="w-3.5 h-3.5 animate-pulse" /> Official Daily News Broadcast
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase tracking-tighter italic leading-none text-foreground mb-4">
              Now <span className="text-primary">RadioNyra</span> Proudly Presents <br />
              <span className="text-red-600 dark:text-red-500">RTV NEWS</span> on 99.9 FM-HD3
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
              Your trusted source for daily news, current affairs, breaking updates, and community headlines. Stream the latest daily audio bulletin anytime, right here.
            </p>
          </div>

          {/* Player Component */}
          <div className="max-w-5xl mx-auto mb-16">
            <RtvPlayer />
          </div>

          {/* Highlights & Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-card border border-border p-6 text-center rounded-xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto mb-4">
                <Newspaper className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold uppercase tracking-tight mb-2">Daily News Bulletins</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Comprehensive daily coverage of local diaspora news, Indian political headlines, international developments, and cultural updates.
              </p>
            </div>

            <div className="bg-card border border-border p-6 text-center rounded-xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold uppercase tracking-tight mb-2">HD Radio Broadcast</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tuned across the Carolinas on 99.9 FM-HD3 (Telugu), 99.9 FM-HD4 (Hindi), 101.9 FM, and 1490 AM with digital crystal-clear audio.
              </p>
            </div>

            <div className="bg-card border border-border p-6 text-center rounded-xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold uppercase tracking-tight mb-2">On-Demand Web Audio</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Missed today's live radio broadcast? Listen to any day's bulletin on-demand with our built-in audio player and offline download option.
              </p>
            </div>
          </div>

          {/* Daily Bulletins Archive Grid */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 dark:text-red-400 block mb-1">
                  On-Demand Archives
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                  Browse Daily Telugu Bulletins
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Read summaries, highlights, topic tags and listen to any daily broadcast.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {RTV_TELUGU_NEWS_EPISODES.map((ep) => (
                <Link
                  key={ep.id}
                  href={`/rtv-news/${ep.date}`}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-red-500/50 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span className="inline-flex items-center gap-1 font-bold text-foreground">
                        <Calendar className="w-3.5 h-3.5 text-red-500" /> {ep.formattedDate}
                      </span>
                      <span className="font-mono text-[11px]">{ep.sizeFormatted}</span>
                    </div>
                    <h3 className="font-bold text-base text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-2">
                      {ep.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                      {ep.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-bold text-red-600 dark:text-red-400">
                    <span>Listen &amp; Transcript</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Broadcast Information Box */}
          <div className="max-w-4xl mx-auto bg-muted/40 border border-border p-6 md:p-8 rounded-2xl">
            <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight italic mb-4 text-center">
              How To Tune Into RTV News
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-background rounded-lg border border-border">
                <span className="text-xs font-extrabold uppercase text-red-600 dark:text-red-400 block mb-1">
                  Radio Nyra Telugu
                </span>
                <span className="font-bold text-foreground text-base block">99.9 FM-HD3</span>
                <span className="text-xs text-muted-foreground">Raleigh-Durham &bull; Triangle Region</span>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <span className="text-xs font-extrabold uppercase text-primary block mb-1">
                  Radio Nyra Hindi
                </span>
                <span className="font-bold text-foreground text-base block">99.9 FM-HD4 / 101.9 FM / 1490 AM</span>
                <span className="text-xs text-muted-foreground">North Carolina &bull; Full Triad &amp; Triangle Coverage</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
