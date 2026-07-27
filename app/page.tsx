const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export default function Home() {
  return (
    <section className="landingPage">
      <a
        href={`${basePath}/portfolio/`}
        className="portfolioCoverLink"
        aria-label="Portfolio öffnen"
      >
        <img
          src={`${basePath}/images/hero/hero.JPG`}
          alt="Portfolio von Rena Quarel"
          className="portfolioCover"
        />
      </a>
    </section>
  );
}
