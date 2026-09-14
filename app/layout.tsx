import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://akashgodbole.com"),
  title: { default: "Akash Godbole", template: "%s · Akash Godbole" },
  description: "Akash Godbole is building LxOS, AI-native legal software for small and midsize law firms. Writing on entrepreneurship and engineering.",
  alternates: { canonical: "/", types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { type: "website", siteName: "Akash Godbole", title: "Akash Godbole", description: "Building LxOS, AI-native legal software for small and midsize law firms. Writing on entrepreneurship and engineering." },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
