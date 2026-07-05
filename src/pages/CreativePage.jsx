import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../sections/creative/CreativeShared.css';
import Footer from '../components/Footer';

import CreativeHero from '../sections/creative/CreativeHero';
import CreativeReel from '../sections/creative/CreativeReel';
import CreativeServices from '../sections/creative/CreativeServices';
import CreativeStats from '../sections/creative/CreativeStats';
import CreativeTestimonials from '../sections/creative/CreativeTestimonials';
import CreativeContact from '../sections/creative/CreativeContact';

const pageStyle = {
  background: 'var(--creative-bg)',
  minHeight: '100vh',
};

export default function CreativePage() {
  useEffect(() => {
    document.title = 'Dhooma Creative — Bold Design. Real Results.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Dhooma Creative delivers brand identity design, social media creatives, Meta ads management, motion graphics, and SEO campaigns that make brands impossible to ignore.';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={pageStyle} className="fade-in-page">
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <CreativeHero />
        <CreativeReel />
        <CreativeServices />
        <CreativeStats />
        <CreativeTestimonials />
        <CreativeContact />
      </main>
      <Footer />
    </div>
  );
}
