import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/img/logo.png';

export const Navbar = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`fixed left-0 right-0 z-50 mx-auto transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } rounded-lg m-4`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Darker background for better contrast
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-4 group">
              <div className="w-14 h-14 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <img src={logoImage} alt="Oratory League Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-white font-bold text-2xl tracking-wider group-hover:tracking-widest transition-all duration-300">
                ORATORY LEAGUE
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className={`text-white hover:text-gold transition-colors ${
                location === '/' ? 'text-gold font-semibold' : ''
              }`}>
                HOME
              </a>
            </Link>
            <Link href="/about-us">
              <a className={`text-white hover:text-gold transition-colors ${
                location === '/about-us' ? 'text-gold font-semibold' : ''
              }`}>
                ABOUT
              </a>
            </Link>
            <Link href="/events">
              <a className={`text-white hover:text-gold transition-colors ${
                location === '/events' ? 'text-gold font-semibold' : ''
              }`}>
                EVENTS
              </a>
            </Link>
            <Link href="/resources">
              <a className={`text-white hover:text-gold transition-colors ${
                location === '/resources' ? 'text-gold font-semibold' : ''
              }`}>
                RESOURCES
              </a>
            </Link>
            <Link href="/contact-us">
              <a className={`text-white hover:text-gold transition-colors ${
                location === '/contact-us' ? 'text-gold font-semibold' : ''
              }`}>
                CONTACT
              </a>
            </Link>
            <Link href="/auth">
              <button className="px-6 py-2 bg-gold text-dark rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                JOIN NOW
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gold transition-colors"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)", // Matching dark background
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/">
                <a 
                  className={`block py-2 text-white hover:text-gold transition-colors ${
                    location === '/' ? 'text-gold font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </a>
              </Link>
              <Link href="/about-us">
                <a 
                  className={`block py-2 text-white hover:text-gold transition-colors ${
                    location === '/about-us' ? 'text-gold font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT
                </a>
              </Link>
              <Link href="/events">
                <a 
                  className={`block py-2 text-white hover:text-gold transition-colors ${
                    location === '/events' ? 'text-gold font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  EVENTS
                </a>
              </Link>
              <Link href="/resources">
                <a 
                  className={`block py-2 text-white hover:text-gold transition-colors ${
                    location === '/resources' ? 'text-gold font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  RESOURCES
                </a>
              </Link>
              <Link href="/contact-us">
                <a 
                  className={`block py-2 text-white hover:text-gold transition-colors ${
                    location === '/contact-us' ? 'text-gold font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT
                </a>
              </Link>
              <Link href="/auth">
                <button 
                  className="w-full px-6 py-3 bg-gold text-dark rounded-lg font-semibold hover:bg-gold/90 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  JOIN NOW
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
