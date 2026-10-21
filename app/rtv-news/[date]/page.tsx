import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  RTV_TELUGU_NEWS_EPISODES,
  getRtvEpisodeByDate,
  getAllRtvDates,
  getAdjacentEpisodes,
  type RtvNewsEpisode,
} from "@/lib/rtv-news-data"
import {
  Radio,
  Calendar,
  Sparkles,
  ChevronRight,
  Share2,
  ExternalLink,
  MessageCircle,
  Volume2,
  FileText,
  Tag,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Send,
  Headphones,
} from "lucide-react"

interface BulletinPageProps {
  params: Promise<{
    date: string
  }>
}

export async function generateStaticParams() {
  return getAllRtvDates().map((date) => ({
    date,
  }))
}

export async function generateMetadata({ params }: BulletinPageProps): Promise<Metadata> {
  const { date } = await params
  const episode = getRtvEpisodeByDate(date)

  if (!episode) {
    return {
      title: "Bulletin Not Found | RTV Telugu News | Radio Nyra",
    }
  }

  return {
    title: `${episode.title} (${episode.formattedDate}) | RTV Telugu News Radio Nyra 99.9 FM`,
    description: `${episode.description} Listen live or on-demand on Radio Nyra 99.9 FM-HD3.`,
    keywords: [
      "RTV Telugu News",
      `Telugu News ${episode.formattedDate}`,
      "Radio Nyra Telugu",
      "99.9 FM HD3",
      "Telugu News Raleigh NC",
      "US Telugu News Bulletin",
      ...episode.topics,
    ],
    alternates: {
      canonical: `https://www.radionyra.com/rtv-news/${episode.date}`,
    },
    openGraph: {
      title: `${episode.title} - RTV Telugu Daily News`,
      description: episode.description,
      url: `https://www.radionyra.com/rtv-news/${episode.date}`,
      siteName: "Radio Nyra",
      type: "article",
      images: [
        {
          url: "https://www.radionyra.com/images/rtv/rtv-news-poster.jpg",
          width: 800,
          height: 800,
          alt: "RTV Telugu News on Radio Nyra 99.9 FM-HD3",
        },
      ],
    },
  }
}

export default async function RtvBulletinDetailPage({ params }: BulletinPageProps) {
  const { date } = await params
  const episode = getRtvEpisodeByDate(date)

  if (!episode) {
    notFound()
  }

  const { prev, next } = getAdjacentEpisodes(episode.date)
  const embedUrl = `https://drive.google.com/file/d/${episode.driveId}/preview`
  const shareText = encodeURIComponent(
    `Listen to ${episode.title} (${episode.formattedDate}) on Radio Nyra 99.9 FM-HD3: https://www.radionyra.com/rtv-news/${episode.date}`
  )

  // Structured Schema Markup
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        "@id": `https://www.radionyra.com/rtv-news/${episode.date}#article`,
        headline: `${episode.title} - RTV Telugu News Daily Bulletin`,
        description: episode.description,
        datePublished: `${episode.date}T07:00:00-04:00`,
        dateModified: `${episode.date}T07:00:00-04:00`,
        inLanguage: "te",
        publisher: {
          "@type": "RadioStation",
          name: "Radio Nyra 99.9 FM-HD3 Telugu",
          url: "https://www.radionyra.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.radionyra.com/images/radio-nyra-logo.jpg",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.radionyra.com/rtv-news/${episode.date}`,
        },
      },
      {
        "@type": "AudioObject",
        "@id": `https://www.radionyra.com/rtv-news/${episode.date}#audio`,
        name: episode.title,
        description: episode.description,
        contentUrl: episode.url,
        encodingFormat: "audio/mpeg",
        uploadDate: `${episode.date}T07:00:00-04:00`,
        inLanguage: "te",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.radionyra.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "RTV News",
            item: "https://www.radionyra.com/rtv-news",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: episode.title,
            item: `https://www.radionyra.com/rtv-news/${episode.date}`,
          },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <FrequencyBar />

      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/rtv-news" className="hover:text-primary transition-colors">
              RTV News
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-semibold truncate">
              {episode.formattedDate}
            </span>
          </div>

          {/* BULLETIN HERO HEADER */}
          <div className="bg-card border border-border p-6 sm:p-8 rounded-3xl shadow-sm mb-8">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-extrabold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 animate-pulse" /> 99.9 FM-HD3 Telugu
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold">
                <Calendar className="w-3.5 h-3.5" /> {episode.formattedDate}
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                Bulletin #{episode.dayNumber}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight italic mb-4 text-foreground">
              {episode.title}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              {episode.description}
            </p>

            {/* AUDIO PLAYER */}
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 text-white border border-red-600/30 shadow-xl mb-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-red-500 animate-pulse" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                    Official Audio Bulletin
                  </span>
                </div>
                <span className="text-xs text-zinc-400 font-mono">{episode.sizeFormatted}</span>
              </div>

              <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 mb-3">
                <iframe
                  src={embedUrl}
                  allow="autoplay"
                  width="100%"
                  height="160"
                  className="w-full rounded-xl bg-zinc-900 border border-zinc-800"
                  style={{ border: "none", display: "block" }}
                  title={episode.title}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-zinc-400 text-[11px]">
                  Broadcasting live daily on Radio Nyra 99.9 FM-HD3
                </span>
                <a
                  href={`https://drive.google.com/file/d/${episode.driveId}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-red-400 hover:text-red-300 hover:underline"
                >
                  Open Direct Audio Player <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* TOPIC BADGES */}
            {episode.topics && episode.topics.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50">
                <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1 mr-1">
                  <Tag className="w-3.5 h-3.5" /> Topics:
                </span>
                {episode.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* KEY BULLET HIGHLIGHTS */}
          {episode.keyHighlights && episode.keyHighlights.length > 0 && (
            <div className="bg-card border border-border p-6 sm:p-8 rounded-3xl shadow-sm mb-8">
              <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-red-500" /> Key Bulletin Headlines
              </h2>
              <ul className="space-y-3">
                {episode.keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TRANSCRIPT SUMMARY ACCORDION */}
          {episode.transcriptSummary && (
            <details className="group bg-card border border-border rounded-3xl p-6 sm:p-8 mb-8 transition-all open:ring-1 open:ring-primary/20">
              <summary className="flex items-center justify-between cursor-pointer list-none font-extrabold uppercase tracking-tight text-base sm:text-lg">
                <span className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" /> Bulletin Summary &amp; Transcript Highlights
                </span>
                <span className="text-xs font-bold text-primary group-open:rotate-90 transition-transform">
                  &rarr;
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-border/40 text-sm text-muted-foreground leading-relaxed font-sans">
                <p className="p-4 bg-muted/40 rounded-2xl italic border border-border/50">
                  "{episode.transcriptSummary}"
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  Transcribed from the daily Radio Nyra Telugu broadcast on 99.9 FM-HD3. For corrections or news story tips, email{" "}
                  <a href="mailto:info@radionyra.com" className="text-primary underline">
                    info@radionyra.com
                  </a>
                  .
                </p>
              </div>
            </details>
          )}

          {/* SHARE & ENGAGE ROW */}
          <div className="bg-muted/30 border border-border p-6 rounded-3xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground block mb-1">
                Share this bulletin
              </span>
              <p className="text-sm font-bold text-foreground">
                Help keep the Triangle Telugu community informed
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold">
                <a
                  href={`https://api.whatsapp.com/send?text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1" /> WhatsApp
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full text-xs font-bold">
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share on X
                </a>
              </Button>
            </div>
          </div>

          {/* COMMUNITY CONVERSION CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between">
              <div>
                <Headphones className="w-6 h-6 text-primary mb-2" />
                <h3 className="text-base font-extrabold uppercase text-foreground mb-1">
                  Listen Live on 99.9 FM-HD3
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Stream Radio Nyra Telugu 24/7 across Morrisville, Cary, Raleigh &amp; RTP. Tollywood hits, interviews &amp; daily news.
                </p>
              </div>
              <Button asChild variant="secondary" className="rounded-full text-xs font-bold w-full">
                <Link href="/telugu">Go to Telugu Radio Live</Link>
              </Button>
            </div>

            <div className="p-6 rounded-2xl bg-primary text-primary-foreground flex flex-col justify-between shadow-md">
              <div>
                <Radio className="w-6 h-6 text-white mb-2" />
                <h3 className="text-base font-extrabold uppercase text-white mb-1">
                  Sponsor RTV Telugu News
                </h3>
                <p className="text-xs text-white/90 leading-relaxed mb-4">
                  Reach over 35,000 Telugu-speaking professionals and families across North Carolina with daily bulletin sponsorship.
                </p>
              </div>
              <Button asChild className="bg-white text-black hover:bg-gray-100 rounded-full text-xs font-bold w-full">
                <Link href="/advertise">Sponsor Daily News</Link>
              </Button>
            </div>
          </div>

          {/* PREVIOUS / NEXT BULLETIN PAGINATION */}
          <div className="flex items-center justify-between gap-4 pt-6 border-t border-border/50 mb-12">
            {prev ? (
              <Link
                href={`/rtv-news/${prev.date}`}
                className="group flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="block text-[10px] uppercase text-muted-foreground">Previous</span>
                  <span>{prev.formattedDate}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/rtv-news"
              className="text-xs font-extrabold uppercase tracking-wider text-primary hover:underline"
            >
              All Bulletins
            </Link>

            {next ? (
              <Link
                href={`/rtv-news/${next.date}`}
                className="group flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground text-right"
              >
                <div>
                  <span className="block text-[10px] uppercase text-muted-foreground">Next</span>
                  <span>{next.formattedDate}</span>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* RECENT BULLETINS ARCHIVE */}
          <div className="bg-muted/20 border border-border/50 p-6 sm:p-8 rounded-3xl">
            <h2 className="text-lg font-extrabold uppercase tracking-tight mb-4 text-foreground">
              Recent RTV Telugu News Bulletins
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {RTV_TELUGU_NEWS_EPISODES.filter((ep) => ep.date !== episode.date).map((ep) => (
                <Link
                  key={ep.id}
                  href={`/rtv-news/${ep.date}`}
                  className="p-3.5 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors block text-xs group"
                >
                  <span className="font-bold text-foreground block group-hover:text-primary transition-colors">
                    {ep.title}
                  </span>
                  <span className="text-[11px] text-muted-foreground block mt-1">
                    {ep.formattedDate} &bull; {ep.sizeFormatted}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
