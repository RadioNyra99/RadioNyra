"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  LayoutDashboard, FileText, BarChart3, Users, Radio, Settings,
  LogOut, Sparkles, Globe, TrendingUp, Eye, Clock,
  ArrowUpRight, Activity, Podcast, Calendar
} from "lucide-react"

const quickStats = [
  { label: "Weekly Listeners", value: "100K+", icon: Users, trend: "+12%", color: "text-blue-500" },
  { label: "Email Subscribers", value: "50K+", icon: FileText, trend: "+8%", color: "text-green-500" },
  { label: "WhatsApp Members", value: "100K+", icon: Globe, trend: "+15%", color: "text-emerald-500" },
  { label: "Instagram Reach", value: "500K+", icon: Eye, trend: "+22%", color: "text-pink-500" },
]

const recentActivity = [
  { action: "Blog draft generated", detail: "Indian Events Raleigh-Durham", time: "2 min ago", icon: Sparkles },
  { action: "New subscriber", detail: "via WhatsApp form", time: "15 min ago", icon: Users },
  { action: "Ad campaign started", detail: "MC Construction Q3", time: "1 hour ago", icon: TrendingUp },
  { action: "Show schedule updated", detail: "Hello Vaishnavi timeslot", time: "3 hours ago", icon: Calendar },
  { action: "Podcast episode published", detail: "Community Spotlight #42", time: "5 hours ago", icon: Podcast },
]

const dashboardModules = [
  {
    title: "AI Blog Generator",
    description: "Generate SEO-optimized blog drafts with AI assistance",
    href: "/admin/blog-generator",
    icon: Sparkles,
    badge: "AI",
    badgeColor: "bg-purple-500"
  },
  {
    title: "Analytics Overview",
    description: "View listener metrics, engagement rates, and growth trends",
    href: "/analytics",
    icon: BarChart3,
    badge: "Live",
    badgeColor: "bg-green-500"
  },
  {
    title: "Content Management",
    description: "Manage blog posts, shows, events, and media content",
    href: "/blog",
    icon: FileText,
    badge: null,
    badgeColor: null
  },
  {
    title: "Station Settings",
    description: "Configure broadcast frequencies, streams, and schedules",
    href: "/schedule",
    icon: Radio,
    badge: null,
    badgeColor: null
  },
  {
    title: "Event Manager",
    description: "Create and manage community events and concerts",
    href: "/events",
    icon: Calendar,
    badge: null,
    badgeColor: null
  },
  {
    title: "SEO & Metadata",
    description: "Review and optimize page metadata across the site",
    href: "/admin/dashboard",
    icon: Globe,
    badge: "SEO",
    badgeColor: "bg-blue-500"
  },
]

export default function AdminDashboardPage() {
  const router = useRouter()
  const [isAuthed, setIsAuthed] = useState(false)
  const [adminEmail, setAdminEmail] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const auth = sessionStorage.getItem("nyra_admin_auth")
    const email = sessionStorage.getItem("nyra_admin_email")
    if (auth === "true" && email) {
      setIsAuthed(true)
      setAdminEmail(email)
    } else {
      router.replace("/admin")
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    sessionStorage.removeItem("nyra_admin_auth")
    sessionStorage.removeItem("nyra_admin_email")
    router.push("/admin")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Loading Dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthed) return null

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      <Navigation />

      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 border-b border-border/40 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <LayoutDashboard className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground">
                  Admin <span className="text-primary">Dashboard</span>
                </h1>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-0.5">
                  Welcome back, {adminEmail}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">System Online</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="rounded-full font-bold uppercase tracking-widest text-[10px] text-muted-foreground hover:text-red-500 hover:border-red-500/50"
              >
                <LogOut className="w-3.5 h-3.5 mr-1.5" /> Sign Out
              </Button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {quickStats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`text-xs font-black uppercase tracking-wider ${stat.color}`}>
                      {stat.trend}
                    </span>
                  </div>
                  <p className="text-3xl font-black tracking-tighter text-foreground">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Dashboard Modules (2/3 width) */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-lg font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" /> Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dashboardModules.map((mod, i) => {
                  const Icon = mod.icon
                  return (
                    <Link
                      key={i}
                      href={mod.href}
                      className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="flex items-center gap-2">
                          {mod.badge && (
                            <span className={`text-[9px] font-black uppercase tracking-widest text-white px-2 py-0.5 rounded-full ${mod.badgeColor}`}>
                              {mod.badge}
                            </span>
                          )}
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                      <h3 className="font-bold text-foreground text-base uppercase tracking-tight mb-1">{mod.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{mod.description}</p>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Recent Activity (1/3 width) */}
            <div className="space-y-6">
              <h2 className="text-lg font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" /> Recent Activity
              </h2>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                {recentActivity.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-3 p-4 border-b border-border/30 last:border-b-0 hover:bg-muted/30 transition-colors">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-foreground truncate">{item.action}</p>
                        <p className="text-xs text-muted-foreground truncate">{item.detail}</p>
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/70 shrink-0 mt-1">
                        {item.time}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Station Health */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                  <Radio className="w-4 h-4" /> Station Health
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">Hindi Stream (HD4)</span>
                    <span className="text-xs font-black text-green-500 uppercase">● Online</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">Telugu Stream (HD3)</span>
                    <span className="text-xs font-black text-green-500 uppercase">● Online</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">Web Player</span>
                    <span className="text-xs font-black text-green-500 uppercase">● Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">Mobile App</span>
                    <span className="text-xs font-black text-green-500 uppercase">● v3.2.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
