import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import hero1Image from "./assets/hero/hero1.png";
import hero2Image from "./assets/hero/hero2.png";
import hero3Image from "./assets/hero/hero3.png";
import ch2Image from "./assets/images/ch2.png";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
    }
    return "light";
  });

  const heroSlides = [hero1Image, hero2Image, hero3Image];
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#F2EDEA] dark:bg-slate-950 transition-colors duration-300">
      <Navbar
        theme={theme}
        toggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />

      {/* Slideshow */}
      <section className="w-full overflow-hidden relative h-[65vh] max-h-[720px]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {heroSlides.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Hero slide ${idx + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/20 dark:bg-slate-950/30 pointer-events-none" />
      </section>

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Seizan (logo)
              </h1>
              <h2 className="text-lg lg:text-xl font-semibold mb-6 text-red-500">
                偉い Gashapon Experience coming to the Netherlands!
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Discover the ultimate anime collectibles and plushies. Every
                pull is a chance to find your favorite characters.
              </p>
              <button className="bg-red-500 hover:bg-red-600 transition-colors text-white font-bold py-3 px-8 rounded-lg max-w-xs">
                Explore Machines
              </button>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-center">
                <img
                  src={ch2Image}
                  alt="Featured Character"
                  className="w-full max-w-md h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
