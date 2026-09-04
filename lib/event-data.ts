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
    title: "Bhajan Clubbing",
    date: "September 5, 2026",
    time: "8:00 PM EDT",
    location: "Hooky Entertainment, Cary, NC",
    venue: "Hooky Entertainment, Cary, NC",
    type: "Krishna Janmashtami Special",
    image: "/images/events/bhajan-clubbing-janmashtami-2026.png",
    imageAspect: "portrait",
    link: "https://www.eventbrite.com/e/bhajan-clubbing-krishna-janmashtami-special-ft-aj-the-dj-cary-nc-tickets-1998490272202",
    startDate: "2026-09-05T20:00:00-04:00",
    price: "Tickets on Eventbrite",
    description:
      "A Krishna Janmashtami special evening of devotional club beats featuring AJ The DJ for the Cary community.",
    cta: "Get Tickets",
  },
]
