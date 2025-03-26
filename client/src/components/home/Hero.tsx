import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import heroVideo from '@/assets/videos/hero.mp4';

// Add type for the error parameter
type VideoError = Error | unknown;

export const Hero = () => {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Make sure video is loaded and ready to play
    if (videoRef.current) {
      videoRef.current.play().catch((error: VideoError) => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-screen overflow-hidden bg-dark">
      {/* Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y, opacity }}
      >
        <video 
          ref={videoRef}
          src={heroVideo}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
      </motion.div>
      
      {/* Main Content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-gold/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border-2 border-gold/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Main Text */}
        <motion.div
          className="text-center relative z-10"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-8xl md:text-[12rem] font-display text-transparent [-webkit-text-stroke:2px_#f5e6b9] uppercase leading-none tracking-tighter"
            variants={textVariants}
          >
            <motion.span
              className="block"
              variants={textVariants}
            >
              THE
            </motion.span>
            <motion.div
              className="relative h-16 md:h-20 my-2"
              variants={lineVariants}
            >
              <motion.div
                className="absolute inset-0 bg-gold/20"
                variants={lineVariants}
              />
              <motion.div
                className="absolute inset-0 bg-gold/10"
                variants={lineVariants}
                style={{ transform: 'translateY(4px)' }}
              />
            </motion.div>
            <motion.span
              className="block"
              variants={textVariants}
            >
              LEAGUE
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-gold text-sm font-medium tracking-widest mb-2">SCROLL DOWN</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
