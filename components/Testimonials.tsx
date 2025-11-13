
import React from 'react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    name: 'Jane K.',
    image: 'https://picsum.photos/100/100?random=11',
    story: "Finding this church felt like coming home. The community is so welcoming, and the messages have truly deepened my faith. I'm so grateful to be part of this family."
  },
  {
    name: 'Michael O.',
    image: 'https://picsum.photos/100/100?random=12',
    story: "The youth ministry has been incredible for my kids. They've found great friends and mentors, and they're excited to go to church every week. It's a blessing."
  },
  {
    name: 'Sarah M.',
    image: 'https://picsum.photos/100/100?random=13',
    story: "I was going through a tough time, and the support and prayers from the church members carried me through. This is truly a place where people care for one another."
  },
  {
    name: 'David L.',
    image: 'https://picsum.photos/100/100?random=14',
    story: "The worship here is powerful and authentic. It helps me connect with God in a profound way every single Sunday. I leave feeling refreshed and inspired."
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-brown-gray mb-4">Stories of Faith</h2>
          <p className="text-lg text-deep-blue-gray max-w-3xl mx-auto">
            Hear from members of our church family about how God is working in their lives.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
                <AnimatedSection key={index}>
                    <div className="bg-light-neutral p-8 rounded-lg shadow-lg h-full flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">
                        <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full flex-shrink-0 object-cover" />
                        <div>
                            <p className="text-deep-blue-gray italic mb-4">"{testimonial.story}"</p>
                            <p className="font-bold font-serif text-warm-brown-gray text-lg">- {testimonial.name}</p>
                        </div>
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
