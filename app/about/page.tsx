import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, HeartHandshake, Music2, Radio, Users, Youtube } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AUDIENCE_STATS, YOUTUBE_STATS } from "@/lib/radio-content"

export const metadata: Metadata = {
  title: "About Radio Nyra",
  description: "Radio Nyra is a Hindi and Telugu community radio and digital media network serving Raleigh–Durham and listeners beyond.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="relative isolate overflow-hidden bg-[#0b1631] text-white">
          <div aria-hidden className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(ellipse at 78% 20%, rgba(239,42,56,.28), transparent 40%), radial-gradient(ellipse at 10% 95%, rgba(51,90,170,.32), transparent 42%)" }} />
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_.82fr] lg:items-center">
            <div><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-red-300">About Radio Nyra</p><h1 className="mt-3 max-w-3xl text-4xl font-black leading-[.98] tracking-tight sm:text-6xl">A soundtrack for the community we call home.</h1><p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">Radio Nyra is a Hindi and Telugu community radio and digital media network based in Raleigh–Durham, North Carolina. For 12 years, we have brought music, news, podcasts, interviews, and community stories to listeners here and beyond.</p><p className="mt-4 text-xs font-bold uppercase tracking-[.16em] text-white/45">The Indian Subcontinent Community Media Network USA</p></div>
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2"><img src="/radio-studio-modern.webp" alt="Radio Nyra broadcast studio" className="aspect-[4/3] w-full rounded-2xl object-cover" /></div>
          </div>
        </section>

        <section id="history" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="mb-7 max-w-3xl"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Our story</p><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">A radio legacy that keeps growing.</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Radio Nyra connects a long broadcast heritage with the voices, music, and communities of today.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Radio className="h-5 w-5" /></div><p className="mt-5 text-xs font-black uppercase tracking-[.17em] text-primary">November 16, 1963</p><h3 className="mt-2 text-xl font-extrabold">A heritage of broadcasting.</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Radio Nyra traces its broadcast heritage to a community voice first heard on November 16, 1963.</p></article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Radio className="h-5 w-5" /></div><p className="mt-5 text-xs font-black uppercase tracking-[.17em] text-primary">2014 · Durham, North Carolina</p><h3 className="mt-2 text-xl font-extrabold">Radio Nyra’s local chapter begins.</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Founder Ravi Cherukuri brought Radio Nyra to the Triangle on WDUR 1490 AM with 24/7 Desi news, talk, and music.</p></article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:col-span-2 xl:col-span-1 sm:p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200"><YoutubeMark /></div><p className="mt-5 text-xs font-black uppercase tracking-[.17em] text-primary">2021 · YouTube</p><h3 className="mt-2 text-xl font-extrabold">The conversation reaches farther.</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Radio Nyra began sharing interviews, podcasts, community conversations, and Leaders &amp; Legends on YouTube in February 2021.</p></article>
          </div>
        </section>

        <section className="bg-muted/35 py-10 sm:py-14">
          <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 sm:px-6 md:grid-cols-[1fr_.8fr] md:gap-10">
            <div><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Founder</p><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">Ravi Cherukuri</h2><p className="mt-2 text-xs font-extrabold uppercase tracking-[.14em] text-muted-foreground">Founder, Radio Nyra</p><p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">Ravi Cherukuri founded Radio Nyra’s North Carolina chapter in Durham in 2014. Under his leadership, it has grown from a local AM station into a community media network spanning broadcast radio, digital listening, video, and community events.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">Connect with Radio Nyra <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-sm"><img src="/rc-founder.webp" alt="Ravi Cherukuri, founder of Radio Nyra" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover object-center" /></div>
          </div>
        </section>

        <section className="bg-muted/35 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-7"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Our reach</p><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">A growing community, across channels.</h2></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {AUDIENCE_STATS.map((stat) => <div key={stat.label} className="rounded-2xl border border-border bg-card p-4 sm:p-5"><p className="text-2xl font-black tracking-tight text-primary sm:text-3xl">{stat.value}</p><p className="mt-1 text-[10px] font-extrabold uppercase tracking-[.1em] text-muted-foreground sm:text-xs">{stat.label}</p></div>)}
            </div>
            <div className="mt-8 rounded-2xl bg-[#0b1631] p-5 text-white sm:p-7">
              <div className="mb-4 flex items-center gap-3"><YoutubeMark /><div><p className="font-extrabold">@RadioNyraUSA</p><p className="text-xs text-white/50">YouTube channel</p></div><Link href="https://www.youtube.com/@RadioNyraUSA" target="_blank" rel="noopener noreferrer" className="ml-auto text-xs font-bold text-red-300 hover:underline">Visit channel <ArrowRight className="ml-1 inline h-3.5 w-3.5" /></Link></div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{YOUTUBE_STATS.map((stat) => <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xl font-black sm:text-2xl">{stat.value}</p><p className="mt-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-white/50">{stat.label}</p></div>)}</div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-7 max-w-3xl"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">What guides us</p><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">Our mission, vision &amp; values.</h2></div>
          <div className="grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-6"><HeartHandshake className="h-6 w-6 text-primary" /><h3 className="mt-4 text-lg font-extrabold">Mission</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">To connect Hindi and Telugu listeners through music, news, culture, and stories that bring our community closer.</p></article>
            <article className="rounded-2xl border border-border bg-card p-6"><Users className="h-6 w-6 text-primary" /><h3 className="mt-4 text-lg font-extrabold">Vision</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">A welcoming community media network that helps South Asian voices, local stories, and shared culture travel farther.</p></article>
            <article className="rounded-2xl border border-border bg-card p-6"><Music2 className="h-6 w-6 text-primary" /><h3 className="mt-4 text-lg font-extrabold">Values</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Community, cultural connection, representation, and accessible listening guide what we share on air and online.</p></article>
          </div>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/shows" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary/90">Explore our shows <ArrowRight className="h-4 w-4" /></Link><Link href="/advertise" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-bold hover:border-primary/40">Partner with us <ArrowRight className="h-4 w-4 text-primary" /></Link></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function YoutubeMark() {
  return <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950/50 dark:text-red-300"><YoutubeIcon /></span>
}

function YoutubeIcon() {
  return <Youtube className="h-5 w-5" aria-hidden />
}
