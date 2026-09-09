import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Projects as ProjectsSection } from "@/components/sections/projects";

export const metadata: Metadata = {
    title: "Projects | Eedara Sai Deep - Backend, Full-Stack & Machine Learning",
    description: "Explore engineering projects built by Eedara Sai Deep: Explainable AI Soil Prediction, Kisan Connect MERN marketplace, and AQI Trends Analytics.",
    keywords: [
        "Eedara Sai Deep Projects",
        "Explainable AI",
        "Crop Recommendation SHAP LIME",
        "Kisan Connect MERN",
        "AQI Trends ARIMA",
        "Full Stack Portfolio"
    ],
    openGraph: {
        title: "Projects by Eedara Sai Deep | Distributed Systems & Full Stack",
        description: "Explore backend architectures, ML models, and full-stack web applications built by Eedara Sai Deep.",
        url: "https://saideepeedara.dev/projects",
        type: "website",
    },
    alternates: {
        canonical: "https://saideepeedara.dev/projects",
    },
};

export default function ProjectsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Projects by Eedara Sai Deep",
                        "description": "Portfolio of software engineering projects including Distributed Systems, MERN web applications, and Explainable Machine Learning models",
                        "url": "https://saideepeedara.dev/projects",
                        "author": {
                            "@type": "Person",
                            "name": "Eedara Sai Deep"
                        }
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <ProjectsSection />
            </main>
            <Footer />
        </>
    );
}
