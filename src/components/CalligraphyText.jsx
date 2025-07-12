import { motion } from 'framer-motion';

const CalligraphyText = ({ text }) => {
  return (
    <div className="py-8 px-4">
      <motion.p 
        className="font-serif text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
        style={{ 
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          letterSpacing: '0.5px',
          lineHeight: '1.6'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default CalligraphyText;