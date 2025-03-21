import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import { Link } from 'wouter';

export const CallToAction = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gold text-dark relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 10, 0],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-40 -left-20 w-80 h-80 bg-white/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -10, 0],
          transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black mb-6"
            variants={itemVariants}
          >
            Join The Movement
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-10"
            variants={itemVariants}
          >
            Become part of a global community dedicated to advancing the art of oratory and debate. Whether you're a seasoned speaker or just starting out, there's a place for you in the Oratory League.
          </motion.p>
          
          {/* Interactive CTA Button */}
          <Link href="/auth">
            <motion.a 
              className={`inline-block px-10 py-5 ${theme === 'dark' ? 'bg-dark' : 'bg-darkAccent'} text-gold text-xl font-bold rounded-lg brutal-border ${theme === 'dark' ? 'border-dark hover:bg-darkAccent' : 'border-black hover:bg-dark'} cursor-pointer`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: 1,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Become A Member
              <motion.span 
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
