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
      className={`core-value-card card p-8 ${theme === 'dark' ? 'bg-darkAccent' : 'bg-creamLight'} border-l-4 border-gold hover:${theme === 'dark' ? 'bg-darkAccent/80' : 'bg-goldLight/50'} transition-all duration-300 transform hover:-translate-y-2`}
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

interface PrincipleProps {
  title: string;
  description: string;
  delay: number;
}

const Principle = ({ title, description, delay }: PrincipleProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      className={`principle-card card p-6 ${theme === 'dark' ? 'bg-dark' : 'bg-cream'} border-2 border-gold rounded-full flex items-center justify-between overflow-hidden shadow-lg`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 10px 30px rgba(174, 131, 0, 0.2)" 
      }}
    >
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-dark font-bold text-xl mr-4">
          {title.charAt(0)}
        </div>
        <div>
          <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-gold' : 'text-gold'}`}>{title}</h3>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-dark/70'} text-sm`}>{description}</p>
        </div>
      </div>
      <motion.div 
        className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-gold">✦</span>
      </motion.div>
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
    <section className={`py-24 ${theme === 'dark' ? 'bg-dark' : 'bg-cream'} relative`} ref={ref}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
        
        {/* Fundamental Principles */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.5 } }
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            <span className={`${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Our </span>
            <span className="text-gold">Fundamental Principles</span>
          </h2>
          
          <motion.div 
            className="w-20 h-1 bg-gold mx-auto mb-10"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.8 }}
          ></motion.div>
        </motion.div>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          <Principle 
            title="Integrity" 
            description="Upholding the highest standards of honesty and ethical conduct in all our activities and competitions."
            delay={1}
          />
          
          <Principle 
            title="Unison" 
            description="Working together in harmony to create a collaborative and supportive global community of orators."
            delay={2}
          />
          
          <Principle 
            title="Elegance" 
            description="Embodying sophistication and grace in our communication, presentation, and overall approach to oratory."
            delay={3}
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
      
      {/* Additional Decorative Elements for Principles Section */}
      <motion.div 
        className="absolute bottom-60 left-20 w-32 h-32 rounded-full border-2 border-dashed border-gold/20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 right-20 w-16 h-16 rounded-full bg-gold/5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
          transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      ></motion.div>
    </section>
  );
};

export default CoreValues;
