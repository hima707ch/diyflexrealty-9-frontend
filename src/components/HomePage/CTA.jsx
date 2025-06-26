import React from 'react';
import images from '../assets/images';

const CTA = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 id="CTA_1" className="text-4xl font-bold text-white">
            Ready to Find Your Dream Home?
          </h2>
          <p id="CTA_2" className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied homeowners who found their perfect property with DIY Flex Realty.
          </p>
          <div className="flex justify-center space-x-4">
            <button id="CTA_3" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
              Start Your Search
            </button>
            <button id="CTA_4" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Contact an Agent
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;