import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-data'
import { NC_CITIES } from '@/lib/nc-data'
import { RTV_TELUGU_NEWS_EPISODES } from '@/lib/rtv-news-data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.radionyra.com'

    const coreRoutes = [
        '',
        '/north-carolina',
        '/near-me',
        '/directory',
        '/directory/submit',
        '/events/submit',
        '/trending-music',
        '/rtv-news',
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
        priority: route === '' ? 1 : route.startsWith('/north-carolina') || route.startsWith('/near-me') || route.startsWith('/directory') || route.startsWith('/markets') || route.startsWith('/indian-radio-usa') || route.startsWith('/shows') ? 0.9 : 0.8,
    }))

    // Dynamic North Carolina City Hubs
    const ncCityRoutes = NC_CITIES.map((city) => ({
        url: `${baseUrl}/north-carolina/${city.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: 0.95,
    }))

    // Dynamic RTV Telugu News Daily Bulletins
    const rtvRoutes = RTV_TELUGU_NEWS_EPISODES.map((ep) => ({
        url: `${baseUrl}/rtv-news/${ep.date}`,
        lastModified: new Date(`${ep.date}T07:00:00Z`).toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }))

    // Blog Routes
    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...coreRoutes, ...ncCityRoutes, ...rtvRoutes, ...blogRoutes]
}

