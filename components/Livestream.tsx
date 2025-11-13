import React from 'react';
import AnimatedSection from './AnimatedSection';

const Livestream: React.FC = () => {
  return (
    <section id="livestream" className="py-20 bg-deep-black-gray text-white">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-light-neutral mb-4">Watch Our Service Live</h2>
          <p className="text-lg text-light-neutral/80 max-w-3xl mx-auto mb-12">
            Can't join us in person? Worship with us online every Sunday morning, right here.
          </p>
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-black">
            {/* Correct YouTube Embed */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4H2BQZmhrN8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Livestream;