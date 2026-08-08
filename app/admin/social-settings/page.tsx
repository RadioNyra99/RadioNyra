"use client"

import React, { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Share2, Save, RefreshCw, CheckCircle2, ShieldCheck, Youtube, Instagram, Facebook, Linkedin, MessageCircle, Send } from "lucide-react"
import { getSocialSettings, saveSocialSettings, SocialMediaSettings } from "@/lib/social-config"
import { clearYouTubeCache } from "@/lib/youtube-service"

export default function SocialSettingsPage() {
    const [settings, setSettings] = useState<SocialMediaSettings | null>(null);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        setSettings(getSocialSettings());
    }, []);

    if (!settings) return null;

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        saveSocialSettings(settings);
        clearYouTubeCache();
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Navigation />
            <FrequencyBar />
            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Share2 className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Social Media Admin Settings</h1>
                            <p className="text-xs text-muted-foreground font-medium">Configure official Radio Nyra handles, channel IDs, and API auto-sync settings</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-black uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4" />
                        Official APIs Only
                    </div>
                </div>

                <form onSubmit={handleSave} className="space-y-8">
                    {/* YouTube Config Card */}
                    <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-border/60">
                            <div className="flex items-center gap-3">
                                <Youtube className="w-6 h-6 text-red-600 fill-red-600" />
                                <h3 className="font-extrabold text-base uppercase tracking-tight">YouTube Platform Settings</h3>
                            </div>
                            <div className="flex items-center gap-2">
                                <Label htmlFor="yt-enabled" className="text-xs font-bold uppercase">Enable</Label>
                                <Switch
                                    id="yt-enabled"
                                    checked={settings.youtube.enabled}
                                    onCheckedChange={(val) => setSettings({
                                        ...settings,
                                        youtube: { ...settings.youtube, enabled: val }
                                    })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label className="text-xs font-bold">YouTube Channel ID</Label>
                                <Input
                                    value={settings.youtube.channelId}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        youtube: { ...settings.youtube, channelId: e.target.value }
                                    })}
                                    className="mt-1 font-mono text-xs rounded-xl"
                                />
                                <span className="text-[10px] text-muted-foreground">Official Channel ID for @RadioNyraUSA</span>
                            </div>

                            <div>
                                <Label className="text-xs font-bold">Channel Handle</Label>
                                <Input
                                    value={settings.youtube.handle}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        youtube: { ...settings.youtube, handle: e.target.value }
                                    })}
                                    className="mt-1 font-mono text-xs rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Instagram Config Card */}
                    <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-border/60">
                            <div className="flex items-center gap-3">
                                <Instagram className="w-6 h-6 text-pink-600" />
                                <h3 className="font-extrabold text-base uppercase tracking-tight">Instagram Account</h3>
                            </div>
                            <div className="flex items-center gap-2">
                                <Label htmlFor="ig-enabled" className="text-xs font-bold uppercase">Enable</Label>
                                <Switch
                                    id="ig-enabled"
                                    checked={settings.instagram.enabled}
                                    onCheckedChange={(val) => setSettings({
                                        ...settings,
                                        instagram: { ...settings.instagram, enabled: val }
                                    })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label className="text-xs font-bold">Instagram Handle</Label>
                                <Input
                                    value={settings.instagram.handle}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        instagram: { ...settings.instagram, handle: e.target.value }
                                    })}
                                    className="mt-1 font-mono text-xs rounded-xl"
                                />
                            </div>

                            <div>
                                <Label className="text-xs font-bold">Official Profile URL</Label>
                                <Input
                                    value={settings.instagram.url}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        instagram: { ...settings.instagram, url: e.target.value }
                                    })}
                                    className="mt-1 font-mono text-xs rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Facebook & LinkedIn Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Facebook */}
                        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-border/60">
                                <div className="flex items-center gap-3">
                                    <Facebook className="w-6 h-6 text-blue-600" />
                                    <h3 className="font-extrabold text-sm uppercase tracking-tight">Facebook Page</h3>
                                </div>
                                <Switch
                                    checked={settings.facebook.enabled}
                                    onCheckedChange={(val) => setSettings({
                                        ...settings,
                                        facebook: { ...settings.facebook, enabled: val }
                                    })}
                                />
                            </div>
                            <div>
                                <Label className="text-xs font-bold">Page URL</Label>
                                <Input
                                    value={settings.facebook.url}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        facebook: { ...settings.facebook, url: e.target.value }
                                    })}
                                    className="mt-1 font-mono text-xs rounded-xl"
                                />
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-border/60">
                                <div className="flex items-center gap-3">
                                    <Linkedin className="w-6 h-6 text-sky-600" />
                                    <h3 className="font-extrabold text-sm uppercase tracking-tight">LinkedIn Company</h3>
                                </div>
                                <Switch
                                    checked={settings.linkedin.enabled}
                                    onCheckedChange={(val) => setSettings({
                                        ...settings,
                                        linkedin: { ...settings.linkedin, enabled: val }
                                    })}
                                />
                            </div>
                            <div>
                                <Label className="text-xs font-bold">Company URL</Label>
                                <Input
                                    value={settings.linkedin.url}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        linkedin: { ...settings.linkedin, url: e.target.value }
                                    })}
                                    className="mt-1 font-mono text-xs rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sync & Cache Duration */}
                    <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
                        <h3 className="font-extrabold text-base uppercase tracking-tight pb-3 border-b border-border/60">
                            Auto-Sync & Performance Caching
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label className="text-xs font-bold">API Auto-Refresh Interval (Minutes)</Label>
                                <Input
                                    type="number"
                                    value={settings.autoSyncIntervalMinutes}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        autoSyncIntervalMinutes: parseInt(e.target.value, 10) || 15
                                    })}
                                    className="mt-1 rounded-xl"
                                />
                            </div>
                            <div>
                                <Label className="text-xs font-bold">Cache Duration (Minutes)</Label>
                                <Input
                                    type="number"
                                    value={settings.cacheDurationMinutes}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        cacheDurationMinutes: parseInt(e.target.value, 10) || 30
                                    })}
                                    className="mt-1 rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Bar */}
                    <div className="flex items-center justify-between pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => clearYouTubeCache()}
                            className="rounded-2xl text-xs font-bold uppercase tracking-wider px-6 py-6 cursor-pointer"
                        >
                            <RefreshCw className="w-4 h-4 mr-2" /> Clear Social Cache
                        </Button>

                        <Button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xs uppercase tracking-wider px-8 py-6 rounded-2xl cursor-pointer shadow-lg"
                        >
                            {saved ? (
                                <span className="flex items-center gap-2 text-green-300">
                                    <CheckCircle2 className="w-4 h-4" /> Settings Saved!
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <Save className="w-4 h-4" /> Save Social Settings
                                </span>
                            )}
                        </Button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
}
