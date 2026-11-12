import Link from "next/link"
import { Headphones } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/site-data"
import { RADIO_CONTENT, RADIO_FREQUENCIES } from "@/lib/radio-content"
import { NewsletterSection } from "@/components/newsletter-section"

const quickLinks = [
  { label: "Shows & Schedule", href: "/shows" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Festival Calendar", href: "/festival-calendar" },
  { label: "Community Impact", href: "/community-impact" },
  { label: "Listener Voice", href: "/listener-voice" },
  { label: "News & Updates", href: "/news" },
  { label: "YouTube & Interviews", href: "/youtube" },
  { label: "RTV Telugu News", href: "/rtv-news" },
  { label: "Video Library", href: "/video-library" },
  { label: "Creative Studio", href: "/creative-studio" },
  { label: "Success Stories", href: "/advertiser-success-stories" },
  { label: "Advertising Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Advertise With Us", href: "/advertise" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#0b1631] text-white">
      <NewsletterSection />
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-9 sm:px-6">
        <div className="grid gap-9 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Radio Nyra home">
              <img src="/images/radio-nyra-logo.png" alt="Radio Nyra logo" className="h-14 w-14 rounded-full border border-white/20 bg-white object-cover" />
              <span><span className="block text-xl font-black tracking-tight">Radio Nyra</span><span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[.16em] text-white/45">Community Media Network USA</span></span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">Hindi and Telugu community radio, podcasts, news, and stories from Raleigh–Durham, North Carolina.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"><social.icon className="h-4 w-4" /></a>)}
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/70"><a className="inline-flex items-center gap-2 hover:text-white" href={`tel:${RADIO_CONTENT.contact.phone.replace(/[^+\d]/g, "")}`}><Headphones className="h-3.5 w-3.5 text-red-300" />{RADIO_CONTENT.contact.phone}</a><a className="hover:text-white" href={`mailto:${RADIO_CONTENT.contact.email}`}>{RADIO_CONTENT.contact.email}</a></div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div><h2 className="text-[10px] font-extrabold uppercase tracking-[.18em] text-white/45">Explore</h2><nav aria-label="Footer navigation" className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">{quickLinks.map((item) => <Link key={item.href} href={item.href} className="text-xs font-semibold text-white/75 transition-colors hover:text-white">{item.label}</Link>)}</nav></div>
            <div><h2 className="text-[10px] font-extrabold uppercase tracking-[.18em] text-white/45">Listen</h2><ul className="mt-3 space-y-2 text-xs text-white/75">{RADIO_FREQUENCIES.map((market) => <li key={market.market}><span className="font-bold text-white">{market.market}:</span> {market.channels.join(" · ")}</li>)}</ul></div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Radio Nyra. All rights reserved.</p>
          <div className="flex flex-wrap gap-4"><Link href="/privacy-policy" className="hover:text-white/80">Privacy Policy</Link><Link href="/terms-services" className="hover:text-white/80">Terms of Service</Link><a href="https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">App Store</a><a href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">Google Play</a></div>
        </div>
      </div>
    </footer>
  )
}
