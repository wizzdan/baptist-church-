
import React from 'react';
import SEO from './SEO.tsx';
import AnimatedSection from './AnimatedSection.tsx';

interface LeaderProps {
  name: string;
  role: string;
  imageUrl?: string;
}

const LeaderCard: React.FC<LeaderProps> = ({ name, role, imageUrl }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white/40 rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300 group">
    <div className="w-48 h-48 bg-deep-blue-gray/10 rounded-full flex items-center justify-center mb-6 border-2 border-dashed border-deep-blue-gray/20 relative overflow-hidden">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      ) : (
        <span className="text-deep-blue-gray/40 font-medium text-sm">[Leader Image Here]</span>
      )}
      <div className="absolute inset-0 bg-gold-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <h3 className="text-xl font-bold text-deep-blue-gray mb-1">{name}</h3>
    <p className="text-dusty-rose font-medium text-sm uppercase tracking-widest">{role}</p>
  </div>
);

const Leadership: React.FC = () => {
  const assistantPastors: LeaderProps[] = [
    { 
      name: 'Rev. Moses Omolo', 
      role: 'Assistant Pastor',
      imageUrl: 'https://res.cloudinary.com/dbphdr1su/image/upload/v1773516858/cropped_circle_image_7_dgt21t.png'
    },
    { name: 'Pastor Samuel Kimani', role: 'Assistant Pastor' },
  ];

  const deacons: LeaderProps[] = [
    { name: 'Nelson Kamau', role: 'Deacon' },
    { 
      name: 'Ruth Kamau', 
      role: 'Deacon',
      imageUrl: 'https://res.cloudinary.com/dbphdr1su/image/upload/v1772982030/cropped_circle_image_3_-Picsart-AiImageEnhancer_yxngz4.png'
    },
    { 
      name: 'Joseph Mungai', 
      role: 'Deacon',
      imageUrl: 'https://res.cloudinary.com/dbphdr1su/image/upload/v1772982018/cropped_circle_image_1_-Picsart-AiImageEnhancer_qjroie.png'
    },
    { 
      name: 'Mary Kagondu', 
      role: 'Deacon',
      imageUrl: 'https://res.cloudinary.com/dbphdr1su/image/upload/v1772982002/cropped_circle_image-Picsart-AiImageEnhancer_1_pnkt9s.png'
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-light-neutral min-h-screen">
      <SEO title="Our Leadership" description="Meet the dedicated team of pastors and deacons who serve Limuru Town Baptist Church with faith, love, and wisdom." />
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-deep-blue-gray mb-6">Our Leadership</h1>
          <p className="text-lg text-warm-brown-gray max-w-2xl mx-auto">
            Meet the dedicated team of pastors and deacons who serve our congregation and community with faith, love, and wisdom.
          </p>
        </AnimatedSection>

        {/* Senior Pastor */}
        <AnimatedSection className="mb-20">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-serif text-deep-blue-gray mb-8 text-center uppercase tracking-widest border-b border-gold-accent/30 pb-4">Senior Pastor</h2>
            <LeaderCard 
              name="Rev. Stephen Karanja" 
              role="Senior Pastor" 
              imageUrl="https://res.cloudinary.com/dbphdr1su/image/upload/v1772983097/cropped_circle_image_5_-Picsart-AiImageEnhancer_utnq9e.png"
            />
          </div>
        </AnimatedSection>

        {/* Assistant Pastors */}
        <AnimatedSection className="mb-20">
          <h2 className="text-2xl font-serif text-deep-blue-gray mb-12 text-center uppercase tracking-widest border-b border-gold-accent/30 pb-4 max-w-4xl mx-auto">Pastoral Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {assistantPastors.map((pastor) => (
              <LeaderCard key={pastor.name} name={pastor.name} role={pastor.role} imageUrl={pastor.imageUrl} />
            ))}
          </div>
        </AnimatedSection>

        {/* Deacons */}
        <AnimatedSection>
          <h2 className="text-2xl font-serif text-deep-blue-gray mb-12 text-center uppercase tracking-widest border-b border-gold-accent/30 pb-4 max-w-4xl mx-auto">Our Deacons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {deacons.map((deacon) => (
              <LeaderCard key={deacon.name} name={deacon.name} role={deacon.role} imageUrl={deacon.imageUrl} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Leadership;
