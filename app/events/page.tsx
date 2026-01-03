import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowRight, Clock, Video } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Radio Nyra Bollywood NYE 2026",
      date: "Dec 31, 2025",
      time: "8:00 PM",
      location: "Hooky Entertainment Cary, NC",
      description: "Strike into the New Year with DJ Raksh! Join us for an unforgettable Bollywood night.",
      image: "/bollywood-event-flyer.jpg",
      featured: true,
      category: "Party"
    },
    {
      title: "Zain Zohaib Qawwali Mehfil",
      date: "Sep 28, 2025",
      time: "6:00 PM",
      location: "Stewart Theatre, Raleigh, NC",
      description: "Experience a spiritual evening with Zain Zohaib, Zain Ali, and Zohaib Ali.",
      image: "/placeholder.jpg",
      category: "Concert"
    },
    {
      title: "Community Meetup 2025",
      date: "Oct 10, 2025",
      time: "10:00 AM",
      location: "Downtown Park",
      description: "A gathering for all listeners and community members.",
      image: "/placeholder.jpg",
      category: "Community"
    }
  ]

  const pastEvents = [
    { title: "A.R. Rahman Concert", date: "Aug 02, 2024", location: "Raleigh, NC" },
    { title: "The Bengal Files Premiere", date: "Jul 25, 2024", location: "Raleigh, NC" },
    { title: "Diwali Bash 2023", date: "Nov 12, 2023", location: "Morrisville, NC" },
    { title: "Holi Festival", date: "Mar 25, 2024", location: "Apex, NC" },
    { title: "Summer Jam", date: "Jun 15, 2024", location: "Durham, NC" },
    { title: "Charity Gala", date: "Dec 01, 2023", location: "Cary, NC" },
  ]

  // Mock Calendar Data
  const calendarDays = [
    { day: "Mon", date: "10", events: ["Chai Pe Charcha (8am)", "Desh Pardesh (4pm)"] },
    { day: "Tue", date: "11", events: ["Triangle Tunes (10am)", "Bollywood Bliss (1pm)"] },
    { day: "Wed", date: "12", events: ["Idhar Udhar (5pm)", "Late Night (10pm)"] },
    { day: "Thu", date: "13", events: ["Hello Vaishnavi (5pm)"] },
    { day: "Fri", date: "14", events: ["Friday Party Mix (9pm)"] },
    { day: "Sat", date: "15", events: ["Weekend Breakfast (8am)", "Mega Event (6pm)"] },
    { day: "Sun", date: "16", events: ["Sunday Retro (10am)"] },
  ]

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      <main className="pb-20">

        {/* Header */}
        <div className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold uppercase tracking-tighter mb-4">Events & Schedule</h1>
            <p className="text-xl opacity-80">Stay tuned with live broadcasts and community gatherings.</p>
          </div>
        </div>

        {/* CALENDAR FEATURE */}
        <section id="calendar" className="py-16 border-b border-border bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold uppercase tracking-tight flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" /> Live Schedule
              </h2>
              <Button variant="outline" size="sm">Download PDF</Button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-px bg-border border border-border">
              {calendarDays.map((day, i) => (
                <div key={i} className="bg-background p-4 min-h-[200px] hover:bg-muted/50 transition-colors">
                  <div className="text-center mb-4">
                    <span className="block text-xs uppercase text-muted-foreground font-bold">{day.day}</span>
                    <span className="block text-2xl font-bold text-foreground">{day.date}</span>
                  </div>
                  <div className="space-y-2">
                    {day.events.map((ev, k) => (
                      <div key={k} className="text-xs p-2 bg-primary/5 border-l-2 border-primary rounded-r">
                        {ev}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-12 border-l-8 border-primary pl-4">Upcoming Events</h2>

            <div className="flex flex-col gap-8">
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="group grid grid-cols-1 lg:grid-cols-12 gap-6 bg-card border border-border hover:border-primary transition-all p-6">
                  {/* Date Column */}
                  <div className="lg:col-span-2 flex flex-col justify-center text-center border-r border-border pr-6">
                    <span className="text-sm font-bold uppercase text-muted-foreground">{event.date.split(' ')[0]}</span>
                    <span className="text-4xl font-bold text-foreground">{event.date.split(' ')[1].replace(',', '')}</span>
                    <span className="text-sm text-muted-foreground">{event.date.split(' ')[2]}</span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 flex flex-col justify-center">
                    <div className="flex gap-2 mb-2">
                      <Badge variant="outline" className="uppercase text-[10px] tracking-widest">{event.category}</Badge>
                      {event.featured && <Badge className="bg-primary hover:bg-primary uppercase text-[10px] tracking-widest">Featured</Badge>}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                    <div className="flex gap-6 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {event.time}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.location}</span>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>

                  {/* Action */}
                  <div className="lg:col-span-2 flex items-center justify-end">
                    <Button className="w-full lg:w-auto uppercase tracking-wider font-bold" variant="secondary">Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAST EVENTS - Small Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-8 text-muted-foreground">Past Events</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {pastEvents.map((ev, i) => (
                <div key={i} className="bg-background border border-border p-4 hover:border-primary transition-colors">
                  <p className="text-xs uppercase text-muted-foreground mb-1">{ev.date}</p>
                  <h4 className="text-sm font-bold text-foreground line-clamp-2 mb-2 leading-tight">{ev.title}</h4>
                  <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {ev.location}
                  </p>
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
