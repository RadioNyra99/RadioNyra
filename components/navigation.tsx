"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { ChevronDown, Menu, Play, Radio, Sparkles } from "lucide-react"
import { showAudioPlayer } from "@/lib/audio-player-utils"
import { useAudio } from "@/components/audio-context"
import { SiteSearch } from "@/components/site-search"
import { cn } from "@/lib/utils"

interface SubLink {
  href: string
  label: string
  action?: "play-hindi" | "play-telugu" | "listen-live"
}

interface NavLink {
  href?: string
  label: string
  subLinks?: SubLink[]
}

/**
 * Compact site header: logo, primary listener journeys, and two useful
 * controls (search and Listen Live). Secondary routes live inside dropdowns
 * and the footer so the bar stays short on every breakpoint.
 */
const NAV_LINKS: NavLink[] = [
  {
    label: "Listen",
    subLinks: [
      { href: "#", label: "Listen Live Now", action: "listen-live" },
      { href: "#", label: "Hindi 99.9 FM HD4", action: "play-hindi" },
      { href: "#", label: "Telugu 99.9 FM HD3", action: "play-telugu" },
      { href: "/schedule", label: "Broadcast Schedule" },
      { href: "/how-to-tune", label: "How to Tune In" },
    ],
  },
  {
    label: "Shows",
    subLinks: [
      { href: "/shows", label: "All Shows" },
      { href: "/hosts", label: "On-Air Hosts" },
      { href: "/schedule", label: "Today's Schedule" },
      { href: "/interviews", label: "Interviews" },
    ],
  },
  { href: "/podcasts", label: "Podcasts" },
  {
    label: "News",
    subLinks: [
      { href: "/rtv-news", label: "RTV Telugu Daily Bulletins", action: undefined },
      { href: "/news", label: "Community News" },
      { href: "/blog", label: "Blog & Guides" },
    ],
  },
  {
    label: "Videos",
    subLinks: [
      { href: "/youtube", label: "YouTube Channel" },
      { href: "/video-library", label: "Video Library" },
      { href: "/shorts", label: "Shorts" },
    ],
  },
  { href: "/events", label: "Events" },
  {
    label: "Community",
    subLinks: [
      { href: "/community", label: "Community Hub" },
      { href: "/near-me", label: "Near Me" },
      { href: "/directory", label: "Business Directory" },
      { href: "/gallery", label: "Gallery" },
      { href: "/festival-calendar", label: "Festival Calendar" },
      { href: "/events/submit", label: "Submit an Event" },
    ],
  },
  {
    label: "About",
    subLinks: [
      { href: "/about", label: "About Radio Nyra" },
      { href: "/contact", label: "Contact" },
      { href: "/advertise", label: "Advertise" },
      { href: "/partners", label: "Partners" },
      { href: "/faq", label: "FAQ" },
      { href: "/press", label: "Press" },
    ],
  },
]

/** Mobile drawer shows a short, flat list — no nested scrolling walls of links. */
const MOBILE_PRIMARY = [
  { href: "/schedule", label: "Schedule" },
  { href: "/shows", label: "Shows" },
  { href: "/hosts", label: "Hosts" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/rtv-news", label: "News" },
  { href: "/youtube", label: "Videos" },
  { href: "/events", label: "Events" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
]

const MOBILE_SECONDARY = [
  { href: "/how-to-tune", label: "How to Tune In" },
  { href: "/near-me", label: "Near Me" },
  { href: "/directory", label: "Business Directory" },
  { href: "/advertise", label: "Advertise" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
]

export function Navigation() {
  const pathname = usePathname()
  const { playStation, isPlaying } = useAudio()
  const [open, setOpen] = React.useState(false)

  const isActive = React.useCallback(
    (href?: string) => {
      if (!href || href === "/" || href.startsWith("#")) return false
      return pathname === href || pathname.startsWith(`${href}/`)
    },
    [pathname],
  )

  const openNyraAI = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-nyra-ai"))
    }
  }

  const handleSubLinkAction = (action?: string) => {
    setOpen(false)
    if (action === "play-hindi") playStation("raleigh-hd4-hindi")
    else if (action === "play-telugu") playStation("raleigh-hd3-telugu")
    else if (action === "listen-live") {
      showAudioPlayer()
    }
  }

  const handleListenLive = () => {
    showAudioPlayer()
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex h-14 items-center justify-between gap-2 md:h-16">
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Logo / Home */}
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-2"
              aria-label="Radio Nyra — home"
            >
              <span className="relative h-9 w-9 overflow-hidden rounded-full border border-border transition-colors group-hover:border-primary sm:h-10 sm:w-10">
                <img
                  src="/images/radio-nyra-logo.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="hidden flex-col leading-none sm:flex">
                <span className="text-base font-extrabold tracking-tight text-foreground lg:text-lg">
                  Radio Nyra
                </span>
                <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-primary">
                  Community Media Network
                </span>
              </span>
            </Link>

            {/* Desktop primary navigation */}
            <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
              {NAV_LINKS.map((link) =>
                link.subLinks ? (
                  <DropdownMenu key={link.label}>
                    <DropdownMenuTrigger
                      className={cn(
                        "flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[13px] font-semibold transition-colors outline-none cursor-pointer",
                        isActive(link.subLinks[0]?.href)
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary",
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="min-w-[220px] rounded-xl border-border bg-popover p-1.5 shadow-xl"
                    >
                      {link.subLinks.map((subLink) => (
                        <DropdownMenuItem key={subLink.label} asChild>
                          {subLink.action ? (
                            <button
                              type="button"
                              onClick={() => handleSubLinkAction(subLink.action)}
                              className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-[13px] font-semibold hover:bg-primary/10 hover:text-primary"
                            >
                              <Play className="h-3 w-3 fill-current text-primary" aria-hidden />
                              {subLink.label}
                            </button>
                          ) : (
                            <Link
                              href={subLink.href}
                              className={cn(
                                "flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-[13px] font-semibold hover:bg-primary/10 hover:text-primary",
                                isActive(subLink.href) && "bg-primary/5 text-primary",
                              )}
                            >
                              {subLink.label}
                            </Link>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href!}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "rounded-full px-2.5 py-1.5 text-[13px] font-semibold transition-colors",
                      isActive(link.href)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary",
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          {/* Right-hand controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <SiteSearch />

            <Button
              variant="ghost"
              size="icon"
              onClick={openNyraAI}
              className="hidden h-9 w-9 rounded-full text-amber-600 hover:bg-amber-500/10 hover:text-amber-600 sm:inline-flex dark:text-amber-400"
              aria-label="Ask Nyra AI"
              title="Ask Nyra AI"
            >
              <Sparkles className="h-4 w-4" />
            </Button>

            <Button
              onClick={handleListenLive}
              className="h-9 shrink-0 rounded-full bg-primary px-3.5 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:px-4"
              aria-label={isPlaying ? "Open player and pause" : "Open player and listen live"}
            >
              <Radio className="mr-1.5 h-3.5 w-3.5" aria-hidden />
              {isPlaying ? "On Air" : "Listen Live"}
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex w-[86vw] max-w-[340px] flex-col gap-0 overflow-hidden border-r p-0"
              >
                <SheetHeader className="border-b px-5 py-4">
                  <SheetTitle className="flex items-center gap-3">
                    <span className="h-9 w-9 overflow-hidden rounded-full border border-border">
                      <img
                        src="/images/radio-nyra-logo.jpg"
                        alt=""
                        width={36}
                        height={36}
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <span className="flex flex-col leading-none text-left">
                      <span className="text-base font-extrabold tracking-tight">Radio Nyra</span>
                      <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-primary">
                        Community Media Network
                      </span>
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
                  <nav aria-label="Mobile primary" className="flex flex-col gap-0.5">
                    {MOBILE_PRIMARY.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={isActive(item.href) ? "page" : undefined}
                          className={cn(
                            "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
                            isActive(item.href)
                              ? "bg-primary/10 text-primary"
                              : "text-foreground hover:bg-muted",
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="mt-5 border-t pt-4">
                    <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      More
                    </p>
                    <nav aria-label="Mobile secondary" className="flex flex-col gap-0.5">
                      {MOBILE_SECONDARY.map((item) => (
                        <SheetClose asChild key={item.href}>
                          <Link
                            href={item.href}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                  </div>
                </div>

                <div className="flex flex-col gap-2 border-t bg-muted/30 p-4">
                  <Button
                    onClick={handleListenLive}
                    className="w-full rounded-full bg-primary py-5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
                  >
                    {isPlaying ? "Open Player" : "Listen Live"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={openNyraAI}
                    className="w-full rounded-full py-5 text-xs font-bold uppercase tracking-wider"
                  >
                    <Sparkles className="mr-1.5 h-3.5 w-3.5 text-amber-500" aria-hidden />
                    Ask Nyra AI
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
