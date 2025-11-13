
import React from 'react';
import AnimatedSection from './AnimatedSection';

const ServiceTimes: React.FC = () => {
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
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.941908759325!2d36.66014457581177!3d-1.199144935544777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f267c7423347b%3A0xe674e2a868f07611!2sLimuru%20Town%20Baptist%20Church!5e0!3m2!1sen!2ske!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Limuru Town Baptist Church Location"
                ></iframe>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
