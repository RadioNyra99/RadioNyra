import { MetadataRoute } from "next"
import { BLOG_POSTS } from "@/lib/blog-data"
import { NC_CITIES } from "@/lib/nc-data"
import { RTV_TELUGU_NEWS_EPISODES } from "@/lib/rtv-news-data"
import { SHOW_PROFILES } from "@/lib/content-discovery"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.radionyra.com"
  const marketSlugs = [
    "raleigh-durham",
    "atlanta",
    "baltimore",
    "cleveland",
    "columbus",
    "philadelphia",
    "st-louis",
  ]
  const galleryYears = ["2016", "2018", "2019", "2026"]

  const coreRoutes = [
    "",
    "/about",
    "/advertise",
    "/advertiser-success-stories",
    "/partners",
    "/contact",
    "/listener-voice",
    "/events",
    "/festival-calendar",
    "/schedule",
    "/shows",
    "/indian-radio-usa",
    "/bollywood-radio-online",
    "/telugu-radio-usa",
    "/how-to-tune",
    "/markets",
    "/north-carolina",
    "/near-me",
    "/directory",
    "/community",
    "/community/temples",
    "/community/restaurants",
    "/community/movies",
    "/community/ott-adda",
    "/community-impact",
    "/trending-music",
    "/rtv-news",
    "/news",
    "/blog",
    "/youtube",
    "/video-library",
    "/shorts",
    "/kids-shows",
    "/social-hub",
    "/gallery",
    "/gallery/heritage",
    "/testimonials",
    "/ecosystem",
    "/syndication",
    "/creative-studio",
    "/press",
    "/faq",
    "/write-for-us",
    "/privacy-policy",
    "/terms-services",
  ]

  const fixedRoutes = [
    ...coreRoutes,
    ...marketSlugs.map((slug) => `/markets/${slug}`),
    ...galleryYears.map((year) => `/gallery/${year}`),
    ...SHOW_PROFILES.map((show) => `/shows/${show.slug}`),
    "/testimonials/kash-patel-productions",
    "/testimonials/mc-construction",
    "/testimonials/royal-spice-restaurant",
  ]

  const cityRoutes = NC_CITIES.map((city) => `/north-carolina/${city.slug}`)
  const newsRoutes = RTV_TELUGU_NEWS_EPISODES.map((episode) => `/rtv-news/${episode.date}`)
  const blogRoutes = BLOG_POSTS.map((post) => `/blog/${post.slug}`)

  return [...fixedRoutes, ...cityRoutes, ...newsRoutes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
  }))
}
