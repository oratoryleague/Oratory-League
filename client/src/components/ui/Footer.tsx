import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import logoImage from '@/assets/img/logo.png';

export const Footer = () => {
  const { theme } = useTheme();
  
  const footerBgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white/70' : 'text-dark/70';
  const borderClass = theme === 'dark' ? 'border-white/10' : 'border-dark/10';
  
  return (
    <footer className={`${footerBgClass} py-8 pb-24 ${textClass}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About OL */}
          <div className="md:col-span-1">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#ae8300]">About Us</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/missionvision" className={`text-sm ${textClass} hover:text-[#ae8300] transition-colors`}>
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link to="/leadership" className={`text-sm ${textClass} hover:text-[#ae8300] transition-colors`}>
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link to="/ourhistory" className={`text-sm ${textClass} hover:text-[#ae8300] transition-colors`}>
                    Our History
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Membership */}
          <div className="md:col-span-1">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#ae8300]">Membership</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/joinol" className={`text-sm ${textClass} hover:text-[#ae8300] transition-colors`}>
                    Join OL
                  </Link>
                </li>
                <li>
                  <Link to="/memberbenefits" className={`text-sm ${textClass} hover:text-[#ae8300] transition-colors`}>
                    Member Benefits
                  </Link>
                </li>
                <li>
                  <Link to="/trainingprograms" className={`text-sm ${textClass} hover:text-[#ae8300] transition-colors`}>
                    Training Programs
                  </Link>
                </li>
                <li>
                  <Link to="/globalchapters" className={`text-sm ${textClass} hover:text-[#ae8300] transition-colors`}>
                    Global Chapters
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Legal */}
          <div className="md:col-span-1">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#ae8300]">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/privacypolicy" className={`text-sm ${textClass} hover:text-[#ae8300] transition-colors`}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/termsofservice" className={`text-sm ${textClass} hover:text-[#ae8300] transition-colors`}>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/codeofconduct" className={`text-sm ${textClass} hover:text-[#ae8300] transition-colors`}>
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link to="/reportmisconduct" className={`text-sm ${textClass} hover:text-[#ae8300] transition-colors`}>
                    Report Misconduct
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <div className="w-6 h-6 flex items-center justify-center">
                <img src={logoImage} alt="Oratory League Logo" className="w-full h-full object-contain" />
              </div>
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