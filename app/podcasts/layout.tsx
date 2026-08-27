import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Podcasts | Radio Nyra",
  description: "Listen to Radio Nyra podcasts, interviews, community conversations, Chai Pe Charcha episodes, and on-demand audio.",
  alternates: {
    canonical: "/podcasts",
  },
  openGraph: {
    title: "Podcasts | Radio Nyra",
    description: "Listen to Radio Nyra podcasts, interviews, community conversations, and on-demand audio.",
    url: "https://www.radionyra.com/podcasts",
  },
}

export default function PodcastsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
