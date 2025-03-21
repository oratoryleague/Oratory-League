import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/lib/theme';

export const SponsorDonate = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('sponsor');
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';

  return (
    <section 
      ref={ref}
      className={`py-20 ${theme === 'dark' ? 'bg-dark' : 'bg-cream'}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-header mb-4">
            <span className="text-gold">Support</span> Oratory League
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Join us in nurturing the next generation of orators and debaters through your generous support
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <motion.div 
              className="inline-flex bg-gray-200 rounded-full p-1"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <button
                className={`px-6 py-2 rounded-full font-medium ${activeTab === 'sponsor' ? 'bg-gold text-dark' : 'text-gray-700'}`}
                onClick={() => setActiveTab('sponsor')}
              >
                Sponsor
              </button>
              <button
                className={`px-6 py-2 rounded-full font-medium ${activeTab === 'donate' ? 'bg-gold text-dark' : 'text-gray-700'}`}
                onClick={() => setActiveTab('donate')}
              >
                Donate
              </button>
            </motion.div>
          </div>

          {/* Sponsor Content */}
          {activeTab === 'sponsor' && (
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6"
            >
              <motion.div 
                className={`${cardBgClass} rounded-xl shadow-lg overflow-hidden`}
                variants={itemVariants}
              >
                <div className="bg-gold py-3 text-center">
                  <h3 className="text-xl font-bold text-dark">Bronze</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className={`text-3xl font-bold ${textClass}`}>$1,000</span>
                    <span className={`text-gray-500 block mt-1`}>Per Year</span>
                  </div>
                  <ul className={`${textClass} space-y-3 mb-8`}>
                    <li className="flex items-center">
                      <i className="fa-solid fa-check text-gold mr-2"></i>
                      Logo on website
                    </li>
                    <li className="flex items-center">
                      <i className="fa-solid fa-check text-gold mr-2"></i>
                      Mention in newsletters
                    </li>
                    <li className="flex items-center">
                      <i className="fa-solid fa-check text-gold mr-2"></i>
                      Social media shoutout
                    </li>
                  </ul>
                  <div className="text-center">
                    <motion.button
                      className="bg-gold text-dark px-6 py-2 rounded-full font-medium hover:bg-goldLight transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Become a Sponsor
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className={`${cardBgClass} rounded-xl shadow-lg overflow-hidden border-2 border-gold scale-105 z-10`}
                variants={itemVariants}
              >
                <div className="bg-gold py-3 text-center">
                  <h3 className="text-xl font-bold text-dark">Silver</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className={`text-3xl font-bold ${textClass}`}>$5,000</span>
                    <span className={`text-gray-500 block mt-1`}>Per Year</span>
                  </div>
                  <ul className={`${textClass} space-y-3 mb-8`}>
                    <li className="flex items-center">
                      <i className="fa-solid fa-check text-gold mr-2"></i>
                      All Bronze benefits
                    </li>
                    <li className="flex items-center">
                      <i className="fa-solid fa-check text-gold mr-2"></i>
                      Logo on event materials
                    </li>
                    <li className="flex items-center">
                      <i className="fa-solid fa-check text-gold mr-2"></i>
                      Speaking opportunity
                    </li>
                    <li className="flex items-center">
                      <i className="fa-solid fa-check text-gold mr-2"></i>
                      2 VIP event passes
                    </li>
                  </ul>
                  <div className="text-center">
                    <motion.button
                      className="bg-gold text-dark px-6 py-2 rounded-full font-medium hover:bg-goldLight transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Become a Sponsor
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className={`${cardBgClass} rounded-xl shadow-lg overflow-hidden`}
                variants={itemVariants}
              >
                <div className="bg-gold py-3 text-center">
                  <h3 className="text-xl font-bold text-dark">Gold</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className={`text-3xl font-bold ${textClass}`}>$10,000</span>
                    <span className={`text-gray-500 block mt-1`}>Per Year</span>
                  </div>
                  <ul className={`${textClass} space-y-3 mb-8`}>
                    <li className="flex items-center">
                      <i className="fa-solid fa-check text-gold mr-2"></i>
                      All Silver benefits
                    </li>
                    <li className="flex items-center">
                      <i className="fa-solid fa-check text-gold mr-2"></i>
                      Named award/competition
                    </li>
                    <li className="flex items-center">
                      <i className="fa-solid fa-check text-gold mr-2"></i>
                      Press release mention
                    </li>
                    <li className="flex items-center">
                      <i className="fa-solid fa-check text-gold mr-2"></i>
                      5 VIP event passes
                    </li>
                  </ul>
                  <div className="text-center">
                    <motion.button
                      className="bg-gold text-dark px-6 py-2 rounded-full font-medium hover:bg-goldLight transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Become a Sponsor
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Donate Content */}
          {activeTab === 'donate' && (
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className={`${cardBgClass} rounded-xl shadow-lg p-8`}
            >
              <div className="text-center mb-8">
                <motion.h3 
                  className={`text-2xl font-bold mb-4 ${textClass}`}
                  variants={itemVariants}
                >
                  Make a Difference Today
                </motion.h3>
                <motion.p 
                  className={`${textClass} max-w-2xl mx-auto`}
                  variants={itemVariants}
                >
                  Your donation helps us provide opportunities to aspiring orators and debaters, regardless of their background or financial situation. Every contribution makes a difference.
                </motion.p>
              </div>

              <motion.div 
                className="max-w-md mx-auto"
                variants={itemVariants}
              >
                <div className="mb-6">
                  <label className={`block mb-2 font-medium ${textClass}`}>Select Amount</label>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {['$10', '$25', '$50', '$100', '$250', 'Custom'].map((amount) => (
                      <button
                        key={amount}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-medium transition-colors"
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <motion.button
                    className="bg-gold text-dark px-8 py-3 rounded-full font-bold hover:bg-goldLight transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Donate Now
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SponsorDonate;