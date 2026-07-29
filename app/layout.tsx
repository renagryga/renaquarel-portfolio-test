import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export const metadata: Metadata = {
  title: "Rena Gryga",
  description: "Portfolio von Rena Gryga – Illustratorin und Autorin",
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
      <body>
        {children}

        <footer className="siteFooter">
          <a href={`${basePath}/impressum/`}>Impressum</a>
          <a href={`${basePath}/datenschutz/`}>Datenschutz</a>
        </footer>
      </body>
    </html>
  );
}
