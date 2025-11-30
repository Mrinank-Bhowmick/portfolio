import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mrinank Bhowmick - Portfolio",
  description: "Personal Portfolio",
};

// Force static generation
export const dynamic = "force-static";
export const revalidate = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased text-white`}
      >
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block">
            <Sidebar />
          </div>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
