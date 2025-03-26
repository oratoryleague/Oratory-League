import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import heroVideo from '@/assets/videos/hero.mp4';

// Add type for the error parameter
type VideoError = Error | unknown;

export const Hero = () => {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Make sure video is loaded and ready to play
    if (videoRef.current) {
      videoRef.current.play().catch((error: VideoError) => {
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

  // SVG path drawing animation for "THE LEAGUE" text
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5
      }
    }
  };

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-dark m-0 p-0">
      {/* Video Background - Full screen with no borders/rounded corners */}
      <div className="absolute inset-0 w-full h-full m-0 p-0">
        <video 
          ref={videoRef}
          src={heroVideo}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70 m-0 p-0"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
      </div>
      
      {/* Text Overlay with Animated Drawing Effect */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          className="relative text-center"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          {/* Animated "THE LEAGUE" text */}
          <motion.div className="relative">
            <h1 className="text-7xl md:text-9xl font-['Boldonse'] text-transparent [-webkit-text-stroke:2px_#f5e6b9] uppercase leading-none tracking-tighter">
              <div className="relative">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="block"
                >
                  THE
                </motion.span>
                <svg className="w-full h-16 md:h-24 mt-2" viewBox="0 0 300 50">
                  <motion.path
                    d="M10,25 L70,25 M90,25 L150,25 M170,25 L230,25 M250,25 L290,25"
                    stroke="#f5e6b9"
                    strokeWidth="1"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </svg>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="block"
                >
                  LEAGUE
                </motion.span>
              </div>
            </h1>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-6 -right-4 w-24 h-24 md:w-32 md:h-32 border-2 border-gold"
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
          />
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
        <div className="w-px h-12 bg-gold" />
      </motion.div>
    </section>
  );
};

export default Hero;
