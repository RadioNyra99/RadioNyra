import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mic2, Star } from "lucide-react"

export default function OurTeamPage() {
  const team = [
    {
      name: "Raj Persaud",
      role: "Host, Morning Commute",
      bio: "Raj started working with Radio Nyra in May 2025. He built most of this website and manages our social media.",
      featured: true,
      image: "/images/chai pe charcha.jpg", // Educated guess or placeholder-like usage
    },
    {
      name: "Dr. John Caldwell",
      role: "Host, Geet Bazaar",
      bio: "Co-host of Geet Bazaar, bringing soulful music to the airwaves.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Vishal The Khushhal",
      role: "Host, Desh Pradesh",
      bio: "Vishal is here for your afternoon excitement - our vibrant host.",
      featured: true,
      image: "/images/desh pardesh.jpg",
    },
    {
      name: "Shivani",
      role: "Host, Nirvana Nights",
      bio: "The voice of your evenings on Nirvana Nights.",
      image: "/images/Nirvana Nights.jpg",
    },
    {
      name: "Monika Joshi",
      role: "Host, Triangle Tunes & Talks",
      bio: "Catch her vibrant energy every night from 10:00pm - 1:00am.",
      image: "/images/Triangle Tune.jpg",
    },
    {
      name: "Kanthi",
      role: "Host, Mana Muchatlu",
      bio: "Our lovely host on the Telugu channel, every Thursday.",
      image: "/images/Chinna Mata.jpg",
    },
    {
      name: "Jyoti",
      role: "Host, Dil Se Desi",
      bio: "Your vibrant host of Dil Se Desi, every Friday evening.",
      image: "/images/Dil Se Desi.jpg",
    },
    {
      name: "Dr. Afroz Taj",
      role: "Host, Geet Bazaar",
      bio: "Partnering with Dr. Caldwell to present the best of Geet Bazaar.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Aarav V Bogadapati",
      role: "Marketing & AI Strategy",
      bio: "Focuses on business marketing and leveraging AI to automate workflows.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Arpit Tandon",
      role: "Host, Idhar Udhar Ki Baatein",
      bio: "Talks about... vaghera vaghera! Join him on Wednesdays.",
      image: "/images/Idhar Udhar Ki Baatein.jpg",
    },
    {
      name: "Aayushii Rode",
      role: "Host, Zara Muskurao",
      bio: "Start your weekday mornings with a smile with Aayushii.",
      image: "/images/Zara Muskurao.jpg",
    },
    {
      name: "Vaishnavi Palleda",
      role: "Vice President & Host",
      bio: "CEO of Vault Productions™ and host of Hello Vaishnavi.",
      featured: true,
      image: "/images/Hello Vaishnavi.jpg",
    },
    {
      name: "Aditi",
      role: "Host, Unfiltered Gup Shup",
      bio: "Your gentle Saturday morning wake up show host.",
      image: "/images/Kuch Tum Kaho, Kuch Hum Kahein.jpg",
    },
    {
      name: "Bharti Rathore",
      role: "Host, Bollywood Bliss",
      bio: "Diving into the latest gossip and drama in the world of Bollywood.",
      image: "/images/Bollywood Bliss.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navigation />

      <main>
        {/* Header - GDConf Style */}
        <section className="bg-foreground text-background py-20 border-b border-border/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">The Talent</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-400 font-light">
              The voices, the personalities, and the energy behind Radio Nyra.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, idx) => (
                <div key={idx} className="group relative bg-card border border-border hover:border-primary transition-all duration-300">
                  {/* Image Wrapper */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={member.image || `/placeholder-user.jpg`}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {member.featured && (
                      <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-xs font-bold uppercase text-muted-foreground mb-4">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {member.bio}
                    </p>

                    <Link href="/schedule" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors">
                      View Schedule <ExternalLink className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
