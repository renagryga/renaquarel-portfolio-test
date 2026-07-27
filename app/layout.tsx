import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rena Quarel – Bilderbuchillustration",
  description:
    "Portfolio von Rena Quarel, Bilderbuchillustratorin und Autorin.",
};

const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <header className="siteHeader">
          <nav aria-label="Hauptnavigation">
            <a href={`${basePath}/ueber/`}>Über</a>
            <a href={`${basePath}/kontakt/`}>Kontakt</a>
            <a
              href="https://renaquarel.etsy.com"
              target="_blank"
              rel="noreferrer"
            >
              Shop
            </a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="siteFooter">
          <a href={`${basePath}/impressum/`}>Impressum</a>
          <a href={`${basePath}/datenschutz/`}>Datenschutz</a>
        </footer>
      </body>
    </html>
  );
}
