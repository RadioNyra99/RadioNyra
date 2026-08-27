"use client"

import { useState, useEffect } from "react"
import { X, Megaphone, ArrowRight, Sparkles, Building2, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AdvertisePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show advertising popup shortly after opening the website
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-500">
      <div className="bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border border-red-600/30 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-in zoom-in-95 duration-300 text-white">
        {/* Close Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleClose}
          className="absolute right-4 top-4 z-20 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full cursor-pointer"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Top Decorative Banner */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-primary p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 text-white/90 text-[10px] font-black uppercase tracking-widest mb-3 backdrop-blur-xs border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> Media Partnership Opportunity
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight italic drop-shadow-md">
            Advertise With Us
          </h2>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 text-center">
          <p className="text-zinc-300 text-sm sm:text-base font-medium mb-6 leading-relaxed">
            Promote your brand to over <strong className="text-white font-bold">100K+ weekly Indian Subcontinent listeners</strong> across digital radio, YouTube, and live community events.
          </p>

          {/* Quick Metrics Badge Row */}
          <div className="grid grid-cols-2 gap-3 mb-8 bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800">
            <div className="text-center border-r border-zinc-800">
              <span className="text-lg font-black text-red-500 block">100K+</span>
              <span className="text-[9px] text-zinc-400 font-extrabold uppercase tracking-wider block">Weekly Reach</span>
            </div>
            <div className="text-center">
              <span className="text-lg font-black text-cyan-400 block">1.01K</span>
              <span className="text-[9px] text-zinc-400 font-extrabold uppercase tracking-wider block">YouTube Subs</span>
            </div>
          </div>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              asChild
              onClick={handleClose}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest h-13 rounded-2xl shadow-xl shadow-red-600/30 cursor-pointer"
            >
              <Link href="/advertise">
                <Megaphone className="w-4 h-4 mr-2" /> Book an Advertisement
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              onClick={handleClose}
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white font-black text-xs uppercase tracking-widest h-13 rounded-2xl cursor-pointer"
            >
              <Link href="/contact">
                Contact Our Team <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
