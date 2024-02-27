export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-navy">
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
