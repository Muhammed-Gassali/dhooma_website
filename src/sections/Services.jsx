import React from 'react';
import { Smartphone, Monitor, Layers, Cpu, Server, Shield, Sparkles, Megaphone, Palette, Share2, Search, FileText } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import './Services.css';

export default function Services({ activeDivision, setActiveDivision }) {
  const techServices = [
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description: "Custom native and cross-platform mobile apps engineered with React Native, Swift, and Kotlin for optimal user experiences."
    },
    {
      icon: <Monitor size={24} />,
      title: "Web App Development",
      description: "Scalable, secure single-page web applications and interactive admin portals developed with React, Next.js, and TypeScript."
    },
    {
      icon: <Layers size={24} />,
      title: "Custom Software Solutions",
      description: "Tailor-made software architectures engineered to address your company's unique operational bottlenecks and automate workflows."
    },
    {
      icon: <Cpu size={24} />,
      title: "Backend & API Development",
      description: "High-performance microservices, RESTful and GraphQL APIs built using Node.js, Go, and Python with optimal database indexing."
    },
    {
      icon: <Server size={24} />,
      title: "Server & DevOps Support",
      description: "Cloud management, server migration, Docker containers orchestration, and continuous maintenance on AWS, GCP, and Azure."
    },
    {
      icon: <Shield size={24} />,
      title: "Redesign & Modernization",
      description: "Migration of legacy software databases, security audits, accessibility compliance, and speed optimization updates."
    }
  ];

  const creativeServices = [
    {
      icon: <Palette size={24} />,
      title: "Branding & Visual Identity",
      description: "Stunning logo design, brand guidelines, typography systems, and print collateral that project premium market leadership."
    },
    {
      icon: <Megaphone size={24} />,
      title: "Meta Ads Management",
      description: "Targeted advertising strategies and pixel optimization across Facebook and Instagram to scale conversion rates."
    },
    {
      icon: <Share2 size={24} />,
      title: "Social Media Creatives",
      description: "Eye-catching custom illustrations, event banners, and video motion graphics custom-designed to boost user engagement."
    },
    {
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description: "Keyword mapping, site index speed boosts, structured data schema inserts, and audit logs to skyrocket Google rankings."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Digital Marketing Campaigns",
      description: "Funnel architecture, growth loops setup, and multi-channel campaign executions custom-designed to acquire leads."
    },
    {
      icon: <FileText size={24} />,
      title: "Content & Copywriting Strategy",
      description: "High-conversion sales copy, landing page structure copywriting, and consistent social media content planning."
    }
  ];

  const services = activeDivision === 'tech' ? techServices : creativeServices;

  return (
    <section className="section services-section" id="services">
      <div className="container">
        {/* Section header */}
        <div className="services-header">
          <h4 className="section-subtitle">Our Services</h4>
          <h2 className="section-title">Engineered Capabilities.</h2>
          <p className="services-header-desc">
            We provide comprehensive services categorized across our two major branches. Select a tab below to switch listings.
          </p>

          {/* Division Tabs Switcher inside section */}
          <div className="services-tabs">
            <button
              onClick={() => setActiveDivision('tech')}
              className={`services-tab-btn ${activeDivision === 'tech' ? 'active tech' : ''}`}
            >
              Dhoomatech (Software & Technology)
            </button>
            <button
              onClick={() => setActiveDivision('creative')}
              className={`services-tab-btn ${activeDivision === 'creative' ? 'active creative' : ''}`}
            >
              Dhooma Creative (Digital Marketing)
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid-3 services-grid">
          {services.map((service, idx) => (
            <GlassCard key={`${activeDivision}-${idx}`} className="service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
