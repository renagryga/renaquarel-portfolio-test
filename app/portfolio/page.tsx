const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

const projects = [
  {
    title: "Der leere Platz",
    href: `${basePath}/portfolio/der-leere-platz/`,
    image: `${basePath}/images/der-leere-platz/01.JPG`,
    alt: "Illustration aus Der leere Platz",
  },
  {
    title: "Storchingo",
    href: `${basePath}/portfolio/storchingo/`,
    image: `${basePath}/images/storchingo/01.JPG`,
    alt: "Illustration aus Storchingo",
  },
  {
    title: "Ausgewählte Illustrationen",
    href: `${basePath}/portfolio/illustrationen/`,
    image: `${basePath}/images/ausgewaehlte-illustrationen/01.JPG`,
    alt: "Ausgewählte Illustration von Rena Quarel",
  },
];

export default function PortfolioPage() {
  return (
    <div className="pageShell portfolioOverview">
      <div className="pageTopline">
        <a href={`${basePath}/`}>← Start</a>
        <span>Portfolio</span>
      </div>

      <div className="projectOverviewList">
        {projects.map((project) => (
          <article className="projectPreview" key={project.title}>
            <a href={project.href}>
              <img src={project.image} alt={project.alt} />
              <h1>{project.title}</h1>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
