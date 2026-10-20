import Link from "next/link"
import { SOCIAL_LINKS } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border border-zinc-700 bg-white">
              <img
                src="/images/radio-nyra-logo.jpg"
                alt="Radio Nyra Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight block text-white">Radio Nyra</span>
              <span className="text-xs text-zinc-400 mt-0.5 block max-w-xs">
                The Indian Subcontinent Community Media Network
              </span>
            </div>
          </div>

          {/* Nav Links - 4 Column Grid */}
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-auto">
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-black uppercase tracking-wider text-white mb-1">Listen</span>
              <Link href="/markets" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Markets &amp; Coverage</Link>
              <Link href="/indian-radio-usa" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Indian Radio USA</Link>
              <Link href="/bollywood-radio-online" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Bollywood Radio</Link>
              <Link href="/telugu-radio-usa" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Telugu Radio USA</Link>
              <Link href="/hosts" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Meet the Hosts</Link>
              <Link href="/schedule" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Schedule</Link>
              <Link href="/podcasts" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Podcasts</Link>
              <Link href="/how-to-tune" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">How to Tune In</Link>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-black uppercase tracking-wider text-white mb-1">Community</span>
              <Link href="/events" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Events</Link>
              <Link href="/community/temples" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Temples &amp; Spiritual</Link>
              <Link href="/community/restaurants" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Indian Food Guide</Link>
              <Link href="/community/movies" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Movie Releases</Link>
              <Link href="/gallery" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Gallery</Link>
              <Link href="/news" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">News</Link>
              <Link href="/blog" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Blog</Link>
              <Link href="/festival-calendar" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Festival Calendar</Link>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-black uppercase tracking-wider text-white mb-1">Triangle NC</span>
              <Link href="/markets/raleigh-durham" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Raleigh-Durham (99.9 FM)</Link>
              <Link href="/cary-nc-radio" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Cary NC Radio</Link>
              <Link href="/morrisville-nc-radio" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Morrisville NC Radio</Link>
              <Link href="/durham-nc-radio" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Durham &amp; RTP Radio</Link>
              <Link href="/write-for-us" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Write For Us</Link>
              <Link href="/faq" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">FAQ</Link>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-black uppercase tracking-wider text-white mb-1">Company</span>
              <Link href="/about" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">About</Link>
              <Link href="/advertise" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Advertise</Link>
              <Link href="/advertiser-success-stories" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Success Stories</Link>
              <Link href="/services" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Services</Link>
              <Link href="/contact" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Contact</Link>
              <Link href="/press" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Press</Link>
            </div>
          </nav>

          {/* Social Media & App Store Icons */}
          <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
            <div className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.label}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app"
                target="_blank"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 flex items-center justify-center transition-all hover:scale-110"
                title="Get it on Google Play"
              >
                <img src="/android-icon.webp" alt="Google Play" className="w-6 h-6 object-contain" />
              </Link>
              <Link
                href="https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980"
                target="_blank"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 flex items-center justify-center transition-all hover:scale-110"
                title="Download on Apple App Store"
              >
                <img src="/apple-icon.webp" alt="App Store" className="w-6 h-6 object-contain" />
              </Link>
            </div>
          </div>
        </div>

        {/* Clean Bottom Copyright & Legal Links */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <p>© {new Date().getFullYear()} Radio Nyra. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-services" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
