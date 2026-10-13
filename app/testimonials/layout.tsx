import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Testimonials — Voice of the Community",
  description: "What listeners, advertisers and community partners say about Radio Nyra.",
  alternates: { canonical: "/testimonials" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
