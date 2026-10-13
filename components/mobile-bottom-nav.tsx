"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Radio, Newspaper, Calendar, Compass, Sparkles, Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAudio } from "@/components/audio-context"
import { showAudioPlayer } from "@/lib/audio-player-utils"

export function MobileBottomNav() {
  const pathname = usePathname()
  const { isPlaying } = useAudio()

  const handleListenClick = () => {
    // The player owns the play/pause decision so this cannot toggle twice.
    showAudioPlayer({ toggle: true })
  }

  const openNyraAI = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-nyra-ai"))
    }
  }

  const navItems = [
    {
      id: "listen",
      label: "Listen",
      icon: isPlaying ? Pause : Radio,
      badge: isPlaying ? "ON AIR" : undefined,
      onClick: handleListenClick,
      isActive: false,
    },
    {
      id: "news",
      label: "News",
      icon: Newspaper,
      href: "/rtv-news",
      isActive: pathname?.startsWith("/rtv-news") || pathname?.startsWith("/news"),
    },
    {
      id: "events",
      label: "Events",
      icon: Calendar,
      href: "/events",
      isActive: pathname?.startsWith("/events"),
    },
    {
      id: "near-me",
      label: "Near Me",
      icon: Compass,
      href: "/near-me",
      isActive: pathname?.startsWith("/near-me") || pathname?.startsWith("/north-carolina"),
    },
    {
      id: "ask-nyra",
      label: "Ask Nyra",
      icon: Sparkles,
      onClick: openNyraAI,
      isSpecial: true,
      isActive: false,
    },
  ]

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-14 bg-background/95 backdrop-blur-xl border-t border-border/60 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-1"
    >
      <div className="grid grid-cols-5 h-full items-center max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const content = (
            <div className="flex flex-col items-center justify-center w-full h-full py-1 text-center group">
              <div className="relative">
                <Icon
                  className={cn(
                    "w-5 h-5 transition-transform duration-200 group-active:scale-90",
                    item.isActive
                      ? "text-primary"
                      : item.isSpecial
                      ? "text-amber-500 animate-pulse"
                      : "text-muted-foreground group-hover:text-foreground",
                    item.id === "listen" && isPlaying && "text-primary animate-pulse"
                  )}
                />
                {item.id === "listen" && isPlaying && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] font-bold tracking-tight mt-0.5 uppercase transition-colors leading-none",
                  item.isActive
                    ? "text-primary font-extrabold"
                    : item.isSpecial
                    ? "text-amber-600 dark:text-amber-400 font-extrabold"
                    : "text-muted-foreground group-hover:text-foreground"
                )}
              >
                {item.label}
              </span>
            </div>
          )

          if (item.href) {
            return (
              <Link
                key={item.id}
                href={item.href}
                className="w-full h-full flex items-center justify-center cursor-pointer"
              >
                {content}
              </Link>
            )
          }

          return (
            <button
              key={item.id}
              onClick={item.onClick}
              type="button"
              className="w-full h-full flex items-center justify-center cursor-pointer bg-transparent border-0 p-0 focus:outline-none"
            >
              {content}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
