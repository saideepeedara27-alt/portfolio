import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/saideepeedara27-alt", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/saideepeedara", label: "LinkedIn" },
    { icon: Mail, href: "mailto:saideepeedara27@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+917893359490", label: "Phone" },
];

export function Footer() {
    const currentYear = 2026;

    return (
        <footer className="border-t border-border bg-surface/50 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <h3 className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text font-outfit text-xl font-bold text-transparent">
                            Eedara Sai Deep
                        </h3>
                        <p className="mt-2 text-sm text-muted">
                            Full-Stack Developer & Backend Engineer. B.Tech Computer Science (Data Science) student at NIIT University. Building production-ready, scalable systems and ML solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-medium text-foreground">Pages</h4>
                        <ul className="space-y-2">
                            {[
                                { name: "About", href: "/about" },
                                { name: "Projects", href: "/projects" },
                                { name: "Education", href: "/experience" },
                                { name: "Skills", href: "/skills" },
                                { name: "Services", href: "/services" },
                                { name: "Blog", href: "/blog" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted transition-colors hover:text-accent-primary"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="mb-4 font-medium text-foreground">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-border bg-surface p-2 transition-all hover:border-accent-primary hover:bg-accent-primary/10"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5 text-muted hover:text-accent-primary" />
                                </a>
                            ))}
                        </div>
                        <div className="mt-4 text-xs text-muted space-y-1">
                            <p>saideepeedara27@gmail.com</p>
                            <p>+91 7893359490</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-border pt-8">
                    <p className="text-center text-sm text-muted mb-3">
                        © {currentYear} Eedara Sai Deep | B.Tech CSE (Data Science) NIIT University | Built with Next.js & Tailwind CSS
                    </p>
                    <div className="flex justify-center gap-6 text-xs text-muted">
                        <Link href="/privacy-policy" className="hover:text-accent-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="hover:text-accent-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
