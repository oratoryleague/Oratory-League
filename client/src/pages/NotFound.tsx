import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomNav from '@/components/ui/BottomNav';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative pb-16"
    >
      <div className="pt-16">
        <div className="max-w-screen-xl mx-auto px-4 py-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-gold hover:bg-gold/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
      <BottomNav />
    </motion.div>
  );
};

export default NotFound; 