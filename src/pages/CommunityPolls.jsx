const polls = [
  {
    title: "[EN] Seizan Community Poll #1",
    description:
      "Our first community poll! Help us shape the future of gashapon in Rotterdam and The Netherlands!",
    href: "https://forms.gle/zfRGBtQPPYDjzK797",
  },
];

export default function CommunityPolls() {
  return (
    <div className="min-h-screen bg-[#F2EDEA] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-14">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Community Polls
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We run regular polls to hear from our community and bring you the
            gashapon experience you want in Rotterdam and beyond.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {polls.map((poll) => (
            <a
              key={poll.href}
              href={poll.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg hover:border-red-300 dark:hover:border-red-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="w-1.5 sm:w-2 flex-shrink-0 bg-red-500" />

              <div className="flex flex-1 items-center justify-between gap-6 p-6 sm:p-8">
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-red-500 transition-colors">
                    {poll.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {poll.description}
                  </p>
                </div>

                <svg
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-red-500 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
