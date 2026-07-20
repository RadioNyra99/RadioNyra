import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Community News USA | Bollywood & Local Updates | Radio Nyra",
  description: "Stay updated with the latest Bollywood news, Tollywood updates, local Raleigh-Durham community news, and immigration policy changes on Radio Nyra.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "Indian Community News USA | Bollywood & Local Updates | Radio Nyra",
    description: "Stay updated with the latest Bollywood news, Tollywood updates, local Raleigh-Durham community news, and immigration policy changes on Radio Nyra.",
    url: "https://www.radionyra.com/news",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
