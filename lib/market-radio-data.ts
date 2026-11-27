export interface CityRadioMarket {
  slug: string
  path: string
  city: string
  state: string
  regionLabel: string
  frequency: string
  hostInfo: string
  coverage: string[]
  searchPhrase: string
  description: string
  advertiserCopy: string
}

export const CITY_RADIO_MARKETS: CityRadioMarket[] = [
  {
    slug: "atlanta",
    path: "/atlanta-radio",
    city: "Atlanta",
    state: "GA",
    regionLabel: "Atlanta Metro",
    frequency: "107.5 FM HD3 WAMJ and 24/7 digital stream",
    hostInfo: "Hindi and Indian Subcontinent music blocks anchored by Radio Nyra network hosts, with community spotlights for Alpharetta, Johns Creek, Duluth, Cumming, and Marietta.",
    coverage: ["Atlanta", "Alpharetta", "Johns Creek", "Duluth", "Cumming", "Marietta"],
    searchPhrase: "Indian radio Atlanta",
    description: "Radio Nyra Atlanta connects Georgia's Indian Subcontinent community with Hindi music, event coverage, interviews, and advertiser opportunities.",
    advertiserCopy: "Reach Indian Subcontinent families, tech professionals, entrepreneurs, and eventgoers across the Atlanta metro area.",
  },
  {
    slug: "baltimore-dc",
    path: "/baltimore-dc-radio",
    city: "Baltimore/DC",
    state: "MD",
    regionLabel: "Baltimore and Washington DC Corridor",
    frequency: "92.3 FM HD2 WERQ and 24/7 digital stream",
    hostInfo: "Radio Nyra network hosts serve Mid-Atlantic listeners with Hindi programming, community announcements, and DMV cultural coverage.",
    coverage: ["Baltimore", "Columbia", "Ellicott City", "Towson", "Annapolis", "Washington DC suburbs"],
    searchPhrase: "Indian radio Baltimore DC",
    description: "Radio Nyra Baltimore/DC serves the Mid-Atlantic Indian Subcontinent community with music, community news, and business promotion.",
    advertiserCopy: "Promote your brand to high-intent Indian Subcontinent audiences across Baltimore, Columbia, Ellicott City, and the DMV.",
  },
  {
    slug: "cleveland",
    path: "/cleveland-radio",
    city: "Cleveland",
    state: "OH",
    regionLabel: "Northeast Ohio",
    frequency: "93.1 FM HD2 WZAK and 24/7 digital stream",
    hostInfo: "Radio Nyra network hosts highlight Bollywood, regional music, local nonprofit updates, and student/professional stories from Northeast Ohio.",
    coverage: ["Cleveland", "Beachwood", "Solon", "Westlake", "Strongsville", "Greater Northeast Ohio"],
    searchPhrase: "Indian radio Cleveland",
    description: "Radio Nyra Cleveland brings Hindi music, Indian Subcontinent stories, events, and advertiser reach to Northeast Ohio.",
    advertiserCopy: "Connect with Northeast Ohio's Indian community through radio, digital audio, social amplification, and event sponsorships.",
  },
  {
    slug: "columbus",
    path: "/columbus-radio",
    city: "Columbus",
    state: "OH",
    regionLabel: "Central Ohio",
    frequency: "107.5 FM HD2 WCKX and 24/7 digital stream",
    hostInfo: "Radio Nyra network hosts cover music, culture, tech-community stories, and family events for Columbus and Dublin-area listeners.",
    coverage: ["Columbus", "Dublin", "Westerville", "New Albany", "Powell", "Central Ohio suburbs"],
    searchPhrase: "Indian radio Columbus Ohio",
    description: "Radio Nyra Columbus serves Central Ohio's Indian Subcontinent listeners with music, community coverage, and sponsor programs.",
    advertiserCopy: "Reach Central Ohio's tech, healthcare, university, and small-business communities through locally relevant campaigns.",
  },
  {
    slug: "philadelphia",
    path: "/philadelphia-radio",
    city: "Philadelphia",
    state: "PA",
    regionLabel: "Philadelphia Tri-State",
    frequency: "103.9 FM HD2 WPHI and 24/7 digital stream",
    hostInfo: "Radio Nyra network hosts connect Philly-area listeners with Hindi music, interviews, university stories, and Indian Subcontinent community calendars.",
    coverage: ["Philadelphia", "King of Prussia", "Bensalem", "Upper Darby", "Cherry Hill", "South Jersey"],
    searchPhrase: "Indian radio Philadelphia",
    description: "Radio Nyra Philadelphia connects Pennsylvania and South Jersey Indian Subcontinent communities through music, events, and media partnerships.",
    advertiserCopy: "Put your business in front of Philadelphia, King of Prussia, Cherry Hill, and Bensalem diaspora households.",
  },
  {
    slug: "st-louis",
    path: "/st-louis-radio",
    city: "St. Louis",
    state: "MO",
    regionLabel: "Greater St. Louis",
    frequency: "95.5 FM HD2 WFUN-FM and 24/7 digital stream",
    hostInfo: "Radio Nyra network hosts bring Hindi programming, community updates, and cultural storytelling to Missouri and Illinois listeners.",
    coverage: ["St. Louis", "Chesterfield", "St. Charles", "Creve Coeur", "Maryland Heights", "Metro East"],
    searchPhrase: "Indian radio St Louis",
    description: "Radio Nyra St. Louis serves Missouri and Illinois Indian Subcontinent listeners with live radio, events, and advertiser opportunities.",
    advertiserCopy: "Reach Indian Subcontinent families, professionals, and event communities across the St. Louis metro through trusted media.",
  },
]

export function getCityRadioMarket(slug: string) {
  return CITY_RADIO_MARKETS.find((market) => market.slug === slug)
}
