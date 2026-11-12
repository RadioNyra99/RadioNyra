import radioContent from "@/content/radio-content.json"

export const RADIO_CONTENT = radioContent
export type RadioShow = {
  slug: string
  name: string
  language: "Hindi" | "Telugu" | "Video podcast"
  station: string
  days: string[]
  schedule: string
  startMinute?: number
  endMinute?: number
  host: string
  description: string
  image: string
}
export type RadioHost = {
  name: string
  show: string
  bio: string
  image: string
  imagePlaceholder?: string
}
export const RADIO_SHOWS = radioContent.shows as unknown as RadioShow[]
export const RADIO_HOSTS = radioContent.hosts as unknown as RadioHost[]
export const RADIO_VIDEOS = radioContent.videos
export const RADIO_EVENTS = radioContent.events
export const AUDIENCE_STATS = radioContent.audienceStats
export const YOUTUBE_STATS = radioContent.youtubeStats
export const RADIO_FREQUENCIES = radioContent.frequencies
export const RADIO_PARTNERS = radioContent.partners
export const RADIO_PARTNER_LOGOS = radioContent.partnerLogos

export type RadioLanguageFilter = "All" | "Hindi" | "Telugu"

export type EasternTime = {
  day: string
  minuteOfDay: number
  formattedTime: string
}

export function getEasternTime(now = new Date()): EasternTime {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now)
  const read = (type: string) => parts.find((part) => part.type === type)?.value ?? "0"
  const hour = Number(read("hour"))
  const minute = Number(read("minute"))
  return {
    day: read("weekday"),
    minuteOfDay: hour * 60 + minute,
    formattedTime: new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    }).format(now),
  }
}

export function getCurrentRadioShow(language: "Hindi" | "Telugu", now = new Date()) {
  const time = getEasternTime(now)
  const current = RADIO_SHOWS
    .filter((show) =>
      show.language === language &&
      show.days.includes(time.day) &&
      show.startMinute !== undefined &&
      show.endMinute !== undefined &&
      time.minuteOfDay >= show.startMinute &&
      time.minuteOfDay < show.endMinute
    )
    .sort((a, b) => a.days.length - b.days.length)[0]

  if (!current) {
    return {
      id: `${language.toLowerCase()}-radio-nyra`,
      title: `Radio Nyra ${language}`,
      host: "Radio Nyra",
      image: "/images/radio-nyra-logo.png",
      timeRange: "Live stream · 24/7",
      tag: "Live stream",
      description: `${language} radio streaming from Raleigh–Durham.`,
      station: language.toLowerCase() as "hindi" | "telugu",
      stationFrequency: language === "Hindi" ? "99.9 FM HD4" : "99.9 FM HD3",
    }
  }

  return {
    id: current.slug,
    title: current.name,
    host: current.host,
    image: current.image,
    timeRange: current.schedule,
    tag: current.language === "Hindi" ? "Hindi · HD4" : "Telugu · HD3",
    description: current.description,
    station: language.toLowerCase() as "hindi" | "telugu",
    stationFrequency: language === "Hindi" ? "99.9 FM HD4" : "99.9 FM HD3",
  }
}

export type LiveShowInfo = ReturnType<typeof getCurrentRadioShow>

