import { PARTNERS } from "@/lib/partners"

function PartnerCards() {
  return PARTNERS.map((partner, index) => {
    const cardClassName =
      "flex h-32 w-56 sm:h-36 sm:w-64 shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-sm transition-[box-shadow,border-color,transform] hover:scale-105 hover:border-primary/40 hover:shadow-md"
    const image = (
      <img
        src={partner.image}
        alt={`${partner.name} logo`}
        title={partner.name}
        loading="lazy"
        decoding="async"
        className="max-h-full max-w-full object-contain"
      />
    )

    if (partner.link) {
      return (
        <a
          key={`${partner.name}-${index}`}
          role="listitem"
          href={partner.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${partner.name}`}
          className={`${cardClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
        >
          {image}
        </a>
      )
    }

    return (
      <div key={`${partner.name}-${index}`} role="listitem" title={partner.name} className={cardClassName}>
        {image}
      </div>
    )
  })
}

export function PartnersMarquee() {
  return (
    <div className="partner-marquee-viewport relative w-full overflow-hidden py-2">
      {/* Soft gradient edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent" />

      <div
        role="list"
        aria-label={`All ${PARTNERS.length} Radio Nyra partner and client logos.`}
        className="partner-marquee-track flex w-max items-center"
      >
        <div className="flex shrink-0 items-center gap-4 pr-4">
          <PartnerCards />
        </div>
        <div aria-hidden="true" className="flex shrink-0 items-center gap-4 pr-4">
          <PartnerCards />
        </div>
      </div>
    </div>
  )
}
