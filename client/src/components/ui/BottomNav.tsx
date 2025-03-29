import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Users, Calendar, Bell, User } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  isActive: boolean;
}

const NavItem = ({ icon, label, path, isActive }: NavItemProps) => {
  return (
    <Link
      to={path}
      className="flex flex-col items-center justify-center w-full h-full relative"
    >
      <div className="relative">
        {icon}
        {isActive && (
          <motion.div
            layoutId="activeTab"
            className="absolute -inset-2 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full -z-10"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </div>
      <span className={`text-xs mt-1 ${isActive ? 'text-gold' : 'text-gray-500 dark:text-gray-400'}`}>
        {label}
      </span>
    </Link>
  );
};

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { icon: <Search className="w-6 h-6" />, label: 'Search', path: '/search' },
    { icon: <Users className="w-6 h-6" />, label: 'Orators', path: '/orators' },
    { icon: <Calendar className="w-6 h-6" />, label: 'Events', path: '/events' },
    { icon: <Bell className="w-6 h-6" />, label: 'Notifications', path: '/notifications' },
    { icon: <User className="w-6 h-6" />, label: 'Profile', path: '/profile' },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 z-[100] shadow-lg"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              isActive={location.pathname === item.path}
            />
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default BottomNav; 