import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'BLOG', href: '#events' },
  { name: 'FEATURES', href: '#ministries' },
  { name: 'PAGES', href: '#mission' },
  { name: 'GALLERY', href: '#events' },
  { name: 'CONTACT', href: '#prayer' },
];

const Logo = () => (
    <a href="#home" className="flex items-center space-x-2 text-white">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.003 21.002c-5.524 0-10.003-4.477-10.003-10.001 0-3.841 2.149-7.141 5.25-8.791.54-.29 1.13-.19 1.58.25l.43.43c.45.45.54 1.05.25 1.58-1.36 1.83-2.25 4.06-2.25 6.531 0 2.76 2.24 5 5 5h5c1.65 0 3 1.35 3 3s-1.35 3-3 3h-5.003zm2.997-10.001c0-2.21-1.79-4-4-4" />
        </svg>
        <div className="flex flex-col leading-tight">
            <span className="text-xl font-semibold font-serif">Limuru Baptist</span>
            <span className="text-xs tracking-widest opacity-80">CHURCH</span>
        </div>
    </a>
);


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-black/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`uppercase tracking-wider text-sm font-medium transition-colors duration-300 ${
                  activeLink === link.name ? 'text-dusty-rose' : 'text-white hover:text-dusty-rose'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-black/90 pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveLink(link.name);
                }}
                className={`uppercase tracking-wider font-medium text-lg ${
                  activeLink === link.name ? 'text-dusty-rose' : 'text-white hover:text-dusty-rose'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;