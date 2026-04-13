export default function Contact() {
  return (
    <div className="flex items-center justify-center px-4 py-48">
      <div className="text-center">

        <p className="text-xl font-mono text-gray-400 dark:text-gray-600 tracking-widest mb-6">
          contact
        </p>

        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8 tracking-tight">
          Need Help?
        </h1>

        <a
          href="mailto:contact@seizan.nl"
          className="font-mono text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 underline underline-offset-4 decoration-dotted"
        >
          contact@seizan.nl
        </a>

      </div>
    </div>
  );
}
