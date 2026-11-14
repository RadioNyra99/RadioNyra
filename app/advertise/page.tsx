import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Volume2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryForm } from "@/components/inquiry-form"
import { PartnersMarquee } from "@/components/partners-marquee"
import { AUDIENCE_STATS, RADIO_CONTENT, YOUTUBE_STATS } from "@/lib/radio-content"

export const metadata: Metadata = {
  title: "Advertise With Radio Nyra",
  description: "Connect your brand with Indian communities across America through Radio Nyra’s broadcast, digital, and community campaigns.",
  alternates: { canonical: "/advertise" },
}

const ecosystemChannels = [
  {
    num: "01",
    title: "LIVE RADIO",
    desc: "24/7 Hindi and Telugu across Raleigh-Durham on FM, HD Radio, AM and online.",
    metric: "~100,000 weekly listens",
  },
  {
    num: "02",
    title: "WHATSAPP COMMUNITIES",
    desc: "Direct access to highly engaged community groups, where the real conversations happen.",
    metric: "78% open within 2 hours",
  },
  {
    num: "03",
    title: "SOCIAL MEDIA",
    desc: "Instagram plus 60 to 70 Facebook community groups across the Triangle.",
    metric: "390K+ monthly Instagram reach",
  },
  {
    num: "04",
    title: "EMAIL NEWSLETTERS",
    desc: "High-converting newsletters to Indian Subcontinent households.",
    metric: "34.2% open · 9.1% click",
  },
  {
    num: "05",
    title: "PODCASTS",
    desc: "Trusted talk shows with sponsored segments and interviews.",
    metric: "15-minute and 1-hour sessions",
  },
  {
    num: "06",
    title: "IN-STORE DISPLAYS",
    desc: "Digital screens in five Indian grocery stores, where families choose what goes in the cart.",
    metric: "216,000+ monthly impressions",
  },
  {
    num: "07",
    title: "EVENTS & COMMUNITY PARTNERS",
    desc: "Our own festivals, on-the-ground activations and warm introductions to 17 associations.",
    metric: "50+ events · 250K+ attendees",
  },
  {
    num: "08",
    title: "AI-POWERED CREATIVE",
    desc: "AI audience targeting in Hindi, Telugu and English, plus fast-turnaround Bollywood-style AI video ads.",
    metric: "Reel-ready, fast to deploy",
  },
]

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="relative overflow-hidden bg-[#0b1631] py-14 text-white sm:py-20">
          <div aria-hidden className="absolute inset-0 opacity-55" style={{ background: "radial-gradient(ellipse at 78% 20%, rgba(239,42,56,.3), transparent 40%), radial-gradient(ellipse at 8% 100%, rgba(42,82,165,.35), transparent 45%)" }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-red-300">Nationwide community reach</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-[.98] tracking-tight sm:text-6xl">Connecting Indian communities across America.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">RadioNyra has a nationwide community reach. Let’s connect your brand with the community—and turn your goals into growth.</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">RadioNyra is your subject-matter expert for reaching Indian communities across the United States.</p>
            <Link href="#inquiry" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-extrabold text-white transition-colors hover:bg-primary/90">Talk to our team <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="mb-7 max-w-3xl"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">A connected audience</p><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">Community reach across media.</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Reach listeners and families through broadcast radio, WhatsApp, social media, email, in-store screens, and live events. Contact our team for current campaign details and placement availability.</p></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{AUDIENCE_STATS.map((stat) => <div key={stat.label} className="rounded-2xl border border-border bg-card p-4 sm:p-5"><p className="text-2xl font-black text-primary sm:text-3xl">{stat.value}</p><p className="mt-1 text-[10px] font-extrabold uppercase tracking-[.1em] text-muted-foreground sm:text-xs">{stat.label}</p></div>)}</div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{YOUTUBE_STATS.map((stat) => <div key={stat.label} className="rounded-2xl border border-border bg-muted/30 p-4"><p className="text-xl font-black sm:text-2xl">{stat.value}</p><p className="mt-1 text-[9px] font-extrabold uppercase tracking-[.1em] text-muted-foreground">YouTube {stat.label}</p></div>)}</div>
        </section>

        <section className="bg-zinc-50 py-12 sm:py-16 dark:bg-zinc-950/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {/* Header matching Image 2 */}
            <div className="flex items-start gap-4 sm:gap-5 mb-4">
              <div className="h-14 w-3 sm:h-16 sm:w-4 shrink-0 rounded-sm bg-[#A81822]" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#A81822]">
                  NOT JUST RADIO
                </p>
                <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 dark:text-white leading-[0.95]">
                  OUR 8-CHANNEL COMMUNITY ECOSYSTEM
                </h2>
              </div>
            </div>

            <p className="max-w-4xl text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              A family does not hear about a brand in one place. They hear it on the drive, read it in the group chat, see it at the store and then a friend says it out loud. Every channel below is a way to reach the community, and they work best together.
            </p>

            {/* 8 Channels Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ecosystemChannels.map((channel) => (
                <article
                  key={channel.num}
                  className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:border-[#A81822]/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#A81822] text-xs font-black text-white shadow-sm">
                        {channel.num}
                      </span>
                      <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight text-zinc-950 dark:text-white leading-tight">
                        {channel.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {channel.desc}
                    </p>
                  </div>
                  <p className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs font-black text-[#A81822] tracking-wide">
                    {channel.metric}
                  </p>
                </article>
              ))}
            </div>

            <article className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8"><div className="flex gap-4"><Volume2 className="mt-1 h-5 w-5 shrink-0 text-primary" /><div><p className="text-[9px] font-extrabold uppercase tracking-[.18em] text-primary">Partner testimonial</p><blockquote className="mt-2 text-lg font-semibold leading-relaxed">“{RADIO_CONTENT.testimonials[1].content}”</blockquote><p className="mt-3 text-xs font-bold text-muted-foreground">{RADIO_CONTENT.testimonials[1].name} · {RADIO_CONTENT.testimonials[1].role}</p></div></div></article>
          </div>
        </section>

        <section className="border-y border-border py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Selected partners</p><div className="mt-5"><PartnersMarquee /></div></div>
        </section>

        <section id="inquiry" className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[.85fr_1.15fr]">
          <div className="lg:pt-4"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Advertising inquiry</p><h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Let’s plan your next campaign.</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Tell us about your business, preferred budget, and goals. Our team can share current placement options across radio, shows, digital media, and community events.</p><div className="mt-6 space-y-3 rounded-2xl border border-border bg-muted/25 p-5"><p className="text-xs font-extrabold uppercase tracking-[.14em] text-muted-foreground">Reach Radio Nyra</p><a href={`tel:${RADIO_CONTENT.contact.businessPhone.replace(/[^+\d]/g, "")}`} className="block text-sm font-semibold hover:text-primary">Advertising &amp; partnerships: {RADIO_CONTENT.contact.businessPhone}</a><a href={`tel:${RADIO_CONTENT.contact.phone.replace(/[^+\d]/g, "")}`} className="block text-sm font-semibold hover:text-primary">General line: {RADIO_CONTENT.contact.phone}</a><a href={RADIO_CONTENT.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">WhatsApp our team <ArrowRight className="h-4 w-4" /></a><p className="text-xs text-muted-foreground">Business email: <a className="font-semibold text-primary hover:underline" href={`mailto:${RADIO_CONTENT.contact.email}`}>{RADIO_CONTENT.contact.email}</a></p></div></div>
          <div className="rounded-3xl border border-border bg-card p-5 shadow-lg sm:p-8"><InquiryForm kind="advertising" /></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
