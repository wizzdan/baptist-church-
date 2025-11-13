
import React from 'react';
import AnimatedSection from './AnimatedSection';

const PastorMessage: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center bg-light-neutral rounded-lg shadow-lg overflow-hidden">
            <div className="w-full md:w-1/3">
              <img 
                src="https://picsum.photos/800/800?random=1" 
                alt="Pastor John Doe" 
                className="object-cover h-64 w-full md:h-full"
              />
            </div>
            <div className="w-full md:w-2/3 p-8 md:p-12">
              <h2 className="text-4xl font-serif font-bold text-warm-brown-gray mb-4">A Message from Our Pastor</h2>
              <p className="text-deep-blue-gray mb-6 leading-relaxed">
                "It is with great joy that I welcome you to our church family's online home. Here at Limuru Town Baptist, we are more than just a congregation; we are a family united in faith and love. Whether you are searching for answers, seeking a spiritual home, or simply curious, know that you are welcome here. We pray that you feel God's presence and the warmth of our community. We can't wait to meet you."
              </p>
              <div className='flex items-center justify-between'>
                <div>
                  <h4 className="text-xl font-semibold text-deep-blue-gray">Rev. John Doe</h4>
                  <p className="text-warm-brown-gray">Senior Pastor</p>
                </div>
                 <a href="#" className="bg-deep-blue-gray text-white px-6 py-2 rounded-full hover:bg-warm-brown-gray transition-colors duration-300">
                    Read More
                 </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PastorMessage;
