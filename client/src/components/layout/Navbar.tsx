import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Listen for scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion variants for links and menu transitions
  const linkVariants = {
    initial: { scale: 1, color: "#ccc" },
    hover: { scale: 1.1, color: "#ff4081", transition: { duration: 0.2 } },
    active: { scale: 1.15, color: "#ff4081" },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        background: isScrolled
          ? "linear-gradient(135deg, rgba(26,26,26,1) 0%, rgba(26,26,26,0.95) 100%)"
          : "linear-gradient(135deg, rgba(26,26,26,0.8) 0%, rgba(26,26,26,0.7) 100%)",
        backdropFilter: isScrolled ? "blur(8px)" : "blur(4px)",
        boxShadow: isScrolled ? "0 8px 20px rgba(0,0,0,0.6)" : "none",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with a subtle rotation and neon glow */}
          <Link href="/">
            <a className="flex items-center space-x-4 group">
              <motion.div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(45deg, #ff4081, #1e88e5)",
                  boxShadow: "0 0 20px rgba(255,64,129,0.6)",
                }}
              >
                <span className="text-white font-bold text-2xl">OL</span>
              </motion.div>
              <motion.span 
                className="font-extrabold text-xl tracking-wider"
                whileHover={{ letterSpacing: "0.2em" }}
                transition={{ duration: 0.3 }}
                style={{ color: "#fff" }}
              >
                ORATORY LEAGUE
              </motion.span>
            </a>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about-us" },
              { name: "EVENTS", path: "/events" },
              { name: "RESOURCES", path: "/resources" },
              { name: "CONTACT", path: "/contact-us" },
            ].map(({ name, path }) => (
              <motion.div
                key={name}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                animate={location === path ? "active" : "initial"}
              >
                <Link href={path}>
                  <a className="transition-colors">{name}</a>
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 rounded-full font-bold shadow-lg"
              style={{
                background: "linear-gradient(45deg, #1e88e5, #ff4081)",
                color: "#fff",
              }}
            >
              JOIN NOW
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
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
            className="md:hidden bg-black/90 backdrop-blur-md"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="container mx-auto px-6 py-6 space-y-6">
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT", path: "/about-us" },
                { name: "EVENTS", path: "/events" },
                { name: "RESOURCES", path: "/resources" },
                { name: "CONTACT", path: "/contact-us" },
              ].map(({ name, path }) => (
                <motion.div
                  key={name}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                  animate={location === path ? "active" : "initial"}
                >
                  <Link href={path}>
                    <a 
                      className="block text-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {name}
                    </a>
                  </Link>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full px-6 py-3 rounded-full font-bold shadow-lg"
                style={{
                  background: "linear-gradient(45deg, #1e88e5, #ff4081)",
                  color: "#fff",
                }}
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
