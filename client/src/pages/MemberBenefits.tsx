import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const MemberBenefits = () => {
  const { theme } = useTheme();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionBgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const borderClass = theme === 'dark' ? 'border-white/10' : 'border-dark/10';

  const benefitCategories = [
    {
      title: "Learning Resources",
      icon: "fa-solid fa-book",
      benefits: [
        {
          title: "Comprehensive Training Materials",
          description: "Access to extensive library of public speaking and debate resources",
          icon: "fa-solid fa-graduation-cap"
        },
        {
          title: "Video Tutorials",
          description: "Expert-led video content covering various aspects of oratory",
          icon: "fa-solid fa-video"
        },
        {
          title: "Practice Exercises",
          description: "Structured exercises to improve your speaking skills",
          icon: "fa-solid fa-dumbbell"
        }
      ]
    },
    {
      title: "Community Access",
      icon: "fa-solid fa-users",
      benefits: [
        {
          title: "Global Network",
          description: "Connect with speakers and debaters worldwide",
          icon: "fa-solid fa-globe"
        },
        {
          title: "Local Chapters",
          description: "Join local communities for in-person events and practice",
          icon: "fa-solid fa-building"
        },
        {
          title: "Mentorship Program",
          description: "Get guidance from experienced speakers and debaters",
          icon: "fa-solid fa-handshake"
        }
      ]
    },
    {
      title: "Professional Development",
      icon: "fa-solid fa-briefcase",
      benefits: [
        {
          title: "Certification Programs",
          description: "Earn recognized certifications in public speaking and debate",
          icon: "fa-solid fa-certificate"
        },
        {
          title: "Career Opportunities",
          description: "Access to job boards and professional networking events",
          icon: "fa-solid fa-briefcase"
        },
        {
          title: "Leadership Training",
          description: "Develop leadership skills through various programs",
          icon: "fa-solid fa-flag"
        }
      ]
    },
    {
      title: "Events & Competitions",
      icon: "fa-solid fa-trophy",
      benefits: [
        {
          title: "Competition Access",
          description: "Participate in local and international competitions",
          icon: "fa-solid fa-medal"
        },
        {
          title: "Workshops & Seminars",
          description: "Regular online and in-person learning events",
          icon: "fa-solid fa-chalkboard-teacher"
        },
        {
          title: "Grand Orate",
          description: "Exclusive access to our flagship annual event",
          icon: "fa-solid fa-star"
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
            Member <span className="text-gold">Benefits</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Discover the exclusive advantages of being an Oratory League member
          </p>
        </motion.div>

        {/* Benefits Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefitCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                  <i className={`${category.icon} text-xl text-dark`}></i>
                </div>
                <h2 className={`text-2xl font-bold ${textClass}`}>{category.title}</h2>
              </div>
              <div className="space-y-6">
                {category.benefits.map((benefit, benefitIndex) => (
                  <motion.div
                    key={benefitIndex}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (benefitIndex * 0.1), duration: 0.5 }}
                  >
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${benefit.icon} text-gold`}></i>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-1 ${textClass}`}>{benefit.title}</h3>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass}`}>
            <h2 className="text-3xl font-header text-gold mb-8 text-center">Additional Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Digital Resources",
                  description: "Access to our exclusive digital library and mobile app",
                  icon: "fa-solid fa-mobile-screen"
                },
                {
                  title: "Insurance Coverage",
                  description: "Event insurance coverage for competitions and workshops",
                  icon: "fa-solid fa-shield-halved"
                },
                {
                  title: "Discounts",
                  description: "Special member discounts on events and merchandise",
                  icon: "fa-solid fa-tag"
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
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <p className={`text-xl mb-6 ${textClass}`}>
            Ready to unlock all these benefits?
          </p>
          <button className="bg-gold text-dark px-8 py-4 rounded-lg font-medium hover:bg-goldLight transition-colors">
            Join Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default MemberBenefits; 