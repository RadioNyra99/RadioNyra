import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.radionyra.com'

    const coreRoutes = [
        '',
        '/indian-radio-usa',
        '/bollywood-radio-online',
        '/telugu-radio-usa',
        '/cary-nc-radio',
        '/morrisville-nc-radio',
        '/durham-nc-radio',
        '/how-to-tune',
        '/youtube',
        '/video-library',
        '/shorts',
        '/kids-shows',
        '/interviews',
        '/social-hub',
        '/advertise',
        '/advertiser-success-stories',
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
        '/community/temples',
        '/community/restaurants',
        '/community/movies',
        '/community/ott-adda',
        '/faq',
        '/analytics',
        '/ecosystem',
        '/syndication',
        '/festival-calendar',
        '/community-impact',
        '/creative-studio',
        '/press',
        '/privacy-policy',
        '/terms-services',
        '/hosts',
        '/news',
        '/write-for-us',
        // Market Landing Pages
        '/markets',
        '/markets/raleigh-durham',
        '/markets/atlanta',
        '/markets/baltimore',
        '/markets/cleveland',
        '/markets/columbus',
        '/markets/philadelphia',
        '/markets/st-louis',
        '/atlanta-radio',
        '/baltimore-dc-radio',
        '/cleveland-radio',
        '/columbus-radio',
        '/philadelphia-radio',
        '/st-louis-radio',
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
        priority: route === '' ? 1 : route.startsWith('/markets') || route.startsWith('/indian-radio-usa') || route.startsWith('/shows') ? 0.9 : 0.8,
    }))

    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...coreRoutes, ...blogRoutes]
}
