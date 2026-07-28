import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rena Quarel",
  description: "Portfolio von Rena Quarel – Illustratorin und Autorin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}
      <footer className="siteFooter">
  <a href={`${basePath}/impressum`}>Impressum</a>
  <a href={`${basePath}/datenschutz`}>Datenschutz</a>
</footer>
      
      </body>
    </html>
  );
}
