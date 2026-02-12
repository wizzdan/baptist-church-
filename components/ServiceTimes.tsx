import React from 'react';
import AnimatedSection from './AnimatedSection.tsx';

const ServiceTimes: React.FC = () => {
  // Use the specific map link provided by the user
  const churchMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.6963654496926!2d36.636665774724115!3d-1.1078914988814659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f27c7218e663d%3A0xa0758bdd40f5d49f!2sLimuru%20Town%20Baptist%20Church!5e1!3m2!1sen!2ske!4v1770806303845!5m2!1sen!2ske";

  return (
    <section id="services" className="py-24 bg-deep-blue-gray text-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-light-neutral mb-4">Join Us in Worship</h2>
            <div className="w-24 h-1 bg-gold-accent mx-auto mb-6"></div>
            <p className="text-lg text-light-neutral/80 max-w-3xl mx-auto">
            We gather together to praise, pray, and grow in God's word. Whether you're a lifelong believer or just curious, our doors are open to you.
            </p>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
            <AnimatedSection className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm shadow-2xl h-full border border-white/10">
                    <h3 className="text-3xl font-serif font-bold mb-8 text-gold-accent">Worship Schedule</h3>
                    <div className="space-y-8">
                        <div className="flex flex-col border-l-4 border-dusty-rose pl-6">
                            <span className="text-sm uppercase tracking-widest text-light-neutral/60 mb-1">Sunday Morning</span>
                            <span className="text-xl font-bold">10:00 AM - 12:00 PM</span>
                            <span className="text-sm text-gold-accent/80 italic mt-1 font-serif">Main Service</span>
                        </div>
                        <div className="flex flex-col border-l-4 border-white/20 pl-6">
                            <span className="text-sm uppercase tracking-widest text-light-neutral/60 mb-1">Wednesday Evening</span>
                            <span className="text-xl font-bold">6:00 PM - 7:30 PM</span>
                            <span className="text-sm text-light-neutral/60 mt-1">Mid-Week Fellowship & Prayers</span>
                        </div>
                        <div className="flex flex-col border-l-4 border-white/20 pl-6">
                            <span className="text-sm uppercase tracking-widest text-light-neutral/60 mb-1">Friday Youth</span>
                            <span className="text-xl font-bold">5:30 PM - 7:00 PM</span>
                            <span className="text-sm text-light-neutral/60 mt-1">Impact Youth Gathering</span>
                        </div>
                         <div className="flex flex-col border-l-4 border-white/20 pl-6">
                            <span className="text-sm uppercase tracking-widest text-light-neutral/60 mb-1">Bible Study</span>
                            <span className="text-xl font-bold">Sunday, 9:00 AM</span>
                            <span className="text-sm text-light-neutral/60 mt-1">Growing together in Word</span>
                        </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <h4 className="font-bold mb-2">Location:</h4>
                        <p className="text-light-neutral/70">Limuru Town, Adjacent to Limuru Police Station, Kiambu County, Kenya.</p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-3">
                <div className="overflow-hidden rounded-sm shadow-2xl h-full min-h-[450px] relative group">
                    <iframe
                        src={churchMapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) invert(0)' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Limuru Town Baptist Church Location"
                        className="absolute inset-0"
                    ></iframe>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;