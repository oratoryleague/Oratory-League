import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const OurHistory = () => {
  const { theme } = useTheme();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionBgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const borderClass = theme === 'dark' ? 'border-white/10' : 'border-dark/10';

  const timelineEvents = [
    {
      year: "2024",
      title: "The Beginning",
      description: "Oratory League was founded with a vision to revolutionize public speaking and debate education globally.",
      icon: "fa-solid fa-flag"
    },
    {
      year: "2024",
      title: "First Chapter",
      description: "Established our first chapter in Botswana, marking the beginning of our global expansion.",
      icon: "fa-solid fa-building"
    },
    {
      year: "2024",
      title: "Grand Orate Launch",
      description: "Successfully launched our flagship event, Grand Orate, bringing together speakers from across the region.",
      icon: "fa-solid fa-trophy"
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanded to multiple countries, establishing a strong presence in Africa and beyond.",
      icon: "fa-solid fa-globe"
    },
    {
      year: "2025",
      title: "Digital Platform",
      description: "Launched our digital learning platform, making oratory education accessible worldwide.",
      icon: "fa-solid fa-laptop"
    },
    {
      year: "2026",
      title: "Future Vision",
      description: "Setting ambitious goals for global reach and impact in the world of public speaking.",
      icon: "fa-solid fa-rocket"
    }
  ];

  return (
    <div className={`${sectionBgClass} min-h-screen pt-24 pb-20`}>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-header mb-4">
            Our <span className="text-gold">History</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            A journey of growth, innovation, and commitment to excellence in public speaking and debate
          </p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold"></div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
              >
                {/* Timeline Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`${cardBgClass} rounded-xl shadow-lg p-6 border ${borderClass}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                        <i className={`${event.icon} text-xl text-dark`}></i>
                      </div>
                      <div>
                        <span className="text-gold font-bold text-lg">{event.year}</span>
                        <h3 className={`text-xl font-bold ${textClass}`}>{event.title}</h3>
                      </div>
                    </div>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision Section */}
        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <div className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass}`}>
            <h2 className="text-3xl font-header text-gold mb-6 text-center">Our Future Vision</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Global Reach",
                  description: "Expanding to 20+ countries by 2026, creating a truly international network of orators",
                  icon: "fa-solid fa-globe-africa"
                },
                {
                  title: "Digital Innovation",
                  description: "Developing cutting-edge digital tools and platforms for remote learning and practice",
                  icon: "fa-solid fa-microchip"
                },
                {
                  title: "Community Impact",
                  description: "Creating positive change through effective communication and public discourse",
                  icon: "fa-solid fa-heart"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-2xl text-dark`}></i>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${textClass}`}>{item.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default OurHistory; 