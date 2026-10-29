import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clickora Digital | SEO, Ads & Web Design in Bihar",
  description: "Try our digital marketing, SEO,SMO and web development services through Clickora Digital in Bihar and Simanchal.",
  verification: {
    google: "PbtFperQgOgOWEW65Y8OYWiIbd4EuxTJiwwG9yiVVlk",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
       <GoogleAnalytics gaId="G-2DB8Y92YN1" />
    </html>
  );
}
