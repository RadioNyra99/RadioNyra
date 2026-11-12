import type { Metadata } from "next"
import { Headphones, MessageCircle, Music2, Radio } from "lucide-react"
import { Footer } from "@/components/footer"
import { FrequencyBar } from "@/components/frequency-bar"
import { InquiryForm } from "@/components/inquiry-form"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Listener Voice | Radio Nyra",
  description: "Send Radio Nyra a song request, show feedback, topic idea, or community message.",
  alternates: { canonical: "/listener-voice" },
}

const waysToJoin = [
  { icon: Music2, title: "Request a song", text: "Tell the team what you would love to hear on air." },
  { icon: Headphones, title: "Share show feedback", text: "Let a host know what is working for you." },
  { icon: MessageCircle, title: "Suggest a topic", text: "Send an idea for a guest, story, or conversation." },
]

export default function ListenerVoicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <FrequencyBar />
      <main>
        <section className="bg-[#0b1631] py-12 text-white sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-red-300"><Radio className="h-4 w-4" /> Listener voice</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">What would you like to hear?</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">Send a song request, feedback for a show, a topic idea, or a note for the Radio Nyra team.</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-4">
            {waysToJoin.map(({ icon: Icon, title, text }) => (
              <article key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" aria-hidden /></span>
                <div><h2 className="font-extrabold">{title}</h2><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p></div>
              </article>
            ))}
            <p className="px-1 text-xs leading-relaxed text-muted-foreground">Please do not include private or sensitive information. Song requests are suggestions and may not be played on air.</p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8">
            <h2 className="mb-5 text-lg font-black">Send your message</h2>
            <InquiryForm kind="listener" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
