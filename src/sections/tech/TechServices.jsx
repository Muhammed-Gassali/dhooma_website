import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import './TechServices.css';

const services = [
  {
    image: '/mobile 1.png',
    title: 'App Development',
    desc: 'Bring your next big idea to life with a feature-rich, powerful mobile app. We deliver customized application development solutions both for iOS and Android tailored to your industry needs.',
  },
  {
    image: '/web app 1.png',
    title: 'Web Development',
    desc: 'Get a custom-designed web application that enhances your online visibility, manages complex data workflows, and attracts the right audience to help grow your business.',
  },
  {
    image: '/wed design 1.jpg',
    title: 'Web Design & Development',
    desc: "The design and user experience of your website are key to retaining visitors and shaping your brand's image. We craft visually compelling, lead-generating websites that reinforce your brand identity.",
  },
  {
    image: '/creative-branding.png',
    title: 'Digital Marketing',
    desc: 'Need marketing magic? Our creative division delivers brand identity design, social media creatives, Meta ads management, motion graphics, and SEO campaigns.',
    isCreativeLink: true
  }
];

export default function TechServices() {
  const navigate = useNavigate();

  return (
    <section className="tech-services-section" id="tech-services">
      <div className="container">
        <ScrollReveal>
          <div className="tech-services-header">
            <span className="tech-services-subtitle">Services</span>
            <h2 className="tech-services-title">
              <span className="grad">Things we can do for you!</span>
            </h2>
            <p className="tech-services-desc">
              We deliver top-quality products using advanced tech to identify challenges and recommend smart solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="tech-services-grid">
          {services.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="tech-service-card">
                {/* Mockup Screen Image Area */}
                <div className="tech-service-card-image-wrap">
                  <img src={s.image} alt={s.title} className="tech-service-card-image" />
                </div>
                {/* Content Area */}
                <div className="tech-service-card-body">
                  <h3 className="tech-service-card-title">{s.title}</h3>
                  <p className="tech-service-card-desc">{s.desc}</p>
                  
                  {s.isCreativeLink && (
                    <button className="tech-btn-primary tech-service-creative-btn" onClick={() => navigate('/creative')} style={{ marginTop: '20px' }}>
                      Visit Dhooma Creative <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
