import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
      } rounded-lg`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: "rgba(255,215,0,0.2)", // transparent light gold background
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo (unchanged) */}
          <Link href="/">
            <a className="flex items-center space-x-4 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <span className="text-primary-foreground font-bold text-3xl">OL</span>
              </div>
              <span className="text-primary font-bold text-2xl tracking-wider group-hover:tracking-widest transition-all duration-300">
                ORATORY LEAGUE
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className={`text-primary hover:text-accent transition-colors ${
                location === '/' ? 'text-accent font-semibold' : ''
              }`}>
                HOME
              </a>
            </Link>
            <Link href="/about-us">
              <a className={`text-primary hover:text-accent transition-colors ${
                location === '/about-us' ? 'text-accent font-semibold' : ''
              }`}>
                ABOUT
              </a>
            </Link>
            <Link href="/events">
              <a className={`text-primary hover:text-accent transition-colors ${
                location === '/events' ? 'text-accent font-semibold' : ''
              }`}>
                EVENTS
              </a>
            </Link>
            <Link href="/resources">
              <a className={`text-primary hover:text-accent transition-colors ${
                location === '/resources' ? 'text-accent font-semibold' : ''
              }`}>
                RESOURCES
              </a>
            </Link>
            <Link href="/contact-us">
              <a className={`text-primary hover:text-accent transition-colors ${
                location === '/contact-us' ? 'text-accent font-semibold' : ''
              }`}>
                CONTACT
              </a>
            </Link>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              JOIN NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary hover:text-accent transition-colors"
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
              backgroundColor: "rgba(255,215,0,0.2)", // same light gold background
              backdropFilter: "blur(6px)",
            }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/">
                <a 
                  className={`block py-2 text-primary hover:text-accent transition-colors ${
                    location === '/' ? 'text-accent font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </a>
              </Link>
              <Link href="/about-us">
                <a 
                  className={`block py-2 text-primary hover:text-accent transition-colors ${
                    location === '/about-us' ? 'text-accent font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT
                </a>
              </Link>
              <Link href="/events">
                <a 
                  className={`block py-2 text-primary hover:text-accent transition-colors ${
                    location === '/events' ? 'text-accent font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  EVENTS
                </a>
              </Link>
              <Link href="/resources">
                <a 
                  className={`block py-2 text-primary hover:text-accent transition-colors ${
                    location === '/resources' ? 'text-accent font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  RESOURCES
                </a>
              </Link>
              <Link href="/contact-us">
                <a 
                  className={`block py-2 text-primary hover:text-accent transition-colors ${
                    location === '/contact-us' ? 'text-accent font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT
                </a>
              </Link>
              <button 
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                JOIN NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
