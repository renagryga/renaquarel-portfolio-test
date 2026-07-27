const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export default function KontaktPage() {
  return (
    <div className="pageShell textPage">
      <div className="pageTopline">
        <a href={`${basePath}/`}>← Start</a>
        <span>Kontakt</span>
      </div>

      <article className="textContent">
        <h1>Kontakt</h1>

        <p>
          Für Anfragen von Verlagen, Agenturen, Autorinnen und Autoren freue
          ich mich über eine Nachricht.
        </p>

        <div className="contactLinks">
          <a href="mailto:info@renaquarel.de">
            info@renaquarel.de
          </a>

          <a
            href="https://renaquarel.etsy.com"
            target="_blank"
            rel="noreferrer"
          >
            Etsy-Shop
          </a>
        </div>
      </article>
    </div>
  );
}
