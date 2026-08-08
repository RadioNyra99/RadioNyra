"use client"

import React, { useState } from "react"
import { Youtube, Flame, Radio, Mail, Play, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OFFICIAL_YOUTUBE_CHANNEL } from "@/lib/youtube-data"
import { fetchShorts, fetchPopularVideos, formatPublishedDate } from "@/lib/youtube-service"
import { useYouTube, useYouTubeChannelStats } from "@/lib/use-youtube"
import { SidebarVideoSkeleton } from "@/components/video-loading-states"
import { trackYouTubeSubscribe, trackEvent } from "@/lib/analytics"

export function StickySidebar() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const { subscriberCount } = useYouTubeChannelStats();

    // Fetch live data for sidebar widgets
    const { videos: shortsList, loading: loadingShorts } = useYouTube(
        () => fetchShorts(4),
        []
    );

    const { videos: popularList, loading: loadingPopular } = useYouTube(
        () => fetchPopularVideos(4),
        []
    );

    const handleSubscribe = () => {
        trackYouTubeSubscribe("Sticky Sidebar");
        window.open(OFFICIAL_YOUTUBE_CHANNEL.subscribeUrl, "_blank");
    };

    const handleNewsletter = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        trackEvent({ category: 'CTA', action: 'sidebar_newsletter', label: email });
        setSubscribed(true);
        setTimeout(() => {
            setEmail("");
            setSubscribed(false);
        }, 3000);
    };

    return (
        <aside className="sticky top-24 space-y-6">
            {/* Widget 1: Official YouTube Subscribe Card */}
            <div className="rounded-3xl bg-gradient-to-br from-red-950 via-zinc-900 to-black p-6 border border-red-900/40 text-white shadow-xl text-center">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-red-600/40">
                    <Youtube className="w-8 h-8 text-white fill-white" />
                </div>
                <h4 className="font-black text-lg uppercase tracking-tight">Official YouTube</h4>
                <p className="text-xs text-zinc-400 mt-1 mb-4 font-medium">{OFFICIAL_YOUTUBE_CHANNEL.handle} • {subscriberCount} Subs</p>
                <Button
                    onClick={handleSubscribe}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider h-11 rounded-xl cursor-pointer shadow-lg shadow-red-600/30"
                >
                    <Youtube className="w-4 h-4 mr-2 fill-white" /> Subscribe Now
                </Button>
            </div>

            {/* Widget 2: Latest Shorts */}
            <div className="rounded-3xl bg-card border border-border/80 p-6 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                    <Flame className="w-5 h-5 text-red-500 fill-red-500 animate-bounce" />
                    <h4 className="font-black text-base uppercase tracking-tight">Trending Shorts</h4>
                </div>
                <div className="space-y-3">
                    {loadingShorts ? (
                        <>
                            <SidebarVideoSkeleton />
                            <SidebarVideoSkeleton />
                        </>
                    ) : shortsList.length > 0 ? (
                        shortsList.slice(0, 2).map(short => (
                            <div
                                key={short.id}
                                className="flex items-center gap-3 p-2 rounded-xl bg-muted/40 hover:bg-muted border border-border/40 cursor-pointer transition-colors group"
                                onClick={() => window.open(short.youtubeUrl, "_blank")}
                            >
                                <img src={short.thumbnail} alt={short.title} className="w-14 h-14 object-cover rounded-lg shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <h5 className="text-xs font-bold line-clamp-2 group-hover:text-primary transition-colors">{short.title}</h5>
                                    <span className="text-[10px] text-muted-foreground font-semibold">{short.viewCount}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-xs text-muted-foreground text-center py-2">No shorts available</p>
                    )}
                </div>
            </div>

            {/* Widget 3: Upcoming Live Radio Shows */}
            <div className="rounded-3xl bg-card border border-border/80 p-6 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                    <Radio className="w-5 h-5 text-primary" />
                    <h4 className="font-black text-base uppercase tracking-tight">Upcoming Shows</h4>
                </div>
                <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-primary/5 border border-primary/20">
                        <span className="text-[10px] font-black uppercase text-primary">Radio Nyra Hindi • 99.9 FM</span>
                        <p className="font-bold text-foreground mt-0.5">Zara Muskurao with RJ Aayushii</p>
                        <span className="text-[10px] text-muted-foreground font-semibold">10:00 AM - 1:00 PM EST</span>
                    </div>

                    <div className="p-3 rounded-xl bg-secondary/5 border border-secondary/20">
                        <span className="text-[10px] font-black uppercase text-cyan-600">Radio Nyra Telugu • 99.9 FM</span>
                        <p className="font-bold text-foreground mt-0.5">Chinna Mata with RJ Priya</p>
                        <span className="text-[10px] text-muted-foreground font-semibold">8:00 AM - 11:00 AM EST</span>
                    </div>
                </div>
            </div>

            {/* Widget 4: Quick Newsletter */}
            <div className="rounded-3xl bg-zinc-950 p-6 border border-zinc-800 text-white shadow-md">
                <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-red-500" />
                    <h4 className="font-black text-sm uppercase tracking-tight">Nyra VIP Digest</h4>
                </div>
                <p className="text-[11px] text-zinc-400 mb-3 font-medium">Get weekly radio & YouTube highlights.</p>
                <form onSubmit={handleNewsletter} className="space-y-2">
                    <Input
                        type="email"
                        placeholder="Your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/10 border-white/20 text-xs h-10 rounded-xl"
                        required
                    />
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider h-10 rounded-xl cursor-pointer">
                        {subscribed ? <CheckCircle2 className="w-4 h-4 text-green-300" /> : "Join Digest"}
                    </Button>
                </form>
            </div>
        </aside>
    );
}
