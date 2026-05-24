import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"

export const metadata: Metadata = {
  title: "Indian Events in Raleigh NC | South Asian Festivals & Concerts — Radio Nyra",
  description: "Discover Indian events in Raleigh, NC. Radio Nyra promotes South Asian festivals, Bollywood concerts, Holi, Diwali, and community gatherings across Raleigh-Durham and the Triangle.",
  keywords: [
    "Indian events Raleigh",
    "South Asian events Raleigh NC",
    "Indian events North Carolina",
    "Bollywood concerts Raleigh",
    "Holi festival Cary NC",
    "Diwali events Raleigh",
    "Indian community events Triangle",
    "Telugu events Raleigh",
    "Indian concerts NC",
    "Desi events North Carolina",
  ],
  alternates: { canonical: "/indian-events-in-raleigh" },
  openGraph: {
    title: "Indian Events in Raleigh NC | Radio Nyra",
    description: "Your guide to South Asian festivals, Bollywood concerts, and community events in Raleigh-Durham, NC — powered by Radio Nyra.",
    url: "https://www.radionyra.com/indian-events-in-raleigh",
  },
}

export default function IndianEventsRaleighPage() {
  const pastEvents = [
    {
      title: "AR Rahman Live — The Wonderment Tour",
      date: "2025",
      location: "PNC Arena, Raleigh, NC",
      description:
        "Radio Nyra served as the official community media partner for the legendary AR Rahman's North America tour, one of the most-attended Indian concerts in US history. We broadcast live coverage, interviews, and exclusive backstage content.",
      tags: ["Concert", "Bollywood", "Live Music"],
    },
    {
      title: "Zain Zohaib Qawwali Show",
      date: "2025",
      location: "Raleigh-Durham Area",
      description:
        "An enchanting evening of soul-stirring Qawwali and spiritual music featuring the celebrated Zain Zohaib. Radio Nyra was the exclusive radio partner promoting and covering this cultural event.",
      tags: ["Qawwali", "Cultural", "Music"],
    },
    {
      title: "Hooky Holiday Showcase",
      date: "2025",
      location: "Raleigh, NC",
      description:
        "A festive holiday showcase featuring South Asian artists, local vendors, and community performances. Radio Nyra brought the energy of this vibrant community celebration to thousands of listeners.",
      tags: ["Holiday", "Community", "Showcase"],
    },
    {
      title: "Radio Nyra Holi Festival",
      date: "Annual",
      location: "HSNC Temple & Community Spaces, Cary/Morrisville",
      description:
        "Radio Nyra's signature annual Holi celebration — a riot of colors, music, food, and community spirit. Held across various venues in the Cary and Morrisville area, this is the Triangle's most beloved Indian spring festival.",
      tags: ["Holi", "Festival", "Annual"],
    },
    {
      title: "New Year Bollywood Bash 2026",
      date: "Dec 31, 2025",
      location: "Raleigh-Durham Metro",
      description:
        "Ring in the New Year with the biggest Bollywood party in North Carolina! Live DJ, dance performances, traditional attire, and a midnight countdown broadcast live on Radio Nyra.",
      tags: ["New Year", "Bollywood", "Party"],
    },
    {
      title: "Diwali Gala — Festival of Lights",
      date: "Annual — October/November",
      location: "Various Venues, Triangle NC",
      description:
        "Celebrate the Festival of Lights with Radio Nyra's annual Diwali coverage. We partner with local temples, cultural organizations, and community centers to bring you the best Diwali programming in the Carolinas.",
      tags: ["Diwali", "Festival", "Annual"],
    },
  ]

  return (
    <SeoPageLayout
      title="Indian Events in Raleigh"
      subtitle="Your Guide to South Asian Festivals, Concerts & Community Gatherings in the Triangle"
      stationKey="Hindi"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Raleigh-Durham's Hub for Indian Community Events</h2>
          <p>
            The Research Triangle is home to one of the most vibrant and fastest-growing Indian-American communities
            on the East Coast. From Holi festivals splashed with color to chart-topping Bollywood concerts and
            soul-stirring Qawwali nights, Radio Nyra is at the heart of every major South Asian event in Raleigh,
            Durham, Cary, and Morrisville. We don't just cover events — we co-create them, promote them, and
            broadcast them live to 100,000+ weekly listeners.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Events Powered & Promoted by Radio Nyra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 bg-card"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{event.date}</p>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide mb-3">
                  📍 {event.location}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Why Radio Nyra is Your Best Event Source</h2>
          <p>
            When it comes to Indian events in Raleigh and the broader Triangle area, Radio Nyra is the most
            trusted source in the South Asian community. Our RJs announce upcoming events daily on-air, our
            60,000+ newsletter subscribers receive exclusive event previews, and our social media channels
            keep you updated in real time. Whether you're looking for family-friendly cultural festivals,
            high-energy Bollywood concerts, or intimate community gatherings — we've got you covered.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Want to Promote Your Indian Event in Raleigh?</h2>
          <p>
            Are you organizing a South Asian event, festival, or cultural show in the Raleigh-Durham area?
            Radio Nyra offers powerful event promotion packages including on-air announcements, social media
            promotion, newsletter features, and live coverage. Reach over 100,000 engaged South Asian listeners
            across North Carolina. Contact us at{" "}
            <a href="mailto:info@radionyra.com" className="text-primary font-bold underline">
              info@radionyra.com
            </a>{" "}
            or call{" "}
            <a href="tel:+19199998595" className="text-primary font-bold underline">
              +1 (919) 999-8595
            </a>{" "}
            to discuss your event promotion needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Stay Updated — Listen Live for Event Announcements</h2>
          <p>
            The best way to never miss an Indian event in Raleigh is to keep Radio Nyra on. Our RJs regularly
            share community news, event announcements, and exclusive pre-sale ticket opportunities throughout
            the day. Hit the Listen Live button above and stay plugged into the heartbeat of North Carolina's
            Indian-American community.
          </p>
        </section>
      </div>
    </SeoPageLayout>
  )
}
