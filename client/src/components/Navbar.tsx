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
          ? "bg-[#1a1a1a]/85 backdrop-blur-sm shadow-lg"
          : "bg-[#1a1a1a]/85 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2 group">
            <motion.div 
              className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center"
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-primary-foreground font-bold text-xl">OL</span>
            </motion.div>
            <motion.span 
              className="text-primary font-bold tracking-wider"
              whileHover={{ letterSpacing: '0.2em' }}
              transition={{ duration: 0.3 }}
            >
              ORATORY LEAGUE
            </motion.span>
          </a>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" isActive={location === '/'}>HOME</NavLink>
          <NavLink href="/sponsorships" isActive={location === '/sponsorships'}>SPONSORSHIPS</NavLink>
          <NavLink href="/resources" isActive={location === '/resources'}>RESOURCES</NavLink>
          <NavLink href="/about-us" isActive={location === '/about-us'}>ABOUT US</NavLink>
          <NavLink href="/contact-us" isActive={location === '/contact-us'}>CONTACT</NavLink>
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
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-[#1a1a1a]/85 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 p-4">
              <MobileNavLink href="/" isActive={location === '/'} onClick={() => setMobileMenuOpen(false)}>HOME</MobileNavLink>
              <MobileNavLink href="/sponsorships" isActive={location === '/sponsorships'} onClick={() => setMobileMenuOpen(false)}>SPONSORSHIPS</MobileNavLink>
              <MobileNavLink href="/resources" isActive={location === '/resources'} onClick={() => setMobileMenuOpen(false)}>RESOURCES</MobileNavLink>
              <MobileNavLink href="/about-us" isActive={location === '/about-us'} onClick={() => setMobileMenuOpen(false)}>ABOUT US</MobileNavLink>
              <MobileNavLink href="/contact-us" isActive={location === '/contact-us'} onClick={() => setMobileMenuOpen(false)}>CONTACT</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ href, isActive, children }: { href: string; isActive: boolean; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <a className={`nav-item font-medium ${isActive ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
        {children}
      </a>
    </Link>
  );
}

function MobileNavLink({ href, isActive, onClick, children }: { 
  href: string; 
  isActive: boolean; 
  onClick: () => void; 
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <a 
        className={`font-medium p-2 ${isActive 
          ? 'text-primary border-l-2 border-primary' 
          : 'text-foreground hover:text-primary hover:border-l-2 hover:border-primary'
        }`}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
}
