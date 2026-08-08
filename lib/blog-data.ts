export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    date: string;
    author: {
        name: string;
    };
    featuredImage: {
        url: string;
        alt: string;
    };
    categories: string[];
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "0",
        title: "Raleigh-Durham FM Radio Stations Guide: Frequencies, Hip Hop, and Indian Subcontinent Hits",
        slug: "raleigh-durham-fm-radio-stations-guide",
        excerpt: "Looking for local FM radio stations in Raleigh-Durham, NC? Find the best frequencies for hip-hop, rap, alternative indie, and premier Bollywood/Telugu hits on Radio Nyra.",
        content: `
      <p>Whether you're commuting down I-40 or driving through the heart of the Research Triangle, finding the right FM radio station to match your vibe is essential. Raleigh-Durham, North Carolina boasts a diverse and vibrant radio landscape, spanning commercial giants, college stations, hip-hop streams, and premium multicultural channels.</p>
      
      <h2>Raleigh-Durham Local FM Radio Frequencies</h2>
      <p>Here is a quick reference guide to some of the most popular local FM radio stations in the Raleigh-Durham area:</p>
      <ul>
        <li><strong>99.9 FM:</strong> Radio Nyra (HD3 for Telugu, HD4 for Hindi) & WCMC (Sports Radio)</li>
        <li><strong>94.7 FM:</strong> WQDR (Today's Best Country)</li>
        <li><strong>105.1 FM:</strong> WDCG G105 (Today's Hit Music / Top 40)</li>
        <li><strong>97.5 FM:</strong> WQOK K97.5 (Raleigh's Hip-Hop and R&B Station)</li>
        <li><strong>95.7 FM:</strong> WCLY THAT Station (Adult Album Alternative / AAA)</li>
        <li><strong>90.1 FM:</strong> WUNC (North Carolina Public Radio / NPR)</li>
        <li><strong>90.7 FM:</strong> WNCU (Jazz and Community Radio)</li>
      </ul>

      <h2>What is Raleigh's Hip-Hop and Rap Station?</h2>
      <p>If you are looking for local rap and hip-hop, the premier frequency in Raleigh-Durham is <strong>K97.5 FM (WQOK)</strong>. Known for playing contemporary hip-hop, trap, and R&B hits, K97.5 FM is a staple of the local music scene. You can also tune to <strong>103.9 FM</strong> (Light FM / urban contemporary) for a mix of classic and modern R&B. Another popular hip-hop station in neighboring North Carolina areas is <strong>100.3 The Beat</strong>, playing non-stop hip-hop and R&B hits.</p>

      <h2>How Can I Listen to Radio Nyra?</h2>
      <p>For Indian Subcontinent, Bollywood, and Telugu music lovers, Radio Nyra is the ultimate choice. We broadcast digitally on <strong>99.9 FM HD4</strong> (Hindi) and <strong>99.9 FM HD3</strong> (Telugu) in Raleigh-Durham. In addition, we serve Atlanta on 107.5 FM HD3, Philadelphia on 103.9 FM HD2, and other US markets.</p>
      <p>You can listen to us on your phone anywhere in the world by downloading the official <strong>Radio Nyra app</strong> from the iOS App Store or Google Play Store, or by saying <em>"Alexa, play Radio Nyra Hindi"</em> to your smart assistant.</p>

      <h2>Common Radio FAQs</h2>
      <p><strong>What does FM stand for?</strong> FM stands for <em>Frequency Modulation</em>, a broadcasting method that offers higher-fidelity audio and less static than AM (Amplitude Modulation) radio.</p>
      <p><strong>How do I tune to 98.3 or other frequencies on my phone?</strong> Most modern smartphones do not have built-in FM antennas. To stream 98.3 FM or Radio Nyra, simply download streaming apps like TuneIn or the station's official app to listen on your mobile device via Wi-Fi or cellular data.</p>
    `,
        date: "2026-07-20",
        author: {
            name: "Radio Nyra Research"
        },
        featuredImage: {
            url: "/images/radio-nyra-logo.jpg",
            alt: "Raleigh-Durham FM Radio Stations Guide"
        },
        categories: ["Frequencies", "Guide", "Local"]
    },
    {
        id: "1",
        title: "The Voice of India in the USA: Radio Nyra's Journey",
        slug: "radio-nyra-voice-of-india",
        excerpt: "Discover how Radio Nyra became the leading Bollywood radio station in Raleigh-Durham, connecting the community through music and culture.",
        content: `
      <p>Radio Nyra has always been about more than just music; it's about connection. Since our inception, we've strived to bring the vibrant culture, timeless melodies, and energetic beats of India to the heart of the USA.</p>
      <p>From the soulful classics of Kishore Kumar to the latest chart-busters by Arijit Singh, our playlist is curated to evoke nostalgia and celebrate the new. But beyond the music, it's our community that makes us who we are.</p>
      <h2>Connecting Communities</h2>
      <p>Our talk shows, community updates, and local event coverage ensure that you are never far from home. Whether it's celebrating Diwali with a grand broadcast or discussing local community issues, Radio Nyra is your platform.</p>
      <p>Thank you for tuning in and making us a part of your daily life. Stay tailored for more exciting updates and shows coming your way!</p>
    `,
        date: "2026-01-05",
        author: {
            name: "Radio Nyra Team"
        },
        featuredImage: {
            url: "/images/radio-nyra-logo.jpg",
            alt: "Radio Nyra Studio"
        },
        categories: ["Station News", "Community"]
    },
    {
        id: "3",
        title: "Celebrating Holi 2026: A Festival of Colors",
        slug: "celebrating-holi-2026",
        excerpt: "Join us for the biggest Holi celebration in town! Music, dance, food, and colors await you at the Radio Nyra Holi Festival.",
        content: `
      <p>The festival of colors is around the corner, and Radio Nyra is thrilled to announce our annual 'Holi Festival Celebration'!</p>
      <h2>Event Details</h2>
      <ul>
        <li><strong>Date:</strong> March 25, 2026</li>
        <li><strong>Location:</strong> City Park</li>
        <li><strong>Time:</strong> 10:00 AM - 4:00 PM</li>
      </ul>
      <p>Expect a day filled with high-energy Bollywood beats, a dedicated rain dance floor, delicious food stalls serving authentic Indian chaat, and of course, plenty of organic colors.</p>
      <p>This is a family-friendly event, so bring your kids and elders along. Let's paint the town red, blue, green, and yellow!</p>
    `,
        date: "2026-01-10",
        author: {
            name: "Events Team"
        },
        featuredImage: {
            url: "/holi.webp",
            alt: "Holi Festival Colors"
        },
        categories: ["Events", "Holi"]
    },
    {
        id: "4",
        title: "Top Telugu Songs Today",
        slug: "top-telugu-songs-today",
        excerpt: "Discover the latest chart-topping Telugu songs dominating the airwaves today. Tune in to Radio Nyra for non-stop hits.",
        content: `
      <p>The Telugu film industry (Tollywood) is churning out some of the biggest musical hits of the year. From foot-tapping dance numbers to soulful romantic melodies, here are the top Telugu songs today that you should definitely have on your playlist.</p>
      <h2>Trending on Radio Nyra</h2>
      <p>Whether it's the latest track from Mahesh Babu's blockbuster or a viral sensation from the independent scene, we play them all on our dedicated Telugu stream. Our top Telugu songs today include fan favorites from DSP, Thaman S, and Anirudh Ravichander.</p>
      <p>Don't forget to listen to our popular shows like 'Chinna Mata' where we discuss these hits in depth!</p>
    `,
        date: "2026-03-22",
        author: {
            name: "Music Team"
        },
        featuredImage: {
            url: "/images/radio-nyra-logo.jpg",
            alt: "Top Telugu Songs"
        },
        categories: ["Music", "Telugu"]
    },
    {
        id: "5",
        title: "Latest Bollywood News",
        slug: "latest-bollywood-news",
        excerpt: "Get the latest Bollywood news, exclusive celebrity gossip, and upcoming movie releases straight from Mumbai.",
        content: `
      <p>Stay updated with the glitz and glamour of the Hindi film industry. Our latest Bollywood news segment covers everything from box office collections to exclusive behind-the-scenes stories.</p>
      <h2>What's Happening in B-Town</h2>
      <p>As we head into the summer blockbuster season, several big-budget films are gearing up for release. Rumors are swirling around new casting announcements, and we have all the juicy details right here.</p>
      <p>Tune in to 'Bollywood Bliss' on Radio Nyra for your daily dose of the latest Bollywood news.</p>
    `,
        date: "2026-03-22",
        author: {
            name: "Entertainment Desk"
        },
        featuredImage: {
            url: "/images/radio-nyra-logo.jpg",
            alt: "Latest Bollywood News"
        },
        categories: ["News", "Bollywood"]
    },
    {
        id: "6",
        title: "New Movie Songs 2026",
        slug: "new-movie-songs-2026",
        excerpt: "Explore the biggest new movie songs of 2026. From Bollywood pop to Tollywood class, listen to the absolute best.",
        content: `
      <p>2026 is already shaping up to be an incredible year for Indian music. With a slate of highly anticipated films, composers are delivering fresh, innovative tracks.</p>
      <h2>The Best New Movie Songs 2026</h2>
      <p>We've compiled a list of the most requested tracks this month. The new movie songs of 2026 are blending traditional Indian instruments with modern electronic beats, creating a unique sound that our listeners across the USA love.</p>
      <p>Listen live to Radio Nyra to catch all these new movie songs of 2026 streaming 24/7.</p>
    `,
        date: "2026-03-22",
        author: {
            name: "Music Team"
        },
        featuredImage: {
            url: "/images/radio-nyra-logo.jpg",
            alt: "New Movie Songs 2026"
        },
        categories: ["Music", "Releases"]
    }
];
