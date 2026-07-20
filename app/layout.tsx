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
    default: "Radio Nyra | Indian Subcontinent Radio & Media Network",
    template: "%s | Radio Nyra"
  },
  description:
    "Radio Nyra is a trusted Indian Subcontinent Community Media Network delivering reach across radio, digital, social, events, and AI-powered marketing.",
  generator: "v0.app",
  manifest: "/manifest.json",
  keywords: [
    "Indian Radio USA", "Indian Community Network", "Indian Subcontinent Community Media Network", 
    "Radio Advertising USA", "Telugu Radio USA", "Hindi Radio USA", "Community Media Platform",
    "Raleigh FM Radio Stations", "Raleigh Hip Hop Radio Station", "100.3 the beat Raleigh", 
    "99.9 FM HD3 Raleigh", "99.9 FM HD4 Raleigh", "Radio Nyra frequency", "Raleigh local radio stations", 
    "95.7 FM Raleigh NC", "local FM radio stations", "listen to radio on phone",
    "Indian business directory Raleigh", "Indian jobs Raleigh Durham", "desi jobs USA",
    "Indian scholarships USA", "H1B visa guide", "Indian immigration help",
    "Indian restaurants near me Raleigh", "Indian grocery Cary NC",
    "South Asian community radio", "Indian radio Atlanta", "Indian radio Philadelphia",
    "Bollywood radio live", "Telugu songs radio online", "Hindi songs radio USA"
  ],
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
    title: "Radio Nyra | Indian Subcontinent Radio & Media Network",
    description: "Radio Nyra is a trusted Indian Subcontinent Community Media Network delivering reach across radio, digital, social, events, and AI-powered marketing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Radio Nyra - Indian Subcontinent Community Media Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Nyra | Indian Subcontinent Radio & Media Network",
    description: "The leading Indian Subcontinent Community Media Network in the United States.",
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
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.radionyra.com/#organization",
        "name": "Radio Nyra",
        "url": "https://www.radionyra.com",
        "logo": "https://www.radionyra.com/images/radio-nyra-logo.jpg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-919-294-4800",
          "contactType": "customer service",
          "email": "info@radionyra.com"
        },
        "sameAs": [
          "https://facebook.com/radionyrausa",
          "https://instagram.com/radionyrausa",
          "https://twitter.com/NyraUsa",
          "https://youtube.com/c/RadioNyraUSA",
          "https://linkedin.com/company/radionyrausa"
        ]
      },
      {
        "@type": "RadioStation",
        "@id": "https://www.radionyra.com/#station",
        "name": "Radio Nyra",
        "url": "https://www.radionyra.com",
        "logo": "https://www.radionyra.com/images/radio-nyra-logo.jpg",
        "parentOrganization": {
          "@type": "Organization",
          "@id": "https://www.radionyra.com/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Durham",
          "addressRegion": "NC",
          "addressCountry": "US"
        },
        "telephone": "+1-919-294-4800",
        "broadcastFrequency": [
          {
            "@type": "BroadcastFrequencySpecification",
            "frequencyValue": "99.9",
            "frequencyUnit": "MHz",
            "broadcastChannelSubchannel": "HD4",
            "displayName": "Radio Nyra Hindi (99.9 FM HD4)"
          },
          {
            "@type": "BroadcastFrequencySpecification",
            "frequencyValue": "99.9",
            "frequencyUnit": "MHz",
            "broadcastChannelSubchannel": "HD3",
            "displayName": "Radio Nyra Telugu (99.9 FM HD3)"
          }
        ]
      },
      {
        "@type": "BroadcastService",
        "@id": "https://www.radionyra.com/#broadcastservice",
        "name": "Radio Nyra Broadcast Service",
        "broadcaster": {
          "@type": "RadioStation",
          "@id": "https://www.radionyra.com/#station"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Raleigh-Durham, NC" },
          { "@type": "AdministrativeArea", "name": "Atlanta, GA" },
          { "@type": "AdministrativeArea", "name": "Baltimore, MD" },
          { "@type": "AdministrativeArea", "name": "Cleveland, OH" },
          { "@type": "AdministrativeArea", "name": "Columbus, OH" },
          { "@type": "AdministrativeArea", "name": "Philadelphia, PA" },
          { "@type": "AdministrativeArea", "name": "St. Louis, MO" }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.radionyra.com/#website",
        "url": "https://www.radionyra.com",
        "name": "Radio Nyra",
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.radionyra.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.radionyra.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_inter.variable} ${_geistMono.variable} bg-background text-foreground font-sans antialiased relative`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
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
