import { PARTNERS } from "@/lib/partners"

export function PartnersMarquee() {
  return (
    <div
      role="list"
      tabIndex={0}
      aria-label={`All ${PARTNERS.length} Radio Nyra partner and client logos. Scroll horizontally or swipe to browse.`}
      className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      style={{ scrollbarWidth: "thin" }}
    >
      {PARTNERS.map((partner) => {
        const cardClassName = "flex h-28 w-48 shrink-0 snap-start items-center justify-center rounded-2xl border border-border bg-white p-5 shadow-sm transition-[box-shadow,border-color] hover:border-primary/30 hover:shadow-md sm:h-32 sm:w-56 sm:p-6"
        const image = <img src={partner.image} alt={`${partner.name} logo`} title={partner.name} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />

        if (partner.link) {
          return <a key={partner.name} role="listitem" href={partner.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${partner.name}`} className={`${cardClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}>{image}</a>
        }

        return <div key={partner.name} role="listitem" title={partner.name} className={cardClassName}>{image}</div>
      })}
    </div>
  )
}
