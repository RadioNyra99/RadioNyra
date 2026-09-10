import { notFound } from "next/navigation";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Radio, Megaphone, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

const MARKET_DATA: Record<string, {
    name: string;
    frequency: string;
    description: string;
    coverage: string;
    keywords: string[];
    localContact: string;
    stationKey: string;
}> = {
    "raleigh-durham": {
        name: "Raleigh-Durham",
        frequency: "99.9 FM HD4 (Hindi) & HD3 (Telugu)",
        description: "As the flagship broadcast hub of the Research Triangle, Radio Nyra on 99.9 FM HD4 and HD3 reaches over 85,000+ listeners across Raleigh, Durham, Cary, Morrisville, Apex, Chapel Hill, and RTP. Discover top music, cultural news, local event guides, and business sponsorships in North Carolina.",
        coverage: "Raleigh, Durham, Chapel Hill, Cary, Morrisville, Apex, Wake Forest, and surrounding Triangle areas.",
        keywords: [
            "Top Radio Stations in Raleigh NC",
            "Popular Radio Stations in North Carolina",
            "Radio Stations in Raleigh Durham",
            "99.9 FM HD4 Raleigh",
            "Hindi Radio Raleigh",
            "Telugu Radio Cary",
            "Indian Radio Morrisville NC",
            "Raleigh FM Radio Stations"
        ],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    },
    "atlanta": {
        name: "Atlanta",
        frequency: "107.5 FM HD3 (WAMJ) & 24/7 Digital Stream",
        description: "Our Atlanta presence connects with one of the most vibrant and affluent Indian Subcontinent diaspora populations in the Southeast. Tuning in connects you to local Georgia community highlights, major Bollywood and Tollywood event coverage, and local businesses.",
        coverage: "Atlanta Metro Area, Alpharetta, Johns Creek, Cumming, Duluth, Marietta, and surrounding Georgia counties.",
        keywords: ["Atlanta Indian Radio", "Telugu Radio Atlanta", "Hindi FM Georgia", "Indian Community Atlanta", "Alpharetta Indian Events"],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    },
    "baltimore": {
        name: "Baltimore",
        frequency: "92.3 FM HD2 (WERQ) & 24/7 Digital Stream",
        description: "Serving the historic Baltimore metro and surrounding DMV suburbs, Radio Nyra Baltimore offers a premium audio experience featuring global hit music, cultural updates, and diaspora news tailored to the Mid-Atlantic community.",
        coverage: "Baltimore City, Columbia, Ellicott City, Towson, Annapolis, and surrounding Maryland counties.",
        keywords: ["Baltimore Indian Radio", "Indian Radio Maryland", "DMV Desi Community", "Hindi Stream Baltimore", "Columbia MD Telugu Radio"],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    },
    "cleveland": {
        name: "Cleveland",
        frequency: "24/7 Digital Stream, iOS/Android App & Alexa",
        description: "Connecting the Indian Subcontinent professional and student communities in Northeast Ohio. Radio Nyra Cleveland brings the best of Bollywood, regional Indian programming, and local cultural spotlights straight to your devices.",
        coverage: "Cleveland Metro Area, Beachwood, Solon, Westlake, Strongsville, and surrounding Northeast Ohio regions.",
        keywords: ["Cleveland Indian Radio", "Hindi Radio Ohio", "Beachwood Desi Community", "Northeast Ohio Indian Events", "Solon Indian Radio"],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    },
    "columbus": {
        name: "Columbus",
        frequency: "24/7 Digital Stream, iOS/Android App & Alexa",
        description: "Columbus is home to a rapidly growing population of tech professionals, medical experts, and students from the Indian Subcontinent. Radio Nyra Columbus serves as a key bridge, keeping the community connected to music, news, and events.",
        coverage: "Columbus Metro Area, Dublin, Westerville, New Albany, Powell, and surrounding Central Ohio suburbs.",
        keywords: ["Columbus Indian Radio", "Dublin Ohio Indian Community", "Hindi Radio Columbus", "Telugu Radio Columbus", "Central Ohio Desi Events"],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    },
    "philadelphia": {
        name: "Philadelphia",
        frequency: "103.9 FM HD2 (WPPZ) & 24/7 Digital Stream",
        description: "Connecting the historic city of brotherly love with the rich sounds of the Indian Subcontinent. Radio Nyra Philadelphia covers local community events, university student segments, and corporate diaspora spotlights.",
        coverage: "Philadelphia Metro Area, Cherry Hill (NJ), King of Prussia, Bensalem, Upper Darby, and surrounding Pennsylvania/New Jersey suburbs.",
        keywords: ["Philadelphia Indian Radio", "Philly Desi Radio", "Cherry Hill Indian Community", "King of Prussia Indian Events", "Hindi Stream Pennsylvania"],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    },
    "st-louis": {
        name: "St. Louis",
        frequency: "24/7 Digital Stream, iOS/Android App & Alexa",
        description: "Our St. Louis presence delivers high-fidelity audio streams, community newsletters, and local business promotion, bridging the gap between local Missouri residents and cultural roots in the subcontinent.",
        coverage: "St. Louis Metro Area, Chesterfield, St. Charles, Creve Coeur, and surrounding Missouri/Illinois suburbs.",
        keywords: ["St Louis Indian Radio", "Chesterfield Indian Community", "Hindi Radio Missouri", "Telugu Radio St Louis", "St Louis Desi Events"],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    }
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return Object.keys(MARKET_DATA).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const market = MARKET_DATA[slug];
    if (!market) return {};

    const isRdu = slug === "raleigh-durham";
    const title = isRdu
        ? "Top Radio Stations in Raleigh-Durham NC | Listen Free - Radio Nyra 99.9 FM"
        : `Radio Nyra ${market.name} | ${market.frequency}`;
    const description = isRdu
        ? "Listen to top radio stations in Raleigh-Durham, NC for free. Stream Radio Nyra on 99.9 FM HD4 & HD3 for Bollywood, Telugu hits, talk shows & local Triangle events."
        : `Listen live to Radio Nyra in ${market.name} on ${market.frequency}. Connecting the Indian Subcontinent community with premium music, events, and marketing.`;

    return {
        title,
        description: description.slice(0, 158),
        keywords: market.keywords,
        alternates: {
            canonical: `/markets/${slug}`,
        },
        openGraph: {
            title,
            description,
            url: `https://www.radionyra.com/markets/${slug}`,
            siteName: "Radio Nyra",
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title,
            description
        }
    };
}

export default async function MarketPage({ params }: { params: Params }) {
    const { slug } = await params;
    const market = MARKET_DATA[slug];

    if (!market) {
        notFound();
    }

    const isRdu = slug === "raleigh-durham";

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "RadioStation",
                "@id": `https://www.radionyra.com/markets/${slug}#station`,
                "name": `Radio Nyra ${market.name}`,
                "url": `https://www.radionyra.com/markets/${slug}`,
                "logo": "https://www.radionyra.com/images/radio-nyra-logo.jpg",
                "telephone": market.localContact,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": isRdu ? "4819 Emperor Blvd Suite 400" : undefined,
                    "addressLocality": isRdu ? "Durham" : market.name.split(",")[0],
                    "addressRegion": isRdu ? "NC" : (slug === "atlanta" ? "GA" : slug === "baltimore" ? "MD" : slug === "philadelphia" ? "PA" : slug === "st-louis" ? "MO" : "OH"),
                    "postalCode": isRdu ? "27703" : undefined,
                    "addressCountry": "US"
                },
                "geo": isRdu ? {
                    "@type": "GeoCoordinates",
                    "latitude": "35.8858",
                    "longitude": "-78.8550"
                } : undefined,
                "areaServed": market.coverage,
                "broadcastFrequency": isRdu ? [
                    {
                        "@type": "BroadcastFrequencySpecification",
                        "frequencyValue": "99.9",
                        "frequencyUnit": "MHz",
                        "broadcastChannelSubchannel": "HD4",
                        "displayName": "Radio Nyra Hindi (99.9 FM HD4)"
                    },
                    {
                        "@type": "BroadcastFrequencySpecification",
                        "frequencyValue": "99.9",
                        "frequencyUnit": "MHz",
                        "broadcastChannelSubchannel": "HD3",
                        "displayName": "Radio Nyra Telugu (99.9 FM HD3)"
                    }
                ] : [
                    {
                        "@type": "BroadcastFrequencySpecification",
                        "displayName": "Radio Nyra 24/7 Digital Audio Stream"
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.radionyra.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Markets",
                        "item": "https://www.radionyra.com/markets"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": market.name,
                        "item": `https://www.radionyra.com/markets/${slug}`
                    }
                ]
            },
            ...(isRdu ? [{
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What are some popular radio stations in North Carolina and Raleigh-Durham?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular radio stations in Raleigh-Durham and North Carolina include Radio Nyra (99.9 FM HD4 for Hindi & HD3 for Telugu), 99.9 The Fan WCMC (Sports Talk), WRDU 100.7 FM (Classic Rock), G105 WDCG 105.1 FM (Top 40 Hits), K97.5 WQOK (Hip Hop & R&B), WQDR 94.7 FM (Country), and WUNC 90.1 FM (North Carolina Public Radio / NPR)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I tune to Radio Nyra in Raleigh, Durham, and Cary NC?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You can listen to Radio Nyra in your car across the Triangle by tuning your HD Radio to 99.9 FM and selecting HD4 for Hindi or HD3 for Telugu. You can also stream live online at radionyra.com, via our iOS and Android apps, or by saying 'Alexa, play Radio Nyra Hindi'."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the premier Indian and South Asian radio station in North Carolina?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Radio Nyra is America's leading Indian radio network and the premier South Asian broadcaster in the Carolinas, broadcasting on 99.9 FM HD4 (Hindi) and HD3 (Telugu) across Raleigh, Durham, Cary, Morrisville, Apex, Chapel Hill, and RTP."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I listen to Raleigh-Durham radio stations online for free?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Radio Nyra offers free 24/7 digital streaming online at radionyra.com without requiring a paid subscription, featuring live Bollywood music, Tollywood hits, local news, and community talk shows."
                        }
                    }
                ]
            }] : [])
        ]
    };

    return (
        <SeoPageLayout
            title={`Radio Nyra ${market.name}`}
            subtitle={`Connecting the Indian Subcontinent Community in ${market.name}`}
            stationKey={market.stationKey}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="space-y-12">
                {/* Intro Section */}
                <section className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <Radio className="w-36 h-36 text-primary" />
                    </div>
                    <div className="relative z-10 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                            <MapPin className="w-3.5 h-3.5" />
                            {isRdu ? "Flagship On-Air Broadcast Market" : "Digital Broadcast Market"}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground flex items-center gap-3">
                            Local Broadcast & Community Hub
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                            {market.description}
                        </p>
                        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border/50">
                            <div className="bg-muted/50 p-4 rounded-2xl border border-border/40">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Frequency / Channel</h3>
                                <p className="text-xl font-black text-primary italic uppercase">{market.frequency}</p>
                            </div>
                            <div className="bg-muted/50 p-4 rounded-2xl border border-border/40">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Coverage Area</h3>
                                <p className="text-sm font-semibold text-foreground">{market.coverage}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Raleigh-Durham Specific RTP Neighborhood Breakdown */}
                {isRdu && (
                    <section className="bg-gradient-to-br from-primary/5 via-card to-card border border-primary/20 p-8 md:p-10 rounded-3xl space-y-6">
                        <div className="max-w-2xl space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">RTP Triangle Coverage</span>
                            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">
                                Reaching Indian Communities Across the Triangle
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our 99.9 FM signal covers the dense Indian-American residential and business corridors across Wake, Durham, and Orange counties.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                            <div className="bg-card p-5 rounded-2xl border border-border/60 shadow-sm">
                                <h4 className="font-bold text-base text-foreground mb-1">Cary & Morrisville</h4>
                                <p className="text-xs text-muted-foreground">Hub of Indian grocery, cuisine, and tech families tuning to 99.9 FM HD4/HD3 daily.</p>
                            </div>
                            <div className="bg-card p-5 rounded-2xl border border-border/60 shadow-sm">
                                <h4 className="font-bold text-base text-foreground mb-1">Raleigh & Wake Forest</h4>
                                <p className="text-xs text-muted-foreground">Reaching diaspora professionals, government teams, and corporate commuters.</p>
                            </div>
                            <div className="bg-card p-5 rounded-2xl border border-border/60 shadow-sm">
                                <h4 className="font-bold text-base text-foreground mb-1">Durham & RTP</h4>
                                <p className="text-xs text-muted-foreground">Connecting biotech, pharma, and IT leaders in the Research Triangle Park.</p>
                            </div>
                            <div className="bg-card p-5 rounded-2xl border border-border/60 shadow-sm">
                                <h4 className="font-bold text-base text-foreground mb-1">Apex & Chapel Hill</h4>
                                <p className="text-xs text-muted-foreground">Serving university students, medical staff, and thriving suburban communities.</p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Popular Radio Stations in Raleigh-Durham NC Directory */}
                {isRdu && (
                    <section className="bg-card border border-border p-8 md:p-10 rounded-3xl space-y-6 shadow-sm">
                        <div className="space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Local Dial & Frequency Guide</span>
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">
                                Popular Radio Stations in Raleigh-Durham, NC
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                                Looking for the top radio stations in the Triangle? From multicultural hits and Bollywood melodies on Radio Nyra to sports talk, country, and mainstream pop, here is your quick frequency guide for Raleigh, Durham, Cary, and Chapel Hill:
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-border text-xs font-black uppercase tracking-wider text-muted-foreground">
                                        <th className="py-3 px-4">Frequency</th>
                                        <th className="py-3 px-4">Station</th>
                                        <th className="py-3 px-4">Format / Genre</th>
                                        <th className="py-3 px-4">Coverage</th>
                                        <th className="py-3 px-4">Listen</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/60 text-xs font-medium">
                                    <tr className="bg-primary/5 font-bold">
                                        <td className="py-3.5 px-4 text-primary font-black">99.9 FM HD4</td>
                                        <td className="py-3.5 px-4 text-foreground font-black">Radio Nyra (Hindi)</td>
                                        <td className="py-3.5 px-4 text-primary">Bollywood, Desi Hits, Diaspora News</td>
                                        <td className="py-3.5 px-4">Raleigh, Durham, Cary, Morrisville, RTP</td>
                                        <td className="py-3.5 px-4">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-green-500/10 text-green-600">
                                                Live Free On-Air
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="bg-primary/5 font-bold">
                                        <td className="py-3.5 px-4 text-primary font-black">99.9 FM HD3</td>
                                        <td className="py-3.5 px-4 text-foreground font-black">Radio Nyra (Telugu)</td>
                                        <td className="py-3.5 px-4 text-primary">Tollywood Hits & Telugu Community</td>
                                        <td className="py-3.5 px-4">Raleigh, Cary, Morrisville, Apex</td>
                                        <td className="py-3.5 px-4">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-green-500/10 text-green-600">
                                                Live Free On-Air
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-bold text-foreground">99.9 FM</td>
                                        <td className="py-3.5 px-4">WCMC (99.9 The Fan)</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">Sports Talk (Hurricanes / ACC)</td>
                                        <td className="py-3.5 px-4">Triangle Metro</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">Terrestrial FM</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-bold text-foreground">100.7 FM</td>
                                        <td className="py-3.5 px-4">WRDU (iHeartMedia)</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">Classic Rock</td>
                                        <td className="py-3.5 px-4">Raleigh & Central NC</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">Terrestrial FM</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-bold text-foreground">105.1 FM</td>
                                        <td className="py-3.5 px-4">WDCG (G105 / iHeartMedia)</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">Top 40 / Pop Hit Music</td>
                                        <td className="py-3.5 px-4">Raleigh-Durham</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">Terrestrial FM</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-bold text-foreground">106.1 FM</td>
                                        <td className="py-3.5 px-4">WTKK (FM Talk / iHeartMedia)</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">News & Conservative Talk</td>
                                        <td className="py-3.5 px-4">Raleigh-Durham</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">Terrestrial FM</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-bold text-foreground">93.9 FM</td>
                                        <td className="py-3.5 px-4">WNCB (B93.9 / iHeartMedia)</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">Today's Country Music</td>
                                        <td className="py-3.5 px-4">Raleigh-Durham</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">Terrestrial FM</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-bold text-foreground">97.5 FM</td>
                                        <td className="py-3.5 px-4">WQOK (K97.5)</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">Hip-Hop & R&B Hits</td>
                                        <td className="py-3.5 px-4">Raleigh & Durham</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">Terrestrial FM</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-bold text-foreground">90.1 FM</td>
                                        <td className="py-3.5 px-4">WUNC</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">NPR & Public Radio</td>
                                        <td className="py-3.5 px-4">Triangle & Statewide</td>
                                        <td className="py-3.5 px-4 text-muted-foreground">Public Radio</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider">
                            <Link href="/how-to-tune" className="text-primary hover:underline flex items-center gap-1.5">
                                <span>Learn How to Tune HD Radio in Your Car</span> &rarr;
                            </Link>
                            <Link href="/community/temples" className="text-muted-foreground hover:text-foreground">
                                Raleigh & Cary Temple Guide
                            </Link>
                            <Link href="/community/restaurants" className="text-muted-foreground hover:text-foreground">
                                Triangle Indian Dining Guide
                            </Link>
                        </div>
                    </section>
                )}

                {/* FAQ Section specifically answering the Google PAA box */}
                {isRdu && (
                    <section className="bg-card border border-border p-8 md:p-10 rounded-3xl space-y-6 shadow-sm">
                        <div className="space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Frequently Asked Questions</span>
                            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">
                                Raleigh & North Carolina Radio FAQs
                            </h3>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="bg-muted/40 p-5 rounded-2xl border border-border/50 space-y-2">
                                <h4 className="font-bold text-base text-foreground">What are some popular radio stations in North Carolina?</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Popular radio stations in North Carolina include Radio Nyra (99.9 FM HD4 & HD3 for Bollywood and Telugu multicultural broadcasting), 99.9 The Fan (sports talk), WRDU 100.7 FM (classic rock), G105 105.1 FM (hit pop music), K97.5 (hip-hop), B93.9 (country), and WUNC 90.1 FM (NPR news).
                                </p>
                            </div>
                            <div className="bg-muted/40 p-5 rounded-2xl border border-border/50 space-y-2">
                                <h4 className="font-bold text-base text-foreground">How do I listen to Indian radio in Raleigh, Durham, and Cary?</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Tune your vehicle's HD Radio to 99.9 FM and switch to subchannel HD4 for Radio Nyra Hindi or HD3 for Radio Nyra Telugu. You can also listen live online anytime at radionyra.com or via the Radio Nyra mobile apps for iOS and Android.
                                </p>
                            </div>
                            <div className="bg-muted/40 p-5 rounded-2xl border border-border/50 space-y-2">
                                <h4 className="font-bold text-base text-foreground">What station is 99.9 HD4 in Raleigh?</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    99.9 FM HD4 is Radio Nyra Hindi, the premier Indian Subcontinent community station in North Carolina, featuring non-stop Bollywood hits, morning and evening drive-time talk shows, community updates, and local news.
                                </p>
                            </div>
                            <div className="bg-muted/40 p-5 rounded-2xl border border-border/50 space-y-2">
                                <h4 className="font-bold text-base text-foreground">Where is Radio Nyra located in the Research Triangle?</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Radio Nyra's Triangle corporate offices and broadcast studios are located at 4819 Emperor Blvd Suite 400, Durham, NC 27703, serving the entire Raleigh-Durham-Cary-Morrisville metro area.
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Local SEO Keywords & Highlights */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-card border border-border p-8 rounded-3xl shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" /> Key Market Features
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                Radio Nyra is dedicated to serving the Indian Subcontinent diaspora with tailored news, cultural events, premium Bollywood and Tollywood programming, and community updates in {market.name}.
                            </p>
                            <ul className="space-y-3">
                                {market.keywords.slice(0, 4).map((kw, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-xs font-bold uppercase text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                        {kw}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between">
                            <span className="text-xs font-bold text-muted-foreground">Local Helpline:</span>
                            <span className="text-sm font-black text-primary">{market.localContact}</span>
                        </div>
                    </div>

                    <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                <Megaphone className="w-3.5 h-3.5" /> Direct Sponsor Impact
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                                Advertise in {market.name}
                            </h3>
                            <p className="opacity-90 leading-relaxed text-sm">
                                Reach over thousands of active listeners from the Indian Subcontinent community in {market.name}. Promote your business with local on-air spots, digital streaming ads, social campaigns, and local festival sponsorships.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full font-bold uppercase tracking-widest text-xs px-6 py-5 shadow-md">
                                <Link href="/advertise">Advertise in {market.name.split(",")[0]}</Link>
                            </Button>
                            <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-900 border-2 border-white rounded-full font-bold uppercase tracking-widest text-xs px-6 py-5 shadow-md">
                                <Link href="/contact">Contact Local Team</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Local Keywords Cloud */}
                <div className="text-center pt-6 border-t border-border/30">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-4">Local Target Search Topics</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {market.keywords.map((kw, i) => (
                            <span key={i} className="bg-muted px-4 py-1.5 rounded-full text-xs font-semibold text-muted-foreground border border-border/40">
                                #{kw.toLowerCase().replace(/\s+/g, '-')}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </SeoPageLayout>
    );
}
