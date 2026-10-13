import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Celebrity & Guest Interviews",
  description: "Exclusive interviews with Bollywood and Tollywood stars, community leaders and public figures on Radio Nyra.",
  alternates: { canonical: "/interviews" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
