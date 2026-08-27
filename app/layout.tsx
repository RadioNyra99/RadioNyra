import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import Script from "next/script"
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ff0000",
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.radionyra.com'),
  title: {
    default: "Radio Nyra | The Indian Subcontinent Community Media Network In USA",
    template: "%s | Radio Nyra"
  },
  description:
    "Radio Nyra is America's leading Indian radio network for premium music, culture, news, podcasts, events, and multicultural advertising.",
  generator: "v0.app",
  manifest: "/manifest.json",
  keywords: [
    "Radio Nyra", "Indian Radio USA", "Telugu Radio USA", "Hindi Radio USA",
    "Raleigh FM Radio Stations", "Indian Subcontinent Community Media In USA"
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
    title: "Radio Nyra | The Indian Subcontinent Community Media Network In USA",
    description: "Radio Nyra is America's leading Indian Subcontinent Community Media Network for music, culture, news, podcasts, events, and multicultural advertising.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Radio Nyra - The Indian Subcontinent Community Media Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Nyra | The Indian Subcontinent Community Media Network",
    description: "The Indian Subcontinent Community Media Network connecting diaspora communities across America.",
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
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
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
          "streetAddress": "4819 Emperor Blvd Suite 400",
          "addressLocality": "Durham",
          "addressRegion": "NC",
          "postalCode": "27703",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "35.8398",
          "longitude": "-78.8252"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
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
        {gtmId && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        )}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { send_page_view: true });
              `}
            </Script>
          </>
        )}
        {metaPixelId && (
          <Script id="meta-pixel-init" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
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
