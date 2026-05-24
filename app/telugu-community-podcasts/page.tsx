import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Telugu Community Podcasts USA | Tollywood & NRI Stories — Radio Nyra",
  description: "Listen to the best Telugu community podcasts in the USA on Radio Nyra. Featuring Tollywood interviews, NRI life stories, and community conversations from Mana Muchatlu, Chinna Mata and more.",
  keywords: [
    "Telugu community podcasts",
    "Telugu podcasts USA",
    "Tollywood podcasts online",
    "Telugu NRI stories",
    "Telugu podcast America",
    "Mana Muchatlu podcast",
    "Radio Nyra Telugu podcast",
    "Telugu radio shows USA",
    "NRI Telugu podcast",
    "Andhra Telugu podcast USA",
  ],
  alternates: { canonical: "/telugu-community-podcasts" },
  openGraph: {
    title: "Telugu Community Podcasts USA | Radio Nyra",
    description: "The best Telugu podcasts for NRIs in USA. Tollywood interviews, community stories & life in America — Radio Nyra.",
    url: "https://www.radionyra.com/telugu-community-podcasts",
  },
}

export default function TeluguCommunityPodcastsPage() {
  const teluguShows = [
    {
      name: "Mana Muchatlu",
      host: "Kanthi",
      description:
        "A deeply community-focused Telugu show featuring heart-to-heart conversations with Telugu NRI leaders, artists, and community builders across the USA. Notable episodes include an exclusive interview with celebrated classical dancer Madhavi Lata.",
      episodes: [
        { title: "Interview with Madhavi Lata", url: "https://youtu.be/6xJRcPWxCJE" },
      ],
      tags: ["Interviews", "Community", "Telugu"],
    },
    {
      name: "Chinna Mata",
      host: "Priya",
      description:
        "Uplifting life lessons, parenting stories, and spiritual reflections delivered in warm conversational Telugu. Chinna Mata resonates deeply with Telugu mothers, families, and elders in the US.",
      episodes: [],
      tags: ["Life Lessons", "Family", "Telugu"],
    },
    {
      name: "Hello Vaishnavi (Telugu Segments)",
      host: "Vaishnavi Palleda",
      description:
        "Vaishnavi covers immigration, career growth, and NRI life with a bilingual lens — often blending Telugu and English to connect with second-generation Telugu-Americans and recent arrivals.",
      episodes: [
        { title: "H1B Visa Explained Simply", url: "https://youtu.be/UO9w7zmkHd4" },
        { title: "Aura Scanning & Energy Healing", url: "https://youtu.be/FEg1KpYOD-Q" },
      ],
      tags: ["NRI Life", "Immigration", "Bilingual"],
    },
  ]

  const teluguPodcasts = [
    {
      title: "Interview with Madhavi Lata — Mana Muchatlu",
      host: "Kanthi",
      url: "https://youtu.be/6xJRcPWxCJE",
      thumbnail: "https://img.youtube.com/vi/6xJRcPWxCJE/maxresdefault.jpg",
    },
    {
      title: "H1B Visa Explained Simply | Radio Nyra Podcast",
      host: "Vaishnavi",
      url: "https://youtu.be/UO9w7zmkHd4",
      thumbnail: "https://img.youtube.com/vi/UO9w7zmkHd4/maxresdefault.jpg",
    },
  ]

  return (
    <SeoPageLayout
      title="Telugu Community Podcasts"
      subtitle="Voices, Stories & Conversations for Telugu NRIs Across the USA"
      stationKey="Telugu"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Telugu Podcasts Made for the NRI Community</h2>
          <p>
            Radio Nyra hosts some of the most authentic and community-driven Telugu podcasts available
            for Indian-Americans in the United States. Our Telugu programming goes far beyond music — it
            captures the lived experiences, cultural identity, and aspirations of Telugu NRIs navigating
            life in America. From Tollywood industry conversations to immigration realities and inspiring
            community success stories, we tell the stories that matter to Telugu families across the USA.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Telugu Shows & Podcast Series</h2>
          <div className="space-y-6">
            {teluguShows.map((show, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-border hover:border-primary transition-all bg-card"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {show.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-1">{show.name}</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Hosted by {show.host}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{show.description}</p>
                {show.episodes.length > 0 && (
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Notable Episodes:</p>
                    <div className="space-y-2">
                      {show.episodes.map((ep) => (
                        <Link
                          key={ep.url}
                          href={ep.url}
                          target="_blank"
                          className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors group"
                        >
                          <span className="w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white flex items-center justify-center text-primary transition-colors text-xs">▶</span>
                          {ep.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Watch Our Latest Telugu Podcast Episodes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teluguPodcasts.map((pod, i) => (
              <Link
                key={i}
                href={pod.url}
                target="_blank"
                className="group block rounded-xl overflow-hidden border border-border hover:border-primary transition-all"
              >
                <div className="relative aspect-video bg-black overflow-hidden">
                  <img
                    src={pod.thumbnail}
                    alt={pod.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <span className="text-white text-xl ml-1">▶</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors mb-1">{pod.title}</h3>
                  <p className="text-xs text-muted-foreground">Hosted by {pod.host}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Listen to Telugu Radio 24/7</h2>
          <p>
            Beyond podcasts, Radio Nyra streams dedicated Telugu programming 24 hours a day on our
            Telugu channel (99.9 FM HD3 in Raleigh-Durham). From Tollywood chart-toppers to classical
            Telugu music and live RJ shows, our Telugu stream is the cultural home for over 150,000
            Telugu-speaking NRIs in the United States. Hit play above and tune into the sound of home.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Be a Guest on Our Telugu Podcast</h2>
          <p>
            Are you a Telugu community leader, entrepreneur, artist, or activist with a story worth sharing?
            We'd love to feature you on Mana Muchatlu or one of our other Telugu podcast series. Reach out to
            us at{" "}
            <a href="mailto:info@radionyra.com" className="text-primary font-bold underline">
              info@radionyra.com
            </a>{" "}
            and let's amplify your voice to the Telugu-American community across the USA.
          </p>
        </section>
      </div>
    </SeoPageLayout>
  )
}
