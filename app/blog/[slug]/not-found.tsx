export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-9xl font-black text-primary mb-4">404</h1>
                <h2 className="text-4xl font-bold uppercase tracking-tighter mb-6">Post Not Found</h2>
                <p className="text-muted-foreground mb-8">
                    The blog post you're looking for doesn't exist or has been removed.
                </p>
                <div className="flex gap-4 justify-center">
                    <a
                        href="/blog"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white transition-all"
                    >
                        View All Posts
                    </a>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-widest border-2 border-foreground hover:border-primary hover:text-primary transition-all"
                    >
                        Go Home
                    </a>
                </div>
            </div>
        </div>
    );
}
