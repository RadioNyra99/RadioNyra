import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Radio Nyra',
  description: 'Learn about Radio Nyra, founded in 2014 to serve Indian and South Asian communities with Hindi, Telugu, events, and local media.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Radio Nyra | Indian Subcontinent Community Media Network',
    description: 'Learn about Radio Nyra, the premier Indian Subcontinent Community Media Network in the USA.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
