"use client"

import type React from "react"
import { AudioPlayer } from "@/components/audio-player"
import { NyraChat } from "@/components/nyra-chat"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"

/**
 * Shell mounted once around every route. It owns the single persistent audio
 * player, the mobile tab bar and the Nyra assistant — nothing that can
 * autoplay, and no overlapping floating play button.
 */
export function GlobalSiteFeatures({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative z-10 pb-32 md:pb-20">
        {children}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-[#0b1631] md:h-20" />
      </div>
      <AudioPlayer />
      <MobileBottomNav />
      <NyraChat />
    </>
  )
}
