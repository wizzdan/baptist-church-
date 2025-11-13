
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Giving: React.FC = () => {
  const [amount, setAmount] = useState('50');
  const presetAmounts = ['25', '50', '100', '250'];

  return (
    <section id="give" className="py-20 bg-light-neutral">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-brown-gray mb-4">Support Our Mission</h2>
            <p className="text-lg text-deep-blue-gray mb-6 leading-relaxed">
              Your generous giving enables us to spread the Gospel, support our community, and maintain our ministries. Every gift makes a difference and helps build God's kingdom here in Limuru and beyond. Thank you for your faithfulness.
            </p>
            <p className="text-deep-blue-gray font-semibold">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-deep-blue-gray mb-6 text-center">Give Online</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset)}
                    className={`p-4 rounded-lg text-center font-bold transition-all duration-300 ${
                      amount === preset ? 'bg-deep-blue-gray text-white' : 'bg-gray-200 text-deep-blue-gray hover:bg-gray-300'
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
              <div className="relative mb-6">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-deep-blue-gray font-bold text-lg">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Custom Amount"
                  className="w-full p-4 pl-8 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-warm-brown-gray focus:border-warm-brown-gray transition text-lg"
                />
              </div>
              <button className="w-full bg-warm-brown-gray text-white p-4 rounded-lg text-lg font-bold hover:bg-deep-blue-gray transition-colors duration-300 transform hover:scale-105">
                Give Securely
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Giving;
