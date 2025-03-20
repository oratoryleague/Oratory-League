import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from '@/lib/theme';

interface EventProps {
  number: string;
  title: string;
  dates: string;
  location: string;
  description: string;
  isRight?: boolean;
}

const Event = ({ number, title, dates, location, description, isRight = false }: EventProps) => {
  const { theme } = useTheme();
  
  return (
    <div className="relative mb-20">
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-dark font-bold"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {number}
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Either content or empty for alignment */}
        <div className={`${isRight ? 'hidden md:block' : ''}`}>
          {!isRight && (
            <motion.div 
              className={`tilt-card brutal-border ${theme === 'dark' ? 'bg-dark' : 'bg-white'} p-8 hover:${theme === 'dark' ? 'bg-darkAccent' : 'bg-goldLight/30'} transition-colors duration-300 ${isRight ? 'md:text-right' : ''}`}
              initial={{ x: isRight ? 50 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.03,
                rotateX: 5,
                rotateY: isRight ? -5 : 5
              }}
            >
              <div className="text-3xl font-bold text-gold mb-2">{title}</div>
              <div className={`${theme === 'dark' ? 'text-white/60' : 'text-dark/60'} mb-4`}>{dates} • {location}</div>
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-dark/80'} mb-6`}>{description}</p>
              <motion.a 
                href="#" 
                className={`inline-block px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {title === "The Grand Orate" ? "Register Now" : "Learn More"}
              </motion.a>
            </motion.div>
          )}
        </div>
        
        {/* Right Column - Either content or empty for alignment */}
        <div className={`${!isRight ? 'hidden md:block' : ''}`}>
          {isRight && (
            <motion.div 
              className={`tilt-card brutal-border ${theme === 'dark' ? 'bg-dark' : 'bg-white'} p-8 hover:${theme === 'dark' ? 'bg-darkAccent' : 'bg-goldLight/30'} transition-colors duration-300 ${isRight ? 'md:text-right' : ''}`}
              initial={{ x: isRight ? 50 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.03,
                rotateX: 5,
                rotateY: isRight ? -5 : 5
              }}
            >
              <div className="text-3xl font-bold text-gold mb-2">{title}</div>
              <div className={`${theme === 'dark' ? 'text-white/60' : 'text-dark/60'} mb-4`}>{dates} • {location}</div>
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-dark/80'} mb-6`}>{description}</p>
              <motion.a 
                href="#" 
                className={`inline-block px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {title === "The Grand Orate" ? "Register Now" : "Learn More"}
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export const UpcomingEvents = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const bgBlendClass = theme === 'dark' ? 'from-gold/30 to-pink-500/30' : 'from-gold/50 to-pink-300/30';

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-darkAccent' : 'bg-goldLight/30'} relative overflow-hidden`} ref={ref}>
      {/* Blended Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624')] bg-cover bg-center"></div>
        <div className={`absolute inset-0 bg-gradient-to-r ${bgBlendClass} mix-blend-overlay`}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gold mb-6 text-center">Upcoming Events</h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/80' : 'text-dark/80'} text-center max-w-3xl mx-auto mb-16`}>Join us for these exciting opportunities to learn, compete, and connect with the global oratory community.</p>
        </motion.div>
        
        {/* Events Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/30"></div>
          
          {/* Event 1 */}
          <Event 
            number="1"
            title="African Regional Qualifiers"
            dates="May 15-18, 2024"
            location="Lagos, Nigeria"
            description="Preliminary competitions to select top debaters from across the African continent for The Grand Orate."
          />
          
          {/* Event 2 */}
          <Event 
            number="2"
            title="The Grand Orate"
            dates="June 25-30, 2024"
            location="Nairobi, Kenya"
            description="Our flagship international competition bringing together the world's top debaters to compete for prestigious awards."
            isRight={true}
          />
          
          {/* Event 3 */}
          <Event 
            number="3"
            title="Virtual Masterclass Series"
            dates="July-August 2024"
            location="Online"
            description="A series of workshops led by world-renowned debaters and public speakers, focusing on advanced oratory techniques."
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
