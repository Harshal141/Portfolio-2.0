import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Harshal Patil | Software Engineer • Creator • Blogger",
  description:
    "Portfolio of Harshal Patil, a software engineer at a fast-growing startup. Skilled in full-stack development and scalable systems, with a passion for building and blogging about technology.",
  metadataBase: new URL("https://harshalpatil.co.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/fav/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/fav/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/fav/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/fav/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/fav/site.webmanifest" }],
  },
  themeColor: "#ffffff",
  openGraph: {
    type: "website",
    url: "https://harshalpatil.co.in/",
    title: "Harshal Patil - Developer & Freelancer",
    description:
      "Explore Harshal Patil's portfolio projects in development and freelancing.",
    images: [
      {
        url: "https://harshalpatil.co.in/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "Harshal Patil Portfolio Preview",
      },
    ],
    siteName: "Harshal Patil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshal Patil - Developer & Freelancer",
    description:
      "Explore Harshal Patil's portfolio projects in development and freelancing.",
    images: ["https://harshalpatil.co.in/assets/preview.png"],
    creator: "@HarshalPatil", // optional if you have a Twitter handle
  },
  authors: [{ name: "Harshal Patil", url: "https://harshalpatil.co.in" }],
  other: {
    // Structured data as JSON-LD
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Harshal Patil",
      url: "https://harshalpatil.co.in",
      jobTitle: "Full-Stack Developer & Freelancer",
      sameAs: [
        "https://github.com/Harshal141",
        "https://www.linkedin.com/in/harshalmukundapatil/",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.variable}>{children}</body>
    </html>
  );
}
