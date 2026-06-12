"use client"

import type React from "react"
import { AudioPlayer } from "@/components/audio-player"
import { EmailPopup } from "@/components/email-popup"
import { InstallAppPopup } from "@/components/install-app-popup"
import { MobileFab } from "@/components/mobile-fab"
import { NyraChat } from "@/components/nyra-chat"
import Scene3D from "@/components/scene-3d"

export function GlobalSiteFeatures({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Scene3D />
      <div className="relative z-10">{children}</div>
      <AudioPlayer />
      <NyraChat />
      <MobileFab />
      <EmailPopup />
      <InstallAppPopup />
    </>
  )
}
