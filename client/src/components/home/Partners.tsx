import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Partners = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  });

  // Partner logos
  const logos = [
    { id: 1, name: 'Chamber of Commerce', path: '/attached_assets/coc.png' },
    { id: 2, name: 'Greyed', path: '/attached_assets/greyed.png' },
    { id: 3, name: 'Love Botswana', path: '/attached_assets/love botswana.png' },
    { id: 4, name: 'HMCP', path: '/attached_assets/hmcp.png' },
    { id: 5, name: 'WSA-B', path: '/attached_assets/wsa-b.png' },
    { id: 6, name: 'Mogobe', path: '/attached_assets/mogobe.png' },
    { id: 7, name: 'New Horizons', path: '/attached_assets/new horizons.png' },
  ];

  // Duplicate the array for seamless infinite scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-cream">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-4xl md:text-5xl font-header text-center mb-14 text-dark">
          Our <span className="text-gold">Partners</span>
        </h2>
      </div>

      {/* Infinite scrolling logos container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: inView ? [0, -1950] : 0
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="flex-shrink-0 h-24 w-44 bg-white rounded-lg shadow-md p-4 flex items-center justify-center"
            >
              <img 
                src={logo.path} 
                alt={logo.name} 
                className="max-h-16 max-w-full object-contain" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;