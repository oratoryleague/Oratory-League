import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import worldMap from '@/assets/img/World Map.jpg';

interface CountryCardProps {
  image: string;
  title: string;
  description: string;
  featuredCountries: string;
  delay: number;
}

const CountryCard = ({ image, title, description, featuredCountries, delay }: CountryCardProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      className={`${theme === 'dark' ? 'bg-darkAccent' : 'bg-white/90'} p-4 overflow-hidden group country-card card`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      whileHover={{ y: -5 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gold mb-2">{title}</h3>
        <p className={theme === 'dark' ? 'text-white/80' : 'text-dark/80'}>{description}</p>
      </div>
      <div className="country-overlay">
        <p>{featuredCountries}</p>
      </div>
    </motion.div>
  );
};

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
    <section className={`${bgClass} py-20`}>
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display text-gold">
            Global Reach
          </h2>
        </motion.div>

        {/* Image and Content Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={worldMap}
              alt="Global Reach"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
            
            {/* Content Overlay */}
            <div className={`absolute bottom-8 left-8 p-8 w-full md:w-1/2 ${bgClass} bg-opacity-90 rounded-2xl shadow-lg`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <p className={`text-lg ${textClass}`}>
                  In just a few months, Oratory League has established presence in 3 countries and countring. By the end of 2026, we would have made a strong presence in 20 countries.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`${cardBgClass} p-4 rounded-xl border ${borderClass} text-center`}
                    >
                      <div className="text-2xl font-bold text-gold mb-1">{stat.value}</div>
                      <div className={`text-sm ${textClass}`}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
