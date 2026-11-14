"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ChevronDown, Facebook, Headphones, Instagram, Menu, Moon, Play, Sun, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { showAudioPlayer } from "@/lib/audio-player-utils"
import { SiteSearch } from "@/components/site-search"

const navigationSections = [
  { label: "Home", links: [{ href: "/", label: "Home" }] },
  { label: "About Us", links: [{ href: "/about", label: "About Us" }] },
  { label: "Shows", links: [{ href: "/shows", label: "Shows & Schedule" }] },
  {
    label: "Community",
    links: [
      { href: "/events", label: "Events" },
      { href: "/gallery", label: "Gallery" },
      { href: "/festival-calendar", label: "Festival Calendar" },
      { href: "/community-impact", label: "Community Impact" },
      { href: "/listener-voice", label: "Listener Voice" },
    ],
  },
  {
    label: "Our Services",
    links: [
      { href: "/advertise", label: "Advertise with us" },
      { href: "/creative-studio", label: "Creative Studio" },
    ],
  },
  {
    label: "Media",
    links: [
      { href: "/news", label: "News & Updates" },
    ],
  },
  { label: "Contact Us", links: [{ href: "/contact", label: "Contact Us" }] },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  const isDark = mounted && resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-9 w-9 rounded-full text-foreground hover:bg-muted"
    >
      {isDark ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
    </Button>
  )
}

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 text-foreground shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center gap-3 px-3 sm:px-5 lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open navigation menu" className="h-10 w-10 shrink-0 rounded-full xl:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex w-[min(88vw,360px)] flex-col border-border bg-background p-0 text-foreground">
            <SheetHeader className="border-b border-border px-6 py-5 text-left">
              <SheetTitle className="flex items-center gap-3 text-left">
                <img src="/images/radio-nyra-logo.png" alt="" className="h-11 w-11 rounded-full border border-border object-cover" />
                <span>
                  <span className="block text-lg font-black tracking-tight">Radio Nyra</span>
                  <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Hindi · Telugu · Community</span>
                </span>
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-6 py-5">
              <div className="grid gap-5">
                {navigationSections.map((section) => (
                  <section key={section.label} aria-labelledby={`mobile-nav-${section.label.toLowerCase()}`}>
                    <h2 id={`mobile-nav-${section.label.toLowerCase()}`} className="px-4 text-[10px] font-extrabold uppercase tracking-[.18em] text-muted-foreground">{section.label}</h2>
                    <div className="mt-1 grid gap-0.5">
                      {section.links.map((item) => (
                        <SheetClose asChild key={item.href}>
                          <Link href={item.href} className="flex min-h-11 items-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors hover:bg-muted hover:text-primary">
                            {item.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </nav>
            <div className="space-y-3 border-t border-border bg-muted/30 p-5">
              <div className="grid grid-cols-2 gap-2">
                <SheetClose asChild>
                  <Button asChild variant="outline" className="h-11 rounded-full font-bold">
                    <Link href="/youtube"><Youtube className="mr-2 h-4 w-4 text-primary" />Watch Now</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button onClick={() => showAudioPlayer()} className="h-11 rounded-full font-bold">
                    <Headphones className="mr-2 h-4 w-4" />Listen Live
                  </Button>
                </SheetClose>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-2">
                <span className="text-xs font-semibold text-muted-foreground">Appearance</span>
                <ThemeToggle />
              </div>

              {/* Social Media Links */}
              <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-2.5">
                <span className="text-xs font-semibold text-muted-foreground">Follow Us</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://facebook.com/radionyrausa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Radio Nyra on Facebook"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-[#1877F2] transition-colors hover:bg-[#1877F2] hover:text-white"
                  >
                    <Facebook className="h-4 w-4 fill-current" />
                  </a>
                  <a
                    href="https://instagram.com/radionyrausa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Radio Nyra on Instagram"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-pink-500 transition-colors hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://youtube.com/@radionyrausa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Radio Nyra on YouTube"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-[#FF0000] transition-colors hover:bg-[#FF0000] hover:text-white"
                  >
                    <Youtube className="h-4 w-4 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-2.5" aria-label="Radio Nyra home">
          <img src="/images/radio-nyra-logo.png" alt="Radio Nyra logo" className="h-10 w-10 rounded-full border border-border bg-white object-cover shadow-sm sm:h-11 sm:w-11" />
          <span className="min-w-0">
            <span className="block truncate text-[17px] font-black leading-none tracking-tight sm:text-lg">Radio Nyra</span>
            <span className="mt-1 block whitespace-nowrap text-[7px] font-extrabold uppercase tracking-[0.1em] text-primary sm:text-[8px] sm:tracking-[0.14em]">Community Media Network USA</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-3 xl:flex">
          {navigationSections.map((section) => {
            const directLink = section.links.length === 1 && ["Home", "About Us", "Shows", "Contact Us"].includes(section.label)
            if (directLink) {
              const item = section.links[0]
              return <Link key={section.label} href={item.href} className="whitespace-nowrap text-[11px] font-bold text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary">{section.label}</Link>
            }

            return (
              <details key={section.label} className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-1 whitespace-nowrap rounded-md py-2 text-[11px] font-bold text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                  {section.label}<ChevronDown className="h-3 w-3 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <div className="absolute left-0 top-full z-50 hidden min-w-52 rounded-xl border border-border bg-background p-2 text-foreground shadow-xl group-open:block">
                  {section.links.map((item) => (
                    <Link key={item.href} href={item.href} className="flex min-h-10 items-center rounded-lg px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:bg-muted">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            )
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 xl:ml-5">
          <div className="hidden lg:flex items-center gap-1 mr-1">
            <a
              href="https://facebook.com/radionyrausa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Radio Nyra on Facebook"
              title="Radio Nyra on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-[#1877F2]"
            >
              <Facebook className="h-4 w-4 fill-current" />
            </a>
            <a
              href="https://instagram.com/radionyrausa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Radio Nyra on Instagram"
              title="Radio Nyra on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-pink-500"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <div className="hidden md:block"><SiteSearch /></div>
          <div className="hidden lg:block"><ThemeToggle /></div>
          <Button asChild variant="outline" size="sm" className="hidden h-10 w-10 rounded-full border-border p-0 sm:flex sm:w-auto sm:px-4">
            <Link href="/youtube" aria-label="Watch Now" title="Watch Now">
              <Youtube className="h-4 w-4 text-primary sm:mr-2" aria-hidden />
              <span className="hidden sm:inline">Watch Now</span>
            </Link>
          </Button>
          <Button onClick={() => showAudioPlayer()} size="sm" aria-label="Listen Live" title="Listen Live" className="h-10 w-10 rounded-full px-0 text-xs font-extrabold sm:w-auto sm:px-4 sm:text-sm">
            <Play className="h-3.5 w-3.5 fill-current sm:mr-1.5" aria-hidden />
            <span className="hidden sm:inline">Listen Live</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
