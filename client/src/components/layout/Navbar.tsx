import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path: string) => {
    return location === path;
  };

  const navBgClass = theme === 'dark' 
    ? 'bg-dark bg-opacity-70' 
    : 'bg-lightBg bg-opacity-70';

  const navItemClass = (path: string) => {
    const baseClass = 'nav-item font-medium transition-colors';
    const activeClass = theme === 'dark' ? 'text-gold' : 'text-gold';
    const inactiveClass = theme === 'dark' ? 'text-white hover:text-gold' : 'text-dark hover:text-gold';
    
    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 backdrop-blur-md ${navBgClass} ${
          scrolled ? 'shadow-md' : ''
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.a
              className="flex items-center space-x-2 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-10 h-10 flex items-center justify-center"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/logo.png" alt="Oratory League Logo" className="w-full h-full object-contain" />
              </motion.div>
              <motion.span
                className="text-gold font-bold tracking-wider"
                whileHover={{ letterSpacing: '0.2em' }}
                transition={{ duration: 0.3 }}
              >
                ORATORY LEAGUE
              </motion.span>
            </motion.a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className={navItemClass("/")}>HOME</a>
            </Link>
            <Link href="/sponsorships">
              <a className={navItemClass("/sponsorships")}>SPONSORSHIPS</a>
            </Link>
            <Link href="/resources">
              <a className={navItemClass("/resources")}>RESOURCES</a>
            </Link>
            <Link href="/about-us">
              <a className={navItemClass("/about-us")}>ABOUT US</a>
            </Link>
            <Link href="/contact-us">
              <a className={navItemClass("/contact-us")}>CONTACT</a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gold hover:text-goldLight transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className={`md:hidden absolute top-full left-0 w-full ${theme === 'dark' ? 'bg-darkAccent' : 'bg-goldLight'} p-4 shadow-lg`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                <Link href="/">
                  <a 
                    className={`p-2 ${isActive('/') ? 'text-gold border-l-2 border-gold' : `${theme === 'dark' ? 'text-white' : 'text-dark'} hover:text-gold hover:border-l-2 hover:border-gold`}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    HOME
                  </a>
                </Link>
                <Link href="/sponsorships">
                  <a 
                    className={`p-2 ${isActive('/sponsorships') ? 'text-gold border-l-2 border-gold' : `${theme === 'dark' ? 'text-white' : 'text-dark'} hover:text-gold hover:border-l-2 hover:border-gold`}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SPONSORSHIPS
                  </a>
                </Link>
                <Link href="/resources">
                  <a 
                    className={`p-2 ${isActive('/resources') ? 'text-gold border-l-2 border-gold' : `${theme === 'dark' ? 'text-white' : 'text-dark'} hover:text-gold hover:border-l-2 hover:border-gold`}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    RESOURCES
                  </a>
                </Link>
                <Link href="/about-us">
                  <a 
                    className={`p-2 ${isActive('/about-us') ? 'text-gold border-l-2 border-gold' : `${theme === 'dark' ? 'text-white' : 'text-dark'} hover:text-gold hover:border-l-2 hover:border-gold`}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ABOUT US
                  </a>
                </Link>
                <Link href="/contact-us">
                  <a 
                    className={`p-2 ${isActive('/contact-us') ? 'text-gold border-l-2 border-gold' : `${theme === 'dark' ? 'text-white' : 'text-dark'} hover:text-gold hover:border-l-2 hover:border-gold`}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CONTACT
                  </a>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
