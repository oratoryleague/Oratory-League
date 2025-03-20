import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function IntroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Brutalist Heading */}
        <motion.div 
          className="mb-12 brutal-border bg-white dark:bg-card text-foreground p-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ transform: 'rotate(-1deg)' }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black font-serif mb-4"
            variants={itemVariants}
          >
            The Dawn Of A New Era
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl font-sans"
            variants={itemVariants}
          >
            Empowering debaters worldwide through education, competition, and global networking.
          </motion.p>
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
              className="bg-card p-6 brutal-border border-primary transform transition-transform duration-300"
              whileHover={{ rotate: 0 }}
              style={{ rotate: 2 }}
            >
              <h3 className="text-3xl font-bold text-primary mb-2">Purpose</h3>
              <p className="text-foreground/80">We are striving towards advancing debate and oratory into legislative literature.</p>
            </motion.div>
          </motion.div>
          
          {/* Column 2 - Image */}
          <motion.div 
            className="md:col-span-1 overflow-hidden h-80 md:h-auto tilt-card"
            variants={itemVariants}
          >
            <motion.img 
              src="/assets/home-banner.png" 
              alt="2024 ORATE AFRICA DELEGATION" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          
          {/* Column 3 - Text */}
          <motion.div 
            className="md:col-span-1 md:-mt-12"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-primary p-8 text-primary-foreground transform transition-transform duration-300"
              whileHover={{ rotate: 0 }}
              style={{ rotate: -1 }}
            >
              <h3 className="text-4xl font-bold mb-4">This is <br/>Oratory League</h3>
              <p className="text-primary-foreground/80 font-medium">Creating spaces for intellectual discourse and persuasive communication across borders.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-40 right-10 w-16 h-16 bg-primary rounded-full opacity-30"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-12 h-12 bg-accent rounded-sm opacity-40"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
    </section>
  );
}
