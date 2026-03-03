
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection.tsx';

const HistoryPreview: React.FC = () => {
  return (
    <section className="py-20 bg-light-neutral">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue-gray mb-6">Our History</h2>
              <p className="text-lg text-warm-brown-gray leading-relaxed mb-8">
                Limuru Town Baptist Church was founded under the leadership of Pastor Vance Kirk Patrick. As the church grew, the need for local leadership arose, and Pastor Tony Njoroge answered the call to serve. The church initially met in a home in Bata Estate within the Bata Shoe Company compound...
              </p>
              <Link 
                to="/history" 
                className="inline-block px-8 py-3 bg-gold-accent text-white font-semibold rounded-sm hover:bg-deep-blue-gray transition-colors duration-300"
              >
                Learn More
              </Link>
            </AnimatedSection>
          </div>
          <div className="md:w-1/2">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-gold-accent/20 rounded-lg"></div>
                <img 
                  src="https://res.cloudinary.com/dbphdr1su/image/upload/v1772543692/church_z1u81u.jpg" 
                  alt="Church History" 
                  className="rounded-lg shadow-xl relative z-10 w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryPreview;
