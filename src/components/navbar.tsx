"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "/experience" },
    { name: "Skills", href: "/skills" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed left-0 right-0 top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-md"
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <Link href="/" className="group flex items-center gap-2">
                    <motion.span
                        className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text font-outfit text-2xl font-bold text-transparent"
                        whileHover={{ scale: 1.05 }}
                    >
                        Sai Deep
                    </motion.span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-sm font-medium text-muted transition-colors hover:text-foreground"
                        >
                            <span className="relative z-10">{item.name}</span>
                            <motion.span
                                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-primary"
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.2 }}
                            />
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-foreground"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
                >
                    <div className="space-y-1 px-6 py-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block rounded-lg px-4 py-2 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
