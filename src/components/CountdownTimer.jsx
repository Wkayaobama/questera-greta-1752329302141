import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 60,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-white"
      >
        Website Official Opening
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex justify-center items-center space-x-8"
      >
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 min-w-[120px]">
              <div className="font-mono text-4xl font-bold text-white mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-400 uppercase text-sm tracking-wider">
                {unit}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CountdownTimer;