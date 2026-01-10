import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Mic2 } from "lucide-react"

export default function SchedulePage() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground text-foreground">
            <Navigation />

            <main>
                {/* Header Section */}
                <section className="py-20 bg-primary/5 border-b border-primary/10 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-primary italic">
                            The Schedule
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto font-bold opacity-80">
                            Your Daily Dose of Rhythms & Stories
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 overflow-x-auto">
                        <div className="min-w-[1000px]">
                            {/* Header Row */}
                            <div className="grid grid-cols-[100px_repeat(7,1fr)] bg-primary/5 border border-border text-center font-black uppercase tracking-widest text-sm">
                                <div className="p-4 border-r border-border">Time</div>
                                {days.map(day => <div key={day} className="p-4 border-r border-border last:border-r-0 text-primary">{day}</div>)}
                            </div>

                            {/* Schedule Rows - Simplified for readability based on image patterns */}
                            {/* 12 AM - 5 AM: Back-To-Back */}
                            {[0, 1, 2, 3, 4].map(hour => (
                                <div key={hour} className="grid grid-cols-[100px_repeat(7,1fr)] border-x border-b border-border text-center text-xs font-bold uppercase tracking-wider">
                                    <div className="p-3 border-r border-border text-muted-foreground flex items-center justify-center">{hour === 0 ? '12 AM' : `${hour} AM`}</div>
                                    {days.map(day => <div key={day} className="p-3 border-r border-border last:border-r-0 bg-muted/30 text-muted-foreground flex items-center justify-center">Back-To-Back</div>)}
                                </div>
                            ))}

                            {/* 6 AM - 7 AM: Geetanjali (All Days) */}
                            <div className="grid grid-cols-[100px_repeat(7,1fr)] border-x border-b border-border text-center text-xs font-bold uppercase tracking-wider">
                                <div className="p-3 border-r border-border text-muted-foreground flex items-center justify-center">6 AM</div>
                                {days.map(day => <div key={day} className="p-3 border-r border-border last:border-r-0 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 flex items-center justify-center">Geetanjali</div>)}
                            </div>

                            {/* 7 AM: Back To Back */}
                            <div className="grid grid-cols-[100px_repeat(7,1fr)] border-x border-b border-border text-center text-xs font-bold uppercase tracking-wider">
                                <div className="p-3 border-r border-border text-muted-foreground flex items-center justify-center">7 AM</div>
                                {days.map(day => (
                                    <div key={day} className={`p-3 border-r border-border last:border-r-0 flex items-center justify-center ${day === 'Saturday' || day === 'Sunday' ? "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400" : "bg-muted/30 text-muted-foreground"}`}>
                                        {day === 'Saturday' || day === 'Sunday' ? "Zara Muskurao - Aayushii" : "Back-To-Back"}
                                    </div>
                                ))}
                            </div>

                            {/* 8 AM - 10 AM: Chai Pe Charcha (Mon-Fri) / Zara Muskurao (Sat-Sun) */}
                            {[8, 9].map(hour => (
                                <div key={hour} className="grid grid-cols-[100px_repeat(7,1fr)] border-x border-b border-border text-center text-xs font-bold uppercase tracking-wider">
                                    <div className="p-3 border-r border-border text-muted-foreground flex items-center justify-center">{hour} AM</div>
                                    {days.map(day => {
                                        const isWeekend = day === 'Saturday' || day === 'Sunday';
                                        return (
                                            <div key={day} className={`p-3 border-r border-border last:border-r-0 flex items-center justify-center ${!isWeekend ? "bg-cyan-100 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400" : "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400"}`}>
                                                {!isWeekend ? "Chai Pe Charcha - Raj" : "Zara Muskurao - Aayushii"}
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}

                            {/* 10 AM - 11 AM: Zara Muskurao (Mon-Fri) / Kuch Tum (Sat) / Geet Bazaar (Sun) */}
                            <div className="grid grid-cols-[100px_repeat(7,1fr)] border-x border-b border-border text-center text-xs font-bold uppercase tracking-wider">
                                <div className="p-3 border-r border-border text-muted-foreground flex items-center justify-center">10 AM</div>
                                {days.map(day => {
                                    let content = "Zara Muskurao - Aayushii";
                                    let style = "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400";
                                    if (day === 'Saturday') { content = "Kuch Tum Kaho, Kuch Hum Kahein", style = "bg-orange-300 dark:bg-orange-700/30 text-orange-900 dark:text-orange-100" }
                                    if (day === 'Sunday') { content = "Geet Bazaar (Live)", style = "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400" }

                                    return (
                                        <div key={day} className={`p-3 border-r border-border last:border-r-0 flex items-center justify-center ${style}`}>
                                            {content}
                                        </div>
                                    )
                                })}
                            </div>

                            {/* 11 AM - 1 PM: Zara Muskurao (Mon-Fri) / Back-To-Back (Sat-Sun) */}
                            {[11, 12].map(hour => (
                                <div key={hour} className="grid grid-cols-[100px_repeat(7,1fr)] border-x border-b border-border text-center text-xs font-bold uppercase tracking-wider">
                                    <div className="p-3 border-r border-border text-muted-foreground flex items-center justify-center">{hour === 12 ? '12 PM' : `${hour} AM`}</div>
                                    {days.map(day => {
                                        const isWeekend = day === 'Saturday' || day === 'Sunday';
                                        return (
                                            <div key={day} className={`p-3 border-r border-border last:border-r-0 flex items-center justify-center ${!isWeekend ? "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400" : "bg-muted/30 text-muted-foreground"}`}>
                                                {!isWeekend ? "Zara Muskurao - Aayushii" : "Back-To-Back"}
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}

                            {/* 1 PM: Back-to-Back (All) */}
                            <div className="grid grid-cols-[100px_repeat(7,1fr)] border-x border-b border-border text-center text-xs font-bold uppercase tracking-wider">
                                <div className="p-3 border-r border-border text-muted-foreground flex items-center justify-center">1 PM</div>
                                {days.map(day => <div key={day} className="p-3 border-r border-border last:border-r-0 bg-muted/30 text-muted-foreground flex items-center justify-center">Back-To-Back</div>)}
                            </div>

                            {/* 2 PM - 4 PM: Bollywood Bliss (All Days) */}
                            {[2, 3].map(hour => (
                                <div key={hour} className="grid grid-cols-[100px_repeat(7,1fr)] border-x border-b border-border text-center text-xs font-bold uppercase tracking-wider">
                                    <div className="p-3 border-r border-border text-muted-foreground flex items-center justify-center">{hour} PM</div>
                                    {days.map(day => (
                                        <div key={day} className="p-3 border-r border-border last:border-r-0 bg-purple-50 dark:bg-purple-900/10 text-purple-700 dark:text-purple-400 flex items-center justify-center">Bollywood Bliss - Bharti</div>
                                    ))}
                                </div>
                            ))}

                            {/* 4 PM: Misc/Podcast (Mon-Fri) / Desh Pardesh (Sat) / Legends (Sun) */}
                            <div className="grid grid-cols-[100px_repeat(7,1fr)] border-x border-b border-border text-center text-xs font-bold uppercase tracking-wider">
                                <div className="p-3 border-r border-border text-muted-foreground flex items-center justify-center">4 PM</div>
                                {days.map(day => {
                                    let content = "Misc. or Podcast";
                                    let style = "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400";
                                    if (day === 'Saturday') { content = "Desh Pardesh - Vishal" } // Same color
                                    if (day === 'Sunday') { content = "Legends & Leaders - Steve Rao", style = "bg-blue-800 text-white" }
                                    if (['Monday', 'Tuesday'].includes(day)) { content = "Desh Pardesh - Vishal", style = "bg-green-200 dark:bg-green-900/30 text-green-800 dark:text-green-300" } // Image shows Desh Pardesh starts at 4/5 PM depending... actually image says 5-6 Desh Pardesh Mon-Tue. 4-5 Misc.
                                    // Correction from image: 4-5 PM Mon/Tue is Desh Pardesh? Wait, look at image 5-6 row.
                                    // Image Row 4-5PM: Mon/Tue=Green(Desh Pardesh?), Wed/Thu/Fri=Green(Misc), Sat=Green(Desh), Sun=Blue(Legends). 
                                    // Actually Mon/Tue 5-6 is Desh Pardesh. 4-5 looks like Green block for Desh Pardesh starts at 5? No, the green block spans 5-7.
                                    // Let's look at 4-5PM: Mon/Tue empty/green? It says "Desh Pardesh" in the 5-6 block. 4-5 block for Mon/Tue is likely Desh Pardesh too? Or part of the block?
                                    // The image shows "Desh Pardesh - Vishal" spanning 5-7 PM Mon, Tue, Sat, Sun.
                                    // 4-5 PM Wed, Thu, Fri says "Misc or Podcast".
                                    // 4-5 PM Sun says "Legends & Leaders".
                                    // 4-5 PM Mon, Tue: looks like same color as Desh Pardesh but text is in 5-6 block. Likely separate or extended.
                                    // I'll put "Desh Pardesh - Vishal" for Mon/Tue 4-5PM based on visual continuity if needed, or leave blank/Misc. 
                                    // Actually, let's look closer. Row 4-5PM. Mon/Tue Block seems to start at 5. So 4-5 is likely empty or previous show? 
                                    // Ah, the block "Bollywood Bliss" ends at 4.
                                    // Row 4-5PM: Wed-Fri "Misc or Podcast". Sun "Legends..".
                                    // Mon/Tue 4-5PM: Not labeled. Maybe "Desh Pardesh"? Let's assume Misc/Podcast or gap.
                                    // I will mimic the "Misc or Podcast" for Mon-Fri for simplicity unless I see text.
                                    // Wait, Mon/Tue at 5PM starts Desh Pardesh.

                                    if (['Wednesday', 'Thursday', 'Friday'].includes(day)) { return <div key={day} className="p-3 border-r border-border last:border-r-0 bg-lime-100 text-lime-800 flex items-center justify-center">Misc. or Podcast</div> }
                                    if (day === 'Sunday') { return <div key={day} className="p-3 border-r border-border last:border-r-0 bg-blue-900 text-white flex items-center justify-center">Legends & Leaders - Steve Rao</div> }
                                    if (day === 'Saturday') { return <div key={day} className="p-3 border-r border-border last:border-r-0 bg-green-200 text-green-800 flex items-center justify-center">Desh Pardesh - Vishal</div> } // Image shows match

                                    return <div key={day} className="p-3 border-r border-border last:border-r-0 bg-muted/30 text-muted-foreground flex items-center justify-center">--</div>;
                                })}
                            </div>

                            {/* 5 PM - 7 PM: Desh Pardesh (Mon, Tue, Sat, Sun) / Shows (Wed-Fri) */}
                            <div className="grid grid-cols-[100px_repeat(7,1fr)] border-x border-b border-border text-center text-xs font-bold uppercase tracking-wider">
                                <div className="p-3 border-r border-border text-muted-foreground flex items-center justify-center h-24">5-7 PM</div>
                                {days.map(day => {
                                    if (['Monday', 'Tuesday', 'Saturday', 'Sunday'].includes(day)) {
                                        return <div key={day} className="p-3 border-r border-border last:border-r-0 bg-green-200 dark:bg-green-900/30 text-green-800 dark:text-green-300 flex items-center justify-center">Desh Pardesh - Vishal</div>
                                    }
                                    if (day === 'Wednesday') return <div key={day} className="p-3 border-r border-border last:border-r-0 bg-blue-400 text-white flex items-center justify-center">Idhar Udhar Ki Baatein</div>
                                    if (day === 'Thursday') return <div key={day} className="p-3 border-r border-border last:border-r-0 bg-yellow-600 text-white flex items-center justify-center">Hello Vaishnavi</div>
                                    if (day === 'Friday') return <div key={day} className="p-3 border-r border-border last:border-r-0 bg-red-800 text-white flex items-center justify-center">Dil Se Desi</div>

                                    return null;
                                })}
                            </div>

                            {/* 7 PM - 10 PM: Nirvana Nights (All) */}
                            {[7, 8, 9].map(hour => (
                                <div key={hour} className="grid grid-cols-[100px_repeat(7,1fr)] border-x border-b border-border text-center text-xs font-bold uppercase tracking-wider">
                                    <div className="p-3 border-r border-border text-muted-foreground flex items-center justify-center">{hour} PM</div>
                                    {days.map(day => (
                                        <div key={day} className="p-3 border-r border-border last:border-r-0 bg-cyan-50 dark:bg-cyan-900/10 text-cyan-700 dark:text-cyan-400 flex items-center justify-center">Nirvana Nights - Shivani</div>
                                    ))}
                                </div>
                            ))}

                            {/* 10 PM - 12 AM: Triangle Tunes (Mon-Sat) / Geet Bazaar (Sun) */}
                            <div className="grid grid-cols-[100px_repeat(7,1fr)] border-x border-b border-border text-center text-xs font-bold uppercase tracking-wider">
                                <div className="p-3 border-r border-border text-muted-foreground flex items-center justify-center h-24">10 PM - 12 AM</div>
                                {days.map(day => {
                                    if (day === 'Sunday') {
                                        return <div key={day} className="p-3 border-r border-border last:border-r-0 bg-purple-300 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 flex items-center justify-center">Geet Bazaar (Repeat) / Mehfil</div>
                                    }
                                    return <div key={day} className="p-3 border-r border-border last:border-r-0 bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 flex items-center justify-center">Triangle Tunes and Talks - Monica</div>
                                })}
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted/20 border-t border-border">
                    <div className="container mx-auto px-4 text-center max-w-2xl">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Tune In Anywhere</h2>
                        <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mb-10 leading-loose">
                            Radio Nyra is available 24/7. Don't miss out on our special weekend programs and exclusive community segments.
                        </p>
                        <Button className="h-16 px-12 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none shadow-xl transition-all" asChild>
                            <Link href="/schedule">Set Reminder</Link>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
