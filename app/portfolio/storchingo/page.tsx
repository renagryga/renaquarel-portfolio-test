const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

const images = ["01.JPG", "02.JPG", "03.JPG", "04.JPG"];

export default function StorchingoPage() {
  return (
    <div className="pageShell projectPage">
      <div className="pageTopline">
        <a href={`${basePath}/portfolio/`}>← Portfolio</a>
        <span>Rena Quarel</span>
      </div>

      <header className="projectHeader">
        <h1>Storchingo</h1>
        <p>
          Eine Bilderbuchgeschichte über Identität, Anderssein und den Mut,
          den eigenen Weg zu finden.
        </p>
      </header>

      <div className="projectImageList">
        {images.map((image, index) => (
          <img
            key={image}
            src={`${basePath}/images/storchingo/${image}`}
            alt={`Storchingo – Illustration ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
