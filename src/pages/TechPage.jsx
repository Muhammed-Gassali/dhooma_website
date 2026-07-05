import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../sections/tech/TechShared.css';
import Footer from '../components/Footer';

import TechHero from '../sections/tech/TechHero';
import TechStats from '../sections/tech/TechStats';
import WhoWeAre from '../sections/tech/WhoWeAre';
import TechServices from '../sections/tech/TechServices';
import TechProcess from '../sections/tech/TechProcess';
import TechStack from '../sections/tech/TechStack';
import TechTestimonials from '../sections/tech/TechTestimonials';
import TechContact from '../sections/tech/TechContact';

/* Page-level body background */
const pageStyle = {
  background: 'var(--tech-bg)',
  minHeight: '100vh',
};

export default function TechPage() {
  useEffect(() => {
    document.title = 'Dhoomatech — Engineering the Digital Future';
    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Dhoomatech builds scalable mobile apps, web applications, custom software, and cloud infrastructure for businesses from startup to enterprise.';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={pageStyle} className="fade-in-page">
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <TechHero />
        <TechStats />
        <WhoWeAre />
        <TechServices />
        <TechProcess />
        <TechStack />
        <TechTestimonials />
        <TechContact />
      </main>
      <Footer />
    </div>
  );
}
