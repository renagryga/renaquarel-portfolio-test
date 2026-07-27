const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

const images = ["01.JPG", "02.JPG", "03.JPG", "04.JPG"];

export default function DerLeerePlatzPage() {
  return (
    <div className="pageShell projectPage">
      <div className="pageTopline">
        <a href={`${basePath}/portfolio/`}>← Portfolio</a>
        <span>Rena Quarel</span>
      </div>

      <header className="projectHeader">
        <h1>Der leere Platz</h1>
        <p>
          Eine Bilderbuchgeschichte über Einsamkeit, Zugehörigkeit und die
          leise Kraft einer einladenden Geste.
        </p>
      </header>

      <div className="projectImageList">
        {images.map((image, index) => (
          <img
            key={image}
            src={`${basePath}/images/der-leere-platz/${image}`}
            alt={`Der leere Platz – Illustration ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
