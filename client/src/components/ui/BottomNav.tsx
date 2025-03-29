import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme';

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  isActive: boolean;
}

const SearchIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <motion.div
      className="relative w-6 h-6"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={isActive ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <i className="fa-solid fa-magnifying-glass text-xl text-gray-500"></i>
      </motion.div>
    </motion.div>
  );
};

const OratorsIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <motion.div
      className="relative w-6 h-6"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={isActive ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <i className="fa-solid fa-users text-xl text-gray-500"></i>
      </motion.div>
    </motion.div>
  );
};

const EventsIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <motion.div
      className="relative w-6 h-6"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={isActive ? { y: [0, -10, 0] } : { y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <i className="fa-solid fa-calendar text-xl text-gray-500"></i>
      </motion.div>
    </motion.div>
  );
};

const NotificationsIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <motion.div
      className="relative w-6 h-6"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={isActive ? { rotate: [0, 15, -15, 0] } : { rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <i className="fa-solid fa-bell text-xl text-gray-500"></i>
      </motion.div>
    </motion.div>
  );
};

const ProfileIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <motion.div
      className="relative w-6 h-6"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <i className="fa-solid fa-user text-xl text-gray-500"></i>
      </motion.div>
    </motion.div>
  );
};

const NavItem = ({ href, icon, label, isActive }: NavItemProps) => {
  const getIconComponent = () => {
    switch (icon) {
      case 'fa-solid fa-magnifying-glass':
        return <SearchIcon isActive={isActive} />;
      case 'fa-solid fa-users':
        return <OratorsIcon isActive={isActive} />;
      case 'fa-solid fa-calendar':
        return <EventsIcon isActive={isActive} />;
      case 'fa-solid fa-bell':
        return <NotificationsIcon isActive={isActive} />;
      case 'fa-solid fa-user':
        return <ProfileIcon isActive={isActive} />;
      default:
        return <i className={`${icon} text-xl ${isActive ? 'text-[#ae8300]' : 'text-gray-500'}`}></i>;
    }
  };

  return (
    <Link href={href}>
      <motion.a
        className="flex flex-col items-center justify-center relative py-2 px-2 w-full"
        whileHover={{ scale: 1.05 }}
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
      </motion.a>
    </Link>
  );
};

export const BottomNav = () => {
  const [location] = useLocation();
  const { theme } = useTheme();

  const navItems = [
    { href: '/search', icon: 'fa-solid fa-magnifying-glass', label: 'Search' },
    { href: '/orators', icon: 'fa-solid fa-users', label: 'Orators' },
    { href: '/events', icon: 'fa-solid fa-calendar', label: 'Events' },
    { href: '/notifications', icon: 'fa-solid fa-bell', label: 'Notifications' },
    { href: '/profile', icon: 'fa-solid fa-user', label: 'Profile' },
  ];

  return (
    <nav
      className={`fixed bottom-0 z-50 w-[calc(100%-2rem)] mx-auto left-0 right-0 ${
        theme === 'dark' ? 'bg-dark' : 'bg-cream'
      } border border-[#ae8300]/30 rounded-t-2xl`}
    >
      <div className="container mx-auto">
        <div className="flex justify-around items-center h-16 px-4">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={location === item.href}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}; 