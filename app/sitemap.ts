import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.radionyra.com'

    // Core pages — highest priority
    const coreRoutes = [
        '',
        '/about',
        '/contact',
        '/schedule',
        '/services',
        '/advertise',
        '/podcasts',
        '/events',
        '/blog',
        '/gallery',
        '/faq',
        '/media-kit',
        '/partners',
        '/testimonials',
        '/how-to-tune',
        '/telugu',
        '/community/movies',
        '/community/restaurants',
        '/community/temples',
        '/community/ott-adda',
    ]

    // SEO landing pages — secondary priority but still high
    const seoRoutes = [
        '/telugu-radio-usa',
        '/indian-radio-usa',
        '/bollywood-radio-online',
        '/indian-radio-in-north-carolina',
        '/bollywood-fm-usa',
        '/indian-events-in-raleigh',
        '/telugu-community-podcasts',
        '/indian-business-ads-usa',
        '/bollywood-news-podcast',
    ]

    const coreSitemap = coreRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1.0 : 0.8,
    }))

    const seoSitemap = seoRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...coreSitemap, ...seoSitemap]
}
