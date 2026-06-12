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
        '/press',
        '/privacy-policy',
        '/terms-services',
        // Market Landing Pages
        '/markets/raleigh-durham',
        '/markets/atlanta',
        '/markets/baltimore',
        '/markets/cleveland',
        '/markets/columbus',
        '/markets/philadelphia',
        '/markets/st-louis',
        // Show Pages
        '/shows/hello-vaishnavi',
        '/shows/geet-bazaar',
        '/shows/zara-muskurao',
        // Case Study Pages
        '/testimonials/kash-patel-productions',
        '/testimonials/mc-construction',
        '/testimonials/royal-spice-restaurant'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : route.startsWith('/markets') || route.startsWith('/shows') ? 0.9 : 0.8,
    }))

    return routes
}
