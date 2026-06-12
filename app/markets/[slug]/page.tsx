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
        description: "As the hub of the Research Triangle Park (RTP) area, our Raleigh-Durham broadcast reaches the fastest-growing Indian Subcontinent community in the Carolinas. Since our launch, we have become the central media hub for local events, business announcements, and cultural celebrations.",
        coverage: "Raleigh, Durham, Chapel Hill, Cary, Morrisville, Apex, Wake Forest, and surrounding Triangle areas.",
        keywords: ["Hindi Radio Raleigh", "Telugu Radio Cary", "Indian Radio Station Morrisville", "99.9 FM HD4 Raleigh", "Indian Community Radio NC"],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    },
    "atlanta": {
        name: "Atlanta",
        frequency: "Digital Stream / App Store / Voice Assistant",
        description: "Our Atlanta presence connects with one of the most vibrant and affluent Indian Subcontinent diaspora populations in the Southeast. Tuning in connects you to local Georgia community highlights, major Bollywood and Tollywood event coverage, and local businesses.",
        coverage: "Atlanta Metro Area, Alpharetta, Johns Creek, Cumming, Duluth, Marietta, and surrounding Georgia counties.",
        keywords: ["Atlanta Indian Radio", "Telugu Radio Atlanta", "Hindi FM Georgia", "Indian Community Atlanta", "Alpharetta Indian Events"],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    },
    "baltimore": {
        name: "Baltimore",
        frequency: "Digital Stream / App Store / Voice Assistant",
        description: "Serving the historic Baltimore metro and surrounding DMV suburbs, Radio Nyra Baltimore offers a premium audio experience featuring global hit music, cultural updates, and diaspora news tailored to the Mid-Atlantic community.",
        coverage: "Baltimore City, Columbia, Ellicott City, Towson, Annapolis, and surrounding Maryland counties.",
        keywords: ["Baltimore Indian Radio", "Indian Radio Maryland", "DMV Desi Community", "Hindi Stream Baltimore", "Columbia MD Telugu Radio"],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    },
    "cleveland": {
        name: "Cleveland",
        frequency: "Digital Stream / App Store / Voice Assistant",
        description: "Connecting the Indian Subcontinent professional and student communities in Northeast Ohio. Radio Nyra Cleveland brings the best of Bollywood, regional Indian programming, and local cultural spotlights straight to your devices.",
        coverage: "Cleveland Metro Area, Beachwood, Solon, Westlake, Strongsville, and surrounding Northeast Ohio regions.",
        keywords: ["Cleveland Indian Radio", "Hindi Radio Ohio", "Beachwood Desi Community", "Northeast Ohio Indian Events", "Solon Indian Radio"],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    },
    "columbus": {
        name: "Columbus",
        frequency: "Digital Stream / App Store / Voice Assistant",
        description: "Columbus is home to a rapidly growing population of tech professionals, medical experts, and students from the Indian Subcontinent. Radio Nyra Columbus serves as a key bridge, keeping the community connected to music, news, and events.",
        coverage: "Columbus Metro Area, Dublin, Westerville, New Albany, Powell, and surrounding Central Ohio suburbs.",
        keywords: ["Columbus Indian Radio", "Dublin Ohio Indian Community", "Hindi Radio Columbus", "Telugu Radio Columbus", "Central Ohio Desi Events"],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    },
    "philadelphia": {
        name: "Philadelphia",
        frequency: "Digital Stream / App Store / Voice Assistant",
        description: "Connecting the historic city of brotherly love with the rich sounds of the Indian Subcontinent. Radio Nyra Philadelphia covers local community events, university student segments, and corporate diaspora spotlights.",
        coverage: "Philadelphia Metro Area, Cherry Hill (NJ), King of Prussia, Bensalem, Upper Darby, and surrounding Pennsylvania/New Jersey suburbs.",
        keywords: ["Philadelphia Indian Radio", "Philly Desi Radio", "Cherry Hill Indian Community", "King of Prussia Indian Events", "Hindi Stream Pennsylvania"],
        localContact: "+1 (919) 294-4800",
        stationKey: "Hindi"
    },
    "st-louis": {
        name: "St. Louis",
        frequency: "Digital Stream / App Store / Voice Assistant",
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

    const title = `Radio Nyra ${market.name} | Indian Subcontinent Radio & Media Network`;
    const description = `Listen live to Radio Nyra in ${market.name} on ${market.frequency}. Connecting the Indian Subcontinent community with premium music, events, and marketing.`;

    return {
        title,
        description,
        keywords: market.keywords,
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

    return (
        <SeoPageLayout
            title={`Radio Nyra ${market.name}`}
            subtitle={`Connecting the Indian Subcontinent Community in ${market.name}`}
            stationKey={market.stationKey}
        >
            <div className="space-y-12">
                {/* Intro Section */}
                <section className="bg-card border border-border p-8 rounded-2xl shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Radio className="w-32 h-32 text-primary" />
                    </div>
                    <div className="relative z-10 space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-3">
                            <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                            Local Broadcast Info
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {market.description}
                        </p>
                        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border/50">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Frequency / Channel</h3>
                                <p className="text-xl font-black text-primary italic uppercase">{market.frequency}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Coverage Area</h3>
                                <p className="text-lg font-semibold text-foreground">{market.coverage}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local SEO Keywords & Highlights */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" /> Coverage Details
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Radio Nyra is dedicated to serving the Indian Subcontinent diaspora with tailored news, cultural events, premium music programming, and community updates in {market.name} and surrounding communities.
                        </p>
                        <ul className="space-y-3">
                            {market.keywords.slice(0, 3).map((kw, i) => (
                                <li key={i} className="flex items-center gap-2.5 text-sm font-bold uppercase text-foreground/80">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                    {kw}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-3 flex items-center gap-2">
                                <Megaphone className="w-6 h-6 text-white animate-pulse" /> Advertise in {market.name}
                            </h3>
                            <p className="opacity-90 leading-relaxed text-sm">
                                Reach over thousands of active listeners from the Indian Subcontinent community in the {market.name} area. Promote your business with local radio spots, social campaigns, email marketing, and event sponsorships.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full font-bold uppercase tracking-widest text-xs px-6 py-5">
                                <Link href="/advertise">Advertise Now</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full font-bold uppercase tracking-widest text-xs px-6 py-5">
                                <Link href="/contact">Contact Local Rep</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Local Keywords Cloud */}
                <div className="text-center pt-8 border-t border-border/30">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-4">Local Target Keywords</p>
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
