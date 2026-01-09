import { getPosts } from '@/lib/wordpress';
import Image from 'next/image';
import Link from 'next/link';

// Rebuild this page every 60 seconds when there's a request
export const revalidate = 60;

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-primary mb-12">
                        Latest from Radio Nyra
                    </h1>

                    {posts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No posts found. Create your first post in WordPress!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group bg-card border border-border/50 hover:shadow-2xl transition-all duration-300"
                                >
                                    {post.featuredImage?.node?.sourceUrl && (
                                        <div className="relative aspect-video overflow-hidden bg-black">
                                            <Image
                                                src={post.featuredImage.node.sourceUrl}
                                                alt={post.featuredImage.node.altText || post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6">
                                        {post.categories?.nodes && post.categories.nodes.length > 0 && (
                                            <div className="flex gap-2 mb-3">
                                                {post.categories.nodes.slice(0, 2).map((category) => (
                                                    <span
                                                        key={category.slug}
                                                        className="text-xs font-bold uppercase tracking-widest text-primary"
                                                    >
                                                        {category.name}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>

                                        {post.excerpt && (
                                            <div
                                                className="text-muted-foreground line-clamp-3 mb-4"
                                                dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                            />
                                        )}

                                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                                            <time dateTime={post.date}>
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </time>
                                            {post.author?.node?.name && (
                                                <span>By {post.author.node.name}</span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
