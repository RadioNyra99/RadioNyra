"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { Mic, Clock, Headphones, Sparkles } from "lucide-react"

interface HostProfile {
  id: string
  name: string
  show: string
  timings: string
  image: string
  language: "hindi" | "telugu"
  stationId: string
  bio: string
}

// Row 1 hosts (5 members)
const ROW1_HOSTS: HostProfile[] = [
  {
    id: "1",
    name: "Vaishnavi palleda",
    show: "Hello Vaishnavi",
    timings: "Weekdays 9:00 AM - 12:00 PM EST",
    image: "/images/hosts/hello-vaishnavi.jpeg",
    language: "hindi",
    stationId: STATIONS.Hindi.id,
    bio: "Bringing energetic morning vibes, traffic updates, weather, and the biggest Bollywood chartbusters to Cary & Raleigh listeners."
  },

  {
    id: "3",
    name: "Arpit Tandon",
    show: "Idhar Udhar Ki Baatein",
    timings: "Wednesdays 6:00 PM - 8:00 PM EST",
    image: "/images/hosts/idhar-udhar-ki-baatein.webp",
    language: "hindi",
    stationId: STATIONS.Hindi.id,
    bio: "Candid conversations, lighthearted humor, Bollywood gossip, and popular Hindi hits."
  },
  {
    id: "4",
    name: "Aayushii Rode",
    show: "Zara Muskurao",
    timings: "Weekdays 12:00 PM - 3:00 PM EST",
    image: "/images/hosts/zara-muskurao.jpeg",
    language: "hindi",
    stationId: STATIONS.Hindi.id,
    bio: "Aayushii brings your daily wellness guide, lifestyle conversations, relationship tips, and hit Bollywood numbers."
  },
  {
    id: "5",
    name: "Van bandhari",
    show: "Dil Se Desi With Van",
    timings: "Saturdays 3:00 PM - 6:00 PM EST",
    image: "/images/hosts/dil-se-desi.jpeg",
    language: "hindi",
    stationId: STATIONS.Hindi.id,
    bio: "Lively music, nostalgic stories, and interactive listener requests to spice up your weekend afternoon."
  }
]

// Row 2 hosts (6 members)
const ROW2_HOSTS: HostProfile[] = [
  {
    id: "6",
    name: "Jyothi",
    show: "Aaj Ki Shaam",
    timings: "Fridays 6:00 PM - 8:00 PM EST",
    image: "/images/hosts/Aaj Ki Shaam-jyoti kae naam.png",
    language: "hindi",
    stationId: STATIONS.Hindi.id,
    bio: "Unwind after a busy week with soulful melodies, local events, and heartwarming stories."
  },
  {
    id: "7",
    name: "Parag",
    show: "Nirvana Nights",
    timings: "Daily 9:00 PM - 12:00 AM EST",
    image: "/images/hosts/nirvana-nights.png",
    language: "hindi",
    stationId: STATIONS.Hindi.id,
    bio: "Soothing tracks, ghazals, and unplugged melodies to calm your mind and ease into the night."
  },
  {
    id: "8",
    name: "Monika Joshi",
    show: "Triangle Tunes and Talks",
    timings: "Weekdays 3:00 PM - 6:00 PM EST",
    image: "/images/hosts/triangle-tunes.jpeg",
    language: "hindi",
    stationId: STATIONS.Hindi.id,
    bio: "A local staple for community bulletins, traffic reports, and local business highlights during Cary's evening drive time."
  },
  {
    id: "9",
    name: "Bharti Rathore",
    show: "Bollywood Bliss",
    timings: "Weekdays & Sundays 6:00 AM - 9:00 AM EST",
    image: "/images/hosts/bollywood-bliss.jpeg",
    language: "hindi",
    stationId: STATIONS.Hindi.id,
    bio: "Dynamic Bollywood numbers, retro specials, and upbeat tracks to brighten your day."
  },
  {
    id: "10",
    name: "Priya",
    show: "Chinna Mata",
    timings: "Weekdays 12:00 PM - 3:00 PM EST",
    image: "/images/hosts/chinna-mata.webp",
    language: "telugu",
    stationId: STATIONS.Telugu.id,
    bio: "Priya shares Tollywood updates, celebrity insights, local news, and favorite Telugu melodies to keep you connected to your roots."
  },
  {
    id: "11",
    name: "Prachi",
    show: "Chai Pe Charcha",
    timings: "Weekdays 3:00 PM - 5:00 PM EST",
    image: "/images/hosts/Prachi.png",
    language: "hindi",
    stationId: STATIONS.Hindi.id,
    bio: "Enjoy your afternoon tea with engaging local stories, cultural snippets, and classical fusion music."
  }
]

export default function HostsPage() {
  const { playStation } = useAudio()

  const renderHostCard = (host: HostProfile) => (
    <div 
      key={host.id}
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] group"
    >
      <div>
        {/* Image Frame */}
        <div className="p-4">
          <div className="relative aspect-square overflow-hidden bg-gray-50 rounded-xl border border-gray-100">
            <img 
              src={host.image} 
              alt={host.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "/images/radio-nyra-logo.jpg"
              }}
            />
            <span className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-widest bg-primary text-white px-2.5 py-0.5 rounded-full shadow-sm">
              {host.language}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-4 space-y-2">
          <h3 className="text-center font-black text-gray-900 group-hover:text-primary transition-colors text-base tracking-tight uppercase leading-snug">
            {host.name}
          </h3>
          
          <div className="space-y-1 text-[11px] text-gray-500 font-semibold border-t border-gray-100 pt-3">
            <div className="flex items-center gap-2">
              <Mic className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="text-gray-700 uppercase tracking-tight truncate">Show: {host.show}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary/80 shrink-0" />
              <span className="truncate">{host.timings}</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-500 leading-relaxed pt-2 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {host.bio}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-1">
        <Button
          onClick={() => playStation(host.stationId)}
          className="w-full bg-gray-50 hover:bg-primary text-gray-700 hover:text-white font-bold uppercase tracking-widest text-[10px] py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-gray-200/50 hover:border-primary shadow-sm"
        >
          <Headphones className="w-3.5 h-3.5" /> Listen Live
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-primary selection:text-white">
      <Navigation />

      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Official Team Showcase Header */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 mb-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-2 text-center md:text-left z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">Radio Nyra Team</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter italic text-gray-900 leading-none">
                Introduction Of <span className="text-primary block md:inline">Our Team</span>
              </h1>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-widest mt-2 max-w-2xl">
                The official lineup of radio hosts and curators presenting Indian Subcontinent culture across Raleigh-Durham and beyond.
              </p>
            </div>
            
            <div className="shrink-0 flex flex-col items-center z-10">
              <div className="relative w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-full border-4 border-gray-100 shadow-xl">
                <img
                  src="/images/radio-nyra-logo.jpg"
                  alt="Radio Nyra Logo"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* ROW 1: 4 Columns */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Primetime Show Hosts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {ROW1_HOSTS.map(renderHostCard)}
              </div>
            </div>

            {/* ROW 2: 6 Columns */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Specialty & Weekend Programming
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
                {ROW2_HOSTS.map(renderHostCard)}
              </div>
            </div>
          </div>

          {/* Interactive join the crew card */}
          <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-black uppercase tracking-tight italic mb-2 text-gray-900">Want to host your own show or podcast?</h3>
            <p className="text-xs text-gray-600 max-w-xl leading-relaxed mb-6 font-medium mx-auto">
              Our Creative Studio provides state-of-the-art recording, production assistance, distribution, and syndication services. Get your voice heard on the air and digital streams.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest rounded-xl text-xs cursor-pointer px-8 shadow-md" asChild>
              <a href="/contact">Apply as Host / Podcaster</a>
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
