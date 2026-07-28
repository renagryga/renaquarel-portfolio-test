"use client";

export default function Home() {
  function openPortfolio() {
    window.location.assign(
      "/renaquarel-portfolio-test/portfolio/"
    );
  }

  return (
    <main
      style={{
        minHeight: "100svh",
        margin: 0,
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <button
        type="button"
        onClick={openPortfolio}
        aria-label="Portfolio von Rena Quarel öffnen"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "520px",
          margin: 0,
          padding: 0,
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        <img
          src="/renaquarel-portfolio-test/images/hero/hero-mobile.jpg?v=30"
          alt="Portfolio von Rena Quarel – Illustratorin und Autorin"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            maxHeight: "calc(100svh - 32px)",
            objectFit: "contain",
          }}
        />
      </button>
    </main>
  );
}
