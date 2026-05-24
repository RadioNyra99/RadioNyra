import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Advertise to Indian Americans USA | South Asian Radio Ads — Radio Nyra",
  description: "Reach 100,000+ South Asian listeners weekly with Radio Nyra. The most effective platform for Indian business ads in the USA — FM radio, digital streaming, newsletters, and social media.",
  keywords: [
    "Indian business ads USA",
    "advertise to South Asians USA",
    "Desi advertising North Carolina",
    "Indian radio advertising USA",
    "South Asian radio ads",
    "Radio Nyra sponsorship",
    "advertise Indian community USA",
    "Bollywood radio advertising",
    "Indian American marketing",
    "ethnic radio advertising USA",
  ],
  alternates: { canonical: "/indian-business-ads-usa" },
  openGraph: {
    title: "Advertise to Indian Americans | Radio Nyra — South Asian Radio Ads USA",
    description: "Reach 100K+ weekly South Asian listeners across 7 US cities. On-air ads, digital, newsletter & events — Radio Nyra.",
    url: "https://www.radionyra.com/indian-business-ads-usa",
  },
}

export default function IndianBusinessAdsUsaPage() {
  const adPackages = [
    {
      name: "On-Air Radio Spots",
      icon: "📻",
      desc: "60-second and 30-second commercials broadcast during prime-time shows across our FM frequencies. Ideal for businesses wanting direct reach into the South Asian household.",
      features: ["Morning, Afternoon & Evening slots", "7 US city FM networks", "100K+ weekly listeners"],
    },
    {
      name: "Digital Streaming Ads",
      icon: "📱",
      desc: "Mid-roll and pre-roll audio ads served to our global online streaming audience and mobile app users. Perfect for national brands targeting the Indian-American demographic.",
      features: ["Geotargeted by city/region", "Mobile app & web", "Trackable impressions"],
    },
    {
      name: "Newsletter Sponsorships",
      icon: "📧",
      desc: "Sponsored placements in our weekly email newsletter distributed to 60,000+ subscribed South Asian listeners. One of the highest-engagement channels we offer.",
      features: ["60,000+ subscribers", "Weekly sends", "Dedicated placement sections"],
    },
    {
      name: "Social Media Promotions",
      icon: "📲",
      desc: "Sponsored posts, stories and reels across our Facebook, Instagram, YouTube, and WhatsApp channels reaching 20,000+ social followers in the Indian-American community.",
      features: ["20K+ social followers", "Facebook, Instagram, YouTube", "Video & image creative"],
    },
    {
      name: "Event Sponsorships",
      icon: "🎉",
      desc: "Be the proud sponsor of Radio Nyra's signature South Asian events — Holi Festival, New Year Bollywood Bash, Diwali Gala, and more. Get your brand in front of thousands of in-person attendees.",
      features: ["Banner & stage branding", "On-air event mentions", "Ticket giveaways"],
    },
    {
      name: "Podcast Episode Sponsorship",
      icon: "🎙️",
      desc: "Sponsor specific podcast episodes of our popular shows like Chai Pe Charcha, Leaders & Legends, and Mana Muchatlu for targeted audience engagement.",
      features: ["Mid-roll & pre-roll ads", "YouTube video placements", "Show page branding"],
    },
  ]

  const stats = [
    { label: "Weekly Listeners", value: "100,000+" },
    { label: "Newsletter Subscribers", value: "60,000+" },
    { label: "Social Followers", value: "20,000+" },
    { label: "US Markets", value: "7 Cities" },
    { label: "Years On Air", value: "10+" },
    { label: "Broadcasts Daily", value: "24/7" },
  ]

  const industries = [
    "Indian Restaurants & Catering",
    "Grocery & Desi Food Stores",
    "Immigration Attorneys & Visa Services",
    "Real Estate & Mortgage Brokers",
    "Indian Jewelry & Fashion",
    "Hospitals & Healthcare Providers",
    "Tech Companies & Staffing Agencies",
    "Insurance Agents",
    "Indian Travel Agencies",
    "Community Organizations & Non-Profits",
  ]

  return (
    <SeoPageLayout
      title="Indian Business Ads USA"
      subtitle="Reach 100,000+ South Asian Listeners — The Most Powerful Indian-American Advertising Platform"
      stationKey="Hindi"
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-4">Why Advertise on Radio Nyra?</h2>
          <p>
            Radio Nyra is the #1 South Asian radio network in the USA with unparalleled reach into the
            Indian-American community. If your business serves the South Asian community — whether you're
            a local restaurant in Cary, a national immigration law firm, or a healthcare provider in
            Raleigh — advertising with Radio Nyra puts your brand in front of the most engaged Indian
            audiences across the United States. Our listeners are educated, high-income, brand-loyal, and
            deeply connected to their cultural roots.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Audience — By the Numbers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-5 rounded-xl border border-border bg-card text-center">
                <p className="text-3xl font-black text-primary mb-1">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Advertising Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {adPackages.map((pkg, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-border hover:border-primary transition-all bg-card"
              >
                <div className="text-3xl mb-3">{pkg.icon}</div>
                <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{pkg.desc}</p>
                <ul className="space-y-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                      <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Industries We Serve</h2>
          <p className="mb-4">
            We work with businesses of all sizes that want to connect with the South Asian community across the USA:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {industries.map((ind) => (
              <div key={ind} className="flex items-center gap-2 text-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                {ind}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Start Advertising Today</h2>
          <p>
            Ready to grow your business within the Indian-American community? Contact our advertising team
            today to discuss customized packages, pricing, and creative solutions that fit your goals
            and budget. We serve businesses from local mom-and-pop shops to national brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="mailto:info@radionyra.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-black uppercase tracking-widest rounded-full hover:bg-primary/90 transition-colors text-sm"
            >
              📧 Email Us
            </a>
            <a
              href="tel:+19199998595"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-black uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-colors text-sm"
            >
              📞 Call +1 (919) 999-8595
            </a>
            <Link
              href="/advertise"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground/30 text-foreground font-black uppercase tracking-widest rounded-full hover:border-primary hover:text-primary transition-colors text-sm"
            >
              View Full Media Kit
            </Link>
          </div>
        </section>
      </div>
    </SeoPageLayout>
  )
}
