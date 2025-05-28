'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Backend Development',
    items: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Quarkus', level: 80 },
      { name: 'RESTful APIs', level: 85 },
    ]
  },
  {
    category: 'Database & Storage',
    items: [
      { name: 'SQL', level: 85 },
      { name: 'Database Design', level: 80 },
      { name: 'Data Modeling', level: 75 },
    ]
  },
  {
    category: 'Development Practices',
    items: [
      { name: 'Agile Methodologies', level: 85 },
      { name: 'Git Version Control', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'System Architecture', level: 80 },
    ]
  },
  {
    category: 'Tools & Technologies',
    items: [
      { name: 'Docker', level: 75 },
      { name: 'Maven/Gradle', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'JUnit', level: 80 },
    ]
  }
];

const Skills = () => {
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
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Technical expertise in modern backend development and sustainable solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-green-600 dark:bg-green-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
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
            Continuously expanding my skill set to build more efficient and sustainable 
            backend solutions. Focused on creating scalable systems that can power the 
            next generation of renewable energy applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 