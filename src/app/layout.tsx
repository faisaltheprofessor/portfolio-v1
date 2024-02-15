import type { Metadata } from "next";
import { SFMono } from "./fonts/fonts";
import "./globals.css";

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
    <html lang="en" className="bg-navy">
      <body className={SFMono.className}>{children}</body>
    </html>
  );
}
