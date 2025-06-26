import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import FeaturedProperties from './FeaturedProperties';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';
import useHome from './useHome';

const Body = () => {
  const { properties, loading, error } = useHome();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <AboutUs />
      <FeaturedProperties properties={properties} loading={loading} error={error} />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Body;