import React from 'react';
import AnimatedSection from './AnimatedSection.tsx';

const Giving: React.FC = () => {
  // Common placeholders - these can be easily updated to the actual church numbers
  const paybillNumber = "123456"; 
  const accountNumber = "OFFERING,THANKS GIVING,SEED";

  return (
    <section id="give" className="py-24 bg-light-neutral">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="inline-block px-4 py-1 mb-4 border border-gold-accent/30 rounded-full bg-gold-accent/5">
                <span className="text-[10px] font-bold tracking-widest text-gold-accent uppercase font-sans">Generosity</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep-blue-gray mb-6">Support Our Mission</h2>
            <p className="text-lg text-warm-brown-gray mb-8 leading-relaxed max-w-xl">
              Your generous giving enables us to spread the Gospel, support our community, and maintain our ministries. Every gift makes a difference and helps build God's kingdom here in Limuru and beyond.
            </p>
            <div className="bg-white/50 p-6 border-l-4 border-gold-accent italic text-deep-blue-gray font-serif text-lg shadow-sm">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." 
              <span className="block mt-2 font-sans font-bold text-xs not-italic uppercase tracking-widest text-gold-accent">— 2 Corinthians 9:7</span>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl border border-black/5 relative overflow-hidden">
              {/* Subtle M-Pesa Branding Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/5 rounded-full -mr-16 -mt-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-deep-blue-gray mb-2 text-center">M-Pesa Giving</h3>
                <p className="text-warm-brown-gray text-center text-sm mb-10">Simple and secure via your mobile phone</p>
                
                <div className="space-y-6">
                  <div className="flex flex-col items-center justify-center p-6 bg-light-neutral/50 rounded-sm border border-gold-accent/20 group hover:border-gold-accent/50 transition-colors">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-warm-brown-gray mb-2 font-bold">Paybill Number</span>
                    <span className="text-4xl md:text-5xl font-serif font-bold text-deep-blue-gray tracking-tighter">
                      {paybillNumber}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-6 bg-light-neutral/50 rounded-sm border border-gold-accent/20 group hover:border-gold-accent/50 transition-colors">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-warm-brown-gray mb-2 font-bold">Account Name</span>
                    <span className="text-2xl md:text-3xl font-serif font-bold text-deep-blue-gray uppercase tracking-tight">
                      {accountNumber}
                    </span>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-black/5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-deep-blue-gray mb-4 text-center">How to Give:</h4>
                  <ol className="text-sm text-warm-brown-gray space-y-3 max-w-xs mx-auto">
                    <li className="flex items-start"><span className="font-bold text-gold-accent mr-3">1.</span> Go to M-Pesa Menu & select Lipa na M-Pesa</li>
                    <li className="flex items-start"><span className="font-bold text-gold-accent mr-3">2.</span> Select Pay Bill & enter <strong>{paybillNumber}</strong></li>
                    <li className="flex items-start"><span className="font-bold text-gold-accent mr-3">3.</span> Enter <strong>{accountNumber}</strong> as Account Name</li>
                    <li className="flex items-start"><span className="font-bold text-gold-accent mr-3">4.</span> Enter amount and your M-Pesa PIN</li>
                  </ol>
                </div>
                
                <p className="mt-8 text-center text-[10px] text-warm-brown-gray font-medium uppercase tracking-widest opacity-60">
                  May God bless you for your kindness
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Giving;