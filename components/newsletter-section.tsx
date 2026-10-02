"use client"

import React, { useState } from "react"
import { Mail, CheckCircle2, Radio, Youtube, Calendar, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trackEvent } from "@/lib/analytics"

// Google Apps Script Web App — saves subscribers to Google Sheets
const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzExvuDSmy3RC3r5DpeDpzzDZlvBKaN9wkVMkmZdp_tO1FTN0nx4TiHItyMjntHb01wzA/exec"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === "loading") return

    setStatus("loading")
    setErrorMsg("")

    trackEvent({
      category: "CTA",
      action: "footer_newsletter_signup",
      label: email,
    })

    try {
      // Build form data so Apps Script can read it as a plain POST
      const formData = new FormData()
      formData.append("email", email)
      formData.append("timestamp", new Date().toISOString())
      formData.append("source", "RadioNyra Website Newsletter")

      const res = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        body: formData,
        // no-cors because Apps Script redirects; we just fire-and-forget
        mode: "no-cors",
      })

      // With no-cors we always get opaque response — treat as success
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 4000)
    } catch (err) {
      console.error("Newsletter subscription error:", err)
      setStatus("error")
      setErrorMsg("Something went wrong. Please try again.")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  return (
    <section className="py-8 md:py-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white border-t border-zinc-800">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-black uppercase tracking-widest mb-3">
          <Mail className="w-4 h-4" />
          Radio Nyra VIP Newsletter
        </div>

        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic">
          Stay Connected With Indian Subcontinent Media
        </h2>

        <p className="text-zinc-300 text-xs md:text-sm font-medium mt-2 max-w-2xl mx-auto">
          Get weekly highlights of live radio shows, trending YouTube celeb interviews, and local Indian
          community events delivered to your inbox.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5 text-xs font-bold uppercase tracking-wider text-zinc-300">
          <div className="flex items-center justify-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
            <Radio className="w-4 h-4 text-red-500" />
            <span>Weekly Live Show Schedules</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
            <Youtube className="w-4 h-4 text-red-500" />
            <span>Top 10 Video Countdown</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
            <Calendar className="w-4 h-4 text-red-500" />
            <span>Local Festival Guides</span>
          </div>
        </div>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            className="bg-white/10 border-white/20 text-white placeholder:text-zinc-400 h-14 rounded-2xl px-5 text-sm font-medium focus-visible:ring-2 focus-visible:ring-red-500"
            required
          />
          <Button
            type="submit"
            size="lg"
            disabled={status === "loading" || status === "success"}
            className="w-full sm:w-auto h-14 bg-red-600 hover:bg-red-700 text-white font-black uppercase text-xs tracking-widest px-8 rounded-2xl cursor-pointer shadow-xl shadow-red-600/40 shrink-0 disabled:opacity-70"
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Subscribing...
              </span>
            ) : status === "success" ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-300" /> Subscribed!
              </span>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>

        {status === "error" && (
          <p className="mt-3 text-red-400 text-xs flex items-center justify-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" /> {errorMsg}
          </p>
        )}

        {status === "success" && (
          <p className="mt-3 text-emerald-400 text-xs font-bold">
            ✅ You&apos;re now subscribed! Check your inbox for a welcome email.
          </p>
        )}
      </div>
    </section>
  )
}

