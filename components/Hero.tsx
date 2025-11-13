import React, { useState, useEffect } from 'react';

const fullImageUrl = "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop";
const placeholderImageUrl = "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop";

const Hero: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [currentImage, setCurrentImage] = useState(placeholderImageUrl);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const img = new Image();
        img.src = fullImageUrl;
        img.onload = () => {
            setImageLoaded(true);
            setCurrentImage(fullImageUrl);
        };
        img.onerror = () => {
            console.error('Failed to load hero image');
            // Keep using placeholder if main image fails
            setCurrentImage(placeholderImageUrl);
        };
    }, []);

    const SliderDots = () => (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col space-y-3 pl-6">
        <button className="w-2.5 h-2.5 rounded-full border border-white/50 transition-colors hover:bg-white"></button>
        <button className="w-2.5 h-2.5 rounded-full border border-white bg-white transition-colors hover:bg-white"></button>
        <button className="w-2.5 h-2.5 rounded-full border border-white/50 transition-colors hover:bg-white"></button>
      </div>
    );

    return (
        <section id="home" className="relative h-screen flex items-center justify-start text-white text-left overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-out"
                style={{
                    backgroundImage: `url(${currentImage})`,
                    transform: `translateY(${offsetY * 0.4}px)`,
                    filter: 'brightness(0.7)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

            <SliderDots />

            <div className="relative z-10 px-6 sm:px-12 md:pl-32 transition-opacity duration-1000 ease-in opacity-0 animate-fadeIn max-w-3xl">
                <p className="text-lg md:text-xl font-sans mb-4 tracking-wide text-white/90">
                    There is no other way except Jesus.
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 drop-shadow-lg leading-tight">
                    We love God.<br />We believe in God.
                </h1>
                <a
                    href="#mission"
                    className="bg-dusty-rose text-white px-10 py-4 text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-white hover:text-deep-blue-gray transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    READ MORE
                </a>
            </div>

            {/* Loading indicator */}
            {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-5 bg-gray-800/50">
                    <div className="text-white text-lg">Loading...</div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 1.5s forwards;
                    animation-delay: 0.5s;
                }
            `}</style>
        </section>
    );
};

export default Hero;