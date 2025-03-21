import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/lib/theme';

// Types for our debaters data
interface Debater {
  id: number;
  name: string;
  institution: string;
  region: string;
  level: string;
  rank: number;
  points: number;
  avatar: string;
}

export const TopDebaters = () => {
  const { theme } = useTheme();
  const [debaters, setDebaters] = useState<Debater[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  });

  // Fetch debaters data
  useEffect(() => {
    // Simulated API call - would be replaced with actual backend call
    const fetchDebaters = async () => {
      setLoading(true);
      try {
        // This would be replaced with a real API call
        // const response = await fetch('/api/debaters');
        // const data = await response.json();
        
        // Simulated data
        const mockData: Debater[] = [
          {
            id: 1,
            name: "Amanda Morapedi",
            institution: "University of Botswana",
            region: "Southern",
            level: "University",
            rank: 1,
            points: 985,
            avatar: "https://randomuser.me/api/portraits/women/1.jpg"
          },
          {
            id: 2,
            name: "Thato Kenosi",
            institution: "BIUST",
            region: "Northern",
            level: "University",
            rank: 2,
            points: 945,
            avatar: "https://randomuser.me/api/portraits/men/2.jpg"
          },
          {
            id: 3,
            name: "Bokang Moatlhodi",
            institution: "Maru-a-Pula School",
            region: "South East",
            level: "Secondary",
            rank: 3,
            points: 930,
            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
          },
          {
            id: 4,
            name: "Lesego Tlhankane",
            institution: "Botswana Accountancy College",
            region: "Southern",
            level: "University",
            rank: 4,
            points: 915,
            avatar: "https://randomuser.me/api/portraits/women/4.jpg"
          },
          {
            id: 5,
            name: "Kagiso Molefe",
            institution: "Maruapula School",
            region: "South East",
            level: "Secondary",
            rank: 5,
            points: 900,
            avatar: "https://randomuser.me/api/portraits/men/5.jpg"
          },
          {
            id: 6,
            name: "Lorato Tshweneetsile",
            institution: "Moeding College",
            region: "Southern",
            level: "Secondary",
            rank: 6,
            points: 885,
            avatar: "https://randomuser.me/api/portraits/women/6.jpg"
          },
          {
            id: 7,
            name: "Tumisang Dingake",
            institution: "University of Botswana",
            region: "Southern",
            level: "University",
            rank: 7,
            points: 870,
            avatar: "https://randomuser.me/api/portraits/men/7.jpg"
          },
          {
            id: 8,
            name: "Keletso Botlhole",
            institution: "Gaborone Secondary School",
            region: "South East",
            level: "Secondary",
            rank: 8,
            points: 865,
            avatar: "https://randomuser.me/api/portraits/women/8.jpg"
          }
        ];
        
        setDebaters(mockData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching debaters:", error);
        setLoading(false);
      }
    };

    fetchDebaters();
  }, []);

  // Filter debaters based on active filter
  const filteredDebaters = debaters.filter(debater => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'university') return debater.level === 'University';
    if (activeFilter === 'secondary') return debater.level === 'Secondary';
    return true;
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const bgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const borderClass = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

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
            <span className="text-gold">Top</span> Ranked Debaters
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Our most accomplished orators and debaters, ranked by performance in competitive events
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Filter Tabs */}
          <motion.div 
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="inline-flex bg-gray-200 rounded-full p-1">
              <button
                className={`px-6 py-2 rounded-full font-medium ${activeFilter === 'all' ? 'bg-gold text-dark' : 'text-gray-700'}`}
                onClick={() => setActiveFilter('all')}
              >
                All Levels
              </button>
              <button
                className={`px-6 py-2 rounded-full font-medium ${activeFilter === 'university' ? 'bg-gold text-dark' : 'text-gray-700'}`}
                onClick={() => setActiveFilter('university')}
              >
                University
              </button>
              <button
                className={`px-6 py-2 rounded-full font-medium ${activeFilter === 'secondary' ? 'bg-gold text-dark' : 'text-gray-700'}`}
                onClick={() => setActiveFilter('secondary')}
              >
                Secondary
              </button>
            </div>
          </motion.div>

          {/* Debaters Ranking Table */}
          <motion.div
            className={`${bgClass} rounded-xl shadow-lg overflow-hidden`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {loading ? (
              <div className="p-10 text-center">
                <div className="inline-block w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                <p className={`mt-4 ${textClass}`}>Loading top debaters...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`bg-gold text-dark`}>
                      <th className="py-3 px-4 text-left">Rank</th>
                      <th className="py-3 px-4 text-left">Debater</th>
                      <th className="py-3 px-4 text-left">Institution</th>
                      <th className="py-3 px-4 text-left">Region</th>
                      <th className="py-3 px-4 text-left">Level</th>
                      <th className="py-3 px-4 text-left">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDebaters.map((debater) => (
                      <motion.tr 
                        key={debater.id}
                        className={`border-b ${borderClass} hover:bg-gray-100 dark:hover:bg-gray-800`}
                        variants={itemVariants}
                      >
                        <td className="py-3 px-4">
                          <span className="font-bold text-gold">{debater.rank}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <img 
                              src={debater.avatar} 
                              alt={debater.name} 
                              className="w-8 h-8 rounded-full mr-3"
                            />
                            <span className={textClass}>{debater.name}</span>
                          </div>
                        </td>
                        <td className={`py-3 px-4 ${textClass}`}>{debater.institution}</td>
                        <td className={`py-3 px-4 ${textClass}`}>{debater.region}</td>
                        <td className={`py-3 px-4 ${textClass}`}>{debater.level}</td>
                        <td className={`py-3 px-4 ${textClass} font-semibold`}>{debater.points}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>

          <div className="text-center mt-8">
            <motion.button
              className="bg-gold text-dark px-6 py-2 rounded-full font-medium hover:bg-goldLight transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              View Complete Rankings
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDebaters;