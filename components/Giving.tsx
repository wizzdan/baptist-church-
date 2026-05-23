import React from 'react';
import AnimatedSection from './AnimatedSection.tsx';

const Giving: React.FC = () => {
  // Church specific M-Pesa details
  const paybillNumber = "522533"; 
  const accounts = [
    { label: "Offering", code: "5611634#Of" },
    { label: "Tithe", code: "5611634#Th" },
    { label: "Benevolence", code: "5611634#Bev" }
  ];

  return (
    <section id="give" className="py-24 bg-light-neutral">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection className="space-y-8">
            <div>
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
            </div>

            {/* General Bank Direct Deposit Card */}
            <div className="bg-white p-6 rounded-sm shadow-md border border-black/5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-deep-blue-gray mb-3 flex items-center">
                <span className="w-2.5 h-2.5 bg-gold-accent rounded-full mr-2"></span>
                Give via Bank
              </h4>
              <p className="text-sm text-warm-brown-gray leading-relaxed mb-4">
                KCB Limuru branch is available for direct Tithe and Offering deposits:
              </p>
              <div className="p-4 bg-light-neutral/50 border border-black/5 rounded-sm space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-warm-brown-gray">Bank & Branch:</span>
                  <span className="font-semibold text-deep-blue-gray">KCB Limuru</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-warm-brown-gray">Account Number:</span>
                  <span className="font-mono font-bold text-gold-accent">1351189883</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="space-y-8">
            {/* M-Pesa Giving Card */}
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl border border-black/5 relative overflow-hidden">
              {/* Subtle M-Pesa Branding Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/5 rounded-full -mr-16 -mt-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-deep-blue-gray mb-2 text-center">M-Pesa Giving</h3>
                <p className="text-warm-brown-gray text-center text-sm mb-10">Simple and secure via your mobile phone</p>
                
                <div className="space-y-6">
                  {/* Paybill Card */}
                  <div className="flex flex-col items-center justify-center p-6 bg-light-neutral/50 rounded-sm border border-gold-accent/20 group hover:border-gold-accent/50 transition-colors">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-warm-brown-gray mb-2 font-bold">Paybill Number</span>
                    <span className="text-4xl md:text-5xl font-serif font-bold text-deep-blue-gray tracking-tighter">
                      {paybillNumber}
                    </span>
                  </div>

                  {/* Accounts List */}
                  <div className="bg-light-neutral/30 rounded-sm border border-black/5 p-6">
                    <span className="block text-center text-[10px] uppercase tracking-[0.3em] text-warm-brown-gray mb-4 font-bold">Account Designations</span>
                    <div className="space-y-3">
                      {accounts.map((acc, idx) => (
                        <div key={idx} className="flex justify-between items-center pb-2 border-b border-black/15 last:border-0 last:pb-0">
                          <span className="text-sm font-medium text-warm-brown-gray">{acc.label}</span>
                          <span className="text-md font-mono font-bold text-deep-blue-gray">{acc.code}</span>
                        </div>
                      ))}
                    </div>
                    {/* Benevolence Note */}
                    <div className="mt-4 pt-3 border-t border-black/10 text-center">
                      <p className="text-xs text-dusty-rose font-medium">
                        Benevolence — KCB Limuru A/C: 1282970305
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-black/5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-deep-blue-gray mb-4 text-center">How to Give:</h4>
                  <ol className="text-sm text-warm-brown-gray space-y-3 max-w-md mx-auto">
                    <li className="flex items-start"><span className="font-bold text-gold-accent mr-3">1.</span> Go to M-Pesa Menu & select Lipa na M-Pesa</li>
                    <li className="flex items-start"><span className="font-bold text-gold-accent mr-3">2.</span> Select Pay Bill & enter <strong>{paybillNumber}</strong></li>
                    <li className="flex items-start"><span className="font-bold text-gold-accent mr-3">3.</span> For Account, enter the <strong>specific code</strong> for your gift (e.g., {accounts[0].code})</li>
                    <li className="flex items-start"><span className="font-bold text-gold-accent mr-3">4.</span> Enter amount and your M-Pesa PIN</li>
                  </ol>
                </div>
                
                <p className="mt-8 text-center text-[10px] text-warm-brown-gray font-medium uppercase tracking-widest opacity-60">
                  May God bless you for your kindness
                </p>
              </div>
            </div>

            {/* Development Fund Card */}
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl border border-black/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-accent/5 rounded-full -mr-12 -mt-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-deep-blue-gray mb-2 text-center">Development Fund</h3>
                <p className="text-warm-brown-gray text-center text-sm mb-6">Support ongoing building, constructions, and improvements of church facilities</p>
                
                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  {/* Option 1: M-Pesa Paybill */}
                  <div className="bg-light-neutral/50 p-5 rounded-sm border border-gold-accent/20 flex flex-col justify-between">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-warm-brown-gray font-bold mb-3">M-Pesa Paybill</span>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-warm-brown-gray">Paybill:</span>
                          <span className="font-bold text-deep-blue-gray">522533</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-warm-brown-gray">Account:</span>
                          <span className="font-mono font-bold text-gold-accent">8078764</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Option 2: Bank Deposit */}
                  <div className="bg-light-neutral/50 p-5 rounded-sm border border-black/5 flex flex-col justify-between">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-warm-brown-gray font-bold mb-3">Bank Deposit</span>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-warm-brown-gray">Bank:</span>
                          <span className="font-bold text-deep-blue-gray">KCB Limuru</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-warm-brown-gray">A/C:</span>
                          <span className="font-mono font-bold text-gold-accent">1351189883</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Giving;
