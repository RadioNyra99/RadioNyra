"use client"

import Link from "next/link"
import { BUSINESS_DIRECTORY } from "@/lib/directory-data"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Phone, Star, Sparkles, ArrowRight, PlusCircle } from "lucide-react"

export function BusinessSpotlightSection() {
  const featuredBusinesses = BUSINESS_DIRECTORY.filter((b) => b.isFeatured).slice(0, 3)

  return (
    <section className="py-12 bg-muted/20 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-widest mb-2">
              <Building2 className="w-3.5 h-3.5" /> Local Business Spotlight
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight italic">
              Trusted <span className="text-primary">South Asian Partners</span> in NC
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Support verified Indian restaurants, supermarkets, immigration attorneys, and temples serving the Triangle.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="rounded-full text-xs font-bold uppercase">
              <Link href="/directory/submit">
                <PlusCircle className="w-3.5 h-3.5 mr-1" /> Add Your Business
              </Link>
            </Button>
            <Button asChild size="sm" className="rounded-full text-xs font-bold uppercase">
              <Link href="/directory">
                Full Directory <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBusinesses.map((biz) => (
            <div
              key={biz.id}
              className="bg-card border border-border rounded-xl p-5 flex flex-col justify-between hover:border-primary/60 hover:shadow-lg transition-all relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary">
                    {biz.categoryLabel}
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground flex items-center gap-0.5">
                    <MapPin className="w-3 h-3 text-primary" /> {biz.city}, NC
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {biz.name}
                </h3>

                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-xs font-bold">{biz.rating}</span>
                  <span className="text-[10px] text-muted-foreground">({biz.reviewCount} reviews)</span>
                </div>

                <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
                  {biz.shortDescription}
                </p>

                {biz.offer && (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 p-2 rounded-lg text-[10px] font-bold mb-3">
                    🎁 {biz.offer}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs">
                <a
                  href={`tel:${biz.phone}`}
                  className="flex items-center gap-1 font-bold text-primary hover:underline text-xs"
                >
                  <Phone className="w-3.5 h-3.5" /> {biz.phone}
                </a>
                <Button asChild size="sm" variant="ghost" className="h-7 px-2 text-xs font-bold text-primary">
                  <Link href={`/north-carolina/${biz.city.toLowerCase()}`}>
                    Explore {biz.city} <ArrowRight className="w-3 h-3 ml-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
