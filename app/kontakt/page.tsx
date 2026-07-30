const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export default function KontaktPage() {
  return (
    <>
      <nav className="landingNav">
        <a href={`${basePath}/portfolio`}>Portfolio</a>
        <a href={`${basePath}/kontakt`}>Hallo</a>
        <a
          href="https://renaquarel.etsy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </nav>

      <main className="textContent">
        <h1>Kontakt</h1>

        <p>
          Hi, ich bin Rena – Illustratorin, Autorin, Psychotherapeutin und
          Mama. In meiner Arbeit verbinde ich künstlerisches Erzählen mit einem
          feinen Gespür für Gefühle, Beziehungen und kindliche Lebenswelten.
        </p>

        <p>
          Mein Schwerpunkt liegt auf Bilderbüchern, die Themen wie Identität,
          Anderssein, Einsamkeit und Zugehörigkeit auf eine warme und
          kindgerechte Weise erzählen.
        </p>

        <p>
          Für Anfragen, Kooperationen und Buchprojekte freue ich mich über eine
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
        <a href={`${basePath}/impressum`}>Impressum</a>
        <a href={`${basePath}/datenschutz`}>Datenschutz</a>
      </footer>
    </>
  );
}
