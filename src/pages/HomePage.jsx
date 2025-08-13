import React from 'react';
import HeroSection from '../sections/HomePage/HeroSection';
import AboutSection from '../sections/HomePage/AboutSection';
import ServicesSection from '../sections/HomePage/ServicesSection';
import InnovationSection from '../sections/HomePage/InnovationSection';
import WhyChooseSection from '../sections/HomePage/WhyChooseSection';
import TestimonialsSection from '../sections/HomePage/TestimonialsSection';
import FAQSection from '../sections/HomePage/FAQSection';
import ContactSection from '../sections/HomePage/ContactSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InnovationSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      {/* Add other sections here as needed */}
    </main>
  );
};

export default HomePage;
