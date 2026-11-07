"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Calendar, MapPin, Tag, ExternalLink, Maximize2, X, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"

const TICKET_URL = "https://ticketsea.com/events/universoul-circus-raleigh-2026-11-15-g5evz-fhikbnf/"
const POSTER_IMAGE = "/images/universoul-circus.jpg"

// Cut-off timestamp: end of Nov 14, 2026 (Nov 15, 2026 00:00:00 EST / 05:00:00 UTC)
const EXPIRY_DATE_EST = new Date("2026-11-15T05:00:00Z")

function getInitialExpiredState(): boolean {
  // If the current time is on or after Nov 15th, 2026 00:00:00 EST, promo has expired
  return new Date() >= EXPIRY_DATE_EST
}

export function UniversoulCircusBanner() {
  const [isExpired, setIsExpired] = useState<boolean>(getInitialExpiredState)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  useEffect(() => {
    // URL override parameters for testing / previewing:
    // ?simulateExpired=true -> test that it automatically hides after Nov 14th
    // ?previewCircus=true or ?forceCircus=true -> force show for review
    const urlParams = new URLSearchParams(window.location.search)
    const forceShow =
      urlParams.get("forceCircus") === "true" ||
      urlParams.get("previewCircus") === "true"
    const simulateExpired = urlParams.get("simulateExpired") === "true"

    if (simulateExpired) {
      setIsExpired(true)
      return
    }

    if (forceShow) {
      setIsExpired(false)
      return
    }

    setIsExpired(new Date() >= EXPIRY_DATE_EST)
  }, [])

  // If expired (after Nov 14th), automatically remove from the page
  if (isExpired) {
    return null
  }

  return (
    <>
      <section className="relative w-full bg-gradient-to-b from-[#18052e] via-[#240842] to-black text-white border-y border-purple-500/30 overflow-hidden select-none">
        {/* Festive Circus Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-amber-500/10 to-transparent pointer-events-none" />
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle decorative circus lights pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Poster Image with Circus Gold / Neon Frame */}
            <div className="w-full lg:w-5/12 flex flex-col items-center">
              <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">
                {/* Glow ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 via-purple-500 to-red-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
                
                {/* Image Card linking to tickets */}
                <div className="relative rounded-xl overflow-hidden border-2 border-amber-400/70 shadow-2xl bg-black aspect-[3/4] w-full">
                  <a
                    href={TICKET_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    title="Click to get UniverSoul Circus Tickets on Ticketsea"
                  >
                    <img
                      src={POSTER_IMAGE}
                      alt="UniverSoul Circus - Radio Nyra Day Under the Big Top - Nov 15th, 2026"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Hover Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-[2px] p-4 text-center">
                      <ExternalLink className="w-6 h-6 text-amber-400 animate-bounce" />
                      <span className="bg-amber-500 text-black px-3 py-1 rounded-full font-black text-[11px]">
                        Get Tickets on Ticketsea
                      </span>
                    </div>
                  </a>

                  {/* Corner Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-400/50 text-[10px] font-extrabold text-amber-300 uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3 text-amber-400" /> Radio Nyra Special
                  </div>

                  {/* Zoom full poster trigger */}
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute top-2 right-2 bg-black/75 hover:bg-black/95 text-white/90 hover:text-white p-1.5 rounded-lg border border-white/20 transition-all cursor-pointer"
                    title="Expand Full Flyer"
                    aria-label="Expand full flyer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400 mt-2 font-medium flex items-center gap-1.5">
                <span>Click poster or button to book tickets directly on Ticketsea</span>
              </p>
            </div>

            {/* Event Details & Action Area */}
            <div className="w-full lg:w-7/12 text-center lg:text-left">
              
              {/* Special Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/25 text-purple-200 border border-purple-400/40 text-xs font-black uppercase tracking-widest mb-3.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: "5s" }} />
                <span>Radio Nyra Day • Under The Big Top</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight italic leading-tight text-white mb-2">
                UniverSoul <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">Circus</span>
              </h2>
              
              <div className="text-lg sm:text-xl font-extrabold text-amber-400 tracking-wide uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
                <span>Radio Nyra Day Under The Big Top</span>
              </div>

              {/* Promo Banner Highlight */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-600 text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg mb-5 border border-amber-300/40">
                <Tag className="w-4 h-4 fill-white" />
                <span>$5.00 OFF SELECT SEATS</span>
              </div>

              {/* Event Metadata Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="bg-white/5 border border-purple-500/20 rounded-xl p-3.5 flex items-start gap-3 backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">Date &amp; Time</div>
                    <div className="text-sm font-bold text-white">Sunday, Nov 15th, 2026</div>
                    <div className="text-xs text-amber-300 font-semibold">Showtime: 12:00 PM</div>
                  </div>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-xl p-3.5 flex items-start gap-3 backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">Venue</div>
                    <div className="text-sm font-bold text-white leading-tight">Coastal Credit Union Music Park</div>
                    <div className="text-xs text-zinc-300">at Walnut Creek, Raleigh, NC</div>
                  </div>
                </div>
              </div>

              {/* Station Band Info */}
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
                Experience the world-famous UniverSoul Circus with electrifying acrobatics, music, and family entertainment! Join the Radio Nyra family (Hindi 99.9 FM-HD3, 101.9 FM, 1490 AM &amp; Telugu 99.9 FM-HD4) for an unforgettable day under the big top.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black text-sm uppercase tracking-wider h-12 px-7 rounded-xl shadow-xl shadow-amber-500/20 border-2 border-amber-300 transition-all transform hover:scale-105 cursor-pointer"
                >
                  <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                    <Ticket className="w-4 h-4 mr-2 text-black fill-black" />
                    <span>Get Tickets Now ($5 OFF)</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>

                <Button
                  onClick={() => setIsLightboxOpen(true)}
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 border-purple-400/40 text-white font-bold text-xs uppercase tracking-wider h-12 px-5 rounded-xl cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4 mr-2 text-amber-400" />
                  <span>View Full Flyer</span>
                </Button>
              </div>

              {/* Auto-removal note info */}
              <div className="mt-4 text-[11px] text-zinc-400 font-medium">
                ⚡ Special promotional offer valid through November 14th.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div
              className="relative max-w-xl max-h-[92vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-between mb-2 px-1">
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  UniverSoul Circus Flyer
                </span>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="bg-white/20 hover:bg-white/40 text-white rounded-full p-1.5 transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <img
                src={POSTER_IMAGE}
                alt="UniverSoul Circus Poster"
                className="w-full h-auto max-h-[78vh] object-contain rounded-2xl border-2 border-amber-400 shadow-2xl"
              />

              <div className="mt-3 flex gap-3 w-full justify-center">
                <Button
                  asChild
                  className="bg-amber-500 hover:bg-amber-400 text-black font-black text-xs uppercase tracking-wider rounded-xl px-5 py-2"
                >
                  <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                    <Ticket className="w-4 h-4 mr-1.5" /> Book on Ticketsea ($5 OFF)
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
