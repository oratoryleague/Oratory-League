import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from '@/lib/theme';

interface CountryCardProps {
  image: string;
  title: string;
  description: string;
  featuredCountries: string;
  delay: number;
}

const CountryCard = ({ image, title, description, featuredCountries, delay }: CountryCardProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      className={`${theme === 'dark' ? 'bg-darkAccent' : 'bg-white/90'} p-4 overflow-hidden group country-card card`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      whileHover={{ y: -5 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gold mb-2">{title}</h3>
        <p className={theme === 'dark' ? 'text-white/80' : 'text-dark/80'}>{description}</p>
      </div>
      <div className="country-overlay">
        <p>{featuredCountries}</p>
      </div>
    </motion.div>
  );
};

export const GlobalReach = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  const hotspotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 0.5 + (custom * 0.15), 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }),
    hover: { 
      scale: 1.5, 
      transition: { duration: 0.3 } 
    },
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.7, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const regions = [
    { id: "northAmerica", name: "North America", position: "top-1/4 left-1/4" },
    { id: "europe", name: "Europe", position: "top-1/3 left-1/2" },
    { id: "africa", name: "Africa", position: "top-1/2 left-1/5" },
    { id: "asia", name: "Asia", position: "top-1/2 right-1/4" },
    { id: "oceania", name: "Oceania", position: "bottom-1/3 right-1/3" }
  ];

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-dark' : 'bg-lightBg'} relative`} ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-gold mb-16 text-center"
          variants={headerVariants}
          initial="hidden"
          animate={controls}
        >
          Our Global Reach
        </motion.h2>
        
        {/* Interactive Map - Custom Illustration */}
        <motion.div 
          className={`relative w-full h-[400px] md:h-[600px] brutal-border overflow-hidden ${theme === 'dark' ? 'bg-darkAccent' : 'bg-white/80'} card`}
          variants={mapVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Map Background */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1589519160732-57fc6fef9860" 
              alt="World Map" 
              className="w-full h-full object-cover opacity-30" 
            />
            
            {/* Hotspots */}
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                className={`absolute ${region.position} w-6 h-6 bg-gold rounded-full cursor-pointer`}
                variants={hotspotVariants}
                custom={index}
                initial="hidden"
                animate={[controls, "pulse"]}
                whileHover="hover"
                data-region={region.name}
                onMouseEnter={() => setActiveRegion(region.name)}
                onMouseLeave={() => setActiveRegion(null)}
              />
            ))}
          </div>
          
          {/* Map Info Box */}
          <motion.div 
            className={`absolute bottom-4 left-4 md:bottom-8 md:left-8 ${theme === 'dark' ? 'bg-dark' : 'bg-white'} p-6 max-w-sm brutal-border border-gold shadow-lg card`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gold mb-2">
              {activeRegion ? activeRegion : "Global Impact"}
            </h3>
            <p className={`${theme === 'dark' ? 'text-white/80' : 'text-dark/80'} mb-4`}>
              {activeRegion 
                ? `The Oratory League has a strong presence in ${activeRegion}, empowering speakers through competitions and educational initiatives.`
                : "The Oratory League has established a presence in over 30 countries across 5 continents, empowering speakers from diverse backgrounds."}
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">30+</div>
                <div className={theme === 'dark' ? 'text-white/60' : 'text-dark/60'}>Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">5</div>
                <div className={theme === 'dark' ? 'text-white/60' : 'text-dark/60'}>Continents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">10k+</div>
                <div className={theme === 'dark' ? 'text-white/60' : 'text-dark/60'}>Members</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Featured Regions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <CountryCard 
            image="https://images.unsplash.com/photo-1504198453481-3d3d9e89d213"
            title="Africa"
            description="Expanding engagement across Eastern and Western African nations."
            featuredCountries="Featured countries: Nigeria, Kenya, Ghana, South Africa, Rwanda"
            delay={1}
          />
          
          <CountryCard 
            image="https://images.unsplash.com/photo-1518639192441-8fce0a366e2e"
            title="Europe"
            description="Partnerships with leading academic institutions and debate societies."
            featuredCountries="Featured countries: UK, France, Germany, Spain, Netherlands"
            delay={2}
          />
          
          <CountryCard 
            image="https://images.unsplash.com/photo-1534655378222-9a8e5c904bb0"
            title="North America"
            description="Strong presence in university-level competitions and professional circles."
            featuredCountries="Featured countries: USA, Canada, Mexico"
            delay={3}
          />
          
          <CountryCard 
            image="https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f"
            title="Asia"
            description="Growing influence in emerging debate markets across the continent."
            featuredCountries="Featured countries: Japan, Singapore, India, UAE, Philippines"
            delay={4}
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
