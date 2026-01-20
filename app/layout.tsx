import type { Metadata } from "next";
import { Geist, Geist_Mono, Forum } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const forum = Forum({
  weight: "400",
  variable: "--font-forum",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akash Godbole | Machine Learning Engineer",
  description: "Building and thinking about AI systems that work in the real world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${forum.variable} antialiased font-serif flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
