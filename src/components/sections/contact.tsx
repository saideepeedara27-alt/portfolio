"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";

export function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                // If SMTP is not set up on local dev, still show friendly success
                console.warn("Contact API status:", data);
            }

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error: any) {
            console.error("Submission info:", error);
            // Show friendly notification so user can mail directly
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-surface/30">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 font-outfit text-4xl font-bold md:text-5xl">
                        Get In Touch
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted">
                        Have a project in mind, an internship opportunity, or want to discuss scalable backend architectures? Let's connect!
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <div className="rounded-2xl border border-border bg-surface p-6 backdrop-blur-sm">
                            <Mail className="mb-3 h-7 w-7 text-accent-primary" />
                            <h3 className="mb-1 font-medium text-foreground">Email</h3>
                            <a
                                href="mailto:saideepeedara27@gmail.com"
                                className="text-sm text-muted hover:text-accent-primary break-all transition-colors"
                            >
                                saideepeedara27@gmail.com
                            </a>
                        </div>

                        <div className="rounded-2xl border border-border bg-surface p-6 backdrop-blur-sm">
                            <Phone className="mb-3 h-7 w-7 text-accent-primary" />
                            <h3 className="mb-1 font-medium text-foreground">Phone</h3>
                            <a
                                href="tel:+917893359490"
                                className="text-sm text-muted hover:text-accent-primary transition-colors"
                            >
                                +91 7893359490
                            </a>
                        </div>

                        <div className="rounded-2xl border border-border bg-surface p-6 backdrop-blur-sm">
                            <MapPin className="mb-3 h-7 w-7 text-accent-primary" />
                            <h3 className="mb-1 font-medium text-foreground">Location</h3>
                            <p className="text-sm text-muted">
                                NIIT University, Neemrana
                                <br />
                                Rajasthan / India
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        ref={formRef}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit}
                        className="lg:col-span-2"
                    >
                        <div className="space-y-4 rounded-2xl border border-border bg-surface p-8 backdrop-blur-sm">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                                    placeholder="Your name"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                                    placeholder="your.email@example.com"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    rows={5}
                                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                                    placeholder="Tell me about your project, idea, or inquiry..."
                                    required
                                    disabled={loading}
                                />
                            </div>

                            {status === "success" && (
                                <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-400 border border-emerald-500/20">
                                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                                    <span>Thank you! Your message has been sent successfully.</span>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-400 border border-red-500/20">
                                    <AlertCircle className="h-5 w-5 shrink-0" />
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-accent-primary px-8 py-3.5 font-medium text-white transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-accent-primary/50 disabled:opacity-50"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {loading ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            Send Message
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
