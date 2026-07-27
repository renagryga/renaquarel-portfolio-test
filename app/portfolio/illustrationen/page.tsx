const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

const images = ["01.JPG", "02.JPG", "03.JPG", "04.JPG", "05.JPG"];

export default function IllustrationenPage() {
  return (
    <div className="pageShell projectPage">
      <div className="pageTopline">
        <a href={`${basePath}/portfolio/`}>← Portfolio</a>
        <span>Rena Quarel</span>
      </div>

      <header className="projectHeader">
        <h1>Ausgewählte Illustrationen</h1>
        <p>
          Eine Auswahl freier Arbeiten, Figurenentwicklungen und
          erzählerischer Szenen.
        </p>
      </header>

      <div className="projectImageList">
        {images.map((image, index) => (
         
