import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AudioPlayer } from "@/components/audio-player"
import Scene3D from "@/components/scene-3d"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  // Updated metadata for Radio Nyra
  title: "Radio Nyra | The Voice of the Indian Subcontinent in the USA",
  description:
    "Radio Nyra - Broadcasting 24/7 Bollywood & Tollywood news, talk, and music to 100,000+ listeners in Raleigh-Durham",
  generator: "v0.app",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_geistMono.variable} bg-background text-foreground font-sans antialiased`}>
        <Scene3D />
        <div className="relative z-10">{children}</div>
        <AudioPlayer />
        <Analytics />
      </body>
    </html>
  )
}
