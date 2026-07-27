const basePath =
  process.env.NODE_ENV === "production"
    ? "/renaquarel-portfolio-test"
    : "";

export default function UeberPage() {
  return (
    <article className="pageShell">
      <a href={`${basePath}/`} className="pageTopline">
        ← Start
      </a>

      <div className="textContent">
        <h1>About</h1>

        <p>
          Hi, I'm Rena Quarel, a children's book illustrator from Germany.
        </p>

        <p>
          My stories explore themes such as belonging, identity, loneliness,
          courage and emotional growth. As a former psychotherapist, I enjoy
          creating picture books that combine warmth, imagination and
          psychological depth.
        </p>

        <p>
          I work with both traditional watercolor and digital illustration and
          am available for author-illustrator projects as well as illustration
          commissions.
        </p>
      </div>
    </article>
  );
}
