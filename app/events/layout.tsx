import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Radio Nyra",
  description: "Explore Radio Nyra community events, festival celebrations, business networking, and South Asian cultural programs.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events | Radio Nyra",
    description: "Explore Radio Nyra community events, festivals, networking, and cultural programs.",
    url: "https://www.radionyra.com/events",
  },
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
