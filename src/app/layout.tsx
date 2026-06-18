import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayonitemi.vercel.app"),
  title: {
    default: "Ayonitemi Ogunniran | Frontend Developer & UI Engineer",
    template: "%s | Ayonitemi Ogunniran",
  },
  description:
    "Portfolio of Ayonitemi Ogunniran, a Frontend Developer building high-performance, secure web applications with custom design systems, React, Next.js, and TypeScript.",
  keywords: [
    "Ayonitemi Ogunniran",
    "Ayonitemi",
    "Ogunniran",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI Engineer",
    "Software Engineer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Ayonitemi Ogunniran" }],
  creator: "Ayonitemi Ogunniran",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayonitemi.vercel.app",
    title: "Ayonitemi Ogunniran | Frontend Developer & UI Engineer",
    description:
      "Frontend Developer building high-performance, secure web applications with custom design systems, React, Next.js, and TypeScript.",
    siteName: "Ayonitemi Ogunniran Portfolio",
    images: [
      {
        url: "/myphoto.png",
        width: 800,
        height: 800,
        alt: "Ayonitemi Ogunniran Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayonitemi Ogunniran | Frontend Developer & UI Engineer",
    description:
      "Frontend Developer building high-performance, secure web applications with custom design systems, React, Next.js, and TypeScript.",
    images: ["/myphoto.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
