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
            We gather together to praise, pray, and grow in God's word. Experience our full Sunday program designed for all ages.
            </p>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
            <AnimatedSection className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm shadow-2xl h-full border border-white/10 flex flex-col">
                    <h3 className="text-3xl font-serif font-bold mb-8 text-gold-accent">Sunday Schedule</h3>
                    <div className="space-y-6 flex-grow">
                        <div className="flex flex-col border-l-4 border-dusty-rose pl-6 relative">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-dusty-rose rounded-full border-4 border-deep-blue-gray"></div>
                            <span className="text-[10px] uppercase tracking-widest text-gold-accent mb-1 font-bold">Morning Growth</span>
                            <span className="text-xl font-bold">9:00 AM - 11:00 AM</span>
                            <span className="text-sm text-light-neutral/60 mt-1 font-serif">Bible Study</span>
                        </div>

                        <div className="flex flex-col border-l-4 border-white/20 pl-6 relative">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white/40 rounded-full border-4 border-deep-blue-gray"></div>
                            <span className="text-[10px] uppercase tracking-widest text-gold-accent mb-1 font-bold">Corporate Worship</span>
                            <span className="text-xl font-bold">11:00 AM - 12:00 PM</span>
                            <span className="text-sm text-light-neutral/60 mt-1 font-serif">Main Service</span>
                        </div>

                        <div className="flex flex-col border-l-4 border-white/20 pl-6 relative">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white/40 rounded-full border-4 border-deep-blue-gray"></div>
                            <span className="text-[10px] uppercase tracking-widest text-gold-accent mb-1 font-bold">The Word & Classes</span>
                            <span className="text-xl font-bold">12:00 PM - 1:00 PM</span>
                            <p className="text-sm text-light-neutral/60 mt-1 leading-relaxed italic">
                                Preaching & release of Youths, Teens, and Sunday School to their respective classes.
                            </p>
                        </div>

                        <div className="flex flex-col border-l-4 border-white/20 pl-6 relative">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white/20 rounded-full border-4 border-deep-blue-gray"></div>
                            <span className="text-[10px] uppercase tracking-widest text-gold-accent mb-1 font-bold">Benediction</span>
                            <span className="text-xl font-bold">1:00 PM</span>
                            <span className="text-sm text-light-neutral/60 mt-1 font-serif">Closing of Service</span>
                        </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <h4 className="font-bold mb-2 text-gold-accent text-sm uppercase tracking-widest">Our Location:</h4>
                        <p className="text-light-neutral/70 text-sm">LIMURU TOWN BAPTIST CHURCH, Limuru Town, Kenya.</p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-3">
                <div className="overflow-hidden rounded-sm shadow-2xl h-full min-h-[450px] relative group">
                    <iframe
                        src={churchMapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Limuru Town Baptist Church Location"
                        className="absolute inset-0"
                    ></iframe>
                    <div className="absolute inset-0 bg-deep-blue-gray/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;