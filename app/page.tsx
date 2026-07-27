export default function Home() {
  return (
    <section className="landingPage">
      <a
        href="./portfolio/"
        className="landingCoverLink"
        aria-label="Portfolio öffnen"
      >
        <img
          src="./images/hero/hero.JPG"
          alt="Portfolio von Rena Quarel"
          className="landingCover"
        />
      </a>
    </section>
  );
}
