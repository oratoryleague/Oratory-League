import { motion, useInView } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import worldMap from '@/assets/img/World Map.jpg';

const GlobalReach = () => {
  const { theme } = useTheme();
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const borderClass = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const bgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';

  const stats = [
    { label: "Targeted Countries", value: "40+" },
    { label: "Targeted Continents", value: "5+" },
    { label: "Targeted Members", value: "10k+" }
  ];

  return (
    <section className={`${bgClass} py-20 relative overflow-hidden`}>
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-gold mb-4">
            Global Reach
          </h2>
          <p className={`text-lg md:text-xl ${textClass} max-w-2xl mx-auto`}>
            Expanding our influence across continents, bringing the power of oratory to every corner of the world.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - World Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={worldMap}
              alt="Global Reach"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Description */}
            <div className={`${cardBgClass} p-6 rounded-2xl shadow-lg border ${borderClass}`}>
              <p className={`text-lg ${textClass} leading-relaxed`}>
                In just a few months, Oratory League has established presence in 3 countries and counting. By the end of 2026, we would have made a strong presence in 20 countries, creating a global network of skilled orators and public speakers.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${cardBgClass} p-6 rounded-xl border ${borderClass} text-center hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="text-3xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className={`text-sm ${textClass} opacity-80`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Featured Countries */}
            <div className={`${cardBgClass} p-6 rounded-2xl shadow-lg border ${borderClass}`}>
              <h3 className={`text-xl font-bold text-gold mb-4`}>Featured Countries</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {['Botswana', 'South Africa', 'Namibia', 'Zambia', 'Zimbabwe', 'Kenya'].map((country, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`${theme === 'dark' ? 'bg-dark' : 'bg-cream'} p-3 rounded-lg text-center ${textClass} hover:shadow-md transition-shadow duration-300`}
                  >
                    {country}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
