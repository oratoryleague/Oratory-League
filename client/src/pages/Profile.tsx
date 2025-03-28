import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-display text-gold mb-8">Profile</h1>
      <p className="text-lg">Profile management coming soon...</p>
    </motion.div>
  );
};

export default Profile; 