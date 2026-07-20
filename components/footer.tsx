import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Radio, Smartphone, Apple } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-background overflow-hidden flex items-center justify-center border border-border/20">
              <img
                src="/images/radio-nyra-logo.jpg"
                alt="Radio Nyra Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight block">Radio Nyra</span>
              <span className="text-xs text-gray-400 mt-1 block">The Indian Subcontinent Community Media Network</span>
            </div>
          </div>

          {/* Nav Links - 4 Column Footer Grid */}
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-white mb-1">Listen</span>
              <Link href="/fm-stations" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">FM Stations</Link>
              <Link href="/hosts" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Meet the Hosts</Link>
              <Link href="/schedule" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Schedule</Link>
              <Link href="/podcasts" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Podcasts</Link>
              <Link href="/how-to-tune" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">How to Tune In</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-white mb-1">Community</span>
              <Link href="/events" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Events</Link>
              <Link href="/gallery" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Gallery</Link>
              <Link href="/news" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">News</Link>
              <Link href="/blog" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Blog</Link>
              <Link href="/festival-calendar" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Festival Calendar</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-white mb-1">Resources</span>
              <Link href="/directory" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Business Directory</Link>
              <Link href="/write-for-us" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Write For Us</Link>
              <Link href="/faq" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">FAQ</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-white mb-1">Company</span>
              <Link href="/about" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/advertise" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Advertise</Link>
              <Link href="/services" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Services</Link>
              <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Contact</Link>
              <Link href="/press" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Press</Link>
            </div>
          </nav>

          {/* Socials & Voice Assistant */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              <Link href="https://facebook.com/radionyrausa" target="_blank" className="text-gray-400 hover:text-white transition-colors" title="Facebook"><Facebook className="w-5 h-5" /></Link>
              <Link href="https://instagram.com/radionyrausa" target="_blank" className="text-gray-400 hover:text-white transition-colors" title="Instagram"><Instagram className="w-5 h-5" /></Link>
              <Link href="https://twitter.com/NyraUsa" target="_blank" className="text-gray-400 hover:text-white transition-colors" title="Twitter"><Twitter className="w-5 h-5" /></Link>
              <Link href="https://youtube.com/c/RadioNyraUSA" target="_blank" className="text-gray-400 hover:text-white transition-colors" title="YouTube"><Youtube className="w-5 h-5" /></Link>
              <Link href="https://linkedin.com/company/radionyrausa" target="_blank" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn"><Linkedin className="w-5 h-5" /></Link>
              <div className="w-px h-4 bg-white/10 mx-2" />
              <Link href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app" target="_blank" className="text-primary hover:text-white transition-colors flex items-center" title="Download Radio Nyra on the Google Play Store">
                <img src="/android-icon.png" alt="Download Radio Nyra on the Google Play Store" className="w-6 h-6 object-contain grayscale hover:grayscale-0 transition-all" />
              </Link>
              <Link href="https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980" target="_blank" className="text-primary hover:text-white transition-colors flex items-center" title="Download Radio Nyra on the Apple App Store">
                <img src="/apple-icon.png" alt="Download Radio Nyra on the Apple App Store" className="w-6 h-6 object-contain grayscale hover:grayscale-0 transition-all" />
              </Link>
            </div>


          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} Radio Nyra. All rights reserved.</p>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Verified by Radio.co Analytics</span>
          </div>
          <div className="flex gap-6 text-[11px]">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors underline decoration-primary/50 underline-offset-4">Privacy Policy</Link>
            <Link href="/terms-services" className="text-gray-400 hover:text-white transition-colors underline decoration-primary/50 underline-offset-4">Terms of Service</Link>
          </div>
          <div className="flex flex-col md:items-end text-right">
            <p>Email: info@radionyra.com</p>
            <p>Phone: +1 (919) 294-4800</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
