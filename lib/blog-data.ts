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
        id: "2",
        title: "Top 10 Bollywood Hits to Kickstart Your 2026",
        slug: "top-10-bollywood-hits-2026",
        excerpt: "Get your playlist ready! Here are the top 10 Bollywood tracks that are ruling the charts and our listeners' hearts this year.",
        content: `
      <p>2026 has started with a bang, and the Bollywood music industry is churning out hits that are impossible to ignore. Here is our curated list of the top 10 songs you must have on your playlist right now:</p>
      <ol>
        <li><strong>Dil Ka Dariya</strong> - A soulful romantic ballad that pulls at your heartstrings.</li>
        <li><strong>Nach Le</strong> - The ultimate party anthem of the season.</li>
        <li><strong>Sufi Soul</strong> - A fusion track that blends traditional Qawwali with modern beats.</li>
        <li><strong>City Lights</strong> - An upbeat track perfect for your evening drive.</li>
        <li><strong>Retro Rewind</strong> - A remix that does justice to the original classic.</li>
      </ol>
      <p>Tune in to 'Non Stop Hungama' with Host Sohail to catch these tracks live and participate in our countdown!</p>
    `,
        date: "2026-01-08",
        author: {
            name: "DJ Sohail"
        },
        featuredImage: {
            url: "/images/hosts/non-stop-hungama.jpg",
            alt: "DJ Music Console"
        },
        categories: ["Music", "Top 10"]
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
            url: "/Holi.jpg",
            alt: "Holi Festival Colors"
        },
        categories: ["Events", "Holi"]
    }
];
