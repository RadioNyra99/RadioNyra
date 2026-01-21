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
import { ChevronDown, Menu, Apple, Smartphone } from "lucide-react"
import { showAudioPlayer } from "../lib/audio-player-utils"

export function Navigation() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/schedule", label: "Schedule" },
    { href: "/services", label: "Services" },
    { href: "/podcasts", label: "Podcast" },
    { href: "/events", label: "Events" },
    {
      href: "/gallery",
      label: "Gallery",
      subLinks: [
        { href: "/gallery/2016", label: "New Year 2016 – Bollywood Bash" },
        { href: "/gallery/2018", label: "New Year 2018 – Bollywood Bash" },
        { href: "/gallery/2019", label: "New Year 2019 – Celebrations" },
        { href: "/gallery/2026", label: "2026 Bollywood and Tollywood Bash" },
      ]
    },
    {
      href: "#community",
      label: "Community",
      subLinks: [
        { href: "/community/movies", label: "Upcoming Movies" },
        { href: "/community/restaurants", label: "Indian Restaurants" },
        { href: "/community/temples", label: "Temples & Worship" },
        { href: "/community/ott-adda", label: "OTT Adda" },
      ]
    },
    { href: "/advertise", label: "Advertise" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
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
                <Button variant="ghost" size="icon" className="md:hidden mr-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] flex flex-col p-0 border-r-0 shadow-2xl">
                <SheetHeader className="p-6 border-b border-border/10 bg-background/95 backdrop-blur sticky top-0 z-10 shrink-0">
                  <div className="flex flex-row items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary shrink-0 soft-shadow-primary">
                        <img
                          src="/images/radio-nyra-logo.jpg"
                          alt="Radio Nyra Logo"
                          className="w-full h-full object-cover scale-110"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary border-2 border-background rounded-full live-pulse" />
                    </div>
                    <div className="flex flex-col">
                      <SheetTitle className="text-left font-black uppercase tracking-tighter leading-none text-2xl">Menu</SheetTitle>
                      <p className="text-[10px] text-muted-foreground font-bold tracking-[0.2em] uppercase mt-1">Radio Nyra</p>
                    </div>
                  </div>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto px-8 py-10 custom-scrollbar">
                  <div className="flex flex-col gap-10">
                    {navLinks.map((link) => (
                      <div key={link.href} className="flex flex-col gap-4 group">
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            className="text-3xl font-black text-foreground hover:text-primary transition-all duration-300 tracking-tighter uppercase flex items-center gap-2 group-hover:pl-2"
                          >
                            {link.label}
                            <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </SheetClose>
                        {link.subLinks && (
                          <div className="flex flex-col gap-5 pl-4 border-l-2 border-primary/5 mt-1 ml-1">
                            {link.subLinks.map((subLink) => (
                              <SheetClose key={subLink.href} asChild>
                                <Link
                                  href={subLink.href}
                                  className="text-[14px] font-bold text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase leading-tight"
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

                <div className="p-8 border-t border-border/10 bg-muted/20 shrink-0 flex flex-col gap-4">

                  <div className="flex gap-2 w-full">
                    <Button variant="outline" className="flex-1 h-12 rounded-full border-2" asChild>
                      <Link href="https://apps.apple.com/in/app/radio-nyra-raleigh-durham/id6469009980" target="_blank">
                        <img src="/Apple icon.png" alt="Apple Icon" className="mr-2 h-5 w-5 object-contain" /> App Store
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1 h-12 rounded-full border-2" asChild>
                      <Link href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app" target="_blank">
                        <img src="/Android icon.png" alt="Android Icon" className="mr-2 h-5 w-5 object-contain" /> Play Store
                      </Link>
                    </Button>
                  </div>
                  <SheetClose asChild>
                    <Button
                      onClick={showAudioPlayer}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-[0.1em] rounded-full py-7 text-lg soft-shadow-primary transition-transform active:scale-95"
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
                      <DropdownMenuItem asChild>
                        <Link href={link.href} className="font-bold uppercase tracking-wider cursor-pointer">
                          All {link.label}
                        </Link>
                      </DropdownMenuItem>
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

              {/* App Icons Integrated into Flow */}
              <div className="flex items-center gap-2 ml-2">
                <Link href="https://apps.apple.com/in/app/radio-nyra-raleigh-durham/id6469009980" target="_blank" className="hover:scale-110 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-border/10">
                    <img src="/Apple icon.png" alt="Apple Icon" className="h-6 w-6 object-contain" />
                  </div>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app" target="_blank" className="hover:scale-110 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-border/10">
                    <img src="/Android icon.png" alt="Android Icon" className="h-6 w-6 object-contain" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Logo - RIGHT ALIGNED */}
          <div className="flex items-center gap-3 lg:gap-6">

            <Button
              onClick={showAudioPlayer}
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-tighter rounded-full px-8 h-10 transition-all"
            >
              Listen Live
            </Button>

            <Link href="/" className="flex items-center gap-3 group">
              <div className="text-right flex flex-col justify-center">
                <h1 className="font-bold text-xl lg:text-2xl text-foreground tracking-tighter leading-none whitespace-nowrap">Radio Nyra</h1>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary leading-none mt-1">Raleigh – Durham</p>
              </div>
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-full border-2 border-primary group-hover:border-primary/80 transition-colors shrink-0">
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

