import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers about Radio Nyra frequencies, Hindi and Telugu programming, advertising, apps, smart speakers, and how to listen live.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Radio Nyra',
    description: 'Find answers to frequently asked questions about Radio Nyra.',
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
