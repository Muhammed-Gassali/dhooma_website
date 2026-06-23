import React from 'react';
import { Star, Quote } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Dhoomatech built our logistics tracking mobile app and scalable backend database. The API speed has cut our load delays by 70%, and their devops support has kept our database 100% stable during high traffic periods.",
      author: "Pradeep Nair",
      role: "Operations Director, Singaport Logistics",
      stars: 5,
      type: "tech"
    },
    {
      quote: "The branding redesign and ad campaign management from Dhooma Creative completely transformed our metrics. Our social media user engagement went up by 120% and we saw a immediate reduction in acquisition costs.",
      author: "Sneha Sen",
      role: "Founder, Bloom Organic Skincare",
      stars: 5,
      type: "creative"
    },
    {
      quote: "Working with a team that has both software developers and creative marketing strategists under one roof made our product launch incredibly smooth. They coded the landing portal and executed the lead acquisition funnel flawlessly.",
      author: "Marc Dupont",
      role: "VP of Product, Apex Retail Solutions",
      stars: 5,
      type: "corporate"
    }
  ];

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        {/* Section header */}
        <div className="testimonials-header">
          <h4 className="section-subtitle">Client Feedback</h4>
          <h2 className="section-title">Endorsed by Innovation Leaders.</h2>
          <p className="testimonials-header-desc">
            See how our combined expertise in software engineering and creative advertising has generated tangible results for our clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-3 testimonials-grid">
          {testimonials.map((test, idx) => (
            <GlassCard key={idx} className={`testimonial-card ${test.type}`}>
              {/* Stars & Quote Icon */}
              <div className="card-top-row">
                <div className="stars-row">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} className="star-icon" size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote className="quote-icon" size={24} />
              </div>

              {/* Text */}
              <p className="testimonial-text">"{test.quote}"</p>

              {/* Author details */}
              <div className="testimonial-author">
                <div className="author-details">
                  <h5>{test.author}</h5>
                  <span>{test.role}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
