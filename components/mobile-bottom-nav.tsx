"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CalendarDays, Newspaper, Pause, Radio, Search, Tv } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAudio } from "@/components/audio-context"
import { showAudioPlayer } from "@/lib/audio-player-utils"

export function MobileBottomNav() {
  const pathname = usePathname()
  const { isPlaying } = useAudio()

  const navItems = [
    { id: "listen", label: "Listen", icon: isPlaying ? Pause : Radio, onClick: () => showAudioPlayer({ toggle: true }), isActive: false },
    { id: "shows", label: "Shows", icon: Tv, href: "/shows", isActive: pathname?.startsWith("/shows") },
    { id: "search", label: "Search", icon: Search, onClick: () => window.dispatchEvent(new CustomEvent("open-site-search")), isActive: false },
    { id: "news", label: "News", icon: Newspaper, href: "/news", isActive: pathname?.startsWith("/news") },
    { id: "events", label: "Events", icon: CalendarDays, href: "/events", isActive: pathname?.startsWith("/events") },
  ]

  return (
    <nav aria-label="Mobile navigation" className="fixed bottom-0 left-0 right-0 z-50 h-14 border-t border-border bg-background/95 px-1 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid h-full max-w-lg grid-cols-5 items-center">
        {navItems.map((item) => {
          const Icon = item.icon
          const content = <><Icon className={cn("h-5 w-5 transition-transform duration-200 group-active:scale-90", item.isActive ? "text-primary" : isPlaying && item.id === "listen" ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} aria-hidden /><span className={cn("mt-0.5 text-[10px] font-bold uppercase leading-none tracking-tight", item.isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")}>{item.label}</span></>

          if (item.href) return <Link key={item.id} href={item.href} aria-current={item.isActive ? "page" : undefined} className="group flex h-full w-full flex-col items-center justify-center">{content}</Link>
          return <button key={item.id} type="button" onClick={item.onClick} aria-label={item.label} className="group flex h-full w-full flex-col items-center justify-center bg-transparent focus-visible:z-10">{content}</button>
        })}
      </div>
    </nav>
  )
}
