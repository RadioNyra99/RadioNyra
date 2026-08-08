export interface Station {
    id: string
    name: string
    streamUrl: string
    statusUrl: string
    dashboardUrl: string
    city?: string
    state?: string
    frequency?: string
    language?: string
}

export const STATIONS: Record<string, Station> = {
    Hindi: {
        id: "raleigh-hd4-hindi",
        name: "Raleigh-Durham 99.9FM-HD4 (Hindi)",
        city: "Raleigh-Durham",
        state: "NC",
        frequency: "99.9 FM HD4",
        language: "Hindi",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    },
    Telugu: {
        id: "raleigh-hd3-telugu",
        name: "Raleigh-Durham 99.9FM-HD3 (Telugu)",
        city: "Raleigh-Durham",
        state: "NC",
        frequency: "99.9 FM HD3",
        language: "Telugu",
        streamUrl: "https://s4.radio.co/sefba541aa/listen",
        statusUrl: "https://public.radio.co/stations/sefba541aa/status",
        dashboardUrl: "https://studio.radio.co/stations/sefba541aa/dashboard"
    },
    "Atlanta - 107.5 FM HD3 WAMJ": {
        id: "atlanta-hd3-hindi",
        name: "Atlanta 107.5FM HD3 (Hindi)",
        city: "Atlanta",
        state: "GA",
        frequency: "107.5 FM HD3",
        language: "Hindi",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    },
    "Baltimore (D.C.) - 92.3 FM HD2 WERQ": {
        id: "baltimore-hd2-hindi",
        name: "Baltimore (D.C.) 92.3 FM HD2 (Hindi)",
        city: "Baltimore / Washington D.C.",
        state: "MD / DC",
        frequency: "92.3 FM HD2",
        language: "Hindi",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    },
    "Cleveland - 93.1 FM HD2 WZAK": {
        id: "cleveland-hd2-hindi",
        name: "Cleveland 93.1 FM HD2 (Hindi)",
        city: "Cleveland",
        state: "OH",
        frequency: "93.1 FM HD2",
        language: "Hindi",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    },
    "Columbus - 107.5 FM HD2 WCKX": {
        id: "columbus-hd2-hindi",
        name: "Columbus 107.5 FM HD2 (Hindi)",
        city: "Columbus",
        state: "OH",
        frequency: "107.5 FM HD2",
        language: "Hindi",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    },
    "Philadelphia - 103.9 HD2 FM WPHI": {
        id: "philly-hd2-hindi",
        name: "Philadelphia 103.9 HD2 FM (Hindi)",
        city: "Philadelphia",
        state: "PA",
        frequency: "103.9 FM HD2",
        language: "Hindi",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    },
    "St. Louis - 95.5 FM HD2 WFUN-FM": {
        id: "stlouis-hd2-hindi",
        name: "St. Louis 95.5 FM HD2 (Hindi)",
        city: "St. Louis",
        state: "MO",
        frequency: "95.5 FM HD2",
        language: "Hindi",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    }
}

export const getStationsList = () => Object.entries(STATIONS).map(([key, station]) => ({
    ...station,
    key // Use this for UI if needed
})).sort((a, b) => `${a.city ?? ""} ${a.name} ${a.frequency ?? ""}`.localeCompare(`${b.city ?? ""} ${b.name} ${b.frequency ?? ""}`))

export const NETWORK_STATS = {
    stations: "76",
    cities: "63",
    headline: "America's Largest Indian Radio Network",
}
