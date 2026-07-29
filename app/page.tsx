const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export default function Home() {
  return (
    <main className="landing">
      <nav className="landingNav">
        <a href={`${basePath}/portfolio`}>Portfolio</a>
        <a href={`${basePath}/kontakt`}>Kontakt</a>
        <a
          href="https://renaquarel.etsy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </nav>

      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={`${basePath}/images/hero/hero-mobile.PNG`}
        />
        <img
          src={`${basePath}/images/hero/hero-desktop.PNG`}
          alt="Rena Gryga Illustration"
          className="heroImage"
        />
      </picture>
    </main>
  );
}
