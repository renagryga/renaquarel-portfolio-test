export default function Home() {
  return (
    <main
      style={{
        minHeight: "100svh",
        margin: 0,
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      <a
        href="/renaquarel-portfolio-test/portfolio/"
        aria-label="Portfolio von Rena Quarel öffnen"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "520px",
          position: "relative",
          zIndex: 9999,
          cursor: "pointer",
        }}
      >
        <img
          src="/renaquarel-portfolio-test/images/hero/hero-mobile.jpg?v=10"
          alt="Portfolio von Rena Quarel – Illustratorin und Autorin"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "100%",
            height: "auto",
            maxHeight: "calc(100svh - 32px)",
            objectFit: "contain",
            margin: 0,
          }}
        />
      </a>
    </main>
  );
}
