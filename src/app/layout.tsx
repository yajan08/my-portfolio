import type { Metadata } from "next";
import { Playfair_Display, Sora, Shadows_Into_Light } from "next/font/google";
import RevealOnScroll from "@/components/RevealOnScroll";
import "./globals.css";

const sora = Sora({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const shadowsIntoLight = Shadows_Into_Light({
  variable: "--font-name",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Yajan Mehta | Developer Portfolio",
  description: "App Developer focused on building thoughtful, inclusive, real-world software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${playfair.variable} ${shadowsIntoLight.variable} antialiased min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]`}
      >
        <RevealOnScroll />
        <main className="flex-grow flex flex-col max-w-5xl mx-auto w-full px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
