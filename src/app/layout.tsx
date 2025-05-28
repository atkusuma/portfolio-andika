import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Renewable Energy Developer",
  description: "Portfolio showcasing my work as a developer with a focus on renewable energy solutions",
  keywords: ["developer", "portfolio", "renewable energy", "next.js", "programming"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800`}>
        <main className="min-h-screen">
        {children}
        </main>
      </body>
    </html>
  );
}
