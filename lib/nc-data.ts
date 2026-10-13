export interface NCCity {
  id: string
  slug: string
  name: string
  county: string
  tagline: string
  description: string
  population: string
  indianPopulationShare: string
  listenDetails: {
    frequency: string
    hdChannelHindi: string
    hdChannelTelugu: string
    receptionTips: string
  }
  hotspots: {
    name: string
    type: "Temple" | "Grocery" | "Restaurant" | "Cultural" | "Tech Hub"
    address: string
    description: string
  }[]
  communityHighlights: string[]
  keyResources: {
    title: string
    description: string
    linkText?: string
    href?: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const NC_CITIES: NCCity[] = [
  {
    id: "morrisville",
    slug: "morrisville",
    name: "Morrisville",
    county: "Wake County",
    tagline: "The Vibrant Heart of the Triangle's South Asian Community",
    description:
      "Morrisville is one of America's most dynamic multicultural towns, with Asian residents comprising ~46% of the population and Asian Indians representing ~36%. Home to bustling cricket leagues, premier Hindu temples, Diwali at Town Hall, and thriving tech professionals.",
    population: "31,000+",
    indianPopulationShare: "~36% Asian Indian",
    listenDetails: {
      frequency: "99.9 FM",
      hdChannelHindi: "99.9 HD4 (Hindi - Radio Nyra)",
      hdChannelTelugu: "99.9 HD3 (Telugu - Radio Nyra / RTV)",
      receptionTips:
        "Crystal clear HD Radio signal throughout Morrisville Parkway, Davis Drive, and Town Hall Drive. Also stream live 24/7 on RadioNyra.com and our mobile apps.",
    },
    hotspots: [
      {
        name: "BAPS Shri Swaminarayan Mandir",
        type: "Temple",
        address: "10200 Aviation Pkwy, Morrisville, NC",
        description: "Prominent Hindu mandir and spiritual center hosting traditional festivals, youth activities, and community seva.",
      },
      {
        name: "Grand India Mart & Spices",
        type: "Grocery",
        address: "10283 Chapel Hill Rd, Morrisville, NC",
        description: "Full-service Indian grocery featuring fresh vegetables, snacks, South Asian cookware, and festive sweets.",
      },
      {
        name: "Tower Indian Restaurant",
        type: "Restaurant",
        address: "144 Morrisville Square Way, Morrisville, NC",
        description: "Popular authentic South Indian vegetarian cuisine famous for crispy dosas, idlis, and thalis.",
      },
      {
        name: "Church Street Cricket Park",
        type: "Cultural",
        address: "Church St, Morrisville, NC",
        description: "World-class professional cricket ground host to Major League Cricket (MLC) and local Triangle cricket tournaments.",
      },
    ],
    communityHighlights: [
      "Annual Morrisville Diwali festival with thousands of Triangle residents",
      "Premier Major League Cricket venue at Church Street Park",
      "Town Council recognized Indian cultural heritage months & community programs",
      "High concentration of Indian IT, biotech, and life sciences innovators",
    ],
    keyResources: [
      {
        title: "Town of Morrisville Cultural Resources",
        description: "Town community centers and park reservations for family and association gatherings.",
        href: "https://www.morrisvillenc.gov",
        linkText: "Town of Morrisville",
      },
      {
        title: "Morrisville Cricket Club & Leagues",
        description: "Adult and youth cricket training and weekend league schedules.",
        href: "/events",
        linkText: "Find Cricket Events",
      },
      {
        title: "Immigration & H-1B Legal Services in Morrisville",
        description: "Trusted local attorneys specializing in green cards, PERM, and corporate visas.",
        href: "/directory",
        linkText: "Browse Legal Directory",
      },
    ],
    faqs: [
      {
        question: "How do I tune into Radio Nyra in Morrisville?",
        answer:
          "Tune your car radio to 99.9 FM, then select HD4 for Radio Nyra Hindi or HD3 for Radio Nyra Telugu. You can also stream online with zero buffering on radionyra.com.",
      },
      {
        question: "What Indian festivals are celebrated in Morrisville?",
        answer:
          "Diwali, Holi, Ganesh Chaturthi, Ugadi, and Sankranti are celebrated widely at Town Hall, local parks, and surrounding community mandirs.",
      },
    ],
  },
  {
    id: "cary",
    slug: "cary",
    name: "Cary",
    county: "Wake & Chatham Counties",
    tagline: "Premier Culture, Indian Dining, and Family Celebrations",
    description:
      "Cary is renowned for exceptional schools, scenic parks, and a deep-rooted South Asian diaspora. With premier landmark institutions like Sri Venkateswara Temple of North Carolina and a bustling culinary row along High House and Maynard Roads.",
    population: "176,000+",
    indianPopulationShare: "12%+ South Asian",
    listenDetails: {
      frequency: "99.9 FM",
      hdChannelHindi: "99.9 HD4 (Hindi - Radio Nyra)",
      hdChannelTelugu: "99.9 HD3 (Telugu - Radio Nyra / RTV)",
      receptionTips:
        "Full metropolitan HD radio coverage across Kildaire Farm Rd, Cary Parkway, High House Rd, and Downtown Cary.",
    },
    hotspots: [
      {
        name: "Sri Venkateswara Temple of North Carolina (SV Temple)",
        type: "Temple",
        address: "121 Balaji Pl, Cary, NC",
        description: "One of the most visited and venerated South Indian Hindu temples on the East Coast, honoring Lord Balaji.",
      },
      {
        name: "Patel Brothers Cary",
        type: "Grocery",
        address: "770 Maynard Rd, Cary, NC",
        description: "The Triangle's benchmark South Asian supermarket stocking regional Indian produce, lentils, and festive puja supplies.",
      },
      {
        name: "Nazara Indian Bistro",
        type: "Restaurant",
        address: "1945 High House Rd, Cary, NC",
        description: "Upscale North and South Indian dining known for aromatic biryanis, curries, and modern cocktails.",
      },
      {
        name: "Koka Booth Amphitheatre",
        type: "Cultural",
        address: "8003 Regent Pkwy, Cary, NC",
        description: "Premier outdoor venue hosting mega Diwali festivals, Bollywood concerts, and community celebrations.",
      },
    ],
    communityHighlights: [
      "Annual Cary Diwali Celebration at Koka Booth Amphitheatre",
      "Vibrant music, classical Carnatic and Hindustani academies",
      "Active Telugu Association (TTA/TANA) and Tamil Sangam local chapters",
      "Top-rated Wake County public and charter schools with high STEM enrollment",
    ],
    keyResources: [
      {
        title: "Cary Classical Music & Dance Schools",
        description: "Bharatanatyam, Kuchipudi, Kathak, and Carnatic vocal institutes for all ages.",
        href: "/directory",
        linkText: "Explore Academies",
      },
      {
        title: "Cary Indian Dining Guide",
        description: "From Chettinad dosas to Punjabi tandoor, discover the best eateries in town.",
        href: "/community/restaurants",
        linkText: "View Restaurants",
      },
    ],
    faqs: [
      {
        question: "Where can I hear Telugu and Hindi radio while driving in Cary?",
        answer:
          "Switch your car receiver to 99.9 FM. On digital HD radio, HD4 broadcasts Radio Nyra Hindi and HD3 broadcasts Radio Nyra Telugu including daily RTV news bulletins.",
      },
    ],
  },
  {
    id: "raleigh",
    slug: "raleigh",
    name: "Raleigh",
    county: "Wake County",
    tagline: "The Capital City Hub for Diaspora Festivals and Business Growth",
    description:
      "As North Carolina's capital city and home to NC State University, Raleigh combines vibrant urban energy with a fast-growing Indian professional, student, and entrepreneurial network.",
    population: "475,000+",
    indianPopulationShare: "Growing Hub across North & West Raleigh",
    listenDetails: {
      frequency: "99.9 FM",
      hdChannelHindi: "99.9 HD4 (Hindi - Radio Nyra)",
      hdChannelTelugu: "99.9 HD3 (Telugu - Radio Nyra / RTV)",
      receptionTips:
        "High-power transmitter coverage across the I-440 Beltline, I-540, Glenwood Ave, and NC State University campus.",
    },
    hotspots: [
      {
        name: "Hindu Society of North Carolina (HSNC)",
        type: "Temple",
        address: "309 Aviation Pkwy, Morrisville/Raleigh border, NC",
        description: "Pivotal cultural and spiritual organization serving the Greater Raleigh-Durham area for over 35 years.",
      },
      {
        name: "Kadhai The Indian Wok",
        type: "Restaurant",
        address: "6300 Creedmoor Rd, Raleigh, NC",
        description: "North Raleigh favorite for North Indian street food, Mughlai gravies, and fresh tandoor breads.",
      },
      {
        name: "NC State South Asian Student Association",
        type: "Cultural",
        address: "NC State University, Raleigh, NC",
        description: "Active student organization hosting Garba nights, fusion dance competitions, and cultural showcases.",
      },
    ],
    communityHighlights: [
      "India Fest Raleigh at the Jim Graham Building / State Fairgrounds",
      "Major state-level South Asian business networking and TiE Carolinas events",
      "Vibrant university student organizations across engineering and technology",
    ],
    keyResources: [
      {
        title: "Raleigh Indian Events & Concerts",
        description: "Live Bollywood tours, comedy gigs, and cultural exhibitions.",
        href: "/events",
        linkText: "Raleigh Events",
      },
    ],
    faqs: [
      {
        question: "Can I advertise my Raleigh business on Radio Nyra?",
        answer:
          "Yes! Radio Nyra provides 99.9 FM HD radio spots, digital banners, podcasts, WhatsApp community blasts, and social campaigns reaching 100K+ listeners across Raleigh.",
      },
    ],
  },
  {
    id: "durham",
    slug: "durham",
    name: "Durham",
    county: "Durham County",
    tagline: "Home of Radio Nyra Studios, Duke University, and Healthcare Innovation",
    description:
      "Durham is the creative and broadcast heart of Radio Nyra, with our primary broadcasting headquarters located on Emperor Blvd. Durham blends world-class medical and academic prowess with a progressive South Asian diaspora.",
    population: "290,000+",
    indianPopulationShare: "Key Medical & Academic Community",
    listenDetails: {
      frequency: "99.9 FM",
      hdChannelHindi: "99.9 HD4 (Hindi - Radio Nyra)",
      hdChannelTelugu: "99.9 HD3 (Telugu - Radio Nyra / RTV)",
      receptionTips:
        "Flawless coverage around Emperor Blvd, I-40, Durham Freeway (NC-147), Duke Hospital, and Downtown Durham.",
    },
    hotspots: [
      {
        name: "Radio Nyra Broadcast Studios",
        type: "Cultural",
        address: "4819 Emperor Blvd Suite 400, Durham, NC 27703",
        description: "Official studio and operations headquarters for Radio Nyra, hosting daily live shows and community guests.",
      },
      {
        name: "Sitar Indian Cuisine",
        type: "Restaurant",
        address: "3630 Durham-Chapel Hill Blvd, Durham, NC",
        description: "Beloved Durham institution offering traditional North Indian and South Indian lunch buffets and dinner specialties.",
      },
      {
        name: "Duke University Diya (South Asian Association)",
        type: "Cultural",
        address: "Duke University, Durham, NC",
        description: "Hub for undergraduate and graduate South Asian scholars, cultural showcases, and professional mentorship.",
      },
    ],
    communityHighlights: [
      "Radio Nyra Emperor Blvd On-Air Studios with live guest interviews",
      "Deep ties with Duke Health, biotech startups, and clinical research professionals",
      "Annual cultural celebrations across Bull City and university campuses",
    ],
    keyResources: [
      {
        title: "Visit Radio Nyra Studios",
        description: "Book an interview, tour our studio, or sponsor local programming.",
        href: "/contact",
        linkText: "Contact Durham Studio",
      },
    ],
    faqs: [
      {
        question: "Where are Radio Nyra studios located?",
        answer: "Our main studios are at 4819 Emperor Blvd Suite 400, Durham, NC 27703.",
      },
    ],
  },
  {
    id: "apex",
    slug: "apex",
    name: "Apex",
    county: "Wake County",
    tagline: "The Peak of Good Living for Families, Sports, and Culture",
    description:
      "Apex continues to be celebrated as one of North Carolina's top family towns. With peaceful suburban neighborhoods, expanding cricket facilities, and a tight-knit South Asian family community.",
    population: "75,000+",
    indianPopulationShare: "Rapidly expanding family diaspora",
    listenDetails: {
      frequency: "99.9 FM",
      hdChannelHindi: "99.9 HD4 (Hindi - Radio Nyra)",
      hdChannelTelugu: "99.9 HD3 (Telugu - Radio Nyra / RTV)",
      receptionTips: "Strong reception along Highway 55, Beaver Creek, and US-1.",
    },
    hotspots: [
      {
        name: "Beaver Creek Crossings & Commons",
        type: "Cultural",
        address: "Apex, NC 27502",
        description: "Premier shopping and dining district serving Apex and Cary families.",
      },
      {
        name: "Indian Spice House & Eatery",
        type: "Grocery",
        address: "Hwy 55 Corridor, Apex, NC",
        description: "Convenient grocery store for spices, flours, fresh snacks, and daily essentials.",
      },
    ],
    communityHighlights: [
      "Apex PeakFest & multicultural family participation",
      "Youth sports, cricket academies, and chess clubs with active community involvement",
    ],
    keyResources: [
      {
        title: "Apex Family Events",
        description: "Find family-friendly weekend events in Apex and southern Wake.",
        href: "/events",
        linkText: "Explore Apex Events",
      },
    ],
    faqs: [
      {
        question: "Can I receive 99.9 FM HD in Apex?",
        answer: "Yes, 99.9 FM HD3 and HD4 have strong reception across Apex and Friendship.",
      },
    ],
  },
  {
    id: "chapel-hill",
    slug: "chapel-hill",
    name: "Chapel Hill",
    county: "Orange County",
    tagline: "Academic Excellence, Student Culture, and Carolina Spirit",
    description:
      "Home to the University of North Carolina at Chapel Hill, Chapel Hill is a vibrant college town with vibrant South Asian student societies, faculty, and intellectual life.",
    population: "62,000+",
    indianPopulationShare: "Strong university student & academic presence",
    listenDetails: {
      frequency: "99.9 FM",
      hdChannelHindi: "99.9 HD4 (Hindi - Radio Nyra)",
      hdChannelTelugu: "99.9 HD3 (Telugu - Radio Nyra / RTV)",
      receptionTips: "Clear coverage across Franklin St, Fordham Blvd, and I-40 corridor.",
    },
    hotspots: [
      {
        name: "UNC Sangam",
        type: "Cultural",
        address: "UNC Chapel Hill, Chapel Hill, NC",
        description: "South Asian student organization hosting philanthropic events, cultural dance, and charity formals.",
      },
      {
        name: "Vimala's Curryblossom Cafe",
        type: "Restaurant",
        address: "431 W Franklin St, Chapel Hill, NC",
        description: "Community-driven Indian eatery emphasizing local, sustainable ingredients and traditional home recipes.",
      },
    ],
    communityHighlights: [
      "UNC South Asian Film Festival and campus cultural showcases",
      "Active alumni network in North Carolina medicine, law, and business",
    ],
    keyResources: [
      {
        title: "UNC South Asian Student Guide",
        description: "Student resources, roommate finding, and local campus associations.",
        href: "/community",
        linkText: "Community Guide",
      },
    ],
    faqs: [
      {
        question: "How can UNC students listen to Radio Nyra?",
        answer: "Stream anytime through radionyra.com or the Radio Nyra iOS/Android app, or tune to 99.9 FM HD3/HD4.",
      },
    ],
  },
  {
    id: "wake-forest",
    slug: "wake-forest",
    name: "Wake Forest",
    county: "Wake County",
    tagline: "Serene Suburban Living for Growing Diaspora Families",
    description:
      "Wake Forest offers tranquil historic charm coupled with fast-growing residential communities that attract young South Asian tech professionals looking for spacious family living.",
    population: "52,000+",
    indianPopulationShare: "Growing northern Triangle hub",
    listenDetails: {
      frequency: "99.9 FM",
      hdChannelHindi: "99.9 HD4 (Hindi - Radio Nyra)",
      hdChannelTelugu: "99.9 HD3 (Telugu - Radio Nyra / RTV)",
      receptionTips: "Reception available on US-1 Capital Blvd and NC-98 corridor.",
    },
    hotspots: [
      {
        name: "Heritage & Wakefield Communities",
        type: "Cultural",
        address: "Wake Forest, NC",
        description: "Family-oriented neighborhoods with active resident cultural associations.",
      },
    ],
    communityHighlights: [
      "Active neighborhood Diwali and Holi get-togethers",
      "Commuter connection to Raleigh and RTP tech parks",
    ],
    keyResources: [
      {
        title: "Wake Forest Community Connections",
        description: "Connect with local families and community groups.",
        href: "/community",
        linkText: "Join WhatsApp Groups",
      },
    ],
    faqs: [
      {
        question: "Does Radio Nyra broadcast in Wake Forest?",
        answer: "Yes, 99.9 FM HD Radio covers northern Wake County including Wake Forest and Rolesville.",
      },
    ],
  },
  {
    id: "rtp",
    slug: "rtp",
    name: "RTP (Research Triangle Park)",
    county: "Durham & Wake Counties",
    tagline: "The Innovation Engine for South Asian Tech & Life Sciences Leaders",
    description:
      "Research Triangle Park is North America's largest research park, powered by thousands of South Asian software engineers, data scientists, biotech innovators, and executives.",
    population: "50,000+ daily workforce",
    indianPopulationShare: "Major tech & corporate demographic",
    listenDetails: {
      frequency: "99.9 FM",
      hdChannelHindi: "99.9 HD4 (Hindi - Radio Nyra)",
      hdChannelTelugu: "99.9 HD3 (Telugu - Radio Nyra / RTV)",
      receptionTips: "Maximum signal strength throughout all corporate campuses and tech corridors.",
    },
    hotspots: [
      {
        name: "The Frontier RTP",
        type: "Tech Hub",
        address: "800 Park Offices Dr, RTP, NC",
        description: "Vibrant co-working and startup hub frequently hosting tech meetups, TiE Carolinas, and investor conferences.",
      },
      {
        name: "Boxyard RTP",
        type: "Cultural",
        address: "900 Park Offices Dr, RTP, NC",
        description: "Open-air dining and events complex popular for workday lunches and community gatherings.",
      },
    ],
    communityHighlights: [
      "TiE Carolinas entrepreneurship conferences & pitch competitions",
      "Professional Indian IT, AI, Pharma, and Biotech symposiums",
      "Daily commuter radio choice for tens of thousands of professionals",
    ],
    keyResources: [
      {
        title: "Corporate Sponsorship & B2B Campaigns",
        description: "Target decision-makers and tech professionals with Radio Nyra on-air and digital packages.",
        href: "/advertise",
        linkText: "B2B Advertising",
      },
    ],
    faqs: [
      {
        question: "Why advertise to the RTP community on Radio Nyra?",
        answer:
          "Radio Nyra captures peak commuter drive time (morning and evening) with high-earning South Asian tech leaders traveling to and from RTP.",
      },
    ],
  },
]

export const getCityBySlug = (slug: string): NCCity | undefined => {
  return NC_CITIES.find((c) => c.slug.toLowerCase() === slug.toLowerCase())
}
