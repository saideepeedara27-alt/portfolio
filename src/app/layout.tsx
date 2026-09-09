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
    "Eedara Sai Deep is a Full-Stack Developer & Backend Engineer, B.Tech Computer Science (Data Science) student at NIIT University specializing in Python, Node.js, Express.js, React, PostgreSQL, MongoDB, Docker, AWS EC2, Power BI, Tableau, and Machine Learning.",
  keywords: [
    "Eedara Sai Deep",
    "Sai Deep Eedara",
    "Sai Deep Portfolio",
    "Full Stack Developer",
    "Backend Engineer",
    "Node.js Developer",
    "Express.js Developer",
    "Python Developer",
    "PostgreSQL",
    "MongoDB",
    "Data Science NIIT University",
    "React Developer",
    "Docker AWS EC2",
    "Power BI Tableau",
    "Data Analytics",
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
      "Full-Stack Developer & Backend Engineer specializing in Python, Node.js, Express.js, React, PostgreSQL, MongoDB, Docker, AWS, Power BI, and Machine Learning.",
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
      "Final-year B.Tech CS (Data Science) at NIIT University specializing in backend web development, database architectures, cloud deployments, and data analytics.",
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
                  "B.Tech Computer Science (Data Science) student at NIIT University with hands-on experience in Python, Node.js, Express.js, React, PostgreSQL, MongoDB, Docker, AWS EC2, Jenkins, GitHub Actions, Power BI, and Tableau.",
                "email": "saideepeedara27@gmail.com",
                "telephone": "+917893359490",
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "NIIT University, Neemrana",
                },
                "knowsAbout": [
                  "Python",
                  "JavaScript",
                  "SQL",
                  "HTML & CSS",
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "PostgreSQL",
                  "MongoDB",
                  "Docker",
                  "AWS EC2",
                  "Jenkins",
                  "GitHub Actions",
                  "Git",
                  "GitHub",
                  "Postman",
                  "Power BI",
                  "Tableau",
                  "Data Analytics",
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
