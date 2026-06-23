import React, { useState, useEffect } from 'react';

// Shell components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeBackground from './components/ThemeBackground';
import CursorAurora from './components/CursorAurora';

// Page sections
import Hero from './sections/Hero';
import About from './sections/About';
import VisionMission from './sections/VisionMission';
import DivisionShowcase from './sections/DivisionShowcase';
import Services from './sections/Services';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function App() {
  // Global active division state ('tech' or 'creative')
  const [activeDivision, setActiveDivision] = useState('tech');

  // Dynamically sync theme variables whenever division state changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeDivision);
  }, [activeDivision]);

  // Global Scroll Observer to automatically switch active division theme as user scrolls
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section occupies center viewport
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          
          if (sectionId === 'hero') {
            // Hero tracks hover state, so no override here
            return;
          }
          
          if (sectionId === 'showcase') {
            // Showcase is a split screen, keep active division
            return;
          }

          // Section specific mappings
          if (sectionId === 'services') {
            // Handled by Services tab state
            return;
          }

          // You can map other corporate sections to themes or alternate
          if (sectionId === 'about' || sectionId === 'team') {
            setActiveDivision('tech');
          } else if (sectionId === 'vision' || sectionId === 'testimonials') {
            setActiveDivision('creative');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sectionsToObserve = ['hero', 'about', 'showcase', 'vision', 'services', 'team', 'testimonials', 'contact'];
    
    sectionsToObserve.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Premium Dynamic Blurred Grid/Blob Background */}
      <ThemeBackground activeDivision={activeDivision} />

      {/* Cursor-following aurora glow — sits above background, below UI */}
      <CursorAurora activeDivision={activeDivision} />

      {/* Sticky Header Nav Shell */}
      <Navbar activeDivision={activeDivision} setActiveDivision={setActiveDivision} />

      {/* Main Content Layout */}
      <main>
        {/* 1. Hero Section */}
        <Hero activeDivision={activeDivision} setActiveDivision={setActiveDivision} />

        {/* 2. Company Introduction (About) */}
        <About />

        {/* 3. Two Division Showcase (Interactive Gateway) */}
        <DivisionShowcase activeDivision={activeDivision} setActiveDivision={setActiveDivision} />

        {/* 4. Vision, Mission & Values */}
        <VisionMission />

        {/* 5. Services Section */}
        <Services activeDivision={activeDivision} setActiveDivision={setActiveDivision} />

        {/* 6. Crew Members Section */}
        <Team />

        {/* 7. Testimonials Section */}
        <Testimonials />

        {/* 8. Contact Section */}
        <Contact activeDivision={activeDivision} />
      </main>

      {/* Corporate footer */}
      <Footer activeDivision={activeDivision} />
    </>
  );
}
