"use client"

import React, { useState, useEffect } from "react"
import { Instagram, Facebook, Linkedin, Youtube, MessageCircle, Send, Mail, CheckCircle2, ArrowUpRight, Radio, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getLiveYouTubeStats, getLiveSocialFeed, LiveChannelStats, LiveSocialFeedItem } from "@/lib/social-service"
import { getSocialSettings } from "@/lib/social-config"
import { trackEvent } from "@/lib/analytics"

export function SocialHub() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [ytStats, setYtStats] = useState<LiveChannelStats | null>(null);
    const [socialFeed, setSocialFeed] = useState<LiveSocialFeedItem[]>([]);
    const [loading, setLoading] = useState(true);

    const settings = getSocialSettings();

    useEffect(() => {
        let mounted = true;
        setLoading(true);

        Promise.all([
            getLiveYouTubeStats(),
            getLiveSocialFeed()
        ]).then(([yt, feed]) => {
            if (mounted) {
                setYtStats(yt);
                setSocialFeed(feed);
                setLoading(false);
            }
        }).catch(() => {
            if (mounted) setLoading(false);
        });

        return () => { mounted = false; };
    }, []);

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        trackEvent({
            category: 'CTA',
            action: 'newsletter_signup',
            label: email
        });
        setSubscribed(true);
        setTimeout(() => {
            setEmail("");
            setSubscribed(false);
        }, 3000);
    };

    return (
        <section id="social-hub" className="py-16 bg-muted/30 text-foreground border-y border-border">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest inline-block mb-3">
                        Official Social Media Hub
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">
                        Connect With Radio Nyra Across Channels
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base font-medium mt-3">
                        Stay connected with real-time updates from our official YouTube, Instagram, Facebook, LinkedIn, WhatsApp, and Telegram platforms.
                    </p>
                </div>

                {/* Quick Join Social Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
                    {/* YouTube */}
                    <a
                        href={settings.youtube.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-5 rounded-2xl bg-red-600 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer"
                    >
                        <Youtube className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="font-extrabold text-sm">YouTube</span>
                        <span className="text-[10px] opacity-90 uppercase tracking-widest font-bold mt-1">
                            {ytStats?.subscriberCount ? `${ytStats.subscriberCount} Subs` : "Official Channel"}
                        </span>
                    </a>

                    {/* Instagram */}
                    <a
                        href={settings.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer"
                    >
                        <Instagram className="w-8 h-8 mb-2 group-hover:rotate-12 transition-transform" />
                        <span className="font-extrabold text-sm">Instagram</span>
                        <span className="text-[10px] opacity-90 uppercase tracking-widest font-bold mt-1">{settings.instagram.handle}</span>
                    </a>

                    {/* Facebook */}
                    <a
                        href={settings.facebook.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-5 rounded-2xl bg-blue-600 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer"
                    >
                        <Facebook className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="font-extrabold text-sm">Facebook</span>
                        <span className="text-[10px] opacity-90 uppercase tracking-widest font-bold mt-1">Radio Nyra USA</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={settings.linkedin.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-5 rounded-2xl bg-sky-700 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer"
                    >
                        <Linkedin className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="font-extrabold text-sm">LinkedIn</span>
                        <span className="text-[10px] opacity-90 uppercase tracking-widest font-bold mt-1">Official Page</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={settings.whatsapp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-5 rounded-2xl bg-emerald-600 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer"
                    >
                        <MessageCircle className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="font-extrabold text-sm">WhatsApp</span>
                        <span className="text-[10px] opacity-90 uppercase tracking-widest font-bold mt-1">Community</span>
                    </a>

                    {/* Telegram */}
                    <a
                        href={settings.telegram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-5 rounded-2xl bg-sky-500 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer"
                    >
                        <Send className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="font-extrabold text-sm">Telegram</span>
                        <span className="text-[10px] opacity-90 uppercase tracking-widest font-bold mt-1">Official Channel</span>
                    </a>
                </div>

                {/* Real-Time Live Feed Section */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <Radio className="w-5 h-5 text-primary animate-pulse" />
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                                Official Social Feed
                            </h3>
                        </div>
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            Live Content Stream
                        </span>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="aspect-video bg-card/60 border border-border/40 rounded-2xl animate-pulse p-4 flex flex-col justify-end">
                                    <div className="w-full h-4 bg-muted/60 rounded mb-2" />
                                    <div className="w-2/3 h-3 bg-muted/40 rounded" />
                                </div>
                            ))}
                        </div>
                    ) : socialFeed.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {socialFeed.slice(0, 3).map(post => (
                                <a
                                    key={post.id}
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-md group hover:border-primary transition-all flex flex-col justify-between"
                                >
                                    {post.thumbnailUrl && (
                                        <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                            <img
                                                src={post.thumbnailUrl}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 text-white text-[10px] font-black uppercase tracking-wider">
                                                {post.platform}
                                            </span>
                                        </div>
                                    )}
                                    <div className="p-4 flex flex-col justify-between flex-1 gap-3">
                                        <div>
                                            <h4 className="font-extrabold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h4>
                                            {post.caption && (
                                                <p className="text-xs text-muted-foreground line-clamp-2 mt-1 font-normal">
                                                    {post.caption}
                                                </p>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs text-primary font-bold">
                                            <span className="inline-flex items-center gap-1">
                                                View Post <ArrowUpRight className="w-3.5 h-3.5" />
                                            </span>
                                            {post.likesCount && (
                                                <span className="text-[11px] text-muted-foreground">❤️ {post.likesCount}</span>
                                            )}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 text-center bg-card border border-border rounded-2xl">
                            <p className="text-sm font-bold text-muted-foreground mb-3">Visit our official social media handles for daily posts, videos, and live broadcasts.</p>
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <a href={settings.youtube.url} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase text-red-500 hover:underline">YouTube &rarr;</a>
                                <a href={settings.instagram.url} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase text-pink-500 hover:underline">Instagram &rarr;</a>
                                <a href={settings.facebook.url} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase text-blue-500 hover:underline">Facebook &rarr;</a>
                            </div>
                        </div>
                    )}
                </div>

                {/* Newsletter Subscription Box */}
                <div className="rounded-3xl bg-gradient-to-r from-red-600 via-orange-600 to-primary text-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-widest mb-4 backdrop-blur">
                            <Mail className="w-4 h-4" />
                            Radio Nyra Weekly Digest
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
                            Never Miss a Live Show or Community Event
                        </h3>
                        <p className="text-white/90 text-sm md:text-base mt-2 font-medium">
                            Subscribe for weekly radio show schedules, YouTube celeb interview releases, and local festival announcements.
                        </p>

                        <form onSubmit={handleNewsletterSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email address..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-white text-black h-14 rounded-2xl px-5 text-sm font-medium border-0 focus-visible:ring-2 focus-visible:ring-black"
                                required
                            />
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full sm:w-auto h-14 bg-black hover:bg-zinc-900 text-white font-black uppercase text-xs tracking-widest px-8 rounded-2xl cursor-pointer shadow-xl"
                            >
                                {subscribed ? (
                                    <span className="flex items-center gap-2 text-green-400">
                                        <CheckCircle2 className="w-4 h-4" /> Subscribed!
                                    </span>
                                ) : (
                                    "Join Newsletter"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
