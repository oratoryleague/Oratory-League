import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const coreValues = [
  {
    number: "01",
    title: "Excellence",
    description: "We strive for excellence in all aspects of oratory and debate, pushing boundaries and setting new standards."
  },
  {
    number: "02",
    title: "Inclusivity",
    description: "Creating opportunities for diverse voices to be heard and recognized in the global debate community."
  },
  {
    number: "03",
    title: "Innovation",
    description: "Embracing new ideas and approaches to evolve the art of debate and public speaking."
  },
  {
    number: "04",
    title: "Education",
    description: "Fostering continuous learning and skill development through quality resources and mentorship."
  },
  {
    number: "05",
    title: "Global Networking",
    description: "Building connections across borders to create a worldwide community of speakers and debaters."
  },
  {
    number: "06",
    title: "Impact",
    description: "Using oratory as a tool for positive change, addressing real-world challenges through the power of speech."
  }
];

export default function CoreValues() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-background dark:bg-black relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-primary mb-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          Our Core Values
        </motion.h2>
        
        {/* Elegant Grid Design */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {coreValues.map((value, index) => (
            <motion.div 
              key={index}
              className="core-values-card p-8 bg-card border-l-4 border-primary hover:bg-card/80 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="text-primary text-4xl mb-4">{value.number}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-10 right-10 w-40 h-40 border border-primary/30"
        animate={{ rotate: 12 }}
        initial={{ rotate: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10"
        animate={{ rotate: -12 }}
        initial={{ rotate: 0 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}
