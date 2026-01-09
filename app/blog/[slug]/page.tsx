import { getPostBySlug, getAllPostSlugs } from '@/lib/wordpress';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Rebuild this page every 60 seconds when there's a request
export const revalidate = 60;

// Generate static paths for all blog posts
export async function generateStaticParams() {
    try {
        const slugs = await getAllPostSlugs();
        if (slugs && slugs.length > 0) {
            return slugs.map((slug: string) => ({
                slug: slug,
            }));
        }
    } catch (error) {
        console.error('Error generating static params:', error);
    }

    // Return a fallback slug to prevent build failure
    return [{ slug: 'placeholder' }];
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4">
                <article className="max-w-4xl mx-auto">
                    {/* Featured Image */}
                    {post.featuredImage?.node?.sourceUrl && (
                        <div className="relative aspect-video overflow-hidden mb-12 rounded-lg">
                            <Image
                                src={post.featuredImage.node.sourceUrl}
                                alt={post.featuredImage.node.altText || post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Categories */}
                    {post.categories?.nodes && post.categories.nodes.length > 0 && (
                        <div className="flex gap-3 mb-6">
                            {post.categories.nodes.map((category: any) => (
                                <span
                                    key={category.slug}
                                    className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full"
                                >
                                    {category.name}
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
                        {post.author?.node?.name && (
                            <span className="font-medium">By {post.author.node.name}</span>
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
    );
}
