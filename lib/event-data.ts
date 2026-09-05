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
  {
    title: "IAFV Garba Dandiya Night",
    date: "September 19, 2026",
    time: "6:00 PM - 10:00 PM EDT",
    location: "Fuquay-Varina High School, Fuquay-Varina, NC",
    venue: "Fuquay-Varina High School, Fuquay-Varina, NC",
    type: "Garba Dandiya Night",
    image: "/images/events/iafv-garba-dandiya-night-2026.png",
    imageAspect: "landscape",
    link: "https://iafvnc.org/",
    startDate: "2026-09-19T18:00:00-04:00",
    price: "$20 early bird; $25 at the door",
    description:
      "IAFV invites the community for a Garba Dandiya night with DJ Kash, plus a 6:15 PM Garba lesson included with entry.",
    cta: "Visit IAFV",
  },
  {
    title: "Rhythm & Raas Garba Night",
    date: "October 2, 2026",
    time: "7:00 PM EDT",
    location: "Haveli, Apex, NC",
    venue: "Haveli, 795 Beaver Creek Rd, Apex, NC 27502",
    type: "Garba Night",
    image: "/images/events/rhythm-raas-garba-2026.png",
    imageAspect: "portrait",
    link: "",
    startDate: "2026-10-02T19:00:00-04:00",
    price: "Adults $20; Kids 5 to 16 $10",
    description:
      "Rhythm & Raas presents a community Garba night with live music, food trucks, and performances by Amruta Manke and Nimesh Nagar.",
    cta: "See Flyer",
  },
]
