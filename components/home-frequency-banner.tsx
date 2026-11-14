import { RadioTower } from "lucide-react"

const frequencies = [
  { frequency: "101.9 FM", details: "Hindi · W270DT" },
  { frequency: "99.9 HD4", details: "Hindi · WCMC-FM" },
  { frequency: "1490 AM", details: "Hindi · WDUR" },
  { frequency: "99.3 FM-HD3", details: "Telugu · WCMC-FM" },
]

export function HomeFrequencyBanner() {
  return (
    <section className="bg-white px-4 py-5 sm:px-6 sm:py-6 lg:px-12" aria-label="Radio Nyra broadcast frequencies">
      <div className="mx-auto max-w-[1700px] overflow-hidden rounded-[10px] border border-red-950/10 bg-[#ad2115] px-5 py-5 text-white shadow-sm sm:px-7 sm:py-6">
        <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-white/80 sm:text-xs">
          Broadcasting live on:
        </p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4">
          {frequencies.map((station, index) => (
            <div key={station.frequency} className={`flex min-h-24 flex-col items-center justify-center px-2 text-center first:pl-0 last:pr-0 sm:min-h-20 sm:px-3 ${index % 2 === 0 ? "border-r border-white/35 sm:border-r" : ""} ${index < 2 ? "border-b border-white/35 sm:border-b-0" : ""} ${index === 1 ? "sm:border-r" : ""} ${index >= 2 ? "sm:border-b-0" : ""} ${index === 3 ? "sm:border-r-0" : ""}`}>
              <RadioTower className="mb-1.5 h-6 w-6 shrink-0 stroke-[1.8] sm:h-7 sm:w-7" aria-hidden />
              <span className="text-lg font-black leading-tight tracking-tight sm:text-xl">{station.frequency}</span>
              <span className="mt-1 text-[9px] font-medium text-white/80 sm:text-[10px]">({station.details})</span>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-white/40 pt-3 text-center text-[10px] font-semibold tracking-wide text-white/90 sm:mt-5 sm:pt-3.5 sm:text-xs">
          24 / 7 / 365 <span className="px-1.5 text-white/60">•</span> Indian News <span className="px-1.5 text-white/60">•</span> Talk <span className="px-1.5 text-white/60">•</span> Music <span className="px-1.5 text-white/60">•</span> Community
        </div>
      </div>
    </section>
  )
}
