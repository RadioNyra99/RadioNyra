"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Clock, Calendar, Bell, ChevronRight, User, Check, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface UpcomingShow {
  id: string
  time: string
  title: string
  host: string
  language: "Hindi" | "Telugu"
  category: string
  frequency: string
}

const UPCOMING_SHOWS: UpcomingShow[] = [
  {
    id: "show-1",
    time: "10:00 AM - 1:00 PM",
    title: "Triangle Tunes and Talks",
    host: "Monika Joshi",
    language: "Hindi",
    category: "Community & Interviews",
    frequency: "99.9 FM-HD4",
  },
  {
    id: "show-2",
    time: "1:00 PM - 3:00 PM",
    title: "Bollywood Bliss",
    host: "Bharti Rathore",
    language: "Hindi",
    category: "Retro & Contemporary Hits",
    frequency: "99.9 FM-HD4",
  },

  {
    id: "show-4",
    time: "5:00 PM - 7:00 PM",
    title: "Dil Se Desi",
    host: "Van",
    language: "Hindi",
    category: "Evening Drive & Music",
    frequency: "99.9 FM-HD4",
  },
  {
    id: "show-5",
    time: "7:00 PM - 9:00 PM",
    title: "Aaj Ki Shaam",
    host: "Jyoti",
    language: "Hindi",
    category: "Poetry, Ghazals & Melodies",
    frequency: "99.9 FM-HD4",
  },
  {
    id: "show-6",
    time: "9:00 PM - 11:00 PM",
    title: "Nirvana Nights",
    host: "Parag",
    language: "Hindi",
    category: "Late Night Chill & Classics",
    frequency: "99.9 FM-HD4",
  },
]

export function ComingUpSchedule() {
  const [reminders, setReminders] = useState<Record<string, boolean>>({})

  const toggleReminder = (id: string, title: string) => {
    setReminders((prev) => {
      const next = { ...prev, [id]: !prev[id] }
      return next
    })
  }

  return (
    <section className="bg-zinc-950 py-8 border-b border-zinc-800/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
                Coming Up On Air
              </h2>
              <p className="text-xs text-zinc-400 font-medium">
                Today's scheduled programming across Hindi & Telugu broadcasts
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            asChild
            className="text-xs font-bold text-zinc-300 hover:text-white hover:bg-zinc-900 self-start sm:self-auto -ml-3 sm:ml-0"
          >
            <Link href="/schedule" className="flex items-center gap-1.5">
              <span>View Full Weekly Schedule</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>

        {/* Horizontal Scrollable Program Cards */}
        <div className="flex gap-3.5 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {UPCOMING_SHOWS.map((show) => {
            const isReminderSet = !!reminders[show.id]
            const isTelugu = show.language === "Telugu"

            return (
              <div
                key={show.id}
                className="min-w-[260px] sm:min-w-[280px] max-w-[280px] rounded-xl bg-zinc-900/60 border border-zinc-800/90 p-4 flex flex-col justify-between hover:border-zinc-700 transition-all hover:bg-zinc-900/90 group shrink-0"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-bold text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      {show.time}
                    </span>
                    <Badge
                      className={cn(
                        "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 border-none",
                        isTelugu
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-red-500/20 text-red-400"
                      )}
                    >
                      {show.language}
                    </Badge>
                  </div>

                  <h3 className="text-sm font-black text-white group-hover:text-red-400 transition-colors line-clamp-1">
                    {show.title}
                  </h3>
                  <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-1 font-medium">
                    <User className="w-3 h-3 text-zinc-500" />
                    {show.host}
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-2 line-clamp-1 italic">
                    {show.category}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    {show.frequency}
                  </span>
                  <button
                    onClick={() => toggleReminder(show.id, show.title)}
                    className={cn(
                      "text-[11px] font-bold px-2.5 py-1 rounded-md transition-all flex items-center gap-1 cursor-pointer",
                      isReminderSet
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    )}
                  >
                    {isReminderSet ? (
                      <>
                        <Check className="w-3 h-3 text-green-400" />
                        Reminder Set
                      </>
                    ) : (
                      <>
                        <Bell className="w-3 h-3 text-zinc-400" />
                        Remind Me
                      </>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
