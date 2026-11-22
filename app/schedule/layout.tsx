import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hindi & Telugu Radio Schedule",
  description: "Browse the Radio Nyra weekly Hindi HD4 and Telugu HD3 radio schedule, including program times, hosts, and recurring shows in Eastern Time.",
  alternates: {
    canonical: "/schedule",
  },
  openGraph: {
    title: "Hindi & Telugu Radio Schedule | Radio Nyra",
    description: "Browse the Radio Nyra weekly Hindi HD4 and Telugu HD3 schedule, with program times and hosts in Eastern Time.",
    url: "https://www.radionyra.com/schedule",
  },
}

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
