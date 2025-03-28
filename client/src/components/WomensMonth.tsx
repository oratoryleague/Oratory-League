import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function WomensMonth() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Expressive Typography Header */}
        <motion.h2 
          className="text-center text-[10rem] md:text-[20rem] text-primary font-black opacity-10 absolute top-0 left-0 w-full pointer-events-none"
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          variants={{
            visible: { opacity: 0.1, x: 0, transition: { duration: 0.8 } }
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
            className="bg-pink-900/30 dark:bg-pink-900/20 p-8 md:p-12 rounded-lg backdrop-blur-sm border border-pink-500/30"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight"
              variants={itemVariants}
            >
              Happy International <span className="text-pink-500 dark:text-pink-300">Women's Month</span>
            </motion.h3>
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 mb-8"
              variants={itemVariants}
            >
              Celebrating the strength, resilience, and achievements of women around the world. Let's continue to empower and uplift each other.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
              variants={containerVariants}
            >
              <motion.div 
                className="aspect-square bg-pink-800/50 rounded overflow-hidden hover:z-20 transform transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.1, zIndex: 20 }}
              >
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" alt="Woman speaker" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                className="aspect-square bg-pink-800/50 rounded overflow-hidden hover:z-20 transform transition-all duration-300 md:mt-8"
                variants={itemVariants}
                whileHover={{ scale: 1.1, zIndex: 20 }}
              >
                <img src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4" alt="Woman leader" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                className="aspect-square bg-pink-800/50 rounded overflow-hidden hover:z-20 transform transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.1, zIndex: 20 }}
              >
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad" alt="Women collaborating" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                className="aspect-square bg-pink-800/50 rounded overflow-hidden hover:z-20 transform transition-all duration-300 md:mt-8"
                variants={itemVariants}
                whileHover={{ scale: 1.1, zIndex: 20 }}
              >
                <img src="https://images.unsplash.com/photo-1588615419966-0c0f3dc5bfae" alt="Women empowerment" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
            
            <motion.a 
              href="#" 
              className="inline-block mt-8 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full transition-colors duration-300"
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
      <div className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl"></div>
    </section>
  );
}
