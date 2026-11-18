import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Headphones, Mic } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { FeaturedPodcastsSection } from "@/components/featured-podcasts-section"

export const metadata: Metadata = {
  title: "Indian Podcasts & Interviews",
  description:
    "Watch Radio Nyra video podcasts, interviews, and community conversations featuring Indian and South Asian voices in the USA.",
  alternates: { canonical: "/podcasts" },
  openGraph: {
    type: "website",
    url: "https://www.radionyra.com/podcasts",
    siteName: "Radio Nyra",
    title: "Indian Podcasts & Interviews | Radio Nyra",
    description:
      "Watch Radio Nyra video podcasts, interviews, and community conversations featuring Indian and South Asian voices in the USA.",
    images: ["/og-image.png"],
  },
}

export default function PodcastsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <FrequencyBar />
      <main>
        <section className="bg-[#0b1631] py-12 text-white sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.18em] text-red-300">
              <Mic className="h-4 w-4" aria-hidden /> Radio Nyra Originals
            </p>
            <h1 className="max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
              Indian Podcasts, Interviews &amp; Community Stories
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Watch video conversations with Indian and South Asian artists, community leaders, and local voices. Explore recent interviews and stories from Radio Nyra.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/youtube" className="inline-flex h-11 items-center gap-2 rounded-full bg-red-600 px-5 text-sm font-bold text-white transition-colors hover:bg-red-500">
                Watch all videos <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/shows" className="inline-flex h-11 items-center gap-2 rounded-full border border-white/25 px-5 text-sm font-bold text-white transition-colors hover:bg-white/10">
                <Headphones className="h-4 w-4" aria-hidden /> Browse radio shows
              </Link>
            </div>
          </div>
        </section>
        <FeaturedPodcastsSection />
      </main>
      <Footer />
    </div>
  )
}
