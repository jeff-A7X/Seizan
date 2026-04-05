import heroImage from "./assets/bocchi.gif";

function App() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-16 py-12 gap-10">
        <div className="flex-1 flex flex-col justify-center max-w-2xl text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">Seizan</h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-100 mb-4">
            Gashapon products — Anime Plushies, collectible figures, randomized pulls, and a lot more to come!
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-slate-300">
            Under construction
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center max-w-3xl w-full">
          <img
            className="w-full max-w-xl h-auto object-contain opacity-90"
            src={heroImage}
            alt="Seizan preview"
          />
        </div>
      </section>
    </main>
  );
}

export default App;