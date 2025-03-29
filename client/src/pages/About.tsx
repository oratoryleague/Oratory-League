import { motion } from 'framer-motion';
import { BottomNav } from '@/components/ui/BottomNav';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative pb-16"
    >
      <div className="pt-16">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Oratory League
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              The Oratory League is a global platform dedicated to empowering voices and fostering meaningful dialogue through the art of public speaking.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our mission is to create a community where individuals can develop their oratory skills, share their perspectives, and engage in constructive discourse on important topics.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join us in our journey to make public speaking accessible, engaging, and transformative for everyone.
            </p>
          </div>
        </div>
      </div>
      <BottomNav />
    </motion.div>
  );
};

export default About; 