import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import logoImage from '@/assets/img/logo.png';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { scrollDirection, scrollY } = useScrollDirection();

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
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

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full ${theme === 'dark' ? 'bg-dark' : 'bg-cream'} border-b border-[#ae8300]/30`}
      initial={{ y: 0 }}
      animate={{ 
        y: scrollDirection === 'down' && scrollY > 100 ? -100 : 0 
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={logoImage} alt="Oratory League Logo" className="w-full h-full object-contain" />
            </div>
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
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </motion.button>

            {/* Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className={`fixed inset-y-0 left-0 w-64 ${
              theme === 'dark' ? 'bg-dark' : 'bg-cream'
            } border-r border-[#ae8300]/30 shadow-lg`}
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