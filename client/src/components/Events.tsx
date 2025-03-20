import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const events = [
  {
    id: 1,
    title: "African Regional Qualifiers",
    date: "May 15-18, 2024",
    location: "Lagos, Nigeria",
    description: "Preliminary competitions to select top debaters from across the African continent for The Grand Orate.",
    cta: "Learn More",
    link: "#"
  },
  {
    id: 2,
    title: "The Grand Orate",
    date: "June 25-30, 2024",
    location: "Nairobi, Kenya",
    description: "Our flagship international competition bringing together the world's top debaters to compete for prestigious awards.",
    cta: "Register Now",
    link: "#"
  },
  {
    id: 3,
    title: "Virtual Masterclass Series",
    date: "July-August 2024",
    location: "Online",
    description: "A series of workshops led by world-renowned debaters and public speakers, focusing on advanced oratory techniques.",
    cta: "Join Waitlist",
    link: "#"
  }
];

export default function Events() {
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
        staggerChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const eventVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-card/60 relative overflow-hidden" ref={ref}>
      {/* Blended Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-pink-500/30 mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-primary mb-6 text-center"
            variants={headerVariants}
          >
            Upcoming Events
          </motion.h2>
          <motion.p 
            className="text-xl text-foreground/80 text-center max-w-3xl mx-auto mb-16"
            variants={headerVariants}
          >
            Join us for these exciting opportunities to learn, compete, and connect with the global oratory community.
          </motion.p>
        </motion.div>
        
        {/* Events Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
          
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              className="relative mb-20 last:mb-0"
              variants={eventVariants}
              initial="hidden"
              animate={controls}
              custom={index}
            >
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold"
                whileHover={{ scale: 1.1 }}
              >
                {event.id}
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Content or Empty */}
                {event.id % 2 === 0 ? (
                  <motion.div 
                    className="tilt-card brutal-border bg-background dark:bg-card p-8 md:text-right"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{event.title}</div>
                    <div className="text-foreground/60 mb-4">{event.date} • {event.location}</div>
                    <p className="text-foreground/80 mb-6">{event.description}</p>
                    <motion.a 
                      href={event.link} 
                      className="inline-block px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {event.cta}
                    </motion.a>
                  </motion.div>
                ) : (
                  <div className="hidden md:block"></div>
                )}
                
                {/* Right Column - Content or Empty */}
                {event.id % 2 !== 0 ? (
                  <motion.div 
                    className="tilt-card brutal-border bg-background dark:bg-card p-8"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{event.title}</div>
                    <div className="text-foreground/60 mb-4">{event.date} • {event.location}</div>
                    <p className="text-foreground/80 mb-6">{event.description}</p>
                    <motion.a 
                      href={event.link} 
                      className="inline-block px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {event.cta}
                    </motion.a>
                  </motion.div>
                ) : (
                  <div className="hidden md:block"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
