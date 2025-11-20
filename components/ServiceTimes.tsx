
import React from 'react';
import AnimatedSection from './AnimatedSection.tsx';

const ServiceTimes: React.FC = () => {
  // Read from environment variable (shimmed in index.html for this no-build setup)
  const mapUrl = process.env.REACT_APP_GOOGLE_MAPS_EMBED_URL;

  return (
    <section id="services" className="py-20 bg-deep-blue-gray text-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-light-neutral mb-4">Join Us in Worship</h2>
            <p className="text-lg text-light-neutral/80 max-w-3xl mx-auto">
            We gather together to praise, pray, and grow in God's word. We would love for you to be our guest.
            </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
                <div className="bg-warm-brown-gray/20 p-8 rounded-lg shadow-xl">
                    <h3 className="text-3xl font-serif font-bold mb-6 text-white border-b-2 border-warm-brown-gray pb-4">Our Services</h3>
                    <div className="space-y-6 text-lg">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">Sunday Morning Worship:</span>
                            <span className="font-light">10:00 AM - 12:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">Mid-Week Fellowship:</span>
                            <span className="font-light">Wednesday, 7:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">Youth Service:</span>
                            <span className="font-light">Friday, 6:00 PM</span>
                        </div>
                         <div className="flex justify-between items-center">
                            <span className="font-semibold">Bible Study:</span>
                            <span className="font-light">Sunday, 9:00 AM</span>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection>
                <div className="overflow-hidden rounded-lg shadow-2xl h-96">
                {mapUrl ? (
                  <iframe
                      src={mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Limuru Town Baptist Church Location"
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <p className="text-gray-400">Map unavailable</p>
                  </div>
                )}
                </div>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;