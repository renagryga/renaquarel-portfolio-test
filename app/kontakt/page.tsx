const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export default function KontaktPage() {
  return (
    <main className="pageShell">
      <div className="pageTopline">
        <a href={`${basePath}/`}>← Start</a>
        <span>Kontakt</span>
      </div>

      <section className="textContent">
        <h1>Kontakt</h1>

        <p>
          Hi, ich bin Rena – Illustratorin, Autorin, Psychotherapeutin
          und Mama. In meiner Arbeit verbinde ich künstlerisches Erzählen
          mit psychologischem Wissen und einem feinen Gespür für Gefühle,
          Beziehungen und kindliche Lebenswelten.
        </p>

        <p>
          Mein besonderer Schwerpunkt liegt auf Bilderbüchern, die Themen
          wie Identität, Anderssein, Einsamkeit, Zugehörigkeit und innere
          Entwicklung auf eine warme, zugängliche und kindgerechte Weise
          erzählen. Durch meinen psychotherapeutischen Hintergrund kann ich
          komplexe emotionale Themen differenziert erfassen und in klare,
          berührende Bilder und Geschichten übersetzen.
        </p>

        <p>
          Mein Stil ist reduziert, freundlich und erzählerisch. Ich arbeite
          überwiegend mit Aquarell und Tinte. So entstehen Bilder mit
          sichtbarer Struktur, sanften Farben und einer handgemachten Wirkung.
        </p>

        <p>
          Für Anfragen, Kooperationen und Buchprojekte freue ich mich über
          eine Nachricht.
        </p>

        <p>
          <a
            href="mailto:info@renaquarel.de"
            className="contactLink"
          >
            info@renaquarel.de
          </a>
        </p>

        <p>
          <a
            href="https://renaquarel.etsy.com"
            target="_blank"
            rel="noreferrer"
            className="contactLink"
          >
            Etsy-Shop
          </a>
        </p>
      </section>
    </main>
  );
}
