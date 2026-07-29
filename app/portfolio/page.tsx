const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

const images = [
  "/images/portfolio/01.jpg",
  "/images/portfolio/02.jpg",
  "/images/portfolio/03.jpg",
  "/images/portfolio/04.jpg",
  "/images/portfolio/05.jpg",
  "/images/portfolio/06.jpg",
  "/images/portfolio/07.jpg",
  "/images/portfolio/08.jpg",
  "/images/portfolio/09.jpg",
  "/images/portfolio/10.jpg",
  "/images/portfolio/11.jpg",
  "/images/portfolio/12.jpg",
  "/images/portfolio/13.jpg",
];

export default function PortfolioPage() {
  return (
    <main className="portfolioPage">
      <nav className="siteNav" aria-label="Hauptnavigation">
        <a href={`${basePath}/`}>Startseite</a>
        <a href={`${basePath}/portfolio/`}>Portfolio</a>
        <a href={`${basePath}/kontakt/`}>Kontakt</a>
        <a
          href="https://renaquarel.etsy.com"
          target="_blank"
          rel="noreferrer"
        >
          Shop
        </a>
      </nav>

      <h1 className="portfolioTitle">Portfolio</h1>

      <div className="portfolioImageList">
        {images.map((image, index) => (
          <img
            key={image}
            src={`${basePath}${image}`}
            alt={`Illustration ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
    </main>
  );
}
