import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import { useState } from 'react';

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  isActive: boolean;
}

const SearchIcon = ({ isActive, isClicked }: { isActive: boolean; isClicked: boolean }) => {
  return (
    <motion.div
      className="relative w-6 h-6 flex items-center justify-center"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={isClicked ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <i className={`fa-solid fa-magnifying-glass text-xl ${isActive ? 'text-[#ae8300]' : 'text-gray-500'}`}></i>
      </motion.div>
    </motion.div>
  );
};

const OratorsIcon = ({ isActive, isClicked }: { isActive: boolean; isClicked: boolean }) => {
  return (
    <motion.div
      className="relative w-6 h-6 flex items-center justify-center"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={isClicked ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <i className={`fa-solid fa-users text-xl ${isActive ? 'text-[#ae8300]' : 'text-gray-500'}`}></i>
      </motion.div>
    </motion.div>
  );
};

const EventsIcon = ({ isActive, isClicked }: { isActive: boolean; isClicked: boolean }) => {
  return (
    <motion.div
      className="relative w-6 h-6 flex items-center justify-center"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={isClicked ? { y: [0, -10, 0] } : { y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <i className={`fa-solid fa-calendar text-xl ${isActive ? 'text-[#ae8300]' : 'text-gray-500'}`}></i>
      </motion.div>
    </motion.div>
  );
};

const NotificationsIcon = ({ isActive, isClicked }: { isActive: boolean; isClicked: boolean }) => {
  return (
    <motion.div
      className="relative w-6 h-6 flex items-center justify-center"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={isClicked ? { rotate: [0, 15, -15, 0] } : { rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <i className={`fa-solid fa-bell text-xl ${isActive ? 'text-[#ae8300]' : 'text-gray-500'}`}></i>
      </motion.div>
    </motion.div>
  );
};

const ProfileIcon = ({ isActive, isClicked }: { isActive: boolean; isClicked: boolean }) => {
  return (
    <motion.div
      className="relative w-6 h-6 flex items-center justify-center"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={isClicked ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <i className={`fa-solid fa-user text-xl ${isActive ? 'text-[#ae8300]' : 'text-gray-500'}`}></i>
      </motion.div>
    </motion.div>
  );
};

const NavItem = ({ href, icon, label, isActive }: NavItemProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500); // Reset after animation duration
  };

  const getIconComponent = () => {
    switch (icon) {
      case 'fa-solid fa-magnifying-glass':
        return <SearchIcon isActive={isActive} isClicked={isClicked} />;
      case 'fa-solid fa-users':
        return <OratorsIcon isActive={isActive} isClicked={isClicked} />;
      case 'fa-solid fa-calendar':
        return <EventsIcon isActive={isActive} isClicked={isClicked} />;
      case 'fa-solid fa-bell':
        return <NotificationsIcon isActive={isActive} isClicked={isClicked} />;
      case 'fa-solid fa-user':
        return <ProfileIcon isActive={isActive} isClicked={isClicked} />;
      default:
        return <i className={`${icon} text-xl ${isActive ? 'text-[#ae8300]' : 'text-gray-500'}`}></i>;
    }
  };

  return (
    <Link to={href} className="flex flex-col items-center justify-center relative py-2 w-[64px]">
      <motion.div
        className="flex flex-col items-center justify-center relative py-2 w-[64px]"
        whileHover={{ scale: 1.05 }}
        onClick={handleClick}
      >
        {isActive && (
          <motion.div
            className="absolute inset-0 w-full h-[calc(100%-4px)] my-[2px] rounded-full bg-[#ae8300]/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {getIconComponent()}
          {isActive && (
            <span className="text-xs text-[#ae8300] mt-1">{label}</span>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export const BottomNav = () => {
  const location = useLocation();
  const { theme } = useTheme();

  const navItems = [
    { href: '/search', icon: 'fa-solid fa-magnifying-glass', label: 'Search' },
    { href: '/orators', icon: 'fa-solid fa-users', label: 'Orators' },
    { href: '/events', icon: 'fa-solid fa-calendar', label: 'Events' },
    { href: '/notifications', icon: 'fa-solid fa-bell', label: 'New' },
    { href: '/profile', icon: 'fa-solid fa-user', label: 'Profile' },
  ];

  return (
    <motion.nav
      className={`fixed bottom-4 left-0 right-0 mx-auto w-[calc(100%-2rem)] ${
        theme === 'dark' ? 'bg-dark' : 'bg-cream'
      } border border-[#ae8300]/30 rounded-t-2xl`}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center justify-between w-full max-w-[400px] px-4">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                isActive={location.pathname === item.href}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}; 