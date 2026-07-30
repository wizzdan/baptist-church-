import React from 'react';
import AnimatedSection from './AnimatedSection.tsx';
import SEO from './SEO.tsx';
import { Calendar, Users, Heart, Mail, Clock, Music, Award, ShieldCheck, Sparkles, Speaker } from 'lucide-react';
import { Link } from 'react-router-dom';

const pwLeaders = [
  { name: 'Salome Mwakuloba', role: 'Chairperson' },
  { name: 'Peter Muigai', role: 'Vice Chairperson' },
  { name: 'Joseph Kagondu', role: 'Treasurer' },
  { name: 'Keziah Nyambura', role: 'Secretary' },
  { name: 'Jane Kinywa', role: 'Prayer Coordinator' },
];

const pwActivities = [
  {
    title: 'Seminars',
    icon: Award,
    description: 'Equipping and training members to grow in their worship and ministry.',
  },
  {
    title: 'Kesha',
    icon: Sparkles,
    description: 'A time of powerful praise, worship, and fellowship.',
  },
  {
    title: 'Leadership Meetings',
    icon: Users,
    description: 'Regular meetings to plan, pray, and align our ministry.',
  },
  {
    title: 'Team Building/Retreat',
    icon: Heart,
    description: 'Strengthening unity and building stronger relationships as a team.',
  },
  {
    title: 'Prayer and Fasting',
    icon: ShieldCheck,
    description: "Seeking God's guidance, power, and breakthrough together.",
  },
  {
    title: 'Church Public System Buying Project',
    icon: Speaker,
    description: 'Raising funds to acquire quality sound and audio equipment to enhance worship experiences.',
  },
];

const PraiseAndWorship: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-light-neutral min-h-screen">
      <SEO 
        title="Praise & Worship Department" 
        description="Learn about the Praise & Worship Department of Limuru Town Baptist Church, our leadership team, upcoming activities, and how to get involved." 
      />
      
      <div className="container mx-auto px-6">
        {/* Banner / Header */}
        <AnimatedSection className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-gold-accent/40 rounded-full bg-gold-accent/10">
            <Music className="w-4 h-4 text-gold-accent" />
            <span className="text-xs font-bold tracking-widest text-gold-accent uppercase font-sans">
              Limuru Town Baptist Church
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-deep-blue-gray mb-6">
            Praise &amp; Worship Department
          </h1>
          <div className="w-24 h-1 bg-gold-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-warm-brown-gray leading-relaxed font-sans">
            The Praise and Worship Department is dedicated to leading the congregation into God's presence through spirit-filled, Christ-centered worship. We use music, prayer, and creative expressions to glorify God, inspire devotion, and support the spiritual growth of the church. Our team is committed to excellence, unity, and serving with joy and humility.
          </p>
        </AnimatedSection>

        {/* Leadership Section */}
        <AnimatedSection className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-deep-blue-gray uppercase tracking-widest border-b border-gold-accent/30 pb-4 max-w-2xl mx-auto">
              Department Leadership
            </h2>
            <p className="text-warm-brown-gray mt-3 text-sm">
              Meet the dedicated leadership team serving the Praise &amp; Worship Ministry
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pwLeaders.map((leader) => (
              <div 
                key={leader.name}
                className="bg-white p-6 rounded-lg shadow-md border border-black/5 hover:border-gold-accent/40 transition-all duration-300 text-center flex flex-col items-center group"
              >
                <div className="w-20 h-20 rounded-full bg-deep-blue-gray/5 flex items-center justify-center mb-4 text-deep-blue-gray group-hover:bg-gold-accent/20 transition-colors">
                  <Users className="w-9 h-9 text-gold-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-deep-blue-gray mb-1">{leader.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-gold-accent font-sans">{leader.role}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Upcoming Events & Activities Section */}
        <AnimatedSection className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-deep-blue-gray uppercase tracking-widest border-b border-gold-accent/30 pb-4 max-w-2xl mx-auto">
              Upcoming Events &amp; Activities
            </h2>
            <p className="text-warm-brown-gray mt-3 text-sm">
              Join us in our continuous training, worship, prayer, and project initiatives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pwActivities.map((act, idx) => {
              const IconComp = act.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-lg shadow-md border border-black/5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-gold-accent/10 rounded-lg flex items-center justify-center mb-6 text-gold-accent">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-deep-blue-gray mb-3">{act.title}</h3>
                    <p className="text-warm-brown-gray text-sm leading-relaxed mb-4">{act.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Call to Action & Contact */}
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="bg-deep-blue-gray text-white p-10 md:p-14 rounded-2xl shadow-2xl relative overflow-hidden text-center border border-white/10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold-accent/10 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10 space-y-6">
              <div className="inline-flex p-3 bg-white/10 rounded-full mb-2">
                <Music className="w-8 h-8 text-gold-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Join Our Ministry</h2>
              <p className="text-light-neutral/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                We welcome everyone with a heart for worship and a desire to serve! Whether you sing, play an instrument, or support behind the scenes, there is a place for you.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-5 py-3 rounded-full border border-white/15">
                  <Mail className="w-4 h-4 text-gold-accent" />
                  <a href="mailto:limurutownbaptist@gmail.com" className="hover:text-gold-accent transition-colors">
                    limurutownbaptist@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-5 py-3 rounded-full border border-white/15">
                  <Clock className="w-4 h-4 text-gold-accent" />
                  <span>Visit during scheduled rehearsals &amp; meetings</span>
                </div>
              </div>

              <div className="pt-6">
                <Link 
                  to="/#prayer" 
                  className="inline-block px-8 py-3 bg-gold-accent text-deep-blue-gray font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PraiseAndWorship;
