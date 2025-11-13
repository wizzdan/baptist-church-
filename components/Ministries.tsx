
import React from 'react';
import AnimatedSection from './AnimatedSection';

const ministries = [
  {
    name: 'Children\'s Ministry',
    image: 'https://picsum.photos/500/350?random=7',
    description: 'Nurturing the next generation in faith with fun, engaging, and age-appropriate teaching.'
  },
  {
    name: 'Youth Ministry',
    image: 'https://picsum.photos/500/350?random=8',
    description: 'Empowering teenagers to build a strong faith foundation and navigate life\'s challenges.'
  },
  {
    name: 'Worship Team',
    image: 'https://picsum.photos/500/350?random=9',
    description: 'Leading the congregation into God\'s presence through music and song.'
  },
  {
    name: 'Community Outreach',
    image: 'https://picsum.photos/500/350?random=10',
    description: 'Serving our neighbors and sharing the love of Christ through practical acts of kindness.'
  },
];

const Ministries: React.FC = () => {
  return (
    <section id="ministries" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-brown-gray mb-4">Our Ministries</h2>
          <p className="text-lg text-deep-blue-gray max-w-3xl mx-auto">
            Find your place to serve and grow. We have a variety of ministries for all ages and passions.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry, index) => (
            <AnimatedSection key={index}>
              <div className="rounded-lg overflow-hidden shadow-lg group relative h-96">
                <img src={ministry.image} alt={ministry.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-teal-accent bg-opacity-70 transition-opacity duration-300 group-hover:bg-opacity-80"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">{ministry.name}</h3>
                    <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full transition-all duration-500 ease-in-out">{ministry.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
