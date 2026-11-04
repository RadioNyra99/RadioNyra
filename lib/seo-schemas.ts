/**
 * JSON-LD Structured Data Schema Generators for Radio Nyra
 * Maximizes SEO ranking across Google Search, Video Indexing, Podcast Indexes & Rich Snippets
 */

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.radionyra.com/#organization",
        "name": "Radio Nyra",
        "url": "https://www.radionyra.com",
        "logo": "https://www.radionyra.com/images/radio-nyra-logo.jpg",
        "description": "Radio Nyra shares Hindi and Telugu radio programming, music, community news, podcasts, interviews, and events.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-919-294-4800",
            "contactType": "customer service",
            "email": "info@radionyra.com",
            "availableLanguage": ["English", "Hindi", "Telugu"]
        },
        "sameAs": [
            "https://facebook.com/radionyrausa",
            "https://instagram.com/radionyrausa",
            "https://twitter.com/NyraUsa",
            "https://youtube.com/c/RadioNyraUSA",
            "https://linkedin.com/company/radionyrausa"
        ]
    };
}

export function generateRadioStationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "RadioStation",
        "@id": "https://www.radionyra.com/#station",
        "name": "Radio Nyra",
        "url": "https://www.radionyra.com",
        "logo": "https://www.radionyra.com/images/radio-nyra-logo.jpg",
        "genre": ["Bollywood", "Indian Subcontinent", "Tollywood", "Community Radio", "Talk Show"],
        "telephone": "+1-919-294-4800",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "4819 Emperor Blvd Suite 400",
            "addressLocality": "Durham",
            "addressRegion": "NC",
            "postalCode": "27703",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "35.8858",
            "longitude": "-78.8550"
        },
        "broadcastFrequency": [
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
        ]
    };
}

export function generatePodcastSchema(podcast: {
    title: string;
    description: string;
    author: string;
    url: string;
    imageUrl: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "PodcastSeries",
        "name": podcast.title,
        "description": podcast.description,
        "url": podcast.url,
        "image": podcast.imageUrl,
        "author": {
            "@type": "Organization",
            "name": podcast.author || "Radio Nyra"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Radio Nyra"
        }
    };
}

export function generateVideoSchema(video: {
    title: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration?: string;
    embedUrl: string;
}) {
    const schema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": video.title,
        "description": video.description,
        "thumbnailUrl": [video.thumbnailUrl],
        "uploadDate": video.uploadDate,
        "embedUrl": video.embedUrl,
        "publisher": {
            "@type": "Organization",
            "name": "Radio Nyra USA",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.radionyra.com/images/radio-nyra-logo.jpg"
            }
        }
    };

    if (video.duration) schema.duration = video.duration;
    return schema;
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
}

export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Radio Nyra Media Network",
        "image": "https://www.radionyra.com/images/radio-nyra-logo.jpg",
        "telephone": "+1-919-294-4800",
        "email": "info@radionyra.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "4819 Emperor Blvd Suite 400",
            "addressLocality": "Durham",
            "addressRegion": "NC",
            "postalCode": "27703",
            "addressCountry": "US"
        }
    };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}
