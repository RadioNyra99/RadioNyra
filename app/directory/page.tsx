"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, MapPin, Phone, Mail, Globe, Sparkles, Building2, 
  Plus, Utensils, ShoppingBag, Laptop, Landmark, Star, X, Tag 
} from "lucide-react"

interface BusinessListing {
  id: string
  name: string
  category: "restaurants" | "groceries" | "it" | "temples" | "services"
  image: string
  address: string
  phone: string
  email: string
  website: string
  rating: number
  featured: boolean
  coupon?: string
  description: string
}

const INITIAL_LISTINGS: BusinessListing[] = [
  {
    id: "1",
    name: "Apna Bazar Cary",
    category: "groceries",
    image: "/images/partners/Apna Bazar.jpg",
    address: "3100 Town Center Dr, Cary, NC 27519",
    phone: "+1 (919) 469-8080",
    email: "info@apnabazarnc.com",
    website: "https://apnabazar.com",
    rating: 4.8,
    featured: true,
    coupon: "NYRA10 - 10% off your next purchase",
    description: "The premier South Asian grocery store in Cary offering fresh produce, premium spices, sweets, and fresh meat."
  },
  {
    id: "2",
    name: "Spices Hut Cary",
    category: "groceries",
    image: "/images/partners/Spices Hut.jpg",
    address: "950 East Chatham St, Cary, NC 27511",
    phone: "+1 (919) 234-1234",
    email: "contact@spiceshutcary.com",
    website: "https://spiceshut.com",
    rating: 4.7,
    featured: true,
    description: "A wide variety of Indian spices, pulses, rice, snacks, and fresh vegetables under one roof."
  },
  {
    id: "3",
    name: "Fusion Nine Restaurant",
    category: "restaurants",
    image: "/images/partners/fusion-nine.jpg",
    address: "1012 Corporate Center Dr, Raleigh, NC 27607",
    phone: "+1 (919) 999-0009",
    email: "manager@fusionninenc.com",
    website: "http://fusionninenc.com",
    rating: 4.6,
    featured: true,
    coupon: "FUSION9LUNCH - Free soft drink with lunch buffet",
    description: "Authentic fine dining Indian restaurant specializing in Hyderabadi Biryani, Tandoori items, and South Indian curries."
  },
  {
    id: "4",
    name: "Sangam Mart",
    category: "groceries",
    image: "/images/partners/Sangam Mart.jpg",
    address: "2013 Walnut St, Cary, NC 27518",
    phone: "+1 (919) 380-0080",
    email: "sangammart@gmail.com",
    website: "https://sangammart.com",
    rating: 4.5,
    featured: false,
    description: "Your local destination for high-quality Indian groceries, frozen foods, organic staples, and pooja materials."
  },
  {
    id: "5",
    name: "MC Construction Co.",
    category: "services",
    image: "/images/radio-nyra-logo.jpg",
    address: "4004 Durham-Chapel Hill Blvd, Durham, NC 27707",
    phone: "+1 (919) 294-4800",
    email: "mihir@mcconstruction.com",
    website: "https://radionyra.com/testimonials/mc-construction",
    rating: 4.9,
    featured: true,
    coupon: "NYRABUILD - Free consultation & 5% off home remodeling",
    description: "Licensed residential and commercial building specialists in NC. Custom homes, framing, and renovations."
  },
  {
    id: "6",
    name: "HSNC Temple",
    category: "temples",
    image: "/images/partners/HSNC.jpg",
    address: "309 Aviation Pkwy, Morrisville, NC 27560",
    phone: "+1 (919) 481-2574",
    email: "admin@hsnctemple.org",
    website: "https://hsnctemple.org",
    rating: 4.9,
    featured: false,
    description: "The Hindu Society of North Carolina temple and community center, serving spiritual, cultural, and educational needs."
  },
  {
    id: "7",
    name: "Sip N Spices Cafe",
    category: "restaurants",
    image: "/images/partners/sip-n-spices-logo.png",
    address: "323 E Chatham St, Cary, NC 27511",
    phone: "+1 (919) 555-9090",
    email: "hello@sipnspices.com",
    website: "https://sipnspices.com",
    rating: 4.7,
    featured: false,
    coupon: "CHAI2 - Buy one specialty Chai get one free",
    description: "Cozy local cafe offering premium Indian Chai varieties, samosas, street food, and fusion desserts."
  }
]

export default function BusinessDirectoryPage() {
  const [listings, setListings] = useState<BusinessListing[]>(INITIAL_LISTINGS)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  
  // Listing Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newBiz, setNewBiz] = useState({
    name: "", category: "restaurants", address: "", phone: "", 
    email: "", website: "", coupon: "", description: ""
  })

  // Filter listings
  const filteredListings = listings.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.address.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Handle add business form submit
  const handleSubmitListing = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newBiz.name || !newBiz.address || !newBiz.phone) return
    
    const newBizItem: BusinessListing = {
      id: (listings.length + 1).toString(),
      name: newBiz.name,
      category: newBiz.category as any,
      image: "/images/radio-nyra-logo.jpg",
      address: newBiz.address,
      phone: newBiz.phone,
      email: newBiz.email || "info@radionyra.com",
      website: newBiz.website || "https://radionyra.com",
      rating: 5.0,
      featured: false,
      coupon: newBiz.coupon || undefined,
      description: newBiz.description || "A quality local South Asian business serving North Carolina."
    }
    
    setListings([...listings, newBizItem])
    setIsModalOpen(false)
    setNewBiz({
      name: "", category: "restaurants", address: "", phone: "", 
      email: "", website: "", coupon: "", description: ""
    })
  }

  // Schema Markup for LocalBusiness
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": listings.map((item) => ({
      "@type": "LocalBusiness",
      "@id": `https://www.radionyra.com/directory#${item.id}`,
      "name": item.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": item.address
      },
      "telephone": item.phone,
      "email": item.email,
      "url": item.website,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": item.rating,
        "reviewCount": "24"
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
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-border pb-8">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-primary">
                Indian Business <span className="text-foreground">Directory</span>
              </h1>
              <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mt-2">
                Discover local South Asian businesses and active discounts in North America
              </p>
            </div>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest px-6 py-5 rounded-none flex items-center gap-2 text-xs hover:scale-105 transition-all shadow-md shrink-0"
            >
              <Plus className="w-4 h-4" /> Add Your Business
            </Button>
          </div>

          {/* Search and Category Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <Input
                type="text"
                placeholder="Search by name, keyword or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-6 rounded-none border-2 border-border focus:border-primary transition-colors bg-card text-foreground"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            </div>

            {/* Category selection dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-4 rounded-none border-2 border-border focus:border-primary transition-colors bg-card text-foreground font-bold uppercase tracking-widest text-xs"
            >
              <option value="all">All Categories</option>
              <option value="restaurants">Restaurants</option>
              <option value="groceries">Indian Groceries</option>
              <option value="services">Professional Services</option>
              <option value="temples">Temples & Community</option>
              <option value="it">IT & Consulting</option>
            </select>
          </div>

          {/* Listings Grid */}
          {filteredListings.length === 0 ? (
            <div className="text-center py-20 bg-muted/20 border border-dashed border-border rounded-xl">
              <Building2 className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-xl font-bold uppercase mb-2">No Listings Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">We couldn't find any businesses matching your search. Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((item) => (
                <div 
                  key={item.id}
                  className={`bg-card border relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    item.featured ? "border-primary shadow-sm" : "border-border"
                  }`}
                >
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 z-10 flex items-center gap-1 shadow-md">
                      <Star className="w-2.5 h-2.5 fill-current" /> Featured Sponsor
                    </div>
                  )}

                  {/* Category icon header */}
                  <div className="p-6 border-b border-border bg-muted/20 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1.5">
                      {item.category === "restaurants" && <Utensils className="w-3.5 h-3.5" />}
                      {item.category === "groceries" && <ShoppingBag className="w-3.5 h-3.5" />}
                      {item.category === "services" && <Building2 className="w-3.5 h-3.5" />}
                      {item.category === "temples" && <Landmark className="w-3.5 h-3.5" />}
                      {item.category === "it" && <Laptop className="w-3.5 h-3.5" />}
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-current text-yellow-400" />
                      <span className="text-xs font-bold text-foreground">{item.rating}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight italic mb-3 text-foreground/90">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-6 font-medium">
                        {item.description}
                      </p>
                    </div>

                    {/* Contact details */}
                    <div className="space-y-2.5 border-t border-border pt-4 text-xs text-muted-foreground font-semibold">
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <span className="truncate">{item.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-primary shrink-0" />
                        <span>{item.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-primary shrink-0" />
                        <span className="truncate">{item.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Coupon Area */}
                  {item.coupon && (
                    <div className="mx-6 mb-2 p-3 bg-green-500/5 border border-dashed border-green-500/30 flex items-start gap-2">
                      <Tag className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <div className="text-[10px] text-green-700 font-bold uppercase tracking-wider">
                        {item.coupon}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="p-6 pt-2">
                    <a 
                      href={item.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center bg-foreground text-background font-bold uppercase tracking-widest text-xs py-3 hover:bg-primary hover:text-white transition-all hover:scale-[1.02]"
                    >
                      <Globe className="w-3.5 h-3.5 mr-2" /> Visit Website
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Promo box */}
          <div className="mt-16 bg-primary/5 border border-primary/10 p-8 md:p-12 text-center max-w-4xl mx-auto">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic mb-4">Want more visibility for your business?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-medium max-w-2xl mx-auto">
              Get listed in our premium featured categories, display your custom discount coupons, and promote your brand on-air across our 8 major US FM stations. Reach over 250,000 listeners weekly.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest rounded-none px-10 py-6" asChild>
              <a href="/advertise">Get Feature Ads Packages</a>
            </Button>
          </div>
        </div>
      </main>

      {/* Add Listing Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-card w-full max-w-lg border border-border p-8 shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-black uppercase tracking-tight italic text-primary mb-6">Add Business Listing</h3>
            
            <form onSubmit={handleSubmitListing} className="space-y-4 text-left">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-1">Business Name *</label>
                <Input 
                  type="text" 
                  value={newBiz.name} 
                  onChange={(e) => setNewBiz({...newBiz, name: e.target.value})} 
                  placeholder="Apna Bazar" 
                  required 
                  className="rounded-none bg-muted/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-1">Category *</label>
                  <select 
                    value={newBiz.category} 
                    onChange={(e) => setNewBiz({...newBiz, category: e.target.value})}
                    className="w-full p-2 bg-muted/30 border border-border text-foreground font-medium text-sm rounded-none focus:outline-none focus:border-primary"
                  >
                    <option value="restaurants">Restaurant</option>
                    <option value="groceries">Indian Grocery</option>
                    <option value="services">Professional Service</option>
                    <option value="temples">Temple / Spiritual</option>
                    <option value="it">IT & Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-1">Phone Number *</label>
                  <Input 
                    type="tel" 
                    value={newBiz.phone} 
                    onChange={(e) => setNewBiz({...newBiz, phone: e.target.value})} 
                    placeholder="+1 (919) 000-0000" 
                    required 
                    className="rounded-none bg-muted/30"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-1">Business Address *</label>
                <Input 
                  type="text" 
                  value={newBiz.address} 
                  onChange={(e) => setNewBiz({...newBiz, address: e.target.value})} 
                  placeholder="123 Main St, Cary, NC" 
                  required 
                  className="rounded-none bg-muted/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-1">Email Address</label>
                  <Input 
                    type="email" 
                    value={newBiz.email} 
                    onChange={(e) => setNewBiz({...newBiz, email: e.target.value})} 
                    placeholder="contact@business.com"
                    className="rounded-none bg-muted/30"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-1">Website URL</label>
                  <Input 
                    type="url" 
                    value={newBiz.website} 
                    onChange={(e) => setNewBiz({...newBiz, website: e.target.value})} 
                    placeholder="https://business.com"
                    className="rounded-none bg-muted/30"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-1">Active Coupon / Offer</label>
                <Input 
                  type="text" 
                  value={newBiz.coupon} 
                  onChange={(e) => setNewBiz({...newBiz, coupon: e.target.value})} 
                  placeholder="e.g. SAVE10 - 10% Off your first bill"
                  className="rounded-none bg-muted/30"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-1">Short Description</label>
                <textarea 
                  value={newBiz.description} 
                  onChange={(e) => setNewBiz({...newBiz, description: e.target.value})} 
                  placeholder="Tell us what makes your business unique..."
                  rows={3}
                  className="w-full p-2 bg-muted/30 border border-border text-foreground font-medium text-sm rounded-none focus:outline-none focus:border-primary"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest py-4 rounded-none mt-2">
                Submit Listing Request
              </Button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
