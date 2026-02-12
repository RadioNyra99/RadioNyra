"use client"

import { useEffect } from "react"

declare global {
    interface Window {
        trackingFunctions: {
            onLoad: (config: { appId: string }) => void
        }
    }
}

export function ApolloTracker() {
    useEffect(() => {
        const n = Math.random().toString(36).substring(7)
        const o = document.createElement("script")

        // Use custom tracking subdomain if available, otherwise fallback to default
        const trackingHost = process.env.NEXT_PUBLIC_APOLLO_TRACKING_HOST || "track.radionyra.com"
        o.src = `https://${trackingHost}/micro/website-tracker/tracker.iife.js?nocache=` + n

        o.async = true
        o.defer = true
        o.onload = function () {
            window.trackingFunctions.onLoad({ appId: "66ace887ea444502d0456cbb" })
        }
        document.head.appendChild(o)

        return () => {
            // Cleanup on unmount
            if (o.parentNode) {
                o.parentNode.removeChild(o)
            }
        }
    }, [])

    return null
}
