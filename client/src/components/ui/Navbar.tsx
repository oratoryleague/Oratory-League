import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import logoImage from '@/assets/img/logo.png';

export const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className={`floating-nav z-50 w-[calc(100%-2rem)] max-w-5xl ${
        theme === 'dark' ? 'bg-dark' : 'bg-cream'
      } border border-[#ae8300]/30 rounded-full shadow-lg`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center">
                <img src={logoImage} alt="Oratory League Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-[#ae8300] font-bold font-['Boldonse']">Oratory League</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-[#ae8300]'
                    : theme === 'dark'
                    ? 'text-white/70 hover:text-[#ae8300]'
                    : 'text-dark/70 hover:text-[#ae8300]'
                }`}
              >
                {item.label}
            </Link>
            ))}
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
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-circle-half-stroke'} text-xl`}></i>
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
              <i className="fa-solid fa-bars text-xl"></i>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className={`fixed inset-y-0 right-0 w-64 ${
              theme === 'dark' ? 'bg-dark' : 'bg-cream'
            } border-l border-[#ae8300]/30 shadow-lg`}
          >
            <div className="flex flex-col h-full pt-16">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-[#ae8300]'
                      : theme === 'dark'
                      ? 'text-white/70 hover:text-[#ae8300]'
                      : 'text-dark/70 hover:text-[#ae8300]'
                  }`}
                >
                  {item.label}
              </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}; 