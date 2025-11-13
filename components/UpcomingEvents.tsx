
import React from 'react';
import AnimatedSection from './AnimatedSection';

const events = [
  {
    image: 'https://picsum.photos/400/300?random=2',
    title: 'Annual Community BBQ',
    date: 'August 25, 2024',
    description: 'Join us for a day of fun, food, and fellowship with our neighbors.'
  },
  {
    image: 'https://picsum.photos/400/300?random=3',
    title: 'Youth Summer Camp',
    date: 'September 5-8, 2024',
    description: 'An exciting week of growth, games, and worship for our youth.'
  },
  {
    image: 'https://picsum.photos/400/300?random=4',
    title: 'Worship Night',
    date: 'September 15, 2024',
    description: 'An evening dedicated to praise and worship. All are welcome.'
  },
  {
    image: 'https://picsum.photos/400/300?random=5',
    title: 'Marriage Seminar',
    date: 'October 12, 2024',
    description: 'Invest in your marriage with biblical insights and practical advice.'
  },
    {
    image: 'https://picsum.photos/400/300?random=6',
    title: 'Christmas Carol Service',
    date: 'December 22, 2024',
    description: 'Celebrate the reason for the season with beautiful carols and a message of hope.'
  },
];

const UpcomingEvents: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-light-neutral">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-brown-gray mb-4">Upcoming Events</h2>
          <p className="text-lg text-deep-blue-gray max-w-3xl mx-auto">
            There's always something happening at Limuru Town Baptist Church. Find a place to connect and grow with us.
          </p>
        </AnimatedSection>
        <div className="flex overflow-x-auto space-x-8 pb-8 -mx-6 px-6">
          {events.map((event, index) => (
            <AnimatedSection key={index} className="flex-shrink-0 w-80">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col group transform hover:-translate-y-2 transition-transform duration-300">
                <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-serif font-bold text-deep-blue-gray mb-2">{event.title}</h3>
                  <p className="text-warm-brown-gray font-semibold mb-3">{event.date}</p>
                  <p className="text-deep-blue-gray text-sm flex-grow">{event.description}</p>
                   <a href="#" className="mt-4 self-start bg-warm-brown-gray text-white px-4 py-2 rounded-full group-hover:bg-deep-blue-gray transition-colors duration-300 text-sm">
                    Learn More
                   </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
