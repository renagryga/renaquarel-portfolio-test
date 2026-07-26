import PortfolioGallery from "../components/PortfolioGallery";

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <a className="brand" href="#top">RENAQUAREL</a>
        <nav aria-label="Hauptnavigation">
          <a href="#portfolio">Portfolio</a>
          <a href="#about">Über mich</a>
          <a href="#contact">Kontakt</a>
          <a href="https://renaquarel.etsy.com" target="_blank" rel="noreferrer">Shop</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="Portfolio-Titelseite">
          <img
            src="images/hero/hero.jpg"
            alt="Portfolio von Rena Quarel – Illustratorin und Autorin"
            className="heroImage"
          />
        </section>

        <PortfolioGallery />

        <section id="about" className="textSection">
          <p className="sectionLabel">Über mich</p>
          <h2>Hi, ich bin Rena.</h2>
          <p>
            Ich bin Bilderbuchillustratorin, Autorin, Mama und ausgebildete
            Psychotherapeutin.
          </p>
          <p>
            Mit Tinte und Aquarell erzähle ich Geschichten in Bildern. Meine
            Bilderbücher greifen psychologische Themen wie Identität,
            Zugehörigkeit, Mut und Hoffnung auf und laden Kinder dazu ein, sich
            selbst und andere mit Offenheit und Mitgefühl zu entdecken.
          </p>
        </section>

        <section id="contact" className="contactSection">
          <p className="sectionLabel">Kontakt</p>
          <h2>Lass uns Geschichten erzählen.</h2>
          <div className="contactLinks">
            <a href="mailto:info@renaquarel.de">E-Mail</a>
            <a href="https://renaquarel.etsy.com" target="_blank" rel="noreferrer">Etsy-Shop</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} RENAQUAREL</span>
        <div>
          <a href="impressum/">Impressum</a>
          <a href="datenschutz/">Datenschutz</a>
        </div>
      </footer>
    </>
  );
}
