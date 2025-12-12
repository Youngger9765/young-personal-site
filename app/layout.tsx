import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AIChatWidget from "@/components/AIChatWidget";

export const metadata: Metadata = {
  title: "Young's Personal Site",
  description: "Personal brand website showcasing projects, blog, and AI assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <AIChatWidget />
      </body>
    </html>
  );
}
