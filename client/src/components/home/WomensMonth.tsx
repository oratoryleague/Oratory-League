import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import bashomaImage from '@/assets/img/bashoma.jpg';
import sekgwamaImage from '@/assets/img/sekgwama.jpg';
import publicSpeakerImage from '@/assets/img/Public Speaker-1.jpg';
import baganaletsoImage from '@/assets/img/baganaletso.jpg';

export const WomensMonth = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
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
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageHoverVariants = {
    rest: { scale: 1, zIndex: 1 },
    hover: { scale: 1.1, zIndex: 20, transition: { duration: 0.3 } }
  };

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Expressive Typography Header */}
        <motion.h2 
          className={`text-center text-[10rem] md:text-[20rem] text-gold font-black opacity-10 absolute top-0 left-0 w-full pointer-events-none`}
          initial={{ x: -200, opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { x: -200, opacity: 0 },
            visible: { x: 0, opacity: 0.1, transition: { duration: 1.2, ease: "easeOut" } }
          }}
        >
          Women
        </motion.h2>
        
        <motion.div 
          className="relative z-10 mx-auto max-w-4xl mt-24 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className={`${theme === 'dark' ? 'bg-pink-900/30' : 'bg-pink-100'} p-8 md:p-12 rounded-lg backdrop-blur-sm border ${theme === 'dark' ? 'border-pink-500/30' : 'border-pink-300'}`}
            variants={itemVariants}
          >
            <motion.h3 
              className={`text-4xl md:text-6xl font-serif font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-6 leading-tight`}
              variants={itemVariants}
            >
              Happy International <span className="text-pink-300">Women's Month</span>
            </motion.h3>
            <motion.p 
              className={`text-lg md:text-xl ${theme === 'dark' ? 'text-white/80' : 'text-dark/80'} mb-8`}
              variants={itemVariants}
            >
              Celebrating the strength, resilience, and achievements of women around the world. Let's continue to empower and uplift each other.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
              variants={itemVariants}
            >
              <motion.div 
                className={`aspect-square ${theme === 'dark' ? 'bg-pink-800/50' : 'bg-pink-200'} rounded overflow-hidden`}
                variants={imageHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <img src={bashomaImage} alt="Bashoma" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                className={`aspect-square ${theme === 'dark' ? 'bg-pink-800/50' : 'bg-pink-200'} rounded overflow-hidden md:mt-8`}
                variants={imageHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <img src={sekgwamaImage} alt="Sekgwama" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                className={`aspect-square ${theme === 'dark' ? 'bg-pink-800/50' : 'bg-pink-200'} rounded overflow-hidden`}
                variants={imageHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <img src={publicSpeakerImage} alt="Public Speaker" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                className={`aspect-square ${theme === 'dark' ? 'bg-pink-800/50' : 'bg-pink-200'} rounded overflow-hidden md:mt-8`}
                variants={imageHoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <img src={baganaletsoImage} alt="Baganaletso" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
            
            <motion.a 
              href="#" 
              className={`inline-block mt-8 px-6 py-3 ${theme === 'dark' ? 'bg-pink-600 hover:bg-pink-700' : 'bg-pink-500 hover:bg-pink-600'} text-white font-medium rounded-full transition-colors duration-300`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join our women's initiative
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Anti-design elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-pink-900/20 blur-3xl"></div>
      <div className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-gold/20 blur-3xl"></div>
    </section>
  );
};

export default WomensMonth;
