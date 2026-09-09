import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "Terms of Service | Eedara Sai Deep Portfolio",
    description: "Terms of service for saideepeedara.dev website.",
    robots: {
        index: false,
        follow: true,
    },
    alternates: {
        canonical: "https://saideepeedara.dev/terms-of-service",
    },
};

export default function TermsOfServicePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                <section className="py-24 px-6">
                    <div className="mx-auto max-w-4xl">
                        <h1 className="mb-8 font-outfit text-4xl font-bold md:text-5xl">
                            Terms of Service
                        </h1>
                        <p className="mb-8 text-sm text-muted">
                            Last Updated: February 2026
                        </p>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Agreement to Terms</h2>
                                <p className="text-muted leading-relaxed">
                                    By accessing and using saideepeedara.dev ("Website"), you accept and agree to be
                                    bound by the terms and provision of this agreement. If you do not agree to
                                    these Terms of Service, please do not use this Website.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Use License</h2>
                                <p className="text-muted leading-relaxed mb-4">
                                    Permission is granted to temporarily access the materials on saideepeedara.dev for
                                    personal, non-commercial viewing only. This is the grant of a license, not
                                    a transfer of title, and under this license you may not:
                                </p>
                                <ul className="list-disc list-inside text-muted space-y-2">
                                    <li>Modify or copy the materials</li>
                                    <li>Use the materials for any commercial purpose</li>
                                    <li>Attempt to decompile or reverse engineer any software on the Website</li>
                                    <li>Remove any copyright or other proprietary notations from the materials</li>
                                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Intellectual Property</h2>
                                <p className="text-muted leading-relaxed">
                                    The content, organization, graphics, design, compilation, and other matters
                                    related to the Website are protected under applicable copyrights, trademarks,
                                    and other proprietary rights.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Disclaimer</h2>
                                <p className="text-muted leading-relaxed">
                                    The materials on saideepeedara.dev are provided on an 'as is' basis. We make no
                                    warranties, expressed or implied, and hereby disclaim and negate all other
                                    warranties including, without limitation, implied warranties or conditions of
                                    merchantability, fitness for a particular purpose, or non-infringement.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Limitations</h2>
                                <p className="text-muted leading-relaxed">
                                    In no event shall Eedara Sai Deep or its affiliates be liable for any damages
                                    arising out of the use or inability to use the materials on saideepeedara.dev.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Contact Information</h2>
                                <p className="text-muted leading-relaxed">
                                    If you have any questions about these Terms of Service, please contact:
                                </p>
                                <p className="text-accent-primary mt-2">
                                    Email: saideepeedara27@gmail.com
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
