import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { Particles } from "@/components/particles";
import { ClientComponents } from "@/components/client-components";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saideepeedara.dev"),
  title: {
    default: "Eedara Sai Deep | Full-Stack Developer & Backend Engineer",
    template: "%s | Eedara Sai Deep",
  },
  description:
    "Eedara Sai Deep is a Full-Stack Developer & Backend Engineer, B.Tech Computer Science (Data Science) student at NIIT University specializing in Java, Spring Boot, Python, React, PostgreSQL, Redis Streams, Docker, and interpretable Machine Learning.",
  keywords: [
    "Eedara Sai Deep",
    "Sai Deep Eedara",
    "Sai Deep Portfolio",
    "Full Stack Developer",
    "Backend Engineer",
    "Spring Boot Developer",
    "Java Developer",
    "Python Developer",
    "Data Science NIIT University",
    "React Developer",
    "Redis Streams",
    "Docker AWS EC2",
    "Explainable AI",
    "Machine Learning Engineer",
    "MERN Stack Developer",
    "Software Engineer India"
  ],
  authors: [{ name: "Eedara Sai Deep", url: "https://github.com/saideepeedara27-alt" }],
  creator: "Eedara Sai Deep",
  publisher: "Eedara Sai Deep",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saideepeedara.dev",
    siteName: "Eedara Sai Deep - Portfolio",
    title: "Eedara Sai Deep | Full-Stack Developer & Backend Engineer",
    description:
      "Full-Stack Developer & Backend Engineer specializing in Java, Spring Boot, React, Node.js, Redis, Docker, and Machine Learning.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eedara Sai Deep - Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eedara Sai Deep | Full-Stack Developer & Backend Engineer",
    description:
      "Final-year B.Tech CS (Data Science) at NIIT University specializing in scalable backend systems, full-stack applications, and ML solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${outfit.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Eedara Sai Deep Portfolio",
                "url": "https://saideepeedara.dev",
                "description": "Full-Stack Developer & Backend Engineer Portfolio - Eedara Sai Deep",
                "author": {
                  "@type": "Person",
                  "name": "Eedara Sai Deep",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Eedara Sai Deep",
                "url": "https://saideepeedara.dev",
                "image": "https://saideepeedara.dev/profile.jpg",
                "jobTitle": "Full-Stack Developer & Backend Engineer",
                "description":
                  "B.Tech Computer Science (Data Science) student at NIIT University with hands-on experience in Java, Spring Boot, Python, React, PostgreSQL, Redis, Docker, and Machine Learning.",
                "email": "saideepeedara27@gmail.com",
                "telephone": "+917893359490",
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "NIIT University, Neemrana",
                },
                "knowsAbout": [
                  "Java",
                  "Spring Boot",
                  "Python",
                  "JavaScript",
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "Redis Streams",
                  "Docker",
                  "AWS EC2",
                  "Jenkins",
                  "GitHub Actions",
                  "Machine Learning",
                  "Scikit-learn",
                  "XGBoost",
                  "SHAP",
                  "LIME",
                  "Chart.js",
                  "RESTful APIs"
                ],
                "sameAs": [
                  "https://github.com/saideepeedara27-alt",
                  "https://linkedin.com/in/saideepeedara"
                ],
              },
            ]),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <ClientComponents />
          <ScrollProgress />
          <Particles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
