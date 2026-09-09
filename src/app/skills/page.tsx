"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SkillCloud } from "@/components/skill-cloud";
import { motion } from "framer-motion";
import { Code2, Layers, Database, Cloud, Terminal, Cpu } from "lucide-react";

const skillCategories = [
    {
        category: "Programming Languages",
        icon: Code2,
        skills: [
            { name: "Java (Java 17)", level: "Advanced" },
            { name: "Python", level: "Advanced" },
            { name: "JavaScript", level: "Advanced" },
            { name: "SQL", level: "Advanced" },
            { name: "HTML & CSS", level: "Proficient" },
        ]
    },
    {
        category: "Frameworks & Web",
        icon: Layers,
        skills: [
            { name: "Spring Boot", level: "Advanced" },
            { name: "React.js", level: "Advanced" },
            { name: "Node.js", level: "Advanced" },
            { name: "Express.js", level: "Advanced" },
            { name: "RESTful APIs", level: "Expert" },
        ]
    },
    {
        category: "Machine Learning & AI",
        icon: Cpu,
        skills: [
            { name: "Scikit-learn", level: "Advanced" },
            { name: "XGBoost", level: "Advanced" },
            { name: "SHAP & LIME (Explainable AI)", level: "Advanced" },
            { name: "Time Series (ARIMA, Holt-Winters)", level: "Intermediate" },
            { name: "Chart.js Visualizations", level: "Advanced" },
        ]
    },
    {
        category: "Databases & Streaming",
        icon: Database,
        skills: [
            { name: "PostgreSQL", level: "Advanced" },
            { name: "MongoDB / Atlas", level: "Advanced" },
            { name: "Redis Caching", level: "Advanced" },
            { name: "Redis Streams", level: "Advanced" },
            { name: "Flyway Database Migrations", level: "Intermediate" },
        ]
    },
    {
        category: "Cloud, DevOps & Tools",
        icon: Cloud,
        skills: [
            { name: "Docker & Docker Compose", level: "Advanced" },
            { name: "AWS EC2", level: "Intermediate" },
            { name: "Jenkins CI/CD", level: "Intermediate" },
            { name: "GitHub Actions", level: "Advanced" },
            { name: "Linux & Git / Postman", level: "Advanced" },
        ]
    }
];

export default function SkillsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Technical Skills of Eedara Sai Deep",
                        "description": "Comprehensive list of technical skills and frameworks mastered by Eedara Sai Deep",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Java & Spring Boot" },
                            { "@type": "ListItem", "position": 2, "name": "Python & Machine Learning" },
                            { "@type": "ListItem", "position": 3, "name": "React.js & Node.js" },
                            { "@type": "ListItem", "position": 4, "name": "PostgreSQL & MongoDB" },
                            { "@type": "ListItem", "position": 5, "name": "Redis & Redis Streams" },
                            { "@type": "ListItem", "position": 6, "name": "Docker & AWS EC2" },
                            { "@type": "ListItem", "position": 7, "name": "CI/CD (Jenkins, GitHub Actions)" },
                        ]
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <section className="py-24 px-6">
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-16 text-center"
                        >
                            <h1 className="mb-4 font-outfit text-4xl font-bold md:text-5xl">
                                Technical Skills & Stack
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-muted">
                                Hands-on expertise across distributed backends, full-stack web applications, machine learning architectures, and cloud DevOps.
                            </p>
                        </motion.div>

                        {/* Interactive Skill Sphere */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-24 relative"
                        >
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[300px] bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-primary/20 blur-[100px] opacity-50 -z-10" />
                            <SkillCloud />
                        </motion.div>

                        {/* Categorized Skills Grid */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {skillCategories.map((category, categoryIndex) => {
                                const Icon = category.icon;
                                return (
                                    <motion.div
                                        key={category.category}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
                                        className="rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-sm hover:border-accent-primary/40 transition-colors"
                                    >
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <h2 className="font-outfit text-xl font-bold text-foreground">
                                                {category.category}
                                            </h2>
                                        </div>
                                        <div className="space-y-3">
                                            {category.skills.map((skill) => (
                                                <div key={skill.name} className="flex items-center justify-between border-b border-border/40 pb-2 last:border-0 last:pb-0">
                                                    <span className="font-medium text-sm text-foreground/90">{skill.name}</span>
                                                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary font-medium">{skill.level}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
