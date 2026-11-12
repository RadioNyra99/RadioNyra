import { RADIO_FREQUENCIES } from "@/lib/radio-content"

function MarketTickerItems() {
  return RADIO_FREQUENCIES.map((market) => (
    <div key={market.market} className="flex shrink-0 items-center gap-2 border-r border-white/15 pr-4 last:border-0 last:pr-0">
      <span className="text-[9px] font-extrabold uppercase tracking-[.14em] text-white/50">{market.market}</span>
      <span className="text-[10px] font-semibold text-white/90">{market.channels.join(" · ")}</span>
    </div>
  ))
}

export function FrequencyBar() {
  return (
    <div className="border-b border-white/10 bg-[#142342] text-white">
      <div
        role="region"
        aria-label="Radio Nyra broadcast frequencies"
        tabIndex={0}
        className="frequency-marquee-viewport mx-auto max-w-7xl overflow-x-auto px-4 py-2.5 [scrollbar-width:none] focus-visible:outline-none sm:px-6 [&::-webkit-scrollbar]:hidden"
      >
        <div className="frequency-marquee-track flex w-max" aria-live="off">
          <div className="flex shrink-0 items-center gap-3 pr-3"><MarketTickerItems /></div>
          <div aria-hidden="true" className="flex shrink-0 items-center gap-3 pr-3"><MarketTickerItems /></div>
        </div>
      </div>
    </div>
  )
}
