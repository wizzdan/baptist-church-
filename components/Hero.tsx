import React, { useState, useEffect } from 'react';

const fullImageUrl = "https://res.cloudinary.com/dbphdr1su/image/upload/v1764483511/baptist_church_vnlael.jpg"; 

const Hero: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const img = new Image();
        img.src = fullImageUrl;
        img.onload = () => setImageLoaded(true);
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
            {/* Background Parallax Image */}
            <div
                className={`absolute top-0 left-0 w-full h-[120%] z-0 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    backgroundImage: `url(${fullImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: `translateY(${offsetY * 0.4}px)`,
                }}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-deep-blue-gray/80" />

            {/* Content */}
            <div className="relative z-20 px-6 max-w-5xl animate-fade-in">
                <div className="inline-block px-4 py-1.5 mb-6 border border-gold-accent/50 rounded-full bg-gold-accent/10 backdrop-blur-sm">
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-gold-accent uppercase">Welcome to our church family</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 drop-shadow-2xl leading-tight">
                    A Home For <span className="text-gold-accent italic">Everyone</span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl font-light mb-10 max-w-2xl mx-auto text-light-neutral/90 leading-relaxed">
                    Experience faith, find community, and discover your purpose at Limuru Town Baptist Church. We can't wait to meet you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <a 
                        href="#services" 
                        className="w-full sm:w-auto px-8 py-4 bg-dusty-rose text-white font-bold rounded-sm shadow-xl hover:bg-gold-accent transition-all duration-300 transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm"
                    >
                        Join Our Service
                    </a>
                    <a 
                        href="#mission" 
                        className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm"
                    >
                        Learn Our Story
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-70">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;