"use client"

export function FrequencyBar() {
    const text = "HINDI 99.9FM HD4 I 101.9FM I 1490 AM I TELUGU 99.9FM HD3 RALEIGH - DURHAM NC USA"

    return (
        <div className="bg-[#0000FF] border-y border-white/20 overflow-hidden py-3 shadow-lg relative z-40">
            <div className="flex animate-marquee whitespace-nowrap">
                <div className="flex items-center gap-16 px-4">
                    <span className="text-sm md:text-base font-black text-white uppercase tracking-tighter italic flex items-center gap-8 drop-shadow-md">
                        {text} <span className="text-white/50">★</span>
                    </span>
                    <span className="text-sm md:text-base font-black text-white uppercase tracking-tighter italic flex items-center gap-8 drop-shadow-md">
                        {text} <span className="text-white/50">★</span>
                    </span>
                </div>
                {/* Duplicate for seamless scrolling */}
                <div className="flex items-center gap-16 px-4">
                    <span className="text-sm md:text-base font-black text-white uppercase tracking-tighter italic flex items-center gap-8 drop-shadow-md">
                        {text} <span className="text-white/50">★</span>
                    </span>
                    <span className="text-sm md:text-base font-black text-white uppercase tracking-tighter italic flex items-center gap-8 drop-shadow-md">
                        {text} <span className="text-white/50">★</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
