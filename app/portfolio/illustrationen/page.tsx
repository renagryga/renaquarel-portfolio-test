const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

const images = [
  "01.JPG",
  "02.JPG",
  "03.JPG",
  "04.JPG",
  "05.JPG",
];

export default function IllustrationenPage() {
  return (
    <main className="pageShell">
      <div className="pageTopline">
        <a href={`${basePath}/portfolio`}>← Portfolio</a>
        <span>Ausgewählte Illustrationen</span>
      </div>

      <header className="projectHeader">
        <h1>Ausgewählte Illustrationen</h1>

        <p>
          Eine Auswahl freier Illustrationen und Szenen aus meinem Portfolio.
        </p>
      </header>

      <div className="projectImageList">
        {images.map((image, index) => (
          <img
            key={image}
            src={`${basePath}/images/ausgewaehlte-illustrationen/${image}`}
            alt={`Ausgewählte Illustration ${index + 1}`}
          />
        ))}
      </div>
    </main>
  );
}
