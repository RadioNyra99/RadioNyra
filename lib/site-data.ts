import {
  Apple,
  Building2,
  Car,
  Facebook,
  Globe,
  Headphones,
  Home,
  Instagram,
  Linkedin,
  MessageCircle,
  Music2,
  Send,
  Smartphone,
  Twitter,
  Youtube,
} from "lucide-react"

export const CONTACT_INFO = {
  phone: "+1 (919) 294-4800",
  phoneHref: "tel:+19192944800",
  email: "info@radionyra.com",
  emailHref: "mailto:info@radionyra.com",
  website: "https://www.radionyra.com",
  businessInquiryHref: "/advertise#inquiry",
  whatsappHref: "https://wa.me/19192944800",
}

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com/radionyrausa", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/radionyrausa", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/c/RadioNyraUSA", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/company/radionyrausa", icon: Linkedin },
  { label: "Twitter/X", href: "https://twitter.com/NyraUsa", icon: Twitter },
  { label: "Spotify", href: "https://open.spotify.com/search/Radio%20Nyra", icon: Music2 },
  { label: "Apple Podcasts", href: "https://podcasts.apple.com/search?term=Radio%20Nyra", icon: Apple },
  { label: "WhatsApp", href: CONTACT_INFO.whatsappHref, icon: MessageCircle },
  { label: "Telegram", href: "https://t.me/radionyra", icon: Send },
]

export const LISTENING_PLATFORMS = [
  { label: "Car", copy: "HD Radio and mobile audio for every commute.", icon: Car },
  { label: "Office", copy: "Workday listening for teams and small businesses.", icon: Building2 },
  { label: "Website", copy: "One-click live streaming from radionyra.com.", icon: Globe },
  { label: "Mobile", copy: "iOS and Android apps for listeners on the move.", icon: Smartphone },
  { label: "Alexa", copy: "Voice-assisted listening at home.", icon: Home },
  { label: "Smart Devices", copy: "Connected speakers, headphones, and app-enabled devices.", icon: Headphones },
]
