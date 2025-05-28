'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Vendor Portal',
    description: 'Developed an application that streamlines the process of tracking the progress of purchase orders, improving efficiency and ensuring real-time updates for the company.',
    technologies: ['Java', 'Spring Boot', 'SQL', 'RESTful API'],
    impact: 'Streamlined purchase order tracking and improved operational efficiency',
    category: 'Enterprise Solution',
    icon: '🔄' // Real-time tracking icon
  },
  {
    title: 'Demand Planner',
    description: 'Developed an application to assist in procurement planning with artificial intelligence.',
    technologies: ['Java', 'AI/ML', 'Spring Boot', 'Data Analytics'],
    impact: 'Enhanced procurement planning with AI-driven insights',
    category: 'AI Integration',
    icon: '🤖' // AI icon
  },
  {
    title: 'Grip',
    description: 'Developed a comprehensive application for real-time stock recording and inventory management in the warehouse, enabling accurate tracking of goods, streamlining stock movements, and improving overall operational efficiency.',
    technologies: ['Java', 'Spring Boot', 'SQL', 'Real-time Processing'],
    impact: 'Optimized warehouse operations and inventory management',
    category: 'Inventory Management',
    icon: '📦' // Warehouse icon
  },
  {
    title: 'Management Information System for Kawah Edukasi',
    description: 'Developed a website to support learning activities at the Kawah Edukasi bootcamp.',
    technologies: ['Java', 'Spring Boot', 'Web Development', 'Database Design'],
    impact: 'Enhanced educational platform management and learning experience',
    category: 'Education Technology',
    icon: '🎓' // Education icon
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Enterprise solutions and applications that drive efficiency and innovation
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-4xl mb-2 block">{project.icon}</span>
                    <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                      {project.title}
                    </h3>
                    <span className="inline-block mt-1 px-3 py-1 text-sm bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Impact:
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.impact}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Each project demonstrates my commitment to building efficient, scalable solutions 
            that drive business value and operational excellence. From enterprise applications 
            to educational platforms, I focus on creating systems that make a real impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 