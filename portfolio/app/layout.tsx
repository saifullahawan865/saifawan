import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0B1121",
};

export const metadata: Metadata = {
  title: "Saif Ullah Awan | Data Systems Engineer",
  description:
    "Professional portfolio of Saif Ullah Awan – Backend Engineer, Data Analyst, and AI/ML enthusiast building intelligent data systems.",
  keywords: [
    "Data Systems Engineer",
    "Backend Engineer",
    "Python",
    "Machine Learning",
    "Portfolio",
    "Saif Ullah Awan",
  ],
  authors: [{ name: "Saif Ullah Awan" }],
  openGraph: {
    title: "Saif Ullah Awan | Data Systems Engineer",
    description: "Building Intelligent Data Systems – Premium Portfolio",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Saif.dev",
  },
  manifest: "/manifest.json",
};

import SceneWrapper from "./components/3d/SceneWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-navy-950 text-white antialiased`}
      >
        <SceneWrapper>
          {children}
        </SceneWrapper>
      </body>
    </html>
  );
}
