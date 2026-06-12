import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Radio Nyra at info@radionyra.com or +1 (919) 294-4800. Our studios are located in Durham, NC. Reach out for advertising, partnerships, or community inquiries.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Radio Nyra',
    description: 'Contact Radio Nyra for advertising, partnerships, or community inquiries.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
