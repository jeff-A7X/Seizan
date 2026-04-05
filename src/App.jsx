import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ch2Image from './assets/images/ch2.png';

function App() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#F2EDEA' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
                Seizan
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-red-500">
                Premium Gashapon Experience
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Discover the ultimate anime collectibles and plushies. Every pull is a chance to find your favorite characters.
              </p>
              <p className="text-base text-gray-600 mb-8">
                With machines across Tokyo and Osaka, find Seizan near you today.
              </p>
              <button className="bg-red-500 hover:bg-red-600 transition-colors text-white font-bold py-3 px-8 rounded-lg max-w-xs">
                Explore Machines
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <img
                  src={ch2Image}
                  alt="Featured Character"
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

  

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;