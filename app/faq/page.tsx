"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Plus, Minus, HelpCircle, Radio, Music, MessageCircle, BarChart } from "lucide-react"
import { useState } from "react"

const faqCategories = [
  {
    id: "general",
    name: "General Questions",
    icon: HelpCircle,
    items: [
      { q: "What is Radio Nyra?", a: "Radio Nyra is the premier Indian Subcontinent Community Media Network in the United States, connecting communities, culture, and businesses through radio, digital streams, social platforms, live events, and AI-powered marketing." },
      { q: "Where are the Radio Nyra studios located?", a: "Our primary broadcasting studios and offices are located in Durham, North Carolina, USA. We serve the entire Research Triangle area, including Raleigh, Durham, Chapel Hill, Cary, Morrisville, and surrounding suburbs." },
      { q: "How can I listen to Radio Nyra outside of North Carolina?", a: "You can stream Radio Nyra live from anywhere in the world by clicking the 'Listen Live' button on our website, downloading our mobile app on the iOS App Store or Google Play Store, or using smart voice assistants." },
      { q: "Is Radio Nyra free to listen to?", a: "Yes! Radio Nyra is 100% free to listen to on-air (via HD Radio) and online through our website, mobile applications, and smart speakers." },
      { q: "What digital platforms is Radio Nyra available on?", a: "Radio Nyra is available on iOS (Apple App Store), Android (Google Play Store), Alexa smart speakers, Google Home devices, Siri, TuneIn, and online web players." },
      { q: "How do I download the Radio Nyra app?", a: "Search for 'Radio Nyra' in the Apple App Store or Google Play Store, or click the direct badges in our header/footer to download the app for free." },
      { q: "When was Radio Nyra founded?", a: "Radio Nyra has been on-air for over 12 years, serving as the trusted voice and cultural bridge for the Indian Subcontinent diaspora in the United States." },
      { q: "Does Radio Nyra play regional Indian music?", a: "Yes, we feature dedicated channels and shows for Hindi (Bollywood) and Telugu music, and cover other regional Indian hit music during special segments." },
      { q: "How can I contact Radio Nyra?", a: "You can reach us via email at info@radionyra.com, call our office at +1 (919) 294-4800, or send us a WhatsApp message at +1 (919) 294-4800." },
      { q: "Does Radio Nyra host live community events?", a: "Yes, Radio Nyra regularly organizes and sponsors major community events, concerts (such as the AR Rahman Tour), Diwali festivals, Holi celebrations, and local charity drives." }
    ]
  },
  {
    id: "frequencies",
    name: "Frequencies & Broadcast Info",
    icon: Radio,
    items: [
      { q: "What frequencies does Radio Nyra broadcast on in North Carolina?", a: "In the Raleigh-Durham area, we broadcast on 99.9 FM HD4 for our Hindi programming and 99.9 FM HD3 for our Telugu programming." },
      { q: "What is HD Radio and how do I listen to it?", a: "HD Radio is high-definition digital broadcasting. If your car or home radio has an HD logo, tune to 99.9 FM. Your radio will automatically load subchannels: tune to HD3 for Telugu or HD4 for Hindi." },
      { q: "Do I need a special antenna to listen to HD Radio?", a: "No, standard FM antennas can receive HD Radio signals, provided your tuner/radio receiver supports digital HD decoding." },
      { q: "What U.S. markets does Radio Nyra serve?", a: "We serve 8 major markets: Raleigh-Durham (NC), Atlanta (GA), Baltimore (MD), Cleveland (OH), Columbus (OH), Philadelphia (PA), St. Louis (MO), and Charlotte (NC)." },
      { q: "How do I listen in markets other than Raleigh-Durham?", a: "In markets outside Raleigh-Durham, you can stream our high-fidelity digital broadcast live via our mobile apps, website, or smart speaker integrations." },
      { q: "Can I stream Radio Nyra in my car?", a: "Yes! Connect your smartphone to your car's dashboard via Apple CarPlay, Android Auto, or Bluetooth, and launch the Radio Nyra app or stream from our website." },
      { q: "Is the digital stream CD-quality?", a: "Yes, our digital streams are compressed using high-bitrate codecs to deliver crystal-clear, CD-quality stereo audio on all web and mobile players." },
      { q: "Do weather conditions affect the HD Radio signal?", a: "HD Radio digital signals are highly robust and suffer less static interference compared to traditional analog AM/FM radio, ensuring stable listening during typical weather." },
      { q: "How do I command Alexa to play Radio Nyra?", a: "Simply say 'Alexa, open Radio Nyra Hindi' or 'Alexa, open Radio Nyra Telugu' to stream our channels instantly." },
      { q: "How do I command Google Home or Siri to play Radio Nyra?", a: "Say 'OK Google, play Radio Nyra' or 'Hey Siri, play Radio Nyra' to initiate playback on your smart speakers or mobile devices." }
    ]
  },
  {
    id: "raleigh-guide",
    name: "Raleigh & Frequencies Guide",
    icon: Radio,
    items: [
      { q: "What is the frequency of the radio Nyra?", a: "In the Raleigh-Durham area, Radio Nyra broadcasts on 99.9 FM HD4 for our Hindi programming and 99.9 FM HD3 for our Telugu programming. For other major markets, please refer to our Frequencies tab (e.g. 107.5 FM HD3 in Atlanta, 92.3 FM HD2 in Baltimore, 95.5 FM HD2 in St. Louis)." },
      { q: "What are my local FM radio stations in Raleigh-Durham?", a: "The Raleigh-Durham, NC market features a variety of FM stations, including: Radio Nyra (99.9 FM HD3/HD4 for Telugu/Hindi hits), WQDR (94.7 FM - Country), G105 (105.1 FM - Top 40), WQOK K97.5 FM (Hip-Hop/Rap), and WNCU (90.7 FM - Jazz). You can stream Radio Nyra live from anywhere via our mobile apps." },
      { q: "What is Raleigh's hip hop radio station and rap radio station?", a: "The leading hip-hop and rap radio station in Raleigh-Durham, NC is WQOK K97.5 FM. Another prominent urban station serving the region is 103.9 FM (DYDY / Light FM). While Radio Nyra (99.9 FM HD3/HD4) specializes in Bollywood and Telugu music, you can tune into K97.5 FM for local hip-hop and rap programming." },
      { q: "Is 100.3 or 100.5 the Beat hip hop or R&B?", a: "Yes, 100.3 The Beat (WIBT) is a very well-known hip-hop and R&B station in the region, playing contemporary rap, hip-hop, and R&B hits. In some adjacent Carolinas regions, 100.5 FM also plays urban contemporary formats. If you are looking for premier Indian Subcontinent music, tune to Radio Nyra on 99.9 FM." },
      { q: "What radio station is 95.7 in Raleigh NC?", a: "95.7 FM in Raleigh, NC is WCLY, branded as 'THAT Station.' It is a popular adult album alternative (AAA) radio station that plays a mix of indie rock, folk, and alternative music, focusing heavily on local North Carolina artists." },
      { q: "What does the FM in 90.1 FM stand for?", a: "FM stands for Frequency Modulation. It is a method of radio broadcasting where the frequency of the carrier wave is varied to represent the audio signal, offering much higher sound fidelity and less static interference than AM (Amplitude Modulation)." },
      { q: "How can I listen to 98.3 or other FM radio stations on my phone?", a: "You can listen to local stations like 98.3 FM or Radio Nyra on your phone by downloading their official streaming apps, using radio aggregator apps (like TuneIn or iHeartRadio), or using your phone's built-in FM tuner chip (usually requires plugging in wired headphones to act as an antenna)." },
      { q: "What radio station is Taree on?", a: "Taree is a town in New South Wales, Australia. Local FM/AM stations there include 2RE (1557 AM / 100.1 FM) and Max FM (107.3 FM). If you are looking to stream US-based Indian Subcontinent stations like Radio Nyra in Taree, you can easily do so online via radionyra.com or our mobile apps." },
      { q: "What is 98.5 in FM radio and what is 105.4 radio frequency?", a: "These are regional and international frequencies. For example, 98.5 FM is home to stations like Boston's Sports Hub (WBZ-FM) or local regional channels. 105.4 FM is used by stations globally, such as Heart FM in the UK. For premium Indian Subcontinent hits in the US, tune to Radio Nyra on 99.9 FM." }
    ]
  },
  {
    id: "hindi",
    name: "Hindi Programming",
    icon: Music,
    items: [
      { q: "What is the schedule for the Hindi broadcast?", a: "Our Hindi channel (99.9 FM HD4 in Raleigh-Durham and digital stream worldwide) broadcasts Bollywood hits, news, and talk shows 24/7." },
      { q: "Who hosts the morning drive show on the Hindi station?", a: "Our popular morning show 'Hello Vaishnavi' is hosted by Vaishnavi Palleda, airing weekdays from 9:00 AM to 12:00 PM EST." },
      { q: "What is 'Geet Bazaar'?", a: "Geet Bazaar is our longest-running weekend show hosted by Dr. Taj and Dr. Caldwell, featuring golden retro hits, ghazals, and historical music trivia. Airs Saturdays and Sundays 8:00 AM - 11:00 AM." },
      { q: "What is the show 'Zara Muskurao'?", a: "Zara Muskurao is a midday wellness and lifestyle show hosted by Aayushii Rode, airing weekdays from 12:00 PM to 3:00 PM EST." },
      { q: "Does the Hindi station play new Bollywood songs?", a: "Yes! We play all the latest Bollywood movie tracks, pop releases, and trending Indian music hits throughout the day." },
      { q: "Are there interviews with Bollywood celebrities?", a: "Yes, we regularly host exclusive interviews with Bollywood actors, singers, composers, and tour promoters visiting the US." },
      { q: "Can I request a song on the Hindi channel?", a: "Yes, during live shows you can call the studio line or send a request via our social media handles or WhatsApp at +1 (919) 294-4800." },
      { q: "What is the show 'Dil Se Desi' about?", a: "Dil Se Desi is hosted by Van, featuring classic hits, retro segments, and stories from the Indian diaspora." },
      { q: "What is the show 'Idhar Udhar Ki Baatein'?", a: "A popular talk show hosted by Arpit Tandon, covering lighthearted topics, community gossips, and daily humor." },
      { q: "Is local NC community news broadcasted in Hindi?", a: "Yes, we integrate local traffic, weather updates, and Research Triangle community news segments into our daily Hindi broadcasts." }
    ]
  },
  {
    id: "telugu",
    name: "Telugu Programming",
    icon: Music,
    items: [
      { q: "Does Radio Nyra have a dedicated Telugu station?", a: "Yes! We launched our 24/7 Telugu channel on 99.9 FM HD3 in the Raleigh-Durham area, also streaming globally online." },
      { q: "What is the schedule for the Telugu channel?", a: "The Telugu channel broadcasts Tollywood hits, interviews, local news, and community discussions 24/7." },
      { q: "What is the show 'Chinna Mata'?", a: "Chinna Mata is a popular Telugu show hosted by Priya, featuring lighthearted talks, wellness advice, and favorite melodies." },
      { q: "What is the show 'Mana Muchatlu'?", a: "Mana Muchatlu is hosted by Kanthi, focusing on regional community stories, local immigrant experiences, and classic Tollywood trivia." },
      { q: "Does the Telugu channel play Tollywood movie songs?", a: "Yes! We play all the latest Telugu film soundtracks, folk songs, independent Telugu pop, and timeless classics." },
      { q: "Can Telugu listeners call in for requests?", a: "Absolutely! You can call the Telugu studio line or WhatsApp us to request songs, dedicate tracks, or share greetings." },
      { q: "Are there promotions for Telugu movies in NC?", a: "Yes, we promote local Telugu movie screenings, theater listings, and cultural community events across North Carolina." },
      { q: "Is Telugu news available on the station?", a: "Yes, we broadcast regular updates covering both local community news in the US and major headlines from Andhra Pradesh and Telangana." },
      { q: "How popular is the Telugu channel?", a: "Our Telugu channel reaches over 100K+ members across digital and terrestrial platforms, serving as the central media hub for Telugu-speakers in the region." },
      { q: "Who are the sponsors of the Telugu channel?", a: "We partner with local grocery stores, IT consulting firms, builders, and restaurants targeting the Telugu-speaking demographic." }
    ]
  },
  {
    id: "advertising",
    name: "Advertising & Business",
    icon: BarChart,
    items: [
      { q: "How can I advertise my business on Radio Nyra?", a: "You can submit an inquiry via our 'Advertise' page, email sales at info@radionyra.com, or call our team directly at +1 (919) 294-4800." },
      { q: "What advertising services do you offer?", a: "We offer on-air radio ads, digital banner placements, social media promotions, email newsletter features, WhatsApp community broadcasts, and live event sponsorship opportunities." },
      { q: "Can Radio Nyra produce my radio commercial?", a: "Yes, our Creative Studio provides professional scriptwriting, voiceover talent, and audio engineering services to produce high-impact commercials for your business." },
      { q: "What is the size of Radio Nyra's audience?", a: "We have over 100K+ weekly listeners, 50K+ email subscribers, 100K+ WhatsApp members, and a monthly Instagram reach exceeding 500K+." },
      { q: "Is radio advertising effective for local businesses?", a: "Yes, ethnic radio advertising provides highly focused demographic targeting, yielding higher conversion rates, trust, and brand recall than broad programmatic ads." },
      { q: "Can I sponsor a specific show or segment?", a: "Yes, you can sponsor popular programs (like Hello Vaishnavi or Geet Bazaar) or segments like local traffic, weather, or community updates." },
      { q: "How do you measure advertising campaign success?", a: "We offer direct tracking options such as dedicated call-tracking numbers, custom landing pages, and coupon codes integrated with our WhatsApp broadcasts." },
      { q: "Do you offer advertising packages for start-ups?", a: "Yes, we provide flexible, tiered advertising packages designed to fit local small businesses, medical practices, retail outlets, and larger corporations." },
      { q: "Can I place banners on your mobile apps?", a: "Yes, we support digital banner advertisements within our mobile applications for both iOS and Android, which links directly to your website." },
      { q: "Which markets can I target my ads to?", a: "You can choose to advertise locally in the Raleigh-Durham area or scale your campaign nationally across any of our 8 active U.S. markets." }
    ]
  }
];

export default function FAQPage() {
    const [activeTab, setActiveTab] = useState("general");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const activeCategory = faqCategories.find(cat => cat.id === activeTab) || faqCategories[0];

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqCategories.flatMap(cat => 
            cat.items.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.a
                }
            }))
        )
    };

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <Navigation />

            <main className="py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic text-primary">
                            Frequently Asked <span className="text-foreground">Questions</span>
                        </h1>
                        <p className="text-lg text-muted-foreground uppercase tracking-widest font-bold">
                            Everything you need to know about Radio Nyra
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-border/50 pb-6">
                        {faqCategories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = activeTab === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setActiveTab(cat.id);
                                        setOpenIndex(0); // Reset accordion to first item
                                    }}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                                        isActive
                                            ? "bg-primary text-white shadow-md scale-105"
                                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {cat.name}
                                </button>
                            );
                        })}
                    </div>

                    {/* Accordion Container */}
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {activeCategory.items.map((item, i) => (
                            <div key={i} className="border border-border bg-card overflow-hidden transition-all shadow-sm">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                                >
                                    <span className="text-lg font-black uppercase tracking-tight italic text-foreground/90 leading-tight">
                                        {item.q}
                                    </span>
                                    {openIndex === i ? (
                                        <Minus className="w-5 h-5 text-primary shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-primary shrink-0" />
                                    )}
                                </button>
                                {openIndex === i && (
                                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed italic animate-fade-in-up">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>


                    <div className="mt-16 p-10 bg-primary/5 border border-primary/10 text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-4 italic">Still have questions?</h2>
                        <p className="mb-8 text-muted-foreground">We are here to help you. Reach out to us through our contact page.</p>
                        <a
                            href="/contact"
                            className="inline-block bg-primary text-white font-black uppercase tracking-widest px-10 py-4 hover:bg-primary/90 transition-all hover:scale-105"
                        >
                            Contact Us Now
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
