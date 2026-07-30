export default function KontaktPage() {
  return (
    <>
      <nav className="landingNav">
        <a href="/portfolio">Portfolio</a>

        <a href="/kontakt" className="active">
          Hallo
        </a>

        <a
          href="https://renaquarel.etsy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </nav>

      <main className="textContent">
        <p>
          Hallo, ich bin Rena – Illustratorin, Autorin,
          Psychotherapeutin und Mama. In meiner Arbeit verbinde ich
          künstlerisches Erzählen mit einem feinen Gespür für Gefühle,
          Beziehungen und kindliche Lebenswelten.
        </p>

        <p>
          Mein Schwerpunkt liegt auf Bilderbüchern, die Themen wie
          Anderssein, Einsamkeit und Zugehörigkeit auf eine
          kindgerechte Weise erzählen.
        </p>

        <p>
          Für Anfragen und Kooperationen freue ich mich über eine
          Nachricht.
        </p>

        <p>
          <a
            className="contactLink"
            href="mailto:info@renaquarel.de"
          >
            info@renaquarel.de
          </a>
        </p>
      </main>

      <footer className="siteFooter">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </footer>
    </>
  );
}
