import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Festival Calendar — Indian Holidays & Events 2026",
  description: "Dates for Diwali, Holi, Navratri, Eid, Pongal and other Indian Subcontinent festivals, plus Radio Nyra community celebrations.",
  alternates: { canonical: "/festival-calendar" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
