import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schedule | Radio Nyra",
  description: "View the Radio Nyra daily schedule for Hindi, Telugu, Bollywood, community, weekend, and live-hosted shows.",
  alternates: {
    canonical: "/schedule",
  },
  openGraph: {
    title: "Schedule | Radio Nyra",
    description: "View the Radio Nyra daily schedule for Hindi, Telugu, Bollywood, community, and live-hosted shows.",
    url: "https://www.radionyra.com/schedule",
  },
}

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
