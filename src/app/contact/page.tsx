import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Contact as ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
    title: "Contact Eedara Sai Deep | Software Engineer & Backend Developer",
    description: "Get in touch with Eedara Sai Deep for software engineering opportunities, Node.js / Python backend projects, modern web applications, or data analytics collaborations.",
    keywords: [
        "Contact Eedara Sai Deep",
        "Hire Eedara Sai Deep",
        "Sai Deep Email",
        "Backend Developer Contact",
        "NIIT University Neemrana"
    ],
    openGraph: {
        title: "Contact Eedara Sai Deep | Full-Stack & Backend Engineer",
        description: "Reach out to Eedara Sai Deep via email or message form.",
        url: "https://saideepeedara.dev/contact",
        type: "website",
    },
    alternates: {
        canonical: "https://saideepeedara.dev/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact Eedara Sai Deep",
                        "description": "Contact page for Eedara Sai Deep - Software Engineer",
                        "url": "https://saideepeedara.dev/contact",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Eedara Sai Deep",
                            "email": "saideepeedara27@gmail.com",
                            "telephone": "+917893359490",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Neemrana",
                                "addressRegion": "Rajasthan",
                                "addressCountry": "India"
                            }
                        }
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
