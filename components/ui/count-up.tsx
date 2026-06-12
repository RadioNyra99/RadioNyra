"use client"

import { useEffect, useState, useRef } from "react"

interface CountUpProps {
    end: number
    duration?: number
    suffix?: string
    prefix?: string
    decimals?: number
}

export function CountUp({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }: CountUpProps) {
    // Start with the end value as a fallback for SSR or if JS fails/is disabled
    const [count, setCount] = useState(end)
    const elementRef = useRef<HTMLSpanElement>(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        // Reset to 0 when mounted to prepare for scroll animation
        if (!hasAnimated.current) {
            setCount(0)
        }

        let timer: NodeJS.Timeout | null = null;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    let start = 0
                    const increment = end / (duration / 16) // 60fps

                    timer = setInterval(() => {
                        start += increment
                        if (start >= end) {
                            setCount(end)
                            if (timer) clearInterval(timer)
                        } else {
                            setCount(decimals === 0 ? Math.floor(start) : start)
                        }
                    }, 16)
                }
            },
            { threshold: 0.1 }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (timer) clearInterval(timer)
            observer.disconnect()
        }
    }, [end, duration, decimals])

    return (
        <span ref={elementRef} className="tabular-nums">
            {prefix}{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
        </span>
    )
}
