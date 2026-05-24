import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bollywood News Podcast | Hindi Cinema Updates & Gossip — Radio Nyra",
  description: "Get the latest Bollywood news, celebrity gossip, movie reviews, and box office updates via Radio Nyra's Bollywood news podcast. Daily Hindi cinema coverage for South Asians in the USA.",
  keywords: [
    "Bollywood news podcast",
    "Hindi cinema podcast",
    "Bollywood gossip podcast",
    "Bollywood movie reviews podcast",
    "Hindi entertainment podcast USA",
    "Bollywood updates podcast",
    "Indian cinema news podcast",
    "Radio Nyra Bollywood news",
    "Tollywood news podcast",
    "South Asian entertainment podcast",
  ],
  alternates: { canonical: "/bollywood-news-podcast" },
  openGraph: {
    title: "Bollywood News Podcast | Radio Nyra — Daily Hindi Cinema Coverage",
    description: "Daily Bollywood news, celebrity gossip, movie reviews & box office updates — podcast format for Indian-Americans in the USA.",
    url: "https://www.radionyra.com/bollywood-news-podcast",
  },
}

export default function BollywoodNewsPodcastPage() {
  const shows = [
    {
      name: "Zara Muskurao",
      host: "Aayushii Rode",
      time: "7 AM – 10 AM",
      desc: "Morning Bollywood news briefings, chart countdowns, and celebrity birthdays — the perfect start to your day with the latest from Mumbai's film industry.",
      tags: ["Morning Show", "Bollywood News", "Charts"],
    },
    {
      name: "Triangle Tunes and Talks",
      host: "Monika Joshi",
      time: "10 AM – 1 PM",
      desc: "Community news blended with Bollywood updates, industry gossip, and fresh releases. Monika brings both local and Bollywood worlds together in one engaging show.",
      tags: ["Community", "News", "Bollywood"],
    },
    {
      name: "Bollywood Bliss",
      host: "Bharti Rathore",
      time: "1 PM – 4 PM",
      desc: "The most Bollywood-focused show on the station. Deep dives into celebrity news, movie releases, box office, OTT streaming arrivals, and exclusive artist spotlights.",
      tags: ["Bollywood", "Celebrity", "Movies"],
    },
    {
      name: "Nirvana Nights",
      host: "Parag",
      time: "7 PM – 10 PM",
      desc: "Evening Bollywood vibes with late night song picks, nostalgic classics, and music news from the Hindi film world.",
      tags: ["Night Show", "Music", "Bollywood"],
    },
    {
      name: "Geet Bazaar",
      host: "Dr. Taj & Dr. Caldwell",
      time: "Monthly",
      desc: "A rich monthly podcast journey through retro Bollywood and classic Hindi film music, with expert commentary on the golden era of Indian cinema.",
      tags: ["Retro", "Classic Bollywood", "Monthly"],
    },
    {
      name: "Hello Vaishnavi",
      host: "Vaishnavi Palleda",
      time: "5 PM – 7 PM",
      desc: "Evening conversations covering Bollywood, culture, immigration tips, and entertainment news with an NRI perspective.",
      tags: ["NRI Life", "Bollywood", "Culture"],
    },
  ]

  const topEpisodes = [
    {
      title: "Bhagavad-Gita for Kids & Life Lessons | Chai Pe Charcha",
      url: "https://youtu.be/KekIDPrM_Zc",
      thumbnail: "https://img.youtube.com/vi/KekIDPrM_Zc/maxresdefault.jpg",
      host: "Van Bhandari",
    },
    {
      title: "Leaders & Legends | Featuring Hon. Randolph Voller",
      url: "https://youtu.be/MNb9i9dcnR0",
      thumbnail: "https://img.youtube.com/vi/MNb9i9dcnR0/maxresdefault.jpg",
      host: "Steve Rao",
    },
    {
      title: "Monday Motivation | Dr. Madhu Sharma",
      url: "https://youtu.be/CyTV514isww",
      thumbnail: "https://img.youtube.com/vi/CyTV514isww/maxresdefault.jpg",
      host: "Dr. Madhu Sharma",
    },
    {
      title: "Hello Vaishnavi Show | Arvind Mahajan, AKM Investments",
      url: "https://youtu.be/TIprZF1bMuM",
      thumbnail: "https://img.youtube.com/vi/TIprZF1bMuM/maxresdefault.jpg",
      host: "Vaishnavi",
    },
  ]

  return (
    <SeoPageLayout
      title="Bollywood News Podcast"
      subtitle="Daily Hindi Cinema Updates, Celebrity Gossip & Box Office News — Live & On Demand"
      stationKey="Hindi"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Your Daily Bollywood News Fix</h2>
          <p>
            Radio Nyra is the go-to Bollywood news podcast destination for Indian-Americans across the USA.
            Whether you want to know which movie topped the box office this weekend, the latest Bollywood
            celebrity gossip, upcoming OTT releases on Netflix and Prime Video, or exclusive artist interviews
            — we deliver it all, daily, through our live radio shows and on-demand podcast episodes.
            Our RJs are your personal Bollywood news anchors, keeping you plugged into Mumbai's glamorous
            world from wherever you are in America.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Bollywood Shows on Radio Nyra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {shows.map((show, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-border hover:border-primary transition-all bg-card"
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
                <h3 className="text-lg font-bold mb-1">{show.name}</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">with {show.host}</p>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-3">{show.time}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{show.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Popular Podcast Episodes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {topEpisodes.map((ep, i) => (
              <Link
                key={i}
                href={ep.url}
                target="_blank"
                className="group block rounded-xl overflow-hidden border border-border hover:border-primary transition-all"
              >
                <div className="relative aspect-video bg-black overflow-hidden">
                  <img
                    src={ep.thumbnail}
                    alt={ep.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <span className="text-white text-xl ml-1">▶</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors mb-1 line-clamp-2">
                    {ep.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">Hosted by {ep.host}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">What We Cover — Bollywood & Beyond</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "🎬 Latest Bollywood movie releases & reviews",
              "💰 Box office collections & OTT debut announcements",
              "⭐ Celebrity interviews & behind-the-scenes stories",
              "🎵 New Hindi song releases & music video drops",
              "🏆 Award show coverage — Filmfare, IIFA & more",
              "📺 Tollywood & South Indian cinema updates",
              "🎙️ Exclusive RJ conversations with Bollywood stars",
              "📰 Daily entertainment news & gossip roundups",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How to Listen to Our Bollywood Podcast</h2>
          <p>
            You can access Radio Nyra's Bollywood news shows and podcast episodes in several ways:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-6">
            <li><span className="text-foreground font-bold">Live streaming</span> — Use the player above to listen live to our Hindi channel 24/7.</li>
            <li><span className="text-foreground font-bold">YouTube</span> — Subscribe to Radio Nyra on YouTube for video podcast episodes.</li>
            <li><span className="text-foreground font-bold">Podcast platforms</span> — Find us on Pod.co for the Geet Bazaar retro music podcast.</li>
            <li><span className="text-foreground font-bold">Mobile app</span> — Download the Radio Nyra app (iOS & Android) for on-the-go listening.</li>
            <li><span className="text-foreground font-bold">Smart speakers</span> — Say "Alexa, play Radio Nyra" or "Hey Google, play Radio Nyra".</li>
          </ul>
        </section>
      </div>
    </SeoPageLayout>
  )
}
