import type { Metadata } from "next";
import { SFMono } from "./fonts/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";

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
      <body className={cn("h-screen", SFMono.className)}>{children}</body>
    </html>
  );
}
