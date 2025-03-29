import { motion } from 'framer-motion';
import { BottomNav } from '@/components/ui/BottomNav';

const Contact = () => {
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
            Contact Us
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Have questions or want to get involved? We'd love to hear from you!
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  contact@oratoryleague.com
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Social Media
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com/oratoryLeague"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold/80"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com/company/oratory-league"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold/80"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </motion.div>
  );
};

export default Contact; 