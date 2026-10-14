import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F7F8F4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/Madhan-oss"),
  title: "B Madhan Kumar | Full Stack Developer & AI/ML Enthusiast",
  description:
    "Personal portfolio of B Madhan Kumar — Computer Science & AI/ML Undergraduate at SRM Institute of Science and Technology, Tiruchirappalli. Explorer of scalable full-stack applications, NLP assistants, evolutionary algorithms, and browser automation.",
  keywords: [
    "B Madhan Kumar",
    "Madhan Kumar",
    "Full Stack Developer",
    "AI/ML Engineer",
    "SRM IST",
    "Python Developer",
    "React Developer",
    "FastAPI",
    "Machine Learning",
    "Moxa Portfolio",
    "Promptly Extension",
  ],
  authors: [{ name: "B Madhan Kumar", url: "https://github.com/Madhan-oss" }],
  creator: "B Madhan Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Madhan-oss",
    title: "B Madhan Kumar | Full Stack Developer & AI/ML Enthusiast",
    description:
      "Crafting elegant full-stack solutions and intelligent AI/ML systems. B.Tech in Artificial Intelligence & Machine Learning at SRM IST.",
    siteName: "Madhan Kumar Portfolio",
    images: [
      {
        url: "/images/madhan-portrait.jpg",
        width: 682,
        height: 1024,
        alt: "B Madhan Kumar — Full Stack Developer & AI/ML Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B Madhan Kumar | Full Stack Developer & AI/ML Enthusiast",
    description:
      "Full Stack Developer & AI/ML undergraduate at SRM IST building intelligent applications and web platforms.",
    images: ["/images/madhan-portrait.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F8F4] dark:bg-[#0B1410] text-[#121A15] dark:text-[#F4F8F5] antialiased selection:bg-[#BDE4CE] selection:text-[#0E2B1E] dark:selection:bg-[#1B4D36] dark:selection:text-white">
        {children}
      </body>
    </html>
  );
}
