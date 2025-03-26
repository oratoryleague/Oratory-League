import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const CodeOfConduct = () => {
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
      title: "Our Commitment",
      content: [
        "We are committed to providing a welcoming and inspiring community for all.",
        "We pledge to make participation in our community a harassment-free experience for everyone.",
        "We value respect, inclusivity, and diversity in all forms."
      ]
    },
    {
      title: "Expected Behavior",
      content: [
        "Be respectful and considerate of others",
        "Use welcoming and inclusive language",
        "Be empathetic towards differing viewpoints",
        "Focus on constructive dialogue",
        "Show courtesy and respect towards other community members"
      ]
    },
    {
      title: "Unacceptable Behavior",
      content: [
        "Harassment, bullying, or intimidation",
        "Discriminatory or offensive language",
        "Personal attacks or insults",
        "Inappropriate or unwanted attention",
        "Disruptive or disrespectful behavior"
      ]
    },
    {
      title: "Consequences",
      content: [
        "First violation: Warning",
        "Second violation: Temporary suspension",
        "Third violation: Permanent ban",
        "Severe violations may result in immediate action",
        "Appeals process available for all decisions"
      ]
    },
    {
      title: "Reporting Guidelines",
      content: [
        "Report violations to our moderation team",
        "Provide specific details about the incident",
        "Include any relevant evidence or screenshots",
        "Reports will be handled confidentially",
        "We take all reports seriously"
      ]
    },
    {
      title: "Scope",
      content: [
        "Applies to all community spaces",
        "Includes both online and offline interactions",
        "Covers all official Oratory League events",
        "Applies to all members and visitors",
        "Enforced by our moderation team"
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
            Code of <span className="text-gold">Conduct</span>
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
            The Oratory League is dedicated to providing a safe, inclusive, and respectful environment for all members.
          </p>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            This Code of Conduct outlines our expectations for all those who participate in our community, as well as the consequences for unacceptable behavior.
          </p>
        </motion.div>

        {/* Code Sections */}
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

        {/* Contact Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <p className={`text-xl mb-6 ${textClass}`}>
            Need to report a violation or have questions?
          </p>
          <button className="bg-gold text-dark px-8 py-4 rounded-lg font-medium hover:bg-goldLight transition-colors">
            Report an Issue
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CodeOfConduct; 