const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

const projects = [
  {
    title: "Der leere Platz",
    description:
      "Eine Bilderbuchgeschichte über Einsamkeit, Zugehörigkeit und die leise Kraft einer einladenden Geste.",
    folder: "der-leere-platz",
    images: ["01.JPG", "02.JPG", "03.JPG", "04.JPG"],
  },
  {
    title: "Storchingo",
    description:
      "Eine Bilderbuchgeschichte über Identität, Anderssein und den Mut, den eigenen Weg zu finden.",
    folder: "storchingo",
    images: ["01.JPG", "02.JPG", "03.JPG", "04.JPG"],
  },
  {
    title: "Ausgewählte Illustrationen",
    description:
      "Eine Auswahl freier Arbeiten, Figurenentwicklungen und erzählerischer Szenen.",
    folder: "ausgewaehlte-illustrationen",
    images: ["01.JPG", "02.JPG", "03.JPG", "04.JPG", "05.JPG"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="portfolioPage">
      <div className="portfolioTopline">
        <a href={`${basePath}/`} className="backLink">
          ← Start
        </a>

        <span>Portfolio</span>
      </div>

      {projects.map((project) => (
        <section className="portfolioProject" key={project.title}>
          <header className="projectIntroduction">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </header>

          <div className="portfolioImages">
            {project.images.map((image, index) => (
              <img
                key={image}
                src={`${basePath}/images/${project.folder}/${image}`}
                alt={`${project.title}, Illustration ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </section>
      ))}

      <div className="portfolioEnd">
        <a href={`${basePath}/kontakt/`}>Projektanfrage</a>
      </div>
    </div>
  );
}
