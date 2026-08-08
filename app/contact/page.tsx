"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MessageSquare, MapPin, BarChart3, Radio, Share2, Users, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const services = [
    {
      title: "On-Air Advertising",
      description: "Reach 100,000+ weekly listeners with professionally produced radio spots and sponsorships.",
      icon: Radio,
    },
    {
      title: "Digital & Social Media",
      description: "Expand your reach through our highly engaged social platforms and web presence.",
      icon: Share2,
    },
    {
      title: "Event Sponsorship",
      description: "Get your brand in front of thousands at our major concerts and cultural events.",
      icon: Users,
    },
    {
      title: "Data-Driven Insights",
      description: "We leverage AI and analytics to ensure your message reaches the right audience.",
      icon: BarChart3,
    },
  ]

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      <main>
        {/* HEADER - "Contact Us" */}
        <section className="py-8 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter italic">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-bold uppercase tracking-widest">
              Partner with us. Reach the Community.
            </p>
          </div>
        </section>

        {/* SECTION 1: CONTACT FORM (Moved to top as requested) */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Send a Message</h2>
            <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Reach out to the Radio Nyra team</p>
          </div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Form */}
              <Card className="border-none shadow-2xl bg-card">
                <CardContent className="p-10">
                  <form
                    action="https://formspree.io/f/fa42a7d8-c45e-4e7d-868c-7861ef21d915"
                    method="POST"
                    className="space-y-4 text-left"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Name</Label>
                        <Input id="name" name="name" type="text" placeholder="YOUR FULL NAME" className="border-b-2 border-t-0 border-x-0 rounded-none px-0 focus:border-primary bg-transparent text-lg font-bold" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="YOUR EMAIL ADDRESS" className="border-b-2 border-t-0 border-x-0 rounded-none px-0 focus:border-primary bg-transparent text-lg font-bold" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="YOUR CONTACT NUMBER" className="border-b-2 border-t-0 border-x-0 rounded-none px-0 focus:border-primary bg-transparent text-lg font-bold" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="HOW CAN WE HELP YOU TODAY?"
                        rows={5}
                        className="resize-none border-b-2 border-t-0 border-x-0 rounded-none px-0 focus:border-primary bg-transparent text-lg font-bold"
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full h-12 text-sm font-black uppercase tracking-widest bg-primary hover:bg-primary/90 rounded-none shadow-xl transition-all active:scale-95">
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info */}
              <div className="space-y-12 flex flex-col justify-center">
                <div className="group">
                  <h3 className="text-xs font-black uppercase text-primary tracking-[0.3em] mb-4">Email Us</h3>
                  <a href="mailto:Info@radionyra.com" className="text-xl sm:text-3xl font-black text-foreground hover:text-primary transition-colors">Info@radionyra.com</a>
                </div>
                <div className="group">
                  <h3 className="text-xs font-black uppercase text-secondary tracking-[0.3em] mb-4">Call Us</h3>
                  <a href="tel:9192944800" className="text-xl sm:text-3xl font-black text-foreground hover:text-primary transition-colors">+1 (919) 294 - 4800</a>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">Mon - Fri, 9am - 6pm EST</p>
                  <p className="text-[10px] font-black text-muted-foreground/70 uppercase tracking-widest mt-1">Call Only</p>
                </div>
                <div className="group">
                  <h3 className="text-xs font-black uppercase text-[#25D366] tracking-[0.3em] mb-4">WhatsApp</h3>
                  <a href="https://wa.me/19192944800" target="_blank" className="text-xl sm:text-3xl font-black text-foreground hover:text-[#25D366] transition-colors">+1 (919) 294 - 4800</a>
                </div>
                <div className="group">
                  <h3 className="text-xs font-black uppercase text-accent tracking-[0.3em] mb-4">Visit Us</h3>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <p className="text-xl sm:text-3xl font-black text-foreground">Raleigh-Durham Metro</p>
                  </div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">Studio Address: Durham, North Carolina, USA</p>
                </div>
                <div className="group">
                  <h3 className="text-xs font-black uppercase text-primary tracking-[0.3em] mb-4">Website</h3>
                  <a href="https://www.radionyra.com" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-3xl font-black text-foreground hover:text-primary transition-colors">www.radionyra.com</a>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">Business Inquiry - Advertising Inquiry - Studio Contact</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background border-t border-border/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border border-border bg-card rounded-sm shadow-sm">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-6">Business Hours</h2>
                  <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mb-8">Monday - Friday, 9:00 AM - 6:00 PM ET</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button className="rounded-none font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white" asChild>
                      <a href="mailto:info@radionyra.com?subject=Business Inquiry">Business Inquiry</a>
                    </Button>
                    <Button className="rounded-none font-black uppercase tracking-widest bg-foreground text-background hover:bg-primary hover:text-white" asChild>
                      <a href="mailto:vp@radionyra.com?subject=Advertising Inquiry">Advertising Inquiry</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="border border-border bg-muted overflow-hidden min-h-[320px]">
                <iframe
                  title="Radio Nyra Durham map"
                  src="https://www.google.com/maps?q=Durham%2C%20NC&output=embed"
                  className="w-full h-full min-h-[320px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SERVICES OVERVIEW */}
        <section className="py-16 bg-background border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-foreground italic">Our Services Overview</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-6" />
            </div>

            <Card className="max-w-2xl mx-auto mb-16 border-2 border-primary bg-primary/5 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-2">Advertising Inquiries</h3>
                <h4 className="text-2xl font-black uppercase mb-1">Vaishnavi Palleda</h4>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">Vice President</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <a href="mailto:vp@radionyra.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-bold text-lg">vp@radionyra.com</span>
                  </a>
                  <a href="tel:9192944800" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-bold text-lg">(919) 294 - 4800</span>
                  </a>
                </div>
                <Button className="font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6" asChild>
                  <a href="mailto:vp@radionyra.com?subject=Advertising Inquiry">Schedule Advertising Consultation</a>
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <Card key={idx} className="border border-border bg-card group hover:border-primary transition-all duration-500 rounded-sm">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-all" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-snug">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium">{service.description}</p>
                    <ul className="space-y-3">
                      {["Targeted reach", "Professional production", "Detailed reporting"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[10px] text-muted-foreground font-black uppercase tracking-widest">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button variant="outline" className="rounded-none font-black uppercase tracking-widest h-14 px-10 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all" asChild>
                <a href="/services">View All Details</a>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
