import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import botswanaStadiumImage from '@/assets/img/botswana-national-stadium.jfif';

export const GrandOrate = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const marqueeBgClass = theme === 'dark' ? 'text-gold/10' : 'text-dark/10';

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-darkAccent' : 'bg-goldLight/50'} relative`} ref={ref}>
      <div className="container mx-auto px-4">
        {/* Asymmetrical Layout */}
        <motion.div
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Column - 3D Card */}
          <motion.div 
            className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0"
            variants={itemVariants}
          >
            <motion.div 
              className="tilt-card brutal-border card bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-1"
              whileHover={{ 
                scale: 1.03,
                rotateY: 15,
                transition: { duration: 0.4 }
              }}
            >
              <div className={`${theme === 'dark' ? 'bg-dark' : 'bg-white'} p-8 card`}>
                <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-6">The Grand Orate</h2>
                <p className={`${theme === 'dark' ? 'text-white/80' : 'text-dark/80'} text-lg mb-6`}>Our flagship competition brings together the brightest minds from across the globe to debate critical issues facing our world today.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-gold mr-2">→</span>
                    <span>International participation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">→</span>
                    <span>Expert judging panel</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">→</span>
                    <span>Prestigious awards</span>
                  </li>
                </ul>
                <motion.a 
                  href="#" 
                  className="inline-block px-8 py-3 bg-gold text-dark font-bold hover:bg-goldLight transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image with Negative Space */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            variants={itemVariants}
          >
            <motion.div 
              className="w-full h-96 md:h-[500px] relative overflow-hidden tilt-card card"
              whileHover={{ 
                scale: 1.03,
                rotateX: 5,
                rotateY: -15,
                transition: { duration: 0.4 }
              }}
            >
              <img src={botswanaStadiumImage} alt="Featured" className="w-full h-full object-cover" />
              
              {/* Brutalist Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="w-1/2 h-1 bg-gold mb-4"></div>
                <h3 className="text-3xl font-bold text-goldLight">December 2025</h3>
                <p className="text-goldLight/90">Gaborone, Botswana</p>
              </div>
              
              {/* Floating Decorative Elements */}
              <motion.div 
                className="absolute top-4 right-4 w-20 h-20 border-4 border-gold opacity-70"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-20 opacity-50">
        <div className="marquee inline-block whitespace-nowrap">
          <span className={`text-9xl font-black ${marqueeBgClass}`}>ORATORY LEAGUE DEBATE DISCOURSE COMMUNICATION ORATORY LEAGUE DEBATE DISCOURSE</span>
        </div>
      </div>
    </section>
  );
};

export default GrandOrate;
