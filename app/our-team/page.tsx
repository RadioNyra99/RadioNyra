import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navigation />

      <main>
        {/* Header Section */}
        <section className="py-20 bg-primary/5 border-b border-primary/10 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-primary italic">
              The Team
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto font-bold opacity-80">
              The Voices & Energy Behind Radio Nyra
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-card shadow-2xl transition-all duration-500 hover:shadow-primary/10">
                <Image
                  src="/radio-nyra-team.jpg"
                  alt="Radio Nyra Team"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-12 text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic text-primary">
                  The Powerhouses of Radio Nyra
                </h2>
                <p className="text-lg text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
                  Meet the dedicated team that brings you the best music, talk shows, and entertainment every single day.
                  Our diversity is our strength, and our passion for media is what drives us forward.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
