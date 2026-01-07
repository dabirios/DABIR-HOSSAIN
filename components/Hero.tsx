
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl font-serif">
              <span className="block">Dabir Hossain</span>
              <span className="block text-blue-600 mt-2">Hospitality Visionary</span>
            </h1>
            <p className="mt-6 text-base text-slate-500 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
              Professional in Hospitality and Hotel Administration with a Swiss Diploma from HTMI Switzerland. 
              Grounded in the values of West Bengal, educated for the global stage. 
              Industrial training completed at 5-star properties like DoubleTree by Hilton, Goa.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
              <a href="#experience" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl">
                View My Work
              </a>
              <a href="mailto:contact@example.com" className="flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition-all">
                Contact Me
              </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden group">
              <img
                className="w-full transform group-hover:scale-105 transition-transform duration-700"
                src="https://raw.githubusercontent.com/ai-gen-images/dabir/main/profile.jpg"
                alt="Dabir Hossain"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://picsum.photos/600/600";
                }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
