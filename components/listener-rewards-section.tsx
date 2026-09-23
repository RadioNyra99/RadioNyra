"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Gift, Sparkles, Trophy, Calendar, Ticket, Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Contest {
  id: string
  title: string
  reward: string
  date: string
  tag: string
  participants: string
  status: "Active" | "Ending Soon"
  gradient: string
}

const CONTESTS: Contest[] = [
  {
    id: "contest-1",
    title: "Diwali Dhamaka VIP Concert Passes",
    reward: "2 VIP Front-Row Tickets + Backstage Pass",
    date: "Winner announced Oct 15",
    tag: "Concert VIP",
    participants: "1,240+ Entered",
    status: "Active",
    gradient: "from-amber-600/30 via-red-900/20 to-zinc-950",
  },
  {
    id: "contest-2",
    title: "Meet & Greet with RJ Aayushii Rode",
    reward: "In-Studio Radio Experience + Exclusive Merch Box",
    date: "Entries close Sunday",
    tag: "Studio Pass",
    participants: "850+ Entered",
    status: "Ending Soon",
    gradient: "from-red-600/30 via-purple-900/20 to-zinc-950",
  },
  {
    id: "contest-3",
    title: "Triangle Desi Food Tour Voucher",
    reward: "$150 Dining Voucher across Partner Restaurants",
    date: "Winner announced Friday",
    tag: "Food & Dining",
    participants: "2,100+ Entered",
    status: "Active",
    gradient: "from-emerald-600/30 via-teal-900/20 to-zinc-950",
  },
]

export function ListenerRewardsSection() {
  const [entered, setEntered] = useState<Record<string, boolean>>({})

  const handleEnter = (id: string) => {
    setEntered((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section className="py-12 bg-gradient-to-b from-zinc-950 to-black text-white border-b border-zinc-800/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-400">
                RadioNyra Perks
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white italic">
              Win & Giveaways
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-1">
              Exclusive concert passes, studio meet & greets, and community listener rewards
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Badge className="bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider px-3 py-1 border border-amber-500/30">
              100% Free for Listeners
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CONTESTS.map((contest) => {
            const isEntered = !!entered[contest.id]

            return (
              <div
                key={contest.id}
                className={cn(
                  "relative rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between bg-gradient-to-b transition-all duration-300 hover:border-zinc-700 hover:shadow-xl",
                  contest.gradient
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge
                      className={cn(
                        "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 border-none",
                        contest.status === "Ending Soon"
                          ? "bg-red-600 text-white"
                          : "bg-zinc-800 text-zinc-300"
                      )}
                    >
                      {contest.status}
                    </Badge>
                    <span className="text-[11px] font-bold text-zinc-400">
                      {contest.participants}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white leading-snug mb-2">
                    {contest.title}
                  </h3>
                  <div className="p-3 rounded-xl bg-black/40 border border-zinc-800/80 mb-4">
                    <p className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5 shrink-0" />
                      Grand Prize:
                    </p>
                    <p className="text-xs text-zinc-200 font-semibold mt-1">
                      {contest.reward}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-zinc-500" />
                      {contest.date}
                    </span>
                    <span className="font-bold text-zinc-300">{contest.tag}</span>
                  </div>

                  <Button
                    onClick={() => handleEnter(contest.id)}
                    disabled={isEntered}
                    className={cn(
                      "w-full rounded-full font-bold text-xs uppercase tracking-wider py-5 transition-all cursor-pointer",
                      isEntered
                        ? "bg-green-600 text-white hover:bg-green-600 cursor-default"
                        : "bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-900/30"
                    )}
                  >
                    {isEntered ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Entered Successfully!
                      </>
                    ) : (
                      <>
                        <Ticket className="w-4 h-4 mr-2" />
                        Enter Giveaway Free
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
