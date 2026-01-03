import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Radio, Share2, Users, CheckCircle2 } from "lucide-react"

export default function MarketingServicesPage() {
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Header Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Marketing Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pioneering since 2014, Radio Nyra is the premier gateway for connecting businesses with the vibrant Indian
              Subcontinent communities in Raleigh-Durham.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <Card key={idx} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {["Targeted reach", "Professional production", "Detailed reporting"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Grow Together</h2>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Reach out to us to see how you can connect to our community and effectively advertise your business.
                </p>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-base">
                  Get a Free Consultation
                </Button>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none hidden lg:block">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
