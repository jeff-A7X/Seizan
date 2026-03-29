import "./App.css";
import heroImage from "./assets/bocchi.gif";

function App() {
  return (
    <main className="page">

      <section className="hero">

        {/* LEFT TEXT */}
        <div className="hero-text">
          <h1>Seizan</h1>

          <h2 className="subtitle">
            Gashapon products — Anime Plushies, collectible figures, randomized pulls, and a lot more to come!
          </h2>

          <h2 className="subtitle">
            Under construction
          </h2>
        </div>

        {/* FULL IMAGE AREA */}
        <div className="hero-image">
          <img src={heroImage} alt="Seizan preview" />
        </div>

      </section>

    </main>
  );
}

export default App;