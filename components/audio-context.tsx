"use client"

import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react"
import { STATIONS, Station } from "@/lib/stations"

interface AudioContextType {
    isPlaying: boolean
    currentStation: Station
    volume: number
    isMuted: boolean
    togglePlay: () => void
    toggleMute: () => void
    setVolume: (volume: number) => void
    playStation: (stationId: string) => void
    metadata: { title: string; artwork: string; listeners: number }
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
    const [isPlaying, setIsPlaying] = useState(false)
    // Default to Hindi
    const [currentStation, setCurrentStation] = useState<Station>(STATIONS.Hindi)
    const [volume, setVolumeState] = useState(1)
    const [isMuted, setIsMuted] = useState(false)
    const [metadata, setMetadata] = useState({
        title: "Live Stream",
        artwork: "/images/radio-nyra-logo.jpg",
        listeners: 0
    })

    const playStation = (stationId: string) => {
        const station = Object.values(STATIONS).find(s => s.id === stationId)
        if (station) {
            if (currentStation.id !== station.id) {
                setIsPlaying(false)
                setCurrentStation(station)
                // Allow state to propagate then play
                setTimeout(() => setIsPlaying(true), 100)
            } else {
                // If same station, just ensure playing
                if (!isPlaying) setIsPlaying(true)
            }
        }
    }

    const togglePlay = () => setIsPlaying(!isPlaying)
    const toggleMute = () => setIsMuted(!isMuted)
    const setVolume = (val: number) => {
        const v = Math.max(0, Math.min(1, val))
        setVolumeState(v)
        if (v > 0) setIsMuted(false)
    }

    // Metadata polling
    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const response = await fetch(currentStation.statusUrl)
                const data = await response.json()
                if (data && data.current_track) {
                    setMetadata({
                        title: data.current_track.title || "Live Stream",
                        artwork: data.current_track.artwork_url_large || data.current_track.artwork_url || "/images/radio-nyra-logo.jpg",
                        // Try to get listener count if available in API, otherwise 0
                        listeners: data.listeners || data.current_listeners || 0
                    })
                }
            } catch (error) {
                console.error("Failed to fetch metadata:", error)
            }
        }

        fetchMetadata()
        const interval = setInterval(fetchMetadata, 30000)
        return () => clearInterval(interval)
    }, [currentStation])

    return (
        <AudioContext.Provider value={{
            isPlaying,
            currentStation,
            volume,
            isMuted,
            togglePlay,
            toggleMute,
            setVolume,
            playStation,
            metadata
        }}>
            {children}
        </AudioContext.Provider>
    )
}

export function useAudio() {
    const context = useContext(AudioContext)
    if (context === undefined) {
        throw new Error("useAudio must be used within an AudioProvider")
    }
    return context
}
