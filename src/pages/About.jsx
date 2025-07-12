import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About LearnEase</h1>
          <p className="text-xl text-gray-600">Transforming education through innovation and accessibility</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              Founded by David Thompson in 2023, LearnEase was born from a vision to make quality education accessible to everyone. With over 15 years of experience in education and technology, David recognized the need for a platform that combines innovative learning methods with user-friendly technology.
            </p>
            <p className="text-gray-600">
              Today, LearnEase serves thousands of students worldwide, offering courses in various disciplines from top educators and industry experts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="David Thompson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">David Thompson</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;