import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const MissionVision = () => {
  const { theme } = useTheme();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionBgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const borderClass = theme === 'dark' ? 'border-white/10' : 'border-dark/10';

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
            Our <span className="text-gold">Mission</span> & <span className="text-gold">Vision</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Empowering voices, shaping minds, and building a world where every individual can express themselves with confidence and clarity
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass}`}>
            <h2 className="text-3xl font-header text-gold mb-6">Our Mission</h2>
            <p className={`text-lg ${textClass} mb-6`}>
              To cultivate a global community of effective communicators who inspire, educate, and transform society through the power of oratory and debate.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Empower",
                  description: "Equip individuals with the skills and confidence to express their ideas effectively",
                  icon: "fa-solid fa-bullhorn"
                },
                {
                  title: "Educate",
                  description: "Provide comprehensive training in public speaking and debate techniques",
                  icon: "fa-solid fa-graduation-cap"
                },
                {
                  title: "Transform",
                  description: "Create positive change through informed and persuasive communication",
                  icon: "fa-solid fa-arrows-rotate"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
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

        {/* Vision Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass}`}>
            <h2 className="text-3xl font-header text-gold mb-6">Our Vision</h2>
            <p className={`text-lg ${textClass} mb-6`}>
              To be the world's leading platform for oratory excellence, where diverse voices come together to create meaningful dialogue and drive positive change.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Global Impact",
                  description: "Establishing a worldwide network of skilled communicators who can address global challenges",
                  icon: "fa-solid fa-globe"
                },
                {
                  title: "Innovation Hub",
                  description: "Leading the evolution of public speaking and debate through modern techniques and technology",
                  icon: "fa-solid fa-lightbulb"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
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

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass}`}>
            <h2 className="text-3xl font-header text-gold mb-6 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Excellence",
                  description: "Striving for the highest standards in everything we do",
                  icon: "fa-solid fa-star"
                },
                {
                  title: "Integrity",
                  description: "Maintaining honesty and ethical principles in all actions",
                  icon: "fa-solid fa-shield-halved"
                },
                {
                  title: "Inclusivity",
                  description: "Welcoming diverse perspectives and backgrounds",
                  icon: "fa-solid fa-users"
                },
                {
                  title: "Innovation",
                  description: "Embracing new ideas and approaches to communication",
                  icon: "fa-solid fa-rocket"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
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

export default MissionVision; 