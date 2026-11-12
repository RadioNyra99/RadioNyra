import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Radio Nyra in Raleigh–Durham, North Carolina, by message, WhatsApp, or social media.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Radio Nyra',
    description: 'Contact Radio Nyra for advertising, partnerships, or community inquiries.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
