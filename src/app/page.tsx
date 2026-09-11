import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Projects as ProjectsSection } from "@/components/sections/projects";
import { FAQSchema } from "@/components/faq-schema";
import Link from "next/link";
import { Code, Zap, Users, BookOpen, Mail, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "About Me",
    description: "Final-year B.Tech CSE (Data Science) student at NIIT University passionate about high-concurrency backends & ML.",
    href: "/about",
  },
  {
    icon: Zap,
    title: "Projects",
    description: "Explore Explainable AI (99.55% Acc), Kisan Connect MERN marketplace, and AQI Trends analytics.",
    href: "/projects",
  },
  {
    icon: Users,
    title: "Education & Experience",
    description: "Academic journey at NIIT University and professional engineering simulations at Deloitte Australia and JPMorgan Chase.",
    href: "/experience",
  },
  {
    icon: BookOpen,
    title: "Technical Skills",
    description: "Proficiency in Java 17, Spring Boot, Python, React.js, Redis Streams, PostgreSQL, Docker Compose, and Scikit-learn.",
    href: "/skills",
  },
  {
    icon: Mail,
    title: "Get In Touch",
    description: "Discuss software engineering roles, full-stack opportunities, or backend collaborations directly with Sai Deep.",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <>
      <FAQSchema />
      <Navbar />
      <main className="min-h-screen">
        <Hero />

        {/* Featured Projects Preview Directly On Home */}
        <ProjectsSection />

        {/* Quick Bento Exploration Section */}
        <section className="py-24 px-6 bg-surface/30 border-t border-border/40">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-outfit text-3xl font-bold md:text-4xl">
                Explore My Portfolio
              </h2>
              <p className="text-muted">
                Discover my technical expertise, academic background, and architectural solutions
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {highlights.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm transition-all hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10"
                >
                  <item.icon className="mb-4 h-8 w-8 text-accent-primary transition-transform group-hover:scale-110" />
                  <h3 className="mb-2 font-outfit text-xl font-bold group-hover:text-accent-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent-primary">
                    <span>Explore Section</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-accent-primary/10 via-accent-secondary/5 to-accent-primary/10 p-12 text-center backdrop-blur-sm">
              <h2 className="mb-4 font-outfit text-3xl font-bold">
                Let's Build Something Impactful Together
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted">
                Looking for a dedicated Software Engineer skilled in Java, Spring Boot, Python, React, and Machine Learning? Let's connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-primary px-8 py-3.5 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/50"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/50 px-8 py-3.5 font-medium backdrop-blur-sm transition-all hover:border-accent-primary hover:bg-accent-primary/10"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
