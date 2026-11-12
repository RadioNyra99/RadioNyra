"use client"

import React, { useState } from "react"
import { Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trackEvent } from "@/lib/analytics"

const NEWSLETTER_ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT?.trim()

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === "loading") return

    setStatus("loading")
    setErrorMsg("")

    if (!NEWSLETTER_ENDPOINT) {
      setStatus("error")
      setErrorMsg("Newsletter signup is awaiting an email provider. [PLACEHOLDER: configure the provider before launch.]")
      return
    }

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

      const response = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })
      if (!response.ok) throw new Error("The newsletter provider did not accept the signup.")
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 4000)
    } catch {
      setStatus("error")
      setErrorMsg("Something went wrong. Please try again.")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  return (
    <section className="border-t border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black py-10 text-white sm:py-12 md:py-14">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/20 px-3 py-1 text-xs font-black uppercase tracking-widest text-red-400">
          <Mail className="w-4 h-4" />
          Radio Nyra Newsletter
        </div>

        <h2 className="mx-auto max-w-3xl text-2xl font-black leading-tight tracking-tight sm:text-3xl md:text-4xl">
          Stay connected with Radio Nyra.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-xs font-medium leading-relaxed text-zinc-300 md:text-sm">
          Get weekly highlights of live radio shows, trending YouTube celeb interviews, and local Indian
          community events delivered to your inbox.
        </p>

        <form onSubmit={handleSubscribe} className="mx-auto mt-6 flex max-w-lg flex-col items-center gap-3 sm:flex-row">
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
          You&apos;re subscribed to Radio Nyra updates.
          </p>
        )}
      </div>
    </section>
  )
}

