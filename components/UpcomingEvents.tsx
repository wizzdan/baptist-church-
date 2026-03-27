import React from 'react';
import AnimatedSection from './AnimatedSection.tsx';

const events = [
  {
    image: 'https://res.cloudinary.com/dbphdr1su/image/upload/v1774607546/Church-Building-Construction-825x475-1-768x442_egptti.jpg',
    title: 'Church Construction Project',
    date: 'Ongoing Activity',
    description: 'Ongoing development and improvement of church facilities to better serve our growing community.'
  },
  {
    image: 'https://res.cloudinary.com/dbphdr1su/image/upload/v1774607545/real-hands-tithes-offering-basket-260nw-2574339591_nf2y98.jpg',
    title: 'Church Construction Harambee',
    date: 'Fundraising Initiative',
    description: 'A special fundraising initiative to support our ongoing construction project. Your contribution builds the future.'
  },
  {
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=800',
    title: 'Group Bible Study',
    date: 'Every Wednesday',
    description: 'Held every Wednesday for fellowship, learning, and spiritual growth as we dive deeper into God\'s word.'
  },
  {
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800',
    title: 'Sunday Service',
    date: 'Every Sunday',
    description: 'Our weekly worship service held every Sunday. Join us for praise, prayer, and a transformative message.'
  },
];

const UpcomingEvents: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-light-neutral">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep-blue-gray mb-4">What's Happening</h2>
          <div className="w-20 h-1 bg-gold-accent mx-auto mb-6"></div>
          <p className="text-lg text-warm-brown-gray max-w-3xl mx-auto">
            Discover a place to belong. We invite you to join us at these upcoming gatherings designed to build community and grow in faith.
          </p>
        </AnimatedSection>
        
        <div className="flex overflow-x-auto space-x-8 pb-12 -mx-6 px-6 no-scrollbar snap-x">
          {events.map((event, index) => (
            <AnimatedSection key={index} className="flex-shrink-0 w-80 snap-center">
              <div className="bg-white rounded-sm shadow-xl overflow-hidden h-full flex flex-col group border border-black/5 hover:border-gold-accent/30 transition-all duration-500">
                <div className="relative overflow-hidden h-48">
                    <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 right-4 bg-dusty-rose text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                        Upcoming
                    </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <span className="text-gold-accent font-bold text-xs uppercase tracking-[0.2em] mb-3">{event.date}</span>
                  <h3 className="text-2xl font-serif font-bold text-deep-blue-gray mb-4 leading-tight">{event.title}</h3>
                  <p className="text-warm-brown-gray text-sm leading-relaxed flex-grow opacity-80">{event.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center mt-8">
            <p className="text-warm-brown-gray/60 text-sm">Scroll for more events &rarr;</p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;