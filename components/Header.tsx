import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'HOME', href: '/', hash: '#home' },
  { name: 'HISTORY', href: '/history' },
  { name: 'LEADERSHIP', href: '/leadership' },
  { name: 'SERVICES', href: '/', hash: '#services' },
  { name: 'EVENTS', href: '/', hash: '#events' },
  { name: 'MINISTRIES', href: '/', hash: '#ministries' },
  { name: 'GIVE', href: '/', hash: '#give' },
  { name: 'CONTACT', href: '/', hash: '#prayer' },
];

const Logo = ({ onClick }: { onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
    <Link to="/" onClick={onClick} className="flex items-center space-x-3 text-white group flex-shrink-0">
        <div className="w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
            <img 
              src="https://res.cloudinary.com/dbphdr1su/image/upload/v1772546776/c5f899cc-c3f3-4ec6-9965-8bf32abde33d_ws0bjp.png" 
              alt="Limuru Town Baptist Church Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
        </div>
        <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-2xl font-bold font-serif tracking-tight">Limuru Town Baptist</span>
            <span className="text-[9px] md:text-[11px] tracking-[0.3em] opacity-80 font-sans uppercase">Church</span>
        </div>
    </Link>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (location.pathname === '/') {
        // Basic scroll spy logic for home page
        const sections = navLinks.filter(l => l.hash).map(link => link.hash!.substring(1));
        for (const section of [...sections].reverse()) {
          const el = document.getElementById(section);
          if (el && window.scrollY >= el.offsetTop - 100) {
            const matched = navLinks.find(link => link.hash === `#${section}`);
            if (matched) setActiveLink(matched.name);
            break;
          }
        }
      } else {
        const matched = navLinks.find(link => link.href === location.pathname);
        if (matched) setActiveLink(matched.name);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.hash) {
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first then scroll
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
          const targetElement = document.getElementById(link.hash!.substring(1));
          if (targetElement) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetElement.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Smooth scroll on home page
        e.preventDefault();
        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = targetElement.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
    
    setActiveLink(link.name);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-black/90 shadow-2xl backdrop-blur-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        <Logo onClick={(e) => handleNavClick(e, navLinks[0])} />
        
        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`relative px-2 xl:px-3 py-2 uppercase tracking-widest text-[10px] xl:text-[11px] font-semibold transition-all duration-300 group whitespace-nowrap ${
                  activeLink === link.name ? 'text-dusty-rose' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-dusty-rose transition-all duration-300 ${
                activeLink === link.name ? 'w-2/3' : 'w-0 group-hover:w-1/2'
              }`} />
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden text-white p-2 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black/95 transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen border-t border-white/10' : 'max-h-0'
      }`}>
        <nav className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`uppercase tracking-[0.2em] font-medium text-lg text-center ${
                activeLink === link.name ? 'text-dusty-rose' : 'text-white hover:text-dusty-rose'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;