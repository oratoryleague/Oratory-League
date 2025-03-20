import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
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
          <source src="/assets/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>
      
      {/* Brutalist Text Overlay */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative text-center">
          <motion.h1 
            className="brutal-text text-9xl md:text-[15rem] font-black font-display uppercase leading-none tracking-tighter"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            THE<br/>LEAGUE
          </motion.h1>
          <motion.div 
            className="absolute -bottom-6 -right-4 w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-primary text-sm font-medium tracking-widest mb-2">SCROLL DOWN</span>
        <motion.div 
          className="w-px h-12 bg-primary"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </motion.div>
    </section>
  );
}
