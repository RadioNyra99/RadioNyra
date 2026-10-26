import Link from "next/link"
import { SOCIAL_LINKS } from "@/lib/site-data"
import { NewsletterSection } from "@/components/newsletter-section"

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800 py-8">
      <NewsletterSection />
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top Row: Brand + Links + Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          {/* Brand */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-700 bg-white shrink-0">
              <img src="/images/radio-nyra-logo.jpg" alt="Radio Nyra" className="w-full h-full object-cover" />
            </div>
            <div className="text-center sm:text-left">
              <span className="font-bold text-base text-white block">Radio Nyra</span>
              <span className="text-[11px] text-zinc-400">The Indian Subcontinent Community Media Network USA</span>
            </div>
          </div>

          {/* Essential Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2.5">
            {[
              { label: "Shows", href: "/shows" },
              { label: "Schedule", href: "/schedule" },
              { label: "Events", href: "/events" },
              { label: "Advertise", href: "/advertise" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-all hover:scale-110"
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom: Copyright + Legal */}
        <div className="mt-6 pt-5 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Radio Nyra. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            <Link href="/privacy-policy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-services" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
