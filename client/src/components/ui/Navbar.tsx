import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import logoImage from '@/assets/img/logo.png';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (Math.abs(scrollY - lastScrollY) > 10)) {
        setScrollDirection(direction);
      }
      setScrollY(scrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

export const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`floating-nav ${
        theme === 'dark' ? 'bg-dark' : 'bg-cream'
      } border border-[#ae8300]/30 rounded-[2px] shadow-lg`}
      initial={{ y: -100 }}
      animate={{ y: scrollDirection === 'down' ? -100 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center">
                <img src={logoImage} alt="Oratory League Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-[#ae8300] font-bold font-['Boldonse']">Oratory League</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="nav-item">
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>Search</span>
            </Link>
            <Link to="/orators" className="nav-item">
              <i className="fa-solid fa-users"></i>
              <span>Orators</span>
            </Link>
            <Link to="/events" className="nav-item">
              <i className="fa-solid fa-calendar"></i>
              <span>Events</span>
            </Link>
            <Link to="/notifications" className="nav-item">
              <i className="fa-solid fa-bell"></i>
              <span>New</span>
            </Link>
            <Link to="/profile" className="nav-item">
              <i className="fa-solid fa-user"></i>
              <span>Profile</span>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark' ? 'text-white/70 hover:text-[#ae8300]' : 'text-dark/70 hover:text-[#ae8300]'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'} text-xl`}></i>
            </motion.button>

            {/* Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full ${
                theme === 'dark' ? 'text-white/70 hover:text-[#ae8300]' : 'text-dark/70 hover:text-[#ae8300]'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 right-0 ${
              theme === 'dark' ? 'bg-dark' : 'bg-cream'
            } border border-[#ae8300]/30 rounded-b-[2px] shadow-lg`}
          >
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === item.href
                        ? 'bg-[#ae8300]/10 text-[#ae8300]'
                        : 'hover:bg-[#ae8300]/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
              </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}; 