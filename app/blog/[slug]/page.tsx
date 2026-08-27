import BlogPostClientView from './blog-post-client';
import { BLOG_POSTS } from '@/lib/blog-data';
import type { Metadata } from 'next';

// Generate static paths for all blog posts
export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((item) => item.slug === slug);
    if (!post) return {};

    return {
        title: post.title.slice(0, 58),
        description: post.excerpt.slice(0, 158),
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.radionyra.com/blog/${post.slug}`,
            type: "article",
            images: post.featuredImage?.url ? [{ url: post.featuredImage.url, alt: post.featuredImage.alt }] : undefined,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Params }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((item) => item.slug === slug);
    const articleSchema = post ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: post.featuredImage?.url ? `https://www.radionyra.com${post.featuredImage.url}` : "https://www.radionyra.com/images/radio-nyra-logo.jpg",
        datePublished: post.date,
        dateModified: post.date,
        author: {
            "@type": "Person",
            name: post.author.name,
        },
        publisher: {
            "@type": "Organization",
            name: "Radio Nyra",
            logo: {
                "@type": "ImageObject",
                url: "https://www.radionyra.com/images/radio-nyra-logo.jpg",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.radionyra.com/blog/${post.slug}`,
        },
    } : null;

    return (
        <>
            {articleSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                />
            )}
            <BlogPostClientView slug={slug} />
        </>
    );
}
