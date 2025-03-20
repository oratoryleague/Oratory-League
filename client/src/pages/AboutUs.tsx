import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const AboutUs = () => {
  const { theme } = useTheme();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 md:pt-32"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-gold mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
        
        <motion.div 
          className="brutal-border p-8 mb-12 max-w-4xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-xl mb-6">
            The Oratory League is a global organization dedicated to advancing the art of public speaking and debate.
          </p>
          <p>
            Content coming soon. Please check back later to learn more about our mission, vision, and team.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
