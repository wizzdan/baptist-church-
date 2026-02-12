import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#mission' },
  { name: 'SERVICES', href: '#services' },
  { name: 'EVENTS', href: '#events' },
  { name: 'MINISTRIES', href: '#ministries' },
  { name: 'GIVE', href: '#give' },
  { name: 'CONTACT', href: '#prayer' },
];

const Logo = ({ onClick }: { onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
    <a href="#home" onClick={onClick} className="flex items-center space-x-2 text-white group">
        <div className="p-1.5 bg-dusty-rose rounded-sm transition-transform duration-300 group-hover:scale-110">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-8.228-9.904A17.963 17.963 0 0112 4.22a17.963 17.963 0 018.228 6.876L12 21z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v.01" />
            </svg>
        </div>
        <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold font-serif tracking-tight">Limuru Town Baptist</span>
            <span className="text-[10px] tracking-[0.3em] opacity-80 font-sans uppercase">Church</span>
        </div>
    </a>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Basic scroll spy logic
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          const matched = navLinks.find(link => link.href === `#${section}`);
          if (matched) setActiveLink(matched.name);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setActiveLink(name);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-black/90 shadow-2xl backdrop-blur-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo onClick={(e) => handleNavClick(e, '#home', 'HOME')} />
        
        {/* Desktop and Tablet Navigation (aligned at the top/right) */}
        <nav className="hidden md:flex space-x-1 lg:space-x-4 items-center h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.name)}
              className={`relative px-3 lg:px-4 py-2 uppercase tracking-widest text-[11px] lg:text-xs font-semibold transition-all duration-300 group ${
                  activeLink === link.name ? 'text-dusty-rose' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-dusty-rose transition-all duration-300 ${
                activeLink === link.name ? 'w-2/3' : 'w-0 group-hover:w-1/2'
              }`} />
            </a>
          ))}
          <a 
            href="#give" 
            onClick={(e) => handleNavClick(e, '#give', 'GIVE')}
            className="ml-4 px-5 py-2 border border-dusty-rose text-dusty-rose text-xs font-bold rounded-sm hover:bg-dusty-rose hover:text-white transition-all duration-300"
          >
            GIVE
          </a>
        </nav>

        {/* Mobile Hamburger Button (Three lines) */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none" 
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
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen border-t border-white/10' : 'max-h-0'
      }`}>
        <nav className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.name)}
              className={`uppercase tracking-[0.2em] font-medium text-lg text-center ${
                activeLink === link.name ? 'text-dusty-rose' : 'text-white hover:text-dusty-rose'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;