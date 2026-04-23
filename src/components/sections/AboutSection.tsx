import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, stats } from '../../data/portfolioData';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id='about' className='py-20 md:py-32 relative overflow-hidden'>
      {/* Background Decoration */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl' />
      </div>

      <div
        className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            About <span className='gradient-text'>Me</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Get to know more about my journey and expertise
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='relative'
          >
            <div className='glass-card p-6 rounded-3xl overflow-hidden'>
              <div className='aspect-square rounded-2xl overflow-hidden relative group'>
                {/* ✅ YOUR IMAGE */}
                <img
                  src='/images/porfolio.jpg'
                  alt='Abdalla Elnagar'
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />

                {/* 🔥 OVERLAY */}
                <div className='absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent'>
                  <h3 className='text-2xl font-bold text-white'>
                    {personalInfo.name}
                  </h3>
                  <p className='text-gray-300'>{personalInfo.role}</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl'
            >
              <div className='text-center'>
                <div className='text-3xl font-bold gradient-text'>ITI</div>
                <div className='text-sm text-gray-400'>Graduate 2024</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            className='space-y-6'
          >
            <motion.div variants={itemVariants}>
              <h3 className='text-3xl font-bold mb-4'>
                Building My <span className='gradient-text'>Career</span>
              </h3>
              <p className='text-gray-300 text-lg leading-relaxed'>
                {personalInfo.bio}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className='space-y-4'>
              <h4 className='text-xl font-semibold text-gray-200'>
                What I Can Do
              </h4>
              <div className='grid grid-cols-1 gap-4'>
                {[
                  {
                    icon: '⚛️',
                    title: 'Frontend Development',
                    desc: 'Building responsive UIs with React & Angular',
                  },
                  {
                    icon: '🔧',
                    title: 'Backend Development',
                    desc: 'Creating REST APIs with Node.js & Express',
                  },
                  {
                    icon: '🗄️',
                    title: 'Database Management',
                    desc: 'Working with MongoDB and PostgreSQL',
                  },
                  {
                    icon: '🚀',
                    title: 'Full Stack Projects',
                    desc: 'End-to-end application development',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className='glass-card p-4 rounded-xl hover:border-primary/50 transition-colors'
                  >
                    <div className='flex items-start gap-4'>
                      <span className='text-3xl'>{item.icon}</span>
                      <div>
                        <h5 className='font-semibold text-white mb-1'>
                          {item.title}
                        </h5>
                        <p className='text-sm text-gray-400'>{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className='pt-4'>
              <a
                href={personalInfo.resume}
                download
                className='inline-flex items-center gap-2 btn-primary'
              >
                <span>Download Resume</span>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-20'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className='glass-card p-6 rounded-2xl text-center'
            >
              <div className='text-4xl font-bold gradient-text mb-2'>
                {stat.value}
              </div>
              <div className='text-gray-400 text-sm'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
