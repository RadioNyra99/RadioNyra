"use client"

import { useState } from "react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { showAudioPlayer } from "@/lib/audio-player-utils"

export function TuneInPlatforms() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  function handleWebPlayer() {
    showAudioPlayer({ toggle: false })
  }

  const modals: Record<string, { title: string; command: string; sub?: string }> = {
    alexa: {
      title: "Listen on Alexa",
      command: "Alexa, open Radio Nyra Hindi",
      sub: "or say: \"Alexa, open Radio Nyra Telugu\"",
    },
    assistant: {
      title: "Listen on Google Assistant",
      command: "OK Google, play Radio Nyra",
    },
    siri: {
      title: "Listen using Siri",
      command: "Hey Siri, play Radio Nyra",
    },
  }

  return (
    <>
      <section className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 py-3 sm:py-4 px-3 sm:px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-7xl mx-auto">
          {/* App Store */}
          <Link
            href="https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-gray-400 dark:hover:border-zinc-500 transition-colors shadow-xs"
          >
            <img src="/apple-icon.webp" alt="Apple" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="text-[8px] sm:text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Download on the</span>
              <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-tight">App Store</span>
            </div>
          </Link>

          {/* Google Play */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-gray-400 dark:hover:border-zinc-500 transition-colors shadow-xs"
          >
            <img src="/android-icon.webp" alt="Google Play" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="text-[8px] sm:text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Get it on</span>
              <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-tight">Google Play</span>
            </div>
          </Link>

          {/* Alexa */}
          <button
            onClick={() => setOpenModal("alexa")}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-gray-400 dark:hover:border-zinc-500 transition-colors cursor-pointer shadow-xs"
          >
            <img src="/Alexa.jpg" alt="Alexa" className="w-4 h-4 sm:w-5 sm:h-5 object-cover rounded-full" />
            <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white tracking-wide">ALEXA</span>
          </button>

          {/* Google Assistant */}
          <button
            onClick={() => setOpenModal("assistant")}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-gray-400 dark:hover:border-zinc-500 transition-colors cursor-pointer shadow-xs"
          >
            <img src="/google-assistance.jpg" alt="Google Assistant" className="w-4 h-4 sm:w-5 sm:h-5 object-cover rounded-full" />
            <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white tracking-wide">ASSISTANT</span>
          </button>

          {/* Siri */}
          <button
            onClick={() => setOpenModal("siri")}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-gray-400 dark:hover:border-zinc-500 transition-colors cursor-pointer shadow-xs"
          >
            <img src="/Siri.jpg" alt="Siri" className="w-4 h-4 sm:w-5 sm:h-5 object-cover rounded-full" />
            <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white tracking-wide">SIRI</span>
          </button>

          {/* In-Car HD Radio */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-xs">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 5v2M12 17v2M5 12H3M21 12h-2M7.05 7.05l-1.41-1.41M18.36 18.36l-1.41-1.41M7.05 16.95l-1.41 1.41M18.36 5.64l-1.41 1.41" strokeLinecap="round"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-[8px] sm:text-[9px] text-gray-500 uppercase tracking-widest font-semibold">In-Car HD Radio</span>
              <span className="text-[11px] sm:text-xs font-bold text-gray-900 dark:text-white leading-tight">99.9 FM HD4 / HD3</span>
            </div>
          </div>

          {/* Web Player */}
          <button
            onClick={handleWebPlayer}
            className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border-2 border-red-500 bg-white dark:bg-zinc-800 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm font-black text-red-600 tracking-wider sm:tracking-widest uppercase">Web Player</span>
          </button>
        </div>
      </section>

      {/* Modals */}
      {Object.entries(modals).map(([key, modal]) => (
        <Dialog key={key} open={openModal === key} onOpenChange={(open) => setOpenModal(open ? key : null)}>
          <DialogContent className="sm:max-w-sm bg-white border-none shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-black uppercase tracking-tighter text-gray-900">
                {modal.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-5 py-2 text-center">
              <p className="text-primary text-xl font-extrabold italic">"{modal.command}"</p>
              {modal.sub && <p className="text-gray-500 text-sm">{modal.sub}</p>}
              <Button
                onClick={() => setOpenModal(null)}
                className="w-full font-bold uppercase tracking-widest bg-primary text-white hover:bg-primary/90"
                size="lg"
              >
                Got it
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </>
  )
}
