import React from 'react';
import GlassCard from '../components/GlassCard';
import './Team.css';

export default function Team() {
  const crew = [
    {
      name: "Rohit Nair",
      role: "Chief Executive Officer",
      division: "Corporate",
      desc: "Architecting corporate strategies, aligning technology stacks, and leading commercial partnerships.",
      avatarColor: "#8b5cf6",
      initials: "RN"
    },
    {
      name: "Aditya Kumar",
      role: "Lead Software Architect",
      division: "Dhoomatech",
      desc: "Overseeing custom database patterns, API frameworks, security integrations, and cloud services.",
      avatarColor: "#06b6d4",
      initials: "AK"
    },
    {
      name: "Sarah Fernandes",
      role: "Creative Director",
      division: "Dhooma Creative",
      desc: "Guiding brand transformations, visual collateral design systems, and digital advertising aesthetics.",
      avatarColor: "#ec4899",
      initials: "SF"
    },
    {
      name: "Vikram Sen",
      role: "Digital Campaign Strategist",
      division: "Dhooma Creative",
      desc: "Optimizing Meta pixel integrations, search indexing pipelines, and advertising conversions.",
      avatarColor: "#f59e0b",
      initials: "VS"
    }
  ];

  return (
    <section className="section team-section" id="team">
      <div className="container">
        {/* Section header */}
        <div className="team-header">
          <h4 className="section-subtitle">Our Crew</h4>
          <h2 className="section-title">The Minds Behind the Magic.</h2>
          <p className="team-header-desc">
            A cohesive squad of software engineers, visual designers, server managers, and brand strategists collaborating to scale your enterprise.
          </p>
        </div>

        {/* Crew Grid */}
        <div className="grid-3 team-grid">
          {crew.map((member, idx) => (
            <GlassCard key={idx} className="crew-card">
              {/* Profile Avatar shape */}
              <div className="crew-avatar-container">
                <div 
                  className="crew-avatar"
                  style={{
                    backgroundColor: member.avatarColor,
                    boxShadow: `0 0 20px ${member.avatarColor}33`
                  }}
                >
                  <span className="avatar-initials">{member.initials}</span>
                </div>
                <span className={`crew-div-badge ${member.division.toLowerCase().replace(' ', '-')}`}>
                  {member.division}
                </span>
              </div>

              {/* Profile details */}
              <div className="crew-details">
                <h3>{member.name}</h3>
                <span className="crew-role">{member.role}</span>
                <p className="crew-desc">{member.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
