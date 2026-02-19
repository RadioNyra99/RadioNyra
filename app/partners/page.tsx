"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PARTNERS } from "@/lib/partners"
import { motion } from "framer-motion"

export default function PartnersPage() {
    const categories = [
        {
            id: 'Digital Display Locations',
            title: 'Digital Display Locations',
            description: 'Where you can find us in the physical world.',
            cardStyle: 'bg-white border-2 border-primary/20 shadow-xl hover:shadow-2xl scale-105 z-10',
            gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'
        },
        {
            id: 'On-Air Advertisers',
            title: 'On-Air Advertisers',
            description: 'The voices that drive our programming.',
            cardStyle: 'bg-white/80 backdrop-blur-sm border border-border hover:border-primary/50 shadow-md hover:shadow-lg',
            gridClass: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20'
        },
        {
            id: 'Past and Current Partners',
            title: 'Past & Current Partners',
            description: 'Organizations weve been proud to work with.',
            cardStyle: 'bg-white/40 border border-border/50 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100',
            gridClass: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'
        }
    ] as const;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-primary selection:text-primary-foreground">
            <Navigation />

            <main>
                {/* HERO */}
                <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-10" />
                    <div className="container mx-auto px-4 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-gray-900">
                                OUR <span className="text-primary italic">NETWORK</span>
                            </h1>
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <div className="h-px w-20 bg-primary hidden md:block" />
                                <p className="text-xl md:text-2xl text-gray-500 uppercase tracking-widest font-bold italic">
                                    Trusted by Industry Leaders & Community Pillars
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <div className="container mx-auto px-4 pb-24">
                    {categories.map((category) => {
                        const categoryPartners = PARTNERS.filter(p => p.category === category.id);
                        if (categoryPartners.length === 0) return null;

                        return (
                            <section key={category.id} className="py-12 border-t border-gray-100 first:border-0">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={containerVariants}
                                >
                                    <div className="mb-12">
                                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 flex items-baseline gap-4">
                                            {category.title}
                                            <span className="h-2 w-2 rounded-full bg-primary" />
                                        </h2>
                                        <p className="text-gray-500 font-medium uppercase tracking-widest text-sm mt-2">
                                            {category.description}
                                        </p>
                                    </div>

                                    <div className={category.gridClass}>
                                        {categoryPartners.map((partner, i) => (
                                            <motion.div
                                                key={`${category.id}-${i}`}
                                                variants={itemVariants}
                                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                                className={`group relative aspect-square sm:aspect-video md:aspect-square flex items-center justify-center p-6 transition-all duration-300 rounded-2xl ${category.cardStyle}`}
                                            >
                                                {partner.link ? (
                                                    <Link
                                                        href={partner.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full h-full flex items-center justify-center"
                                                        title={partner.name}
                                                    >
                                                        <div className="relative w-full h-full">
                                                            <img
                                                                src={partner.image}
                                                                alt={partner.name}
                                                                loading="lazy"
                                                                className="w-full h-full object-contain"
                                                            />
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <div className="relative w-full h-full">
                                                        <img
                                                            src={partner.image}
                                                            alt={partner.name}
                                                            loading="lazy"
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </div>
                                                )}

                                                {/* Tooltip on hover */}
                                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none uppercase font-bold tracking-tighter">
                                                    {partner.name}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </section>
                        );
                    })}
                </div>
            </main>

            <Footer />
        </div>
    );
}
