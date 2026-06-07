import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import Products from "./pages/Products";
import MachineTypes from "./pages/MachineTypes";
import WhoWeAre from "./pages/WhoWeAre";
import CommunityPolls from "./pages/CommunityPolls";
import AIDisclaimer from "./pages/AIDisclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Feedback from "./pages/Feedback";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F2EDEA] dark:bg-slate-950 transition-colors duration-300">
      <Navbar
        theme={theme}
        toggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/products" element={<Products />} />
          <Route path="/machine-types" element={<MachineTypes />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/community-polls" element={<CommunityPolls />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-disclaimer" element={<AIDisclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;