import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg"
          : "bg-[#1a1a1a]/85 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">OL</span>
              </div>
              <span className="text-primary font-bold text-xl tracking-wider">
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
            className="md:hidden bg-[#1a1a1a]/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
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
