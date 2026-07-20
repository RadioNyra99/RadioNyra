"use client"

import { useState, useEffect } from "react"
import { X, Megaphone, ExternalLink } from "lucide-react"
import Link from "next/link"

interface AdBannerProps {
  type?: "horizontal" | "square" | "inline"
  slotId?: string
  className?: string
}

interface MockAd {
  title: string
  description: string
  actionText: string
  link: string
  badgeText?: string
  bgClass: string
  textColor: string
}

const MOCK_ADS: MockAd[] = [
  {
    title: "Stream Bollywood & South Indian Hits on ZEE5",
    description: "Access 4000+ movies, 200k+ hours of TV shows, and exclusive originals. Watch now!",
    actionText: "Stream ZEE5",
    link: "https://www.zee5.com/",
    badgeText: "Partner Offer",
    bgClass: "bg-gradient-to-r from-purple-900 via-indigo-900 to-black border-purple-500/30",
    textColor: "text-white"
  },
  {
    title: "Exquisite Indian Jewelry - Tanishq USA",
    description: "Celebrate your moments with timeless 18k and 22k gold and diamond jewelry. Explore the trunk show.",
    actionText: "Shop Tanishq",
    link: "https://www.tanishq.com/trunk-show-raleigh.html",
    badgeText: "Featured Sponsor",
    bgClass: "bg-gradient-to-r from-amber-950 via-yellow-950 to-stone-900 border-amber-500/30",
    textColor: "text-white"
  },
  {
    title: "Disney+ Hotstar: Live Cricket & Drama",
    description: "Never miss a match! Watch live Indian cricket matches, blockbusters, and popular series.",
    actionText: "Watch Hotstar",
    link: "https://www.hotstar.com/in",
    badgeText: "Sponsor",
    bgClass: "bg-gradient-to-r from-sky-950 via-blue-950 to-slate-900 border-blue-500/30",
    textColor: "text-white"
  },
  {
    title: "Market Your Business on Radio Nyra!",
    description: "Reach 250,000+ affluent Indian Subcontinent diaspora in the US across radio, digital, and social platforms.",
    actionText: "Advertise With Us",
    link: "/advertise",
    badgeText: "Nyra Ads",
    bgClass: "bg-gradient-to-r from-red-950 via-rose-950 to-black border-red-500/30",
    textColor: "text-white"
  }
]

export function AdBanner({ type = "horizontal", slotId, className = "" }: AdBannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [currentAd, setCurrentAd] = useState<MockAd | null>(null)

  useEffect(() => {
    // Select an ad randomly
    const randomIndex = Math.floor(Math.random() * MOCK_ADS.length)
    setCurrentAd(MOCK_ADS[randomIndex])
  }, [])

  if (!isVisible || !currentAd) return null

  // Render Horizontal Banner (Leaderboard style, e.g. for Home/FAQ dividers)
  if (type === "horizontal") {
    return (
      <div className={`relative w-full border border-border/80 shadow-md overflow-hidden ${currentAd.bgClass} ${className} transition-all duration-300 hover:shadow-lg`}>
        {/* Ad Tag */}
        <div className="absolute top-2 left-4 z-10 flex items-center gap-1.5">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-black/40 text-white/70 px-2 py-0.5 rounded-full backdrop-blur-xs">
            {currentAd.badgeText || "Advertisement"}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors p-1 z-10 hover:bg-white/10 rounded-full"
          title="Dismiss ad"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Content Link */}
        <a
          href={currentAd.link}
          target={currentAd.link.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row items-center justify-between p-6 pt-10 md:pt-6 gap-4 w-full"
        >
          <div className="flex-1 text-left">
            <h4 className="text-lg md:text-xl font-black uppercase tracking-tight italic text-white flex items-center gap-2">
              {currentAd.title}
              <ExternalLink className="w-4 h-4 opacity-50 shrink-0 inline-block" />
            </h4>
            <p className="text-xs md:text-sm text-white/80 mt-1.5 font-medium leading-relaxed max-w-3xl">
              {currentAd.description}
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <button className="w-full md:w-auto bg-primary hover:bg-primary/95 text-white font-black uppercase tracking-wider text-xs px-6 py-3 rounded-none transition-all hover:scale-105 shadow-md flex items-center justify-center gap-2">
              <Megaphone className="w-3.5 h-3.5" />
              {currentAd.actionText}
            </button>
          </div>
        </a>
      </div>
    )
  }

  // Render Square/Sidebar Banner (e.g. for blog margins)
  if (type === "square") {
    return (
      <div className={`relative w-full max-w-sm mx-auto border border-border/80 shadow-md p-6 flex flex-col items-center justify-between text-center overflow-hidden ${currentAd.bgClass} ${className} transition-all duration-300 hover:shadow-lg`}>
        {/* Ad Tag */}
        <div className="absolute top-2 left-4 z-10">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-black/40 text-white/70 px-2 py-0.5 rounded-full backdrop-blur-xs">
            {currentAd.badgeText || "Advertisement"}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors p-1 z-10 hover:bg-white/10 rounded-full"
          title="Dismiss ad"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex flex-col items-center justify-center flex-grow pt-8 pb-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <Megaphone className="w-6 h-6 text-primary" />
          </div>
          <h4 className="text-lg font-black uppercase tracking-tight italic mb-3 text-white">
            {currentAd.title}
          </h4>
          <p className="text-xs text-white/80 font-medium leading-relaxed mb-6">
            {currentAd.description}
          </p>
        </div>

        <a
          href={currentAd.link}
          target={currentAd.link.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="w-full"
        >
          <button className="w-full bg-primary hover:bg-primary/95 text-white font-black uppercase tracking-widest text-xs py-3.5 rounded-none transition-all hover:scale-105 shadow-md flex items-center justify-center gap-2">
            {currentAd.actionText}
            <ExternalLink className="w-3 h-3 opacity-70" />
          </button>
        </a>
      </div>
    )
  }

  // Render Inline / Streamlined Banner (for FAQs or inside text blocks)
  return (
    <div className={`relative border border-dashed rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-muted/30 border-muted-foreground/30 ${className}`}>
      <span className="absolute top-0 right-4 -translate-y-1/2 text-[8px] font-black uppercase tracking-widest bg-background text-muted-foreground px-2 py-0.5 border border-border">
        SPONSORED
      </span>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <Megaphone className="w-5 h-5" />
        </div>
        <div className="text-left">
          <h5 className="text-sm font-bold text-foreground">
            {currentAd.title}
          </h5>
          <p className="text-xs text-muted-foreground mt-0.5">
            {currentAd.description}
          </p>
        </div>
      </div>
      <a
        href={currentAd.link}
        target={currentAd.link.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="shrink-0 w-full sm:w-auto"
      >
        <button className="w-full sm:w-auto bg-foreground hover:bg-foreground/90 text-background font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-lg transition-all">
          {currentAd.actionText}
        </button>
      </a>
    </div>
  )
}
