import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Eedara Sai Deep Blog`,
        description: post.excerpt,
        keywords: post.tags,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://saideepeedara.dev/blog/${slug}`,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
        alternates: {
            canonical: `https://saideepeedara.dev/blog/${slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "description": post.excerpt,
                        "datePublished": post.date,
                        "author": {
                            "@type": "Person",
                            "name": post.author,
                        },
                        "publisher": {
                            "@type": "Person",
                            "name": "Eedara Sai Deep",
                        },
                        "keywords": post.tags.join(", "),
                        "url": `https://saideepeedara.dev/blog/${post.slug}`,
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <article className="py-24 px-6">
                    <div className="mx-auto max-w-4xl">
                        {/* Back Link */}
                        <Link
                            href="/blog"
                            className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-accent-primary transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Link>

                        {/* Header */}
                        <header className="mb-12">
                            <div className="mb-4 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="mb-6 font-outfit text-4xl font-bold md:text-5xl">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-6 text-sm text-muted">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </header>

                        {/* Content */}
                        <div
                            className="prose prose-invert prose-lg max-w-none
                prose-headings:font-outfit prose-headings:font-bold
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                prose-p:text-muted prose-p:leading-relaxed
                prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline
                prose-code:text-accent-secondary prose-code:bg-surface/50 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-surface prose-pre:border prose-pre:border-border
                prose-strong:text-foreground
                prose-ul:text-muted prose-ol:text-muted"
                            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                        />

                        {/* Author */}
                        <div className="mt-16 rounded-2xl border border-border bg-surface/30 p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/10 text-2xl font-bold text-accent-primary">
                                    NK
                                </div>
                                <div>
                                    <h3 className="mb-1 font-outfit text-xl font-bold">
                                        {post.author}
                                    </h3>
                                    <p className="text-sm text-muted">
                                        Full Stack Python Developer specializing in Django, FastAPI, React, and Next.js
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
