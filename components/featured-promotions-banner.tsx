"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Calendar, MapPin, Tag, ExternalLink, Maximize2, X, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"

const TICKET_URL = "https://ticketsea.com/events/universoul-circus-raleigh-2026-11-15-g5evz-fhikbnf/"
const CIRCUS_POSTER_IMAGE = "/images/universoul-circus.jpg"
const DIWALI_POSTER_IMAGE = "/images/happy-diwali.jpg"

// Cut-off timestamp for UniverSoul Circus: Nov 15, 2026 00:00:00 EST / 05:00:00 UTC
const CIRCUS_EXPIRY_DATE = new Date("2026-11-15T05:00:00Z")

// Cut-off timestamp for Diwali wishes: 24 hours from creation (Nov 9, 2026 12:42:00 UTC / 18:12:00 IST)
export const DIWALI_EXPIRY_DATE = new Date("2026-11-09T12:42:00Z")

function getInitialDiwaliExpired(): boolean {
  return new Date() >= DIWALI_EXPIRY_DATE
}

function getInitialCircusExpired(): boolean {
  return new Date() >= CIRCUS_EXPIRY_DATE
}

export function FeaturedPromotionsBanner() {
  const [isDiwaliExpired, setIsDiwaliExpired] = useState<boolean>(getInitialDiwaliExpired)
  const [isCircusExpired, setIsCircusExpired] = useState<boolean>(getInitialCircusExpired)
  const [activeLightbox, setActiveLightbox] = useState<"diwali" | "circus" | null>(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    // Override controls for testing and reviews:
    // ?simulateDiwaliExpired=true -> test that Diwali auto-hides after 24 hours
    // ?forceDiwali=true or ?previewDiwali=true -> force show Diwali
    const forceDiwali =
      urlParams.get("forceDiwali") === "true" ||
      urlParams.get("previewDiwali") === "true"
    const simulateDiwaliExpired =
      urlParams.get("simulateDiwaliExpired") === "true" ||
      urlParams.get("expiredDiwali") === "true"

    if (simulateDiwaliExpired) {
      setIsDiwaliExpired(true)
    } else if (forceDiwali) {
      setIsDiwaliExpired(false)
    } else {
      setIsDiwaliExpired(new Date() >= DIWALI_EXPIRY_DATE)
    }

    // UniverSoul Circus testing overrides
    const forceCircus =
      urlParams.get("forceCircus") === "true" ||
      urlParams.get("previewCircus") === "true"
    const simulateCircusExpired =
      urlParams.get("simulateCircusExpired") === "true" ||
      urlParams.get("simulateExpired") === "true"

    if (simulateCircusExpired) {
      setIsCircusExpired(true)
    } else if (forceCircus) {
      setIsCircusExpired(false)
    } else {
      setIsCircusExpired(new Date() >= CIRCUS_EXPIRY_DATE)
    }

    // Dynamic timer to automatically disappear when 24 hours elapse
    const diwaliRemaining = DIWALI_EXPIRY_DATE.getTime() - Date.now()
    let diwaliTimer: NodeJS.Timeout | null = null
    if (diwaliRemaining > 0 && !forceDiwali && !simulateDiwaliExpired) {
      diwaliTimer = setTimeout(() => {
        setIsDiwaliExpired(true)
      }, diwaliRemaining)
    }

    const circusRemaining = CIRCUS_EXPIRY_DATE.getTime() - Date.now()
    let circusTimer: NodeJS.Timeout | null = null
    if (circusRemaining > 0 && !forceCircus && !simulateCircusExpired) {
      circusTimer = setTimeout(() => {
        setIsCircusExpired(true)
      }, circusRemaining)
    }

    return () => {
      if (diwaliTimer) clearTimeout(diwaliTimer)
      if (circusTimer) clearTimeout(circusTimer)
    }
  }, [])

  // If both promotions are expired, cleanly render nothing
  if (isDiwaliExpired && isCircusExpired) {
    return null
  }

  const showBoth = !isDiwaliExpired && !isCircusExpired

  return (
    <>
      <section className="relative w-full bg-gradient-to-b from-[#140324] via-[#1f0636] to-[#0b0113] text-white border-y border-purple-500/30 overflow-hidden select-none py-6 sm:py-8">
        {/* Festive Ambient Background Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/15 via-amber-500/10 to-transparent pointer-events-none" />
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Side-by-Side Grid */}
          <div className={`grid gap-6 items-stretch ${showBoth ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 max-w-5xl mx-auto"}`}>
            
            {/* ================================================= */}
            {/* 1. DIWALI POSTER: Wishes from Radio Nyra          */}
            {/* ================================================= */}
            {!isDiwaliExpired && (
              <div
                className="relative group rounded-2xl overflow-hidden border-2 border-amber-400/70 shadow-2xl bg-gradient-to-br from-[#1c0536]/90 via-[#27084c]/85 to-[#120224]/95 flex flex-col justify-between cursor-pointer p-4 sm:p-5 hover:border-amber-300 transition-all duration-300 hover:shadow-amber-500/20"
                onClick={() => setActiveLightbox("diwali")}
                title="Click to view full Diwali poster"
              >
                {/* Golden Diya Glow Ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/30 via-purple-500/20 to-yellow-400/30 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                
                {/* Top Badge: Wishes from Radio Nyra */}
                <div className="w-full flex items-center justify-between mb-3 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span>Wishes from Radio Nyra</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300/80 bg-black/40 px-2 py-0.5 rounded border border-amber-400/30">
                    24H Special
                  </span>
                </div>

                {/* Poster Image */}
                <div className="relative w-full flex-1 flex flex-col items-center justify-center my-1">
                  <img
                    src={DIWALI_POSTER_IMAGE}
                    alt="Happy Diwali Wishes from Radio Nyra"
                    className="w-full max-h-[420px] sm:max-h-[450px] object-contain rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-[2px] rounded-xl">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                    <span>Click to enlarge poster</span>
                  </div>
                </div>

                {/* Bottom Tagline: Wishes from Radio Nyra */}
                <div className="mt-3 pt-3 border-t border-amber-400/20 w-full text-center z-10">
                  <p className="text-xs sm:text-sm font-extrabold text-amber-300 uppercase tracking-wider">
                    ✨ Happy Diwali — Warm Wishes from Team Radio Nyra ✨
                  </p>
                </div>
              </div>
            )}

            {/* ================================================= */}
            {/* 2. UNIVERSOUL CIRCUS CARD (Expires after Nov 14)  */}
            {/* ================================================= */}
            {!isCircusExpired && (
              <div className="relative group rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#1c0836]/90 via-[#27094d]/85 to-[#100324]/95 border-2 border-purple-400/60 shadow-2xl flex flex-col justify-between overflow-hidden hover:border-amber-400 transition-all duration-300">
                {/* Circus Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-amber-500/20 to-red-500/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500 -z-10" />

                <div>
                  {/* Top Badge & Discount Promo */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/25 text-purple-200 border border-purple-400/40 text-[11px] font-black uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Radio Nyra Day • Big Top</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gradient-to-r from-red-600 to-amber-600 text-white font-black text-[10px] sm:text-[11px] uppercase tracking-wider shadow">
                      <Tag className="w-3 h-3 fill-white" />
                      <span>$5.00 OFF SELECT SEATS</span>
                    </div>
                  </div>

                  {/* Body: Poster Image + Details */}
                  <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                    
                    {/* Poster Image with Ticket link + Zoom */}
                    <div className="w-36 sm:w-44 shrink-0 relative group/cimg">
                      <div className="relative rounded-xl overflow-hidden border-2 border-amber-400/70 shadow-lg bg-black aspect-[3/4]">
                        <a
                          href={TICKET_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full"
                          title="Click to get UniverSoul Circus Tickets on Ticketsea"
                        >
                          <img
                            src={CIRCUS_POSTER_IMAGE}
                            alt="UniverSoul Circus Poster"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/cimg:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cimg:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white font-bold text-[10px] uppercase tracking-wider backdrop-blur-[1px] p-2 text-center">
                            <ExternalLink className="w-4 h-4 text-amber-400" />
                            <span className="bg-amber-500 text-black px-2 py-0.5 rounded-full text-[9px] font-black">
                              Get Tickets
                            </span>
                          </div>
                        </a>
                        
                        <button
                          onClick={() => setActiveLightbox("circus")}
                          className="absolute top-1.5 right-1.5 bg-black/80 hover:bg-black text-white p-1 rounded border border-white/20 transition cursor-pointer"
                          title="Expand flyer"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-zinc-400 font-semibold mt-1.5 flex items-center justify-center gap-1">
                        <Maximize2 className="w-3 h-3" /> Tap flyer to view
                      </span>
                    </div>

                    {/* Text & Content */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight italic leading-tight text-white mb-1">
                        UniverSoul <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">Circus</span>
                      </h3>
                      <p className="text-amber-400 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-2.5">
                        Sunday, Nov 15th, 2026 • 12:00 PM
                      </p>

                      <div className="space-y-2 mb-3 text-left">
                        <div className="bg-white/5 border border-purple-500/20 rounded-lg p-2 flex items-start gap-2">
                          <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[11px] font-bold text-white">Sunday, Nov 15th, 2026 (12 PM)</div>
                            <div className="text-[10px] text-zinc-400">Doors open 11:00 AM</div>
                          </div>
                        </div>

                        <div className="bg-white/5 border border-purple-500/20 rounded-lg p-2 flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[11px] font-bold text-white">Coastal Credit Union Music Park</div>
                            <div className="text-[10px] text-zinc-400">at Walnut Creek, Raleigh, NC</div>
                          </div>
                        </div>
                      </div>

                      <p className="text-zinc-300 text-[11px] sm:text-xs leading-relaxed">
                        Electrifying acrobatics, music, and family entertainment with Radio Nyra under the big top!
                      </p>
                    </div>

                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-4 pt-4 border-t border-purple-400/20 flex flex-wrap items-center justify-between gap-2">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black text-xs uppercase tracking-wider h-9 px-4 rounded-lg shadow-md cursor-pointer border border-amber-300"
                  >
                    <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                      <Ticket className="w-3.5 h-3.5 mr-1.5 fill-black text-black" />
                      <span>Get Tickets ($5 OFF)</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>

                  <Button
                    onClick={() => setActiveLightbox("circus")}
                    variant="outline"
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 border-purple-400/40 text-white font-bold text-xs uppercase tracking-wider h-9 px-4 rounded-lg cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 mr-1.5 text-amber-400" /> View Flyer
                  </Button>
                </div>

              </div>
            )}

          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setActiveLightbox(null)}
          >
            <div
              className="relative max-w-lg max-h-[92vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-between mb-2 px-1">
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  {activeLightbox === "diwali" ? "Happy Diwali — Radio Nyra" : "UniverSoul Circus Flyer"}
                </span>
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="bg-white/20 hover:bg-white/40 text-white rounded-full p-1.5 transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <img
                src={activeLightbox === "diwali" ? DIWALI_POSTER_IMAGE : CIRCUS_POSTER_IMAGE}
                alt={activeLightbox === "diwali" ? "Happy Diwali Poster" : "UniverSoul Circus Poster"}
                className="w-full h-auto max-h-[78vh] object-contain rounded-2xl border-2 border-amber-400 shadow-2xl"
              />

              {activeLightbox === "circus" && (
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
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
