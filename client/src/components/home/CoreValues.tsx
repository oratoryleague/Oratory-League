import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from '@/lib/theme';

interface CoreValueProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const CoreValue = ({ number, title, description, delay }: CoreValueProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      className={`core-value-card card p-8 ${theme === 'dark' ? 'bg-darkAccent' : 'bg-white/80'} border-l-4 border-gold hover:${theme === 'dark' ? 'bg-darkAccent/80' : 'bg-goldLight/50'} transition-all duration-300 transform hover:-translate-y-2`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
    >
      <div className="text-gold text-4xl mb-4">{number}</div>
      <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}>{title}</h3>
      <p className={theme === 'dark' ? 'text-white/70' : 'text-dark/70'}>{description}</p>
    </motion.div>
  );
};

export const CoreValues = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-dark' : 'bg-lightBg'} relative`} ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className={`text-4xl md:text-6xl font-bold text-gold mb-16 text-center`}
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          Our Core Values
        </motion.h2>
        
        {/* Elegant Grid Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CoreValue 
            number="01" 
            title="Excellence" 
            description="We strive for excellence in all aspects of oratory and debate, pushing boundaries and setting new standards."
            delay={1}
          />
          
          <CoreValue 
            number="02" 
            title="Inclusivity" 
            description="Creating opportunities for diverse voices to be heard and recognized in the global debate community."
            delay={2}
          />
          
          <CoreValue 
            number="03" 
            title="Innovation" 
            description="Embracing new ideas and approaches to evolve the art of debate and public speaking."
            delay={3}
          />
          
          <CoreValue 
            number="04" 
            title="Education" 
            description="Fostering continuous learning and skill development through quality resources and mentorship."
            delay={4}
          />
          
          <CoreValue 
            number="05" 
            title="Global Networking" 
            description="Building connections across borders to create a worldwide community of speakers and debaters."
            delay={5}
          />
          
          <CoreValue 
            number="06" 
            title="Impact" 
            description="Using oratory as a tool for positive change, addressing real-world challenges through the power of speech."
            delay={6}
          />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        className={`absolute bottom-10 right-10 w-40 h-40 border border-gold/30 rotate-12`}
        animate={{
          rotate: [12, 0, 12],
          transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      ></motion.div>
      <motion.div 
        className={`absolute top-20 left-10 w-20 h-20 bg-gold/10 -rotate-12`}
        animate={{
          rotate: [-12, 0, -12],
          opacity: [0.1, 0.2, 0.1],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      ></motion.div>
    </section>
  );
};

export default CoreValues;
