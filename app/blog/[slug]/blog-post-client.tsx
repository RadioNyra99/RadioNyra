"use client"

import { useState, useEffect } from 'react';
import { BLOG_POSTS, BlogPost } from '@/lib/blog-data';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { notFound } from 'next/navigation';
import { AdBanner } from '@/components/ad-banner';

export default function BlogPostClientView({ slug }: { slug: string }) {
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Find in static posts
        let found = BLOG_POSTS.find(p => p.slug === slug);
        
        if (!found) {
            // Find in localStorage custom posts
            try {
                const saved = localStorage.getItem('custom_blog_posts');
                if (saved) {
                    const customPosts = JSON.parse(saved) as BlogPost[];
                    found = customPosts.find(p => p.slug === slug);
                }
            } catch (e) {
                console.error("Error reading custom post from localStorage:", e);
            }
        }
        
        if (found) {
            setPost(found);
        }
        setLoading(false);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center font-sans">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Loading Post...</p>
                </div>
            </div>
        );
    }

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <article className="max-w-4xl mx-auto">
                        {/* Featured Image */}
                        {post.featuredImage?.url && (
                            <div className="relative aspect-video overflow-hidden mb-12 rounded-lg bg-black">
                                <Image
                                    src={post.featuredImage.url}
                                    alt={post.featuredImage.alt || post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        {/* Categories */}
                        {post.categories && post.categories.length > 0 && (
                            <div className="flex gap-3 mb-6">
                                {post.categories.map((category) => (
                                    <span
                                        key={category}
                                        className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-muted-foreground mb-12 pb-6 border-b border-border">
                            {post.author?.name && (
                                <span className="font-medium">By {post.author.name}</span>
                            )}
                            <span>•</span>
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </time>
                        </div>

                        {/* Top Ad Unit */}
                        <div className="mb-10">
                            <AdBanner type="horizontal" />
                        </div>

                        {/* Content */}
                        <div
                            className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                  prose-p:text-foreground prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-img:rounded-lg prose-img:shadow-lg
                  prose-blockquote:border-l-4 prose-blockquote:border-primary
                  prose-blockquote:italic prose-blockquote:text-muted-foreground"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Bottom Ad Unit */}
                        <div className="mt-12">
                            <AdBanner type="horizontal" />
                        </div>

                        {/* Back Link */}
                        <div className="mt-16 pt-8 border-t border-border">
                            <a
                                href="/blog"
                                className="inline-flex items-center gap-2 text-primary hover:underline font-bold uppercase tracking-widest text-sm"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                                Back to All Posts
                            </a>
                        </div>
                    </article>
                </div>
            </div>
            <Footer />
        </div>
    );
}
