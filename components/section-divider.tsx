export function SectionDivider({ variant = "simple" }: { variant?: "simple" | "leaves" | "waves" }) {
    if (variant === "leaves") {
        return (
            <div className="w-full h-8 md:h-12 opacity-20 text-green-600 overflow-hidden">
                <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0 30 Q 30 0 60 30 T 120 30 T 180 30 T 240 30 T 300 30 T 360 30 T 420 30 T 480 30 T 540 30 T 600 30 T 660 30 T 720 30 T 780 30 T 840 30 T 900 30 T 960 30 T 1020 30 T 1080 30 T 1140 30 T 1200 30" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>
        )
    }

    return (
        <div className="w-full flex justify-center py-4 opacity-30 text-primary">
            <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute -mt-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
            </div>
        </div>
    )
}
