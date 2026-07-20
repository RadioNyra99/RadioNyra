import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meet Our Radio Hosts & DJs | Radio Nyra Team",
  description: "Get to know the voices behind Radio Nyra — Vaishnavi, Priya, Dr. Taj, Dr. Caldwell, Kanthi, Monika, and more. Discover their shows and listen live.",
  alternates: {
    canonical: "/hosts",
  },
  openGraph: {
    title: "Meet Our Radio Hosts & DJs | Radio Nyra Team",
    description: "Get to know the voices behind Radio Nyra — Vaishnavi, Priya, Dr. Taj, Dr. Caldwell, Kanthi, Monika, and more. Discover their shows and listen live.",
    url: "https://www.radionyra.com/hosts",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
