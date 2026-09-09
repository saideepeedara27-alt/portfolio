"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { GlitchText } from "@/components/glitch-text";
import Link from "next/link";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16"
        >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-accent-primary/20 blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-accent-secondary/20 blur-[128px] animation-delay-2000" />
            </div>

            <div className="mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-primary backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Software Engineer • Data Science @ NIIT University</span>
                    </motion.div>

                    <motion.h1
                        className="mb-6 font-outfit text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Eedara Sai Deep
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                            <GlitchText text="Full-Stack & Backend Engineer" />
                        </span>
                    </motion.h1>

                    <motion.p
                        className="mb-8 text-base sm:text-lg text-muted md:text-xl max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Specializing in scalable distributed backend systems (Java, Spring Boot, Redis Streams), modern full-stack web platforms (React, Node.js, Express), and interpretable Machine Learning (Scikit-learn, XGBoost, SHAP, LIME).
                    </motion.p>

                    <motion.div
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            href="/projects"
                            className="group relative overflow-hidden rounded-full bg-accent-primary px-8 py-3.5 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/50 flex items-center gap-2"
                        >
                            <span className="relative z-10">View Featured Projects</span>
                            <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-full border border-border bg-surface/50 px-8 py-3.5 font-medium backdrop-blur-sm transition-all hover:border-accent-primary hover:bg-accent-primary/10"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="h-6 w-6 text-muted" />
                </motion.div>
            </div>
        </section>
    );
}
