import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme';

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={`fixed inset-0 z-[100] flex items-center justify-center ${
            theme === 'dark' ? 'bg-dark' : 'bg-lightBg'
          }`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex items-center justify-center">
            {/* Circular loading animation - positioned behind the logo */}
            <motion.div
              className="absolute border-4 border-transparent rounded-full"
              style={{
                width: '180px',
                height: '180px',
                borderTopColor: theme === 'dark' ? '#D4AF37' : '#D4AF37',
                borderRightColor: theme === 'dark' ? '#D4AF37' : '#D4AF37',
                opacity: 0.8
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Logo - centered in the loading circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 z-10"
            >
              <img 
                src="/logo.png" 
                alt="Oratory League Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;