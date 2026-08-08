"use client"

import React from "react"
import { Radio, Youtube, Flame, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { OFFICIAL_YOUTUBE_CHANNEL } from "@/lib/youtube-data"
import { trackListenLive, trackYouTubeSubscribe } from "@/lib/analytics"

export function ListenWatchBanner() {
    const { playStation } = useAudio();

    return (
        <div className="w-full bg-gradient-to-r from-zinc-950 via-red-950 to-black text-white p-6 md:p-8 rounded-3xl border border-red-900/40 shadow-2xl my-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Left: Branding & Listen Live */}
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/40 shrink-0">
                        <Radio className="w-7 h-7 text-white animate-pulse" />
                    </div>
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-red-400">Radio Nyra Live + Video</span>
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight italic">Listen Live & Watch YouTube</h3>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {/* Listen Live Button */}
                    <Button
                        onClick={() => {
                            playStation(STATIONS.Hindi.id);
                            trackListenLive(STATIONS.Hindi.name, "Hindi");
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider px-6 py-6 rounded-xl shadow-lg cursor-pointer"
                    >
                        <Radio className="w-4 h-4 mr-2" /> Listen Live 99.9 FM
                    </Button>

                    {/* Watch Latest Video - now links to the YouTube channel directly */}
                    <Button
                        onClick={() => window.open(OFFICIAL_YOUTUBE_CHANNEL.channelUrl, "_blank")}
                        variant="outline"
                        className="bg-white/10 hover:bg-white/20 border-white/20 text-white font-black text-xs uppercase tracking-wider px-6 py-6 rounded-xl cursor-pointer"
                    >
                        <Play className="w-4 h-4 mr-2 fill-white" /> Watch Latest Video
                    </Button>

                    {/* Subscribe on YouTube */}
                    <Button
                        onClick={() => {
                            trackYouTubeSubscribe("ListenWatchBanner");
                            window.open(OFFICIAL_YOUTUBE_CHANNEL.subscribeUrl, "_blank");
                        }}
                        variant="outline"
                        className="border-red-500/80 text-red-400 hover:bg-red-600/20 font-black text-xs uppercase tracking-wider px-6 py-6 rounded-xl cursor-pointer"
                    >
                        <Youtube className="w-4 h-4 mr-2 fill-red-400" /> Subscribe @RadioNyraUSA
                    </Button>
                </div>
            </div>
        </div>
    );
}
