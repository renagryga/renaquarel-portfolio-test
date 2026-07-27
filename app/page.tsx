const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export default function Home() {
  return (
    <main className="landingPage">
      <a
        href={`${basePath}/portfolio/`}
        className="landingCoverLink"
        aria-label="Portfolio von Rena Quarel öffnen"
      >
        <picture>
          <source
            media="(max-width: 700px)"
            srcSet={`${basePath}/images/hero/hero-mobile.jpg?v=3`}
          />

          <img
            src={`${basePath}/images/hero/hero-desktop.jpg?v=3`}
            alt="Portfolio von Rena Quarel – Illustratorin und Autorin"
            className="landingCover"
          />
        </picture>
      </a>
    </main>
  );
}
