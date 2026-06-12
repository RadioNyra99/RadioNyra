import { notFound } from "next/navigation";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, BarChart, ArrowRight, Quote, Landmark, ShoppingBag, Utensils } from "lucide-react";
import type { Metadata } from "next";

interface CaseStudy {
    client: string;
    industry: string;
    campaign: string;
    resultsSummary: string;
    testimonial: string;
    author: string;
    role: string;
    beforeMetric: string;
    afterMetric: string;
    metricLabel: string;
    percentageIncrease: string;
    details: string;
    points: string[];
}

const CASE_STUDIES: Record<string, CaseStudy> = {
    "kash-patel-productions": {
        client: "Kash Patel Productions",
        industry: "Live Entertainment & Concerts",
        campaign: "A.R. Rahman – The Wonderment Tour Promotion",
        resultsSummary: "Sold out 15,000+ capacity arenas and increased local Triangle tickets by 45%.",
        testimonial: "A record-breaking journey across North America. Every show was a testament to teamwork, creativity, and the unifying power of music. Radio Nyra was a key partner in making this vision a reality.",
        author: "Mihir Chakraborty",
        role: "Event Directing Partner, Kash Patel Productions",
        beforeMetric: "6,500 tickets",
        afterMetric: "15,000+ (Sold Out)",
        metricLabel: "Concert Ticket Sales",
        percentageIncrease: "130%",
        details: "Kash Patel Productions partnered with Radio Nyra to drive awareness and ticket sales for the North American tour of legendary composer A.R. Rahman. We implemented high-frequency radio spots across multiple markets, social media countdown campaigns, and exclusive on-air ticket giveaways.",
        points: [
            "Coordinated on-air marketing campaigns in 4 key markets.",
            "Ran target audience banner placements and email blast pushes to 50K+ subscribers.",
            "Hosted live studio discussions and ticket contest sweeps.",
            "Direct attribution tracking confirmed Radio Nyra generated 45% of NC sales."
        ]
    },
    "mc-construction": {
        client: "MC Construction Co.",
        industry: "Real Estate & Construction",
        campaign: "Triangle Custom Homebuilder Branding",
        resultsSummary: "Generated 120+ qualified inbound leads and increased brand recall by 35%.",
        testimonial: "Radio Nyra has consistently delivered strong visibility and meaningful engagement for our business. They understand the local community like no one else and have generated high-value clients for us.",
        author: "Mihir Chakraborty",
        role: "CEO, MC Construction Co.",
        beforeMetric: "12 inquiries / mo",
        afterMetric: "45 inquiries / mo",
        metricLabel: "Monthly Inbound Leads",
        percentageIncrease: "275%",
        details: "MC Construction Co. needed to reach affluent families in the Raleigh-Durham area to promote custom home building services. Radio Nyra designed a multi-channel branding campaign focusing on our premium listener demographic, combining daily prime-time spots with web sponsorships.",
        points: [
            "60-second morning drive-time sponsorships detailing custom builds.",
            "Banner display impressions on the Radio Nyra homepage (216K+ impressions).",
            "Coordinated local community outreach presence.",
            "Resulted in 120+ direct inbound leads over a 90-day period."
        ]
    },
    "royal-spice-restaurant": {
        client: "Royal Spice Indian Restaurant",
        industry: "Food & Hospitality",
        campaign: "Weekend Buffet & Dining Campaign",
        resultsSummary: "Boosted weekend dining traffic by 50% and registered 200+ WhatsApp claims.",
        testimonial: "Our weekend crowds have doubled since launching on-air ads with Radio Nyra. The WhatsApp coupons were a massive hit and let us track our advertising ROI exactly.",
        author: "Rajesh Kumar",
        role: "General Manager, Royal Spice Restaurant",
        beforeMetric: "150 tables / weekend",
        afterMetric: "225+ tables / weekend",
        metricLabel: "Weekend Diners Served",
        percentageIncrease: "50%",
        details: "Royal Spice Restaurant wanted to increase weekend dining and buffet occupancy. We designed an interactive WhatsApp-driven on-air campaign. Radio hosts shared a keyword code, prompting listeners to message the station for restaurant coupons.",
        points: [
            "Aired dynamic weekend dinner live spots during Friday drive-time.",
            "Integrated coupon code distribution with the Radio Nyra WhatsApp community (12K+ members).",
            "Offered localized targeting to families in Cary and Morrisville.",
            "Created measurable 1:1 ROI mapping of radio advertising spend."
        ]
    }
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return Object.keys(CASE_STUDIES).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const study = CASE_STUDIES[slug];
    if (!study) return {};

    const title = `${study.client} Case Study | Radio Nyra Advertising`;
    const description = `Discover how ${study.client} achieved a ${study.percentageIncrease} increase in ${study.metricLabel} through targeted marketing campaigns with Radio Nyra.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://www.radionyra.com/testimonials/${slug}`,
            siteName: "Radio Nyra",
            type: "article"
        },
        twitter: {
            card: "summary_large_image",
            title,
            description
        }
    };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
    const { slug } = await params;
    const study = CASE_STUDIES[slug];

    if (!study) {
        notFound();
    }

    const renderIcon = () => {
        switch (slug) {
            case "kash-patel-productions":
                return <ShoppingBag className="w-12 h-12 text-primary" />;
            case "royal-spice-restaurant":
                return <Utensils className="w-12 h-12 text-primary" />;
            default:
                return <Landmark className="w-12 h-12 text-primary" />;
        }
    }

    return (
        <SeoPageLayout
            title={study.client}
            subtitle={`${study.industry} – Advertiser Case Study`}
            stationKey="Hindi"
        >
            <div className="space-y-12">
                {/* Hero Stat & Info */}
                <section className="bg-card border border-border p-8 rounded-2xl shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <BarChart className="w-32 h-32 text-primary" />
                    </div>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            {renderIcon()}
                        </div>
                        <div className="flex-1 space-y-2 text-center lg:text-left">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Campaign Focus</span>
                            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground leading-tight">
                                {study.campaign}
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {study.resultsSummary}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Metrics Breakdown */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-card border border-border p-8 rounded-2xl text-center">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Before Campaign</h4>
                        <p className="text-3xl font-black text-foreground/80 line-through tracking-tight">{study.beforeMetric}</p>
                    </div>
                    <div className="bg-card border border-border p-8 rounded-2xl text-center ring-2 ring-primary">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">After Campaign</h4>
                        <p className="text-4xl font-black text-foreground tracking-tight">{study.afterMetric}</p>
                    </div>
                    <div className="bg-primary text-primary-foreground p-8 rounded-2xl text-center flex flex-col justify-center">
                        <h4 className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Net Performance Increase</h4>
                        <p className="text-5xl font-black tracking-tight">+{study.percentageIncrease}</p>
                    </div>
                </section>

                {/* Testimonial Quote */}
                <section className="relative bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto overflow-hidden">
                    <Quote className="absolute top-4 left-4 w-16 h-16 text-primary/10 -rotate-12" />
                    <blockquote className="text-xl md:text-2xl font-bold italic text-foreground/95 mb-6 relative z-10 leading-relaxed">
                        "{study.testimonial}"
                    </blockquote>
                    <div className="relative z-10">
                        <div className="flex justify-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                        </div>
                        <p className="font-black uppercase tracking-widest text-sm text-primary">{study.author}</p>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-0.5">{study.role}</p>
                    </div>
                </section>

                {/* Case Study Details */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black uppercase tracking-tight text-foreground">Campaign Execution</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {study.details}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Through close collaboration and dynamic audience targeting, Radio Nyra was able to maximize client ROI and build lasting local brand equity.
                        </p>
                    </div>
                    <div className="bg-card border border-border p-8 rounded-2xl shadow-sm space-y-4">
                        <h3 className="text-xl font-black uppercase tracking-tight text-foreground border-b border-border/50 pb-2">Key Highlights</h3>
                        <ul className="space-y-3">
                            {study.points.map((pt, i) => (
                                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                                    <span className="shrink-0 w-2 h-2 rounded-full bg-primary mt-1.5" />
                                    <span>{pt}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Campaign CTA */}
                <section className="border-t border-border/40 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-center md:text-left">
                        <h4 className="text-lg font-bold text-foreground">Ready to scale your business with Radio Nyra?</h4>
                        <p className="text-sm text-muted-foreground">Find out how we can create a custom multi-channel campaign for your brand.</p>
                    </div>
                    <Button asChild size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-widest text-xs px-8 py-6">
                        <Link href="/advertise" className="flex items-center gap-2">
                            Start Your Campaign <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </section>
            </div>
        </SeoPageLayout>
    );
}
