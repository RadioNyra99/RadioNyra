import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { AudioProvider } from "@/components/audio-context"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GlobalSiteFeatures } from "@/components/global-site-features"

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
    default: "Community Media Network | Radio Nyra USA",
    template: "%s | Radio Nyra"
  },
  description:
    "Radio Nyra is a trusted Indian Subcontinent Community Media Network delivering reach across radio, digital, social, events, and AI-powered marketing.",
  generator: "v0.app",
  manifest: "/manifest.json",
  keywords: ["Indian Radio USA", "Indian Community Network", "South Asian Media Network", "Radio Advertising USA", "Telugu Radio USA", "Hindi Radio USA", "Community Media Platform"],
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
    title: "Radio Nyra | The Indian Subcontinent Community Media Network",
    description: "Delivering reach across radio, digital, social, events, email, WhatsApp, podcasts, and AI-powered marketing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Radio Nyra - Community Media Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Nyra | Community Media Network",
    description: "The leading South Asian community media network in the United States.",
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
            <GlobalSiteFeatures>{children}</GlobalSiteFeatures>
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
