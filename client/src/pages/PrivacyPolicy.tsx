import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const PrivacyPolicy = () => {
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
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number)",
        "Profile information (bio, profile picture)",
        "Usage data (interactions with our platform)",
        "Technical data (IP address, browser type)"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To notify you about changes to our services",
        "To provide customer support",
        "To gather analysis or valuable information"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate security measures",
        "Your data is encrypted during transmission",
        "Regular security assessments are conducted",
        "Access to personal data is strictly controlled"
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access your personal data",
        "Correct inaccurate data",
        "Request deletion of your data",
        "Object to data processing"
      ]
    },
    {
      title: "Cookies Policy",
      content: [
        "We use cookies to improve your experience",
        "You can control cookie preferences",
        "Essential cookies are required for functionality",
        "Analytics cookies help us improve our services"
      ]
    },
    {
      title: "Contact Us",
      content: [
        "Email: privacy@oratoryleague.com",
        "Phone: +1 (555) 123-4567",
        "Address: 123 Oratory Street, City, Country",
        "For any privacy-related concerns"
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
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Last updated: March 15, 2024
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="brutal-border p-8 mb-12 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <p className={`text-lg ${textClass} mb-4`}>
            At Oratory League, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
          </p>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Please read this privacy policy carefully. By using our platform, you consent to the practices described in this policy.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="brutal-border p-8"
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

        {/* Updates Section */}
        <motion.div
          className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass} mt-12`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <h2 className={`text-2xl font-bold mb-4 ${textClass}`}>Updates to This Policy</h2>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <p className={`text-xl mb-6 ${textClass}`}>
            Have questions about our privacy policy?
          </p>
          <button className="bg-gold text-dark px-8 py-4 rounded-lg font-medium hover:bg-goldLight transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 