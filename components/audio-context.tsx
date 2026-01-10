"use client"

import React, { createContext, useContext, useState, useRef, useEffect, ReactNode, useCallback } from "react"
import { STATIONS, Station } from "@/lib/stations"

interface AudioContextType {
    isPlaying: boolean
    currentStation: Station
    volume: number
    isMuted: boolean
    isLoading: boolean
    error: string | null
    togglePlay: () => void
    toggleMute: () => void
    setVolume: (volume: number) => void
    playStation: (stationId: string) => void
    setIsLoading: (loading: boolean) => void
    setError: (error: string | null) => void
    metadata: { title: string; artwork: string; listeners: number }
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
    const [isPlaying, setIsPlaying] = useState(false)
    // Default to Hindi
    const [currentStation, setCurrentStation] = useState<Station>(STATIONS.Hindi)
    const [volume, setVolumeState] = useState(1)
    const [isMuted, setIsMuted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [metadata, setMetadata] = useState({
        title: "Live Stream",
        artwork: "/images/radio-nyra-logo.jpg",
        listeners: 0
    })

    const playStation = useCallback((stationId: string) => {
        const station = Object.values(STATIONS).find(s => s.id === stationId)
        if (station) {
            setError(null)
            if (currentStation.id !== station.id) {
                setIsPlaying(false)
                setIsLoading(true)
                setCurrentStation(station)
                // Allow state to propagate then play is handled by the player component effect
                setTimeout(() => setIsPlaying(true), 100)
            } else {
                if (!isPlaying) setIsPlaying(true)
            }
        }
    }, [currentStation, isPlaying])

    const togglePlay = useCallback(() => setIsPlaying(prev => !prev), [])

    const toggleMute = useCallback(() => setIsMuted(prev => !prev), [])

    const setVolume = useCallback((val: number) => {
        const v = Math.max(0, Math.min(1, val))
        setVolumeState(v)
        if (v > 0) setIsMuted(false)
    }, [])

    // Metadata polling
    useEffect(() => {
        // Reset metadata on station change (optimistic UI)
        setMetadata(prev => ({ ...prev, title: "Loading...", listeners: 0 }))

        const fetchMetadata = async () => {
            try {
                // Handle potential placeholder URLs that might fail
                if (!currentStation.statusUrl || currentStation.statusUrl.includes("placeholder")) {
                    setMetadata({
                        title: currentStation.name + " Live",
                        artwork: "/images/radio-nyra-logo.jpg",
                        listeners: 1250 // Mock listeners for stability
                    })
                    return;
                }

                const response = await fetch(currentStation.statusUrl)
                if (!response.ok) throw new Error("Metadata fetch failed");
                const data = await response.json()

                if (data && data.current_track) {
                    setMetadata({
                        title: data.current_track.title || "Live Stream",
                        artwork: data.current_track.artwork_url_large || data.current_track.artwork_url || "/images/radio-nyra-logo.jpg",
                        listeners: data.listeners || data.current_listeners || 0
                    })
                }
            } catch (error) {
                console.warn("Failed to fetch metadata, using fallback", error)
                // Fallback metadata so UI doesn't look broken
                setMetadata(prev => ({
                    ...prev,
                    title: currentStation.name + " Live",
                    artwork: "/images/radio-nyra-logo.jpg"
                }))
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
            isLoading,
            error,
            togglePlay,
            toggleMute,
            setVolume,
            playStation,
            setIsLoading,
            setError,
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
