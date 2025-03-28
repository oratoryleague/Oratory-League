import { motion } from 'framer-motion';

const Events = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-display text-gold mb-8">Events & Bookings</h1>
      <p className="text-lg">Events and bookings system coming soon...</p>
    </motion.div>
  );
};

export default Events; 