'use client';

import { motion } from 'framer-motion';

const organizationalExperiences = [
  {
    organization: 'Jendela Jakarta',
    position: 'Staf Divisi Media Sosial',
    location: 'Jakarta',
    duration: 'January 2023 - January 2024',
    description: 'Mengelola akun official Komunitas Jendela Jakarta.',
  },
  {
    organization: 'Keluarga Muslim Teknik',
    position: 'Sekretaris Jenderal',
    location: 'Fakultas Teknik UGM',
    duration: 'October 2020 - December 2020',
    description: 'Menghidupkan KMT yang sempat vakum karena pandemi.',
  },
  {
    organization: 'Keluarga Muslim Teknik',
    position: 'Majelis Syuro',
    location: 'Fakultas Teknik UGM',
    duration: 'January 2020 - October 2020',
    description: 'Memantau dan memberikan saran terkait kegiatan yang dilakukan KMT.',
  },
  {
    organization: 'Keluarga Muslim Teknik',
    position: 'Biro Khusus Kaderisasi',
    location: 'Fakultas Teknik UGM',
    duration: 'January 2019 - January 2020',
    description: 'Mengelola urusan kaderisasi di KMT.',
  },
  {
    organization: 'Keluarga Muslim Teknik',
    position: 'Staff Divisi Muslim Center',
    location: 'Fakultas Teknik UGM',
    duration: 'January 2018 - January 2019',
    description: 'Mengurus kegiatan kajian dan kebersihan Mushola Teknik.',
  },
  {
    organization: 'Keluarga Mahasiswa Teknik Nuklir Teknik Fisika',
    position: 'Staff Divisi Kewirausahaan',
    location: 'Manggarai',
    duration: 'January 2018 - January 2020',
    description: 'Mengelola konten di akun official Komunitas Jendela Jakarta.',
  },
];

const Experience = () => {
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
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Organizational Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            My involvement in various organizations
          </p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {organizationalExperiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                    {exp.position} at {exp.organization}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                    {exp.location} | {exp.duration}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 