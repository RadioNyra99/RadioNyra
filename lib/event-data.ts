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

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: "Bhajan Clubbing",
    date: "September 5, 2026",
    time: "8:00 PM EDT",
    location: "Hooky Entertainment, Cary, NC",
    venue: "Hooky Entertainment, Cary, NC",
    type: "Krishna Janmashtami Special",
    image: "/bhajan-clubbing-janmashtami.webp",
    imageAspect: "portrait",
    link: "https://www.eventbrite.com/e/bhajan-clubbing-krishna-janmashtami-special-ft-aj-the-dj-cary-nc-tickets-1998490272202",
    startDate: "2026-09-05T20:00:00-04:00",
    price: "Tickets on Eventbrite",
    description:
      "A Krishna Janmashtami special evening of devotional club beats featuring AJ The DJ for the Cary community.",
    cta: "Get Tickets",
  },
  {
    title: "RHYTHM & RAAS Garba'26",
    date: "October 2, 2026",
    time: "7:30 PM EDT",
    doorsOpen: "7:00 PM EDT",
    location: "Haveli, Apex, NC",
    venue: "Haveli, 795 Beaver Creek Rd, Apex, NC 27502",
    type: "Navratri / Dandiya / Live Music",
    image: "/images/events/rhythm-raas-garba-2026.png",
    imageAspect: "portrait",
    link: "https://events.sulekha.com/rhythm-raas-garba-26_event-in_apex-nc_401333",
    startDate: "2026-10-02T19:30:00-04:00",
    price: "Adult $20, kids 6+ $10, early bird $15",
    description:
      "A live Garba night with music, food truck, free parking, and an all-ages community celebration at Haveli.",
    cta: "Buy Tickets",
  },
  {
    title: "Garba Dandiya Night with DJ Kash",
    date: "September 19, 2026",
    time: "6:00 PM - 10:00 PM EDT",
    location: "Fuquay-Varina High School",
    venue: "Fuquay-Varina High School",
    type: "Garba / Dandiya / DJ Night",
    image: "/images/events/iafv-garba-dandiya-night-2026.png",
    imageAspect: "landscape",
    link: "https://iafvnc.org/",
    startDate: "2026-09-19T18:00:00-04:00",
    price: "$20 early bird, $25 at the door",
    description:
      "IAFV's Garba Dandiya Night features DJ Kash, a 6:15 PM Garba lesson included with entry, and vendor and sponsor opportunities.",
    cta: "Event Info",
  },
]
