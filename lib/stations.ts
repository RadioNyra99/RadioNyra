export interface Station {
    id: string
    name: string
    streamUrl: string
    statusUrl: string
    dashboardUrl: string
}

export const STATIONS: Record<string, Station> = {
    Hindi: {
        id: "raleigh-hd4-hindi",
        name: "Raleigh-Durham 99.9FM-HD4 (Hindi)",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    },
    Telugu: {
        id: "raleigh-hd3-telugu",
        name: "Raleigh-Durham 99.9FM-HD3 (Telugu)",
        streamUrl: "https://s4.radio.co/sefba541aa/listen",
        statusUrl: "https://public.radio.co/stations/sefba541aa/status",
        dashboardUrl: "https://studio.radio.co/stations/sefba541aa/dashboard"
    },
    "Atlanta - 107.5 FM HD3 WAMJ": {
        id: "atlanta-hd3-hindi",
        name: "Atlanta 107.5FM HD3 (Hindi)",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    },
    "Baltimore (D.C.) - 92.3 FM HD2 WERQ": {
        id: "baltimore-hd2-hindi",
        name: "Baltimore (D.C.) 92.3 FM HD2 (Hindi)",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    },
    "Cleveland - 93.1 FM HD2 WZAK": {
        id: "cleveland-hd2-hindi",
        name: "Cleveland 93.1 FM HD2 (Hindi)",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    },
    "Columbus - 107.5 FM HD2 WCKX": {
        id: "columbus-hd2-hindi",
        name: "Columbus 107.5 FM HD2 (Hindi)",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    },
    "Philadelphia - 103.9 HD2 FM WPHI": {
        id: "philly-hd2-hindi",
        name: "Philadelphia 103.9 HD2 FM (Hindi)",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    },
    "St. Louis - 95.5 FM HD2 WFUN-FM": {
        id: "stlouis-hd2-hindi",
        name: "St. Louis 95.5 FM HD2 (Hindi)",
        streamUrl: "https://streams.radio.co/s8d06d0298/listen",
        statusUrl: "https://public.radio.co/stations/s8d06d0298/status",
        dashboardUrl: "https://studio.radio.co/stations/s8d06d0298/dashboard"
    }
}

export const getStationsList = () => Object.entries(STATIONS).map(([key, station]) => ({
    ...station,
    key // Use this for UI if needed
}))
