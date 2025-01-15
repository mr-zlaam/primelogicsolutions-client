import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/customStyles.css";
import NextTopLoader from "nextjs-toploader";
import Preloader from "@/appComponents/preloader/Preloader";
import AnnouncementPage from "@/appComponents/counter/counter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "Prime Logic Solution",
  description: "One Stop Online Solution For Your Business"
};
const showcounter = true;
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Preloader />

        <NextTopLoader
          zIndex={999}
          showSpinner={false}
          color="#F97316"
        />
        <main>{showcounter ? <AnnouncementPage /> : children}</main>
      </body>
    </html>
  );
}
