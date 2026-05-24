import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"

export const metadata: Metadata = {
  title: "Telugu Radio USA | #1 Tollywood & Telugu Hits Live Stream — Radio Nyra",
  description: "Listen to the best Telugu radio in the USA on Radio Nyra. Stream 24/7 Tollywood hits, Telugu shows, Mana Muchatlu, Chinna Mata & live NRI community content. Available on 99.9 FM HD3 Raleigh-Durham.",
  keywords: [
    "Telugu Radio USA",
    "Tollywood Radio Online",
    "Telugu FM USA",
    "Telugu News Radio",
    "Radio Nyra Telugu",
    "Telugu radio Raleigh Durham",
    "Telugu NRI radio",
    "Mana Muchatlu radio",
    "Telugu live radio USA",
    "Andhra Telugu radio America",
    "Telangana Telugu radio USA",
  ],
  alternates: { canonical: "/telugu-radio-usa" },
  openGraph: {
    title: "Telugu Radio USA | Radio Nyra — Tollywood & Telugu Hits 24/7",
    description: "The #1 Telugu radio station in the USA. Stream Tollywood hits, NRI community shows & Telugu music live on Radio Nyra.",
    url: "https://www.radionyra.com/telugu-radio-usa",
  },
}

export default function TeluguRadioUsaPage() {
  const teluguShows = [
    { name: "Mana Muchatlu", host: "Kanthi", time: "Weekdays", desc: "Telugu community conversations, NRI stories, and cultural discussions." },
    { name: "Chinna Mata", host: "Priya", time: "Weekdays", desc: "Life lessons, parenting, and spiritual reflections in warm conversational Telugu." },
    { name: "Back to Back Telugu", host: "Automated", time: "24/7", desc: "Non-stop Tollywood chartbusters and classic Telugu hits around the clock." },
  ]

  return (
    <SeoPageLayout
      title="Telugu Radio USA"
      subtitle="The Ultimate Destination for Tollywood Fans & Telugu NRIs Across the United States"
      stationKey="Telugu"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Welcome to the #1 Telugu Radio Station in the USA</h2>
          <p>
            Are you looking for the perfect blend of nostalgic Telugu hits, the latest Tollywood
            chartbusters, and engaging community talk shows right here in the United States? You've found
            your home at Radio Nyra — the premier destination for Telugu Radio USA. We broadcast on
            99.9 FM HD3 in Raleigh-Durham, North Carolina, and stream globally 24/7 online to Telugu
            NRIs across America and beyond.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Telugu Shows</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {teluguShows.map((show, i) => (
              <div key={i} className="p-5 rounded-xl border border-border hover:border-primary transition-all bg-card">
                <h3 className="text-lg font-bold mb-1">{show.name}</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">with {show.host}</p>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-3">{show.time}</p>
                <p className="text-sm text-muted-foreground">{show.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Why Listen to Telugu Radio Online?</h2>
          <p>
            Staying connected to your Telugu roots while living in the USA is essential. Our 24/7 dedicated
            Telugu stream ensures that you never miss out on the cultural heartbeat of Andhra Pradesh and
            Telangana. We bring you constant updates on Tollywood news, local Telugu community events in
            Raleigh-Durham, and much more — all delivered with the warmth and familiarity of home.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Tune In on 99.9 FM HD3 — Raleigh-Durham</h2>
          <p>
            In the Raleigh-Durham Triangle area, you can tune into our dedicated Telugu stream live on
            <strong> 99.9 FM HD3</strong>. If you have an HD Radio-compatible receiver in your car or
            home, you can access this stream without any internet connection.
          </p>
          <div className="mt-4 p-5 rounded-xl border border-primary/30 bg-primary/5">
            <p className="text-sm font-bold">📡 Raleigh-Durham: <span className="text-primary">99.9 FM HD3 (Telugu)</span></p>
            <p className="text-sm font-bold mt-1">📡 Raleigh-Durham: <span className="text-primary">99.9 FM HD4 (Hindi/Bollywood)</span></p>
            <p className="text-sm font-bold mt-1">📡 Raleigh-Durham: <span className="text-primary">101.9 FM | 1490 AM</span></p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Serving Telugu NRIs Across America</h2>
          <p>
            With over 500,000 Telugu-speaking people in the USA, Radio Nyra's Telugu channel serves as the
            essential cultural bridge for communities from New Jersey to Texas, North Carolina to California.
            Our programming connects Telugu families with their language, music, and cultural heritage —
            no matter where in America they call home.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How to Tune In From Anywhere</h2>
          <p>
            Listening to our Telugu broadcast is easier than ever. Stream directly from this webpage using
            the play button above, download our app on iOS or Android, or use smart speakers. Simply ask:
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2"><span className="text-primary font-bold">Alexa:</span> "Alexa, open Radio Nyra Telugu"</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">Google:</span> "Hey Google, play Radio Nyra"</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">Siri:</span> "Siri, play Radio Nyra"</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Join Our Growing Telugu Community</h2>
          <p>
            Radio Nyra isn't just a broadcasting station — it's a vibrant community of Telugu-Americans
            across the United States. Participate in our live contests, call in during our interactive
            sessions at <a href="tel:+19199998595" className="text-primary font-bold">+1 (919) 999-8595</a>,
            and be a part of the largest Telugu radio network in America. Follow us on social media for
            Telugu community news, event announcements, and exclusive content.
          </p>
        </section>
      </div>
    </SeoPageLayout>
  )
}
