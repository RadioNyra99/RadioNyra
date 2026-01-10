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
    },
    Tamil: {
        id: "s8d06d0298-tm", // Using Hindi stream as placeholder
        name: "Tamil",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status"
    },
    Punjabi: {
        id: "sefba541aa-pb", // Using Telugu stream as placeholder
        name: "Punjabi",
        streamUrl: "https://s4.radio.co/sefba541aa/listen",
        statusUrl: "https://public.radio.co/stations/sefba541aa/status"
    },
    Malayalam: {
        id: "s8d06d0298-ml",
        name: "Malayalam",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status"
    },
    Kannada: {
        id: "sefba541aa-kn",
        name: "Kannada",
        streamUrl: "https://s4.radio.co/sefba541aa/listen",
        statusUrl: "https://public.radio.co/stations/sefba541aa/status"
    },
    Bengali: {
        id: "s8d06d0298-bn",
        name: "Bengali",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status"
    },
    Gujarati: {
        id: "sefba541aa-gj",
        name: "Gujarati",
        streamUrl: "https://s4.radio.co/sefba541aa/listen",
        statusUrl: "https://public.radio.co/stations/sefba541aa/status"
    },
    Marathi: {
        id: "s8d06d0298-mr",
        name: "Marathi",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status"
    },
    Urdu: {
        id: "sefba541aa-ur",
        name: "Urdu",
        streamUrl: "https://s4.radio.co/sefba541aa/listen",
        statusUrl: "https://public.radio.co/stations/sefba541aa/status"
    },
    Odia: {
        id: "s8d06d0298-od",
        name: "Odia",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status"
    },
    Assamese: {
        id: "sefba541aa-as",
        name: "Assamese",
        streamUrl: "https://s4.radio.co/sefba541aa/listen",
        statusUrl: "https://public.radio.co/stations/sefba541aa/status"
    }
}

export const getStationsList = () => Object.entries(STATIONS).map(([key, station]) => ({
    ...station,
    key // Use this for UI if needed
}))
