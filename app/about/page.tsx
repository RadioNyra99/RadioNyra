import type { Metadata } from "next"
import {
  ArrowRight,
  Newspaper,
  HeartHandshake,
  Radio,
  RadioTower,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RADIO_NYRA_PRESS_STORIES } from "@/lib/press-coverage"

export const metadata: Metadata = {
  title: "About Radio Nyra | The Indian Subcontinent Community Media Network",
  description:
    "Pioneering since 2014, Radio Nyra is North Carolina's only 24/7 Indian Subcontinent community media network — and the Triangle's most trusted cultural platform.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-foreground selection:bg-primary selection:text-white dark:bg-zinc-950">
      <Navigation />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Main Document Container matching flyer */}
        <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 lg:p-12 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
          {/* Header Title Section */}
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="h-20 w-3 sm:h-24 sm:w-4 shrink-0 rounded-sm bg-[#A81822]" />
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-950 leading-[0.95] dark:text-white">
                ABOUT
                <br />
                RADIO NYRA
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-base lg:text-lg font-black uppercase tracking-[0.14em] text-[#A81822]">
            THE INDIAN SUBCONTINENT COMMUNITY MEDIA NETWORK
          </p>
          <div className="mt-3 h-1 w-24 bg-[#A81822]" />

          {/* Two-Column Story and Press Section */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:items-start">
            {/* Left Column: Brand Story */}
            <div className="space-y-6 text-zinc-700 text-sm sm:text-base leading-relaxed dark:text-zinc-300">
              <p>
                <strong className="font-extrabold text-zinc-950 dark:text-white">Pioneering since 2014</strong>, Radio Nyra is North Carolina's only 24/7 Indian Subcontinent community media network — and the Triangle's most trusted cultural platform for over a decade. We were built to serve a community, not to sell ads. That distinction is what makes every campaign work.
              </p>
              <p>
                From temples to grocery stores, from Diwali celebrations to cricket events — Radio Nyra is woven into the daily life of Indian Subcontinent families across Raleigh-Durham. We don't just broadcast to our community.
              </p>
              <p className="text-xl sm:text-2xl font-black text-[#A81822] tracking-tight">
                We belong to it.
              </p>
            </div>

            {/* Right Column: Our Heritage In The Press */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60">
              <h2 className="text-xs font-black uppercase tracking-widest text-[#A81822]">
                OUR HERITAGE IN THE PRESS
              </h2>
              <p className="mt-1 text-xs text-zinc-600 font-medium dark:text-zinc-400">
                A legacy of community trust recognized for decades.
              </p>

              <div className="mt-4 rounded-lg border border-zinc-300 bg-[#fffdf7] p-3 text-left shadow-inner dark:border-zinc-700 dark:bg-zinc-900">
                <div className="border-y-2 border-zinc-800 py-2 text-center dark:border-zinc-300">
                  <p className="font-serif text-lg font-black leading-none tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-xl">DURHAM MORNING HERALD</p>
                  <p className="mt-1 text-[8px] font-bold uppercase tracking-[.11em] text-zinc-600 dark:text-zinc-400">Local · State · Sports · Radio-TV · Classified</p>
                </div>
                <div className="grid grid-cols-[.9fr_1.1fr] gap-3 py-3">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[.1em] text-[#A81822]">Radio &amp; community</p>
                    <p className="mt-1 text-[10px] leading-relaxed text-zinc-700 dark:text-zinc-300">A newspaper-style tribute to Durham’s local radio history and the community voices that bring neighbors together.</p>
                    <div className="mt-2 border-t border-zinc-300 pt-2 dark:border-zinc-700">
                      <p className="text-[8px] font-bold uppercase tracking-wide text-zinc-500">From the archive</p>
                      <p className="mt-1 text-[9px] font-semibold text-zinc-700 dark:text-zinc-300">November 1963 · Durham, North Carolina</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="space-y-1.5 border-l border-zinc-300 pl-3 dark:border-zinc-700">
                    <div className="h-2 w-4/5 bg-zinc-300 dark:bg-zinc-700" />
                    <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800" />
                    <div className="h-1.5 w-11/12 bg-zinc-200 dark:bg-zinc-800" />
                    <div className="h-1.5 w-4/5 bg-zinc-200 dark:bg-zinc-800" />
                    <div className="mt-2 h-8 border border-zinc-300 bg-[repeating-linear-gradient(0deg,transparent,transparent_5px,#d4d4d4_5px,#d4d4d4_6px)] dark:border-zinc-700 dark:bg-[repeating-linear-gradient(0deg,transparent,transparent_5px,#3f3f46_5px,#3f3f46_6px)]" />
                    <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800" />
                    <div className="h-1.5 w-5/6 bg-zinc-200 dark:bg-zinc-800" />
                    <div className="h-1.5 w-4/5 bg-zinc-200 dark:bg-zinc-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: What Makes Us Different */}
          <div className="my-10 flex items-center gap-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#A81822] whitespace-nowrap tracking-tight">
              What Makes Us Different
            </h2>
            <div className="h-0.5 flex-1 bg-red-200 dark:bg-red-950" />
          </div>

          {/* 4 Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-center transition-transform hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A81822] text-white shadow-md shadow-red-900/20 mb-3">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                COMMUNITY-FIRST MEDIA NETWORK
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                We are built by the community, for the community. Our focus is people, culture, and connection — not profits.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-center transition-transform hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A81822] text-white shadow-md shadow-red-900/20 mb-3">
                <Radio className="h-6 w-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                TRUSTED VOICE, REAL INFLUENCE
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                Our audience doesn't just listen — they trust us, gather around us, and act on what we say.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-center transition-transform hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A81822] text-white shadow-md shadow-red-900/20 mb-3">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                DECADES OF CREDIBILITY
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                From local headlines to cultural pride, we've earned our place as a reliable, respected voice.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-center transition-transform hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A81822] text-white shadow-md shadow-red-900/20 mb-3">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                RESULTS THAT GROW
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                We turn trust into impact — driving measurable results for brands that want to grow with our community.
              </p>
            </div>
          </div>

          {/* Bottom Angled Dark Red Banner */}
          <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-[#8A151B] to-[#A81822] p-6 text-white shadow-lg sm:p-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <RadioTower className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider">
                    24/7 BROADCAST
                  </h4>
                  <p className="mt-1 text-xs text-white/80 leading-relaxed">
                    Always on, always connected with our community.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider">
                    DEEP COMMUNITY ROOTS
                  </h4>
                  <p className="mt-1 text-xs text-white/80 leading-relaxed">
                    Woven into the daily life of Indian Subcontinent families across the Triangle.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider">
                    PARTNER IN PROGRESS
                  </h4>
                  <p className="mt-1 text-xs text-white/80 leading-relaxed">
                    We grow with our partners, building long-term relationships that create lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="mt-10 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 px-5 py-8 dark:border-zinc-800 dark:bg-zinc-900 sm:px-8 sm:py-10">
          <p className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#A81822]"><Newspaper className="h-4 w-4" aria-hidden />In the press</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950 dark:text-white sm:text-4xl">Radio Mirchi’s US rollout.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Selected coverage of the 2019 US expansion and the partnership with Arohi Media connected to Radio Nyra’s early story.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {RADIO_NYRA_PRESS_STORIES.map((story) => (
              <a key={story.href} href={story.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-52 flex-col rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-[#A81822]/50 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="text-[9px] font-extrabold uppercase tracking-[.14em] text-[#A81822]">{story.publication} <span className="text-zinc-500">· {story.date}</span></p>
                <h3 className="mt-3 flex-1 text-base font-extrabold leading-snug text-zinc-950 group-hover:text-[#A81822] dark:text-white">{story.title}</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-zinc-600 group-hover:text-[#A81822] dark:text-zinc-400">Read article <ArrowRight className="h-3.5 w-3.5" /></span>
              </a>
            ))}
          </div>
        </section>
        {/* Founder & Leadership: About Ravi Cherukuri */}
        <section className="mt-10 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#A81822] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#A81822] uppercase">
              Founder &amp; Leadership
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[auto_1fr] items-start">
            <div className="flex flex-col items-center sm:items-start">
              <div className="h-44 w-44 sm:h-52 sm:w-52 shrink-0 overflow-hidden rounded-2xl border-4 border-[#A81822]/20 shadow-xl">
                <img
                  src="/rc-founder.webp"
                  alt="Ravi Cherukuri, Founder of Radio Nyra and CEO of Arohi Media"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-center sm:text-left">
                <h3 className="text-lg font-black text-zinc-950 dark:text-white">Ravi Cherukuri</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#A81822] mt-0.5">Founder, Radio Nyra</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">CEO, Arohi Media LLC</p>
              </div>
            </div>

            <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed dark:text-zinc-300">
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
                About Ravi Cherukuri
              </h2>

              <p>
                Ravi Cherukuri is the founder of Radio Nyra, a South Asian radio network operated by Arohi Media LLC in North Carolina’s Research Triangle. His work in broadcasting began in 2014, when Arohi Media acquired Durham’s WDUR 1490 AM and returned it to the air on July 9 with a 24-hour format featuring Hindi news, talk shows, and Bollywood music. The station gave Indian and South Asian listeners in the Triangle a local radio home.
              </p>

              <p>
                Arohi Media expanded from AM to 101.9 FM and 99.9 FM HD4, later adding Telugu programming on 99.9 FM HD3. In 2019, The Economic Times identified Cherukuri as CEO of Arohi Media when reporting on its U.S. partnership with Radio Mirchi. Cherukuri described his goal as bringing South Asian communities together through a shared platform for news, conversation, and music. Radio Nyra now also features podcasts and live events.
              </p>

              {/* Founder's Vision Quote */}
              <div className="mt-6 rounded-2xl border-l-4 border-[#A81822] bg-zinc-50 p-5 sm:p-6 shadow-sm dark:bg-zinc-950/60">
                <blockquote className="text-sm sm:text-base italic leading-relaxed text-zinc-800 dark:text-zinc-200">
                  &ldquo;At RadioNyra, our vision has always been to bring South Asian communities closer by creating a shared platform that celebrates our culture, connects our people, and keeps them informed and entertained. Through the power of music, news, conversations, and community engagement, we strive to create meaningful connections across borders.&rdquo;
                </blockquote>
                <p className="mt-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#A81822]">
                  — Ravi Cherukuri, CEO, Arohi Media
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
