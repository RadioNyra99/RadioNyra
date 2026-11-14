import type { Metadata } from "next"
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryForm } from "@/components/inquiry-form"
import { RADIO_CONTENT, RADIO_FREQUENCIES } from "@/lib/radio-content"

export const metadata: Metadata = {
  title: "Contact Radio Nyra",
  description: "Contact Radio Nyra in Raleigh–Durham, North Carolina, by email, phone, WhatsApp, or social media.",
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
  const email = RADIO_CONTENT.contact.email
  const phone = RADIO_CONTENT.contact.phone
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`
  const businessPhone = RADIO_CONTENT.contact.businessPhone
  const businessPhoneHref = `tel:${businessPhone.replace(/[^+\d]/g, "")}`
  const address = RADIO_CONTENT.contact.address
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="relative isolate overflow-hidden bg-[#0b1631] py-14 text-white sm:py-20">
          <div aria-hidden className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(ellipse at 80% 10%, rgba(239,42,56,.25), transparent 42%), radial-gradient(ellipse at 5% 100%, rgba(51,90,170,.28), transparent 45%)" }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-red-300">Contact Radio Nyra</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">We’d love to hear from you.</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              Request a song, suggest a topic, ask about a partnership, or share your feedback. The Radio Nyra team is here to help.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl items-stretch gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-5">
            <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-primary">Send us a message</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">What’s on your mind?</h2>
              <p className="mb-6 mt-2 text-sm leading-relaxed text-muted-foreground">Tell us how we can help and include the best way to reach you.</p>
              <InquiryForm kind="contact" />
            </div>

            <div className="rounded-2xl bg-[#0b1631] p-5 text-white sm:p-6">
              <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-red-300"><MapPin className="h-4 w-4" aria-hidden />Broadcasting area</p>
              <p className="mt-2 font-bold">Raleigh–Durham, North Carolina, USA</p>
              <div className="mt-4 grid auto-rows-fr gap-3 sm:grid-cols-2">
                {RADIO_FREQUENCIES.map((market) => (
                  <div key={market.market} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[9px] font-extrabold uppercase tracking-[.12em] text-white/50">{market.market}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/85">{market.channels.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="flex h-full flex-col gap-4" aria-label="Direct contact information">
            <h2 className="text-xl font-black tracking-tight">Reach us directly</h2>
            <div className="grid auto-rows-fr gap-3 sm:grid-cols-2">
              <a href={`mailto:${email}`} className="flex min-h-[104px] flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
                <Mail className="h-5 w-5 text-primary" aria-hidden />
                <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[.16em] text-muted-foreground">Email</p>
                <p className="mt-1 break-words font-bold text-primary">{email}</p>
              </a>
              <div className="flex min-h-[136px] flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
                <Phone className="h-5 w-5 text-primary" aria-hidden />
                <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[.16em] text-muted-foreground">Call Radio Nyra</p>
                <a href={phoneHref} className="mt-1 font-bold hover:text-primary">{phone}</a>
                <p className="mt-3 text-[9px] font-extrabold uppercase tracking-[.12em] text-muted-foreground">Advertising &amp; partnerships</p>
                <a href={businessPhoneHref} className="mt-1 font-bold text-primary hover:underline">{businessPhone}</a>
              </div>
              <a href={RADIO_CONTENT.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex min-h-[104px] flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-emerald-500/50">
                <MessageCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden />
                <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[.16em] text-muted-foreground">WhatsApp</p>
                <p className="mt-1 font-bold">Message our team</p>
              </a>
              <a href={mapHref} target="_blank" rel="noopener noreferrer" className="flex min-h-[104px] flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
                <MapPin className="h-5 w-5 text-primary" aria-hidden />
                <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[.16em] text-muted-foreground">Address</p>
                <p className="mt-1 text-sm font-bold leading-relaxed">{address}</p>
                <span className="mt-2 inline-flex text-xs font-bold text-primary">Open map <span className="sr-only">in a new tab</span><span aria-hidden className="ml-1">↗</span></span>
              </a>
            </div>

            <div className="flex min-h-[320px] flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="flex shrink-0 items-start justify-between gap-4 p-5">
                <div>
                  <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-primary"><MapPin className="h-4 w-4" aria-hidden />Visit Radio Nyra</p>
                  <p className="mt-2 text-sm font-bold leading-relaxed">{address}</p>
                </div>
                <a href={mapHref} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full border border-border px-3 py-2 text-xs font-bold transition-colors hover:border-primary hover:text-primary">Open map ↗</a>
              </div>
              <div className="min-h-56 flex-1 border-t border-border bg-muted sm:min-h-72">
                <iframe
                  title="Map to Radio Nyra in Durham, North Carolina"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </aside>
        </section>

        <section className="border-t border-border bg-muted/25 py-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:flex-row sm:px-6">
            <div className="text-center sm:text-left"><p className="text-sm font-bold">Follow Radio Nyra</p><p className="mt-1 text-xs text-muted-foreground">Keep up with shows, stories, and community events.</p></div>
            <div className="flex flex-wrap justify-center gap-2">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label} className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <social.icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
