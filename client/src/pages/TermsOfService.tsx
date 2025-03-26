import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const TermsOfService = () => {
  const { theme } = useTheme();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionBgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const borderClass = theme === 'dark' ? 'border-white/10' : 'border-dark/10';

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using the Oratory League platform, you agree to be bound by these Terms of Service.",
        "If you disagree with any part of these terms, you may not access our platform.",
        "These terms apply to all users, including members, visitors, and contributors."
      ]
    },
    {
      title: "2. User Accounts",
      content: [
        "You must be at least 13 years old to create an account",
        "You are responsible for maintaining the confidentiality of your account",
        "You must provide accurate and complete information",
        "You are responsible for all activities under your account"
      ]
    },
    {
      title: "3. Membership and Payments",
      content: [
        "Membership fees are billed according to your selected plan",
        "All payments are non-refundable unless required by law",
        "We reserve the right to modify pricing with notice",
        "Membership benefits are subject to change"
      ]
    },
    {
      title: "4. User Conduct",
      content: [
        "Respect other members and their rights",
        "Do not engage in harmful or disruptive behavior",
        "Follow our community guidelines",
        "Report any violations to our team"
      ]
    },
    {
      title: "5. Intellectual Property",
      content: [
        "All content on our platform is protected by copyright",
        "Users retain rights to their uploaded content",
        "You may not use our content without permission",
        "Report any copyright violations"
      ]
    },
    {
      title: "6. Termination",
      content: [
        "We may terminate accounts that violate our terms",
        "Users may cancel their membership at any time",
        "Termination does not affect your obligations",
        "Some terms survive account termination"
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
            Terms of <span className="text-gold">Service</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Last updated: March 15, 2024
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass} mb-12`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <p className={`text-lg ${textClass} mb-4`}>
            Welcome to Oratory League. These Terms of Service govern your use of our platform and services.
          </p>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Please read these terms carefully before using our platform. By using our services, you agree to be bound by these terms.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${textClass}`}>{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <i className="fa-solid fa-check text-gold mr-3 mt-1"></i>
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass} mt-12`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <h2 className={`text-2xl font-bold mb-4 ${textClass}`}>Disclaimer</h2>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            The information provided on our platform is for general informational purposes only. We make no warranties about the completeness, reliability, or accuracy of this information.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <p className={`text-xl mb-6 ${textClass}`}>
            Questions about our terms of service?
          </p>
          <button className="bg-gold text-dark px-8 py-4 rounded-lg font-medium hover:bg-goldLight transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService; 