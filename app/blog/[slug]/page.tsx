import BlogPostClientView from './blog-post-client';
import { BLOG_POSTS } from '@/lib/blog-data';

// Generate static paths for all blog posts
export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return <BlogPostClientView slug={params.slug} />;
}
