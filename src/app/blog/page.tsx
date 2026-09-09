"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Eedara Sai Deep's Tech & Engineering Blog",
                        "description": "Technical articles on Distributed Systems, Spring Boot, React, and Machine Learning",
                        "url": "https://saideepeedara.dev/blog",
                        "author": {
                            "@type": "Person",
                            "name": "Eedara Sai Deep"
                        }
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <section className="py-24 px-6">
                    <div className="mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-16 text-center"
                        >
                            <h1 className="mb-4 font-outfit text-4xl font-bold md:text-5xl">
                                Blog
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-muted">
                                Technical articles and insights on web development, Python frameworks,
                                modern frontend technologies, and best practices.
                            </p>
                        </motion.div>

                        {/* Blog Posts Grid */}
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {blogPosts.map((post, index) => (
                                <motion.article
                                    key={post.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link href={`/blog/${post.slug}`}>
                                        <div className="group h-full rounded-2xl border border-border bg-surface/30 p-6 backdrop-blur-sm transition-all hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10">
                                            {/* Tags */}
                                            <div className="mb-4 flex flex-wrap gap-2">
                                                {post.tags.slice(0, 2).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Title */}
                                            <h2 className="mb-3 font-outfit text-xl font-bold group-hover:text-accent-primary transition-colors">
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="mb-4 text-sm text-muted line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Meta */}
                                            <div className="flex items-center gap-4 text-xs text-muted">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>

                                            {/* Read More */}
                                            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent-primary">
                                                Read More
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
