"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Copy, Download, Save, Loader2, Check, ArrowLeft, RefreshCw } from "lucide-react"
import Link from "next/link"

const TOPICS = [
    { id: "indian-events-raleigh", label: "Indian Events Raleigh-Durham" },
    { id: "telugu-events-usa", label: "Telugu Events in the USA" },
    { id: "diwali-celebrations", label: "Diwali Celebrations Cary & Morrisville" },
    { id: "concert-guides", label: "Concert Guides: Subcontinent Artists" },
    { id: "community-news", label: "Community News & Diaspora Spotlight" },
    
    // Reddit-derived topics (40 items)
    { id: "immigrants-find-community", label: "How Do Indian Immigrants Find Community in the USA?" },
    { id: "listen-indian-radio", label: "Where Can I Listen to Indian Radio Stations in America?" },
    { id: "best-indian-podcasts", label: "Best Indian Podcasts for the US Diaspora" },
    { id: "stay-connected-culture", label: "How to Stay Connected to Indian Culture in the USA?" },
    { id: "community-events-near-me", label: "Indian Community Events Near Me in the USA" },
    { id: "where-indians-live", label: "Where Do Most Indians Live in the United States?" },
    { id: "advertise-business-diaspora", label: "How to Advertise Business to Indian Americans?" },
    { id: "promote-products-immigrants", label: "Best Ways to Promote Products to Indian Immigrants" },
    { id: "community-news-updates", label: "Indian Community News and Updates for US Residents" },
    { id: "find-event-listings", label: "How to Find Indian Event Listings in Your City?" },
    { id: "understanding-population", label: "Understanding the Indian American Population in the USA" },
    { id: "business-owners-connect", label: "How Do Indian Business Owners Connect with Community?" },
    { id: "radio-stations-indian-music", label: "What Radio Stations Play Indian Music in America?" },
    { id: "reach-audiences-digital", label: "How to Reach Indian Audiences Through Digital Ads?" },
    { id: "find-news-entertainment", label: "Where to Find Indian News & Entertainment Online?" },
    { id: "best-platforms-advertise", label: "Best Platforms to Advertise to Indian Americans" },
    { id: "immigrants-share-news", label: "How Indian Immigrants Share News and Updates" },
    { id: "start-business-diaspora", label: "Starting a Business for the Indian American Market" },
    { id: "network-professionals", label: "How to Network with Indian Professionals in the USA?" },
    { id: "community-organizations", label: "Indian Community Organizations & Groups in America" },
    { id: "best-blogs-content", label: "Best Indian Blogs and Content for the Diaspora" },
    { id: "sponsor-advertise-events", label: "How to Sponsor or Advertise at Indian Community Events?" },
    { id: "consumer-behavior", label: "Understanding Indian American Consumer Behavior" },
    { id: "find-authentic-news", label: "Where to Find Authentic Indian News in the USA?" },
    { id: "stay-updated-india", label: "How Indian Immigrants Stay Updated on India News" },
    { id: "build-brand-resonate", label: "Building a Brand That Resonates with Indian Americans" },
    { id: "magazines-publications", label: "What Magazines & Publications Target Indian Diaspora?" },
    { id: "join-business-community", label: "How to Join the Indian American Business Community?" },
    { id: "celebrate-festivals", label: "Best Ways to Celebrate Indian Festivals in the USA" },
    { id: "access-entertainment-news", label: "How Indian Americans Access Entertainment and News" },
    { id: "start-podcast-audience", label: "Starting a Podcast for the Indian American Audience" },
    { id: "market-service-immigrants", label: "How to Market Your Service to Indian Immigrants?" },
    { id: "get-community-information", label: "Where Do Indian Americans Get Community Information?" },
    { id: "cultural-preferences", label: "Understanding Cultural Preferences of Indian Diaspora" },
    { id: "build-trust-customers", label: "How to Build Trust with Indian American Customers" },
    { id: "best-advertising-strategies", label: "Best Advertising Strategies for Indian Markets in USA" },
    { id: "share-recommendations", label: "How Indian Communities Share Recommendations & Reviews" },
    { id: "find-influencers-creators", label: "Finding Indian American Influencers & Content Creators" },
    { id: "reach-regional-communities", label: "How to Reach Specific Indian Regional Communities" },
    { id: "build-community-audio", label: "Building Community Through Indian Radio and Podcasts" }
];

const TONES = [
    { id: "informative", label: "Informative & Professional" },
    { id: "casual", label: "Casual & Friendly" },
    { id: "enthusiastic", label: "Enthusiastic & Hype" },
    { id: "seo-optimized", label: "SEO Optimized Focus" }
];

// Rich predefined template content for realistic outputs
const GENERATOR_TEMPLATES: Record<string, {
    title: string;
    description: string;
    outline: string;
    content: string;
    faqs: string;
}> = {
    "indian-events-raleigh": {
        title: "Top 10 Indian Subcontinent Community Events in Raleigh-Durham NC (2026 Guide)",
        description: "Explore the most vibrant Indian Subcontinent events, festivals, concerts, and cultural gatherings in Raleigh, Cary, and Morrisville, North Carolina.",
        outline: `1. Introduction: The Vibrant Subcontinent Culture in the RTP Area
2. Cary Diwali Celebration: The Crown Jewel of Triangle Festivals
3. Holi Color Festival: Celebrating Spring in Morrisville
4. Hum Sub Youth Achievements & cultural Galas
5. Bollywood Bash & New Year Events in Raleigh
6. Local Temples Food Festivals & Bazaars
7. Direct Radio Nyra Concert Partnerships (AR Rahman, Shaan)
8. Summary & How to Stay Tuned`,
        content: `The Research Triangle Park (RTP) area of North Carolina is home to one of the fastest-growing and most dynamic Indian Subcontinent communities in the United States. Cary and Morrisville, in particular, serve as cultural hubs where community members gather to celebrate their heritage, music, and traditions.

First and foremost is the annual Cary Diwali Celebration held at the Koka Booth Amphitheatre. Attracting over 10,000 visitors annually, this festival showcases traditional dances, exquisite handicrafts, and authentic foods, capped off with a spectacular fireworks display.

Following closely is the Spring Holi celebration in Morrisville, where colors fly and local families enjoy community picnics. Furthermore, local cultural organizations like Hum Sub organize multiple galas throughout the year to celebrate youth achievement and arts.

Radio Nyra has been proud to sponsor and broadcast live from these events. By tuning into 99.9 FM HD3 and HD4, Raleigh-Durham residents stay connected to local venue schedules, ticketing details, and live weather conditions.`,
        faqs: `Q1: Where are the largest Indian events in NC?
A1: The largest festivals take place in Cary (Koka Booth Amphitheatre) and Morrisville Town Parks.

Q2: How do I get tickets for upcoming concerts?
A2: Radio Nyra regularly broadcasts exclusive pre-sale codes and organizes ticket giveaway contests on-air.

Q3: Can local businesses sponsor these events?
A3: Yes! Contact info@radionyra.com to learn how to showcase your brand at these highly targeted community gatherings.`
    },
    "telugu-events-usa": {
        title: "Telugu Cultural Festivals, Conventions & Concerts in USA: Complete 2026 Roadmap",
        description: "Stay updated on the major Telugu cultural conventions (TANA, NATA, ATA), concerts, Tollywood movie releases, and local community meets in America.",
        outline: `1. Introduction: The Telugu Diaspora Footprint in America
2. Major Conventions: TANA, ATA, and NATA 2026 Calendars
3. Tollywood Musical Concerts and Tour Schedules
4. Local Telugu Association Events (RTP, Atlanta, Dallas)
5. Celebrating Ugadi and Sankranti Across US Cities
6. Business Networking Opportunities at Conventions
7. Radio Nyra 99.9 HD3 Telugu Channel Coverage`,
        content: `The Telugu-speaking diaspora in the United States is one of the most prominent, professional, and culturally active immigrant demographics. From tech hubs in Silicon Valley to the Research Triangle in North Carolina, Telugu culture is celebrated with incredible energy.

Major national Telugu conventions like TANA (Telugu Association of North America), ATA, and NATA hold biannual summits that bring together tens of thousands of members for business networking, cultural exhibitions, and musical performances from Tollywood's biggest artists.

On a local level, Telugu associations hold regular events for festivals like Ugadi (Telugu New Year) and Sankranti, hosting cultural dramas, food festivals, and community banquets. 

Radio Nyra's 24/7 Telugu channel (99.9 FM HD3 in Raleigh-Durham and digital stream globally) serves as the primary media partner for these associations, broadcasting schedules, interviews, and Tollywood hit tracks.`,
        faqs: `Q1: When are the NATA and TANA conventions?
A1: Conventions typically run during the summer months; check local Telugu association web portals or listen to Radio Nyra for dates.

Q2: How do I listen to the Radio Nyra Telugu broadcast?
A2: Tune into 99.9 FM HD3 in North Carolina, download our mobile app, or tell Alexa: 'Alexa, open Radio Nyra Telugu'.`
    },
    "diwali-celebrations": {
        title: "Diwali Celebrations in Cary and Morrisville NC: Koka Booth Guide (2026)",
        description: "The ultimate visitor guide for the Koka Booth Diwali celebration and Morrisville community events in North Carolina. Learn about parking, tickets, and schedules.",
        outline: `1. Introduction: Diwali in the Carolinas
2. Koka Booth Amphitheatre Diwali Event Details
3. Morrisville Community Center Diwali Bazaars
4. Traditional Foods, Sweets (Mithai), and Shopping Stalls
5. Cultural Performances: Classical Bharatanatyam to Fusion Bollywood
6. Visitor Tips: Parking, Shuttle Service, and Bag Policy
7. How Radio Nyra Broadcasts Live from Koka Booth`,
        content: `Diwali, the festival of lights, is celebrated with spectacular grandeur in Wake County, North Carolina. The premier event is the Town of Cary's Diwali Celebration at the scenic Koka Booth Amphitheatre, drawing massive crowds from across the state.

The festival brings together traditional lamp lighting, vibrant Rangoli exhibitions, and bazaar stalls filled with Indian wear, jewelry, and mouthwatering sweets (Mithai) from local vendors. Cultural stages feature performances by local schools and visiting troupes, covering classical raagas to energetic Bollywood beats.

For visitors planning to attend, we recommend arriving early. Shuttle buses run from local corporate parking decks, and checking the Koka Booth bag policy beforehand will save time at the gate.

Radio Nyra broadcasts live from Koka Booth every year. Listeners can tune in to hear live traffic alerts, vendor interviews, and main-stage announcements directly on their radios.`,
        faqs: `Q1: Is there an admission fee for Koka Booth Diwali?
A1: Admission is typically free, but parking inside the venue may have a fee. Shuttle parking is free.

Q2: What food options are available?
A2: Multiple local Indian restaurants set up food trucks and stalls offering chaat, biryanis, and sweets.`
    },
    "concert-guides": {
        title: "US Concert Tour Guide 2026: Indian Subcontinent Artists Performing Near You",
        description: "Don't miss out on concert dates, ticket pre-sales, and venue guides for Indian Subcontinent artists touring the United States in 2026.",
        outline: `1. Introduction: The Boom of Indian Subcontinent Concert Tours in USA
2. AR Rahman Tour: Cities, Arenas, and Ticket Packages
3. Shaan Live in Concert: Nostalgic Hits and Locations
4. Punjabi Pop and Hip-Hop Arena Tours (Diljit, AP Dhillon)
5. Classical and Ghazal Evenings: US Theater Schedules
6. Direct attribution ticket purchase tips
7. Radio Nyra: Official Media Sponsor for Tour Guides`,
        content: `Over the last few years, major arenas across the United States have consistently sold out for touring artists from the Indian Subcontinent. Ranging from legendary film composers to modern independent pop stars, the demand for live music is at an all-time high.

The legendary A.R. Rahman is set to return with a stunning multi-city tour, performing in premier arenas from New York to California. Shaan will also bring his signature romantic ballads to major theaters, while Punjabi superstars sell out stadiums.

Radio Nyra has established itself as the official media sponsor for major tours in the Southeast, offering exclusive pre-sale codes, meet-and-greets, and ticket sweeps.`,
        faqs: `Q1: How do I get Radio Nyra concert pre-sale codes?
A1: Listen to our live morning shows (such as Hello Vaishnavi) or join our WhatsApp community for instant access to codes.

Q2: Which cities will AR Rahman perform in?
A2: The tour includes major hubs like New York, Dallas, Chicago, Atlanta, and Raleigh-Durham.`
    },
    "community-news": {
        title: "Radio Nyra Community Spotlight: Research Triangle Indian Subcontinent News",
        description: "Stay connected with local community updates, business openings, temple announcements, and school achievements in Raleigh, Cary, and Morrisville NC.",
        outline: `1. Introduction: The Growing RTP Indian Subcontinent Footprint
2. Local Business Openings and Restaurant Reviews
3. Temple Festivals and Community Service Drives
4. Academic and Sports Achievements of Local Youth
5. Immigration and Local Government Forums
6. Radio Nyra Community Impact Initiatives`,
        content: `Radio Nyra serves as more than just a music network; we are the heartbeat of the community. In this weekly spotlight, we bring you the latest news and announcements from around the Research Triangle Park (RTP) region.

From new grocery stores and boutique openings in Cary to authentic restaurant launches in Morrisville, the local commercial landscape is thriving. Additionally, cultural temples like HSNC host regular food drives and youth leadership programs.

We also celebrate local high school students winning science fairs and cricket leagues making waves in regional sports complexes. Tuning in to Radio Nyra keeps you active, involved, and connected.`,
        faqs: `Q1: How can I submit a community news item?
A1: Email info@radionyra.com with details of your announcement, festival, or service drive.

Q2: Does Radio Nyra broadcast local NC traffic?
A2: Yes, we provide regular traffic alerts during morning and evening rush hours on 99.9 FM.`
    }
};

export default function BlogGeneratorPage() {
    const [topic, setTopic] = useState("indian-events-raleigh");
    const [tone, setTone] = useState("seo-optimized");
    const [keywords, setKeywords] = useState("Indian events NC, Cary Diwali, Radio Nyra");
    const [generating, setGenerating] = useState(false);
    const [progressStep, setProgressStep] = useState(0);
    const [generatedDraft, setGeneratedDraft] = useState<any | null>(null);
    const [copied, setCopied] = useState(false);
    const [saved, setSaved] = useState(false);
    const [saving, setSaving] = useState(false);

    const handleSave = () => {
        if (!generatedDraft) return;
        setSaving(true);
        try {
            // Generate a slug from the title
            const slug = generatedDraft.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');

            // Format outline list
            const outlineHtml = generatedDraft.outline
                ? `<h3>Article Outline</h3><ul>${generatedDraft.outline
                    .split('\n')
                    .map((line: string) => `<li>${line.trim()}</li>`)
                    .filter((line: string) => line !== '<li></li>')
                    .join('')}</ul>`
                : '';

            // Format FAQs
            const faqHtml = generatedDraft.faqs
                ? `<h3>Frequently Asked Questions</h3><div class="faq-section">${generatedDraft.faqs
                    .split('\n\n')
                    .map((faq: string) => {
                        const lines = faq.split('\n');
                        const q = lines[0] || '';
                        const a = lines.slice(1).join(' ') || '';
                        return `<div class="faq-item mb-4"><strong>${q}</strong><p>${a}</p></div>`;
                    })
                    .join('')}</div>`
                : '';

            // Format body content
            const bodyHtml = `<p>${generatedDraft.content.split('\n\n').join('</p><p>')}</p>`;

            // Combine HTML content
            const fullContent = `
                ${bodyHtml}
                ${outlineHtml}
                ${faqHtml}
            `.trim();

            const newPost = {
                id: Date.now().toString(),
                title: generatedDraft.title,
                slug: slug,
                excerpt: generatedDraft.description,
                content: fullContent,
                date: new Date().toISOString().split('T')[0],
                categories: ["AI Generated", topic.replace(/-/g, ' ')],
                author: { name: "Radio Nyra Admin" },
                featuredImage: { url: "/images/radio-nyra-logo.jpg", alt: generatedDraft.title }
            };

            // Read existing posts from localStorage
            let customPosts = [];
            const saved = localStorage.getItem('custom_blog_posts');
            if (saved) {
                try {
                    customPosts = JSON.parse(saved);
                } catch (e) {
                    customPosts = [];
                }
            }

            // Add the new post on top
            customPosts.unshift(newPost);

            // Save back to localStorage
            localStorage.setItem('custom_blog_posts', JSON.stringify(customPosts));

            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (error) {
            console.error("Error saving draft:", error);
            alert("An error occurred while saving the draft.");
        } finally {
            setSaving(false);
        }
    };

    const progressTexts = [
        "Analyzing topic parameters...",
        "Consulting search intent & SEO keywords...",
        "Drafting optimized title & meta tags...",
        "Structuring H1, H2, and H3 outline...",
        "Generating detailed draft content...",
        "Linting article and formatting FAQs...",
        "Ready!"
    ];

    // Simulate AI generator typing effect
    const handleGenerate = () => {
        setGenerating(true);
        setProgressStep(0);
        setGeneratedDraft(null);
        setSaved(false);

        // Progress loader simulation
        const interval = setInterval(() => {
            setProgressStep(prev => {
                if (prev >= progressTexts.length - 2) {
                    clearInterval(interval);
                    let template = GENERATOR_TEMPLATES[topic];
                    if (!template) {
                        const selectedTopic = TOPICS.find(t => t.id === topic);
                        const label = selectedTopic ? selectedTopic.label : "Indian Diaspora Media Topic";
                        
                        const generatedTitle = `${label} - The Ultimate Guide for Indian Americans`;
                        const generatedDesc = `Explore key insights, community tips, and professional resources regarding ${label.toLowerCase()} for the South Asian diaspora in the United States.`;
                        
                        const generatedOutline = `1. Introduction: Understanding ${label}
2. Key Challenges & Opportunities inside the US Diaspora
3. Practical Step-by-Step Strategies and Best Practices
4. Leverage Digital Media, Audio Streams, and Podcasts
5. How Radio Nyra Promotes Community Connection and Action
6. Summary & Recommendations`;

                        const generatedContent = `Navigating topics like ${label.toLowerCase()} is increasingly important for members of the South Asian diaspora living and working in the United States. Maintaining a balance between cultural values and professional growth requires access to trusted community platforms and reliable informational channels.

Historically, Indian immigrants have relied on strong word-of-mouth networks, local community groups, and regional media to stay updated. From Raleigh-Durham, NC to Atlanta, GA, regional networks provide support systems that help families and businesses thrive.

This is where digital community media networks like Radio Nyra make a massive difference. By offering 24/7 radio streams in regional languages (Hindi and Telugu) alongside dynamic business directories, local news updates, and event listings, Radio Nyra bridges the distance back to home.

Ultimately, whether you are trying to reach South Asian consumers through advertising, look for regional events, or stay connected with community achievements, having dedicated media hubs ensures that the voice of the diaspora remains strong.`;

                        const generatedFaqs = `Q1: How does this topic help the Indian American community?
A1: It builds a sense of belonging, opens avenues for professional networking, and helps immigrants navigate daily life in the US.

Q2: How can I leverage Radio Nyra to learn more about this?
A2: You can download our iOS or Android app, tune in to 99.9 FM, or view our updated business directory at radionyra.com.`;

                        template = {
                            title: generatedTitle,
                            description: generatedDesc,
                            outline: generatedOutline,
                            content: generatedContent,
                            faqs: generatedFaqs
                        };
                    }
                    setGeneratedDraft(template);
                    setGenerating(false);
                    return progressTexts.length - 1;
                }
                return prev + 1;
            });
        }, 900);
    };

    const handleCopy = () => {
        if (!generatedDraft) return;
        const fullText = `TITLE: ${generatedDraft.title}\n\nMETA DESCRIPTION: ${generatedDraft.description}\n\nOUTLINE:\n${generatedDraft.outline}\n\nCONTENT:\n${generatedDraft.content}\n\nFAQs:\n${generatedDraft.faqs}`;
        navigator.clipboard.writeText(fullText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        if (!generatedDraft) return;
        const markdown = `# ${generatedDraft.title}

**Meta Description:** ${generatedDraft.description}

## Article Outline
\`\`\`text
${generatedDraft.outline}
\`\`\`

## Article Content
${generatedDraft.content}

## FAQ Section
${generatedDraft.faqs}
`;
        const blob = new Blob([markdown], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `blog-draft-${topic}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
            <Navigation />

            <main className="py-12 md:py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    {/* Header */}
                    <div className="mb-8 border-b border-border/40 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-1">Admin Dashboard</p>
                            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground italic">
                                AI Blog Draft <span className="text-primary">Generator</span>
                            </h1>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-full font-bold uppercase tracking-widest text-[10px]" asChild>
                            <Link href="/blog"><ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to Blog</Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Control Panel */}
                        <div className="lg:col-span-1 bg-card border border-border p-6 rounded-2xl shadow-sm h-fit space-y-6">
                            <h2 className="text-lg font-black uppercase tracking-tight text-foreground flex items-center gap-2 border-b border-border/50 pb-3">
                                <Sparkles className="w-5 h-5 text-primary" /> Generator Options
                            </h2>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="topic" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Select Topic</Label>
                                    <Select value={topic} onValueChange={setTopic}>
                                        <SelectTrigger className="w-full h-12 bg-background border-border rounded-xl">
                                            <SelectValue placeholder="Select Topic" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-background border-border">
                                            {TOPICS.map(t => (
                                                <SelectItem key={t.id} value={t.id} className="cursor-pointer hover:bg-primary/10 font-bold uppercase text-xs tracking-wider">{t.label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="tone" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Tone of Voice</Label>
                                    <Select value={tone} onValueChange={setTone}>
                                        <SelectTrigger className="w-full h-12 bg-background border-border rounded-xl">
                                            <SelectValue placeholder="Select Tone" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-background border-border">
                                            {TONES.map(t => (
                                                <SelectItem key={t.id} value={t.id} className="cursor-pointer hover:bg-primary/10 font-bold uppercase text-xs tracking-wider">{t.label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="keywords" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Target Keywords</Label>
                                    <Input
                                        id="keywords"
                                        value={keywords}
                                        onChange={(e) => setKeywords(e.target.value)}
                                        className="h-12 bg-background border-border rounded-xl text-sm"
                                        placeholder="Comma-separated keywords"
                                    />
                                </div>

                                <Button
                                    onClick={handleGenerate}
                                    disabled={generating}
                                    className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                                >
                                    {generating ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Generating...
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="w-5 h-5" />
                                            Generate Draft
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>

                        {/* Generated Output */}
                        <div className="lg:col-span-2 space-y-6">
                            {generating && (
                                <div className="bg-card border border-border p-12 rounded-2xl shadow-sm text-center space-y-4 animate-pulse">
                                    <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                                    <h3 className="font-bold text-foreground text-xl">AI Assistant is Writing...</h3>
                                    <p className="text-sm text-primary font-bold uppercase tracking-widest">
                                        {progressTexts[progressStep]}
                                    </p>
                                </div>
                            )}

                            {!generating && !generatedDraft && (
                                <div className="bg-muted/30 border border-dashed border-border/70 p-16 rounded-2xl text-center flex flex-col items-center justify-center gap-4">
                                    <Sparkles className="w-12 h-12 text-muted-foreground opacity-50" />
                                    <h3 className="text-xl font-bold text-muted-foreground uppercase tracking-tight">No Draft Generated</h3>
                                    <p className="text-sm text-muted-foreground max-w-sm">
                                        Configure your options in the left panel and click "Generate Draft" to write a search engine optimized blog draft.
                                    </p>
                                </div>
                            )}

                            {generatedDraft && (
                                <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom duration-500">
                                    {/* Panel Tools */}
                                    <div className="bg-muted/40 px-6 py-4 border-b border-border/50 flex flex-wrap justify-between items-center gap-4 shrink-0">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Draft Output Ready</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="sm" onClick={handleCopy} className="rounded-full text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary">
                                                {copied ? <Check className="w-4 h-4 mr-1 text-green-500" /> : <Copy className="w-4 h-4 mr-1" />}
                                                {copied ? "Copied" : "Copy"}
                                            </Button>
                                            <Button variant="ghost" size="sm" onClick={handleDownload} className="rounded-full text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary">
                                                <Download className="w-4 h-4 mr-1" /> Download .MD
                                            </Button>
                                            <Button variant="ghost" size="sm" disabled={saving} onClick={handleSave} className="rounded-full text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary">
                                                {saving ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                                                        Saving...
                                                    </>
                                                ) : saved ? (
                                                    <>
                                                        <Check className="w-4 h-4 mr-1 text-green-500" />
                                                        Saved to CMS
                                                    </>
                                                ) : (
                                                    <>
                                                        <Save className="w-4 h-4 mr-1" />
                                                        Save Draft
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Document Editor Body */}
                                    <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                        {/* Meta Group */}
                                        <div className="p-6 rounded-xl bg-muted/30 border border-border/40 space-y-4">
                                            <div>
                                                <span className="text-[9px] font-black uppercase tracking-widest text-primary">SEO Meta Title</span>
                                                <h4 className="font-bold text-foreground text-lg mt-1">{generatedDraft.title}</h4>
                                            </div>
                                            <div className="border-t border-border/30 pt-4">
                                                <span className="text-[9px] font-black uppercase tracking-widest text-primary">Meta Description</span>
                                                <p className="text-muted-foreground text-sm mt-1">{generatedDraft.description}</p>
                                            </div>
                                        </div>

                                        {/* Outline */}
                                        <div className="space-y-3">
                                            <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-2">Proposed Article Outline</h3>
                                            <pre className="p-4 bg-muted/20 border border-border/30 rounded-xl font-mono text-sm leading-relaxed text-foreground/80 overflow-x-auto">
                                                {generatedDraft.outline}
                                            </pre>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-3">
                                            <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-2">Generated Draft Body</h3>
                                            <div className="text-foreground leading-relaxed text-sm whitespace-pre-line space-y-4">
                                                {generatedDraft.content}
                                            </div>
                                        </div>

                                        {/* FAQs */}
                                        <div className="space-y-3">
                                            <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-2">Draft FAQ Section</h3>
                                            <pre className="p-4 bg-muted/20 border border-border/30 rounded-xl font-mono text-sm leading-relaxed text-foreground/80 overflow-x-auto whitespace-pre-line">
                                                {generatedDraft.faqs}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
