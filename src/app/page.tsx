import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Let&apos;s discuss how we can work together on sustainable technology projects
            </p>
          </div>
          {/* Contact form will be added here */}
        </div>
      </section>
    </>
  );
}
