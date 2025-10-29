import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import LocomotiveScrollProvider from "@/components/LocomotiveScrollProvider";

export const metadata: Metadata = {
  title: "DentalCare - Your Trusted Dental Practice",
  description: "Experience exceptional dental care with our team of expert dentists. We provide comprehensive dental services including general dentistry, cosmetic treatments, orthodontics, and more.",
  keywords: "dentist, dental care, teeth whitening, dental implants, orthodontics, cosmetic dentistry, dental checkup, emergency dentist",
  authors: [{ name: "DentalCare" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dentalcare.com",
    siteName: "DentalCare",
    title: "DentalCare - Your Trusted Dental Practice",
    description: "Experience exceptional dental care with our team of expert dentists. Comprehensive dental services for all your oral health needs.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "DentalCare Practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DentalCare - Your Trusted Dental Practice",
    description: "Experience exceptional dental care with our team of expert dentists.",
    images: ["https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LocomotiveScrollProvider>
          <ErrorReporter />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
          <Toaster />
          <VisualEditsMessenger />
        </LocomotiveScrollProvider>
      </body>
    </html>
  );
}