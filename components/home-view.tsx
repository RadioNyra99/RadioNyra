import Link from "next/link"
import { ArrowRight, CalendarDays, MapPin, Quote, Star } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { LiveNowHero } from "@/components/live-now-hero"
import { FeaturedVideoGrid } from "@/components/featured-video-grid"
import { AudienceReachSection, YoutubeAnalyticsSection } from "@/components/home-reach-sections"
import { PartnersMarquee } from "@/components/partners-marquee"
import { PopularShowsSection } from "@/components/popular-shows-section"
import { getRecentYouTubeUploads } from "@/lib/content-discovery"
import { PARTNERS } from "@/lib/partners"
import { RADIO_CONTENT, RADIO_EVENTS } from "@/lib/radio-content"

// Mihir Chakraborty — dark navy layout
const featuredTestimonial = RADIO_CONTENT.testimonials[0]

export function HomeView() {
  const event = RADIO_EVENTS[0]

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navigation />
      <FrequencyBar />
      <main>
        <LiveNowHero />

        <AudienceReachSection />

        {/* Featured community event */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid sm:grid-cols-[.9fr_1.1fr]">
              <div className="relative min-h-64 bg-muted sm:min-h-80">
                <img src={event.image} alt="UniverSoul Circus at Coastal Credit Union Music Park" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-white">Radio Nyra event</span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-primary">Community calendar</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{event.title}</h2>
                <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{event.date} · {event.time} (doors {event.doors})
                </p>
                <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{event.venue}, {event.location}
                </p>
                <p className="mt-4 font-extrabold text-foreground">{event.offer}</p>
                <a href={event.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-white transition-colors hover:bg-primary/90">
                  Get tickets <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        </section>

        <PopularShowsSection />
        <YoutubeAnalyticsSection />
        <FeaturedVideoGrid videos={getRecentYouTubeUploads(4)} />

        {/* Partners Marquee */}
        <section className="border-y border-border py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-muted-foreground">Community and business partners</p>
            <div className="mt-5"><PartnersMarquee /></div>
            <Link href="/advertise" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              Advertise with Radio Nyra <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Testimonial — Dark navy layout (Kash Patel Productions) */}
        {featuredTestimonial && (
          <section className="bg-[#0b1631] py-12 text-white sm:py-16">
            <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-[auto_1fr] md:gap-8">
              {/* Quote icon box */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-red-300">
                <Quote className="h-6 w-6" aria-hidden />
              </div>
              <div className="max-w-4xl">
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-red-300">Partner voices</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                  Community is at the heart of every story.
                </h2>
                <div className="mt-4 flex gap-1 text-amber-300" aria-label={`${featuredTestimonial.rating ?? 5} out of 5 stars`}>
                  {Array.from({ length: featuredTestimonial.rating ?? 5 }, (_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-5 text-base font-medium leading-relaxed text-white/80 sm:text-lg">
                  &ldquo;{featuredTestimonial.content}&rdquo;
                </blockquote>
                <div className="mt-5 flex flex-col gap-3 border-t border-white/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-extrabold">
                    {featuredTestimonial.name}
                    <span className="ml-2 font-medium text-white/50">· {featuredTestimonial.role}</span>
                  </p>
                  <Link href="/testimonials" className="inline-flex items-center gap-2 text-sm font-bold text-red-300 hover:text-white">
                    More partner stories <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </div>
  )
}
