'use client';

import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Back-End Developer passionate about sustainable technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                Professional Background
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A skilled Back-End Developer with expertise in Java, Spring Boot, Quarkus, and SQL. 
                Currently working at Legit Group, where I develop and optimize software solutions 
                in an Agile environment. My focus is on building scalable applications and APIs 
                that make a real impact.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                • Engineering Physics, Universitas Gadjah Mada<br />
                • Intensive Back-End Development Bootcamp
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                Technical Expertise
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Java & Spring Boot Development</li>
                <li>Quarkus Framework</li>
                <li>SQL Database Management</li>
                <li>RESTful API Design</li>
                <li>Agile Development</li>
                <li>System Architecture</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">
                Why Renewable Energy?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Coming from an Engineering Physics background, Im passionate about applying 
                my technical skills to create sustainable solutions. My goal is to leverage 
                technology to contribute to a greener future through efficient and scalable 
                software systems.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-green-600 dark:text-green-400">Production Ready</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Building scalable, production-grade systems</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-green-600 dark:text-green-400">Agile Mindset</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Adaptive development in dynamic environments</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 