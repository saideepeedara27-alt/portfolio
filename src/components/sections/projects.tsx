"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Image from "next/image";

export interface ProjectItem {
    title: string;
    description: string;
    tags: string[];
    image: string;
    videoUrl?: string;
    github: string;
    demo?: string;
    badge?: string;
}

export const projects: ProjectItem[] = [
    {
        title: "Explainable AI for Soil Property Prediction",
        badge: "99.55% Accuracy • Machine Learning",
        description:
            "Interpretable hybrid ensemble crop recommendation system trained on 2,200 soil samples, 7 features, and 22 crop classes. Proposed HYB-RF-XGB-ET achieved 99.55% Accuracy, 99.57% Precision, and 99.55% F1-score. Integrated SHAP and LIME to generate transparent feature explanations and actionable recommendations.",
        tags: ["Python", "Scikit-learn", "XGBoost", "SHAP", "LIME", "Ensemble ML", "Data Science"],
        image: "/projects/explainable-ai.png",
        github: "https://github.com/saideepeedara27-alt",
        demo: "https://github.com/saideepeedara27-alt",
    },
    {
        title: "Kisan Connect – Farm-to-Customer Marketplace",
        badge: "Full-Stack MERN • Production-Ready",
        description:
            "Production-ready MERN marketplace supporting 4 user roles with dedicated interactive dashboards. Implemented JWT, Google OAuth, MongoDB Atlas, and Docker for secure deployment. Containerized and deployed on AWS EC2 with automated CI/CD via GitHub Actions.",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Docker", "AWS EC2", "GitHub Actions"],
        image: "/projects/kisan-connect.png",
        github: "https://github.com/saideepeedara27-alt",
        demo: "https://github.com/saideepeedara27-alt",
    },
    {
        title: "AQI Trends – Air Quality Trend Analysis",
        badge: "Real-Time Analytics • 21+ Cities",
        description:
            "Full-stack air quality platform integrating WAQI and OpenAQ APIs to monitor 21+ Indian and global cities in real time. Implemented forecasting using ARIMA, Holt-Winters Exponential Smoothing, and OLS Regression with interactive Chart.js dashboards. Automated containerized deployment using Docker, Jenkins CI/CD, and AWS EC2.",
        tags: ["Python", "React.js", "Chart.js", "ARIMA Time Series", "Docker", "Jenkins", "AWS EC2"],
        image: "/projects/aqi-trends.png",
        github: "https://github.com/saideepeedara27-alt",
        demo: "https://github.com/saideepeedara27-alt",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-surface/30">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-3.5 py-1 text-xs font-semibold text-accent-primary">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Featured Work</span>
                    </div>
                    <h2 className="mb-4 font-outfit text-4xl font-bold md:text-5xl">
                        Featured Projects
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted">
                        Production-grade backend architectures, full-stack applications, and machine learning models from my portfolio.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (isHovered) {
                videoRef.current.play().catch(() => { });
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [isHovered]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface backdrop-blur-sm transition-all duration-300 hover:border-accent-primary/50 hover:shadow-xl hover:shadow-accent-primary/10"
        >
            <div>
                {/* Image / Video Container */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
                    {/* Fallback Initial */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-outfit text-7xl font-bold text-accent-primary/20">
                            {project.title.charAt(0)}
                        </span>
                    </div>

                    {/* Image */}
                    <Image
                        src={project.image}
                        alt={`${project.title} - ${project.description.slice(0, 100)}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                        quality={85}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Badge Overlay */}
                    {project.badge && (
                        <div className="absolute top-3 left-3 z-20 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                            {project.badge}
                        </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6">
                    <h3 className="mb-2 font-outfit text-xl font-bold transition-colors group-hover:text-accent-primary">
                        {project.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="mb-6 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-accent-primary/20 bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Links */}
            <div className="p-6 pt-0 border-t border-border/50 mt-auto flex items-center justify-between">
                <div className="flex gap-4 pt-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-primary"
                    >
                        <Github className="h-4 w-4" />
                        Repository
                    </a>
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-primary"
                        >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Hover Background Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.div>
    );
}
