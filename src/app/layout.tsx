import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 6,
  userScalable: true,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

import { SFMono } from "./fonts/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Faisal Khan",
  description: "A Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-navy ">
      <link rel="manifest" href="/manifest.json" />
      <Suspense fallback={<Loading />}>
        <body className={cn("h-screen", SFMono.className)}>
          <Header />
          {children}
          <Footer />
        </body>
      </Suspense>
    </html>
  );
}
