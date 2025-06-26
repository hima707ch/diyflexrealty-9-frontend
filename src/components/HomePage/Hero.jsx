import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-800 min-h-[90vh]">
      <div className="absolute inset-0">
        <svg className="absolute right-0 top-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center">
        <div className="w-full md:w-1/2 space-y-8 animate-fade-in-up">
          <h1 id="Hero_1" className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Find Your Dream</span>
            <div className="animate-slide-up mt-2">Home</div>
          </h1>
          <p id="Hero_2" className="text-blue-100 text-xl max-w-lg">
            Discover the perfect property that matches your lifestyle with our comprehensive real estate solutions.
          </p>
          <div className="flex space-x-4">
            <button id="Hero_3" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
              Get Started
            </button>
            <button id="Hero_4" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="hidden md:block w-1/2">
          <img id="Hero_5" src={images[0]} alt="Modern home" className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500" />
        </div>
      </div>
    </div>
  );
};

export default Hero;