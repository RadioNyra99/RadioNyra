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
  const router = useRouter()
  const { playStation } = useAudio()

  const searchItems = React.useMemo(() => getSearchIndex(), [])
  const groupedItems = React.useMemo(() => {
    return TYPE_ORDER.map((type) => ({
      type,
      items: searchItems.filter((item) => item.type === type).slice(0, type === "podcast" || type === "video" ? 8 : 6),
    })).filter((group) => group.items.length > 0)
  }, [searchItems])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
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
        onClick={() => setOpen(true)}
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Search Radio Nyra" description="Search live radio, shows, podcasts, videos, news, events, partners, and pages.">
        <CommandInput placeholder="Search podcasts, videos, shows, news, events..." />
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
                      className="items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
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
