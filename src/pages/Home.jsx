import { useEffect, useState } from "react";
import hero1Image from "../assets/hero/hero1.png";
import hero2Image from "../assets/hero/hero2.png";
import hero3Image from "../assets/hero/hero4.png";
import hero4Image from "../assets/hero/hero5.png";
import hero5Image from "../assets/hero/hero6.png";
import ch2Image from "../assets/images/mascot/final/маскот.png";
import logoHeroDark from "../assets/icons/logoHeroDarkmode.png";
import logoHeroLight from "../assets/icons/logoHeroLightmode.png";
const ELFSIGHT_SCRIPT_ID = "elfsight-platform-script";

export default function Home({ theme }) {
  const heroSlides = [
    hero1Image,
    hero2Image,
    hero3Image,
    hero4Image,
    hero5Image,
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (document.getElementById(ELFSIGHT_SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = ELFSIGHT_SCRIPT_ID;
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full overflow-hidden relative h-[65vh] max-h-[720px] flex items-center justify-center">
        {/* Slide strip */}
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {heroSlides.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Hero slide ${idx + 1}`}
              className="w-full h-full object-cover flex-shrink-0 blur-md"
            />
          ))}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-slate-950/50 pointer-events-none" />

        {/* Sparkle layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Shimmer sweep */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
              animation: "shimmer 3.5s ease-in-out infinite",
            }}
          />

          {/* Twinkling dot particles */}
          {[
            { top: "15%", left: "8%", size: 3, delay: "0s", dur: "2.4s" },
            { top: "72%", left: "14%", size: 2, delay: "0.6s", dur: "3.1s" },
            { top: "30%", left: "25%", size: 4, delay: "1.2s", dur: "2.8s" },
            { top: "55%", left: "38%", size: 2, delay: "0.3s", dur: "2.2s" },
            { top: "20%", left: "52%", size: 3, delay: "1.8s", dur: "3.4s" },
            { top: "80%", left: "60%", size: 2, delay: "0.9s", dur: "2.6s" },
            { top: "42%", left: "73%", size: 4, delay: "0.5s", dur: "2.9s" },
            { top: "10%", left: "82%", size: 2, delay: "1.5s", dur: "3.2s" },
            { top: "65%", left: "88%", size: 3, delay: "0.2s", dur: "2.5s" },
            { top: "35%", left: "95%", size: 2, delay: "1.1s", dur: "3.0s" },
          ].map((s, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                opacity: 0,
                animation: `twinkle ${s.dur} ${s.delay} ease-in-out infinite`,
              }}
            />
          ))}

          {/* 4-point star sparkles */}
          {[
            { top: "22%", left: "18%", delay: "0.4s", dur: "3.2s" },
            { top: "60%", left: "45%", delay: "1.4s", dur: "2.7s" },
            { top: "78%", left: "70%", delay: "0.8s", dur: "3.5s" },
            { top: "18%", left: "65%", delay: "2.0s", dur: "2.9s" },
          ].map((s, i) => (
            <svg
              key={i}
              viewBox="0 0 20 20"
              className="absolute"
              style={{
                top: s.top,
                left: s.left,
                width: 14,
                height: 14,
                opacity: 0,
                animation: `twinkle ${s.dur} ${s.delay} ease-in-out infinite`,
              }}
            >
              <path
                d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z"
                fill="white"
              />
            </svg>
          ))}
        </div>

        {/* Keyframes */}
        <style>{`
          @keyframes shimmer {
            0%   { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0; transform: scale(0.5); }
            50%       { opacity: 0.85; transform: scale(1); }
          }
        `}</style>

        {/* Heading */}
        <div className="relative z-10 text-center">
          <img
            src={theme === "dark" ? logoHeroDark : logoHeroLight}
            alt="Seizan logo"
            className="mx-auto h-40 sm:h-44 lg:h-48 drop-shadow-lg"
          />
          <div className="mt-4 h-1 w-24 bg-red-500 mx-auto" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Seizan
              </h1>
              <h2 className="text-lg lg:text-xl font-semibold mb-6 text-red-500">
                Gashapon Experience coming to the Netherlands!
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
              <img
                src={ch2Image}
                alt="Featured Character"
                className="w-full max-w-md h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Follow us on Instagram
          </h2>

          <p className="mt-2 mb-10 text-red-500 font-semibold">
            @seizancompany
          </p>

          <div className="elfsight-feed mx-auto w-full max-w-6xl flex justify-center overflow-hidden rounded-xl">
            <div
              className="elfsight-app-9533ff22-39ba-4e97-a36a-84b682116350 w-full"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </section>
    </>
  );
}
