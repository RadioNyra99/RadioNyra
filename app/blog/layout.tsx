import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read Radio Nyra news, event guides, community stories, music updates, and cultural insights for Indian and South Asian audiences.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Radio Nyra',
    description: 'Latest news, event guides, and community stories from Radio Nyra.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
