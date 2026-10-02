export interface RtvNewsEpisode {
  id: string
  filename: string
  title: string
  dayNumber: number
  date: string
  formattedDate: string
  sizeFormatted: string
  url: string
  driveId: string
  language: "Telugu"
  station: "99.9 FM-HD3"
  description: string
}

// Google Drive file IDs
const DRIVE_IDS = {
  day1: "1CBTV53JAQkR_x0Zl2mrOFPZvEweU0XVC",
  day2: "1jOML8rfF4ktLiRFhEIdsG6ftmToisgrr",
  day3: "1Vi6RjX8c2wNIGw1ErnyZpI0eBMlhUCn1",
  day4: "19_frDSnA36yJPI_nehVS-aKMefBxAyXm",
}

// Converts a Google Drive file ID to a streamable audio URL
export function driveAudioUrl(fileId: string): string {
  return `https://drive.google.com/uc?export=open&id=${fileId}`
}

export const RTV_TELUGU_NEWS_EPISODES: RtvNewsEpisode[] = [
  {
    id: "Day 4",
    filename: "Day 4.mp3",
    title: "RTV Telugu Daily News - Day 4 (Latest)",
    dayNumber: 4,
    date: "2026-10-01",
    formattedDate: "Oct 1, 2026",
    sizeFormatted: "15.6 MB",
    url: driveAudioUrl(DRIVE_IDS.day4),
    driveId: DRIVE_IDS.day4,
    language: "Telugu",
    station: "99.9 FM-HD3",
    description: "Daily Telugu news bulletin covering national politics, election commission updates, and breaking headlines.",
  },
  {
    id: "Day 3",
    filename: "Day 3.mp3",
    title: "RTV Telugu Daily News - Day 3",
    dayNumber: 3,
    date: "2026-09-30",
    formattedDate: "Sep 30, 2026",
    sizeFormatted: "11.3 MB",
    url: driveAudioUrl(DRIVE_IDS.day3),
    driveId: DRIVE_IDS.day3,
    language: "Telugu",
    station: "99.9 FM-HD3",
    description: "Daily Telugu news bulletin covering key national and international political developments.",
  },
  {
    id: "Day 2",
    filename: "Day 2.mp3",
    title: "RTV Telugu Daily News - Day 2",
    dayNumber: 2,
    date: "2026-09-29",
    formattedDate: "Sep 29, 2026",
    sizeFormatted: "12.9 MB",
    url: driveAudioUrl(DRIVE_IDS.day2),
    driveId: DRIVE_IDS.day2,
    language: "Telugu",
    station: "99.9 FM-HD3",
    description: "Daily Telugu news bulletin covering current affairs, economic updates, and consumer trends.",
  },
  {
    id: "Day 1",
    filename: "Day 1.mp3",
    title: "RTV Telugu Daily News - Day 1",
    dayNumber: 1,
    date: "2026-09-28",
    formattedDate: "Sep 28, 2026",
    sizeFormatted: "13.1 MB",
    url: driveAudioUrl(DRIVE_IDS.day1),
    driveId: DRIVE_IDS.day1,
    language: "Telugu",
    station: "99.9 FM-HD3",
    description: "Inaugural daily Telugu news bulletin on Radio Nyra Telugu 99.9 FM-HD3.",
  },
]
