"use client"

import * as React from "react"
import { CalendarDays, Headphones, Newspaper, Radio, Search, Tv, Users, Video } from "lucide-react"
import { useRouter } from "next/navigation"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { showAudioPlayer } from "@/lib/audio-player-utils"
import { useAudio } from "@/components/audio-context"
import { getSearchIndex, type ContentType, type SearchItem } from "@/lib/content-discovery"

const TYPE_LABELS: Record<ContentType, string> = {
  station: "Live Radio",
  show: "Shows",
  podcast: "Podcasts",
  video: "Videos",
  short: "Shorts",
  news: "News",
  event: "Events",
  community: "Community",
  partner: "Partners",
  page: "Pages",
}

const TYPE_ORDER: ContentType[] = ["station", "show", "podcast", "video", "short", "news", "event", "community", "partner", "page"]

const TYPE_ICONS: Record<ContentType, React.ComponentType<{ className?: string }>> = {
  station: Radio,
  show: Headphones,
  podcast: Headphones,
  video: Video,
  short: Tv,
  news: Newspaper,
  event: CalendarDays,
  community: Users,
  partner: Users,
  page: Search,
}

export function SiteSearch() {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [activeType, setActiveType] = React.useState<ContentType | "all">("all")
  const router = useRouter()
  const { playStation } = useAudio()

  const searchItems = React.useMemo(() => getSearchIndex(), [])
  const groupedItems = React.useMemo(() => {
    const normalizedQuery = query
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase()
      .trim()
    const terms = normalizedQuery.split(/\s+/).filter(Boolean)

    const scoreItem = (item: SearchItem) => {
      if (terms.length === 0) return 0

      const title = item.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
      const keywords = item.keywords.join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
      const description = item.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
      const searchable = `${title} ${keywords} ${description}`
      if (!terms.every((term) => searchable.includes(term))) return -1

      return terms.reduce((score, term) => {
        if (title === term) return score + 12
        if (title.startsWith(term)) return score + 8
        if (title.includes(term)) return score + 5
        if (keywords.includes(term)) return score + 3
        return score + 1
      }, 0)
    }

    return TYPE_ORDER
      .filter((type) => activeType === "all" || type === activeType)
      .map((type) => {
        const matches = searchItems
          .filter((item) => item.type === type)
          .map((item) => ({ item, score: scoreItem(item) }))
          .filter(({ score }) => score >= 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, terms.length > 0 ? 10 : 3)

        return { type, items: matches.map(({ item }) => item) }
      })
      .filter((group) => group.items.length > 0)
  }, [activeType, query, searchItems])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        if (open) {
          setOpen(false)
        } else {
          setQuery("")
          setActiveType("all")
          setOpen(true)
        }
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open])

  React.useEffect(() => {
    const openSearch = () => {
      setQuery("")
      setActiveType("all")
      setOpen(true)
    }
    window.addEventListener("open-site-search", openSearch)
    return () => window.removeEventListener("open-site-search", openSearch)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  const handleItemSelect = React.useCallback((item: SearchItem) => {
    runCommand(() => {
      if (item.type === "station" && item.stationId) {
        playStation(item.stationId)
        showAudioPlayer()
        return
      }

      const isExternal = item.href.startsWith("http")
      if (isExternal) {
        window.open(item.href, "_blank", "noopener,noreferrer")
      } else {
        router.push(item.href)
      }
    })
  }, [playStation, router, runCommand])

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="w-10 h-10 rounded-full hover:bg-muted"
        aria-label="Search Radio Nyra"
        onClick={() => {
          setQuery("")
          setActiveType("all")
          setOpen(true)
        }}
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Search Radio Nyra" description="Search live radio, shows, podcasts, videos, news, events, partners, and pages.">
        <CommandInput value={query} onValueChange={setQuery} placeholder="Search shows, hosts, podcasts, news, events..." />
        <div className="flex gap-2 overflow-x-auto border-b border-border px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Filter search results by category">
          {(["all", ...TYPE_ORDER] as const).map((type) => {
            const selected = activeType === type
            const label = type === "all" ? "All" : TYPE_LABELS[type]
            return (
              <Button
                key={type}
                type="button"
                size="sm"
                variant={selected ? "default" : "outline"}
                aria-pressed={selected}
                onClick={() => setActiveType(type)}
                className="h-8 shrink-0 rounded-full px-3 text-[10px] font-bold"
              >
                {label}
              </Button>
            )
          })}
        </div>
        <CommandList className="max-h-[70vh]">
          <CommandEmpty>
            <div className="px-6 py-8 text-center">
              <p className="font-bold text-foreground">No matching Radio Nyra content found.</p>
              <p className="text-xs text-muted-foreground mt-1">Try a show, host, topic, city, podcast, or event keyword.</p>
            </div>
          </CommandEmpty>
          {groupedItems.map((group, index) => (
            <React.Fragment key={group.type}>
              {index > 0 && <CommandSeparator />}
              <CommandGroup heading={TYPE_LABELS[group.type]}>
                {group.items.map((item) => {
                  const Icon = TYPE_ICONS[item.type]

                  return (
                    <CommandItem
                      key={item.id}
                      value={`${item.title} ${item.description} ${item.keywords.join(" ")}`}
                      onSelect={() => handleItemSelect(item)}
                      className="items-center gap-3 py-2.5"
                    >
                      <div className="flex h-11 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary/10 text-primary">
                        {item.image ? <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover" /> : <Icon className="h-5 w-5" aria-hidden />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-sm font-bold">{item.title}</span>
                          <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-muted-foreground">
                            {TYPE_LABELS[item.type]}
                          </span>
                        </div>
                        <p className="line-clamp-1 text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
