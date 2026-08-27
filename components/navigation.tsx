"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { ChevronDown, Menu } from "lucide-react"
import { showAudioPlayer } from "../lib/audio-player-utils"
import { SiteSearch } from "./site-search"

export function Navigation() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/fm-stations", label: "Stations" },
    {
      href: "/how-to-tune",
      label: "Listen",
      subLinks: [
        { href: "/schedule", label: "Schedule" },
        { href: "/how-to-tune", label: "How to Tune In" },
        { href: "/fm-stations", label: "FM Stations" },
      ]
    },
    {
      href: "/community-impact",
      label: "Community",
      subLinks: [
        { href: "/events", label: "Events" },
        { href: "/gallery", label: "Gallery" },
        { href: "/festival-calendar", label: "Festival Calendar" },
      ]
    },
    {
      href: "/youtube",
      label: "Media",
      subLinks: [
        { href: "/ecosystem", label: "Ecosystem" },
        { href: "/press", label: "Press" },
      ]
    },
    { href: "/podcasts", label: "Podcasts" },
    {
      href: "#services",
      label: "Services",
      subLinks: [
        { href: "/services", label: "Advertising Services" },
        { href: "/creative-studio", label: "Creative Studio" },
      ]
    },
    { href: "/advertise", label: "Advertise" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Navigation - LEFT ALIGNED */}
          <div className="flex items-center gap-8">
            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden mr-2 cursor-pointer" aria-label="Open navigation menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] flex flex-col p-0 border-r-0 shadow-2xl bg-background text-foreground">
                <SheetHeader className="p-6 border-b border-border/10 bg-background/95 backdrop-blur sticky top-0 z-10 shrink-0">
                  <div className="flex flex-row items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary shrink-0">
                        <img
                          src="/images/radio-nyra-logo.jpg"
                          alt="Radio Nyra Logo"
                          className="w-full h-full object-cover scale-110"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-primary border-2 border-background rounded-full animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                      <SheetTitle className="text-left font-black uppercase tracking-tighter leading-none text-xl">Menu</SheetTitle>
                      <p className="text-[9px] text-muted-foreground font-bold tracking-[0.2em] uppercase mt-1">Radio Nyra</p>
                    </div>
                  </div>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto px-6 py-8 custom-scrollbar">
                  <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <div key={link.href} className="flex flex-col gap-2 group">
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            className="text-lg font-black text-foreground hover:text-primary transition-all duration-300 tracking-tighter uppercase flex items-center gap-2"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                        {link.subLinks && (
                          <div className="flex flex-col gap-3.5 pl-4 border-l border-primary/20 mt-1">
                            {link.subLinks.map((subLink) => (
                              <SheetClose key={subLink.href} asChild>
                                <Link
                                  href={subLink.href}
                                  className="text-[12px] font-bold text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase leading-tight"
                                >
                                  {subLink.label}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 border-t border-border/10 bg-muted/20 shrink-0 flex flex-col gap-4">
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" className="flex-1 h-11 rounded-full border-2 text-xs" asChild>
                      <Link href="https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980" target="_blank" rel="noopener noreferrer">
                        <img src="/apple-icon.webp" alt="Download on App Store" className="mr-1.5 h-4 w-4 object-contain" /> App Store
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1 h-11 rounded-full border-2 text-xs" asChild>
                      <Link href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app" target="_blank" rel="noopener noreferrer">
                        <img src="/android-icon.webp" alt="Get it on Google Play" className="mr-1.5 h-4 w-4 object-contain" /> Play Store
                      </Link>
                    </Button>
                  </div>
                  <SheetClose asChild>
                    <Button
                      onClick={showAudioPlayer}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-[0.1em] rounded-full py-5 text-sm soft-shadow-primary transition-transform active:scale-95 cursor-pointer"
                    >
                      Listen Live
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-5">
              {navLinks.map((link) => (
                link.subLinks ? (
                  <DropdownMenu key={link.href}>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-[10px] lg:text-[11px] xl:text-[13px] font-black text-foreground hover:text-primary transition-colors tracking-tighter uppercase focus:outline-none">
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="bg-background border-border">
                      {link.subLinks.map((subLink) => (
                        <DropdownMenuItem key={subLink.href} asChild>
                          <Link href={subLink.href} className="font-bold uppercase tracking-wider cursor-pointer">
                            {subLink.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[10px] lg:text-[11px] xl:text-[13px] font-black text-foreground hover:text-primary transition-colors tracking-tighter uppercase whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )
              ))}

              {/* App Icons */}
              <div className="flex items-center gap-2 ml-2">
                <Link href="https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-border/10">
                    <img src="/apple-icon.webp" alt="Download on App Store" className="h-5 w-5 object-contain" />
                  </div>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-border/10">
                    <img src="/android-icon.webp" alt="Get it on Google Play" className="h-5 w-5 object-contain" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Logo & Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-4 lg:gap-6">
            <SiteSearch />
            <Button
              onClick={showAudioPlayer}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-tighter rounded-full px-3.5 sm:px-6 h-8 sm:h-10 text-[10px] sm:text-xs transition-all cursor-pointer shrink-0"
            >
              Listen Live
            </Button>

            <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <div className="text-right flex flex-col justify-center hidden sm:flex">
                <div className="font-bold text-base sm:text-xl lg:text-2xl text-foreground tracking-tighter leading-none whitespace-nowrap">Radio Nyra</div>
                <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.1em] text-primary leading-none mt-1">COMMUNITY MEDIA NETWORK</p>
              </div>
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 overflow-hidden rounded-full border-2 border-primary group-hover:border-primary/80 transition-colors shrink-0">
                <img
                  src="/images/radio-nyra-logo.jpg"
                  alt="Radio Nyra Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
