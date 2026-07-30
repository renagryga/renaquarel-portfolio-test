const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export default function Home() {
  return (
    <main className="landingPage">
      <a
        href={`${basePath}/portfolio`}
        className="landingCoverLink"
        aria-label="Portfolio öffnen"
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={`${basePath}/images/hero/hero-mobile.PNG`}
          />

          <img
            className="landingCover"
            src={`${basePath}/images/hero/hero-desktop.PNG`}
            alt="Rena Gryga"
          />
        </picture>
      </a>

      <footer className="landingFooter">
        <a href={`${basePath}/impressum`}>Impressum</a>
        <a href={`${basePath}/datenschutz`}>Datenschutz</a>
      </footer>
    </main>
  );
}
