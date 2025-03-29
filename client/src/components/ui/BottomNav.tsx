import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

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
        className="flex flex-col items-center relative py-2 px-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isActive && (
          <motion.div
            className="absolute inset-0 w-[85%] h-[85%] rounded-full bg-gradient-to-b from-[#ae8300]/10 to-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
        <div className="relative z-10 flex flex-col items-center">
          <i className={`${icon} text-xl ${isActive ? 'text-[#ae8300]' : 'text-gray-500'}`}></i>
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
    <motion.nav
      className={`fixed bottom-0 z-50 w-[calc(100%-2rem)] mx-auto left-0 right-0 ${
        theme === 'dark' ? 'bg-dark' : 'bg-cream'
      } border border-[#ae8300]/30 rounded-t-2xl`}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
    </motion.nav>
  );
}; 