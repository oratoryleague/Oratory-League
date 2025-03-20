import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const ContactUs = () => {
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
          Contact Us
        </motion.h1>
        
        <motion.div 
          className="brutal-border p-8 mb-12 max-w-4xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-xl mb-6">
            Have questions or want to get involved with the Oratory League? We'd love to hear from you.
          </p>
          <p>
            Contact form coming soon. Please check back later to get in touch with our team.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
