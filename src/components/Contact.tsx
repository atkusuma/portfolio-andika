'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const contactInfo = [
    { icon: <FaPhone />, text: '0813 3808 3351', link: 'tel:+6281338083351' },
    { icon: <FaWhatsapp />, text: '0813 3808 3351', link: 'https://wa.me/6281338083351' },
    { icon: <FaEnvelope />, text: 'andika.suka.ngoding@gmail.com', link: 'mailto:andika.suka.ngoding@gmail.com' },
    { icon: <FaLinkedin />, text: 'andikatrikusuma', link: 'https://www.linkedin.com/in/andikatrikusuma/' },
    { icon: <FaInstagram />, text: 'at_kusuma', link: 'https://www.instagram.com/at_kusuma/' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Let&apos;s discuss how we can work together on sustainable technology projects
          </p>
        </motion.div>

        <motion.div 
          className="max-w-xl mx-auto grid grid-cols-1 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{ 
            animate: { 
              transition: { 
                staggerChildren: 0.1 
              }
            }
          }}
        >
          {contactInfo.map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="flex items-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <div className="text-green-600 dark:text-green-400 text-2xl mr-4">
                {item.icon}
              </div>
              <div>
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 text-lg hover:underline"
                >
                  {item.text}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 