"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, BookOpen, Clock, Calendar, Share2, 
  ThumbsUp, MessageSquare, ArrowRight, Star, Heart, Bookmark 
} from "lucide-react"

interface NewsArticle {
  id: string
  title: string
  category: "bollywood" | "tollywood" | "local" | "community"
  image: string
  excerpt: string
  content: string
  postedDate: string
  author: string
  readTime: string
  likes: number
  commentsCount: number
}

const INITIAL_NEWS: NewsArticle[] = [
  {
    id: "1",
    title: "A.R. Rahman Announces 'Wonderment' Concert Tour Stop in Raleigh",
    category: "bollywood",
    image: "/images/partners/A.R. Rahman – The Wonderment Tour.jpg",
    excerpt: "Legendary music composer A.R. Rahman is set to perform live in North Carolina as part of his North American Tour. Tickets go on sale this Friday.",
    content: "Legendary composer and Oscar winner A.R. Rahman is bringing his world-class 'Wonderment Tour' to the Lenovo Center in Raleigh. Celebrating three decades of musical hits in Hindi, Tamil, and Telugu cinema, the concert features a 50-member orchestra, guest singers, and state-of-the-art stage visuals. Radio Nyra is a proud official media partner, providing exclusive on-air ticket giveaways and backstage listener meet-and-greets.",
    postedDate: "2026-07-20",
    author: "Entertainment Desk",
    readTime: "3 min read",
    likes: 342,
    commentsCount: 18
  },
  {
    id: "2",
    title: "H-1B FY2027 Registration Cap: USCIS Issues New Online Filing Rules",
    category: "community",
    image: "/images/radio-nyra-logo.jpg",
    excerpt: "USCIS has released updated online guidelines for the next fiscal year H-1B registration lottery, tightening beneficiary-centric checks.",
    content: "United States Citizenship and Immigration Services (USCIS) has finalized new security and selection rules for the upcoming H-1B specialty occupation visa lottery. The new policy ensures a beneficiary-centric selection process to prevent multiple registrations for the same individual. Our partner immigration attorneys recommend that Raleigh-Durham tech applicants submit their details by early winter to secure employer alignments.",
    postedDate: "2026-07-19",
    author: "Immigration Desk",
    readTime: "4 min read",
    likes: 215,
    commentsCount: 42
  },
  {
    id: "3",
    title: "Holi Festival 2026 Draws Record Crowds to Morrisville Town Park",
    category: "local",
    image: "/holi.webp",
    excerpt: "Over 15,000 Triangle residents celebrated the festival of colors with rain dance, authentic food stalls, and live DJ sets sponsored by Radio Nyra.",
    content: "The annual Holi festival co-hosted by the Hindu Society of North Carolina (HSNC) and Radio Nyra saw its highest-ever attendance this year. Morrisville Town Park was painted in rainbow colors as families danced to Bollywood and Telugu hits. Local food trucks serving hot samosas, chaat, and sugarcane juice reported sold-out menus, demonstrating the growing cultural footprint of the Indian Subcontinent community in Wake County.",
    postedDate: "2026-07-18",
    author: "Community Reporter",
    readTime: "3 min read",
    likes: 512,
    commentsCount: 29
  },
  {
    id: "4",
    title: "Tollywood Superstar Mahesh Babu's Next Film Confirms US Shooting Schedule",
    category: "tollywood",
    image: "/images/radio-nyra-logo.jpg",
    excerpt: "The highly anticipated action drama directed by SS Rajamouli will shoot key action sequences in North Carolina's Research Triangle Park.",
    content: "SS Rajamouli's globe-trotting adventure featuring Tollywood prince Mahesh Babu is scheduled for a 30-day filming schedule in North Carolina. Key office settings in Research Triangle Park and scenic routes in the Blue Ridge Mountains will serve as backdrops. Radio Nyra Telugu (99.9 FM HD3) will cover the production updates and coordinate local casting calls for extras.",
    postedDate: "2026-07-17",
    author: "Tollywood desk",
    readTime: "2 min read",
    likes: 429,
    commentsCount: 35
  }
]

export default function NewsPage() {
  const [news, setNews] = useState<NewsArticle[]>(INITIAL_NEWS)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTab, setSelectedTab] = useState<string>("all")
  
  // Bookmark state mockup
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([])
  // Likes mockup
  const [likedIds, setLikedIds] = useState<string[]>([])

  const toggleBookmark = (id: string) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter(item => item !== id))
    } else {
      setBookmarkedIds([...bookmarkedIds, id])
    }
  }

  const toggleLike = (id: string) => {
    if (likedIds.includes(id)) {
      setLikedIds(likedIds.filter(item => item !== id))
      setNews(news.map(item => item.id === id ? { ...item, likes: item.likes - 1 } : item))
    } else {
      setLikedIds([...likedIds, id])
      setNews(news.map(item => item.id === id ? { ...item, likes: item.likes + 1 } : item))
    }
  }

  // Filter news
  const filteredNews = news.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedTab === "all" || item.category === selectedTab
    return matchesSearch && matchesCategory
  })

  // Dynamic schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": news.map((item) => ({
      "@type": "NewsArticle",
      "headline": item.title,
      "image": [
        `https://www.radionyra.com${item.image}`
      ],
      "datePublished": item.postedDate,
      "author": {
        "@type": "Person",
        "name": item.author
      }
    }))
  }

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Navigation />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic text-primary">
              News & Updates <span className="text-foreground">Portal</span>
            </h1>
            <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mt-3">
              Daily coverage of Bollywood, Tollywood, local Triangle community headlines, and immigration bulletins
            </p>
          </div>

          {/* Search bar */}
          <div className="relative mb-12 max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search news articles, topics or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-6 rounded-none border-2 border-border focus:border-primary transition-colors bg-card text-foreground"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-border/50 pb-6">
            {[
              { id: "all", label: "All News" },
              { id: "bollywood", label: "Bollywood" },
              { id: "tollywood", label: "Tollywood / Telugu" },
              { id: "local", label: "Local NC News" },
              { id: "community", label: "Immigration & Community" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedTab === tab.id
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* News Feed Grid */}
          {filteredNews.length === 0 ? (
            <div className="text-center py-20 bg-muted/20 border border-dashed border-border rounded-xl">
              <BookOpen className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-xl font-bold uppercase mb-2">No Articles Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">Try selecting a different filter tab or search keyword.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredNews.map((post) => {
                const isLiked = likedIds.includes(post.id)
                const isBookmarked = bookmarkedIds.includes(post.id)
                return (
                  <div 
                    key={post.id}
                    className="bg-card border border-border flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:shadow-xl group"
                  >
                    <div>
                      {/* Image header */}
                      <div className="relative aspect-video overflow-hidden bg-black/10">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = "/images/radio-nyra-logo.jpg"
                          }}
                        />
                        <span className="absolute bottom-4 left-4 text-[9px] font-black uppercase tracking-widest bg-primary text-white px-3 py-1 shadow-md">
                          {post.category}
                        </span>
                      </div>

                      {/* Info body */}
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.postedDate}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-black uppercase tracking-tight italic text-foreground/90 leading-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Social footer */}
                    <div className="p-6 pt-0 mt-4 border-t border-border pt-4 flex items-center justify-between">
                      <div className="flex gap-4 text-xs font-bold text-muted-foreground">
                        <button 
                          onClick={() => toggleLike(post.id)}
                          className={`flex items-center gap-1 hover:text-red-500 transition-colors ${
                            isLiked ? "text-red-500" : ""
                          }`}
                        >
                          <ThumbsUp className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                          <span>{post.likes}</span>
                        </button>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.commentsCount}</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => toggleBookmark(post.id)}
                          className={`text-muted-foreground hover:text-primary transition-colors ${
                            isBookmarked ? "text-primary" : ""
                          }`}
                          title="Bookmark article"
                        >
                          <Bookmark className={`w-4.5 h-4.5 ${isBookmarked ? "fill-current" : ""}`} />
                        </button>
                        <button 
                          className="text-muted-foreground hover:text-primary transition-colors"
                          title="Share article"
                          onClick={() => alert(`Share link: https://www.radionyra.com/news/${post.id}`)}
                        >
                          <Share2 className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
