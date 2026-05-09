"use client"

import { useEffect } from "react"
import { useAudio } from "@/components/audio-context"
import { STATIONS } from "@/lib/stations"
import { HomeView } from "@/components/home-view"

export default function TeluguPage() {
    const { playStation } = useAudio()

    useEffect(() => {
        // Auto-play Telugu station when this page mounts
        playStation(STATIONS.Telugu.id)
    }, [playStation])

    return <HomeView />
}
