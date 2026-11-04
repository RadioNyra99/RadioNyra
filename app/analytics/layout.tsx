import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Audience Measurement Status",
  description: "Reporting availability for Radio Nyra analytics, search performance, live listening, and Core Web Vitals.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return children
}
