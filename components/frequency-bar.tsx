"use client"

export function FrequencyBar() {
    const text = "HINDI 99.9FM HD4 I 101.9FM I 1490 AM I ATLANTA 107.5FM HD3 I BALTIMORE (D.C.) 92.3 FM HD2 I CLEVELAND 93.1 FM HD2 I COLUMBUS 107.5FM-HD2 I PHILADELPHIA 103.9 HD2 FM I ST. LOUIS 95.5FM-HD2 I TELUGU 99.9FM HD3 RALEIGH - DURHAM NC USA"

    return (
        <div className="bg-[#0000FF] border-y border-white/20 overflow-hidden py-3 shadow-lg relative z-40">
            <div className="flex whitespace-nowrap animate-marquee">
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
