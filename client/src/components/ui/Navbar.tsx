import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
      } border border-[#ae8300]/30 rounded-[14px] shadow-lg`}
      initial={{ y: -100 }}
      animate={{ y: scrollDirection === 'down' ? -100 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="w-full px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImage} alt="Oratory League Logo" className="h-8 w-auto" />
            <span className="text-[#ae8300] font-bold font-['Boldonse']">Oratory League</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `nav-link relative px-3 py-2 text-[#ae8300] transition-all duration-300 hover:text-[#ae8300] hover:scale-105 ${
                  isActive ? 'active' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/support" 
              className={({ isActive }) => 
                `nav-link relative px-3 py-2 text-[#ae8300] transition-all duration-300 hover:text-[#ae8300] hover:scale-105 ${
                  isActive ? 'active' : ''
                }`
              }
            >
              Support
            </NavLink>
            <NavLink 
              to="/resources" 
              className={({ isActive }) => 
                `nav-link relative px-3 py-2 text-[#ae8300] transition-all duration-300 hover:text-[#ae8300] hover:scale-105 ${
                  isActive ? 'active' : ''
                }`
              }
            >
              Resources
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `nav-link relative px-3 py-2 text-[#ae8300] transition-all duration-300 hover:text-[#ae8300] hover:scale-105 ${
                  isActive ? 'active' : ''
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `nav-link relative px-3 py-2 text-[#ae8300] transition-all duration-300 hover:text-[#ae8300] hover:scale-105 ${
                  isActive ? 'active' : ''
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
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

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[#ae8300]/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6 text-[#ae8300]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
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
              } border border-[#ae8300]/30 rounded-b-[14px] shadow-lg lg:hidden`}
            >
              <div className="px-4 py-2">
                <div className="flex flex-col space-y-2">
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                      `mobile-nav-link relative px-3 py-2 text-[#ae8300] transition-all duration-300 hover:text-[#ae8300] hover:scale-105 ${
                        isActive ? 'active' : ''
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink 
                    to="/support" 
                    className={({ isActive }) => 
                      `mobile-nav-link relative px-3 py-2 text-[#ae8300] transition-all duration-300 hover:text-[#ae8300] hover:scale-105 ${
                        isActive ? 'active' : ''
                      }`
                    }
                  >
                    Support
                  </NavLink>
                  <NavLink 
                    to="/resources" 
                    className={({ isActive }) => 
                      `mobile-nav-link relative px-3 py-2 text-[#ae8300] transition-all duration-300 hover:text-[#ae8300] hover:scale-105 ${
                        isActive ? 'active' : ''
                      }`
                    }
                  >
                    Resources
                  </NavLink>
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                      `mobile-nav-link relative px-3 py-2 text-[#ae8300] transition-all duration-300 hover:text-[#ae8300] hover:scale-105 ${
                        isActive ? 'active' : ''
                      }`
                    }
                  >
                    About Us
                  </NavLink>
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => 
                      `mobile-nav-link relative px-3 py-2 text-[#ae8300] transition-all duration-300 hover:text-[#ae8300] hover:scale-105 ${
                        isActive ? 'active' : ''
                      }`
                    }
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}; 