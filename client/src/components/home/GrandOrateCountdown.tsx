import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/lib/theme';

export const GrandOrateCountdown = () => {
  const { theme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  });

  // Target date: December 4, 2025
  const targetDate = new Date('December 4, 2025 00:00:00').getTime();
  
  // State for countdown values
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Update countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        // If we're past the target date
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
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

  const bgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-creamLight';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';

  return (
    <section 
      ref={ref}
      className="py-20 bg-dark"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-header text-gold mb-4">The Grand Orate</h2>
          <p className="text-xl text-white mb-8">The ultimate oratory showdown is approaching</p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-r from-[#ae8300] to-[#f5e6b9] p-1 rounded-xl shadow-xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className={`${bgClass} rounded-lg p-6 md:p-10`}>
            <h3 className={`text-2xl md:text-3xl mb-8 ${textClass} text-center`}>
              Countdown to Grand Orate 2025
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div 
                className="text-center"
                variants={itemVariants}
              >
                <div className="bg-gold text-dark w-24 h-24 rounded-lg flex items-center justify-center text-4xl font-bold">
                  {timeLeft.days}
                </div>
                <p className={`mt-2 ${textClass}`}>Days</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={itemVariants}
              >
                <div className="bg-gold text-dark w-24 h-24 rounded-lg flex items-center justify-center text-4xl font-bold">
                  {timeLeft.hours}
                </div>
                <p className={`mt-2 ${textClass}`}>Hours</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={itemVariants}
              >
                <div className="bg-gold text-dark w-24 h-24 rounded-lg flex items-center justify-center text-4xl font-bold">
                  {timeLeft.minutes}
                </div>
                <p className={`mt-2 ${textClass}`}>Minutes</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={itemVariants}
              >
                <div className="bg-gold text-dark w-24 h-24 rounded-lg flex items-center justify-center text-4xl font-bold">
                  {timeLeft.seconds}
                </div>
                <p className={`mt-2 ${textClass}`}>Seconds</p>
              </motion.div>
            </div>
            
            <div className="mt-8 text-center">
              <motion.button
                className="bg-gold text-dark px-8 py-3 rounded-full font-bold hover:bg-goldLight transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrandOrateCountdown;