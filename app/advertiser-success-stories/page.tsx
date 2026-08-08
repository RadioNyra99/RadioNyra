import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BarChart3, Megaphone, Quote, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Advertiser Success Stories",
  description: "See how Radio Nyra helps brands reach engaged Indian audiences through radio, digital media, events, and community campaigns.",
  alternates: { canonical: "/advertiser-success-stories" },
  openGraph: {
    title: "Radio Nyra Advertiser Success Stories",
    description: "Challenge, campaign, results, and testimonials from Radio Nyra advertiser partnerships.",
    url: "/advertiser-success-stories",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Nyra Advertiser Success Stories",
    description: "Become our next success story with Radio Nyra.",
  },
}

const stories = [
  {
    brand: "Regional Real Estate Group",
    challenge: "Needed trusted access to high-intent Indian homebuyers relocating across the Triangle.",
    campaign: "Radio sponsorships, WhatsApp amplification, host-read mentions, and event presence.",
    results: "Higher qualified inquiries, stronger community recall, and repeat campaign investment.",
    testimonial: "Radio Nyra helped us speak to the right audience with credibility from day one.",
  },
  {
    brand: "Cultural Event Promoter",
    challenge: "Had to move ticket awareness quickly for a premium live entertainment experience.",
    campaign: "On-air spots, social media pushes, newsletter mentions, and live community interviews.",
    results: "Stronger attendance, better local visibility, and sponsor confidence.",
    testimonial: "Their audience already trusted the voice behind the promotion, and it showed.",
  },
]

export default function AdvertiserSuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">Advertiser Trust</p>
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">Advertiser Success Stories</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
              Campaigns built around trust, community context, premium content, and measurable multicultural reach.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto grid grid-cols-1 gap-6 px-4 lg:grid-cols-2">
            {stories.map((story) => (
              <article key={story.brand} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-semibold">{story.brand}</h2>
                <div className="mt-6 grid gap-4">
                  {[
                    { label: "Challenge", value: story.challenge, icon: Target },
                    { label: "Campaign", value: story.campaign, icon: Megaphone },
                    { label: "Results", value: story.results, icon: BarChart3 },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl bg-slate-50 p-5">
                      <item.icon className="h-5 w-5 text-sky-600" />
                      <h3 className="mt-3 font-semibold">{item.label}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
                <blockquote className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                  <Quote className="h-5 w-5 text-sky-300" />
                  <p className="mt-3 text-sm leading-relaxed text-white/78">"{story.testimonial}"</p>
                </blockquote>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-14 text-white">
          <div className="container mx-auto grid gap-6 px-4 text-center md:text-left lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Become Our Next Success Story</h2>
              <p className="mt-3 max-w-3xl text-white/70">Build a campaign that reaches engaged Indian audiences across radio, digital, events, and direct community channels.</p>
            </div>
            <Button asChild className="rounded-full bg-white px-8 py-6 font-semibold text-slate-950 hover:bg-white/90">
              <Link href="/contact">Start Advertising</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
