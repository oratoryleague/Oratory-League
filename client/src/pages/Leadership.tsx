import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

// Leadership team data structure
interface LeadershipMember {
  id: number;
  name: string;
  title: string;
  subtitle?: string;
  image: string;
  isCircle?: boolean;
}

const Leadership = () => {
  const { theme } = useTheme();
  
  // Board of Directors
  const boardMembers: LeadershipMember[] = [
    {
      id: 1,
      name: "Leatile King Baaitse",
      title: "Chairperson",
      subtitle: "The Oratory Visionary",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      isCircle: false
    },
    {
      id: 2,
      name: "Bokang Petrus Mogomotsi",
      title: "Vice Chairperson",
      subtitle: "The Debate Dynamo",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      isCircle: false
    }
  ];
  
  // Executive Committee
  const executiveMembers: LeadershipMember[] = [
    {
      id: 1,
      name: "Leatile King Baaitse",
      title: "Chief Executive Officer (CEO)",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      isCircle: true
    },
    {
      id: 2,
      name: "Asante Aupa Modala",
      title: "President",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      isCircle: true
    },
    {
      id: 3,
      name: "Thabiso Morupisi-Khan",
      title: "Chief of Staff (CS)",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
      isCircle: true
    },
    {
      id: 4,
      name: "Phalana Tumiso",
      title: "Executive Secretary",
      subtitle: "Phalana Lefhoko Tumiso",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      isCircle: true
    },
    {
      id: 5,
      name: "Chanana Malikongwa",
      title: "Chief Finance Officer (CFO)",
      subtitle: "Chanana Amina Malikongwa",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      isCircle: true
    },
    {
      id: 6,
      name: "Wangu Tsietso",
      title: "Chief Operating Officer (COO)",
      subtitle: "Wangu Brandon Tsietso",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
      isCircle: true
    },
    {
      id: 7,
      name: "Gorutwa Sololo",
      title: "Chief Marketing Officer (CMO)",
      subtitle: "Gorutwa Lejwadilwe Sololo",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      isCircle: true
    }
  ];
  
  // Advisory Committee
  const advisoryMembers: LeadershipMember[] = [
    {
      id: 1,
      name: "Thabang Olebogeng",
      title: "Advisory Committee Member",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      isCircle: false
    },
    {
      id: 2,
      name: "Neolin Jacob",
      title: "Advisory Committee Member",
      image: "https://randomuser.me/api/portraits/women/38.jpg",
      isCircle: false
    }
  ];

  // Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Style classes based on theme
  const sectionBgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const borderClass = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

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
            Our <span className="text-gold">Leadership</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Meet the dedicated individuals who guide and shape the Oratory League's vision and mission
          </p>
        </motion.div>
        
        {/* Board of Directors */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-header text-gold mb-8 text-center"
            variants={itemVariants}
          >
            Board of Directors
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {boardMembers.map((member) => (
              <motion.div
                key={member.id}
                className={`${cardBgClass} rounded-xl shadow-md overflow-hidden border ${borderClass}`}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className={`text-xl font-bold mb-1 ${textClass}`}>{member.name}</h3>
                    <p className="text-gold font-medium mb-2">{member.title}</p>
                    {member.subtitle && (
                      <p className="text-gray-500 italic mb-4">{member.subtitle}</p>
                    )}
                    <div className="mt-4 flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-gold">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-gold">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-gold">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Executive Committee */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-header text-gold mb-8 text-center"
            variants={itemVariants}
          >
            Executive Committee
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {executiveMembers.map((member) => (
              <motion.div
                key={member.id}
                className={`text-center ${cardBgClass} rounded-xl shadow-md p-6 border ${borderClass}`}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mb-4 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-28 h-28 object-cover rounded-full mx-auto border-4 border-gold"
                  />
                </div>
                <h3 className={`text-xl font-bold mb-1 ${textClass}`}>{member.name}</h3>
                <p className="text-gold font-medium mb-2">{member.title}</p>
                {member.subtitle && (
                  <p className="text-gray-500 text-sm italic mb-4">{member.subtitle}</p>
                )}
                <div className="mt-4 flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-gold">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gold">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gold">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Advisory Committee */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-header text-gold mb-8 text-center"
            variants={itemVariants}
          >
            Advisory Committee
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advisoryMembers.map((member) => (
              <motion.div
                key={member.id}
                className={`${cardBgClass} rounded-xl shadow-md overflow-hidden border ${borderClass}`}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className={`text-xl font-bold mb-1 ${textClass}`}>{member.name}</h3>
                    <p className="text-gold font-medium mb-2">{member.title}</p>
                    {member.subtitle && (
                      <p className="text-gray-500 italic mb-4">{member.subtitle}</p>
                    )}
                    <div className="mt-4 flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-gold">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-gold">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-gold">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Other Committees */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-header text-gold mb-8 text-center"
            variants={itemVariants}
          >
            Committees
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Motions Committee",
              "Memberships Committee",
              "Membership Appeals Committee"
            ].map((committee, index) => (
              <motion.div
                key={index}
                className={`${cardBgClass} rounded-xl shadow-md p-6 text-center border ${borderClass}`}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mb-4 w-16 h-16 mx-auto rounded-full bg-gold flex items-center justify-center">
                  <i className="fa-solid fa-users text-2xl text-dark"></i>
                </div>
                <h3 className={`text-xl font-bold ${textClass}`}>{committee}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* General Assembly */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-header text-gold mb-8 text-center"
            variants={itemVariants}
          >
            General Assembly
          </motion.h2>
          
          <div className={`${cardBgClass} rounded-xl shadow-md p-6 max-w-3xl mx-auto border ${borderClass}`}>
            <ul className="space-y-3">
              {[
                "Junior Members",
                "General Members",
                "Professional Members",
                "Institutional Members",
                "Corporate Members"
              ].map((memberType, index) => (
                <motion.li
                  key={index}
                  className={`py-3 border-b ${borderClass} last:border-0 flex items-center`}
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-user-group text-gold mr-3"></i>
                  <span className={textClass}>{memberType}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Leadership;