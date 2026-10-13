"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section, SectionHeading } from "@/components/section"
import { getNewsItems } from "@/lib/content-discovery"

/**
 * Section G — Latest News. One lead story plus a few supporting headlines so
 * the homepage stays editorial rather than becoming a wall of text. Full
 * articles live on their own pages.
 */
export function LatestNewsSection() {
  const items = getNewsItems().slice(0, 5)
  const [featured, ...supporting] = items

  if (!featured) return null

  return (
    <Section id="news" variant="alt">
      <SectionHeading
        eyebrow="Latest news"
        title="Stories from the community"
        href="/news"
        linkLabel="All news"
      />

      <div className="grid gap-5 lg:grid-cols-5">
        {/* Featured story */}
        <Link
          href={featured.href}
          className="media-card group lg:col-span-3"
        >
          <div className="ratio-16-9 overflow-hidden bg-muted">
            <img
              src={featured.image}
              alt=""
              loading="lazy"
              width={800}
              height={450}
              className="transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-5">
            <p className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                {featured.category}
              </span>
              <time dateTime={featured.date}>{featured.dateLabel}</time>
            </p>
            <h3 className="text-xl font-extrabold leading-snug tracking-tight text-foreground sm:text-2xl">
              {featured.title}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-bold uppercase tracking-wider text-primary">
              Read the story
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </div>
        </Link>

        {/* Supporting stories */}
        <div className="flex flex-col gap-3 lg:col-span-2">
          {supporting.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary/40"
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-muted sm:h-20 sm:w-20">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary">
                  {item.category}
                </p>
                <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-foreground group-hover:text-primary">
                  {item.title}
                </h3>
                <time
                  dateTime={item.date}
                  className="mt-1 block text-[11px] text-muted-foreground"
                >
                  {item.dateLabel}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
