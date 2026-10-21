"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
  Radio, Calendar, Sparkles, ListMusic, ChevronRight,
  ExternalLink, Play, Pause, RotateCcw, RotateCw, Volume2,
  VolumeX, Download, FileText, Share2, Check, Music2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { RTV_TELUGU_NEWS_EPISODES, type RtvNewsEpisode } from "@/lib/rtv-news-data"

interface RtvPlayerProps {
  showArchive?: boolean
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s < 10 ? "0" : ""}${s}`
}

export function RtvPlayer({ showArchive = true }: RtvPlayerProps) {
  const episodes = RTV_TELUGU_NEWS_EPISODES
  const [selectedEpisode, setSelectedEpisode] = useState<RtvNewsEpisode>(episodes[0])
  const [playerMode, setPlayerMode] = useState<"custom" | "drive">("custom")

  // Audio state
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [hasPlaybackError, setHasPlaybackError] = useState(false)
  const [copied, setCopied] = useState(false)

  // Direct audio streams
  const directAudioUrl = `https://drive.usercontent.google.com/download?id=${selectedEpisode.driveId}&export=download`
  const fallbackAudioUrl = `https://drive.google.com/uc?export=download&id=${selectedEpisode.driveId}`
  const embedUrl = `https://drive.google.com/file/d/${selectedEpisode.driveId}/preview`
  const driveViewUrl = `https://drive.google.com/file/d/${selectedEpisode.driveId}/view`

  // When selected episode changes, reset player
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
      setCurrentTime(0)
      setDuration(0)
      setHasPlaybackError(false)
      audioRef.current.load()
    }
  }, [selectedEpisode.id])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      setIsLoading(true)
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
          setIsLoading(false)
          setHasPlaybackError(false)
        })
        .catch(() => {
          setIsLoading(false)
          setIsPlaying(false)
          setHasPlaybackError(true)
        })
    }
  }

  const handleSeek = (newTime: number) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const skipTime = (delta: number) => {
    if (!audioRef.current) return
    const target = Math.max(0, Math.min(duration || 600, currentTime + delta))
    audioRef.current.currentTime = target
    setCurrentTime(target)
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    const next = !isMuted
    setIsMuted(next)
    audioRef.current.muted = next
  }

  const handleVolumeChange = (v: number) => {
    if (!audioRef.current) return
    setVolume(v)
    audioRef.current.volume = v
    if (v === 0) {
      setIsMuted(true)
      audioRef.current.muted = true
    } else if (isMuted) {
      setIsMuted(false)
      audioRef.current.muted = false
    }
  }

  const cyclePlaybackRate = () => {
    if (!audioRef.current) return
    const rates = [1, 1.25, 1.5, 2]
    const nextIdx = (rates.indexOf(playbackRate) + 1) % rates.length
    const nextRate = rates[nextIdx]
    setPlaybackRate(nextRate)
    audioRef.current.playbackRate = nextRate
  }

  const handleShare = () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://radionyra.com/rtv-news"
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="w-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white rounded-2xl border border-red-600/30 shadow-2xl overflow-hidden">
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        preload="metadata"
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime)
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration)
            setIsLoading(false)
          }
        }}
        onEnded={() => {
          setIsPlaying(false)
          setCurrentTime(0)
        }}
        onError={() => {
          setIsLoading(false)
          setIsPlaying(false)
          setHasPlaybackError(true)
        }}
      >
        <source src={directAudioUrl} type="audio/mpeg" />
        <source src={fallbackAudioUrl} type="audio/mpeg" />
      </audio>

      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-red-900/60 via-red-800/40 to-transparent px-4 sm:px-6 py-3 border-b border-red-500/20 flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-400">
            Radio Nyra &times; RTV Telugu News
          </span>
          <span className="text-zinc-500 hidden sm:inline">&bull;</span>
          <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest hidden sm:inline">
            99.9 FM-HD3
          </span>
        </div>

        {/* Player Mode Switcher */}
        <div className="flex items-center bg-zinc-900/90 p-0.5 rounded-lg border border-zinc-800 text-[10px] font-bold">
          <button
            onClick={() => setPlayerMode("custom")}
            className={`px-2.5 py-1 rounded-md transition-all ${
              playerMode === "custom"
                ? "bg-red-600 text-white shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            HD Player
          </button>
          <button
            onClick={() => setPlayerMode("drive")}
            className={`px-2.5 py-1 rounded-md transition-all ${
              playerMode === "drive"
                ? "bg-red-600 text-white shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Drive Player
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Poster Image (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px] rounded-xl overflow-hidden shadow-2xl border-2 border-red-500/40 bg-zinc-900">
              <img
                src="/images/rtv/rtv-news-poster.jpg"
                alt="RadioNyra Proudly Presents RTV NEWS on 99.9 FM-HD3"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-sm shadow-lg">
                  <Radio className="w-3 h-3 animate-pulse" /> Daily Telugu News On Air
                </div>
              </div>
            </div>
          </div>

          {/* Player & Controls (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-start space-y-4">

            {/* Episode Meta */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-extrabold uppercase tracking-widest mb-2">
                <Sparkles className="w-3 h-3" /> Telugu Daily Bulletin &bull; Day {selectedEpisode.dayNumber}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight italic text-white leading-tight">
                {selectedEpisode.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-zinc-400">
                <span className="flex items-center gap-1 text-zinc-300 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-red-400" /> {selectedEpisode.formattedDate}
                </span>
                <span>&bull;</span>
                <span className="font-mono text-zinc-300">{selectedEpisode.sizeFormatted}</span>
                <span>&bull;</span>
                <span className="text-emerald-400 font-bold">Radio Nyra Telugu &bull; 99.9 FM-HD3</span>
              </div>
            </div>

            {/* MAIN AUDIO INTERFACE */}
            {playerMode === "custom" && !hasPlaybackError ? (
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-inner flex flex-col gap-4">
                
                {/* Visualizer Wave & Station Status */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400">
                      {isPlaying ? "Now Playing On-Air" : "Ready to Play"}
                    </span>
                  </div>

                  {/* Dynamic Sound Wave Bars */}
                  <div className="flex items-end gap-1 h-5 px-2">
                    {[40, 75, 55, 90, 60, 100, 45, 80, 65, 95, 50, 85].map((val, idx) => (
                      <span
                        key={idx}
                        className={`w-1 bg-red-500 rounded-full transition-all duration-300 ${
                          isPlaying ? "animate-pulse" : "opacity-30"
                        }`}
                        style={{
                          height: isPlaying ? `${Math.max(25, (val * ((idx % 3) + 1)) % 100)}%` : "25%",
                          animationDelay: `${idx * 0.08}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Scrubber Progress Bar */}
                <div className="space-y-1.5">
                  <div className="relative w-full flex items-center">
                    <input
                      type="range"
                      min={0}
                      max={duration || 600}
                      value={currentTime}
                      onChange={(e) => handleSeek(Number(e.target.value))}
                      className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-600 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="text-white font-bold">{formatTime(currentTime)}</span>
                    <span>{duration > 0 ? formatTime(duration) : "~9:30"}</span>
                  </div>
                </div>

                {/* Controls Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  
                  {/* Playback Controls */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* -10s */}
                    <button
                      onClick={() => skipTime(-10)}
                      className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition cursor-pointer"
                      title="Rewind 10 seconds"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    {/* Big Play / Pause */}
                    <button
                      onClick={togglePlay}
                      className="relative p-3.5 sm:p-4 rounded-full bg-red-600 text-white hover:bg-red-500 transition shadow-lg shadow-red-600/40 cursor-pointer group"
                      title={isPlaying ? "Pause" : "Play Episode"}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                      {isLoading && (
                        <span className="absolute inset-0 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      )}
                    </button>

                    {/* +10s */}
                    <button
                      onClick={() => skipTime(10)}
                      className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition cursor-pointer"
                      title="Forward 10 seconds"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>

                    {/* Speed Selector */}
                    <button
                      onClick={cyclePlaybackRate}
                      className="px-2.5 py-1 rounded-full bg-zinc-800 text-[11px] font-extrabold text-zinc-300 hover:text-white hover:bg-zinc-700 transition ml-1"
                      title="Playback speed"
                    >
                      {playbackRate}x
                    </button>
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-1.5 text-zinc-400 hover:text-white transition cursor-pointer"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-4 h-4 text-red-400" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={isMuted ? 0 : volume}
                      onChange={(e) => handleVolumeChange(Number(e.target.value))}
                      className="w-16 sm:w-20 h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Google Drive Embedded Audio Player — Formatted with full height so it is NEVER clipped */
              <div className="rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-950 p-2 shadow-2xl">
                <div className="px-2 py-1.5 flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800/80 mb-2">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Music2 className="w-3.5 h-3.5 text-red-500" /> Google Drive Cloud Stream
                  </span>
                  <button
                    onClick={() => setPlayerMode("custom")}
                    className="text-red-400 hover:underline font-extrabold uppercase text-[10px]"
                  >
                    Switch to HD Player &rarr;
                  </button>
                </div>
                <iframe
                  key={selectedEpisode.driveId}
                  src={embedUrl}
                  allow="autoplay"
                  width="100%"
                  height="160"
                  className="w-full rounded-xl bg-zinc-900 border border-zinc-800"
                  style={{ border: "none", display: "block" }}
                  title={selectedEpisode.title}
                />
              </div>
            )}

            {/* Description */}
            <p className="text-sm text-zinc-400 leading-relaxed">
              {selectedEpisode.description}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-9 px-3.5 rounded-full border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 text-xs font-bold text-white cursor-pointer"
              >
                <a href={driveViewUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5 text-red-400" /> Open in Google Drive
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-9 px-3.5 rounded-full border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 text-xs font-bold text-white cursor-pointer"
              >
                <a href={fallbackAudioUrl} target="_blank" rel="noopener noreferrer" download>
                  <Download className="w-3.5 h-3.5 mr-1.5 text-emerald-400" /> Download MP3
                </a>
              </Button>

              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="h-9 px-3.5 rounded-full border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 text-xs font-bold text-white cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-400" /> Copied Link!
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 mr-1.5" /> Share
                  </>
                )}
              </Button>

              {/* Station Badges */}
              <div className="flex items-center gap-1.5 ml-auto">
                <span className="px-2 py-0.5 rounded bg-red-950 text-red-300 font-extrabold text-[10px] uppercase border border-red-800">
                  99.9 FM-HD3
                </span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-extrabold text-[10px] uppercase border border-zinc-700">
                  Telugu
                </span>
              </div>
            </div>

            {/* Broadcast Info */}
            <div className="bg-zinc-900/90 border border-zinc-800 p-3 rounded-xl flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-white uppercase tracking-wider block text-[11px]">
                  Broadcast Coverage
                </span>
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
              <h3 className="text-lg font-extrabold uppercase tracking-tight text-white">
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
                    onClick={() => setSelectedEpisode(ep)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isCurrent
                        ? "bg-red-950/50 border-red-500 shadow-md shadow-red-900/30 ring-1 ring-red-500"
                        : "bg-zinc-900/70 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/70"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          isCurrent ? "bg-red-600 text-white" : "bg-zinc-800 text-zinc-300"
                        }`}
                      >
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white leading-tight">
                          Day {ep.dayNumber}
                          {isCurrent && (
                            <span className="ml-1.5 text-[9px] text-red-400 font-extrabold uppercase">
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
                      <span className="font-mono text-[10px]">{ep.sizeFormatted}</span>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/rtv-news/${ep.date}`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-[10px] text-zinc-400 hover:text-white flex items-center gap-0.5 underline decoration-zinc-600 hover:decoration-white"
                          title="View full bulletin, transcript & share"
                        >
                          <FileText className="w-2.5 h-2.5" /> Details
                        </Link>
                        <span className="text-red-400 font-bold flex items-center text-[10px] uppercase">
                          Play <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
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
