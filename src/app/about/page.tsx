import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { About as AboutSection } from "@/components/sections/about";

export const metadata: Metadata = {
    title: "About Eedara Sai Deep | Full-Stack Developer & Backend Engineer",
    description: "Learn about Eedara Sai Deep, a final-year B.Tech CSE (Data Science) student at NIIT University specializing in Java 17, Spring Boot, Python, React, and Machine Learning.",
    keywords: [
        "About Eedara Sai Deep",
        "Eedara Sai Deep Biography",
        "NIIT University Neemrana",
        "Data Science Engineer",
        "Spring Boot Developer",
        "Full Stack Developer India"
    ],
    openGraph: {
        title: "About Eedara Sai Deep | Full-Stack Developer & Backend Engineer",
        description: "Background, education, and technical expertise of Eedara Sai Deep, Software Engineer & Data Science student at NIIT University.",
        url: "https://saideepeedara.dev/about",
        type: "profile",
    },
    alternates: {
        canonical: "https://saideepeedara.dev/about",
    },
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Eedara Sai Deep",
                            "jobTitle": "Full-Stack Developer & Backend Engineer",
                            "description": "B.Tech Computer Science (Data Science) student at NIIT University with hands-on experience in Java, Spring Boot, Python, React, and Machine Learning",
                            "url": "https://saideepeedara.dev",
                            "alumniOf": {
                                "@type": "EducationalOrganization",
                                "name": "NIIT University, Neemrana"
                            }
                        }
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <AboutSection />
            </main>
            <Footer />
        </>
    );
}
