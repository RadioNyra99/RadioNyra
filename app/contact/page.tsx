import type { Metadata } from "next"
import { Facebook, Instagram, Linkedin, MapPin, MessageCircle, Send, Twitter, Youtube } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryForm } from "@/components/inquiry-form"
import { RADIO_CONTENT, RADIO_FREQUENCIES } from "@/lib/radio-content"

export const metadata: Metadata = {
  title: "Contact Radio Nyra",
  description: "Contact Radio Nyra in Raleigh–Durham, North Carolina, by message, WhatsApp, or social media.",
  alternates: { canonical: "/contact" },
}

const socials = [
  { label: "Facebook", href: "https://facebook.com/radionyrausa", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/radionyrausa", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/c/RadioNyraUSA", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/company/radionyrausa", icon: Linkedin },
  { label: "X", href: "https://twitter.com/NyraUsa", icon: Twitter },
  { label: "Telegram", href: "https://t.me/radionyra", icon: Send },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="bg-[#0b1631] py-14 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-red-300">Contact Radio Nyra</p><h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">We’re part of your community.</h1><p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">Get in touch with the Radio Nyra team in Raleigh–Durham, North Carolina.</p></div>
        </section>

        <section className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.1fr_.9fr]">
          <div className="self-start rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8"><p className="mb-5 text-[10px] font-extrabold uppercase tracking-[.18em] text-primary">Send us a message</p><InquiryForm kind="contact" /></div>
          <div className="space-y-5">
            <article className="rounded-2xl border border-border bg-card p-5"><p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-primary">Business</p><p className="mt-2 font-bold">{RADIO_CONTENT.contact.business}</p></article>
            <a href={`tel:${RADIO_CONTENT.contact.phone.replace(/[^+\d]/g, "")}`} className="block rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"><p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-primary">Call Radio Nyra</p><p className="mt-2 font-bold">{RADIO_CONTENT.contact.phone}</p></a>
            <a href={RADIO_CONTENT.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"><p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-emerald-700 dark:text-emerald-400"><MessageCircle className="h-4 w-4" />WhatsApp</p><p className="mt-2 font-bold">{RADIO_CONTENT.contact.phone}</p></a>
            <article className="rounded-2xl border border-border bg-muted/30 p-5"><p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-muted-foreground">Email</p><a className="mt-2 inline-block font-bold text-primary hover:underline" href={`mailto:${RADIO_CONTENT.contact.email}`}>{RADIO_CONTENT.contact.email}</a><p className="mt-3 text-[10px] font-extrabold uppercase tracking-[.16em] text-muted-foreground">Address</p><p className="mt-2 text-sm font-semibold">{RADIO_CONTENT.contact.address}</p></article>
            <div className="rounded-2xl bg-[#0b1631] p-5 text-white"><p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-red-300"><MapPin className="h-4 w-4" />Broadcasting area</p><p className="mt-2 font-bold">Raleigh–Durham, North Carolina, USA</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{RADIO_FREQUENCIES.map((market) => <div key={market.market} className="rounded-xl border border-white/10 bg-white/5 p-3"><p className="text-[9px] font-extrabold uppercase tracking-[.12em] text-white/50">{market.market}</p><p className="mt-1 text-xs leading-relaxed text-white/85">{market.channels.join(" · ")}</p></div>)}</div></div>
          </div>
        </section>

        <section className="border-t border-border bg-muted/25 py-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:flex-row sm:px-6"><p className="text-sm font-bold">Follow Radio Nyra</p><div className="flex flex-wrap justify-center gap-2">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label} className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"><social.icon className="h-4 w-4" /></a>)}</div></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
