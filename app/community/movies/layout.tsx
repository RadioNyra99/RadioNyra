import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bollywood & Tollywood Movie Releases USA | Radio Nyra Cinema Hub",
  description: "Latest Indian movie releases, theater showtimes, box office updates, and Bollywood reviews in the USA.",
  alternates: {
    canonical: "/community/movies",
  },
  openGraph: {
    title: "Bollywood & Tollywood Movie Releases USA | Radio Nyra Cinema Hub",
    description: "Latest Indian movie releases, theater showtimes, box office updates, and Bollywood reviews in the USA.",
    url: "https://www.radionyra.com/community/movies",
    siteName: "Radio Nyra",
    type: "website",
  },
}

export default function MoviesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
