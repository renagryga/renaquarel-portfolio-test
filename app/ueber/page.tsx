const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export default function UeberPage() {
  return (
    <article className="textPage">
      <a href={`${basePath}/`} className="backLink">
        ← Start
      </a>

      <div className="textPageContent">
