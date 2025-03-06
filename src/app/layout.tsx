import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/custom.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    template: "%s | PLogic",
    default: "PLogic - Cloud and DevOps Solutions"
  },
  description: "Professional cloud and DevOps services for businesses of all sizes.",
  keywords: ["DevOps", "Cloud", "CI/CD", "Infrastructure", "Cloud Migration"]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}

