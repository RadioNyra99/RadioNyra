"use client"

import * as React from "react"
import { Search } from "lucide-react"
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
import { getStationsList } from "@/lib/stations"
import { BLOG_POSTS } from "@/lib/blog-data"

export function SiteSearch() {
  const [open, setOpen] = React.useState(false)
  const [posts, setPosts] = React.useState(BLOG_POSTS)
  const router = useRouter()
  const { playStation } = useAudio()
  
  const stations = getStationsList()

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

  React.useEffect(() => {
    if (open) {
      try {
        const saved = localStorage.getItem('custom_blog_posts');
        if (saved) {
          const customPosts = JSON.parse(saved);
          if (Array.isArray(customPosts)) {
            setPosts([...customPosts, ...BLOG_POSTS]);
          }
        }
      } catch (e) {
        console.error("Error loading custom posts for search:", e);
      }
    }
  }, [open]);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

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
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search shows, blogs, and pages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Live Radio Stations">
            {stations.map((station) => (
              <CommandItem
                key={station.id}
                onSelect={() => {
                  runCommand(() => {
                    playStation(station.id)
                    showAudioPlayer()
                  })
                }}
              >
                {station.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Latest Blogs & News">
            {posts.map((post) => (
              <CommandItem
                key={post.slug}
                onSelect={() => {
                  runCommand(() => router.push(`/blog/${post.slug}`))
                }}
              >
                {post.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => runCommand(() => router.push("/about"))}>
              About Us
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/schedule"))}>
              Schedule
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/contact"))}>
              Contact Us
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/bolloywood-radio-online"))}>
              Bollywood Radio Online
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/telugu-radio-usa"))}>
              Telugu Radio USA
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
