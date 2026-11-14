"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ApolloTracker } from "@/components/apollo-tracker"

const stats = [
  { number: "17", label: "organizations we work alongside" },
  { number: "50+", label: "major events supported each year" },
  { number: "250K+", label: "combined annual event attendees" },
  { number: "100K+", label: "community members impacted" },
]

const categories = [
  {
    title: "TEMPLES & FAITH",
    count: "04",
    partners: [
      "Sri Venkateswara Temple of NC",
      "BAPS Shri Swaminarayan Mandir",
      "Chinmaya Mission Raleigh Durham",
      "Sri Shirdi Sai Baba Mandir of NC",
    ],
  },
  {
    title: "CULTURAL HUBS",
    count: "04",
    partners: [
      "Hindu Society of North Carolina",
      "Apna RTP",
      "HumSub",
      "KIRAN",
    ],
  },
  {
    title: "REGIONAL & LANGUAGE",
    count: "07",
    partners: [
      "Tamil Sangam of Carolina",
      "TATA of NC",
      "TUTA NC",
      "Triangle Telugu Group Association",
      "Sampige NC Kannada Association",
      "Triangle Gujarati Association",
      "Triangle Bengali Association",
    ],
  },
  {
    title: "PROFESSIONAL NETWORKS",
    count: "02",
    partners: [
      "NC Indian American Technologists",
      "NC Indian American Professionals",
    ],
  },
]

export default function CommunityImpactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-red-700 selection:text-white text-gray-900">
      <Navigation />
      <ApolloTracker />

      <main className="pb-20">
        {/* Header */}
        <section className="bg-white border-b border-gray-100 pt-14 pb-10 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Channel label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#A81822] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#A81822] uppercase">
                Channel 07 · Community Partners
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6 uppercase tracking-tight">
              Associations &amp;<br />Community Partners
            </h1>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed max-w-3xl text-base md:text-lg">
              Trust travels through people. When a temple, a cultural group or a professional network welcomes a brand, every family in that circle hears about it from someone they know. For twelve years we have grown up alongside these organizations, covering their events and announcing their programs.
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="px-4 py-8">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-xl overflow-hidden grid grid-cols-2 sm:grid-cols-4" style={{ backgroundColor: "#7B1215" }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-6 ${i < stats.length - 1 ? "border-r border-white/20" : ""}`}
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-red-200 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section className="px-4 pb-8">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((cat, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  {/* Category header */}
                  <div
                    className="flex items-center justify-between px-5 py-3"
                    style={{ backgroundColor: "#A81822" }}
                  >
                    <span className="text-sm font-extrabold tracking-widest text-white uppercase">
                      {cat.title}
                    </span>
                    <span className="text-sm font-bold text-white/80">
                      {cat.count}
                    </span>
                  </div>

                  {/* Partner list */}
                  <ul className="px-5 py-4 space-y-2">
                    {cat.partners.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <span
                          className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#A81822" }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Box */}
        <section className="px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white border border-gray-200 rounded-xl px-6 py-5 shadow-sm">
              <p className="text-gray-700 italic text-sm md:text-base leading-relaxed">
                "Every one is a community of many families, so one introduction reaches a whole circle of trusted households."
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
