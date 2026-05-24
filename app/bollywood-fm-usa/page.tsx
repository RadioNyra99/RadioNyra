import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"

export const metadata: Metadata = {
  title: "Bollywood FM USA | Live Hindi Radio 24/7 — Radio Nyra",
  description: "Stream Bollywood FM USA on Radio Nyra. The best live Hindi FM radio in the United States playing non-stop Bollywood hits, news, and talk shows 24/7.",
  keywords: [
    "Bollywood FM USA",
    "Hindi FM Radio USA",
    "Bollywood live radio USA",
    "Hindi music stream USA",
    "Bollywood radio station USA",
    "Indian FM radio America",
    "Desi FM radio USA",
    "Radio Nyra Bollywood FM",
    "live Bollywood music USA",
    "Hindi radio online USA",
  ],
  alternates: { canonical: "/bollywood-fm-usa" },
  openGraph: {
    title: "Bollywood FM USA | Radio Nyra — Live Hindi Radio",
    description: "The best Bollywood FM radio in the USA. Stream live Hindi music, talk shows & Tollywood updates 24/7 on Radio Nyra.",
    url: "https://www.radionyra.com/bollywood-fm-usa",
  },
}

export default function BollywoodFmUsaPage() {
  return (
    <SeoPageLayout
      title="Bollywood FM USA"
      subtitle="America's Premier Live Hindi Radio Experience — Streaming 24/7"
      stationKey="Hindi"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">The Best Bollywood FM Radio Station in the USA</h2>
          <p>
            Welcome to Radio Nyra — the United States' most beloved Bollywood FM radio destination. Whether you
            are commuting in Raleigh, cooking at home in Atlanta, or relaxing in Philadelphia, our 24/7 live
            Hindi stream delivers the perfect Bollywood soundtrack for every moment of your day. We broadcast
            on multiple FM frequencies across the East Coast and stream globally online, making us the most
            accessible Bollywood FM USA experience available.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Weekday Hindi Programming Schedule</h2>
          <p className="mb-4">
            Radio Nyra is more than just music — it's a full-scale Indian radio network with professionally
            hosted shows, celebrity interviews, Bollywood news updates, and community programming:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                time: "6:00 AM",
                show: "Geetanjali",
                host: "Geetanjali",
                desc: "Start your morning with soulful melodies and spiritual energy."
              },
              {
                time: "7:00 AM",
                show: "Zara Muskurao",
                host: "Aayushii Rode",
                desc: "Morning laughs, Bollywood hits, and positive vibes to energize your day."
              },
              {
                time: "10:00 AM",
                show: "Triangle Tunes and Talks",
                host: "Monika Joshi",
                desc: "Community conversations, local news, and back-to-back chart hits."
              },
              {
                time: "1:00 PM",
                show: "Bollywood Bliss",
                host: "Bharti Rathore",
                desc: "Afternoon deep-dives into Bollywood's biggest tracks and celebrity gossip."
              },
              {
                time: "4:00 PM",
                show: "Desh Pardesh",
                host: "Vishal",
                desc: "Lifestyle, culture and music blending the best of India and America."
              },
              {
                time: "5:00 PM",
                show: "Hello Vaishnavi",
                host: "Vaishnavi Palleda",
                desc: "Evening drive-time conversations on immigration, careers, and culture."
              },
              {
                time: "7:00 PM",
                show: "Nirvana Nights",
                host: "Parag",
                desc: "Wind down with melodic late-night Bollywood and chill session."
              },
              {
                time: "Monthly",
                show: "Geet Bazaar",
                host: "Dr. Taj & Dr. Caldwell",
                desc: "A nostalgic retro music journey through the golden age of Hindi cinema."
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl border border-border hover:border-primary transition-colors bg-card">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{item.time}</p>
                <h3 className="text-lg font-bold mb-1">{item.show}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-bold mb-2">with {item.host}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Multiple FM Frequencies Across the USA</h2>
          <p className="mb-4">
            Radio Nyra's Bollywood FM content reaches listeners across multiple major US markets through
            terrestrial HD Radio broadcasts:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">City</th>
                  <th className="px-4 py-3 text-left font-bold">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Raleigh-Durham, NC", "99.9 FM HD4 & 101.9 FM & 1490 AM"],
                  ["Atlanta, GA", "107.5 FM HD3 WAMJ"],
                  ["Baltimore / D.C.", "92.3 FM HD2 WERQ"],
                  ["Cleveland, OH", "93.1 FM HD2 WZAK"],
                  ["Columbus, OH", "107.5 FM HD2 WCKX"],
                  ["Philadelphia, PA", "103.9 FM HD2 WPHI"],
                  ["St. Louis, MO", "95.5 FM HD2 WFUN-FM"],
                ].map(([city, freq], i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "" : "bg-muted/30"}`}>
                    <td className="px-4 py-3 font-bold">{city}</td>
                    <td className="px-4 py-3 text-primary font-bold">{freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Stream Bollywood FM Online — Anywhere in the USA</h2>
          <p>
            No FM receiver? No problem. You can access Radio Nyra's Bollywood FM stream directly from
            this webpage using the player above, or through our dedicated mobile apps for iOS and Android.
            We are also available on Amazon Alexa — just say <em>"Alexa, play Radio Nyra"</em> — and on
            Google Home by saying <em>"Hey Google, play Radio Nyra"</em>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Why Radio Nyra is the Best Bollywood FM USA Choice</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><span className="text-foreground font-bold">100,000+ weekly listeners</span> — One of the largest South Asian radio networks in the country.</li>
            <li><span className="text-foreground font-bold">24/7 live programming</span> — Never a dead air moment. Always fresh, always live.</li>
            <li><span className="text-foreground font-bold">60,000+ newsletter subscribers</span> — A deeply engaged community that stays connected.</li>
            <li><span className="text-foreground font-bold">Multi-city FM presence</span> — Reach across 7+ major US metropolitan areas.</li>
            <li><span className="text-foreground font-bold">Free to listen</span> — No subscription needed, ever.</li>
          </ul>
        </section>
      </div>
    </SeoPageLayout>
  )
}
