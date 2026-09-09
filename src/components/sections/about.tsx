"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SkillCloud } from "@/components/skill-cloud";
import { GraduationCap, Code2, Server, Award } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 px-6 bg-surface/30">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 font-outfit text-4xl font-bold md:text-5xl">
                        About Me
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted">
                        Passionate about building production-ready software systems, high-concurrency backends, and interpretable ML solutions.
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
                    {/* Bio & Photo Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        {/* Profile Image Placeholder with Glow */}
                        <div className="relative w-48 h-48 mx-auto lg:mx-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl rotate-6 opacity-50 blur-lg" />
                            <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-accent-primary/20 bg-surface">
                                <Image
                                    src="/profile.jpg"
                                    alt="Eedara Sai Deep - Full-Stack Developer & Backend Engineer"
                                    width={192}
                                    height={192}
                                    priority
                                    quality={85}
                                    className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="prose prose-invert">
                            <p className="text-lg leading-relaxed text-muted">
                                <span className="text-accent-primary font-bold">Eedara Sai Deep</span> is a final-year{" "}
                                <span className="text-foreground font-semibold">B.Tech Computer Science & Engineering (Data Science)</span> student at{" "}
                                <span className="text-accent-primary font-bold">NIIT University, Neemrana</span> (Jul 2023 – Aug 2027 Expected).
                            </p>
                            <p className="text-lg leading-relaxed text-muted mt-4">
                                He specializes in engineering <span className="text-foreground">scalable, event-driven backend systems</span> with{" "}
                                <span className="text-accent-primary font-bold">Java 17, Spring Boot, Redis Streams, and PostgreSQL</span>, containerized with{" "}
                                <span className="text-foreground font-semibold">Docker</span> and automated via <span className="text-foreground">CI/CD pipelines</span>.
                            </p>
                            <p className="text-lg leading-relaxed text-muted mt-4">
                                Deep also designs end-to-end <span className="text-foreground">MERN stack applications</span> and conducts research in{" "}
                                <span className="text-accent-primary font-bold">Interpretable & Explainable AI</span>, creating hybrid ensemble models (achieving 99.55% accuracy) with transparent SHAP & LIME explanations.
                            </p>
                        </div>

                        {/* Quick Stats / Highlights */}
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="rounded-xl border border-border bg-surface/50 p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-accent-primary mb-1">
                                    <GraduationCap className="h-5 w-5" />
                                    <span className="font-semibold text-sm">Education</span>
                                </div>
                                <p className="text-sm font-medium text-foreground">NIIT University</p>
                                <p className="text-xs text-muted">B.Tech CSE (Data Science)</p>
                            </div>
                            <div className="rounded-xl border border-border bg-surface/50 p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-accent-secondary mb-1">
                                    <Server className="h-5 w-5" />
                                    <span className="font-semibold text-sm">Core Focus</span>
                                </div>
                                <p className="text-sm font-medium text-foreground">Distributed Systems</p>
                                <p className="text-xs text-muted">Java • Spring • Redis • ML</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Visualization Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative glow behind the cloud */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[300px] bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-primary/20 blur-[100px] opacity-50 -z-10" />
                        <SkillCloud />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
