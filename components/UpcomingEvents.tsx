import React from 'react';
import AnimatedSection from './AnimatedSection.tsx';

const events = [
  {
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800',
    title: 'Annual Community BBQ',
    date: 'August 17, 2025',
    description: 'Join us for a day of fun, food, and fellowship with our Limuru neighbors and friends.'
  },
  {
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800',
    title: 'Youth Leadership Camp',
    date: 'September 5-8, 2025',
    description: 'A transformative week of growth, outdoor adventure, and worship for our youth leaders.'
  },
  {
    image: 'https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&q=80&w=800',
    title: 'Harvest Sunday Night',
    date: 'September 28, 2025',
    description: 'An evening dedicated to praise and special worship celebration. All are welcome.'
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    title: 'Marriage & Family Seminar',
    date: 'October 18, 2025',
    description: 'Invest in your most important relationships with biblical insights and practical workshops.'
  },
    {
    image: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&q=80&w=800',
    title: 'Christmas Carol Festival',
    date: 'December 21, 2025',
    description: 'Celebrate the birth of our Savior with beautiful carols, choir performances, and hot cocoa.'
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
                   <a href="#" className="mt-6 flex items-center text-xs font-bold text-deep-blue-gray uppercase tracking-widest group-hover:text-dusty-rose transition-colors duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                   </a>
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