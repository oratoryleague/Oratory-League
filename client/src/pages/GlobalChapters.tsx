import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const GlobalChapters = () => {
  const { theme } = useTheme();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionBgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const borderClass = theme === 'dark' ? 'border-white/10' : 'border-dark/10';

  const chapters = [
    {
      region: "Africa",
      countries: [
        {
          name: "Botswana",
          status: "Active",
          members: "150+",
          events: "Monthly meetings, workshops, competitions",
          icon: "fa-solid fa-flag"
        },
        {
          name: "South Africa",
          status: "Active",
          members: "200+",
          events: "Weekly practice sessions, quarterly competitions",
          icon: "fa-solid fa-flag"
        },
        {
          name: "Kenya",
          status: "Coming Soon",
          members: "Pre-launch",
          events: "Launching in 2024",
          icon: "fa-solid fa-flag"
        }
      ]
    },
    {
      region: "Europe",
      countries: [
        {
          name: "United Kingdom",
          status: "Active",
          members: "180+",
          events: "Bi-weekly meetings, annual conference",
          icon: "fa-solid fa-flag"
        },
        {
          name: "Germany",
          status: "Active",
          members: "120+",
          events: "Monthly workshops, debate tournaments",
          icon: "fa-solid fa-flag"
        }
      ]
    },
    {
      region: "North America",
      countries: [
        {
          name: "United States",
          status: "Active",
          members: "300+",
          events: "Weekly sessions, national championships",
          icon: "fa-solid fa-flag"
        },
        {
          name: "Canada",
          status: "Coming Soon",
          members: "Pre-launch",
          events: "Launching in 2024",
          icon: "fa-solid fa-flag"
        }
      ]
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
            Global <span className="text-gold">Chapters</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Join our growing network of chapters worldwide and connect with fellow orators
          </p>
        </motion.div>

        {/* Chapters Grid */}
        <div className="space-y-12">
          {chapters.map((region, regionIndex) => (
            <motion.div
              key={regionIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (regionIndex * 0.1), duration: 0.5 }}
            >
              <h2 className={`text-3xl font-header text-gold mb-6 ${textClass}`}>
                {region.region}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.countries.map((country, countryIndex) => (
                  <motion.div
                    key={countryIndex}
                    className={`${cardBgClass} rounded-xl shadow-lg p-6 border ${borderClass}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (countryIndex * 0.1), duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                        <i className={`${country.icon} text-xl text-dark`}></i>
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${textClass}`}>{country.name}</h3>
                        <span className={`text-sm ${
                          country.status === 'Active' ? 'text-green-500' : 'text-yellow-500'
                        }`}>
                          {country.status}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <i className="fa-solid fa-users text-gold mr-2"></i>
                        <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {country.members} members
                        </span>
                      </div>
                      <div className="flex items-start">
                        <i className="fa-solid fa-calendar text-gold mr-2 mt-1"></i>
                        <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {country.events}
                        </span>
                      </div>
                    </div>
                    <button className="mt-6 w-full py-2 border-2 border-gold text-gold rounded-lg font-medium hover:bg-gold hover:text-dark transition-colors">
                      Learn More
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Start a Chapter Section */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass}`}>
            <div className="text-center">
              <h2 className="text-3xl font-header text-gold mb-4">Start a Chapter in Your Region</h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${textClass}`}>
                Want to bring Oratory League to your country? We're always looking for passionate individuals to start new chapters.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Support & Resources",
                    description: "Get comprehensive support and resources to establish your chapter",
                    icon: "fa-solid fa-hands-helping"
                  },
                  {
                    title: "Training",
                    description: "Receive training on chapter management and leadership",
                    icon: "fa-solid fa-graduation-cap"
                  },
                  {
                    title: "Global Network",
                    description: "Connect with other chapter leaders worldwide",
                    icon: "fa-solid fa-globe"
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
              <button className="bg-gold text-dark px-8 py-4 rounded-lg font-medium hover:bg-goldLight transition-colors">
                Apply to Start a Chapter
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default GlobalChapters; 