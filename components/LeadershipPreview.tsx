
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection.tsx';

const LeadershipPreview: React.FC = () => {
  return (
    <section className="py-20 bg-deep-blue-gray text-white">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Leadership</h2>
          <p className="text-lg text-light-neutral/80 max-w-2xl mx-auto mb-12">
            Guided by faith and dedicated to service, our leadership team is committed to the spiritual growth of our congregation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Senior Pastor */}
          <AnimatedSection className="bg-white/5 p-8 rounded-xl border border-white/10">
            <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-dashed border-white/30">
              <span className="text-[10px] opacity-50">[Image]</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Rev. Stephen Karanja</h3>
            <p className="text-gold-accent text-sm uppercase tracking-widest">Senior Pastor</p>
          </AnimatedSection>

          {/* Assistant Pastor 1 */}
          <AnimatedSection className="bg-white/5 p-8 rounded-xl border border-white/10">
            <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-dashed border-white/30">
              <span className="text-[10px] opacity-50">[Image]</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Rev. Moses Omolo</h3>
            <p className="text-gold-accent text-sm uppercase tracking-widest">Assistant Pastor</p>
          </AnimatedSection>

          {/* Assistant Pastor 2 */}
          <AnimatedSection className="bg-white/5 p-8 rounded-xl border border-white/10">
            <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-dashed border-white/30">
              <span className="text-[10px] opacity-50">[Image]</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Julius Ngugi</h3>
            <p className="text-gold-accent text-sm uppercase tracking-widest">Assistant Pastor</p>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <Link 
            to="/leadership" 
            className="inline-block px-10 py-4 border-2 border-gold-accent text-gold-accent font-bold rounded-sm hover:bg-gold-accent hover:text-white transition-all duration-300"
          >
            Meet the Full Team
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeadershipPreview;
