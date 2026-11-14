"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Clock3,
  Eye,
  Headphones,
  Instagram,
  Mail,
  MessageCircle,
  Play,
  Radio,
  Share2,
  Star,
  Youtube,
  type LucideIcon,
} from "lucide-react"
import { AUDIENCE_STATS, YOUTUBE_STATS } from "@/lib/radio-content"
import { showAudioPlayer } from "@/lib/audio-player-utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type PlatformHelpKey = "alexa" | "assistant" | "siri"

const platformHelp: Record<PlatformHelpKey, { title: string; command: string; sub?: string }> = {
  alexa: {
    title: "Listen on Alexa",
    command: "Alexa, open Radio Nyra Hindi",
    sub: 'Or say: “Alexa, open Radio Nyra Telugu.”',
  },
  assistant: {
    title: "Listen on Google Assistant",
    command: "OK Google, play Radio Nyra",
  },
  siri: {
    title: "Listen with Siri",
    command: "Hey Siri, play Radio Nyra",
  },
}

const platforms: Array<{
  label: string
  detail: string
  icon?: LucideIcon
  logo?: string
  href?: string
  onClick?: () => void
  helpKey?: PlatformHelpKey
}> = [
  { label: "App Store", detail: "Download on the", logo: "/apple-icon.webp", href: "https://apps.apple.com/us/app/radio-nyra-raleigh-durham/id6469009980" },
  { label: "Google Play", detail: "Get it on", logo: "/google-play.svg", href: "https://play.google.com/store/apps/details?id=com.bb2757c5ba19.app" },
  { label: "Alexa", detail: "Listen with", logo: "/alexa.webp", helpKey: "alexa" },
  { label: "Google Assistant", detail: "Listen with", logo: "/google-assisstance.webp", helpKey: "assistant" },
  { label: "Siri", detail: "Listen with", logo: "/siri.webp", helpKey: "siri" },
  { label: "99.9 FM HD4 / HD3", detail: "In-car HD Radio", icon: Radio, href: "/how-to-tune" },
  { label: "Web Player", detail: "Listen on Radio Nyra", icon: Play, onClick: () => showAudioPlayer() },
]

const audienceIcons: LucideIcon[] = [Headphones, Mail, MessageCircle, Instagram, Eye, Radio, Share2]
const youtubeIcons: LucideIcon[] = [Youtube, Play, Eye, Clock3]

export function AudienceReachSection() {
  const [activeHelpKey, setActiveHelpKey] = useState<PlatformHelpKey | null>(null)
  const activeHelp = activeHelpKey ? platformHelp[activeHelpKey] : null

  return (
    <>
      <section className="border-y border-border bg-card py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6 text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Download and listen</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl">Listen to RadioNyra anytime, anywhere.</h2>
            <p className="mt-2 text-sm font-semibold text-muted-foreground">Your world. Your Music.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {platforms.map((platform) => {
              const Icon = platform.icon
              const content = (
                <span className="flex min-h-14 items-center gap-2.5 rounded-full border border-border bg-background px-4 py-2.5 shadow-sm transition-colors hover:border-primary/40">
                  {platform.logo ? <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm ring-1 ring-border/70"><img src={platform.logo} alt="" className="h-full w-full object-contain" /></span> : Icon ? <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden /> : null}
                  <span className="text-left leading-tight">
                    <span className="block text-[8px] font-bold uppercase tracking-[.12em] text-muted-foreground">{platform.detail}</span>
                    <span className="mt-0.5 block text-xs font-extrabold text-foreground">{platform.label}</span>
                  </span>
                </span>
              )
              const controlClass = "rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"

              if (platform.href) {
                const external = platform.href.startsWith("https://")
                return <a key={platform.label} href={platform.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-label={`${platform.detail} ${platform.label}`} className={controlClass}>{content}</a>
              }
              if (platform.onClick) {
                return <button key={platform.label} type="button" onClick={platform.onClick} aria-label="Open Radio Nyra web player" className={controlClass}>{content}</button>
              }
              if (platform.helpKey) {
                return <button key={platform.label} type="button" onClick={() => setActiveHelpKey(platform.helpKey!)} aria-label={`${platform.detail} ${platform.label}`} className={controlClass}>{content}</button>
              }
              return <span key={platform.label}>{content}</span>
            })}
          </div>

          <div className="mt-9 grid grid-cols-2 gap-y-7 border-b border-border pb-9 sm:grid-cols-4 xl:grid-cols-7">
            {AUDIENCE_STATS.map((stat, index) => {
              const Icon = audienceIcons[index] ?? Radio
              return (
                <article key={stat.label} className="flex flex-col items-center px-2 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="h-5 w-5" aria-hidden /></span>
                  <p className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 max-w-36 text-[9px] font-extrabold uppercase leading-snug tracking-[.08em] text-muted-foreground sm:text-[10px]">{stat.label}</p>
                </article>
              )
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-7">
            <Link href="/advertise" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-extrabold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-primary/90 sm:text-sm">Grow your business with Radio Nyra <span aria-hidden>→</span></Link>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-muted/40 px-6 text-xs font-extrabold uppercase tracking-wide text-foreground transition-colors hover:bg-muted sm:text-sm">Contact us</Link>
          </div>
        </div>
      </section>
      <Dialog open={activeHelp !== null} onOpenChange={(open) => { if (!open) setActiveHelpKey(null) }}>
        {activeHelp && (
          <DialogContent className="border-none bg-white px-7 py-7 shadow-2xl sm:max-w-md">
            <DialogHeader><DialogTitle className="text-center text-xl font-black uppercase tracking-tight text-gray-900">{activeHelp.title}</DialogTitle></DialogHeader>
            <div className="space-y-4 py-2 text-center">
              <p className="text-xl font-extrabold italic text-primary">“{activeHelp.command}”</p>
              {activeHelp.sub && <p className="text-base text-gray-500">{activeHelp.sub}</p>}
              <Button onClick={() => setActiveHelpKey(null)} size="lg" className="w-full font-bold uppercase tracking-widest text-white">Got it</Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

export function YoutubeAnalyticsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#35100f] via-[#171313] to-black py-12 text-white sm:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(ellipse at 10% 0%, rgba(220,38,38,.22), transparent 45%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/15 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[.18em] text-red-300"><Youtube className="h-3.5 w-3.5" />YouTube channel analytics</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">@RadioNyraUSA on YouTube</h2>
        <p className="mt-2 text-sm text-white/65">Streaming Indian Subcontinent content since February 2021</p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {YOUTUBE_STATS.map((stat, index) => {
            const Icon = youtubeIcons[index] ?? Star
            return (
              <article key={stat.label} className="rounded-2xl border border-red-500/20 bg-white/[.055] px-3 py-5 sm:px-5 sm:py-6">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 text-red-400"><Icon className="h-5 w-5" aria-hidden /></span>
                <p className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-white/55 sm:text-[10px]">{stat.label}</p>
              </article>
            )
          })}
        </div>

        <p className="mt-6 text-sm text-white/65">Radio Nyra USA: Bollywood and South Asian radio, music, and stories from India to America.</p>
        <a href="https://www.youtube.com/@RadioNyraUSA?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex h-10 items-center gap-2 rounded-full bg-red-700/30 px-5 text-xs font-extrabold uppercase tracking-wide text-red-300 transition-colors hover:bg-red-700/45 hover:text-white"><Youtube className="h-4 w-4" />Subscribe</a>
      </div>
    </section>
  )
}
