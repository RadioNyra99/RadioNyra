import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to 50+ frequently asked questions about Radio Nyra including broadcast frequencies, Hindi and Telugu programming, advertising, and how to listen across 8 U.S. markets.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Radio Nyra',
    description: 'Find answers to frequently asked questions about Radio Nyra.',
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
