"use client"

import React, { useState } from "react"
import { Play, Share2, Eye, Clock, Check, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { YouTubeVideoItem } from "@/lib/youtube-service"
import { formatPublishedDate } from "@/lib/youtube-service"
import { trackVideoPlay } from "@/lib/analytics"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface VideoCardProps {
    video: YouTubeVideoItem;
}

export function VideoCard({ video }: VideoCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleWatch = () => {
        trackVideoPlay(video.id, video.title, video.isShort ? "Short" : "Video");
        setIsOpen(true);
    };

    const handleShare = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(video.youtubeUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const displayDate = formatPublishedDate(video.publishedAt);

    return (
        <>
            <div className="group relative bg-card hover:bg-card/90 border border-border/60 hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col h-full">
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-muted cursor-pointer" onClick={handleWatch}>
                    <img
                        src={video.thumbnailHigh || video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Live Badge */}
                    {video.isLive && (
                        <div className="absolute top-3 left-3 z-10">
                            <span className="px-2.5 py-1 rounded-md bg-red-600 text-white text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                LIVE
                            </span>
                        </div>
                    )}

                    {/* Short Badge */}
                    {video.isShort && !video.isLive && (
                        <div className="absolute top-3 left-3 z-10">
                            <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                                Short
                            </span>
                        </div>
                    )}

                    {/* Duration Badge */}
                    {video.duration && (
                        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 px-2 py-0.5 rounded bg-black/80 text-white text-[11px] font-bold backdrop-blur">
                            <Clock className="w-3 h-3 text-white/80" />
                            <span>{video.duration}</span>
                        </div>
                    )}

                    {/* Play Hover Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-xs">
                        <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 fill-white ml-1" />
                        </div>
                    </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 text-muted-foreground text-xs font-semibold mb-2">
                            {video.viewCount && (
                                <span className="flex items-center gap-1">
                                    <Eye className="w-3.5 h-3.5 text-primary" />
                                    {video.viewCount}
                                </span>
                            )}
                            {displayDate && (
                                <>
                                    <span>•</span>
                                    <span>{displayDate}</span>
                                </>
                            )}
                        </div>

                        <h3 className="font-extrabold text-foreground text-base sm:text-lg leading-snug line-clamp-2 group-hover:text-primary transition-colors cursor-pointer" onClick={handleWatch}>
                            {video.title}
                        </h3>

                        <p className="text-muted-foreground text-xs mt-2 line-clamp-2 font-normal">
                            {video.description}
                        </p>
                    </div>

                    {/* Card Actions */}
                    <div className="flex items-center gap-2 pt-2 border-t border-border/40">
                        <Button
                            onClick={handleWatch}
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider h-10 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
                        >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>Watch Now</span>
                        </Button>

                        <Button
                            onClick={handleShare}
                            variant="outline"
                            size="icon"
                            className="h-10 w-10 rounded-xl border-border hover:bg-muted cursor-pointer"
                            title="Share Video"
                        >
                            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4 text-foreground" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Video Modal Player */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-4xl p-0 bg-black border-zinc-800 overflow-hidden text-white rounded-2xl">
                    <DialogHeader className="p-4 bg-zinc-900 border-b border-zinc-800 flex flex-row items-center justify-between">
                        <DialogTitle className="text-white text-base font-extrabold line-clamp-1 flex items-center gap-2">
                            <Youtube className="w-5 h-5 text-red-500" />
                            {video.title}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="relative aspect-video w-full">
                        <iframe
                            src={`${video.embedUrl}?autoplay=1`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                        />
                    </div>
                    <div className="p-4 bg-zinc-950 flex justify-between items-center text-xs text-zinc-400">
                        <span>{video.viewCount}{displayDate ? ` • ${displayDate}` : ""}</span>
                        <a
                            href={video.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-400 hover:underline font-bold"
                        >
                            Open on YouTube &rarr;
                        </a>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
