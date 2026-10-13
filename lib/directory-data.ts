export interface BusinessListing {
  id: string
  slug: string
  name: string
  category:
    | "restaurants"
    | "groceries"
    | "temples"
    | "immigration"
    | "real-estate"
    | "healthcare"
    | "finance"
    | "education"
    | "fashion"
    | "events"
  categoryLabel: string
  city: "Morrisville" | "Cary" | "Raleigh" | "Durham" | "Apex" | "Chapel Hill" | "Wake Forest" | "RTP"
  address: string
  phone: string
  website?: string
  email?: string
  isFeatured?: boolean
  rating: number
  reviewCount: number
  shortDescription: string
  fullDescription: string
  services: string[]
  offer?: string
  audioAdUrl?: string
}

export const DIRECTORY_CATEGORIES = [
  { id: "all", label: "All Categories" },
  { id: "restaurants", label: "Restaurants & Dining" },
  { id: "groceries", label: "Indian Groceries & Spices" },
  { id: "temples", label: "Temples & Cultural Centers" },
  { id: "immigration", label: "Immigration & Legal" },
  { id: "real-estate", label: "Real Estate & Mortgages" },
  { id: "healthcare", label: "Healthcare & Dental" },
  { id: "finance", label: "Tax & Financial Services" },
  { id: "education", label: "Arts, Dance & Tutoring" },
  { id: "fashion", label: "Fashion & Jewelry" },
  { id: "events", label: "Event Vendors & DJs" },
]

export const BUSINESS_DIRECTORY: BusinessListing[] = [
  {
    id: "patel-brothers-cary",
    slug: "patel-brothers-cary",
    name: "Patel Brothers Cary",
    category: "groceries",
    categoryLabel: "Indian Groceries & Spices",
    city: "Cary",
    address: "770 Maynard Rd, Cary, NC 27511",
    phone: "(919) 463-5500",
    website: "https://www.patelbros.com",
    isFeatured: true,
    rating: 4.8,
    reviewCount: 382,
    shortDescription: "The Triangle's premier Indian supermarket offering regional groceries, fresh produce, and festive treats.",
    fullDescription:
      "Patel Brothers in Cary is the cornerstone Indian grocery destination for families across Cary, Morrisville, Apex, and Raleigh. Offering an unparalleled collection of premium flours, lentils, fresh South Asian vegetables, frozen foods, spices, and puja accessories.",
    services: ["Fresh Produce", "Imported Spices", "Frozen Indian Meals", "Pooja Supplies", "Snacks & Sweets"],
    offer: "Special Diwali and festival offers available every weekend",
  },
  {
    id: "sv-temple-cary",
    slug: "sv-temple-cary",
    name: "Sri Venkateswara Temple of North Carolina",
    category: "temples",
    categoryLabel: "Temples & Cultural Centers",
    city: "Cary",
    address: "121 Balaji Pl, Cary, NC 27513",
    phone: "(919) 468-0040",
    website: "https://svtemple.org",
    isFeatured: true,
    rating: 4.9,
    reviewCount: 920,
    shortDescription: "Renowned traditional Hindu temple dedicated to Lord Balaji, serving the East Coast diaspora.",
    fullDescription:
      "SV Temple of North Carolina is a magnificent spiritual and cultural sanctuary constructed according to traditional Vedic Agama Shastras. Hosting daily pujas, archana, weekend annadanam, festivals like Brahmotsavam, and youth cultural classes.",
    services: ["Daily Darshan & Archana", "Priest Puja Services", "Annadanam Canteen", "Vedic & Sloka Classes", "Festival Celebrations"],
  },
  {
    id: "nazara-indian-bistro",
    slug: "nazara-indian-bistro",
    name: "Nazara Indian Bistro",
    category: "restaurants",
    categoryLabel: "Restaurants & Dining",
    city: "Cary",
    address: "1945 High House Rd, Cary, NC 27519",
    phone: "(919) 694-5353",
    website: "https://nazaranc.com",
    isFeatured: true,
    rating: 4.7,
    reviewCount: 450,
    shortDescription: "Upscale North and South Indian dining destination with modern cocktail lounge and private banquet catering.",
    fullDescription:
      "Nazara Indian Bistro blends contemporary elegance with authentic Indian recipes. Renowned for its rich Awadhi gravies, dum biryanis, tandoori kebabs, and handcrafted cocktails.",
    services: ["Dine-In & Takeout", "Corporate Catering", "Private Events & Banquets", "Cocktail Bar", "Online Ordering"],
    offer: "10% off corporate lunch orders when mentioning Radio Nyra",
  },
  {
    id: "baps-mandir-morrisville",
    slug: "baps-mandir-morrisville",
    name: "BAPS Shri Swaminarayan Mandir",
    category: "temples",
    categoryLabel: "Temples & Cultural Centers",
    city: "Morrisville",
    address: "10200 Aviation Pkwy, Morrisville, NC 27560",
    phone: "(919) 469-6605",
    website: "https://www.baps.org",
    isFeatured: true,
    rating: 4.9,
    reviewCount: 610,
    shortDescription: "Inspiring spiritual community center offering worship, youth development, and cultural seva.",
    fullDescription:
      "BAPS Shri Swaminarayan Mandir in Morrisville welcomes devotees and visitors of all backgrounds. Featuring Sunday assemblies, Gujarati and Hindi language education, Diwali Annakut celebrations, and community blood drives.",
    services: ["Daily Aarti", "Sunday Satsang Assemblies", "Gujarati Language School", "Health Fairs & Blood Drives", "Premvati Food Court"],
  },
  {
    id: "tower-indian-restaurant",
    slug: "tower-indian-restaurant",
    name: "Tower Indian Restaurant",
    category: "restaurants",
    categoryLabel: "Restaurants & Dining",
    city: "Morrisville",
    address: "144 Morrisville Square Way, Morrisville, NC 27560",
    phone: "(919) 465-2426",
    rating: 4.6,
    reviewCount: 310,
    shortDescription: "Authentic South Indian pure vegetarian restaurant renowned for crispy ghee roasts and filter coffee.",
    fullDescription:
      "Tower Indian Restaurant is a beloved Morrisville staple for genuine South Indian vegetarian gastronomy, including varieties of dosas, uttapams, idlis, sambar vadas, and traditional Thali lunch platters.",
    services: ["Pure Vegetarian Dining", "Dosa Specialties", "Catering & Bulk Trays", "Takeout"],
  },
  {
    id: "triangle-immigration-law",
    slug: "triangle-immigration-law",
    name: "Triangle Global Immigration Attorneys",
    category: "immigration",
    categoryLabel: "Immigration & Legal",
    city: "Morrisville",
    address: "Davis Dr Tech Corridor, Morrisville, NC 27560",
    phone: "(919) 294-4850",
    isFeatured: true,
    rating: 4.9,
    reviewCount: 140,
    shortDescription: "Specialized business and family immigration practice handling H-1B, PERM, EB-1/EB-2 NIW, and citizenship.",
    fullDescription:
      "Providing expert immigration solutions to tech professionals, corporations, and families across the Research Triangle. Decades of combined experience in visa filings, consular processing, and green card adjustments.",
    services: ["H-1B & L-1 Visas", "PERM Labor Certification", "EB-1 / EB-2 NIW Petitions", "Family Green Cards", "Citizenship Consultations"],
    offer: "Free initial 20-minute phone evaluation for Radio Nyra listeners",
  },
  {
    id: "apex-spice-market",
    slug: "apex-spice-market",
    name: "Grand India Spices & Mart",
    category: "groceries",
    categoryLabel: "Indian Groceries & Spices",
    city: "Morrisville",
    address: "10283 Chapel Hill Rd, Morrisville, NC 27560",
    phone: "(919) 469-8999",
    rating: 4.5,
    reviewCount: 195,
    shortDescription: "Convenient neighborhood grocery market for fresh rotis, dairy, seasonal mangoes, and regional snacks.",
    fullDescription:
      "Family-owned South Asian grocery store stocked with rice varieties, dals, fresh herbs, imported snacks, and daily household puja items.",
    services: ["Indian Groceries", "Fresh Dairy & Paneer", "Seasonal Fruit Imports", "Household Pooja Needs"],
  },
  {
    id: "raleigh-kadhai-wok",
    slug: "raleigh-kadhai-wok",
    name: "Kadhai The Indian Wok",
    category: "restaurants",
    categoryLabel: "Restaurants & Dining",
    city: "Raleigh",
    address: "6300 Creedmoor Rd, Raleigh, NC 27612",
    phone: "(919) 785-2866",
    isFeatured: false,
    rating: 4.6,
    reviewCount: 280,
    shortDescription: "North Raleigh favorite serving signature kadhai curries, sizzling kebabs, and street food chaat.",
    fullDescription:
      "Kadhai brings rich homestyle flavors to North Raleigh with expertly seasoned meats, paneer dishes, freshly baked garlic naan, and spicy Indo-Chinese treats.",
    services: ["Dine-In", "Takeout & Delivery", "Corporate Lunch Buffets", "Party Catering"],
  },
  {
    id: "durham-sitar-cuisine",
    slug: "durham-sitar-cuisine",
    name: "Sitar Indian Cuisine",
    category: "restaurants",
    categoryLabel: "Restaurants & Dining",
    city: "Durham",
    address: "3630 Durham-Chapel Hill Blvd, Durham, NC 27707",
    phone: "(919) 490-1326",
    isFeatured: false,
    rating: 4.5,
    reviewCount: 390,
    shortDescription: "Historic Durham favorite offering expansive Indian buffets and a broad array of regional favorites.",
    fullDescription:
      "Serving the Durham and Duke University community for over two decades with generous lunch specials, curries, and warm hospitality.",
    services: ["All-You-Can-Eat Buffet", "Dinner Service", "Student Discounts", "Private Catering"],
  },
  // ── RALEIGH ──────────────────────────────────────────────────────────────
  {
    id: "raleigh-temple-shiva-vishnu",
    slug: "raleigh-temple-shiva-vishnu",
    name: "Hindu Temple & Cultural Center (HTCC) Raleigh",
    category: "temples",
    categoryLabel: "Temples & Cultural Centers",
    city: "Raleigh",
    address: "1700 Louis Stephens Dr, Cary, NC 27519",
    phone: "(919) 303-8882",
    website: "https://www.htccnc.org",
    isFeatured: true,
    rating: 4.8,
    reviewCount: 540,
    shortDescription: "Premier Hindu temple hosting Shiva, Vishnu, and Subramanya shrines with daily puja and cultural programs.",
    fullDescription:
      "The Hindu Temple & Cultural Center serves as the spiritual anchor for the Raleigh-Cary South Asian community. Daily abhishekams, weekly Sahasranama chanting, Navratri celebrations, and annual Brahmotsavam draw thousands from across the Triangle.",
    services: ["Daily Puja & Abhishekam", "Cultural Classes", "Sanskrit School", "Annadanam", "Wedding Venue"],
  },
  {
    id: "raleigh-patel-grocery",
    slug: "raleigh-patel-grocery",
    name: "Swad Indian Grocery Raleigh",
    category: "groceries",
    categoryLabel: "Indian Groceries & Spices",
    city: "Raleigh",
    address: "3800 Hillsborough St, Raleigh, NC 27607",
    phone: "(919) 834-0808",
    rating: 4.5,
    reviewCount: 220,
    shortDescription: "Central Raleigh's go-to Indian grocery for freshly prepared foods, spices, and regional imports.",
    fullDescription:
      "Swad stocks an exceptional range of Indian, Pakistani, and Sri Lankan pantry essentials, including imported basmati rice, premium besan flour, pickles, ready-to-eat meals, frozen paratha, and specialty festival sweets.",
    services: ["Indian Groceries", "Fresh Snacks & Sweets", "Frozen Meals", "Halal Section"],
  },
  {
    id: "raleigh-immigration-advisor",
    slug: "raleigh-immigration-advisor",
    name: "Capital Immigration & Visa Services",
    category: "immigration",
    categoryLabel: "Immigration & Legal",
    city: "Raleigh",
    address: "3700 National Dr, Raleigh, NC 27612",
    phone: "(919) 782-4444",
    isFeatured: true,
    rating: 4.8,
    reviewCount: 98,
    shortDescription: "Raleigh's trusted immigration firm for H-1B, OPT, green card, and citizenship filings.",
    fullDescription:
      "Capital Immigration assists tech workers, university students, and families across Raleigh and the Triangle with employment-based visas, PERM petitions, family reunification, naturalization, and consular interview preparation.",
    services: ["H-1B Extensions & Transfers", "F-1 OPT & STEM OPT", "EB-2 & EB-3 Green Cards", "Family Petitions", "Citizenship"],
    offer: "Free 30-minute consultation for Radio Nyra listeners",
  },
  // ── APEX ─────────────────────────────────────────────────────────────────
  {
    id: "apex-india-spice",
    slug: "apex-india-spice",
    name: "India Spice & Grocery Apex",
    category: "groceries",
    categoryLabel: "Indian Groceries & Spices",
    city: "Apex",
    address: "1401 Laura Duncan Rd, Apex, NC 27502",
    phone: "(919) 363-5959",
    rating: 4.6,
    reviewCount: 175,
    shortDescription: "Family-run grocery store in Apex serving South Asian pantry staples, fresh produce, and imported sweets.",
    fullDescription:
      "A neighbourhood staple for Apex families, stocking South Indian, North Indian, and Pakistani specialties including fresh dosas-ready batter, homemade pickles, regional snack imports, and monthly festival sweets.",
    services: ["South Indian Staples", "Homemade Pickles & Chutneys", "Festival Sweets", "Monthly Import Boxes"],
  },
  {
    id: "apex-desi-dhaba",
    slug: "apex-desi-dhaba",
    name: "Desi Junction Apex",
    category: "restaurants",
    categoryLabel: "Restaurants & Dining",
    city: "Apex",
    address: "1010 N Salem St, Apex, NC 27502",
    phone: "(919) 267-3030",
    rating: 4.5,
    reviewCount: 155,
    shortDescription: "Casual Indian and Indo-Chinese diner popular with Apex families for quick lunch thalis and spicy noodles.",
    fullDescription:
      "Desi Junction brings the spirit of a Mumbai street diner to Apex, NC. Signature items include chicken tikka masala, Manchurian rice, schezwan noodles, and a rotating daily thali special.",
    services: ["Dine-In", "Takeout", "Catering Trays", "Family Meal Deals"],
  },
  // ── CHAPEL HILL ──────────────────────────────────────────────────────────
  {
    id: "chapel-hill-tantra",
    slug: "chapel-hill-tantra",
    name: "Tantra Indian Cuisine Chapel Hill",
    category: "restaurants",
    categoryLabel: "Restaurants & Dining",
    city: "Chapel Hill",
    address: "140 West Franklin St, Chapel Hill, NC 27516",
    phone: "(919) 967-2722",
    isFeatured: false,
    rating: 4.6,
    reviewCount: 430,
    shortDescription: "Upscale Indian dining on Franklin Street beloved by UNC students, faculty, and Chapel Hill diners.",
    fullDescription:
      "Tantra has anchored Franklin Street for years with its aromatic curries, tandoori platters, and extensive vegetarian menu. A reliable choice for UNC-Chapel Hill dinners and special occasions.",
    services: ["Dine-In", "Lunch Buffet", "Takeout", "Vegan & Vegetarian Menu", "Weekend Specials"],
  },
  {
    id: "chapel-hill-spice-indian-grocery",
    slug: "chapel-hill-spice-indian-grocery",
    name: "Desi Spice Indian Market Chapel Hill",
    category: "groceries",
    categoryLabel: "Indian Groceries & Spices",
    city: "Chapel Hill",
    address: "15-501 Bypass, Chapel Hill, NC 27516",
    phone: "(919) 969-0099",
    rating: 4.4,
    reviewCount: 120,
    shortDescription: "South Indian and North Indian grocery for UNC community and Chapel Hill families.",
    fullDescription:
      "Desi Spice is the primary Indian grocery stop for Chapel Hill and Carrboro families, offering idly rice, urad dal, assorted pickles, Indian sweets, and a fresh chaat counter on weekends.",
    services: ["Indian Groceries", "Fresh Chaat Counter (Weekends)", "Imported Snacks", "Puja Supplies"],
  },
  // ── WAKE FOREST ──────────────────────────────────────────────────────────
  {
    id: "wake-forest-indian-kitchen",
    slug: "wake-forest-indian-kitchen",
    name: "Saffron Indian Kitchen Wake Forest",
    category: "restaurants",
    categoryLabel: "Restaurants & Dining",
    city: "Wake Forest",
    address: "11745 Retail Dr, Wake Forest, NC 27587",
    phone: "(919) 761-2828",
    isFeatured: false,
    rating: 4.7,
    reviewCount: 195,
    shortDescription: "Warm neighborhood Indian restaurant in Wake Forest serving classic curries and family platters.",
    fullDescription:
      "Saffron Indian Kitchen is the go-to dinner spot for Indian families across North Wake County. Known for their slow-cooked kormas, succulent tikkas, and fresh-baked tandoori breads.",
    services: ["Dine-In", "Takeout & Delivery", "Catering for Events", "Family Combo Meals"],
  },
  {
    id: "wake-forest-desi-mart",
    slug: "wake-forest-desi-mart",
    name: "Desi Mart Wake Forest",
    category: "groceries",
    categoryLabel: "Indian Groceries & Spices",
    city: "Wake Forest",
    address: "12440 Capital Blvd, Wake Forest, NC 27587",
    phone: "(919) 554-3344",
    rating: 4.3,
    reviewCount: 88,
    shortDescription: "Convenient Indian grocery for Wake Forest and Rolesville families with regional staples and sweets.",
    fullDescription:
      "Desi Mart serves North Wake County residents with an assortment of Indian pantry items, frozen foods, spice blends, and a selection of Halal meat products.",
    services: ["Indian Groceries", "Halal Meat", "Frozen Indian Meals", "Festive Sweets"],
  },
  // ── RTP ──────────────────────────────────────────────────────────────────
  {
    id: "rtp-india-garden",
    slug: "rtp-india-garden",
    name: "India Garden RTP",
    category: "restaurants",
    categoryLabel: "Restaurants & Dining",
    city: "RTP",
    address: "4800 Hopson Rd, Morrisville, NC 27560",
    phone: "(919) 469-7882",
    isFeatured: true,
    rating: 4.7,
    reviewCount: 310,
    shortDescription: "Corporate lunch favorite at RTP with fresh Indian buffet, box lunches, and catering for tech offices.",
    fullDescription:
      "India Garden at RTP serves hundreds of tech professionals daily with a rotating fresh buffet and build-your-own lunch box service. Popular with Cisco, Lenovo, Credit Suisse, and Red Hat campus employees.",
    services: ["Corporate Lunch Buffet", "Office Box Lunches", "Catering for Tech Campuses", "Takeout & Delivery"],
    offer: "15% discount on office orders of 10+ meals — mention Radio Nyra",
  },
  {
    id: "rtp-diversity-immigration",
    slug: "rtp-diversity-immigration",
    name: "Triangle Diversity Law Group",
    category: "immigration",
    categoryLabel: "Immigration & Legal",
    city: "RTP",
    address: "2530 Meridian Pkwy, Durham, NC 27713",
    phone: "(919) 361-0800",
    isFeatured: true,
    rating: 4.9,
    reviewCount: 175,
    shortDescription: "RTP's premier immigration law firm specializing in corporate immigration for tech multinationals.",
    fullDescription:
      "Triangle Diversity Law Group serves corporate clients at Cisco, IBM, SAS, and hundreds of Triangle tech companies with comprehensive immigration compliance, H-1B cap petitions, L-1 transfers, and EB-1C executive immigration.",
    services: ["Corporate H-1B Programs", "L-1 & O-1 Visas", "EB-1C Executive Green Card", "I-9 Compliance Audits", "Global Mobility"],
    offer: "Free HR immigration audit for new corporate clients",
  },
  // ── DURHAM ───────────────────────────────────────────────────────────────
  {
    id: "durham-india-grocers",
    slug: "durham-india-grocers",
    name: "Mirchi Indian Grocery Durham",
    category: "groceries",
    categoryLabel: "Indian Groceries & Spices",
    city: "Durham",
    address: "5410 Durham-Chapel Hill Blvd, Durham, NC 27707",
    phone: "(919) 493-3200",
    rating: 4.5,
    reviewCount: 210,
    shortDescription: "Durham's well-stocked Indian grocery with a large spice aisle, fresh produce, and Indian snack imports.",
    fullDescription:
      "Mirchi Indian Grocery in Durham is popular with Duke University students, RTP professionals, and local families for its competitive pricing, wide selection, and knowledgeable staff who source specialty regional products.",
    services: ["Indian Groceries", "Fresh Produce", "Imported Snacks & Drinks", "Bulk Spices", "Puja Supplies"],
  },
]

export const getBusinessesByCategory = (cat: string) => {
  if (!cat || cat === "all") return BUSINESS_DIRECTORY
  return BUSINESS_DIRECTORY.filter((b) => b.category.toLowerCase() === cat.toLowerCase())
}

export const getBusinessesByCity = (city: string) => {
  if (!city || city === "all") return BUSINESS_DIRECTORY
  return BUSINESS_DIRECTORY.filter((b) => b.city.toLowerCase() === city.toLowerCase())
}
