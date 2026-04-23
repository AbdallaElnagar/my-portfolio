import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { projects } from '../../data/portfolioData';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Featured'];
  const filteredProjects = filter === 'All' 
    ? projects 
    : filter === 'Featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/50'
                  : 'bg-dark-800/50 text-gray-400 hover:text-white hover:bg-dark-800'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />
                
                {/* Badge (Graduation/ITI Project) */}
                {project.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-primary to-purple-600 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
                      🎓 {project.badge}
                    </span>
                  </div>
                )}

                {/* Featured Badge */}
                {project.featured && !project.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* Hover Overlay with Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-purple-600/95 to-primary/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CodeBracketIcon className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-yellow-400 text-sm">★</span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-dark-800/70 text-gray-300 text-xs rounded-lg border border-dark-700/50 hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 bg-dark-800/70 text-primary text-xs rounded-lg border border-primary/30">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details Link */}
                <a
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-semibold group/link"
                >
                  View Details
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="/projects" className="btn-outline px-8 py-3 inline-block">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
