const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export default function Home() {
  return (
    <main className="landingPage">
      <a
        href={`${basePath}/portfolio/`}
        className="heroLink"
        aria-label="Portfolio öffnen"
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={`${basePath}/images/hero/hero-mobile.PNG`}
          />

          <img
            src={`${basePath}/images/hero/hero-desktop.PNG`}
            alt="Rena Quarel – Illustration und Text"
            className="heroImage"
          />
        </picture>
      </a>
    </main>
  );
}
