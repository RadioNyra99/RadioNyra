import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Radio } from "lucide-react"

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
            {["Home", "About", "The Voice", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : item === "The Voice" ? "/our-team" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com/radionyrausa" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></Link>
            <Link href="https://instagram.com/radionyrausa" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link href="https://twitter.com/NyraUsa" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
            <Link href="https://youtube.com/c/RadioNyraUSA" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Radio Nyra. All rights reserved.</p>
          <p>Contact: info@radionyra.com</p>
        </div>
      </div>
    </footer>
  )
}
