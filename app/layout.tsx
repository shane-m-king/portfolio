import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Press_Start_2P } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Shane King | Software Engineer",
  description: "Portfolio of Shane King, a full-stack software engineer based in Seattle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${pressStart.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-nk-bg text-slate-100 flex flex-col font-body">
        <div className="nk-bg-grid" />
        <NavBar />
        <main className="flex-1 container mx-auto px-4 py-10 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
