import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 text-orange-300 text-8xl">🕉️</div>
        <div className="absolute top-40 right-20 w-24 h-24 text-red-300 text-6xl">🪷</div>
        <div className="absolute bottom-40 left-32 w-20 h-20 text-yellow-400 text-4xl">✨</div>
        <div className="absolute bottom-20 right-32 w-28 h-28 text-orange-300 text-7xl">🕉️</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 mb-4">
                കുന്നത്ത് ശ്രീ 
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
                ഭഗവതി ക്ഷേത്രം
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              ദൈവിക അനുഗ്രഹങ്ങളുടെ ഒരു പവിത്രമായ വാസസ്ഥലം, അവിടെ ഭക്തി ദൈവത്വത്തെ കണ്ടുമുട്ടുകയും ഹൃദയങ്ങൾ ശാശ്വത സമാധാനം കണ്ടെത്തുകയും ചെയ്യുന്നു.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                ക്ഷേത്രം സന്ദർശിക്കുക
              </button>
              <button className="px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300">
                കൂടുതലറിയുക
              </button>
            </div>
          </div>

          {/* Right Content - Temple Image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://templesofkerala.org/kozhikode/img/157.jpg"
                alt="Temple Architecture"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;