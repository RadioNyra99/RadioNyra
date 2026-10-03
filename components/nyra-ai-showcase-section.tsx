"use client"

import React, { useState } from "react"
import { Sparkles, MessageSquare, ArrowRight, Music, Calendar, Mic, ShieldCheck, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const SAMPLE_PROMPTS = [
  {
    icon: Music,
    category: "Song Identification",
    query: "What song was playing 10 minutes ago?",
    description: "Reverse-lookup live broadcast logs on 99.9 FM-HD4 & HD3",
  },
  {
    icon: Mic,
    category: "Regional Schedule",
    query: "When is the next Telugu show?",
    description: "Find out when Chinna Mata and Telugu shows air",
  },
  {
    icon: ShieldCheck,
    category: "Immigration Spotlight",
    query: "Show me immigration podcast updates",
    description: "H-1B fee proposal, L-1 visa secrets, and F-1 student visas",
  },
  {
    icon: MessageSquare,
    category: "Listener Dedication",
    query: "How do I dedicate a song to someone?",
    description: "Submit a personalized on-air message to our RJs",
  },
  {
    icon: Calendar,
    category: "Triangle Events",
    query: "What community events are happening this weekend?",
    description: "Festivals, Garba nights, and concerts in Raleigh, Cary & Morrisville",
  },
]

export function NyraAIShowcaseSection() {
  const [customInput, setCustomInput] = useState("")

  const triggerNyraAI = (queryText?: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-nyra-ai", {
          detail: { query: queryText || customInput },
        })
      )
      if (!queryText) setCustomInput("")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (customInput.trim()) {
      triggerNyraAI(customInput.trim())
    }
  }

  return (
    <section className="py-14 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white border-b border-zinc-800/80 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-500/20 via-amber-500/20 to-red-500/20 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Next-Gen Discovery Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight italic text-white leading-tight">
            Meet Nyra AI
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-medium mt-2 max-w-xl mx-auto">
            Your personal digital audio concierge for South Asian music lookups, live schedules, immigration podcasts, and Triangle diaspora events.
          </p>

          {/* Interactive input bar */}
          <form onSubmit={handleSubmit} className="mt-6 max-w-xl mx-auto flex items-center gap-2 bg-zinc-950/90 border border-zinc-800 rounded-full p-1.5 shadow-2xl focus-within:border-amber-500 transition-colors">
            <input
              type="text"
              placeholder="Ask anything about songs, shows, immigration podcasts, or events..."
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              className="flex-1 bg-transparent px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 outline-none"
            />
            <Button
              type="submit"
              size="sm"
              className="rounded-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs px-5 py-2.5 shadow-lg shadow-red-600/30 flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>Ask Nyra</span>
              <Send className="w-3.5 h-3.5" />
            </Button>
          </form>
        </div>

        {/* Clickable prompt cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {SAMPLE_PROMPTS.map((prompt, idx) => {
            const Icon = prompt.icon
            return (
              <div
                key={idx}
                onClick={() => triggerNyraAI(prompt.query)}
                className="group p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-amber-500/60 hover:bg-zinc-900/60 transition-all duration-300 cursor-pointer shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                      {prompt.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-zinc-900 group-hover:bg-amber-500/20 text-zinc-400 group-hover:text-amber-400 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5 leading-snug">
                    "{prompt.query}"
                  </h4>
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                    {prompt.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/50 flex items-center justify-between text-xs text-zinc-500 group-hover:text-amber-400 font-bold">
                  <span>Try this query</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
