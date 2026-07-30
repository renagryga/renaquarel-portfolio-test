export default function DatenschutzPage() {
  return (
    <>
      <nav className="landingNav">
        <a href="/portfolio">Portfolio</a>
        <a href="/kontakt">Hallo</a>
        <a
          href="https://renaquarel.etsy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </nav>

      <main
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 24px",
        }}
      >
        <img
          src="/images/datenschutz.png"
          alt="Datenschutzerklärung"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "900px",
            height: "auto",
          }}
        />
      </main>

      <footer className="siteFooter">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </footer>
    </>
  );
}
