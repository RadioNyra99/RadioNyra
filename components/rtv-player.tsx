"use client"

import { useState } from "react"
import {
  Radio, Calendar, Sparkles, ListMusic, ChevronRight,
  ExternalLink, Play
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { RTV_TELUGU_NEWS_EPISODES, type RtvNewsEpisode } from "@/lib/rtv-news-data"

interface RtvPlayerProps {
  showArchive?: boolean
}

export function RtvPlayer({ showArchive = true }: RtvPlayerProps) {
  const episodes = RTV_TELUGU_NEWS_EPISODES
  const [selectedEpisode, setSelectedEpisode] = useState<RtvNewsEpisode>(episodes[0])
  const [iframeKey, setIframeKey] = useState(0) // force iframe reload on episode change

  // Google Drive embed URL — renders Drive's own audio player (no CORS issues)
  const embedUrl = `https://drive.google.com/file/d/${selectedEpisode.driveId}/preview`
  // Direct open-in-Drive link
  const driveLink = `https://drive.google.com/file/d/${selectedEpisode.driveId}/view`

  const selectEpisode = (ep: RtvNewsEpisode) => {
    setSelectedEpisode(ep)
    setIframeKey((k) => k + 1)
  }

  return (
    <div className="w-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white rounded-2xl border border-red-600/30 shadow-2xl overflow-hidden">

      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-red-900/60 via-red-800/40 to-transparent px-4 sm:px-6 py-3 border-b border-red-500/20 flex items-center gap-2.5">
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-red-400">
          Radio Nyra &times; RTV Telugu News
        </span>
        <span className="text-zinc-500">&bull;</span>
        <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest">
          99.9 FM-HD3
        </span>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Poster Image (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group w-full max-w-[300px] rounded-xl overflow-hidden shadow-2xl border-2 border-red-500/40 bg-zinc-900">
              <img
                src="/images/rtv/rtv-news-poster.jpg"
                alt="RadioNyra Proudly Presents RTV NEWS on 99.9 FM-HD3"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase tracking-wider backdrop-blur-sm shadow-lg">
                  <Radio className="w-3 h-3 animate-pulse" /> Daily Telugu News On Air
                </div>
              </div>
            </div>
          </div>

          {/* Player (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-start space-y-4">

            {/* Episode Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-widest mb-2">
                <Sparkles className="w-3 h-3" /> Telugu Daily Bulletin
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight italic text-white leading-tight">
                {selectedEpisode.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-zinc-400">
                <span className="flex items-center gap-1 text-zinc-300 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-red-400" /> {selectedEpisode.formattedDate}
                </span>
                <span>&bull;</span>
                <span className="font-mono">{selectedEpisode.sizeFormatted}</span>
                <span>&bull;</span>
                <span className="text-emerald-400 font-bold">Radio Nyra Telugu &bull; 99.9 FM-HD3</span>
              </div>
            </div>

            {/* Google Drive Embedded Audio Player */}
            <div className="rounded-xl overflow-hidden border border-zinc-700 bg-zinc-900">
              <iframe
                key={iframeKey}
                src={embedUrl}
                allow="autoplay"
                width="100%"
                height="80"
                style={{ border: "none", display: "block" }}
                title={selectedEpisode.title}
              />
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-400 leading-relaxed">
              {selectedEpisode.description}
            </p>

            {/* Open in Drive button */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                asChild
                variant="outline"
                className="h-10 px-4 rounded-full border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 text-sm font-bold text-white cursor-pointer"
              >
                <a href={driveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> Open Full Player in Google Drive
                </a>
              </Button>

              {/* Station Badge */}
              <div className="flex gap-2 ml-auto">
                <span className="px-2 py-1 rounded bg-red-950 text-red-300 font-black text-[10px] uppercase border border-red-800">
                  99.9 FM-HD3
                </span>
                <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-300 font-black text-[10px] uppercase border border-zinc-700">
                  Telugu
                </span>
              </div>
            </div>

            {/* Broadcast Info */}
            <div className="bg-zinc-900/90 border border-zinc-800 p-3.5 rounded-xl flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-white uppercase tracking-wider block">Broadcast Coverage</span>
                <span className="text-zinc-400 text-[11px]">
                  Raleigh-Durham &bull; North Carolina &bull; Stream Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Episode Archive */}
        {showArchive && (
          <div className="mt-8 pt-6 border-t border-zinc-800">
            <div className="flex items-center gap-2 mb-4">
              <ListMusic className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-black uppercase tracking-tight text-white">
                Telugu Daily News Archive
              </h3>
              <span className="text-xs bg-red-600/30 text-red-300 px-2 py-0.5 rounded-full font-bold">
                {episodes.length} Episodes
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {episodes.map((ep) => {
                const isCurrent = ep.id === selectedEpisode.id
                return (
                  <div
                    key={ep.id}
                    onClick={() => selectEpisode(ep)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isCurrent
                        ? "bg-red-950/50 border-red-500 shadow-md shadow-red-900/30 ring-1 ring-red-500"
                        : "bg-zinc-900/70 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/70"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        isCurrent ? "bg-red-600 text-white" : "bg-zinc-800 text-zinc-300"
                      }`}>
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white leading-tight">
                          Day {ep.dayNumber}
                          {isCurrent && (
                            <span className="ml-1.5 text-[9px] text-red-400 font-black uppercase">
                              Selected
                            </span>
                          )}
                        </h4>
                        <span className="text-[10px] text-zinc-400">{ep.formattedDate}</span>
                      </div>
                    </div>

                    <p className="text-[10px] text-zinc-500 leading-relaxed mb-2 line-clamp-2">
                      {ep.description}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-zinc-400 border-t border-zinc-800/80 pt-2">
                      <span className="font-mono">{ep.sizeFormatted}</span>
                      <span className="text-red-400 font-bold flex items-center text-[10px] uppercase">
                        Play <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
