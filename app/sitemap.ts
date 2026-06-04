import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.radionyra.com'

    const routes = [
        '',
        '/advertise',
        '/partners',
        '/telugu',
        '/schedule',
        '/about',
        '/contact',
        '/events',
        '/blog',
        '/gallery',
        '/podcasts',
        '/services',
        '/community',
        '/faq',
        '/media-kit',
        '/analytics',
        '/ecosystem',
        '/syndication',
        '/festival-calendar',
        '/community-impact',
        '/creative-studio',
        '/press'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
