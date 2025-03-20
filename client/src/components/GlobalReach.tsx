import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const regions = [
  {
    name: "Africa",
    description: "Expanding engagement across Eastern and Western African nations.",
    featuredCountries: "Featured countries: Nigeria, Kenya, Ghana, South Africa, Rwanda",
    image: "https://images.unsplash.com/photo-1504198453481-3d3d9e89d213"
  },
  {
    name: "Europe",
    description: "Partnerships with leading academic institutions and debate societies.",
    featuredCountries: "Featured countries: UK, France, Germany, Spain, Netherlands",
    image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e"
  },
  {
    name: "North America",
    description: "Strong presence in university-level competitions and professional circles.",
    featuredCountries: "Featured countries: USA, Canada, Mexico",
    image: "https://images.unsplash.com/photo-1534655378222-9a8e5c904bb0"
  },
  {
    name: "Asia",
    description: "Growing influence in emerging debate markets across the continent.",
    featuredCountries: "Featured countries: Japan, Singapore, India, UAE, Philippines",
    image: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f"
  }
];

export default function GlobalReach() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
          Our Global Reach
        </motion.h2>
        
        {/* Interactive Map - Custom Illustration */}
        <motion.div 
          className="relative w-full h-[400px] md:h-[600px] brutal-border overflow-hidden bg-card"
          variants={itemVariants}
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
            <motion.div 
              className="absolute top-1/4 left-1/4 w-6 h-6 bg-primary rounded-full pulse-animation cursor-pointer"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setActiveRegion("North America")}
              onHoverEnd={() => setActiveRegion(null)}
            />
            <motion.div 
              className="absolute top-1/3 left-1/2 w-6 h-6 bg-primary rounded-full pulse-animation cursor-pointer"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setActiveRegion("Europe")}
              onHoverEnd={() => setActiveRegion(null)}
            />
            <motion.div 
              className="absolute top-1/2 left-[20%] w-6 h-6 bg-primary rounded-full pulse-animation cursor-pointer"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setActiveRegion("Africa")}
              onHoverEnd={() => setActiveRegion(null)}
            />
            <motion.div 
              className="absolute top-1/2 right-1/4 w-6 h-6 bg-primary rounded-full pulse-animation cursor-pointer"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setActiveRegion("Asia")}
              onHoverEnd={() => setActiveRegion(null)}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-primary rounded-full pulse-animation cursor-pointer"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setActiveRegion("Oceania")}
              onHoverEnd={() => setActiveRegion(null)}
            />
          </div>
          
          {/* Map Info Box */}
          <motion.div 
            className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-background dark:bg-card p-6 max-w-sm brutal-border border-primary shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-2">
              {activeRegion ? activeRegion : "Global Impact"}
            </h3>
            <p className="text-foreground/80 mb-4">
              {activeRegion 
                ? `The Oratory League has a growing presence in ${activeRegion}, with numerous events and partnerships.` 
                : "The Oratory League has established a presence in over 30 countries across 5 continents, empowering speakers from diverse backgrounds."}
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-foreground/60 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-foreground/60 text-sm">Continents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-foreground/60 text-sm">Members</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Featured Regions */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {regions.map((region, index) => (
            <motion.div 
              key={index}
              className="bg-card p-4 overflow-hidden group country-card"
              variants={itemVariants}
            >
              <img src={region.image} alt={region.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">{region.name}</h3>
                <p className="text-foreground/80">{region.description}</p>
              </div>
              <div className="country-overlay">
                <p>{region.featuredCountries}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
