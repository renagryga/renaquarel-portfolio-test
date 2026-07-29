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

        <a
          href="https://renaquarel.etsy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </nav>

      <a
        href={`${basePath}/portfolio/`}
        className="landingCoverLink"
        aria-label="Portfolio von Rena Gryga öffnen"
      >
        <picture>
          <source
            media="(max-width: 700px)"
            srcSet={`${basePath}/images/hero/hero-mobile.jpg?v=50`}
          />

          <img
            src={`${basePath}/images/hero/hero-desktop.jpg?v=50`}
            alt="Portfolio von Rena Gryga – Illustratorin und Autorin"
            className="landingCover"
          />
        </picture>
      </a>
    </main>
  );
}
