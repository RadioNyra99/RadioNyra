import { NextResponse } from "next/server"
import { CHANNEL_ID, REAL_RADIO_NYRA_VIDEOS } from "@/lib/youtube-service"

export const revalidate = 300 // Revalidate cache every 5 minutes

export async function GET() {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
    const res = await fetch(rssUrl, {
      next: { revalidate: 300 },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
    })

    if (!res.ok) {
      return NextResponse.json({ videos: REAL_RADIO_NYRA_VIDEOS })
    }

    const xmlText = await res.text()

    // Simple regex parser for YouTube RSS XML entries
    const entryMatches = xmlText.match(/<entry>[\s\S]*?<\/entry>/g) || []

    const videos = entryMatches.map((entryXml) => {
      const idMatch = entryXml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)
      const titleMatch = entryXml.match(/<title>([^<]+)<\/title>/)
      const publishedMatch = entryXml.match(/<published>([^<]+)<\/published>/)
      const descMatch = entryXml.match(/<media:description>([\s\S]*?)<\/media:description>/)

      const id = idMatch ? idMatch[1] : ""
      const title = titleMatch ? titleMatch[1] : ""
      const publishedAt = publishedMatch ? publishedMatch[1] : ""
      const description = descMatch ? descMatch[1].slice(0, 200) : ""

      return {
        id,
        title,
        description,
        thumbnail: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
        thumbnailHigh: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        publishedAt,
        channelTitle: "Radio Nyra USA",
        duration: "Full Episode",
        viewCount: "",
        viewCountNum: 0,
        likeCount: "0",
        isShort: title.toLowerCase().includes("#short") || title.toLowerCase().includes("shorts"),
        isLive: false,
        youtubeUrl: `https://www.youtube.com/watch?v=${id}`,
        embedUrl: `https://www.youtube.com/embed/${id}`,
        tags: [],
      }
    }).filter((v) => v.id && !v.isShort)

    if (videos.length === 0) {
      return NextResponse.json({ videos: REAL_RADIO_NYRA_VIDEOS })
    }

    return NextResponse.json({ videos })
  } catch (error) {
    return NextResponse.json({ videos: REAL_RADIO_NYRA_VIDEOS })
  }
}
