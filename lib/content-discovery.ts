import { BLOG_POSTS } from "@/lib/blog-data"
import { pastEvents, upcomingEvents } from "@/lib/event-data"
import { PARTNERS } from "@/lib/partners"
import { RTV_TELUGU_NEWS_EPISODES } from "@/lib/rtv-news-data"
import { getStationsList, STATIONS } from "@/lib/stations"
import { SITE_VIDEOS, type YouTubeVideoItem } from "@/lib/youtube-service"

export type ContentType =
  | "station"
  | "show"
  | "podcast"
  | "video"
  | "short"
  | "news"
  | "event"
  | "community"
  | "partner"
  | "page"

export type PodcastEpisode = {
  id: string
  title: string
  description: string
  host: string
  show: string
  category: string
  duration: string
  publishedAt: string
  publishedLabel: string
  url: string
  embedUrl: string
  thumbnail: string
  views: string
  viewCountNum: number
}

export type ShowProfile = {
  slug: string
  name: string
  host: string
  image: string
  stationId: string
  language: "Hindi" | "Telugu"
  stationLabel: string
  schedule: string
  category: string
  description: string
}

export type NewsItem = {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  dateLabel: string
  href: string
  image: string
  source: "RTV News" | "Radio Nyra Blog"
}

export type SearchItem = {
  id: string
  type: ContentType
  title: string
  description: string
  href: string
  image?: string
  keywords: string[]
  stationId?: string
}

export const SHOW_PROFILES: ShowProfile[] = [
  {
    slug: "zara-muskurao",
    name: "Zara Muskurao",
    host: "Aayushii Rode",
    image: "/images/hosts/zara-muskurao.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "Hindi",
    stationLabel: "99.9 FM-HD4",
    schedule: "Weekdays, 7:00 AM - 10:00 AM ET",
    category: "Morning Drive",
    description:
      "A high-energy morning show with Bollywood hits, cheerful conversation, community mentions, and a positive start for Triangle listeners.",
  },
  {
    slug: "triangle-tunes-and-talks",
    name: "Triangle Tunes and Talks",
    host: "Monika Joshi",
    image: "/images/hosts/triangle-tunes.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "Hindi",
    stationLabel: "99.9 FM-HD4",
    schedule: "Weekdays, 10:00 AM - 1:00 PM ET",
    category: "Midday Community",
    description:
      "Workday music, lifestyle conversations, local community updates, and listener-friendly talk from the Research Triangle.",
  },
  {
    slug: "bollywood-bliss",
    name: "Bollywood Bliss",
    host: "Bharti Rathore",
    image: "/images/hosts/bollywood-bliss.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "Hindi",
    stationLabel: "99.9 FM-HD4",
    schedule: "Daily, 1:00 PM - 3:00 PM ET",
    category: "Bollywood Music",
    description:
      "An afternoon stream of Bollywood favorites, romantic classics, listener requests, and easygoing entertainment.",
  },
  {
    slug: "hello-vaishnavi",
    name: "Hello Vaishnavi",
    host: "Vaishnavi Palleda",
    image: "/images/hosts/hello-vaishnavi.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "Hindi",
    stationLabel: "99.9 FM-HD4",
    schedule: "Thursdays, 5:00 PM - 7:00 PM ET",
    category: "Interviews",
    description:
      "Candid conversations with artists, leaders, immigration specialists, wellness voices, and Radio Nyra community guests.",
  },
  {
    slug: "idhar-udhar-ki-baatein",
    name: "Idhar Udhar Ki Baatein",
    host: "Arpit Tandon",
    image: "/images/hosts/idhar-udhar-ki-baatein.webp",
    stationId: STATIONS.Hindi.id,
    language: "Hindi",
    stationLabel: "99.9 FM-HD4",
    schedule: "Wednesdays, 5:00 PM - 7:00 PM ET",
    category: "Humor & Trends",
    description:
      "Lighthearted commentary, diaspora trends, listener banter, and upbeat music for the evening commute.",
  },
  {
    slug: "dil-se-desi-with-van",
    name: "Dil Se Desi With Van",
    host: "Van Bhandari",
    image: "/images/hosts/dil-se-desi.jpeg",
    stationId: STATIONS.Hindi.id,
    language: "Hindi",
    stationLabel: "99.9 FM-HD4",
    schedule: "Saturdays, 12:00 PM - 1:00 PM ET",
    category: "Community Talk",
    description:
      "Community-first conversations, Chai Pe Charcha segments, local stories, and business leader spotlights.",
  },
  {
    slug: "nirvana-nights",
    name: "Nirvana Nights",
    host: "Parag",
    image: "/images/hosts/nirvana-nights.png",
    stationId: STATIONS.Hindi.id,
    language: "Hindi",
    stationLabel: "99.9 FM-HD4",
    schedule: "Daily, 7:00 PM - 10:00 PM ET",
    category: "Late Night Music",
    description:
      "A late-night wind-down with soulful tracks, acoustic selections, classics, and relaxed music storytelling.",
  },
  {
    slug: "geet-bazaar",
    name: "Geet Bazaar",
    host: "Dr. Taj & Dr. Caldwell",
    image: "/images/hosts/geet-bazaar.webp",
    stationId: STATIONS.Hindi.id,
    language: "Hindi",
    stationLabel: "99.9 FM-HD4",
    schedule: "Sundays, 10:00 AM - 12:00 PM ET",
    category: "Classics",
    description:
      "A long-running weekend favorite featuring nostalgic songs, ghazals, classic film music, and rich musical context.",
  },
  {
    slug: "rtv-telugu-daily-news",
    name: "RTV Telugu Daily News",
    host: "RTV News Team",
    image: "/images/rtv/rtv-news-poster.jpg",
    stationId: STATIONS.Telugu.id,
    language: "Telugu",
    stationLabel: "99.9 FM-HD3",
    schedule: "Daily on Radio Nyra Telugu",
    category: "Daily News",
    description:
      "Daily Telugu bulletins covering India, Telugu states, US diaspora updates, community news, and current affairs.",
  },
  {
    slug: "chinna-mata",
    name: "Chinna Mata",
    host: "Priya",
    image: "/images/hosts/chinna-mata.webp",
    stationId: STATIONS.Telugu.id,
    language: "Telugu",
    stationLabel: "99.9 FM-HD3",
    schedule: "Mornings on Radio Nyra Telugu",
    category: "Telugu Melodies",
    description:
      "A Telugu music and conversation block for family listening, Tollywood favorites, and community updates.",
  },
]

export const COMMUNITY_LINKS: SearchItem[] = [
  {
    id: "community-events",
    type: "community",
    title: "Community Events",
    description: "Upcoming and past cultural programs, concerts, partner events, and community celebrations.",
    href: "/events",
    image: "/images/event-community.webp",
    keywords: ["events", "festival", "concert", "community", "diaspora"],
  },
  {
    id: "community-temples",
    type: "community",
    title: "Temples & Cultural Centers",
    description: "A local guide to temples, spiritual centers, cultural organizations, and worship communities.",
    href: "/community/temples",
    image: "/community.webp",
    keywords: ["temples", "spiritual", "culture", "hindu", "community"],
  },
  {
    id: "community-restaurants",
    type: "community",
    title: "Indian Food Guide",
    description: "Restaurants, food trucks, groceries, and local dining discoveries for the Triangle community.",
    href: "/community/restaurants",
    image: "/community.webp",
    keywords: ["restaurants", "food", "groceries", "triangle", "near me"],
  },
  {
    id: "community-directory",
    type: "community",
    title: "Community Business Directory",
    description: "Discover Radio Nyra partner businesses, local services, and Indian diaspora organizations.",
    href: "/directory",
    image: "/images/radio-nyra-logo.jpg",
    keywords: ["directory", "business", "partners", "local", "services"],
  },
  {
    id: "community-festivals",
    type: "community",
    title: "Festival Calendar",
    description: "Indian festival dates, community celebrations, and seasonal cultural programming.",
    href: "/festival-calendar",
    image: "/holi.webp",
    keywords: ["festival", "diwali", "holi", "calendar", "cultural"],
  },
]

function cleanText(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function formatDateLabel(dateValue: string) {
  if (!dateValue) return "Recently added"
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(dateValue))
  } catch {
    return dateValue
  }
}

function deriveShow(video: YouTubeVideoItem): string {
  const title = video.title
  const tags = video.tags
  if (tags.includes("LeadersAndLegends") || tags.includes("LeadersLegends") || title.includes("Leaders & Legends")) {
    return "Leaders & Legends"
  }
  if (tags.includes("ChaiPeCharcha") || title.includes("Chai Pe Charcha")) return "Chai Pe Charcha"
  if (tags.includes("BrownImmigration") || tags.includes("Immigration") || title.includes("Visa")) return "Brown Immigration"
  if (tags.includes("ExclusiveInterview") || tags.includes("Celebrity") || title.includes("Interview")) return "Exclusive Interview"
  return "Radio Nyra Podcast"
}

function deriveCategory(video: YouTubeVideoItem): string {
  const title = video.title
  const tags = video.tags
  if (tags.includes("H1B") || tags.includes("L1Visa") || tags.includes("StudentVisa") || tags.includes("Immigration")) {
    return "Immigration & Legal"
  }
  if (tags.includes("Celebrity") || tags.includes("PrabhuDeva") || title.includes("Anupam Kher")) return "Celebrity Interviews"
  if (tags.includes("ChaiPeCharcha") || tags.includes("HSNC") || tags.includes("Community")) return "Community Stories"
  if (tags.includes("LeadersAndLegends") || tags.includes("Leadership")) return "Leadership"
  if (title.includes("Art") || title.includes("Theatre")) return "Culture & Heritage"
  if (tags.includes("News") || title.includes("PM MODI")) return "News & Current Affairs"
  return "RadioNyra Originals"
}

function deriveHost(video: YouTubeVideoItem): string {
  const title = video.title
  const tags = video.tags
  if (tags.includes("SteveRao") || title.includes("Steve Rao")) return "Steve Rao"
  if (tags.includes("VanBhandari") || title.includes("Van Bhandari")) return "Van Bhandari"
  if (tags.includes("VaishnaviPalleda") || title.includes("Vaishnavi")) return "Vaishnavi Palleda"
  if (title.includes("Kelsey Berger")) return "Kelsey Berger"
  if (title.includes("Hari Kumar")) return "Hari Kumar"
  if (tags.includes("BrownImmigration") || title.includes("Brown Immigration")) return "Brown Immigration Law"
  return "Radio Nyra USA"
}

function normalizeDuration(duration: string) {
  if (!duration) return "On demand"
  const parts = duration.split(":").map((part) => Number.parseInt(part, 10))
  if (parts.some(Number.isNaN)) return duration
  if (parts.length === 3) return `${parts[0]}h ${parts[1]}m`
  if (parts.length === 2) return `${parts[0]}m ${parts[1]}s`
  return duration
}

export function getPodcastEpisodes(): PodcastEpisode[] {
  return SITE_VIDEOS.filter((video) => !video.isShort)
    .map((video) => ({
      id: video.id,
      title: video.title,
      description: video.description,
      host: deriveHost(video),
      show: deriveShow(video),
      category: deriveCategory(video),
      duration: normalizeDuration(video.duration),
      publishedAt: video.publishedAt,
      publishedLabel: formatDateLabel(video.publishedAt),
      url: video.youtubeUrl,
      embedUrl: video.embedUrl,
      thumbnail: video.thumbnailHigh || video.thumbnail,
      views: video.viewCount,
      viewCountNum: video.viewCountNum,
    }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getVideoItems() {
  return [...SITE_VIDEOS].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}

export function getPopularVideos() {
  return [...SITE_VIDEOS].sort((a, b) => b.viewCountNum - a.viewCountNum)
}

export function getNewsItems(): NewsItem[] {
  const rtvItems: NewsItem[] = RTV_TELUGU_NEWS_EPISODES.map((episode) => ({
    id: `rtv-${episode.date}`,
    title: episode.title,
    excerpt: episode.description,
    category: "RTV Telugu News",
    date: episode.date,
    dateLabel: episode.formattedDate,
    href: `/rtv-news/${episode.date}`,
    image: "/images/rtv/rtv-news-poster.jpg",
    source: "RTV News",
  }))

  const blogItems: NewsItem[] = BLOG_POSTS.map((post) => ({
    id: `blog-${post.slug}`,
    title: post.title,
    excerpt: post.excerpt || cleanText(post.content).slice(0, 180),
    category: post.categories[0] || "Community",
    date: post.date,
    dateLabel: formatDateLabel(post.date),
    href: `/blog/${post.slug}`,
    image: post.featuredImage.url,
    source: "Radio Nyra Blog",
  }))

  return [...rtvItems, ...blogItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPartnerHighlights() {
  return PARTNERS.slice(0, 12).map((partner) => ({
    id: `partner-${partner.name}`,
    title: partner.name,
    description: partner.category,
    href: partner.link || "/partners",
    image: partner.image,
    category: partner.category,
    external: Boolean(partner.link),
  }))
}

export function getSearchIndex(): SearchItem[] {
  const stationItems: SearchItem[] = getStationsList().map((station) => ({
    id: `station-${station.id}`,
    type: "station",
    title: station.name,
    description: `${station.city || "Radio Nyra"} ${station.frequency || ""} ${station.language || ""}`.trim(),
    href: "/how-to-tune",
    image: "/images/radio-nyra-logo.jpg",
    keywords: [station.name, station.city || "", station.state || "", station.frequency || "", station.language || ""],
    stationId: station.id,
  }))

  const showItems: SearchItem[] = SHOW_PROFILES.map((show) => ({
    id: `show-${show.slug}`,
    type: "show",
    title: show.name,
    description: `${show.host} - ${show.schedule}`,
    href: `/shows/${show.slug}`,
    image: show.image,
    keywords: [show.name, show.host, show.language, show.category, show.stationLabel],
    stationId: show.stationId,
  }))

  const podcastItems: SearchItem[] = getPodcastEpisodes().map((episode) => ({
    id: `podcast-${episode.id}`,
    type: "podcast",
    title: episode.title,
    description: `${episode.show} - Hosted by ${episode.host}`,
    href: `/podcasts?episode=${episode.id}`,
    image: episode.thumbnail,
    keywords: [episode.title, episode.description, episode.host, episode.show, episode.category],
  }))

  const videoItems: SearchItem[] = getVideoItems().map((video) => ({
    id: `video-${video.id}`,
    type: video.isShort ? "short" : "video",
    title: video.title,
    description: video.description || "Official Radio Nyra video",
    href: video.isShort ? "/shorts" : "/youtube",
    image: video.thumbnailHigh || video.thumbnail,
    keywords: [video.title, video.description, video.channelTitle, ...video.tags],
  }))

  const newsItems: SearchItem[] = getNewsItems().map((item) => ({
    id: `news-${item.id}`,
    type: "news",
    title: item.title,
    description: `${item.category} - ${item.dateLabel}`,
    href: item.href,
    image: item.image,
    keywords: [item.title, item.excerpt, item.category, item.source],
  }))

  const eventItems: SearchItem[] = [...upcomingEvents, ...pastEvents].map((event) => ({
    id: `event-${event.title}`,
    type: "event",
    title: event.title,
    description: "date" in event ? event.date : "Radio Nyra community event",
    href: "/events",
    image: event.image,
    keywords: [event.title, "event", "community", "festival"],
  }))

  const partnerItems: SearchItem[] = getPartnerHighlights().map((partner) => ({
    id: partner.id,
    type: "partner",
    title: partner.title,
    description: partner.description,
    href: partner.href,
    image: partner.image,
    keywords: [partner.title, partner.description, "partner", "business"],
  }))

  const pageItems: SearchItem[] = [
    { id: "page-schedule", type: "page", title: "Broadcast Schedule", description: "Seven-day Radio Nyra show timetable.", href: "/schedule", keywords: ["schedule", "shows", "time"] },
    { id: "page-news", type: "page", title: "News & Updates", description: "Browse RTV bulletins, blogs, and community updates.", href: "/news", keywords: ["news", "updates", "rtv"] },
    { id: "page-youtube", type: "page", title: "Videos & Shorts", description: "Official Radio Nyra YouTube hub.", href: "/youtube", keywords: ["youtube", "videos", "shorts"] },
    { id: "page-advertise", type: "page", title: "Advertise With Radio Nyra", description: "Media kits, campaigns, and business partnerships.", href: "/advertise", keywords: ["advertise", "business", "media kit"] },
    { id: "page-contact", type: "page", title: "Contact Radio Nyra", description: "Reach the Radio Nyra team.", href: "/contact", keywords: ["contact", "phone", "email"] },
  ]

  return [
    ...stationItems,
    ...showItems,
    ...podcastItems,
    ...videoItems,
    ...newsItems,
    ...COMMUNITY_LINKS,
    ...eventItems,
    ...partnerItems,
    ...pageItems,
  ]
}

