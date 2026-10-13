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
  topics: string[]
  keyHighlights: string[]
  transcriptSummary: string
}

// Google Drive file IDs
const DRIVE_IDS = {
  day1: "1CBTV53JAQkR_x0Zl2mrOFPZvEweU0XVC",
  day2: "1jOML8rfF4ktLiRFhEIdsG6ftmToisgrr",
  day3: "1Vi6RjX8c2wNIGw1ErnyZpI0eBMlhUCn1",
  day4: "19_frDSnA36yJPI_nehVS-aKMefBxAyXm",
  day5: "1NNQcU3OBYx4mVuLjHo2ULbZ-MLrIpEZm",
  day6: "14A2cd7WpeirXpEl7pXGYxIY5y7hpzGAT",
  day7: "1ycrETWXR7PpPFQpCuHzEoGj-NW86m_qg",
  day8: "1Q6hVwdU2EF5RIpKDGqIH0m3hOfVy5ZlX",
}

// Converts a Google Drive file ID to a streamable audio URL
export function driveAudioUrl(fileId: string): string {
  return `https://drive.google.com/uc?export=open&id=${fileId}`
}

export const RTV_TELUGU_NEWS_EPISODES: RtvNewsEpisode[] = [
  {
    id: "Day 8",
    filename: "Day 8.mp3",
    title: "RTV Telugu Daily News - Day 8",
    dayNumber: 8,
    date: "2026-10-07",
    formattedDate: "Oct 7, 2026",
    sizeFormatted: "13.0 MB",
    url: driveAudioUrl(DRIVE_IDS.day8),
    driveId: DRIVE_IDS.day8,
    language: "Telugu",
    station: "99.9 FM-HD3",
    description: "Latest RTV Telugu daily news bulletin for Radio Nyra listeners, available on-demand through the official Day 8 audio update.",
    topics: ["RTV Telugu News", "Daily Bulletin", "Andhra Pradesh", "Telangana", "Diaspora Updates"],
    keyHighlights: [
      "Full Day 8 RTV Telugu news audio is now available for on-demand listening.",
      "Daily Telugu bulletin presented for Radio Nyra Telugu listeners on 99.9 FM-HD3.",
      "Coverage includes Telugu-state updates, Indian current affairs, and diaspora-focused news.",
      "Listeners can play the bulletin directly on the website or open the full Google Drive player."
    ],
    transcriptSummary: "RTV Telugu News Day 8 bulletin is now available on Radio Nyra 99.9 FM-HD3. Listen to the complete Telugu daily news audio for current affairs, Telugu-state updates, and diaspora-focused coverage."
  },
  {
    id: "Day 7",
    filename: "Day 7.mp3",
    title: "RTV Telugu Daily News - Day 7",
    dayNumber: 7,
    date: "2026-10-06",
    formattedDate: "Oct 6, 2026",
    sizeFormatted: "~15 MB",
    url: driveAudioUrl(DRIVE_IDS.day7),
    driveId: DRIVE_IDS.day7,
    language: "Telugu",
    station: "99.9 FM-HD3",
    description: "Latest RTV Telugu daily news bulletin — Andhra Pradesh Amaravati infrastructure updates, Telangana welfare initiatives, US visa processing queues, and local NC community news.",
    topics: ["Andhra Pradesh", "Telangana", "US Visa & Immigration", "Diaspora News", "Cinema"],
    keyHighlights: [
      "Andhra Pradesh Cabinet advances key Amaravati capital infrastructure tenders.",
      "Telangana IT and industrial policy review with global investment updates.",
      "US State Department and USCIS employment visa processing timeline announcements.",
      "North Carolina Telugu diaspora announcements including upcoming Bathukamma celebrations in Morrisville.",
      "Tollywood box office reports and new theatrical festival release previews."
    ],
    transcriptSummary: "Namaskaram! Ee roju RTV Telugu News mukhya amshalu: Andhra Pradesh rajadhani Amaravati nirmana panulu mariyu key capital infra tenders aamodam. Telangana lo IT mariyu industrial corridor updates tho patu investment drives. US lo visa processing mariyu H-1B lottery updates pai NRI updates. North Carolina Morrisville mariyu Cary lo Telugu kutumbalu jarepinche Bathukamma sandadi visheshalu. Tollywood box office collections mariyu cinema kaburlu. Broadcast live on Radio Nyra 99.9 FM-HD3."
  },
  {
    id: "Day 6",
    filename: "Day 6.mp3",
    title: "RTV Telugu Daily News - Day 6",
    dayNumber: 6,
    date: "2026-10-04",
    formattedDate: "Oct 4, 2026",
    sizeFormatted: "~15 MB",
    url: driveAudioUrl(DRIVE_IDS.day6),
    driveId: DRIVE_IDS.day6,
    language: "Telugu",
    station: "99.9 FM-HD3",
    description: "Daily Telugu news bulletin covering AP state assembly resolutions, Hyderabad infrastructure roadmaps, national economic indices, and US diaspora updates.",
    topics: ["Andhra Pradesh", "Hyderabad", "Economy", "USA NRIs", "Tollywood"],
    keyHighlights: [
      "AP Assembly debates development allocations across Rayalaseema and coastal regions.",
      "Greater Hyderabad Municipal Corporation unveils expanded flyover and metro grid plans.",
      "Reserve Bank of India monetary policy updates and rupee-dollar exchange rates.",
      "Triangle Telugu Association announces community sports tournament dates in Cary.",
      "Celebrity interviews and Dussehra movie releases in North American theaters."
    ],
    transcriptSummary: "RTV Telugu News Day 6 Bulletin: Andhra Pradesh assembly lo kotha welfare and development schemes pai samagra charcha. Hyderabad metro second phase mariyu road infra projects status. Rupee mariyu US dollar exchange rates tho patu NRI remittances visheshalu. Cary NC lo jarige Telugu cricket tournament kaburlu mariyu festival film release dates."
  },
  {
    id: "Day 5",
    filename: "Day 5.mp3",
    title: "RTV Telugu Daily News - Day 5",
    dayNumber: 5,
    date: "2026-10-03",
    formattedDate: "Oct 3, 2026",
    sizeFormatted: "~15 MB",
    url: driveAudioUrl(DRIVE_IDS.day5),
    driveId: DRIVE_IDS.day5,
    language: "Telugu",
    station: "99.9 FM-HD3",
    description: "Telugu news bulletin featuring agricultural support measures in Telugu states, IT export achievements, and North American Telugu association conventions.",
    topics: ["Agriculture", "Tech & IT", "Telangana", "TATA / NATS Conventions", "Current Affairs"],
    keyHighlights: [
      "Kharif harvest crop procurement centers setup across Telangana and AP districts.",
      "Hyderabad registers double digit growth in enterprise AI and software exports.",
      "Telugu diaspora convention dates finalized across major US East Coast hubs.",
      "High-skilled immigration bills introduced in US Congress discussed with legal experts."
    ],
    transcriptSummary: "Day 5 RTV News: Rythu bandhu mariyu dhanyam konugolu kendrala erpatu. Hyderabad IT exports lo kottha recordlu. American Telugu sanghala jathiya mahasabhalu mariyu NRI legal council visheshalu."
  },
  {
    id: "Day 4",
    filename: "Day 4.mp3",
    title: "RTV Telugu Daily News - Day 4",
    dayNumber: 4,
    date: "2026-10-01",
    formattedDate: "Oct 1, 2026",
    sizeFormatted: "15.6 MB",
    url: driveAudioUrl(DRIVE_IDS.day4),
    driveId: DRIVE_IDS.day4,
    language: "Telugu",
    station: "99.9 FM-HD3",
    description: "Daily Telugu news bulletin covering national politics, election commission updates, education policies, and breaking headlines.",
    topics: ["National Politics", "Election Commission", "Education", "Indian Cinema"],
    keyHighlights: [
      "Election Commission of India issues revised electoral roll guidelines.",
      "IIT and NIT entrance exam schedules and counseling updates for Telugu students.",
      "Global economic updates impacting overseas technology professionals.",
      "Tollywood awards recap and soundtrack streaming milestones."
    ],
    transcriptSummary: "Day 4 RTV Telugu Bulletin: Kendra election commission kotha guidelines. Telugu vidyarthulaku higher education admission schedules. Overseas IT professionals pai tech market prabhavam."
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
    description: "Daily Telugu news bulletin covering key national and international political developments, trade agreements, and energy sector news.",
    topics: ["International Politics", "Trade & Commerce", "Andhra Pradesh", "Telangana"],
    keyHighlights: [
      "India signs multilateral renewable energy pacts at international summit.",
      "Irrigation and drinking water project approvals in Godavari basin.",
      "Health care reforms announced for rural healthcare networks.",
      "South Asian diaspora community cultural events across North Carolina."
    ],
    transcriptSummary: "Day 3 Bulletin: Antarjathiya energy agreements lo India bhagaswamhyam. Godavari jala parivahana mariyu thagitneeru projects. Carolinas lo Telugu sanskritika karyakramalu."
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
    description: "Daily Telugu news bulletin covering current affairs, economic updates, banking sectors, and consumer trends.",
    topics: ["Banking & Finance", "Consumer Affairs", "Telangana", "Culture"],
    keyHighlights: [
      "Public sector banking revisions and interest rates overview.",
      "Telangana tourism board unveils heritage circuit expansions.",
      "Consumer inflation figures released by statistical ministry.",
      "Triangle Indian grocery and festive market arrivals."
    ],
    transcriptSummary: "Day 2 RTV Telugu Bulletin: Banking vyavastha mariyu vaddi rella samacharam. Telangana tourism kotha packages. Triangle lo festive grocery shopping updates."
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
    description: "Inaugural daily Telugu news bulletin on Radio Nyra Telugu 99.9 FM-HD3. Commencing daily news broadcasting for North Carolina and global diaspora.",
    topics: ["Launch Edition", "Broadcast News", "Andhra Pradesh", "Telangana", "Diaspora"],
    keyHighlights: [
      "Official launch of daily RTV Telugu News programming on Radio Nyra 99.9 FM-HD3.",
      "Comprehensive daily coverage commitment for Telugu speakers across the USA.",
      "Major state headlines from Hyderabad, Vijayawada, Visakhapatnam, and Tirupati.",
      "Digital listening channels on RadioNyra.com and smart speaker integrations."
    ],
    transcriptSummary: "Prarambha Bulletin: Radio Nyra 99.9 FM-HD3 lo RTV Telugu News aadhikarika prarambham. Telugu rashtrala samacharam, US Telugu varthalu, prathi roju digital and HD radio dwara andisthunnam."
  },
]

export function getRtvEpisodeByDate(date: string): RtvNewsEpisode | undefined {
  return RTV_TELUGU_NEWS_EPISODES.find((ep) => ep.date === date)
}

export function getAllRtvDates(): string[] {
  return RTV_TELUGU_NEWS_EPISODES.map((ep) => ep.date)
}

export function getAdjacentEpisodes(currentDate: string) {
  const index = RTV_TELUGU_NEWS_EPISODES.findIndex((ep) => ep.date === currentDate)
  if (index === -1) return { prev: null, next: null }
  return {
    next: index > 0 ? RTV_TELUGU_NEWS_EPISODES[index - 1] : null, // more recent
    prev: index < RTV_TELUGU_NEWS_EPISODES.length - 1 ? RTV_TELUGU_NEWS_EPISODES[index + 1] : null, // older
  }
}

