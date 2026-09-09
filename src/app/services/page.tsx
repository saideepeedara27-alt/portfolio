"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Server, Code, Cpu, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Server,
        title: "Scalable Backend & Distributed Systems",
        description: "Designing high-concurrency, asynchronous backends with Java 17 and Spring Boot. Leveraging Redis Streams for event processing and PostgreSQL for relational integrity.",
        features: [
            "Event-driven architecture with Redis Streams",
            "Atomic inventory updates & caching layers",
            "RESTful API design with clean architecture",
            "Database migrations with Flyway",
            "PostgreSQL performance tuning"
        ]
    },
    {
        icon: Code,
        title: "Full-Stack Web Development",
        description: "Complete MERN and React-based applications from design to cloud deployment. Role-based interactive dashboards with robust authentication.",
        features: [
            "React.js single-page applications",
            "Node.js & Express REST microservices",
            "Multi-role user authentication (JWT & OAuth 2.0)",
            "MongoDB Atlas integration & schema modeling",
            "Modern responsive layouts & interactive UI"
        ]
    },
    {
        icon: Cpu,
        title: "Machine Learning & Explainable AI (XAI)",
        description: "Predictive modeling and transparent ML systems using Scikit-learn and XGBoost. Generating actionable feature explanations with SHAP and LIME.",
        features: [
            "Hybrid ensemble architectures (99%+ accuracy)",
            "Transparent decision explanations with SHAP & LIME",
            "Time-series forecasting (ARIMA, Holt-Winters)",
            "Data preprocessing, feature engineering & cross-validation",
            "Interactive analytics dashboards with Chart.js"
        ]
    },
    {
        icon: Cloud,
        title: "Cloud Deployment & DevOps Pipelines",
        description: "Automating deployment workflows and containerizing microservices for production stability on AWS.",
        features: [
            "Containerization with Docker & Docker Compose",
            "Cloud hosting & management on AWS EC2",
            "Automated CI/CD workflows via GitHub Actions",
            "Jenkins continuous integration setup",
            "Production health monitoring & logging"
        ]
    }
];

export default function ServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Software Engineering Services",
                        "provider": {
                            "@type": "Person",
                            "name": "Eedara Sai Deep",
                            "jobTitle": "Full-Stack Developer & Backend Engineer"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "India"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Technical Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Scalable Backend & Distributed Systems"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Full-Stack Web Development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Machine Learning & Explainable AI"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Cloud Deployment & DevOps Pipelines"
                                    }
                                }
                            ]
                        }
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
                                Engineering Capabilities & Services
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-muted">
                                End-to-end software development: from event-driven backend systems to production web applications and machine learning architectures.
                            </p>
                        </motion.div>

                        {/* Services Grid */}
                        <div className="grid gap-8 md:grid-cols-2 mb-16">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-2xl border border-border bg-surface/30 p-8 backdrop-blur-sm hover:border-accent-primary/50 transition-all group"
                                >
                                    <div className="mb-6 inline-flex rounded-xl bg-accent-primary/10 p-3 text-accent-primary">
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <h2 className="mb-4 font-outfit text-2xl font-bold group-hover:text-accent-primary transition-colors">
                                        {service.title}
                                    </h2>
                                    <p className="mb-6 text-muted leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start">
                                                <span className="mr-2 mt-0.5 text-accent-primary font-bold">✓</span>
                                                <span className="text-sm text-foreground/90">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="rounded-2xl border border-border bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 p-12 text-center backdrop-blur-sm"
                        >
                            <h2 className="mb-4 font-outfit text-3xl font-bold">
                                Have an Open Role or Project?
                            </h2>
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted">
                                Let's discuss how my expertise in Java, Spring Boot, Python, and modern web architectures can bring value to your engineering team.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-accent-primary px-8 py-3.5 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/50"
                            >
                                <span>Get in Touch</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
