import React from 'react';
import AnimatedSection from './AnimatedSection.tsx';

const ServiceTimes: React.FC = () => {
  // Use the specific map link provided by the user
  const churchMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169.1268389781344!2d36.6383290678729!3d-1.1140620784755837!2m3!1f55.751123287444265!2f45!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x182f27b8458e4c2d%3A0x4f19743fdecafbe5!2sVJPQ%2BMXP%2C%20Kamirithu!5e1!3m2!1sen!2ske!4v1779525117317!5m2!1sen!2ske";

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
                    <h3 className="text-3xl font-serif font-bold mb-8 text-gold-accent">Our Schedules</h3>
                    <div className="space-y-6 flex-grow">
                        {/* Sunday Section */}
                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-gold-accent font-bold mb-4 border-b border-white/10 pb-2">Order of Sunday Service</h4>
                            <div className="space-y-4">
                                <div className="flex flex-col border-l-4 border-dusty-rose pl-4 relative">
                                    <div className="absolute -left-[9px] top-0.5 w-4 h-4 bg-dusty-rose rounded-full border-4 border-deep-blue-gray"></div>
                                    <span className="text-sm font-semibold text-light-neutral/70">Bible Study</span>
                                    <span className="text-lg font-bold">9:30 AM – 10:30 AM</span>
                                </div>
                                <div className="flex flex-col border-l-4 border-dusty-rose pl-4 relative">
                                    <div className="absolute -left-[9px] top-0.5 w-4 h-4 bg-dusty-rose rounded-full border-4 border-deep-blue-gray"></div>
                                    <span className="text-sm font-semibold text-light-neutral/70">Sunday School</span>
                                    <span className="text-lg font-bold">9:30 AM – 11:00 AM</span>
                                </div>
                                <div className="flex flex-col border-l-4 border-gold-accent pl-4 relative">
                                    <div className="absolute -left-[9px] top-0.5 w-4 h-4 bg-gold-accent rounded-full border-4 border-deep-blue-gray"></div>
                                    <span className="text-sm font-semibold text-light-neutral/70">Main Service</span>
                                    <span className="text-lg font-bold">10:30 AM – 12:45 PM</span>
                                </div>
                            </div>
                        </div>

                        {/* Mid-week & Saturday Section */}
                        <div className="pt-4">
                            <h4 className="text-xs uppercase tracking-widest text-gold-accent font-bold mb-4 border-b border-white/10 pb-2">Weekly Activities</h4>
                            <div className="space-y-4">
                                <div className="flex flex-col border-l-4 border-white/30 pl-4 relative">
                                    <div className="absolute -left-[9px] top-0.5 w-4 h-4 bg-white/30 rounded-full border-4 border-deep-blue-gray"></div>
                                    <span className="text-xs uppercase tracking-widest text-gold-accent mb-1 font-bold">Wednesday</span>
                                    <span className="text-sm font-semibold text-light-neutral/70">Prayer Meeting</span>
                                    <span className="text-lg font-bold">5:30 PM – 6:30 PM</span>
                                </div>
                                <div className="flex flex-col border-l-4 border-white/30 pl-4 relative">
                                    <div className="absolute -left-[9px] top-0.5 w-4 h-4 bg-white/30 rounded-full border-4 border-deep-blue-gray"></div>
                                    <span className="text-xs uppercase tracking-widest text-gold-accent mb-1 font-bold">Saturday</span>
                                    <span className="text-sm font-semibold text-light-neutral/70">Youth Meeting</span>
                                    <span className="text-lg font-bold">2:00 PM – 4:00 PM</span>
                                </div>
                            </div>
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