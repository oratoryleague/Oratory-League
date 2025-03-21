import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

export const Footer = () => {
  const { theme } = useTheme();
  
  const footerBgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white/70' : 'text-dark/70';
  const borderClass = theme === 'dark' ? 'border-white/10' : 'border-dark/10';
  
  return (
    <footer className={`${footerBgClass} py-8 ${textClass}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About OL */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-gold mb-3">About OL</h4>
            <ul className="space-y-1.5">
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-sm hover:text-gold transition-colors">Mission & Vision</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-sm hover:text-gold transition-colors">Constitution</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-sm hover:text-gold transition-colors">Leadership</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-sm hover:text-gold transition-colors">Our History</a>
              </motion.li>
            </ul>
          </div>
          
          {/* Membership */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-gold mb-3">Membership</h4>
            <ul className="space-y-1.5">
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-sm hover:text-gold transition-colors">Join OL</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-sm hover:text-gold transition-colors">Member Benefits</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-sm hover:text-gold transition-colors">Training Programs</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-sm hover:text-gold transition-colors">Global Chapters</a>
              </motion.li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-gold mb-3">Legal</h4>
            <ul className="space-y-1.5">
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-sm hover:text-gold transition-colors">Privacy Policy</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-sm hover:text-gold transition-colors">Terms of Service</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-sm hover:text-gold transition-colors">Code of Conduct</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/leadership" className="text-sm hover:text-gold transition-colors">Leadership</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-sm hover:text-gold transition-colors">Report Misconduct</a>
              </motion.li>
            </ul>
          </div>
        </div>
        
        <div className={`border-t ${borderClass} mt-6 pt-6 flex flex-col md:flex-row justify-between items-center`}>
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center space-x-2 cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src="/logo.png" alt="Oratory League Logo" className="w-full h-full object-contain" />
                </div>
              </a>
            </Link>
            <p className="text-sm ml-3">&copy; 2025 Oratory League Limited. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a 
              href="https://web.facebook.com/profile.php?id=61568319160118" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ae8300] hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-brands fa-facebook fa-lg"></i>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/company/oratory-league/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ae8300] hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </motion.a>
            <motion.a 
              href="https://www.threads.net/@oratory_league" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ae8300] hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-brands fa-threads fa-lg"></i>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/oratory_league" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ae8300] hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-brands fa-instagram fa-lg"></i>
            </motion.a>
            <motion.a 
              href="https://x.com/OratoryLeague/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ae8300] hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-brands fa-x-twitter fa-lg"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
