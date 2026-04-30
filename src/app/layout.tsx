import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimationObserver from "@/components/AnimationObserver";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import SiteLoader from "@/components/SiteLoader";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "R4VENEOUS ESPORTS | India's Premier Esports Agency",
  description: "India's highest-octane esports agency. Tournament operations, broadcast excellence, live events, concerts, and holistic digital marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} ${montserrat.variable} ${inter.className} bg-background text-foreground antialiased selection:bg-primary/30`}>
        <SmoothScrollProvider />
        <AnimationObserver />
        <SiteLoader />
        <Navbar />
        <main className="pt-24 flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
