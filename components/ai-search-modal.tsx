"use client"

import React, { useState, useEffect } from "react"
import { Search, Mic, MicOff, Sparkles, Film, Radio, Podcast, User, Play, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { OFFICIAL_YOUTUBE_CHANNEL } from "@/lib/youtube-data"
import { searchChannelVideos, YouTubeVideoItem } from "@/lib/youtube-service"
import { trackAISearch } from "@/lib/analytics"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"

const SEARCH_CATEGORIES = ["All", "Shows", "Videos", "Podcasts", "Interviews"];

const PODCASTS_DATA = [
    { title: "Nirvana Nights Podcast", host: "Parag", category: "Podcasts", image: "/images/hosts/nirvana-nights.png" },
    { title: "Idhar Udhar Ki Baatein Podcast", host: "Arpit Tandon", category: "Podcasts", image: "/images/hosts/idhar-udhar-ki-baatein.webp" },
    { title: "Desh Pardesh Diaspora Dialogues", host: "Vishal", category: "Podcasts", image: "/images/hosts/desi-pardesi.webp" },
];

export function AISearchModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");
    const [isListening, setIsListening] = useState(false);
    const [videos, setVideos] = useState<YouTubeVideoItem[]>([]);
    const [loadingVideos, setLoadingVideos] = useState(false);
    const { playStation } = useAudio();

    // Web Speech API Voice Search
    const handleVoiceSearch = () => {
        if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
            alert("Voice Search is not supported on this browser.");
            return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.continuous = false;

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setQuery(transcript);
        };

        recognition.start();
    };

    // Live search videos effect
    useEffect(() => {
        if (!query.trim()) {
            setVideos([]);
            return;
        }

        let isMounted = true;
        setLoadingVideos(true);

        const timer = setTimeout(() => {
            searchChannelVideos(query, 6).then((results) => {
                if (isMounted) {
                    setVideos(results);
                    setLoadingVideos(false);
                    trackAISearch(query, results.length);
                }
            }).catch(() => {
                if (isMounted) setLoadingVideos(false);
            });
        }, 300);

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, [query]);

    const filteredPodcasts = PODCASTS_DATA.filter(p => {
        const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase()) || p.host.toLowerCase().includes(query.toLowerCase());
        if (category === "All" || category === "Podcasts") return matchesQuery;
        return false;
    });

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl p-6 bg-card text-foreground border-border rounded-3xl shadow-2xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl font-black uppercase tracking-tight">
                        <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                        AI Smart Search & Voice Assistant
                    </DialogTitle>
                </DialogHeader>

                {/* Input & Voice Controls */}
                <div className="relative mt-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Ask AI to search shows, videos, podcasts, hosts, or interviews..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="pl-12 pr-14 h-14 bg-muted/50 border-border/80 rounded-2xl text-base font-medium focus-visible:ring-2 focus-visible:ring-primary"
                        autoFocus
                    />
                    <Button
                        onClick={handleVoiceSearch}
                        variant="ghost"
                        size="icon"
                        className={`absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl ${isListening ? "bg-red-600 text-white animate-bounce" : "text-muted-foreground hover:text-primary"
                            }`}
                        title="Voice Search"
                    >
                        {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </Button>
                </div>

                {/* Category Filters */}
                <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-2 custom-scrollbar">
                    {SEARCH_CATEGORIES.map(cat => (
                        <Button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            variant={category === cat ? "default" : "outline"}
                            size="sm"
                            className="rounded-xl text-xs font-bold uppercase tracking-wider px-4 shrink-0 cursor-pointer"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Results Container */}
                <div className="mt-6 max-h-[420px] overflow-y-auto custom-scrollbar space-y-4 pr-1">
                    {query.trim() === "" && (
                        <div className="p-6 text-center bg-muted/20 rounded-2xl border border-dashed border-border">
                            <Sparkles className="w-8 h-8 text-primary mx-auto mb-2 opacity-60" />
                            <p className="text-sm font-extrabold text-muted-foreground uppercase tracking-wider">AI Recommendation Suggestions</p>
                            <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                                {["Bollywood Celeb Interviews", "Telugu Radio Live", "Kids Panchatantra Stories", "Diwali Festival News"].map(tag => (
                                    <Button
                                        key={tag}
                                        onClick={() => setQuery(tag)}
                                        variant="secondary"
                                        size="sm"
                                        className="rounded-xl text-xs font-semibold cursor-pointer"
                                    >
                                        "{tag}"
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {loadingVideos && (
                        <div className="p-4 text-center text-xs text-muted-foreground animate-pulse font-bold">
                            Searching @RadioNyraUSA channel...
                        </div>
                    )}

                    {/* Videos Results */}
                    {videos.map(video => (
                        <div
                            key={video.id}
                            className="flex items-center gap-4 p-3 rounded-2xl bg-muted/40 hover:bg-muted border border-border/50 cursor-pointer transition-all group"
                            onClick={() => {
                                onOpenChange(false);
                                window.open(video.youtubeUrl, "_blank");
                            }}
                        >
                            <img src={video.thumbnail} alt={video.title} className="w-20 h-14 object-cover rounded-xl shrink-0" />
                            <div className="flex-1 min-w-0">
                                <span className="text-[10px] font-black uppercase tracking-wider text-primary">{video.isShort ? "Short" : "Video"}</span>
                                <h4 className="font-extrabold text-sm line-clamp-1 group-hover:text-primary transition-colors">{video.title}</h4>
                                <span className="text-xs text-muted-foreground font-medium">{video.viewCount}{video.duration ? ` • ${video.duration}` : ""}</span>
                            </div>
                            <Play className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                        </div>
                    ))}

                    {/* Podcasts Results */}
                    {filteredPodcasts.map((podcast, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 p-3 rounded-2xl bg-muted/40 hover:bg-muted border border-border/50 cursor-pointer transition-all group"
                            onClick={() => {
                                onOpenChange(false);
                                playStation(STATIONS.Hindi.id);
                            }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Podcast className="w-6 h-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-[10px] font-black uppercase tracking-wider text-secondary">Podcast Episode</span>
                                <h4 className="font-extrabold text-sm line-clamp-1 group-hover:text-primary transition-colors">{podcast.title}</h4>
                                <span className="text-xs text-muted-foreground font-medium">Host: {podcast.host}</span>
                            </div>
                            <Radio className="w-5 h-5 text-secondary shrink-0 group-hover:scale-110 transition-transform" />
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
