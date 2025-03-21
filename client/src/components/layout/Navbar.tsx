import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [location] = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolled = currentScrollPos > 10;
      
      // Show/hide navbar based on scroll direction
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setIsVisible(visible);
      setScrolled(isScrolled);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const isActive = (path: string) => {
    return location === path;
  };

  const navBgClass = theme === 'dark' 
    ? 'bg-dark' 
    : 'bg-cream';

  const navTextClass = theme === 'dark' 
    ? 'text-white' 
    : 'text-dark';

  const navItemClass = (path: string) => {
    const baseClass = 'nav-item font-medium transition-colors';
    const activeClass = 'text-gold';
    const inactiveClass = `${navTextClass} hover:text-gold`;
    
    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto">
          <div className="rounded-full shadow-md p-3 transition-all duration-300 backdrop-blur-md">
            <div className={`${navBgClass} rounded-full p-2 flex items-center justify-between`}>
              {/* Logo */}
              <Link href="/">
                <motion.a
                  className="flex items-center space-x-2 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-8 h-8 flex items-center justify-center"
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src="/logo.png" alt="Oratory League Logo" className="w-full h-full object-contain" />
                  </motion.div>
                  <motion.span
                    className="text-gold font-bold"
                    transition={{ duration: 0.3 }}
                  >
                    Oratory League
                  </motion.span>
                </motion.a>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/">
                  <a className={navItemClass("/")}>Home</a>
                </Link>
                <Link href="/sponsorships">
                  <a className={navItemClass("/sponsorships")}>Sponsorships</a>
                </Link>
                <Link href="/resources">
                  <a className={navItemClass("/resources")}>Resources</a>
                </Link>
                <Link href="/about-us">
                  <a className={navItemClass("/about-us")}>About Us</a>
                </Link>
                <Link href="/contact-us">
                  <a className={navItemClass("/contact-us")}>Contact</a>
                </Link>
                
                <ThemeToggle />
                
                <motion.a
                  href="#"
                  className="bg-gold text-dark px-6 py-2 font-medium rounded-full hover:bg-goldLight transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Now
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center space-x-4 md:hidden">
                <ThemeToggle />
                <motion.button
                  className={`${navTextClass} hover:text-gold transition-colors focus:outline-none`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  whileTap={{ scale: 0.9 }}
                >
                  {mobileMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className={`md:hidden mx-auto mt-2 ${theme === 'dark' ? 'bg-darkAccent' : 'bg-creamLight'} p-4 shadow-lg rounded-lg max-w-[calc(100%-2rem)]`}
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
                      Home
                    </a>
                  </Link>
                  <Link href="/sponsorships">
                    <a 
                      className={`p-2 ${isActive('/sponsorships') ? 'text-gold border-l-2 border-gold' : `${theme === 'dark' ? 'text-white' : 'text-dark'} hover:text-gold hover:border-l-2 hover:border-gold`}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sponsorships
                    </a>
                  </Link>
                  <Link href="/resources">
                    <a 
                      className={`p-2 ${isActive('/resources') ? 'text-gold border-l-2 border-gold' : `${theme === 'dark' ? 'text-white' : 'text-dark'} hover:text-gold hover:border-l-2 hover:border-gold`}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Resources
                    </a>
                  </Link>
                  <Link href="/about-us">
                    <a 
                      className={`p-2 ${isActive('/about-us') ? 'text-gold border-l-2 border-gold' : `${theme === 'dark' ? 'text-white' : 'text-dark'} hover:text-gold hover:border-l-2 hover:border-gold`}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </a>
                  </Link>
                  <Link href="/contact-us">
                    <a 
                      className={`p-2 ${isActive('/contact-us') ? 'text-gold border-l-2 border-gold' : `${theme === 'dark' ? 'text-white' : 'text-dark'} hover:text-gold hover:border-l-2 hover:border-gold`}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </Link>
                  <Link href="#">
                    <a 
                      className="p-2 text-gold font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Join Now
                    </a>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};
