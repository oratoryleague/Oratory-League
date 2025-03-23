import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/lib/theme';

export const Partners = () => {
  const { theme } = useTheme();
  const [partnerImages, setPartnerImages] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px'
  });

  // Load partner logos
  useEffect(() => {
    // These would typically come from an API
    const logos = [
      "/assets/img/coc.png",
      "/assets/img/hmcp.png",
      "/assets/img/mogobe.png",
      "/assets/img/new horizons.png",
      "/assets/img/wsa-b.png",
      "/assets/img/love botswana.png",
      "/assets/img/greyed.png",
    ];
    // Duplicate array to create infinite scroll effect
    setPartnerImages([...logos, ...logos]);
  }, []);

  // Scrolling animation
  useEffect(() => {
    if (!containerRef.current) return;
    
    const scrollAnimation = () => {
      if (!containerRef.current) return;
      
      if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
        containerRef.current.scrollLeft = 0;
      } else {
        containerRef.current.scrollLeft += 1;
      }
    };
    
    const animationId = setInterval(scrollAnimation, 30);
    
    return () => {
      clearInterval(animationId);
    };
  }, [partnerImages]);

  return (
    <section 
      ref={ref}
      className={`py-20 overflow-hidden ${theme === 'dark' ? 'bg-darkAccent' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-header mb-4">
            Our <span className="text-gold">Partners</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Collaborating with prestigious organizations to promote oratory excellence
          </p>
        </motion.div>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div 
            ref={containerRef} 
            className="partner-container"
          >
            <div className="flex py-8 partner-logos">
              {partnerImages.map((logo, index) => (
                <div 
                  key={index} 
                  className="mx-8 flex items-center"
                >
                  <img 
                    src={logo} 
                    alt={`Partner ${index + 1}`} 
                    className="h-16 sm:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className={`mb-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Interested in partnering with us?
          </p>
          <a 
            href="/contact-us" 
            className="inline-block bg-gold text-dark px-6 py-3 rounded-lg font-medium hover:bg-goldLight transition-colors"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;