"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { NC_CITIES } from "@/lib/nc-data"
import { Calendar, CheckCircle2, ArrowLeft, Radio } from "lucide-react"

export default function SubmitEventPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    eventName: "",
    organizer: "",
    category: "Festival",
    city: "Cary",
    date: "",
    time: "",
    venue: "",
    address: "",
    ticketUrl: "",
    email: "",
    description: "",
    requestOnAirPromo: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Community event submitted:", formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FrequencyBar />

      <main className="py-12 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="mb-6">
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Triangle Events Calendar
            </Link>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-extrabold uppercase tracking-tight mb-2">
                  Event Submitted for Review!
                </h1>
                <p className="text-sm text-muted-foreground mb-6">
                  Thank you for submitting <strong>{formData.eventName}</strong>. Our editorial team will review your event and publish it to the Radio Nyra Triangle calendar within 24 hours.
                </p>
                <div className="flex justify-center gap-3">
                  <Button asChild variant="outline" className="rounded-full text-xs font-bold">
                    <Link href="/events">View Events Calendar</Link>
                  </Button>
                  <Button asChild className="rounded-full text-xs font-bold">
                    <Link href="/advertise">Promote On-Air with RadioNyra</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-widest mb-2">
                    <Calendar className="w-3.5 h-3.5" /> Community Calendar
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                    Submit a South Asian Event
                  </h1>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Promote your cultural festival, temple celebration, concert, sports tournament, or fundraiser to Triangle listeners.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                      Event Title *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Triangle Diwali Celebration 2026"
                      value={formData.eventName}
                      onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        Organizer / Association *
                      </label>
                      <Input
                        required
                        placeholder="e.g. Triangle Indian American Association"
                        value={formData.organizer}
                        onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        Category *
                      </label>
                      <select
                        className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      >
                        <option value="Festival">Festival &amp; Cultural</option>
                        <option value="Music">Concert &amp; Bollywood Music</option>
                        <option value="Temple">Temple Puja &amp; Spiritual</option>
                        <option value="Community">Community Gathering</option>
                        <option value="Sports">Cricket &amp; Sports Tournament</option>
                        <option value="Kids">Kids &amp; Family Education</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        City *
                      </label>
                      <select
                        className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      >
                        {NC_CITIES.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}, NC
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        Date *
                      </label>
                      <Input
                        required
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        Time *
                      </label>
                      <Input
                        required
                        placeholder="e.g. 5:00 PM - 10:00 PM"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        Venue Name *
                      </label>
                      <Input
                        required
                        placeholder="e.g. Koka Booth Amphitheatre"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        Venue Address
                      </label>
                      <Input
                        placeholder="Street address in North Carolina"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        Ticket or RSVP Link
                      </label>
                      <Input
                        type="url"
                        placeholder="https://eventbrite.com/..."
                        value={formData.ticketUrl}
                        onChange={(e) => setFormData({ ...formData, ticketUrl: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        Contact Email *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="organizer@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                      Event Description *
                    </label>
                    <Textarea
                      required
                      rows={4}
                      placeholder="Provide full details: schedule, entry fees, performers, food stalls, parking, etc."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  {/* PROMOTION OPT-IN */}
                  <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="onAirPromo"
                      checked={formData.requestOnAirPromo}
                      onChange={(e) => setFormData({ ...formData, requestOnAirPromo: e.target.checked })}
                      className="mt-1 accent-primary"
                    />
                    <label htmlFor="onAirPromo" className="text-xs text-foreground cursor-pointer">
                      <strong>Request On-Air Promotion:</strong> Check here if you'd like our sponsorship team to contact you about 99.9 FM HD radio spots, live RJ mentions, or social media broadcasts for this event.
                    </label>
                  </div>

                  <Button type="submit" className="w-full rounded-full font-bold uppercase tracking-wider mt-2">
                    Submit Event for Moderation
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
