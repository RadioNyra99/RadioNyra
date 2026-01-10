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
    metadata: { title: string; artwork: string }
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
        artwork: "/images/radio-nyra-logo.jpg"
    })

    // We keep a ref to the audio element so we can control it directly
    // Note: The actual <audio> element will still be in the AudioPlayer component likely, 
    // OR we can manage the audio object entirely here if it's headless.
    // However, since AudioPlayer has UI, let's keep the audio element in the UI component 
    // or manage it here to detach it from the UI. 
    // BETTER APPROACH: The Context holds the STATE. The AudioPlayer component (or a headless one) 
    // listens to the state and effects the audio element.

    // Actually, to ensure seamless playback even if UI re-renders, let's just manage state here.
    // The AudioPlayer component will read this state and control its internal global audio ref or 
    // we can lift the audio element ref here? 
    // Let's stick to the current pattern: AudioPlayer is the "singleton" player.
    // BUT the user wants a LIST of stations. Clicking one should play it.
    // So we need `playStation(id)` to update `currentStation`.

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
                        artwork: data.current_track.artwork_url_large || data.current_track.artwork_url || "/images/radio-nyra-logo.jpg"
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
