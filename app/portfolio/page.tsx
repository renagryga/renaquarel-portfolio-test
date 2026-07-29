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
    <main className="pageShell">
      <div className="pageTopline">
        <a href={`${basePath}/`}>← Start</a>
        <span>Portfolio</span>
      </div>

      <div className="portfolioImageList">
        {images.map((image, index) => (
          <img
            key={index}
            src={`${basePath}${image}`}
            alt={`Portfolio ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>
    </main>
  );
}
