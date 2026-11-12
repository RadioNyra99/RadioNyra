import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Globe2, Mic2, Radio, Video, Volume2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryForm } from "@/components/inquiry-form"
import { PartnersMarquee } from "@/components/partners-marquee"
import { AUDIENCE_STATS, RADIO_CONTENT, YOUTUBE_STATS } from "@/lib/radio-content"

export const metadata: Metadata = {
  title: "Advertise With Radio Nyra",
  description: "Connect with Radio Nyra listeners through on-air spots, show sponsorships, digital promotion, podcasts, and community events.",
  alternates: { canonical: "/advertise" },
}

const opportunities = [
  { icon: Radio, title: "On-air spots", copy: "Commercial spots across Hindi and Telugu broadcasts, including Raleigh–Durham frequencies and the Radio Nyra network." },
  { icon: Mic2, title: "Show sponsorships", copy: "Sponsor a Radio Nyra program and connect your brand with the listeners who tune in week after week." },
  { icon: Video, title: "Digital promotion", copy: "Explore partner placements across podcasts, interviews, YouTube, and Radio Nyra social channels." },
  { icon: Globe2, title: "Community partnerships", copy: "Work with Radio Nyra on community announcements, events, and local business campaigns." },
]

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="relative overflow-hidden bg-[#0b1631] py-14 text-white sm:py-20">
          <div aria-hidden className="absolute inset-0 opacity-55" style={{ background: "radial-gradient(ellipse at 78% 20%, rgba(239,42,56,.3), transparent 40%), radial-gradient(ellipse at 8% 100%, rgba(42,82,165,.35), transparent 45%)" }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-red-300">Advertise with Radio Nyra</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-[.98] tracking-tight sm:text-6xl">Bring your brand into the conversation.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">Reach Hindi and Telugu listeners in Raleigh–Durham and beyond through radio, digital media, and community programming.</p>
            <Link href="#inquiry" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-extrabold text-white transition-colors hover:bg-primary/90">Talk to our team <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="mb-7 max-w-3xl"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">A connected audience</p><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">Community reach across media.</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Audience figures shared by Radio Nyra. Contact our team for current campaign details and placement availability.</p></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{AUDIENCE_STATS.map((stat) => <div key={stat.label} className="rounded-2xl border border-border bg-card p-4 sm:p-5"><p className="text-2xl font-black text-primary sm:text-3xl">{stat.value}</p><p className="mt-1 text-[10px] font-extrabold uppercase tracking-[.1em] text-muted-foreground sm:text-xs">{stat.label}</p></div>)}</div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{YOUTUBE_STATS.map((stat) => <div key={stat.label} className="rounded-2xl border border-border bg-muted/30 p-4"><p className="text-xl font-black sm:text-2xl">{stat.value}</p><p className="mt-1 text-[9px] font-extrabold uppercase tracking-[.1em] text-muted-foreground">YouTube {stat.label}</p></div>)}</div>
        </section>

        <section className="bg-muted/35 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-7"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Ways to work together</p><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Campaigns made for your goals.</h2></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {opportunities.map((item) => <article key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><item.icon className="h-5 w-5" /></span><h3 className="mt-4 font-extrabold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p></article>)}
            </div>
            <article className="mt-5 rounded-2xl border border-border bg-card p-6 sm:p-8"><div className="flex gap-4"><Volume2 className="mt-1 h-5 w-5 shrink-0 text-primary" /><div><p className="text-[9px] font-extrabold uppercase tracking-[.18em] text-primary">Partner testimonial</p><blockquote className="mt-2 text-lg font-semibold leading-relaxed">“{RADIO_CONTENT.testimonials[0].content}”</blockquote><p className="mt-3 text-xs font-bold text-muted-foreground">{RADIO_CONTENT.testimonials[0].name} · {RADIO_CONTENT.testimonials[0].role}</p></div></div></article>
          </div>
        </section>

        <section className="border-y border-border py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-muted-foreground">Selected partners</p><div className="mt-5"><PartnersMarquee /></div></div>
        </section>

        <section id="inquiry" className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[.85fr_1.15fr]">
          <div className="lg:pt-4"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Advertising inquiry</p><h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Let’s plan your next campaign.</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Tell us about your business, preferred budget, and goals. Our team can share current placement options across radio, shows, digital media, and community events.</p><div className="mt-6 space-y-3 rounded-2xl border border-border bg-muted/25 p-5"><p className="text-xs font-extrabold uppercase tracking-[.14em] text-muted-foreground">Reach Radio Nyra</p><p className="text-sm font-semibold">{RADIO_CONTENT.contact.phone}</p><a href={RADIO_CONTENT.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">WhatsApp our team <ArrowRight className="h-4 w-4" /></a><p className="text-xs text-muted-foreground">Business email: <a className="font-semibold text-primary hover:underline" href={`mailto:${RADIO_CONTENT.contact.email}`}>{RADIO_CONTENT.contact.email}</a></p></div></div>
          <div className="rounded-3xl border border-border bg-card p-5 shadow-lg sm:p-8"><InquiryForm kind="advertising" /></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
