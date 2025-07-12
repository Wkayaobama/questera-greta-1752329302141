import { motion } from 'framer-motion';

const ArtisticDivider = ({ className = '' }) => {
  return (
    <motion.div 
      className={`w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8 ${className}`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default ArtisticDivider;