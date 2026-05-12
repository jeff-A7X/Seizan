export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "© 2026 Seizan, Inc." },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-of-use" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Legal Notice", href: "/legal-notice" },
    { label: "AI Disclaimer", href: "/ai-disclaimer" },
    { label: "Feedback", href: "/feedback" },
  ];
            

  return (
    <footer className="text-gray-700 dark:text-gray-300 py-8 border-t border-gray-200 dark:border-slate-700 bg-[#F2EDEA] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {footerLinks.map((link) =>
                link.href ? (
                  <a key={link.label} href={link.href} className="hover:text-red-500 transition-colors">
                    {link.label}
                  </a>
                ) : (
                  <span key={link.label} className="text-sm text-gray-600">
                    {link.label}
                  </span>
                )
              )}
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
}
