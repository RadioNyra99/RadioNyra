import { notFound } from "next/navigation";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, Play, Headphones, Disc } from "lucide-react";
import type { Metadata } from "next";

const SHOW_DATA: Record<string, {
    name: string;
    host: string;
    hostBio: string;
    schedule: string;
    image: string;
    stationKey: string;
    podcastUrl: string;
    description: string;
    episodes: { title: string; duration: string; url: string }[];
}> = {
    "hello-vaishnavi": {
        name: "Hello Vaishnavi",
        host: "Vaishnavi Palleda",
        hostBio: "Vaishnavi brings you the most energetic, fun-filled segments covering local community events, trending social updates, and prime Bollywood tracks. Known for her charismatic presentation style, she keeps the community engaged and informed.",
        schedule: "Monday to Friday, 9:00 AM - 12:00 PM (EST)",
        image: "/images/hosts/hello-vaishnavi.jpeg",
        stationKey: "Hindi",
        podcastUrl: "https://open.spotify.com/embed/show/4Nir9y78L7Z5UvT2y3Z1Xz",
        description: "Welcome to the Hello Vaishnavi show, the primary morning drive home for local Raleigh-Durham listeners. Tune in for deep cultural engagement, interviews with community leaders, and the hottest hits.",
        episodes: [
            { title: "EP 42: Interview with Morrisville Mayor on Diwali Bash", duration: "18:42", url: "#" },
            { title: "EP 41: Navigating Life in North Carolina as a Newcomer", duration: "24:15", url: "#" },
            { title: "EP 40: Bollywood Hits Selection & Weekend Preview", duration: "15:30", url: "#" }
        ]
    },
    "geet-bazaar": {
        name: "Geet Bazaar",
        host: "Dr. Taj & Dr. Caldwell",
        hostBio: "Geet Bazaar has been a staple of Indian Subcontinent radio broadcasting in the Triangle for over a decade. Hosted by the legendary duo of Dr. Taj and Dr. Caldwell, the show delivers classical tunes, ghazals, and rich historical trivia.",
        schedule: "Saturdays and Sundays, 8:00 AM - 11:00 AM (EST)",
        image: "/geet-bazaar.jpg",
        stationKey: "Hindi",
        podcastUrl: "https://open.spotify.com/embed/show/4Nir9y78L7Z5UvT2y3Z1Xz",
        description: "Geet Bazaar is the oldest running radio show on Radio Nyra, combining nostalgic melodies with intellectual commentary. A true community favorite.",
        episodes: [
            { title: "EP 104: Classical Raagas & Ghazal History", duration: "45:10", url: "#" },
            { title: "EP 103: Tribute to Jagjit Singh & Lata Mangeshkar", duration: "50:05", url: "#" },
            { title: "EP 102: Monsoon Melodies & Listener requests", duration: "42:15", url: "#" }
        ]
    },
    "zara-muskurao": {
        name: "Zara Muskurao",
        host: "Aayushii Rode",
        hostBio: "Aayushii lightens up your mid-days with positive thoughts, mental wellness discussions, lighthearted humor, and sweet romantic melodies. Her soulful segments are the perfect companion for your afternoon desk time.",
        schedule: "Monday to Friday, 12:00 PM - 3:00 PM (EST)",
        image: "/images/hosts/zara-muskurao.jpeg",
        stationKey: "Hindi",
        podcastUrl: "https://open.spotify.com/embed/show/4Nir9y78L7Z5UvT2y3Z1Xz",
        description: "Zara Muskurao (Smile a Little) brings pure warmth and smiles to your daily radio listening. With wellness tips and soothing songs, it is your midday stress-buster.",
        episodes: [
            { title: "EP 15: Mindfulness in a Busy Corporate Life", duration: "20:12", url: "#" },
            { title: "EP 14: Cultivating Daily Gratitude & Positivity", duration: "18:45", url: "#" },
            { title: "EP 13: Best of Bollywood Romantic Melodies Selection", duration: "22:30", url: "#" }
        ]
    }
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return Object.keys(SHOW_DATA).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const show = SHOW_DATA[slug];
    if (!show) return {};

    const title = `${show.name} with ${show.host} | Radio Nyra Show`;
    const description = `Tune in to ${show.name} hosted by ${show.host} on Radio Nyra. Airing on schedule: ${show.schedule}. Listen live online or check out episodes.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: show.image }],
            url: `https://www.radionyra.com/shows/${slug}`,
            siteName: "Radio Nyra",
            type: "video.episode"
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [show.image]
        }
    };
}

export default async function ShowPage({ params }: { params: Params }) {
    const { slug } = await params;
    const show = SHOW_DATA[slug];

    if (!show) {
        notFound();
    }

    return (
        <SeoPageLayout
            title={show.name}
            subtitle={`Hosted by ${show.host}`}
            stationKey={show.stationKey}
        >
            <div className="space-y-12">
                {/* Host Hero Details */}
                <div className="flex flex-col md:flex-row gap-8 items-start bg-card border border-border p-8 rounded-2xl shadow-sm">
                    <div className="w-full md:w-64 h-64 shrink-0 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-md">
                        <img
                            src={show.image}
                            alt={`${show.host} - Radio Nyra Host`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-4">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1.5 w-fit">
                            <Clock className="w-3.5 h-3.5" /> {show.schedule}
                        </span>
                        <h2 className="text-3xl font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                            <User className="w-6 h-6 text-primary" /> Meet Your Host
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed italic">
                            {show.hostBio}
                        </p>
                        <p className="text-foreground leading-relaxed">
                            {show.description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Episodes Playlist */}
                    <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-black uppercase tracking-tight text-foreground mb-6 flex items-center gap-2 border-b border-border/50 pb-4">
                            <Headphones className="w-5 h-5 text-primary" /> Recent Episodes
                        </h3>
                        <div className="space-y-4">
                            {show.episodes.map((ep, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-muted/30 hover:bg-primary/5 border border-border/40 hover:border-primary/20 rounded-xl group transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-primary/10 text-primary flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Play className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{ep.title}</p>
                                            <p className="text-xs text-muted-foreground">{ep.duration} mins</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                                        Play
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Podcast Embed Mockup */}
                    <div className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2 border-b border-border/50 pb-4">
                                <Disc className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: '4s' }} /> Podcast Stream
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                Stream {show.name} on your favorite podcast platforms! Catch up on missed episodes, exclusive interviews, and special extended segments.
                            </p>
                        </div>
                        
                        {/* Spotify Embed Iframe Mock */}
                        <div className="w-full bg-black/5 rounded-xl border border-border/50 p-4 h-40 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent z-0" />
                            <div className="relative z-10 text-center space-y-2">
                                <div className="text-xs font-black uppercase tracking-widest text-green-500">Spotify Podcast</div>
                                <h4 className="font-bold text-foreground text-sm">{show.name} Podcast Feed</h4>
                                <p className="text-xs text-muted-foreground">Subscribe on Spotify, Apple Podcasts, or Castbox</p>
                                <Button size="sm" className="bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-full font-bold uppercase tracking-widest text-[9px] px-4 py-2 mt-2">
                                    Open Spotify Player
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SeoPageLayout>
    );
}
