import { useLocation, useNavigate } from 'wouter';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import { Search, Users, Calendar, Bell, User } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ icon, label, isActive, onClick }: NavItemProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative flex flex-col items-center justify-center w-full h-full p-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold to-gold/80 px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg"
        >
          {label}
        </motion.div>
      )}
      <div className={`${isActive ? 'text-gold' : 'text-gray-500'} transition-colors duration-200`}>
        {icon}
      </div>
    </motion.button>
  );
};

const BottomNav = () => {
  const [, navigate] = useLocation();
  const { theme } = useTheme();
  const bgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';

  const navItems = [
    { icon: <Search size={24} />, label: 'Search', path: '/search' },
    { icon: <Users size={24} />, label: 'Orators', path: '/orators' },
    { icon: <Calendar size={24} />, label: 'Events', path: '/events' },
    { icon: <Bell size={24} />, label: 'Notifications', path: '/notifications' },
    { icon: <User size={24} />, label: 'Profile', path: '/profile' },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className={`fixed bottom-0 left-0 right-0 ${bgClass} border-t border-gray-200 dark:border-gray-800 shadow-lg z-50`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              isActive={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default BottomNav; 