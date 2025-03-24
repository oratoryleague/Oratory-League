import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '/' },
    { 
      name: 'ABOUT', 
      href: '/about-us',
      dropdown: [
        { name: 'Our Story', href: '/about-us#story' },
        { name: 'Our Mission', href: '/about-us#mission' },
        { name: 'Our Team', href: '/about-us#team' }
      ]
    },
    { name: 'EVENTS', href: '/events' },
    { name: 'RESOURCES', href: '/resources' },
    { name: 'CONTACT', href: '/contact-us' }
  ];

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
            <a className="flex items-center space-x-3 group">
              <motion.div 
                className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 45, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-primary-foreground font-bold text-2xl">OL</span>
              </motion.div>
              <motion.span 
                className="text-primary font-bold text-xl tracking-wider"
                whileHover={{ letterSpacing: '0.2em' }}
                transition={{ duration: 0.3 }}
              >
                ORATORY LEAGUE
              </motion.span>
            </a>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer text-primary hover:text-accent transition-colors"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link href={item.href}>
                    <a className={`text-primary hover:text-accent transition-colors ${
                      location === item.href ? 'text-accent font-semibold' : ''
                    }`}>
                      {item.name}
                    </a>
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a1a]/95 backdrop-blur-md rounded-lg shadow-lg py-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href}>
                          <a className="block px-4 py-2 text-primary hover:text-accent hover:bg-accent/10 transition-colors">
                            {subItem.name}
                          </a>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              JOIN NOW
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary hover:text-accent transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </motion.button>
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
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div className="text-primary font-semibold">{item.name}</div>
                      {item.dropdown.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href}>
                          <a 
                            className="block pl-4 py-2 text-primary/80 hover:text-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <a 
                        className={`block py-2 text-primary hover:text-accent transition-colors ${
                          location === item.href ? 'text-accent font-semibold' : ''
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                JOIN NOW
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
