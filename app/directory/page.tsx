"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BUSINESS_DIRECTORY, DIRECTORY_CATEGORIES } from "@/lib/directory-data"
import { NC_CITIES } from "@/lib/nc-data"
import {
  Search,
  MapPin,
  Phone,
  Globe,
  Star,
  CheckCircle,
  PlusCircle,
  Building2,
  Tag,
  Sparkles,
  ChevronRight,
} from "lucide-react"

export default function DirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCity, setSelectedCity] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBusinesses = BUSINESS_DIRECTORY.filter((biz) => {
    const matchesCategory =
      selectedCategory === "all" || biz.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesCity =
      selectedCity === "all" || biz.city.toLowerCase() === selectedCity.toLowerCase()
    const matchesSearch =
      searchQuery === "" ||
      biz.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      biz.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      biz.services.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesCity && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FrequencyBar />

      <main className="pb-16">
        {/* HERO */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-12 md:py-16 border-b border-border/50">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5" /> Triangle South Asian Business Directory
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              Discover Local <span className="text-primary">Indian Businesses</span> &amp; Services
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore trusted restaurants, Indian grocery supermarkets, temples, immigration attorneys, real estate professionals, and cultural academies across North Carolina.
            </p>

            {/* SEARCH BAR */}
            <div className="max-w-xl mx-auto flex items-center gap-2 bg-card border-2 border-border/60 focus-within:border-primary p-1.5 rounded-full shadow-lg transition-all">
              <Search className="w-5 h-5 text-muted-foreground ml-3 shrink-0" />
              <Input
                type="text"
                placeholder="Search by business name, cuisine, or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 shadow-none focus-visible:ring-0 text-sm bg-transparent"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchQuery("")}
                  className="rounded-full text-xs"
                >
                  Clear
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* CONTROLS & FILTERING */}
        <section className="py-8 bg-muted/20 border-b border-border/40 sticky top-16 z-30 backdrop-blur-md bg-background/80">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 md:pb-0 scrollbar-none">
                {DIRECTORY_CATEGORIES.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.id)}
                    className="rounded-full text-xs font-bold uppercase shrink-0 h-8"
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>

              {/* City Filter & Add Business CTA */}
              <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-between md:justify-end">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="h-8 rounded-full border border-border bg-background px-3 text-xs font-bold uppercase text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="all">All Cities</option>
                  {NC_CITIES.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>

                <Button asChild size="sm" className="rounded-full text-xs font-bold uppercase h-8">
                  <Link href="/directory/submit">
                    <PlusCircle className="w-3.5 h-3.5 mr-1" /> Add Business
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* LISTINGS GRID */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Showing {filteredBusinesses.length} verified listings
              </p>
            </div>

            {filteredBusinesses.length === 0 ? (
              <div className="text-center py-16 bg-muted/20 rounded-2xl border border-dashed border-border">
                <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" />
                <h3 className="text-lg font-bold mb-1">No businesses match your filters</h3>
                <p className="text-xs text-muted-foreground mb-4">Try clearing your search or switching categories.</p>
                <Button
                  onClick={() => {
                    setSelectedCategory("all")
                    setSelectedCity("all")
                    setSearchQuery("")
                  }}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  Reset All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBusinesses.map((biz) => (
                  <div
                    key={biz.id}
                    className="bg-card border border-border rounded-xl p-5 flex flex-col justify-between hover:border-primary/60 hover:shadow-lg transition-all relative overflow-hidden"
                  >
                    {biz.isFeatured && (
                      <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-bl-lg shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Featured Partner
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary">
                          {biz.categoryLabel}
                        </span>
                        <span className="text-[10px] font-bold text-muted-foreground flex items-center gap-0.5">
                          <MapPin className="w-3 h-3 text-primary" /> {biz.city}, NC
                        </span>
                      </div>

                      <h3 className="text-lg font-extrabold uppercase tracking-tight text-foreground mb-1">
                        {biz.name}
                      </h3>

                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex items-center text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-current" />
                        </div>
                        <span className="text-xs font-bold">{biz.rating}</span>
                        <span className="text-[11px] text-muted-foreground">({biz.reviewCount} reviews)</span>
                      </div>

                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
                        {biz.shortDescription}
                      </p>

                      {biz.offer && (
                        <div className="bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 p-2 rounded-lg text-[11px] font-bold mb-3">
                          🎁 {biz.offer}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1 mb-4">
                        {biz.services.slice(0, 3).map((s, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-muted px-2 py-0.5 rounded text-muted-foreground font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border/50 flex items-center justify-between gap-2 text-xs">
                      <a
                        href={`tel:${biz.phone}`}
                        className="flex items-center gap-1 font-bold text-primary hover:underline text-[11px]"
                      >
                        <Phone className="w-3.5 h-3.5" /> Call
                      </a>
                      {biz.website && (
                        <a
                          href={biz.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 font-bold text-muted-foreground hover:text-foreground text-[11px]"
                        >
                          <Globe className="w-3.5 h-3.5" /> Visit Site
                        </a>
                      )}
                      <Button asChild size="sm" variant="ghost" className="h-7 px-2 text-[11px] font-bold">
                        <Link href={`/north-carolina/${biz.city.toLowerCase()}`}>
                          City Hub <ChevronRight className="w-3 h-3 ml-0.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
