const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export default function Home() {
  return (
    <main className="landingPage">
      <nav className="landingNav" aria-label="Hauptnavigation">
        <a href={`${basePath}/portfolio/`}>Portfolio</a>
        <a href={`${basePath}/kontakt/`}>Kontakt</a>
        <a href="https://renaquarel.etsy.com" target="_blank" rel="noreferrer">
          Shop
        </a>
      </nav>

      <a
        href={`${basePath}/portfolio/`}
        className="landingCoverLink"
        aria-label="Portfolio von Rena Quarel öffnen"
      >
        <picture>
          <source
            media="(max-width: 700px)"
            srcSet={`${basePath}/images/hero/hero-mobile.jpg?v=40`}
          />

          <img
            src={`${basePath}/images/hero/hero-desktop.jpg?v=40`}
            alt="Portfolio von Rena Quarel – Illustratorin und Autorin"
            className="landingCover"
          />
        </picture>
      </a>

      <footer className="landingFooter">
        <a href={`${basePath}/impressum/`}>Impressum</a>
        <a href={`${basePath}/datenschutz/`}>Datenschutz</a>
      </footer>
    </main>
  );
}
