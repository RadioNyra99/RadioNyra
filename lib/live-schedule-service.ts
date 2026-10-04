export interface LiveShowInfo {
  id: string
  title: string
  host: string
  image: string
  timeRange: string
  tag: string
  description: string
  station: "hindi" | "telugu"
  stationFrequency: string
}

export interface EasternTime {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
  hour: number // 0-23
  minute: number // 0-59
  formattedTime: string
}

export function getEasternTime(now = new Date()): EasternTime {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  })

  const parts = formatter.formatToParts(now)
  let day: EasternTime["day"] = "Monday"
  let hour = 12
  let minute = 0

  for (const part of parts) {
    if (part.type === "weekday") {
      day = part.value as EasternTime["day"]
    }
    if (part.type === "hour") {
      hour = parseInt(part.value, 10)
    }
    if (part.type === "minute") {
      minute = parseInt(part.value, 10)
    }
  }

  if (hour === 24) hour = 0

  const time12Str = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(now)

  return {
    day,
    hour,
    minute,
    formattedTime: `${day}, ${time12Str} EST`,
  }
}

/**
 * Returns the currently airing show on Hindi (99.9 FM-HD4 / 101.9 FM / 1490 AM)
 * strictly resolved against the Eastern Time (America/New_York) schedule.
 */
export function getLiveHindiShow(now = new Date()): LiveShowInfo {
  const { day, hour } = getEasternTime(now)
  const isWeekend = day === "Saturday" || day === "Sunday"

  // 12 AM - 6 AM: Back to Back
  if (hour >= 0 && hour < 6) {
    return {
      id: "hindi-back-to-back-night",
      title: "Back to Back Hits",
      host: "Radio Nyra Bollywood",
      image: "/back-to-back.webp",
      timeRange: "12:00 AM – 6:00 AM EST",
      tag: "Late Night Non-Stop",
      description: "Non-stop retro & current Bollywood chartbusters streaming commercial-free.",
      station: "hindi",
      stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
    }
  }

  // 6 AM - 7 AM: Geetanjali
  if (hour >= 6 && hour < 7) {
    return {
      id: "hindi-geetanjali",
      title: "Geetanjali",
      host: "Radio Nyra",
      image: "/geetanjali.webp",
      timeRange: "6:00 AM – 7:00 AM EST",
      tag: "Morning Devotional",
      description: "Soulful devotional melodies, spiritual mantras, and peaceful morning harmonies.",
      station: "hindi",
      stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
    }
  }

  // 7 AM - 10 AM: Zara Muskurao
  if (hour >= 7 && hour < 10) {
    return {
      id: "hindi-zara-muskurao",
      title: "Zara Muskurao",
      host: "Aayushii Rode",
      image: "/images/hosts/zara-muskurao.jpeg",
      timeRange: "7:00 AM – 10:00 AM EST",
      tag: "Morning Drive Prime",
      description: "High-octane Bollywood hits, community updates, cheerful banter, and morning vibes.",
      station: "hindi",
      stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
    }
  }

  // 10 AM - 1 PM
  if (hour >= 10 && hour < 13) {
    if (day === "Sunday" && hour < 12) {
      return {
        id: "hindi-geet-bazaar",
        title: "Geet Bazaar (Live)",
        host: "Dr. Taj & Dr. Caldwell",
        image: "/images/hosts/geet-bazaar.webp",
        timeRange: "10:00 AM – 12:00 PM EST",
        tag: "Evergreen Classics",
        description: "The Triangle's longest-running South Asian community show featuring golden melodies and community talks.",
        station: "hindi",
        stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
      }
    }
    if (day === "Saturday" && hour === 12) {
      return {
        id: "hindi-dil-se-desi-sat",
        title: "Dil Se Desi With Van",
        host: "Van Bhandari",
        image: "/images/hosts/dil-se-desi.jpeg",
        timeRange: "12:00 PM – 1:00 PM EST",
        tag: "Weekend Spotlight",
        description: "Weekend conversation, Chai Pe Charcha, and diaspora favorites.",
        station: "hindi",
        stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
      }
    }
    return {
      id: "hindi-triangle-tunes",
      title: "Triangle Tunes and Talks",
      host: "Monika Joshi",
      image: "/images/hosts/triangle-tunes.jpeg",
      timeRange: "10:00 AM – 1:00 PM EST",
      tag: "Midday Melodies",
      description: "Soundtrack for your workday with chartbusters, lifestyle chats, and local highlights.",
      station: "hindi",
      stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
    }
  }

  // 1 PM - 3 PM: Bollywood Bliss
  if (hour >= 13 && hour < 15) {
    return {
      id: "hindi-bollywood-bliss",
      title: "Bollywood Bliss",
      host: "Bharti Rathore",
      image: "/images/hosts/bollywood-bliss.jpeg",
      timeRange: "1:00 PM – 3:00 PM EST",
      tag: "Romantic Melodies",
      description: "Timeless romantic tracks, soulful acoustic melodies, and cinema nostalgia.",
      station: "hindi",
      stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
    }
  }

  // 3 PM - 5 PM: Idhar Udhar Ki Baatein / Afternoon Groove
  if (hour >= 15 && hour < 17) {
    if (!isWeekend) {
      return {
        id: "hindi-idhar-udhar",
        title: "Idhar Udhar Ki Baatein",
        host: "Arpit Tandon",
        image: "/images/hosts/idhar-udhar-ki-baatein.webp",
        timeRange: "3:00 PM – 5:00 PM EST",
        tag: "Humor & Trends",
        description: "Witty commentary, viral diaspora trends, quirky humor, and lively listener call-ins.",
        station: "hindi",
        stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
      }
    }
    return {
      id: "hindi-afternoon-bliss",
      title: "Bollywood Bliss (Extended)",
      host: "Bharti Rathore",
      image: "/images/hosts/bollywood-bliss.jpeg",
      timeRange: "3:00 PM – 5:00 PM EST",
      tag: "Weekend Chill",
      description: "Afternoon cinema hits and retro classics for relaxing weekend afternoons.",
      station: "hindi",
      stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
    }
  }

  // 5 PM - 7 PM: Evening Prime Shows
  if (hour >= 17 && hour < 19) {
    if (day === "Thursday") {
      return {
        id: "hindi-hello-vaishnavi",
        title: "Hello Vaishnavi",
        host: "Vaishnavi Palleda",
        image: "/images/hosts/hello-vaishnavi.jpeg",
        timeRange: "5:00 PM – 7:00 PM EST",
        tag: "Celebrity & Culture",
        description: "Candid conversations with Indian cultural leaders, immigration specialists, and celebrities.",
        station: "hindi",
        stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
      }
    }
    if (day === "Friday") {
      return {
        id: "hindi-aaj-ki-shaam",
        title: "Aaj Ki Shaam",
        host: "Jyoti",
        image: "/images/hosts/Aaj Ki Shaam-jyoti kae naam.png",
        timeRange: "5:00 PM – 7:00 PM EST",
        tag: "Ghazals & Poetry",
        description: "Poetry, ghazals, soulful acoustic notes, and heartwarming Friday evening melodies.",
        station: "hindi",
        stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
      }
    }
    if (!isWeekend) {
      return {
        id: "hindi-dil-se-desi",
        title: "Dil Se Desi With Van",
        host: "Van Bhandari",
        image: "/images/hosts/dil-se-desi.jpeg",
        timeRange: "5:00 PM – 7:00 PM EST",
        tag: "Evening Commute",
        description: "The Triangle's premier evening drive-time show with business spotlights and top hits.",
        station: "hindi",
        stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
      }
    }
    return {
      id: "hindi-weekend-drive",
      title: "Weekend Bollywood Drive",
      host: "Radio Nyra Bollywood",
      image: "/back-to-back.webp",
      timeRange: "5:00 PM – 7:00 PM EST",
      tag: "Weekend Drive",
      description: "High-tempo Bollywood dance tracks and upbeat chartbusters for your weekend drive.",
      station: "hindi",
      stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
    }
  }

  // 7 PM - 10 PM: Nirvana Nights
  if (hour >= 19 && hour < 22) {
    return {
      id: "hindi-nirvana-nights",
      title: "Nirvana Nights",
      host: "Parag",
      image: "/images/hosts/nirvana-nights.png",
      timeRange: "7:00 PM – 10:00 PM EST",
      tag: "Late Night Chill",
      description: "Unplugged melodies, soulful ghazals, timeless RD Burman & Kishore Kumar classics.",
      station: "hindi",
      stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
    }
  }

  // 10 PM - 12 AM: Mehfil & Retro
  if (day === "Sunday") {
    return {
      id: "hindi-geet-bazaar-repeat",
      title: "Geet Bazaar (Mehfil)",
      host: "Dr. Taj & Dr. Caldwell",
      image: "/images/hosts/geet-bazaar.webp",
      timeRange: "10:00 PM – 12:00 AM EST",
      tag: "Mehfil & Nostalgia",
      description: "Encore broadcast of Sunday's classic Bollywood program and poetry spotlight.",
      station: "hindi",
      stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
    }
  }

  return {
    id: "hindi-back-to-back-late",
    title: "Back to Back Hits",
    host: "Radio Nyra Bollywood",
    image: "/back-to-back.webp",
    timeRange: "10:00 PM – 12:00 AM EST",
    tag: "Late Night Chill",
    description: "Relaxing late-night melodies and modern acoustic Bollywood tracks.",
    station: "hindi",
    stationFrequency: "99.9 FM-HD4 • 101.9 FM • 1490 AM",
  }
}

/**
 * Returns the currently airing show on Telugu (99.9 FM-HD3)
 * strictly resolved against the Eastern Time (America/New_York) schedule.
 */
export function getLiveTeluguShow(now = new Date()): LiveShowInfo {
  const { hour } = getEasternTime(now)

  // 7 AM - 10 AM: Chinna Mata (Host: Priya)
  if (hour >= 7 && hour < 10) {
    return {
      id: "telugu-chinna-mata",
      title: "Chinna Mata",
      host: "Priya",
      image: "/images/hosts/chinna-mata.webp",
      timeRange: "7:00 AM – 10:00 AM EST",
      tag: "Tollywood Melodies",
      description: "Wake up with the best Telugu melodies, diaspora news, family chit-chat, and positive energy on HD3.",
      station: "telugu",
      stationFrequency: "99.9 FM-HD3",
    }
  }

  // 10 AM - 12 PM: RTV Telugu Daily News Bulletin
  if (hour >= 10 && hour < 12) {
    return {
      id: "telugu-rtv-news",
      title: "RTV Telugu Daily News & Express",
      host: "RTV News Team",
      image: "/images/rtv/rtv-news-poster.jpg",
      timeRange: "10:00 AM – 12:00 PM EST",
      tag: "Breaking News & Politics",
      description: "Official RTV Telugu news broadcast covering state politics, national headlines, and diaspora events.",
      station: "telugu",
      stationFrequency: "99.9 FM-HD3",
    }
  }

  // 12 PM - 3 PM: Tollywood Youth Beats & Top 20
  if (hour >= 12 && hour < 15) {
    return {
      id: "telugu-top-20",
      title: "Tollywood Top 20 & Youth Beats",
      host: "Radio Nyra Telugu",
      image: "/images/hosts/chinna-mata.webp",
      timeRange: "12:00 PM – 3:00 PM EST",
      tag: "Chartbusters & Beats",
      description: "High-energy Tollywood chart hits, mass beats, and trending Telugu cinema tracks.",
      station: "telugu",
      stationFrequency: "99.9 FM-HD3",
    }
  }

  // 3 PM - 6 PM: Sandhya Ragam / Telugu Matinee
  if (hour >= 15 && hour < 18) {
    return {
      id: "telugu-sandhya-ragam",
      title: "Sandhya Ragam",
      host: "Radio Nyra Telugu",
      image: "/images/hosts/chinna-mata.webp",
      timeRange: "3:00 PM – 6:00 PM EST",
      tag: "Melody Hour",
      description: "Soothing Telugu melodies, Mani Sharma & Keeravani hits, and afternoon drive tunes.",
      station: "telugu",
      stationFrequency: "99.9 FM-HD3",
    }
  }

  // 6 PM - 9 PM: Tollywood Prime Melodies
  if (hour >= 18 && hour < 21) {
    return {
      id: "telugu-prime-melodies",
      title: "Tollywood Prime Melodies",
      host: "Radio Nyra Telugu",
      image: "/images/hosts/chinna-mata.webp",
      timeRange: "6:00 PM – 9:00 PM EST",
      tag: "Evening Prime",
      description: "Top requested Telugu songs, Thaman, DSP & Anirudh hits, and community shoutouts.",
      station: "telugu",
      stationFrequency: "99.9 FM-HD3",
    }
  }

  // 9 PM - 12 AM: Retro Telugu Melodies & Ilaiyaraaja / SPB Nostalgia
  if (hour >= 21 && hour < 24) {
    return {
      id: "telugu-retro-nostalgia",
      title: "Retro Telugu Nostalgia",
      host: "Radio Nyra Telugu",
      image: "/images/hosts/chinna-mata.webp",
      timeRange: "9:00 PM – 12:00 AM EST",
      tag: "Golden Era Classics",
      description: "Timeless SPB, Chitra, Ilaiyaraaja, and Chakravarthy Telugu cinema masterworks.",
      station: "telugu",
      stationFrequency: "99.9 FM-HD3",
    }
  }

  // 12 AM - 7 AM: Non-stop Telugu Night Beats
  return {
    id: "telugu-night-beats",
    title: "Non-stop Tollywood Night Beats",
    host: "Radio Nyra Telugu",
    image: "/back-to-back.webp",
    timeRange: "12:00 AM – 7:00 AM EST",
    tag: "Non-Stop Melodies",
    description: "24/7 uninterrupted Telugu songs and soulful overnight melodies on 99.9 FM-HD3.",
    station: "telugu",
    stationFrequency: "99.9 FM-HD3",
  }
}
