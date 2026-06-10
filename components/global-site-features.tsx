"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { AudioPlayer } from "@/components/audio-player"
import { EmailPopup } from "@/components/email-popup"
import { InstallAppPopup } from "@/components/install-app-popup"
import { MobileFab } from "@/components/mobile-fab"
import { NyraChat } from "@/components/nyra-chat"
import Scene3D from "@/components/scene-3d"

const vaultLegalRoutes = new Set(["/privacy-policy", "/terms-of-service"])

function normalizePathname(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname
}

export function GlobalSiteFeatures({ children }: { children: React.ReactNode }) {
  const pathname = normalizePathname(usePathname())
  const isVaultLegalPage = vaultLegalRoutes.has(pathname)

  if (isVaultLegalPage) {
    return <div className="relative z-10">{children}</div>
  }

  return (
    <>
      <Scene3D />
      <div className="relative z-10">{children}</div>
      <AudioPlayer />
      <NyraChat />
      <MobileFab />
      <EmailPopup />
      <InstallAppPopup />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RadioStation",
            name: "Radio Nyra",
            url: "https://www.radionyra.com",
            logo: "https://www.radionyra.com/logo.png",
            sameAs: [
              "https://www.facebook.com/radionyra",
              "https://www.instagram.com/radionyra",
              "https://www.linkedin.com/company/radionyra",
            ],
            description:
              "Radio Nyra is a trusted Indian Subcontinent Community Media Network delivering reach across radio, digital, social, events, and AI-powered marketing.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Raleigh",
              addressRegion: "NC",
              addressCountry: "US",
            },
            telephone: "+1-919-294-4800",
          }),
        }}
      />
    </>
  )
}
