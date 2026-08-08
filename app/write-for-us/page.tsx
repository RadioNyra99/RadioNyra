"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mic, FileText, Send, CheckCircle2, Link2, Share2, Shield } from "lucide-react"

export default function WriteForUsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    topic: "",
    pitch: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-primary selection:text-white">
      <Navigation />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Header Banner */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 mb-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 text-center md:text-left z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">Guest Blogging & Partnerships</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter italic text-gray-900 leading-none">
                Write For <span className="text-primary block md:inline">Radio Nyra</span>
              </h1>
              <p className="text-sm text-gray-600 font-bold uppercase tracking-widest mt-2 max-w-2xl">
                Contribute high-quality guest posts, share immigrant stories, or establish link exchange opportunities with our media network.
              </p>
            </div>
            
            <div className="shrink-0 flex items-center justify-center z-10 bg-primary/10 w-24 h-24 rounded-3xl">
              <FileText className="w-12 h-12 text-primary" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Guidelines Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Guidelines Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-tight italic text-gray-900 flex items-center gap-2">
                  <Mic className="w-6 h-6 text-primary" /> Submission Guidelines
                </h2>
                
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-medium">
                  <p>
                    Radio Nyra welcomes guest contributions from bloggers, journalists, digital marketers, and community leaders. We write about Indian Subcontinent pop culture, immigrant life in the US, radio broadcasting, local business reviews, and wellness tips.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-1">Article Length</h4>
                      <p className="text-xs">Articles must be at least 800 - 1500 words with proper subheadings and layout formatting.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-1">Backlink Policy</h4>
                      <p className="text-xs">We allow 1 contextual backlink to high-quality, non-spammy websites inside the post body.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Topics Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-tight italic text-gray-900 flex items-center gap-2">
                  <Share2 className="w-6 h-6 text-primary" /> Topics We Accept
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold uppercase tracking-wide text-gray-700">
                  {[
                    "Bollywood & Tollywood Pop Culture",
                    "Immigrant & Diaspora Stories in the US",
                    "Digital Media, Radio & Audio Tech",
                    "Local Business Reviews & Indian Groceries",
                    "Community Events & Festival Calendars",
                    "Public Relations, Marketing & Advertising"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Link Partners & Contributors */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-tight italic text-gray-900 flex items-center gap-2">
                  <Link2 className="w-6 h-6 text-primary" /> Media Partners & Backlink Exchanges
                </h2>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  We actively cross-reference and verify digital reach with global databases, digital news agencies, and advertising partners. Check out our high-authority directory partners and publications:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Get Me Radio Player", domain: "getmeradio.com", url: "https://www.getmeradio.com/stations/radionyra-4514/" },
                    { name: "Marketing Marine PR", domain: "marketingmarine.com", url: "https://www.marketingmarine.com/adverts-write-for-us-and-guest-post/" },
                    { name: "Theodore Newsroom", domain: "theodorenewsletter.com", url: "https://theodorenewsletter.com/2014/08/" },
                    { name: "Media Entertainment Germany", domain: "shizune.co", url: "https://shizune.co/investors/media-entertainment-investors-germany" },
                    { name: "Northside News Editorial", domain: "northsidenews.org", url: "https://northsidenews.org/wp-content/uploads/2022/05/June-July-2022-WEB.pdf" }
                  ].map((partner, i) => (
                    <a 
                      key={i} 
                      href={partner.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/30 rounded-xl flex items-center justify-between transition-all duration-300 group"
                    >
                      <div className="text-left">
                        <span className="font-black text-gray-900 text-xs block group-hover:text-primary transition-colors">{partner.name}</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5 block">{partner.domain}</span>
                      </div>
                      <Link2 className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Submission Form Column */}
            <div className="space-y-8">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] sticky top-24">
                <h3 className="text-xl font-black uppercase tracking-tight italic text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                  <Send className="w-5 h-5 text-primary" /> Pitch Your Post
                </h3>

                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
                    <h4 className="font-bold text-gray-900">Pitch Submitted!</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">
                      Thank you for your guest post proposal. Our SEO and editorial team will review your outline and get back to you at your contact email within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Name</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-primary/50 rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-semibold"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-primary/50 rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-semibold"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Your Website URL</label>
                      <input 
                        type="url" 
                        value={formData.website}
                        onChange={(e) => setFormData({...formData, website: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-primary/50 rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-semibold"
                        placeholder="https://example.com"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Suggested Topic</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.topic}
                        onChange={(e) => setFormData({...formData, topic: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-primary/50 rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-semibold"
                        placeholder="e.g. Impact of Indian Radio in USA"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Article Pitch / Outline</label>
                      <textarea 
                        required 
                        rows={4}
                        value={formData.pitch}
                        onChange={(e) => setFormData({...formData, pitch: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-primary/50 rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-semibold resize-none"
                        placeholder="Describe the article and links you'd like to include..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/95 text-white font-black uppercase tracking-widest text-xs py-3 rounded-xl transition-all cursor-pointer shadow-md">
                      Submit Proposal
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
