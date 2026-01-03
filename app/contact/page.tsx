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
        {/* HEADER - "Contact" */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter">Contact</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-light">
              Partner with us. Reach the Community.
            </p>
          </div>
        </section>

        {/* SECTION 1: SERVICES */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold uppercase tracking-widest text-foreground">Our Services</h2>
              <div className="w-12 h-1 bg-primary mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <Card key={idx} className="border border-border/50 hover:border-primary transition-all duration-300 bg-card group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-snug">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {["Targeted reach", "Professional production", "Detailed reporting"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground font-semibold">
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
              <p className="text-lg text-muted-foreground mb-6">Interested in our services? Get in touch below.</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONTACT FORM */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Form */}
              <Card className="border-none shadow-xl bg-background">
                <CardContent className="p-10">
                  <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">Send Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-xs uppercase font-bold text-muted-foreground">Name</Label>
                        <Input id="name" type="text" placeholder="NAME" className="mt-2 text-lg border-b border-t-0 border-x-0 rounded-none px-0 focus:ring-0 focus:border-primary bg-transparent" required />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-xs uppercase font-bold text-muted-foreground">Email</Label>
                        <Input id="email" type="email" placeholder="EMAIL" className="mt-2 text-lg border-b border-t-0 border-x-0 rounded-none px-0 focus:ring-0 focus:border-primary bg-transparent" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-xs uppercase font-bold text-muted-foreground">Subject</Label>
                      <Input id="subject" type="text" placeholder="HOW CAN WE HELP?" className="mt-2 text-lg border-b border-t-0 border-x-0 rounded-none px-0 focus:ring-0 focus:border-primary bg-transparent" />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-xs uppercase font-bold text-muted-foreground">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="YOUR MESSAGE..."
                        rows={4}
                        className="mt-2 resize-none text-lg border-b border-t-0 border-x-0 rounded-none px-0 focus:ring-0 focus:border-primary bg-transparent"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold uppercase tracking-widest bg-primary hover:bg-primary/90">
                      Send Now
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info */}
              <div className="space-y-8 flex flex-col justify-center">
                <div>
                  <h3 className="text-lg font-bold uppercase text-primary mb-2">Email Us</h3>
                  <p className="text-2xl font-bold text-foreground">info@radionyra.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase text-secondary mb-2">Call Us</h3>
                  <p className="text-2xl font-bold text-foreground">(919) 999-8595</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon - Fri, 9am - 6pm</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase text-accent mb-2">Visit Us</h3>
                  <p className="text-2xl font-bold text-foreground">Raleigh-Durham, NC</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
