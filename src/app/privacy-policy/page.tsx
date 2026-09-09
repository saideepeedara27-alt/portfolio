import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "Privacy Policy | Eedara Sai Deep Portfolio",
    description: "Privacy policy for saideepeedara.dev - How we handle your data and protect your privacy.",
    robots: {
        index: false,
        follow: true,
    },
    alternates: {
        canonical: "https://saideepeedara.dev/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                <section className="py-24 px-6">
                    <div className="mx-auto max-w-4xl">
                        <h1 className="mb-8 font-outfit text-4xl font-bold md:text-5xl">
                            Privacy Policy
                        </h1>
                        <p className="mb-8 text-sm text-muted">
                            Last Updated: February 16, 2026
                        </p>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Introduction</h2>
                                <p className="text-muted leading-relaxed">
                                    Welcome to saideepeedara.dev ("we," "our," or "us"). This Privacy Policy explains
                                    how we collect, use, disclose, and safeguard your information when you
                                    visit our website. Please read this privacy policy carefully.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Information We Collect</h2>
                                <h3 className="mb-3 font-outfit text-xl font-semibold text-accent-primary">
                                    Personal Information
                                </h3>
                                <p className="text-muted leading-relaxed mb-4">
                                    When you contact us through our contact form, we collect:
                                </p>
                                <ul className="list-disc list-inside text-muted space-y-2 mb-4">
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Message content</li>
                                </ul>

                                <h3 className="mb-3 font-outfit text-xl font-semibold text-accent-primary">
                                    Automatically Collected Information
                                </h3>
                                <p className="text-muted leading-relaxed mb-4">
                                    We may automatically collect certain information when you visit our website:
                                </p>
                                <ul className="list-disc list-inside text-muted space-y-2">
                                    <li>IP address</li>
                                    <li>Browser type and version</li>
                                    <li>Operating system</li>
                                    <li>Referring URLs</li>
                                    <li>Pages viewed and time spent on pages</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">How We Use Your Information</h2>
                                <p className="text-muted leading-relaxed mb-4">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc list-inside text-muted space-y-2">
                                    <li>Respond to your inquiries and contact requests</li>
                                    <li>Improve our website and user experience</li>
                                    <li>Analyze website usage and trends</li>
                                    <li>Prevent fraudulent activity and improve security</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Cookies and Tracking</h2>
                                <p className="text-muted leading-relaxed">
                                    We may use cookies and similar tracking technologies to track activity on
                                    our website and hold certain information. You can instruct your browser to
                                    refuse all cookies or to indicate when a cookie is being sent.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Third-Party Services</h2>
                                <p className="text-muted leading-relaxed mb-4">
                                    We may use third-party services such as:
                                </p>
                                <ul className="list-disc list-inside text-muted space-y-2">
                                    <li>Google Analytics for website analytics</li>
                                    <li>Vercel for hosting services</li>
                                    <li>Email service providers for contact form submissions</li>
                                </ul>
                                <p className="text-muted leading-relaxed mt-4">
                                    These third parties have their own privacy policies addressing how they use
                                    such information.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Data Security</h2>
                                <p className="text-muted leading-relaxed">
                                    We use administrative, technical, and physical security measures to protect
                                    your personal information. However, no method of transmission over the
                                    Internet or method of electronic storage is 100% secure.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Your Rights</h2>
                                <p className="text-muted leading-relaxed mb-4">
                                    You have the right to:
                                </p>
                                <ul className="list-disc list-inside text-muted space-y-2">
                                    <li>Access your personal data</li>
                                    <li>Request correction of your personal data</li>
                                    <li>Request deletion of your personal data</li>
                                    <li>Object to processing of your personal data</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Contact Information</h2>
                                <p className="text-muted leading-relaxed">
                                    If you have questions about this Privacy Policy, please contact us at:
                                </p>
                                <p className="text-accent-primary mt-2">
                                    Email: saideepeedara27@gmail.com
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="mb-4 font-outfit text-2xl font-bold">Changes to This Policy</h2>
                                <p className="text-muted leading-relaxed">
                                    We may update our Privacy Policy from time to time. We will notify you of
                                    any changes by posting the new Privacy Policy on this page and updating the
                                    "Last Updated" date.
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
