"use client"

import React from "react"
import { Radio, Youtube, Play } from "lucide-react"
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
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400">Radio Nyra Live + Video</span>
                        <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight italic">Listen Live & Watch YouTube</h3>
                        <p className="text-xs text-zinc-400 mt-1">Hindi (99.9 FM HD4) & Telugu (99.9 FM HD3) streaming 24/7</p>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {/* Hindi Listen Live Button */}
                    <Button
                        onClick={() => {
                            playStation(STATIONS.Hindi.id);
                            trackListenLive(STATIONS.Hindi.name, "Hindi");
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-5 rounded-xl shadow-lg cursor-pointer"
                        aria-label="Listen live to Radio Nyra Hindi 99.9 FM HD4"
                    >
                        <Radio className="w-4 h-4 mr-1.5" /> Hindi 99.9 HD4
                    </Button>

                    {/* Telugu Listen Live Button */}
                    <Button
                        onClick={() => {
                            playStation(STATIONS.Telugu.id);
                            trackListenLive(STATIONS.Telugu.name, "Telugu");
                        }}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-5 rounded-xl shadow-lg cursor-pointer"
                        aria-label="Listen live to Radio Nyra Telugu 99.9 FM HD3"
                    >
                        <Radio className="w-4 h-4 mr-1.5" /> Telugu 99.9 HD3
                    </Button>

                    {/* Watch Latest Video */}
                    <Button
                        onClick={() => window.open(OFFICIAL_YOUTUBE_CHANNEL.channelUrl, "_blank")}
                        variant="outline"
                        className="bg-white/10 hover:bg-white/20 border-white/20 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-5 rounded-xl cursor-pointer"
                        aria-label="Watch latest video on official YouTube channel"
                    >
                        <Play className="w-4 h-4 mr-1.5 fill-white" /> Watch Videos
                    </Button>

                    {/* Subscribe on YouTube */}
                    <Button
                        onClick={() => {
                            trackYouTubeSubscribe("ListenWatchBanner");
                            window.open(OFFICIAL_YOUTUBE_CHANNEL.subscribeUrl, "_blank");
                        }}
                        variant="outline"
                        className="border-red-500/80 text-red-400 hover:bg-red-600/20 font-extrabold text-xs uppercase tracking-wider px-5 py-5 rounded-xl cursor-pointer"
                        aria-label="Subscribe to Radio Nyra on YouTube"
                    >
                        <Youtube className="w-4 h-4 mr-1.5 fill-red-400" /> Subscribe
                    </Button>
                </div>
            </div>
        </div>
    );
}
