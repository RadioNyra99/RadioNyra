"use client"

import Link from "next/link"
import { upcomingEvents } from "@/lib/event-data"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight, PlusCircle, Sparkles } from "lucide-react"

export function TriangleEventsPreview() {
  const events = upcomingEvents.slice(0, 4)

  return (
    <section className="py-10 bg-background border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-widest mb-2">
              <Calendar className="w-3.5 h-3.5" /> What's Happening in the Triangle
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight italic">
              South Asian <span className="text-primary">Events &amp; Festivals</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Top gatherings, temple celebrations, cricket matches, and concerts across Cary, Morrisville &amp; Raleigh.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="rounded-full text-xs font-bold uppercase">
              <Link href="/events/submit">
                <PlusCircle className="w-3.5 h-3.5 mr-1" /> Submit Event
              </Link>
            </Button>
            <Button asChild size="sm" className="rounded-full text-xs font-bold uppercase">
              <Link href="/events">
                All Events <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((evt, idx) => (
            <div
              key={`${evt.title}-${idx}`}
              className="bg-card border border-border rounded-xl p-4 flex flex-col justify-between hover:border-primary/60 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-primary mb-2">
                  <span>{evt.type}</span>
                  <span className="text-muted-foreground font-semibold">{evt.date}</span>
                </div>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2 leading-snug">
                  {evt.title}
                </h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1 line-clamp-1">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{evt.venue}, {evt.location}</span>
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-border/40 flex items-center justify-between">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  Triangle, NC
                </span>
                <Button asChild size="sm" variant="ghost" className="h-7 px-2 text-xs font-bold text-primary">
                  <Link href="/events">
                    Details <ArrowRight className="w-3 h-3 ml-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
