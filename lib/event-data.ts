export type UpcomingEvent = {
  title: string
  date: string
  time: string
  location: string
  venue: string
  type: string
  image: string
  imageAspect: "portrait" | "landscape"
  link: string
  startDate: string
  doorsOpen?: string
  price: string
  description: string
  cta: string
}

export type PastEvent = {
  id: number
  title: string
  image: string
  date: string
}

const EVENT_TIME_ZONE = "America/New_York"

function getDateKey(date: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: EVENT_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date)
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date)
  nextDate.setDate(nextDate.getDate() + days)
  return nextDate
}

export function getEventTimingLabel(startDate: string, now = new Date()) {
  const eventDate = new Date(startDate)
  const eventDateKey = getDateKey(eventDate)
  const todayKey = getDateKey(now)
  const tomorrowKey = getDateKey(addDays(now, 1))

  if (eventDateKey === todayKey) return "Today"
  if (eventDateKey === tomorrowKey) return "Tomorrow"
  return "Upcoming"
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: "UniverSoul Circus - Radio Nyra Day Under the Big Top",
    date: "Sunday, Nov 15th, 2026",
    time: "12:00 PM",
    location: "Raleigh, NC",
    venue: "Coastal Credit Union Music Park at Walnut Creek",
    type: "Circus & Family",
    image: "/images/universoul-circus.jpg",
    imageAspect: "portrait",
    link: "https://ticketsea.com/events/universoul-circus-raleigh-2026-11-15-g5evz-fhikbnf/",
    startDate: "2026-11-15T12:00:00-05:00",
    doorsOpen: "11:00 AM",
    price: "$5.00 OFF Select Seats",
    description: "Join Radio Nyra under the big top at UniverSoul Circus! Enjoy world-class acrobatics, music, and $5 OFF select seats.",
    cta: "Buy Tickets ($5 OFF)",
  },
]

export const pastEvents: PastEvent[] = [
  {
    id: 0,
    title: "Rhythm & Raas Garba Night",
    image: "/images/events/rhythm-raas-garba-2026.png",
    date: "October 2, 2026",
  },
  {
    id: 1,
    title: "IAFV Garba Dandiya Night",
    image: "/images/events/iafv-garba-dandiya-night-2026.png",
    date: "September 2026",
  },
  {
    id: 2,
    title: "Ganesh Chaturthi Utsav",
    image: "/images/ganesh-chaturthi.jpg",
    date: "September 2026",
  },
  {
    id: 3,
    title: "Bhajan Clubbing - Janmashtami Special",
    image: "/images/events/bhajan-clubbing-janmashtami-2026.png",
    date: "August 2026",
  },
  {
    id: 4,
    title: "Zain Zohaib Qawwali Show",
    image: "/zain-zohaib-qawwali-show.webp",
    date: "2025",
  },
  {
    id: 5,
    title: "Hooky Holiday Showcase Event",
    image: "/hooky-holiday-showcase-event.webp",
    date: "2025",
  },
  {
    id: 6,
    title: "AR Rahman Concert",
    image: "/ar-rahman-concert.webp",
    date: "2025",
  },
]
