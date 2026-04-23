import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen"
    >
      <div className="section">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
          <div className="glass-card p-8 text-center">
            <p className="text-gray-300">About page coming soon...</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;