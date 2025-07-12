import { motion } from 'framer-motion';

const BrushStroke = ({ position = 'left', color = 'black', className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`absolute pointer-events-none ${className}`}
      style={{
        maskImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDI1QzAgMTEuMTkzIDExLjE5MyAwIDI1IDBIMTc1QzE4OC44MDcgMCAyMDAgMTEuMTkzIDIwMCAyNUMyMDAgMzguODA3IDE4OC44MDcgNTAgMTc1IDUwSDI1QzExLjE5MyA1MCAwIDM4LjgwNyAwIDI1WiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+')",
        WebkitMaskImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDI1QzAgMTEuMTkzIDExLjE5MyAwIDI1IDBIMTc1QzE4OC44MDcgMCAyMDAgMTEuMTkzIDIwMCAyNUMyMDAgMzguODA3IDE4OC44MDcgNTAgMTc1IDUwSDI1QzExLjE5MyA1MCAwIDM4LjgwNyAwIDI1WiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+')",
        backgroundColor: color,
        [position]: 0,
      }}
    />
  );
};

export default BrushStroke;