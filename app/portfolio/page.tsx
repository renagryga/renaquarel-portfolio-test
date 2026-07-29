const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

const images = [
  "/images/portfolio/01.jpg.png",
  "/images/portfolio/02.jpg.png",
  "/images/portfolio/03.jpg.png",
  "/images/portfolio/04.jpg.png",
  "/images/portfolio/05.jpg.png",
  "/images/portfolio/06.jpg.png",
  "/images/portfolio/07.jpg.png",
  "/images/portfolio/08.jpg.png",
  "/images/portfolio/09.jpg.png",
  "/images/portfolio/10.jpg.png",
  "/images/portfolio/11.jpg.png",
  "/images/portfolio/12.jpg.png",
  "/images/portfolio/13.jpg.png",
];

export default function PortfolioPage() {
  return (
    <main className="portfolioPage">
      <nav className="landingNav" aria-label="Hauptnavigation">
        <a href={`${basePath}/`}>Startseite</a>
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
