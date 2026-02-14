import React from 'react';
import AnimatedSection from './AnimatedSection.tsx';

const PastorMessage: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-stretch bg-light-neutral rounded-lg shadow-xl overflow-hidden border border-black/5">
            {/* Image Container */}
            <div className="w-full md:w-1/3 relative">
              <img 
                src="https://res.cloudinary.com/dbphdr1su/image/upload/v1764483499/pastor_karanja_e1h731.jpg" 
                alt="Rev. Karanja" 
                className="w-full h-auto md:h-full object-cover object-top md:object-center transition-transform duration-700 hover:scale-105"
              />
              {/* Optional overlay for a more premium look on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden pointer-events-none"></div>
            </div>
            
            {/* Content Container */}
            <div className="w-full md:w-2/3 p-8 md:p-16 flex flex-col justify-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-gold-accent opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V21H14.017ZM6.01701 21L6.01701 18C6.01701 16.8954 6.91239 16 8.01701 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.01701C6.46473 8 6.01701 8.44772 6.01701 9V11C6.01701 11.5523 5.56929 12 5.01701 12H4.01701V21H6.01701Z" />
                </svg>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue-gray mb-6 leading-tight">A Word From Our <span className="text-gold-accent italic">Pastor</span></h2>
                <p className="text-deep-blue-gray text-lg md:text-xl font-light italic mb-8 leading-relaxed">
                  "It is with great joy that I welcome you to our church family's online home. Here at Limuru Town Baptist, we are more than just a congregation; we are a family united in faith and love. Whether you are searching for answers, seeking a spiritual home, or simply curious, know that you are welcome here. We pray that you feel God's presence and the warmth of our community."
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-black/5">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-deep-blue-gray">Rev. Karanja</h4>
                  <p className="text-gold-accent uppercase tracking-widest text-xs font-bold mt-1">Senior Pastor, Limuru Town Baptist</p>
                </div>
                <a 
                  href="#mission" 
                  className="inline-flex items-center px-6 py-3 bg-deep-blue-gray text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-gold-accent transition-all duration-300"
                >
                  Meet Our Leadership
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PastorMessage;