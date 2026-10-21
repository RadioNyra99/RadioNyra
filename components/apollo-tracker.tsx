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

        // Use reliable fast CDN host (avoids go.radionyra.com which times out)
        const trackingHost = process.env.NEXT_PUBLIC_APOLLO_TRACKING_HOST || "assets.apollo.io"
        const defaultHost = "assets.apollo.io"

        o.src = `https://${trackingHost}/micro/website-tracker/tracker.iife.js?nocache=` + n
        o.async = true
        o.defer = true

        o.onload = function () {
            if (window.trackingFunctions) {
                window.trackingFunctions.onLoad({ appId: "66ace887ea444502d0456cbb" })
            }
        }

        o.onerror = function () {
            console.warn(`Apollo tracker failed to load from ${trackingHost}, falling back to ${defaultHost}`)
            const fallbackScript = document.createElement("script")
            fallbackScript.src = `https://${defaultHost}/micro/website-tracker/tracker.iife.js?nocache=` + n
            fallbackScript.async = true
            fallbackScript.defer = true
            fallbackScript.onload = function () {
                if (window.trackingFunctions) {
                    window.trackingFunctions.onLoad({ appId: "66ace887ea444502d0456cbb" })
                }
            }
            document.head.appendChild(fallbackScript)
        }

        document.head.appendChild(o)

        return () => {
            if (o.parentNode) o.parentNode.removeChild(o)
        }
    }, [])

    return null
}
