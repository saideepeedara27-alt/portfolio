import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Experience as ExperienceSection } from "@/components/sections/experience";

export const metadata: Metadata = {
    title: "Education & Experience | Eedara Sai Deep",
    description: "Academic education at NIIT University, Neemrana (B.Tech CSE Data Science), intermediate distinction at Sri Chaitanya, and engineering simulations at Deloitte Australia and JPMorgan Chase.",
    keywords: [
        "Eedara Sai Deep Education",
        "NIIT University Neemrana",
        "Data Science Student",
        "Sri Chaitanya",
        "Deloitte Technology Simulation",
        "JPMorgan Chase Engineering Virtual Experience",
        "Software Engineering Journey"
    ],
    openGraph: {
        title: "Education & Experience | Eedara Sai Deep",
        description: "Academic journey and certifications of Eedara Sai Deep.",
        url: "https://saideepeedara.dev/experience",
        type: "website",
    },
    alternates: {
        canonical: "https://saideepeedara.dev/experience",
    },
};

export default function ExperiencePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Eedara Sai Deep",
                        "jobTitle": "Full-Stack Developer & Backend Engineer",
                        "alumniOf": {
                            "@type": "EducationalOrganization",
                            "name": "NIIT University, Neemrana"
                        },
                        "hasCredential": [
                            {
                                "@type": "EducationalOccupationalCredential",
                                "name": "Deloitte Australia Technology Job Simulation",
                                "recognizedBy": {
                                    "@type": "Organization",
                                    "name": "Forage"
                                }
                            },
                            {
                                "@type": "EducationalOccupationalCredential",
                                "name": "Software Engineering Virtual Experience",
                                "recognizedBy": {
                                    "@type": "Organization",
                                    "name": "JPMorgan Chase & Co."
                                }
                            }
                        ]
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <ExperienceSection />
            </main>
            <Footer />
        </>
    );
}
