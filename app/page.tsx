export default function Home() {
  return (
    <main className="landingPage">
      <a
        href="/portfolio"
        className="landingCoverLink"
        aria-label="Portfolio öffnen"
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/hero/hero-mobile.PNG"
          />

          <img
            className="landingCover"
            src="/images/hero/hero-desktop.PNG"
            alt="Rena Gryga"
          />
        </picture>
      </a>

      <footer className="landingFooter">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </footer>
    </main>
  );
}
