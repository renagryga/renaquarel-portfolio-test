const images = [
  "09.jpg.png",
  "10.jpg.png",
  "11.jpg.png",
  "12.jpg.png",
  "13.jpg.png",
  "01.jpg.png",
  "02.jpg.png",
  "03.jpg.png",
  "04.jpg.png",
  "05.jpg.png",
  "06.jpg.png",
  "07.jpg.png",
  "08.jpg.png",
];

export default function PortfolioPage() {
  return (
    <>
      <nav className="landingNav">
        <a href="/portfolio" className="active">
          Portfolio
        </a>
        <a href="/kontakt">Hallo</a>
        <a
          href="https://renaquarel.etsy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </nav>

      <main className="portfolioPage">
        <div className="portfolioImageList">
          {images.map((image) => (
            <img
              key={image}
              src={`/images/portfolio/${image}`}
              alt=""
              loading="lazy"
            />
          ))}
        </div>
      </main>

      <footer className="siteFooter">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </footer>
    </>
  );
}
