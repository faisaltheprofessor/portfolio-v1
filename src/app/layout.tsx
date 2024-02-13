import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const SFMono = localFont({ src: "fonts/SF-Mono/SF-Mono-Light.otf" });

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
