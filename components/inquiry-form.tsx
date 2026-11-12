"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, LoaderCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { trackLeadSubmit } from "@/lib/analytics"
import { RADIO_CONTENT } from "@/lib/radio-content"

type InquiryKind = "contact" | "advertising" | "listener"

export function InquiryForm({ kind }: { kind: InquiryKind }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "draft" | "error">("idle")
  const [message, setMessage] = useState("")
  const isAdvertising = kind === "advertising"
  const isListener = kind === "listener"
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "sending") return

    const form = event.currentTarget
    const data = new FormData(form)
    data.set("inquiry_type", kind)

    if (!endpoint) {
      const subject = `${isAdvertising ? "Advertising inquiry" : isListener ? "Listener message" : "Contact message"} — Radio Nyra`
      const body = Array.from(data.entries())
        .map(([key, value]) => `${key.replaceAll("_", " ")}: ${String(value)}`)
        .join("\n")
      const query = new URLSearchParams({ subject, body })
      setStatus("draft")
      setMessage("Your email app will open with this message. Review it and press Send there.")
      window.location.href = `mailto:${RADIO_CONTENT.contact.email}?${query.toString()}`
      return
    }

    setStatus("sending")
    setMessage("")

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (!response.ok) throw new Error("The form service did not accept the message.")

      trackLeadSubmit(isAdvertising ? "Advertising Inquiry" : "Contact Inquiry")
      form.reset()
      setStatus("success")
      setMessage("Thank you. Your message has been sent to the Radio Nyra team.")
    } catch {
      setStatus("error")
      setMessage("We could not send your message. Please try again or contact us by phone or WhatsApp.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label={isAdvertising ? "Advertising inquiry form" : isListener ? "Listener message form" : "Contact form"}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5 text-xs font-bold">
          <span>{isListener ? "Name (optional)" : "Name"}</span>
          <Input name="name" autoComplete="name" maxLength={100} placeholder="Your name" required={!isListener} className="h-11 rounded-xl bg-background" />
        </label>
        {isAdvertising && <label className="block space-y-1.5 text-xs font-bold"><span>Business</span><Input name="business" autoComplete="organization" maxLength={120} placeholder="Business or organization" required className="h-11 rounded-xl bg-background" /></label>}
        <label className="block space-y-1.5 text-xs font-bold">
          <span>{isListener ? "Email (optional)" : "Email"}</span>
          <Input name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@example.com" required={!isListener} className="h-11 rounded-xl bg-background" />
        </label>
        {!isListener && <label className="block space-y-1.5 text-xs font-bold">
          <span>Phone</span>
          <Input name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="Your phone number" className="h-11 rounded-xl bg-background" />
        </label>}
        {isAdvertising && <label className="block space-y-1.5 text-xs font-bold"><span>Monthly budget (USD)</span><Input name="budget" type="number" min="0" step="1" placeholder="Enter a budget" className="h-11 rounded-xl bg-background" /></label>}
        {isListener && <label className="block space-y-1.5 text-xs font-bold"><span>What is this about?</span><select name="request_type" required defaultValue="" className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm font-medium"><option value="" disabled>Choose a topic</option><option>Song request</option><option>Show feedback</option><option>Topic suggestion</option><option>Community poll idea</option><option>General message</option></select></label>}
        {isListener && <label className="block space-y-1.5 text-xs font-bold"><span>Song or show (optional)</span><Input name="song_or_show" maxLength={180} placeholder="Song title, artist, or show" className="h-11 rounded-xl bg-background" /></label>}
      </div>
      <label className="block space-y-1.5 text-xs font-bold">
        <span>{isListener ? "Your request or message" : "Message"}</span>
        <Textarea name="message" maxLength={3000} rows={5} placeholder={isAdvertising ? "Tell us about your campaign or sponsorship goals." : isListener ? "Tell the Radio Nyra team what you would like to share." : "How can we help?"} required className="min-h-32 resize-y rounded-xl bg-background" />
      </label>
      <Button type="submit" disabled={status === "sending" || status === "success"} className="h-12 w-full rounded-full font-extrabold">
        {status === "sending" ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" />Sending…</> : status === "success" ? <><CheckCircle2 className="mr-2 h-4 w-4" />Message sent</> : status === "draft" ? <><Send className="mr-2 h-4 w-4" />Open email draft</> : <><Send className="mr-2 h-4 w-4" />{isAdvertising ? "Send inquiry" : isListener ? "Send to Radio Nyra" : "Send message"}</>}
      </Button>
      {message && <p role={status === "error" ? "alert" : "status"} aria-live="polite" className={`text-sm leading-relaxed ${status === "error" ? "text-destructive" : status === "success" ? "text-emerald-700 dark:text-emerald-400" : "text-muted-foreground"}`}>{message}</p>}
      {!endpoint && status === "idle" && <p className="text-xs text-muted-foreground">Submitting opens your email app. You can also <a className="font-semibold text-primary hover:underline" href={`mailto:${RADIO_CONTENT.contact.email}`}>email {RADIO_CONTENT.contact.email}</a> directly.</p>}
    </form>
  )
}
