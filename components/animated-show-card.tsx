"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

interface AnimatedShowCardProps {
  title: string
  host: string
  cat: string
  time: string
  index: number
}

export function AnimatedShowCard({ title, host, cat, time, index }: AnimatedShowCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a delay based on the card's index for staggered effect
          setTimeout(() => {
            setIsVisible(true)
          }, index * 100)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <Card className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={`/.jpg?height=400&width=400&query=${title.replace(/\s+/g, "+")}`}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 left-4 scale-100 group-hover:scale-105 transition-transform duration-300">
            <Badge
              className={`${
                cat === "Live Show"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground shadow-sm"
              }`}
            >
              {cat}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6 bg-card">
          <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">{title}</h4>
          <p className="text-sm font-medium text-muted-foreground mb-4">with {host}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-3 border-t border-border group-hover:border-primary/20 transition-colors">
            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
              <Clock className="h-3 w-3 text-primary" />
            </div>
            {time}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
