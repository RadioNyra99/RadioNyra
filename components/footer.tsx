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
            <span className="font-bold text-xl tracking-tight">Radio Nyra</span>
          </div>

          {/* Nav Links - Minimal Horizontal */}
          <nav className="flex flex-wrap justify-center gap-8">
            {["Home", "About", "Services", "Advertise", "Testimonials", "How to Tune", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Socials & Voice Assistant */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              <Link href="https://facebook.com/radionyrausa" target="_blank" className="text-gray-400 hover:text-white transition-colors" title="Facebook"><Facebook className="w-5 h-5" /></Link>
              <Link href="https://instagram.com/radionyrausa" target="_blank" className="text-gray-400 hover:text-white transition-colors" title="Instagram"><Instagram className="w-5 h-5" /></Link>
              <Link href="https://twitter.com/NyraUsa" target="_blank" className="text-gray-400 hover:text-white transition-colors" title="Twitter"><Twitter className="w-5 h-5" /></Link>
              <Link href="https://youtube.com/c/RadioNyraUSA" target="_blank" className="text-gray-400 hover:text-white transition-colors" title="YouTube"><Youtube className="w-5 h-5" /></Link>
              <Link href="https://www.linkedin.com/company/radionyrausa/posts/?feedView=all" target="_blank" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn"><Linkedin className="w-5 h-5" /></Link>
              <div className="w-px h-4 bg-white/10 mx-2" />
              <Link href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app&pcampaignid=web_share&pli=1" target="_blank" className="text-primary hover:text-white transition-colors flex items-center" title="Download on Google Play">
                <img src="/Android%20icon.png" alt="Android Icon" className="w-6 h-6 object-contain grayscale hover:grayscale-0 transition-all" />
              </Link>
              <Link href="https://apps.apple.com/in/app/radio-nyra-raleigh-durham/id6469009980" target="_blank" className="text-primary hover:text-white transition-colors flex items-center" title="Download on App Store">
                <img src="/Apple%20icon.png" alt="Apple Icon" className="w-6 h-6 object-contain grayscale hover:grayscale-0 transition-all" />
              </Link>
            </div>


          </div>
        </div>

        {/* SEO Directory Links */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-5">Popular Searches &amp; Regional Stations</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
            {[
              { label: "Telugu Radio USA", href: "/telugu-radio-usa" },
              { label: "Indian Radio USA", href: "/indian-radio-usa" },
              { label: "Bollywood Radio Online", href: "/bollywood-radio-online" },
              { label: "Indian Radio in North Carolina", href: "/indian-radio-in-north-carolina" },
              { label: "Bollywood FM USA", href: "/bollywood-fm-usa" },
              { label: "Indian Events in Raleigh", href: "/indian-events-in-raleigh" },
              { label: "Telugu Community Podcasts", href: "/telugu-community-podcasts" },
              { label: "Indian Business Ads USA", href: "/indian-business-ads-usa" },
              { label: "Bollywood News Podcast", href: "/bollywood-news-podcast" },
              { label: "How to Tune In", href: "/how-to-tune" },
              { label: "Advertise With Us", href: "/advertise" },
              { label: "Our Podcast Shows", href: "/podcasts" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-bold text-gray-500 hover:text-primary transition-colors uppercase tracking-wide leading-tight"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} Radio Nyra. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>Contact: info@radionyra.com</p>
        </div>
      </div>
    </footer>
  )
}
