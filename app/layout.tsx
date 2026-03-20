import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AudioPlayer } from "@/components/audio-player"
import { AudioProvider } from "@/components/audio-context"
import { MobileFab } from "@/components/mobile-fab"
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
  metadataBase: new URL('https://www.radionyra.com'),
  title: {
    default: "Radio Nyra | The Voice of the Indian Subcontinent in the USA",
    template: "%s | Radio Nyra"
  },
  description:
    "Radio Nyra - Broadcasting 24/7 Bollywood & Tollywood news, talk, and music to 100,000+ listeners in Raleigh-Durham. Listen on Alexa, Google Home, and Siri by saying 'Open Radio Nyra Hindi/Telugu'.",
  generator: "v0.app",
  manifest: "/manifest.json",
  keywords: ["Radio Nyra", "Bollywood Radio", "Hindi Radio", "Indian Radio USA", "Raleigh Radio", "Daily Bollywood News", "Telugu Radio USA"],
  authors: [{ name: "Radio Nyra" }],
  creator: "Radio Nyra",
  publisher: "Radio Nyra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.radionyra.com",
    siteName: "Radio Nyra",
    title: "Radio Nyra | The Voice of the Indian Subcontinent in the USA",
    description: "Broadcasting 24/7 Bollywood & Tollywood news, talk, and music to 100,000+ listeners in Raleigh-Durham.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Radio Nyra - The Voice of the Indian Subcontinent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Nyra | Bollywood & Tollywood Radio",
    description: "The #1 South Asian Radio Network in the USA. Listen live 24/7.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
}
import { NyraChat } from "@/components/nyra-chat"

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
            <NyraChat />
            <MobileFab />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "RadioStation",
                  "name": "Radio Nyra",
                  "url": "https://www.radionyra.com",
                  "logo": "https://www.radionyra.com/logo.png",
                  "sameAs": [
                    "https://www.facebook.com/radionyra",
                    "https://www.instagram.com/radionyra",
                    "https://www.linkedin.com/company/radionyra"
                  ],
                  "description": "The Voice of the Indian Subcontinent in the USA. Broadcasting Bollywood & Tollywood 24/7.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Raleigh",
                    "addressRegion": "NC",
                    "addressCountry": "US"
                  },
                  "telephone": "+1-919-999-8595"
                })
              }}
            />
          </AudioProvider>
        </ThemeProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
