
export default function WhoWeAre() {
  const portraitClass =
    "w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-[4/5] object-cover rounded-lg border border-gray-300/50 dark:border-slate-700/50 brightness-[1.02] contrast-[0.88] saturate-90 opacity-[0.94] shadow-sm";

  return (
    <div className="min-h-screen bg-[#F2EDEA] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10 pb-12 sm:pb-14">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center py-6 mb-8 sm:mb-10">
          Who we are
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-0">
          <div className="flex flex-col items-center text-center gap-5 pb-10 md:pb-0 border-b md:border-b-0 border-gray-200 dark:border-slate-800 md:pr-6 lg:pr-10 md:border-r md:border-gray-200 md:dark:border-slate-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Jeffrey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              Jeffrey is the co-founder of Seizan. He is a 2nd year student with a passion for anime games.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-5 pt-10 md:pt-0 md:pl-6 lg:pl-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Sam
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              Sam is the co-founder of Seizan. He is a 2nd year student in computer science and lives priamsingel 263
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
