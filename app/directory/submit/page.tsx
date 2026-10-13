"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FrequencyBar } from "@/components/frequency-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DIRECTORY_CATEGORIES } from "@/lib/directory-data"
import { NC_CITIES } from "@/lib/nc-data"
import { Building2, CheckCircle2, Sparkles, ShieldCheck, ArrowLeft } from "lucide-react"

export default function SubmitBusinessPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    businessName: "",
    category: "restaurants",
    city: "Morrisville",
    address: "",
    phone: "",
    website: "",
    email: "",
    description: "",
    tier: "free",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submission / lead logging
    console.log("Business listing submitted:", formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FrequencyBar />

      <main className="py-12 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="mb-6">
            <Link
              href="/directory"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Business Directory
            </Link>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-extrabold uppercase tracking-tight mb-2">
                  Listing Submitted Successfully!
                </h1>
                <p className="text-sm text-muted-foreground mb-6">
                  Thank you for submitting <strong>{formData.businessName}</strong>. Our community moderation team will verify the details and activate your listing within 24–48 hours.
                </p>
                <div className="flex justify-center gap-3">
                  <Button asChild variant="outline" className="rounded-full text-xs font-bold">
                    <Link href="/directory">View Directory</Link>
                  </Button>
                  <Button asChild className="rounded-full text-xs font-bold">
                    <Link href="/advertise">Explore RadioNyra Advertising</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-widest mb-2">
                    <Building2 className="w-3.5 h-3.5" /> Community Submission
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                    List Your Business on Radio Nyra
                  </h1>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Connect with over 100,000 South Asian community members across Raleigh, Cary, Morrisville, Durham, and the Research Triangle.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                      Business Name *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Royal Spice Indian Kitchen"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        Category *
                      </label>
                      <select
                        className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      >
                        {DIRECTORY_CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        Triangle City *
                      </label>
                      <select
                        className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      >
                        {NC_CITIES.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}, NC
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="(919) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="contact@business.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                      Street Address
                    </label>
                    <Input
                      placeholder="123 Main St, Morrisville, NC"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                      Website URL
                    </label>
                    <Input
                      type="url"
                      placeholder="https://www.yourbusiness.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1">
                      Short Description *
                    </label>
                    <Textarea
                      required
                      rows={3}
                      placeholder="Describe your cuisine, products, services, or specialties..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  {/* LISTING TIER SELECTION */}
                  <div className="pt-2">
                    <label className="text-xs font-bold uppercase tracking-wider block mb-2">
                      Listing Tier
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div
                        onClick={() => setFormData({ ...formData, tier: "free" })}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.tier === "free"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-sm uppercase">Free Listing</span>
                          <span className="text-xs font-bold text-muted-foreground">$0</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground">
                          Standard directory profile with phone, address, and city categorisation.
                        </p>
                      </div>

                      <div
                        onClick={() => setFormData({ ...formData, tier: "featured" })}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.tier === "featured"
                            ? "border-primary bg-primary/5 shadow-md"
                            : "border-border hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-sm uppercase flex items-center gap-1 text-primary">
                            <Sparkles className="w-3.5 h-3.5" /> Featured Partner
                          </span>
                          <span className="text-xs font-bold text-primary">Priority</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground">
                          Priority top placement, verified badge, audio spot inquiry, and special offer box.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full rounded-full font-bold uppercase tracking-wider mt-4">
                    Submit Listing for Moderation
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
