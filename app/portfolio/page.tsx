const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

const portfolioImages = [
  "01.jpg.png",
  "02.jpg.png",
  "03.jpg.png",
  "04.jpg.png",
  "05.jpg.png",
  "06.jpg.png",
  "07.jpg.png",
  "08.jpg.png",
  "09.jpg.png",
  "10.jpg.png",
  "11.jpg.png",
  "12.jpg.png",
  "13.jpg.png",
];

export default function Portfolio() {
  return (
    <main className="portfolioPage">
      <nav className="portfolioNav" aria-label="Hauptnavigation">
        <a href={`${basePath}/`}>Startseite</a>
        <a href={`${basePath}/kontakt/`}>Kontakt</a>
        <a
          href="https://renaquarel.etsy.com"
          target="_blank"
          rel="noreferrer"
        >
          Shop
        </a>
      </nav>

      <header className="portfolioHeader">
        <h1>Portfolio</h1>
        <p>Illustrationen von Rena Quarel</p>
      </header>

      <section className="portfolioGallery">
        {portfolioImages.map((fileName, index) => (
          <figure className="portfolioItem" key={fileName}>
            <img
              src={`${basePath}/images/portfolio/${fileName}`}
              alt={`Kinderbuchillustration ${index + 1} von Rena Quarel`}
              loading={index < 3 ? "eager" : "lazy"}
            />
          </figure>
        ))}
      </section>
    </main>
  );
}
