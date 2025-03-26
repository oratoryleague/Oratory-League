import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-gold/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <img
            src="/logo.png"
            alt="Oratory League Logo"
            className="w-32 h-32 mx-auto mb-6"
          />
        </motion.div>

        {/* Main Text */}
        <motion.h1
          className="text-5xl md:text-7xl font-display text-gold mb-6 tracking-tight"
          variants={itemVariants}
        >
          Oratory League
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light"
          variants={itemVariants}
        >
          Empowering voices, shaping futures through the art of public speaking
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gold text-black font-display text-lg rounded-lg hover:bg-gold/90 transition-colors"
            onClick={() => navigate("/register")}
          >
            Join Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gold text-gold font-display text-lg rounded-lg hover:bg-gold/10 transition-colors"
            onClick={() => navigate("/about")}
          >
            Learn More
          </motion.button>
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
          <span className="text-gold text-sm font-display tracking-[0.3em] uppercase mb-2 opacity-80">Scroll Down</span>
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gold opacity-80"
            animate={{
              y: [0, 8, 0],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path
              d="M12 4L12 20M12 20L5 13M12 20L19 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
          <div className="w-px h-12 bg-gradient-to-b from-gold/80 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
