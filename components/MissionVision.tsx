
import React from 'react';
import AnimatedSection from './AnimatedSection';

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" /></svg>
    ),
    title: 'Our Mission',
    description: 'To share the transformative love of Christ and make disciples of all nations, starting in our community.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
    title: 'Our Vision',
    description: 'To be a beacon of hope, a family of believers deeply rooted in faith, and a center for spiritual growth and community service.',
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    title: 'Our Community',
    description: 'Fostering a welcoming environment where everyone can find belonging, support, and a place to serve.',
  },
];

const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-brown-gray mb-4">Our Purpose</h2>
            <p className="text-lg text-deep-blue-gray max-w-3xl mx-auto mb-16">
            We are guided by a clear mission and a compelling vision for what God has called us to be.
            </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <AnimatedSection key={index}>
              <div className="text-warm-brown-gray mx-auto mb-4">{value.icon}</div>
              <h3 className="text-2xl font-serif text-deep-blue-gray font-semibold mb-2">{value.title}</h3>
              <p className="text-deep-blue-gray leading-relaxed">{value.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
