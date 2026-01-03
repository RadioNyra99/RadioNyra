"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Radio } from "lucide-react"
import { showAudioPlayer } from "../lib/audio-player-utils"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

export function Navigation() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#schedule", label: "Schedule" },
    { href: "/our-team", label: "Our Team" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Navigation - LEFT ALIGNED */}
          <div className="flex items-center gap-8">
            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden mr-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left font-bold uppercase tracking-tighter">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="text-lg font-bold text-foreground hover:text-primary transition-colors tracking-widest uppercase"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <div className="pt-6 border-t border-border">
                    <SheetClose asChild>
                      <Button
                        onClick={showAudioPlayer}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider rounded-full"
                      >
                        Listen Live
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-extrabold text-foreground hover:text-primary transition-colors tracking-widest uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Logo - RIGHT ALIGNED */}
          <div className="flex items-center gap-6">
            <Button
              onClick={showAudioPlayer}
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider rounded-full px-6 transition-all"
            >
              Listen Live
            </Button>

            <Link href="/" className="flex items-center gap-3 group">
              <div className="text-right hidden sm:block">
                <h1 className="font-bold text-2xl text-foreground tracking-tighter leading-none">Radio Nyra</h1>
                <p className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">Voice of India</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                <Radio className="text-primary-foreground h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
