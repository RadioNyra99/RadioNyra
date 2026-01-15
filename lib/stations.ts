export interface Station {
    id: string
    name: string
    streamUrl: string
    statusUrl: string
}

export const STATIONS: Record<string, Station> = {
    Hindi: {
        id: "s8d06d0298",
        name: "Hindi",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status"
    },
    Telugu: {
        id: "sefba541aa",
        name: "Telugu",
        streamUrl: "https://s4.radio.co/sefba541aa/listen",
        statusUrl: "https://public.radio.co/stations/sefba541aa/status"
    }
}

export const getStationsList = () => Object.entries(STATIONS).map(([key, station]) => ({
    ...station,
    key // Use this for UI if needed
}))
