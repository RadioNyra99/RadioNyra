"use client"

import { useEffect, useState, useRef } from "react"

interface CountUpProps {
    end: number
    duration?: number
    suffix?: string
    prefix?: string
}

export function CountUp({ end, duration = 2000, suffix = "", prefix = "" }: CountUpProps) {
    const [count, setCount] = useState(0)
    const elementRef = useRef<HTMLSpanElement>(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
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
                            setCount(Math.floor(start))
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
    }, [end, duration])

    return (
        <span ref={elementRef} className="tabular-nums">
            {prefix}{count}{suffix}
        </span>
    )
}
