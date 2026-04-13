import { useState } from "react";

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Locations", href: "#" },
    { label: "Products", href: "#" },
    { label: "Machine Types", href: "#" },
    { label: "Who We Are", href: "#" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-md border-b border-gray-200 dark:border-slate-700 bg-[#F2EDEA] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 gap-4">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-wide"
            >
              Seizan
            </a>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-5 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-red-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end gap-3">
            <label className="inline-flex items-center cursor-pointer select-none">
              <span className="mr-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                {theme === "dark" ? "Dark" : "Light"}
              </span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                  className="sr-only"
                />
                <div className="w-14 h-8 bg-gray-300 dark:bg-slate-700 rounded-full border border-gray-300 dark:border-slate-600 transition-colors"></div>
                <div
                  className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white dark:bg-slate-200 shadow transform transition-transform ${theme === "dark" ? "translate-x-6" : ""}`}
                ></div>
              </div>
            </label>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-700 dark:text-gray-200 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu stays same */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-700 transition-colors duration-300">
          <div className="px-2 pt-3 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
