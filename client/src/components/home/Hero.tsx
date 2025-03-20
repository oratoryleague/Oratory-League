import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

export const Hero = () => {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Make sure video is loaded and ready to play
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  const textVariants = {
    initial: {
      y: 100,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const orbVariants = {
    initial: {
      scale: 0,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scrollIndicatorVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-dark">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          className="object-cover w-full h-full opacity-70"
        >
          <source src="/api/assets/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark"></div>
      </div>
      
      {/* Brutalist Text Overlay */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          className="relative text-center"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          <h1 className={`brutal-text text-9xl md:text-[15rem] font-black font-display uppercase leading-none tracking-tighter`}>
            THE<br/>LEAGUE
          </h1>
          <motion.div 
            className="absolute -bottom-6 -right-4 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gold"
            variants={orbVariants}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 0.6, 0.8]
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        variants={scrollIndicatorVariants}
        initial="initial"
        animate="animate"
      >
        <span className="text-gold text-sm font-medium tracking-widest mb-2">SCROLL DOWN</span>
        <div className="w-px h-12 bg-gold"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
