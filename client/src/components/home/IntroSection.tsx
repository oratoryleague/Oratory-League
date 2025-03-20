import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from '@/lib/theme';

export const IntroSection = () => {
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

  const floatingAnimations = {
    float1: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float2: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        delay: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Brutalist Heading */}
        <motion.div
          className={`mb-12 brutal-border ${theme === 'dark' ? 'bg-white text-dark' : 'bg-dark text-white'} p-8 transform -rotate-1 max-w-4xl mx-auto`}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-5xl md:text-7xl font-black font-serif mb-4">The Dawn Of A New Era</h2>
          <p className="text-xl md:text-2xl font-sans">Empowering debaters worldwide through education, competition, and global networking.</p>
        </motion.div>
        
        {/* Anti-design Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Column 1 - Offset */}
          <motion.div 
            className="md:col-span-1 md:mt-24"
            variants={itemVariants}
          >
            <motion.div 
              className={`${theme === 'dark' ? 'bg-darkAccent' : 'bg-goldLight'} p-6 brutal-border border-gold transform rotate-2 hover:rotate-0 transition-transform duration-300`}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-3xl font-bold text-gold mb-2">Purpose</h3>
              <p className={theme === 'dark' ? 'text-white/80' : 'text-dark/80'}>We are striving towards advancing debate and oratory into legislative literature.</p>
            </motion.div>
          </motion.div>
          
          {/* Column 2 - Image */}
          <motion.div 
            className="md:col-span-1 overflow-hidden h-80 md:h-auto tilt-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 10,
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px" 
            }}
          >
            <img 
              src="/api/assets/home-banner.png" 
              alt="2024 ORATE AFRICA DELEGATION" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
            />
          </motion.div>
          
          {/* Column 3 - Text */}
          <motion.div 
            className="md:col-span-1 md:-mt-12"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gold p-8 text-dark transform -rotate-1 hover:rotate-0 transition-transform duration-300"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-4xl font-bold mb-4">This is <br/>Oratory League</h3>
              <p className="text-dark/80 font-medium">Creating spaces for intellectual discourse and persuasive communication across borders.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-40 right-10 w-16 h-16 bg-gold rounded-full opacity-30"
        variants={floatingAnimations}
        animate="float1"
      ></motion.div>
      <motion.div
        className="absolute bottom-20 left-10 w-12 h-12 bg-goldLight rounded-sm opacity-40"
        variants={floatingAnimations}
        animate="float2"
      ></motion.div>
    </section>
  );
};

export default IntroSection;
