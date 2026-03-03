
import React from 'react';
import AnimatedSection from './AnimatedSection.tsx';

const History: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-light-neutral min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-serif text-deep-blue-gray mb-8 text-center">Our History</h1>
          <p className="text-lg text-warm-brown-gray mb-12 text-center italic">"From Inception to Present: A Journey of Faith and Community"</p>
        </AnimatedSection>

        <div className="space-y-16">
          {/* Section 1: Our History */}
          <AnimatedSection>
            <div className="bg-white/50 p-8 md:p-12 rounded-2xl shadow-sm border border-white/20">
              <h2 className="text-3xl font-serif text-deep-blue-gray mb-6 flex items-center">
                <span className="bg-dusty-rose text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">1</span>
                Our History
              </h2>
              <div className="space-y-6 text-deep-blue-gray leading-relaxed">
                <p>
                  Limuru Town Baptist Church was founded under the leadership of Pastor Vance Kirk Patrick. As the church grew, the need for local leadership arose, and Pastor Tony Njoroge answered the call to serve. The late Shem Okello also faithfully served as the church’s Music Director.
                </p>
                <p>
                  The church initially met in a home in Bata Estate within the Bata Shoe Company compound. As membership increased, services moved to Limuru Town Primary School. In 1992, the church was successfully allotted land by the government, and through members’ harambee efforts, the current sanctuary was constructed. By 1994, Sunday worship services began in the new church building.
                </p>
                <p>
                  From its early years, the church experienced vibrant growth, particularly because services were conducted in English, serving Limuru’s cosmopolitan community.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Section 2: Season of Transition */}
          <AnimatedSection>
            <div className="bg-white/50 p-8 md:p-12 rounded-2xl shadow-sm border border-white/20">
              <h2 className="text-3xl font-serif text-deep-blue-gray mb-6 flex items-center">
                <span className="bg-dusty-rose text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">2</span>
                Season of Transition & Leadership Development
              </h2>
              <div className="space-y-6 text-deep-blue-gray leading-relaxed">
                <p>
                  In 1996, the church went through a challenging leadership transition. During this period, deacons were appointed to stabilize and guide the church:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-warm-brown-gray font-medium">
                  <li>James Esendi</li>
                  <li>Josephine Wanjiku</li>
                  <li>Ruth Kamau</li>
                  <li>Stephen Karanja</li>
                </ul>
                <p>
                  After theological training at Kenya Baptist Theological College (KBTC), they were ordained in 1999.
                </p>
                <p>
                  Several ministers supported the church during this time, helping maintain spiritual growth and unity.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Section 3: Pastoral Leadership Journey */}
          <AnimatedSection>
            <div className="bg-white/50 p-8 md:p-12 rounded-2xl shadow-sm border border-white/20">
              <h2 className="text-3xl font-serif text-deep-blue-gray mb-6 flex items-center">
                <span className="bg-dusty-rose text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl">3</span>
                Pastoral Leadership Journey
              </h2>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-gold-accent/30 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gold-accent shadow-sm"></div>
                    <h3 className="text-xl font-bold text-deep-blue-gray">Rev. Faustin Ntamushombora (2001–2007)</h3>
                    <p className="text-warm-brown-gray mt-1">Brought stability and strong spiritual growth.</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gold-accent shadow-sm"></div>
                    <h3 className="text-xl font-bold text-deep-blue-gray">Pastor James Esendi</h3>
                    <p className="text-warm-brown-gray mt-1">Served briefly after Rev. Faustin.</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gold-accent shadow-sm"></div>
                    <h3 className="text-xl font-bold text-deep-blue-gray">Late Rev. Wallace Thaiya (2006–2007)</h3>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gold-accent shadow-sm"></div>
                    <h3 className="text-xl font-bold text-deep-blue-gray">Rev. Stephen Karanja (2007 – Present)</h3>
                    <p className="text-warm-brown-gray mt-1">Current Senior Pastor. Under his leadership, the church continues to grow and serve faithfully.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default History;
