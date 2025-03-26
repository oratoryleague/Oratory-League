import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const JoinOL = () => {
  const { theme } = useTheme();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionBgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const borderClass = theme === 'dark' ? 'border-white/10' : 'border-dark/10';

  const membershipTypes = [
    {
      title: "Junior Member",
      price: "Free",
      description: "Perfect for students and young professionals starting their journey in public speaking",
      features: [
        "Access to basic resources",
        "Monthly newsletter",
        "Local chapter events",
        "Basic training materials"
      ],
      icon: "fa-solid fa-graduation-cap"
    },
    {
      title: "General Member",
      price: "$49/year",
      description: "Ideal for individuals passionate about improving their speaking skills",
      features: [
        "All Junior Member benefits",
        "Advanced training materials",
        "Online workshops",
        "Mentorship opportunities",
        "Competition participation"
      ],
      icon: "fa-solid fa-user"
    },
    {
      title: "Professional Member",
      price: "$99/year",
      description: "For experienced speakers and debate professionals",
      features: [
        "All General Member benefits",
        "Exclusive masterclasses",
        "International events access",
        "Leadership opportunities",
        "Professional certification"
      ],
      icon: "fa-solid fa-briefcase"
    },
    {
      title: "Institutional Member",
      price: "Custom",
      description: "For schools, universities, and organizations",
      features: [
        "Bulk membership options",
        "Custom training programs",
        "Institutional support",
        "Team competitions",
        "Dedicated account manager"
      ],
      icon: "fa-solid fa-building-columns"
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
            Join <span className="text-gold">Oratory League</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Become part of a global community dedicated to excellence in public speaking and debate
          </p>
        </motion.div>

        {/* Membership Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {membershipTypes.map((type, index) => (
            <motion.div
              key={index}
              className={`${cardBgClass} rounded-xl shadow-lg p-6 border ${borderClass}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${type.icon} text-2xl text-dark`}></i>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${textClass}`}>{type.title}</h3>
                <p className="text-gold text-2xl font-bold mb-2">{type.price}</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {type.description}
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <i className="fa-solid fa-check text-gold mr-2"></i>
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gold text-dark rounded-lg font-medium hover:bg-goldLight transition-colors">
                Join Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Why Join Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass}`}>
            <h2 className="text-3xl font-header text-gold mb-8 text-center">Why Join Oratory League?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Global Network",
                  description: "Connect with speakers and debaters from around the world",
                  icon: "fa-solid fa-globe"
                },
                {
                  title: "Skill Development",
                  description: "Access comprehensive training and resources to improve your speaking abilities",
                  icon: "fa-solid fa-chart-line"
                },
                {
                  title: "Career Growth",
                  description: "Enhance your professional profile and open new opportunities",
                  icon: "fa-solid fa-briefcase"
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

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <p className={`text-xl mb-6 ${textClass}`}>
            Ready to start your journey with Oratory League?
          </p>
          <button className="bg-gold text-dark px-8 py-4 rounded-lg font-medium hover:bg-goldLight transition-colors">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinOL; 