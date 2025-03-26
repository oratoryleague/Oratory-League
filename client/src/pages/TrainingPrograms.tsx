import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const TrainingPrograms = () => {
  const { theme } = useTheme();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionBgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const borderClass = theme === 'dark' ? 'border-white/10' : 'border-dark/10';

  const programs = [
    {
      title: "Public Speaking Fundamentals",
      level: "Beginner",
      duration: "8 weeks",
      description: "Master the basics of effective public speaking and build your confidence",
      topics: [
        "Voice projection and articulation",
        "Body language and gestures",
        "Speech structure and organization",
        "Audience engagement techniques"
      ],
      icon: "fa-solid fa-bullhorn"
    },
    {
      title: "Advanced Debate Techniques",
      level: "Intermediate",
      duration: "12 weeks",
      description: "Develop advanced debate skills and critical thinking abilities",
      topics: [
        "Argument construction",
        "Research methodology",
        "Cross-examination techniques",
        "Debate formats and styles"
      ],
      icon: "fa-solid fa-gavel"
    },
    {
      title: "Persuasive Communication",
      level: "Intermediate",
      duration: "10 weeks",
      description: "Learn to influence and persuade through powerful communication",
      topics: [
        "Rhetorical devices",
        "Emotional intelligence",
        "Storytelling techniques",
        "Audience psychology"
      ],
      icon: "fa-solid fa-comments"
    },
    {
      title: "Leadership Communication",
      level: "Advanced",
      duration: "12 weeks",
      description: "Enhance your leadership presence and communication effectiveness",
      topics: [
        "Executive presence",
        "Strategic communication",
        "Crisis management",
        "Team motivation"
      ],
      icon: "fa-solid fa-flag"
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
            Training <span className="text-gold">Programs</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Comprehensive programs designed to enhance your speaking and debate skills at every level
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                  <i className={`${program.icon} text-xl text-dark`}></i>
                </div>
                <div>
                  <h2 className={`text-2xl font-bold ${textClass}`}>{program.title}</h2>
                  <div className="flex items-center mt-2">
                    <span className="text-gold text-sm font-medium">{program.level}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-400 text-sm">{program.duration}</span>
                  </div>
                </div>
              </div>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {program.description}
              </p>
              <h3 className={`text-lg font-bold mb-4 ${textClass}`}>Key Topics:</h3>
              <ul className="space-y-3">
                {program.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-center">
                    <i className="fa-solid fa-check text-gold mr-2"></i>
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full py-3 bg-gold text-dark rounded-lg font-medium hover:bg-goldLight transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass}`}>
            <h2 className="text-3xl font-header text-gold mb-8 text-center">Program Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Expert Instructors",
                  description: "Learn from experienced professionals in public speaking and debate",
                  icon: "fa-solid fa-chalkboard-teacher"
                },
                {
                  title: "Interactive Learning",
                  description: "Engage in hands-on practice and real-world scenarios",
                  icon: "fa-solid fa-users"
                },
                {
                  title: "Flexible Schedule",
                  description: "Online and in-person options to fit your lifestyle",
                  icon: "fa-solid fa-calendar"
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
            Ready to enhance your speaking and debate skills?
          </p>
          <button className="bg-gold text-dark px-8 py-4 rounded-lg font-medium hover:bg-goldLight transition-colors">
            Enroll Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TrainingPrograms; 