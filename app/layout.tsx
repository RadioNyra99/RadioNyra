import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AudioPlayer } from "@/components/audio-player"
import { AudioProvider } from "@/components/audio-context"
import Scene3D from "@/components/scene-3d"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

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
    "Radio Nyra - Broadcasting 24/7 Bollywood & Tollywood news, talk, and music to 100,000+ listeners in Raleigh-Durham. Listen on Alexa, Google Home, and Siri by saying 'Play Radio Nyra'.",
  generator: "v0.app",
  manifest: "/manifest.json",
  other: {
    "voice-search-enabled": "true", // Custom hint
  },
  // Voice Search Optimization
  keywords: ["Radio Nyra", "Bollywood Radio", "Hindi Radio", "Listen to Radio Nyra", "Alexa play Radio Nyra", "Siri play Radio Nyra", "Google play Radio Nyra"],
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_inter.variable} ${_geistMono.variable} bg-background text-foreground font-sans antialiased relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AudioProvider>
            <Scene3D />
            <div className="relative z-10">{children}</div>
            <AudioPlayer />
          </AudioProvider>
        </ThemeProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
