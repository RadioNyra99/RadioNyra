import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AudioPlayer } from "@/components/audio-player"
import { AudioProvider } from "@/components/audio-context"
import { MobileFab } from "@/components/mobile-fab"
import { EmailPopup } from "@/components/email-popup"
import { InstallAppPopup } from "@/components/install-app-popup"
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
    default: "Indian Radio USA | Telugu Bollywood Live Radio - Radio Nyra",
    template: "%s | Radio Nyra"
  },
  description:
    "Listen to Indian radio in USA. Telugu, Bollywood, Tamil live streaming 24/7 on Radio Nyra.",
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
            <EmailPopup />
            <InstallAppPopup />
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
        
        {/* Google Analytics 4 (Placeholder ID) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

        {/* Hotjar Tracking Code (Placeholder ID) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />

        {/* Google AdSense (Placeholder ID) */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}
