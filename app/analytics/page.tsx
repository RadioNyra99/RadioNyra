"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ApolloTracker } from "@/components/apollo-tracker"
import { CountUp } from "@/components/ui/count-up"
import { 
  BarChart3, PieChart, TrendingUp, Users, MapPin, 
  Target, Smartphone, Laptop, Radio, Activity, Globe, Compass, Headphones 
} from "lucide-react"

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      <Navigation />
      <ApolloTracker />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-border pb-8">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-primary">
                Network <span className="text-foreground">Analytics</span>
              </h1>
              <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mt-2">
                Live performance dashboard, audience reach, and campaign impact metrics
              </p>
            </div>
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-600 px-4 py-2 text-xs font-black uppercase tracking-widest rounded-full shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              Live Tracking Enabled
            </div>
          </div>

          {/* Stats Dashboard Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Weekly Listeners", end: 100, suffix: "K+", icon: Users },
              { label: "App Installations", end: 120, suffix: "K+", icon: Smartphone },
              { label: "Email Open Rate", end: 34, suffix: "%", icon: Target },
              { label: "Partner Ads Impressions", end: 2.1, suffix: "M", icon: Activity }
            ].map((stat, i) => (
              <div key={i} className="bg-card border border-border p-6 shadow-sm hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-foreground tracking-tighter mb-1">
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2000} decimals={stat.end === 2.1 ? 1 : 0} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-border/50 pb-6">
            {[
              { id: "overview", label: "Audience Overview", icon: Users },
              { id: "platforms", label: "Platforms & Channels", icon: Laptop },
              { id: "content", label: "Content & Shows", icon: Radio },
              { id: "growth", label: "Traffic & Growth", icon: TrendingUp }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab Content Areas */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Age Distribution Card */}
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-black uppercase tracking-tight italic mb-6 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-primary" /> Listener Age Demographics
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Young Professionals (Age 25-35)", pct: 45, color: "bg-primary" },
                    { label: "Family / Homeowners (Age 35-50)", pct: 35, color: "bg-secondary" },
                    { label: "Students / Youth (Under 25)", pct: 12, color: "bg-green-500" },
                    { label: "Elders / Seniors (Age 50+)", pct: 8, color: "bg-amber-600" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <span>{item.label}</span>
                        <span className="text-foreground">{item.pct}%</span>
                      </div>
                      <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
                        <div className={`${item.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${item.pct}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Geographic Core Card */}
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-black uppercase tracking-tight italic mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Geographic Core Reach
                </h3>
                <div className="space-y-4">
                  {[
                    { city: "Cary / Morrisville, NC", share: "34%", role: "Tech / Expat Core" },
                    { city: "Raleigh / Durham, NC", share: "28%", role: "Metro / University Reach" },
                    { city: "Atlanta Metro, GA", share: "16%", role: "On-Air 107.5 FM HD3" },
                    { city: "Philadelphia Metro, PA", share: "12%", role: "On-Air 103.9 FM HD2" },
                    { city: "Other National Digital", share: "10%", role: "App / Web streams" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-border pb-3 text-xs font-semibold text-muted-foreground">
                      <div className="text-left">
                        <p className="text-foreground font-black uppercase tracking-tight text-sm italic">{item.city}</p>
                        <p className="text-[10px] mt-0.5">{item.role}</p>
                      </div>
                      <span className="text-primary font-black text-sm">{item.share}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "platforms" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Platform Share Card */}
              <div className="bg-card border border-border p-8 lg:col-span-2">
                <h3 className="text-xl font-black uppercase tracking-tight italic mb-6 flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-primary" /> Listener Platform Share
                </h3>
                
                {/* Horizontal progress visualization */}
                <div className="w-full h-8 bg-muted flex rounded-full overflow-hidden mb-8 shadow-inner">
                  <div className="bg-primary h-full hover:opacity-90 transition-opacity" style={{ width: "45%" }} title="Mobile Apps: 45%" />
                  <div className="bg-secondary h-full hover:opacity-90 transition-opacity" style={{ width: "30%" }} title="Smart Speakers: 30%" />
                  <div className="bg-green-500 h-full hover:opacity-90 transition-opacity" style={{ width: "15%" }} title="Web Player: 15%" />
                  <div className="bg-amber-600 h-full hover:opacity-90 transition-opacity" style={{ width: "10%" }} title="Terrestrial HD Radio: 10%" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  {[
                    { label: "Mobile Apps", val: "45%", color: "border-primary" },
                    { label: "Alexa / Google Home", val: "30%", color: "border-secondary" },
                    { label: "Web Players", val: "15%", color: "border-green-500" },
                    { label: "FM / HD Radio", val: "10%", color: "border-amber-600" }
                  ].map((p, i) => (
                    <div key={i} className={`p-4 bg-muted/30 border-l-4 ${p.color} text-center`}>
                      <p className="text-lg font-black text-foreground italic">{p.val}</p>
                      <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mt-0.5">{p.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Streaming bitrates */}
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-black uppercase tracking-tight italic mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" /> Quality Settings
                </h3>
                <div className="space-y-4 text-xs font-semibold text-muted-foreground leading-relaxed">
                  <div className="p-4 bg-muted/40 border border-border">
                    <p className="font-black text-foreground uppercase tracking-wider">192kbps AAC Stereo</p>
                    <p className="text-[10px] mt-1">High-fidelity digital stream used by mobile applications & direct web links. CD-quality reproduction.</p>
                  </div>
                  <div className="p-4 bg-muted/40 border border-border">
                    <p className="font-black text-foreground uppercase tracking-wider">96kbps MP3 Mono</p>
                    <p className="text-[10px] mt-1">Standard compression settings for voice assistant devices and smart home integration to support low-bandwidth connections.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "content" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Popular Shows Grid */}
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-black uppercase tracking-tight italic mb-6 flex items-center gap-2">
                  <Radio className="w-5 h-5 text-primary" /> Top Performing Shows
                </h3>
                <div className="space-y-4">
                  {[
                    { rank: 1, name: "Hello Vaishnavi", share: "34%", host: "Vaishnavi Palleda" },
                    { rank: 2, name: "Geet Bazaar", share: "28%", host: "Dr. Taj & Dr. Caldwell" },
                    { rank: 3, name: "Chinna Mata", share: "18%", host: "Priya" },
                    { rank: 4, name: "Mana Muchatlu", share: "12%", host: "Kanthi" },
                    { rank: 5, name: "Zara Muskurao", share: "8%", host: "Aayushii" }
                  ].map((show, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-border pb-3.5 text-xs font-bold text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black flex items-center justify-center shrink-0">
                          {show.rank}
                        </span>
                        <div className="text-left">
                          <p className="text-foreground uppercase tracking-tight italic text-sm">{show.name}</p>
                          <p className="text-[10px] text-muted-foreground font-semibold uppercase mt-0.5">Host: {show.host}</p>
                        </div>
                      </div>
                      <span className="text-primary font-black text-sm">{show.share} Share</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Podcasts analytics mockup */}
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-black uppercase tracking-tight italic mb-6 flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-primary" /> Podcast Listenership
                </h3>
                <div className="space-y-4 text-xs font-semibold text-muted-foreground leading-relaxed">
                  <div className="flex justify-between items-center p-4 bg-muted/30 border border-border">
                    <div className="text-left">
                      <p className="font-black text-foreground uppercase">Indian Diaspora Stories</p>
                      <p className="text-[10px]">Average play duration: 24 mins</p>
                    </div>
                    <span className="font-black text-primary text-sm">45k Plays</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/30 border border-border">
                    <div className="text-left">
                      <p className="font-black text-foreground uppercase">Tech & Immigration Chronicles</p>
                      <p className="text-[10px]">Average play duration: 18 mins</p>
                    </div>
                    <span className="font-black text-primary text-sm">32k Plays</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/30 border border-border">
                    <div className="text-left">
                      <p className="font-black text-foreground uppercase">Bollywood Retro & Trivia</p>
                      <p className="text-[10px]">Average play duration: 32 mins</p>
                    </div>
                    <span className="font-black text-primary text-sm">29k Plays</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "growth" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Traffic Channels */}
              <div className="bg-card border border-border p-8 lg:col-span-2">
                <h3 className="text-xl font-black uppercase tracking-tight italic mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" /> Traffic Acquisition Channels
                </h3>
                <div className="space-y-4">
                  {[
                    { channel: "Organic Search (SEO)", pct: 42, details: "Google, Bing results" },
                    { channel: "Direct Traffic", pct: 28, details: "Bookmark, address bar" },
                    { channel: "Social Referral", pct: 18, details: "Instagram, WhatsApp communities" },
                    { channel: "Partner Sites & Backlinks", pct: 12, details: "Radio directories, local blogs" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        <div className="text-left">
                          <span className="text-foreground font-black text-sm uppercase tracking-tight italic">{item.channel}</span>
                          <span className="text-[10px] block font-semibold text-muted-foreground/80 mt-0.5">{item.details}</span>
                        </div>
                        <span className="text-primary font-black text-sm">{item.pct}%</span>
                      </div>
                      <div className="w-full bg-muted h-2.5 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: `${item.pct}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backlink Growth and DA */}
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-black uppercase tracking-tight italic mb-6 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-primary" /> Backlink & Authority
                </h3>
                <div className="space-y-6 text-center">
                  <div className="p-6 bg-muted/30 border border-border flex flex-col items-center">
                    <span className="text-5xl font-black text-primary italic">38</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-2">Domain Authority (DA)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <div className="text-left">
                      <p className="text-foreground">Total Backlinks</p>
                      <p className="text-[9px]">Referring domains: 420+</p>
                    </div>
                    <span className="font-black text-foreground">8.2k</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
