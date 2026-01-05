import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Radio, Users, Mic2, ArrowRight } from "lucide-react"
import { CountUp } from "@/components/ui/count-up"
import { ListenLiveButton } from "@/components/listen-live-button"

export default function HomePage() {

  // Data for Hosts
  const hosts = [
    { name: "Arpit Tandon", show: "Idhar Udhar Ki Baatein", image: "/Images/Idhar Udhar Ki Baatein.jpg" },
    { name: "Raj Persaud", show: "Morning Commute", image: "/Images/chai pe charcha.jpg" },
    { name: "Monika Joshi", show: "Triangle Tunes", image: "/Images/Triangle Tune.jpg" },
    { name: "Vaishnavi Palleda", show: "Hello Vaishnavi", image: "/Images/Hello Vaishnavi.jpg" },
    { name: "Sohail", show: "Non Stop Hungama", image: "/Images/Non stop hungama.jpg" },
  ];

  // Upcoming Events WITH IMAGES
  const upcomingEvents = [
    { title: "Radio Nyra NYE 2026", date: "Dec 31, 2025", location: "Cary, NC", image: "/bollywood-event-flyer.jpg" },
    { title: "Zain Zohaib Live", date: "Sep 28, 2025", location: "Raleigh, NC", image: "/placeholder.jpg" },
    { title: "Community Meetup", date: "Oct 10, 2025", location: "Downtown Park", image: "/placeholder.jpg" },
  ];

  // Past Events SMALL RECTANGLES WITH IMAGES
  const pastEvents = [
    { title: "Diwali Gala", date: "Nov 2024", image: "/placeholder.jpg" },
    { title: "Navratri Night", date: "Oct 2024", image: "/placeholder.jpg" },
    { title: "Independence Day", date: "Aug 2024", image: "/placeholder.jpg" },
    { title: "Summer Jam", date: "July 2024", image: "/placeholder.jpg" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
          <div className="absolute inset-0 z-0 opacity-60">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="/radio-studio-modern.jpg"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-sound-waves-in-the-dark-3079-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-20 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-primary mb-6 uppercase leading-tight drop-shadow-xl">
              The Voice of India in USA
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 w-full max-w-md md:max-w-none mx-auto">
              <ListenLiveButton className="w-full md:w-auto text-lg font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none transition-all hover:scale-105 shadow-2xl h-16 w-full md:w-auto" />

              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 text-lg font-bold uppercase tracking-widest text-white border-2 border-white bg-transparent hover:bg-white hover:text-black rounded-none transition-all hover:scale-105 shadow-2xl w-full md:w-auto"
                asChild
              >
                <Link href="/schedule">
                  <Calendar className="mr-3 w-5 h-5" /> View Schedule
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-6 bg-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {[
                { label: "Active Listeners", end: 100, suffix: "K+", icon: Users },
                { label: "Live Broadcasting", end: 24, suffix: "/7", icon: Radio },
                { label: "Professional Hosts", end: 15, suffix: "+", icon: Mic2 }
              ].map((stat, i) => (
                <div key={i} className="p-2">
                  <div className="flex justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-none">
                    <CountUp end={stat.end} suffix={stat.suffix} duration={2500} />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOSTS */}
        <section className="py-8 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold uppercase tracking-tighter border-l-4 border-primary pl-4">On Air Now</h2>
              <Button variant="link" className="text-primary font-bold uppercase tracking-widest text-xs" asChild>
                <Link href="/our-team">View All Hosts <ArrowRight className="ml-2 w-3 h-3" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {hosts.map((host, i) => (
                <div key={i} className="group bg-card border border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/5] bg-black overflow-hidden">
                    <img
                      src={host.image}
                      alt={host.name}
                      className="w-full h-full object-contain transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-3 border-t border-border">
                    <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">{host.name}</h3>
                    <p className="text-[10px] font-bold uppercase text-primary tracking-wider opacity-80">{host.show}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS (WITH IMAGES) */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold uppercase tracking-tighter mb-4 border-l-4 border-primary pl-4">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingEvents.map((ev, i) => (
                <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary transition-colors">
                  {/* Event Image */}
                  <div className="relative h-40 bg-muted overflow-hidden">
                    <img src={ev.image} alt={ev.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3">
                      <Badge className="uppercase tracking-widest text-[8px] bg-primary text-white border-none rounded-none px-1.5 py-0">Upcoming</Badge>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" /> {ev.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-1 group-hover:text-primary transition-colors leading-none">{ev.title}</h3>
                    <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wide mb-3">{ev.location}</p>
                    <Button variant="outline" className="w-full text-[10px] font-bold uppercase tracking-widest rounded-none h-8">Get Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PARTNERS */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold uppercase tracking-tighter mb-4 border-l-4 border-primary pl-4 text-left text-black">Our Partners</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {Array.from({ length: 29 }, (_, i) => i + 2).map((num) => (
                <div key={`partner-${num}`} className="group border border-gray-100 hover:border-primary/50 transition-all duration-300 bg-white p-2 flex items-center justify-center h-20 hover:shadow-lg">
                  <div className="relative w-full h-full">
                    <img
                      src={`/Images/${num}.jpg`}
                      alt={`Partner ${num}`}
                      className="w-full h-full object-contain transition-all duration-500 transform group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAST EVENTS (SMALL RECTANGLES WITH IMAGES) */}
        <section className="py-8 bg-black text-white border-t border-white/10">
          <div className="container mx-auto px-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Past Events Archive</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {pastEvents.map((ev, i) => (
                <div key={i} className="group flex items-center gap-2 bg-white/5 p-1.5 hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/20">
                  {/* Small Thumbnail */}
                  <div className="w-10 h-10 bg-gray-800 flex-shrink-0 overflow-hidden">
                    <img src={ev.image} alt={ev.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="overflow-hidden">
                    <span className="block text-[8px] text-gray-400 uppercase tracking-wider">{ev.date}</span>
                    <h5 className="text-[10px] font-bold text-white uppercase truncate">{ev.title}</h5>
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
