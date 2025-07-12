import { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log({ email, firstName, consent });
    setSubmitted(true);
    // Reset form
    setEmail('');
    setFirstName('');
    setConsent(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 p-8 rounded-lg shadow-xl max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Subscribe to Our Newsletter</h2>
      
      {submitted ? (
        <div className="text-center text-green-400 py-4">
          <p className="text-lg">Thank you for subscribing!</p>
          <p className="mt-2">We'll keep you updated with the latest news and events.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
              placeholder="Your first name"
            />
          </div>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              className="mt-1 h-4 w-4 text-white focus:ring-white border-gray-700 rounded"
            />
            <label htmlFor="consent" className="ml-2 text-sm text-gray-300">
              I consent to receive newsletters and updates about exhibitions, events, and art collections
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition duration-300 font-medium"
          >
            Subscribe
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default NewsletterForm;