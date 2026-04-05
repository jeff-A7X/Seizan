export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'AI Disclaimer', href: '#' },
    { label: 'Feedback', href: '#' },
  ];

  return (
    <footer className="text-gray-700 py-12 border-t border-gray-200" style={{ backgroundColor: '#F2EDEA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Seizan</h3>
            <p className="text-gray-600 text-sm">
              Premium gashapon experiences with anime plushies and collectible figures.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-red-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>
            <p className="text-gray-600 text-sm mb-2">
              Email: <a href="mailto:info@seizan.jp" className="text-red-500 hover:text-red-600">info@seizan.jp</a>
            </p>
            <p className="text-gray-600 text-sm">
              Phone: <a href="tel:+81-90-1234-5678" className="text-red-500 hover:text-red-600">+81-90-1234-5678</a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {currentYear} Seizan. All rights reserved. Built with passion for collectors.
          </p>
        </div>
      </div>
    </footer>
  );
}
