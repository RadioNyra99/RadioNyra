/**
 * Community Data Dataset for Radio Nyra
 */

export interface CommunityEvent {
    id: string;
    title: string;
    date: string;
    location: string;
    category: 'Festival' | 'Concert' | 'Networking' | 'Cultural' | 'Youth';
    image: string;
    description: string;
    organizer: string;
    ticketUrl?: string;
}

export interface FestivalCalendarItem {
    id: string;
    festivalName: string;
    date: string;
    significance: string;
    traditions: string;
    associatedShow?: string;
    image: string;
}

export interface BusinessDirectoryItem {
    id: string;
    name: string;
    category: 'Restaurant & Catering' | 'Grocery & Spices' | 'Real Estate & Mortgage' | 'Healthcare' | 'Financial & Tax Services' | 'Fashion & Jewelry';
    location: string;
    rating: number;
    phone: string;
    website: string;
    featured?: boolean;
}

export const COMMUNITY_EVENTS: CommunityEvent[] = [
    {
        id: "e1",
        title: "Grand Diwali Festival of Lights 2026",
        date: "October 24, 2026 • 4:00 PM EST",
        location: "Koka Booth Amphitheatre, Cary, NC",
        category: "Festival",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
        description: "Join North Carolina's largest Diwali festival presented by Radio Nyra! Live music, Bollywood dances, authentic Indian street food, craft vendors, and grand fireworks display.",
        organizer: "Radio Nyra & Triangle Cultural Association"
    },
    {
        id: "e2",
        title: "Ugadi & Gudi Padva Cultural Night",
        date: "March 29, 2026 • 5:30 PM EST",
        location: "Atlanta Civic Center, Atlanta, GA",
        category: "Cultural",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
        description: "Celebrate Telugu & Marathi New Year with classical dance performances, Panchanga Sravanam, Panchangam readings, and festive feast.",
        organizer: "Radio Nyra Telugu & GA Indian Society"
    },
    {
        id: "e3",
        title: "Indian Subcontinent Entrepreneurship & Business Summit 2026",
        date: "August 18, 2026 • 9:00 AM EST",
        location: "Convention Center, Baltimore, MD",
        category: "Networking",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
        description: "Network with over 500+ Indian-American business leaders, startup founders, tech executives, and investors. Strategic keynotes on growth and media expansion.",
        organizer: "Radio Nyra Business Network"
    }
];

export const FESTIVAL_CALENDAR: FestivalCalendarItem[] = [
    {
        id: "f1",
        festivalName: "Diwali (Festival of Lights)",
        date: "November 8, 2026",
        significance: "Victory of light over darkness and good over evil.",
        traditions: "Diyas, Rangoli, Sweets, Family Reunions, Fireworks",
        associatedShow: "Bollywood Bliss Special",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "f2",
        festivalName: "Holi (Festival of Colors)",
        date: "March 14, 2026",
        significance: "Arrival of spring and celebration of love and vibrant colors.",
        traditions: "Gulal color throwing, Thandai, Dance, Community gatherings",
        associatedShow: "Zara Muskurao Holi Edition",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "f3",
        festivalName: "Ugadi / Gudi Padwa",
        date: "March 29, 2026",
        significance: "Indian Subcontinent New Year representing the six flavors of life.",
        traditions: "Ugadi Pachadi preparation, Mango leaf torans, Panchangam Sravanam",
        associatedShow: "Chinna Mata Ugadi Special",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "f4",
        festivalName: "Navratri & Dussehra",
        date: "October 10 - October 19, 2026",
        significance: "Nine nights honoring Divine Feminine Shakti and victory of Goddess Durga.",
        traditions: "Garba & Dandiya Raas dances, Bathukamma floral festival, Fasting",
        associatedShow: "Dil Se Desi With Van",
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=600&q=80"
    }
];

export const BUSINESS_DIRECTORY: BusinessDirectoryItem[] = [
    {
        id: "b1",
        name: "Royal Spice Indian Fine Dining",
        category: "Restaurant & Catering",
        location: "Raleigh, NC",
        rating: 4.9,
        phone: "+1 (919) 555-0192",
        website: "https://www.radionyra.com/directory",
        featured: true
    },
    {
        id: "b2",
        name: "Patel Brothers Farmers Market",
        category: "Grocery & Spices",
        location: "Cary, NC & Atlanta, GA",
        rating: 4.8,
        phone: "+1 (919) 555-0144",
        website: "https://www.radionyra.com/directory",
        featured: true
    },
    {
        id: "b3",
        name: "Premier Indian Subcontinent Real Estate Group",
        category: "Real Estate & Mortgage",
        location: "Durham, NC",
        rating: 4.9,
        phone: "+1 (919) 555-0188",
        website: "https://www.radionyra.com/directory",
        featured: true
    },
    {
        id: "b4",
        name: "Apex Indian Healthcare & Wellness Clinic",
        category: "Healthcare",
        location: "Morrisville, NC",
        rating: 4.9,
        phone: "+1 (919) 555-0177",
        website: "https://www.radionyra.com/directory",
        featured: false
    }
];
