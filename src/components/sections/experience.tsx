"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";

const educationItems = [
    {
        period: "Jul 2023 – Aug 2027 (Expected)",
        title: "B.Tech. Computer Science & Engineering (Data Science)",
        organization: "NIIT University, Neemrana",
        score: "CGPA: 6.81 / 10",
        description:
            "Rigorous focus on Data Science, scalable backend architectures, distributed computing, database systems, and modern software engineering paradigms.",
    },
    {
        period: "2023",
        title: "Class XII (Intermediate)",
        organization: "Sri Chaitanya Junior College",
        score: "Score: 961 / 1000 (96.1%)",
        description:
            "Core subjects in Mathematics, Physics, and Chemistry with high academic distinction.",
    },
    {
        period: "2021",
        title: "Class X (Secondary School)",
        organization: "Sri Chaitanya School",
        score: "CGPA: 10.0 / 10.0 (Perfect Score)",
        description:
            "Completed secondary schooling with a perfect 10.0 CGPA, establishing a solid mathematical and analytical foundation.",
    },
];

const certifications = [
    {
        title: "Technology Job Simulation",
        issuer: "Deloitte Australia",
        platform: "Forage",
        tags: ["Cloud Architecture", "Technology Advisory", "Software Systems"],
        description:
            "Completed practical tasks in technology architecture, cloud development strategy, and enterprise software problem-solving.",
    },
    {
        title: "Software Engineering Virtual Experience",
        issuer: "JPMorgan Chase & Co.",
        platform: "Forage",
        tags: ["Software Engineering", "Systems Architecture", "Microservices"],
        description:
            "Completed real-world software engineering simulation focusing on financial microservice communication, transaction security, and enterprise patterns.",
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="mx-auto max-w-4xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-3.5 py-1 text-xs font-semibold text-accent-primary">
                        <GraduationCap className="h-3.5 w-3.5" />
                        <span>Academic Background</span>
                    </div>
                    <h2 className="mb-4 font-outfit text-4xl font-bold md:text-5xl">
                        Education
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted">
                        My formal academic journey at NIIT University and Sri Chaitanya institutions.
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <div className="relative mb-24">
                    {/* Timeline Vertical Line */}
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary md:left-1/2" />

                    <div className="space-y-12">
                        {educationItems.map((item, index) => (
                            <motion.div
                                key={item.title + item.period}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Timeline Node Icon */}
                                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                                    <div className="h-4 w-4 rounded-full border-4 border-background bg-accent-primary shadow-lg shadow-accent-primary/50" />
                                </div>

                                {/* Card Content */}
                                <div
                                    className={`ml-8 flex-1 md:ml-0 ${
                                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                                    }`}
                                >
                                    <div className="rounded-2xl border border-border bg-surface p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10">
                                        <div
                                            className={`flex items-center gap-2 mb-2 ${
                                                index % 2 === 0 ? "md:justify-end" : "justify-start"
                                            }`}
                                        >
                                            <span className="inline-block rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-semibold text-accent-primary">
                                                {item.period}
                                            </span>
                                            <span className="inline-block rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-accent-secondary">
                                                {item.score}
                                            </span>
                                        </div>

                                        <h3 className="mb-1 font-outfit text-xl font-bold text-foreground">
                                            {item.title}
                                        </h3>
                                        <p className="mb-3 text-sm font-semibold text-accent-primary">
                                            {item.organization}
                                        </p>
                                        <p className="text-sm text-muted leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for alternating desktop layout */}
                                <div className="hidden flex-1 md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Dedicated Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="pt-8 border-t border-border/50"
                >
                    <div className="mb-12 text-center">
                        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-3.5 py-1 text-xs font-semibold text-accent-secondary">
                            <Award className="h-3.5 w-3.5" />
                            <span>Professional Credentials</span>
                        </div>
                        <h2 className="mb-3 font-outfit text-3xl font-bold md:text-4xl">
                            Certifications & Simulations
                        </h2>
                        <p className="mx-auto max-w-xl text-muted text-sm md:text-base">
                            Industry software engineering simulations and technology certifications.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-2.5 rounded-xl bg-accent-primary/10 text-accent-primary">
                                        <Award className="h-6 w-6" />
                                    </div>
                                    <span className="text-xs font-semibold text-muted bg-surface/80 border border-border px-2.5 py-1 rounded-full">
                                        {cert.platform}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold font-outfit text-foreground mb-1 group-hover:text-accent-primary transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-sm font-semibold text-accent-secondary mb-3">
                                    {cert.issuer}
                                </p>
                                <p className="text-sm text-muted leading-relaxed mb-4">
                                    {cert.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                                    {cert.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs rounded-full bg-accent-primary/10 text-accent-primary px-2.5 py-0.5 font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
