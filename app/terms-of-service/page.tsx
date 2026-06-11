"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12 border-b border-border/40 pb-8">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Legal</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground text-sm font-mono uppercase tracking-wider">Last Updated: June 11, 2026</p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-lg text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">01.</span> Agreement to Terms
              </h2>
              <p className="mb-4">
                Welcome to Radio Nyra ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website at <strong>radionyra.com</strong> (the "Website"), our mobile application (the "App"), our live radio broadcasts, streams, and all other services, content, and features offered by us (collectively, the "Services").
              </p>
              <p>
                By accessing, listening to, downloading, or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not access or use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">02.</span> Intellectual Property Rights
              </h2>
              <p className="mb-4">
                Unless otherwise indicated, the Services and all content therein, including our logo, audio streams, music, talk shows, podcasts, graphics, design, code, articles, and software, are the proprietary property of Radio Nyra or our licensors, protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You are granted a limited, revocable, non-exclusive, non-transferable license to access our Services and listen to our broadcasts for your personal, non-commercial entertainment. You may not record, redistribute, rebroadcast, modify, or create derivative works of any audio or visual content from our Services without our express prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">03.</span> User Conduct & Prohibited Activities
              </h2>
              <p className="mb-4">
                When using our Services, you agree not to:
              </p>
              <ul className="space-y-3 text-sm mb-4">
                <li className="flex gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Attempt to extract, download, scrape, or stream-rip any audio broadcasts or music from our platforms.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Interfere with, disrupt, or damage the integrity or performance of the Services, servers, or networks hosting our streams.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Use any automated system, such as robots, spiders, or offline readers, to access the Services in a manner that sends more request messages than a human can reasonably produce.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Use the Services for any commercial or advertising purposes without our prior written consent.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">04.</span> Mobile Application License
              </h2>
              <p className="mb-4">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Radio Nyra App on your personal mobile devices (iOS or Android) solely for your personal entertainment.
              </p>
              <p>
                You agree that your use of the App is also subject to the terms and rules of the platform store from which you downloaded it (e.g., Apple App Store or Google Play Store).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">05.</span> Third-Party Links & Advertisements
              </h2>
              <p>
                Our Services contain advertising, sponsor content, and links to third-party websites or services that are not owned or controlled by Radio Nyra. We do not endorse or assume any responsibility for any such third-party sites, products, or services. If you access a third-party website or service from the Services, you do so at your own risk, and you agree that Radio Nyra is not liable for any loss or damage arising from your use of any third-party website, service, or content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">06.</span> Disclaimers & Limitation of Liability
              </h2>
              <p className="mb-4">
                The Services, including all radio broadcasts, streams, and website content, are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied. Radio Nyra does not warrant that our live streams will be uninterrupted, error-free, or free of technical lag or outages.
              </p>
              <p>
                To the maximum extent permitted by law, Radio Nyra and its officers, directors, employees, and sponsors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of your use of or inability to use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">07.</span> Governing Law
              </h2>
              <p>
                These Terms and your use of our Services are governed by and construed in accordance with the laws of the State of North Carolina, USA, without regard to its conflict of law principles. Any dispute arising under these Terms shall be resolved exclusively in the state or federal courts located in North Carolina, USA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">08.</span> Contact Us
              </h2>
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg mt-6">
                <p className="mb-4 font-bold text-foreground">
                  If you have questions or comments about these Terms, you may email us at <a href="mailto:info@radionyra.com" className="text-primary hover:underline font-bold">info@radionyra.com</a> or by post to:
                </p>
                <address className="not-italic text-foreground font-mono uppercase tracking-widest text-sm leading-relaxed">
                  Radio Nyra<br />
                  Raleigh - Durham<br />
                  NC, USA
                </address>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
