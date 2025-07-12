import { motion } from 'framer-motion';
import BrushStroke from './BrushStroke';

const Hero = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with B&W Filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: 'grayscale(100%)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Decorative Brush Strokes */}
      <BrushStroke position="left" className="top-1/4 -rotate-12" />
      <BrushStroke position="right" className="bottom-1/4 rotate-12" color="#333" />

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center font-serif">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl text-center font-serif italic">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;