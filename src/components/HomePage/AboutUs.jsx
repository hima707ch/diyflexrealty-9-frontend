import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img id="AboutUs_1" src={images[1]} alt="Our team" className="rounded-xl shadow-2xl" />
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h2 id="AboutUs_2" className="text-4xl font-bold text-gray-900">
              We're More Than Just Real Estate
            </h2>
            <p id="AboutUs_3" className="text-lg text-gray-600">
              With over 15 years of experience in the real estate market, DIY Flex Realty has been helping families find their perfect homes. Our commitment to excellence and customer satisfaction sets us apart.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 id="AboutUs_4" className="text-2xl font-bold text-blue-600">500+</h3>
                <p id="AboutUs_5" className="text-gray-600">Happy Clients</p>
              </div>
              <div className="space-y-2">
                <h3 id="AboutUs_6" className="text-2xl font-bold text-blue-600">1000+</h3>
                <p id="AboutUs_7" className="text-gray-600">Properties Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;