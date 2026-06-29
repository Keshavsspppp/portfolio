import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { StatusBar } from "@/components/layout/StatusBar";
import { InteractiveGlow } from "@/components/ui/InteractiveGlow";
import { ShapeGrid } from "@/components/ui/ShapeGrid";
import { TargetCursor } from "@/components/ui/TargetCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keshav Prasad | Full-Stack Developer",
  description:
    "Portfolio of Keshav Prasad, a Full-Stack Developer, AI/ML Enthusiast, and Competitive Programmer based in Raipur, India.",
  keywords: [
    "Keshav Prasad",
    "Full-Stack Developer",
    "Software Engineer",
    "Competitive Programmer",
    "React",
    "Next.js",
    "AI/ML",
  ],
  authors: [{ name: "Keshav Prasad" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://keshavprasad.dev",
    title: "Keshav Prasad | Full-Stack Developer",
    description:
      "Portfolio of Keshav Prasad, a Full-Stack Developer, AI/ML Enthusiast, and Competitive Programmer based in Raipur, India.",
    siteName: "Keshav Prasad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keshav Prasad | Full-Stack Developer",
    description:
      "Portfolio of Keshav Prasad, a Full-Stack Developer, AI/ML Enthusiast, and Competitive Programmer based in Raipur, India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Keshav Prasad",
    jobTitle: "Full-Stack Developer",
    url: "https://keshavprasad.dev",
    sameAs: [
      "https://github.com/Keshavsspppp",
      "https://leetcode.com/u/vCtAUvUZ5B/",
      "https://www.codechef.com/users/keshavssp04",
      "https://codeforces.com/profile/keshavssp04",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "IIIT Naya Raipur",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raipur",
      addressRegion: "Chhattisgarh",
      addressCountry: "IN",
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans pb-7">
        <TargetCursor />
        <div className="crt-scanlines" />
        <InteractiveGlow />
        <ShapeGrid shape="hexagon" squareSize={50} speed={0.5} borderColor="rgba(255, 255, 255, 0.2)" hoverFillColor="rgba(255, 166, 61, 0.5)" />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <StatusBar />
      </body>
    </html>
  );
}
