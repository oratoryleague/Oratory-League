import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import highlightImage from '@/assets/img/highlight.png';

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  isActive: boolean;
}

const NavItem = ({ href, icon, label, isActive }: NavItemProps) => {
  return (
    <Link href={href}>
      <motion.a
        className="flex flex-col items-center relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isActive && (
          <motion.div
            className="absolute -bottom-1 w-16 h-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={highlightImage}
              alt="Active tab highlight"
              className="w-full h-full object-contain"
            />
          </motion.div>
        )}
        <i className={`${icon} text-xl mb-1 ${isActive ? 'text-white' : 'text-gray-500'}`}></i>
        <span className={`text-xs ${isActive ? 'text-white' : 'text-gray-500'}`}>{label}</span>
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
    <motion.nav
      className={`fixed bottom-0 left-0 right-0 z-50 ${
        theme === 'dark' ? 'bg-dark/95' : 'bg-cream/95'
      } backdrop-blur-sm border-t border-gray-200 dark:border-gray-800`}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center h-16">
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
    </motion.nav>
  );
}; 