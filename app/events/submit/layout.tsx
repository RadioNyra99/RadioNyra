import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Submit a Community Event",
  description: "Send a community event for Radio Nyra's events calendar review.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function SubmitEventLayout({ children }: { children: React.ReactNode }) {
  return children
}
