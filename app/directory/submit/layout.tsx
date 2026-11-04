import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Submit a Business Listing",
  description: "Submit a local business for review in the Radio Nyra community directory.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function SubmitBusinessLayout({ children }: { children: React.ReactNode }) {
  return children
}
