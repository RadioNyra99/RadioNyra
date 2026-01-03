"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Radio } from "lucide-react"
import { showAudioPlayer } from "../lib/audio-player-utils"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Navigation - LEFT ALIGNED */}
          <div className="hidden md:flex items-center gap-8">
            {/* Mobile Menu Trigger */}
            <Button variant="ghost" size="icon" className="md:hidden mr-2">
              <Menu className="h-5 w-5" />
            </Button>

            <Link
              href="/"
              className="text-sm font-extrabold text-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              Home
            </Link>
            <Link
              href="/#schedule"
              className="text-sm font-extrabold text-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              Schedule
            </Link>
            <Link
              href="/our-team"
              className="text-sm font-extrabold text-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              Our Team
            </Link>
            <Link
              href="/events"
              className="text-sm font-extrabold text-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-sm font-extrabold text-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              Contact
            </Link>
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
