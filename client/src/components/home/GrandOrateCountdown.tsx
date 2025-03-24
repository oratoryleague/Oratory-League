import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/lib/theme';

export const GrandOrateCountdown = () => {
  const { theme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px'
  });
  
  // Set event date to December 4, 2025
  const eventDate = new Date('December 4, 2025 18:00:00').getTime();
  
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Calculate time remaining
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    // Initial calculation
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [eventDate]);
  
  const bgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  
  return (
    <section 
      ref={ref}
      className={`${bgClass} py-20`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-header mb-4">
            <span className="text-gold">Grand Orate</span> 2025
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Join us for the pinnacle of oratory excellence at our prestigious annual competition
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div
            className={`${cardBgClass} rounded-2xl shadow-lg overflow-hidden mb-10`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-10">
                <h3 className={`text-2xl font-bold mb-4 ${textClass}`}>Mark Your Calendar</h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  The most anticipated oratory event of the year is approaching. The Grand Orate 2025 
                  will feature the most talented speakers from around the continent competing for prestigious awards.
                </p>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <i className="fa-solid fa-calendar-days text-gold mr-3"></i>
                    <span className={`${textClass} font-medium`}>1 - 11 December, 2025</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <i className="fa-solid fa-location-dot text-gold mr-3"></i>
                    <span className={`${textClass} font-medium`}>Gaborone, Details TBA, Finale at the National Stadium</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-ticket text-gold mr-3"></i>
                    <span className={`${textClass} font-medium`}>Limited Seating Available</span>
                  </div>
                </div>
                
                <button className="bg-gold text-dark px-6 py-3 rounded-lg font-medium hover:bg-goldLight transition-colors">
                  Register Interest
                </button>
              </div>
              
              <div className="md:w-1/2 p-8 md:p-10 bg-gold flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-dark text-center">Countdown to Grand Orate</h3>
                <div className="grid grid-cols-4 gap-2 md:gap-4">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="bg-dark rounded-lg py-3 px-2 text-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                    >
                      <span className="block text-3xl md:text-4xl font-bold text-gold">
                        {item.value.toString().padStart(2, '0')}
                      </span>
                      <span className="text-xs md:text-sm text-white font-medium">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className={`mb-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Want to learn more about our flagship event?
            </p>
            <a 
              href="/grand-orate" 
              className="inline-block border-2 border-gold text-gold px-6 py-3 rounded-lg font-medium hover:bg-gold hover:text-dark transition-all"
            >
              Discover Grand Orate
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GrandOrateCountdown;