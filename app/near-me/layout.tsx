import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Near Me — Hyper-Local Triangle Guide",
  description: "Find Indian restaurants, temples, events, businesses and community activities near you across Raleigh-Durham, Cary, Morrisville and the North Carolina Triangle.",
  alternates: { canonical: "/near-me" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
