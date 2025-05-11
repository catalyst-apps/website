import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import { Link } from "wouter";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary-dark text-white font-sans antialiased min-h-screen flex flex-col"
    >
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Featured section with links to main pages */}
        <section className="py-16 bg-primary-light">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-['Orbitron']">
              Explore <span className="text-accent-blue">Our Services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "App Development",
                  description: "Custom mobile and web app development for businesses of all sizes.",
                  icon: "fa-mobile-alt",
                  link: "/services"
                },
                {
                  title: "UI/UX Design",
                  description: "Beautiful, intuitive interfaces that provide exceptional user experiences.",
                  icon: "fa-paint-brush",
                  link: "/services"
                },
                {
                  title: "Strategy & Consulting",
                  description: "Expert guidance to turn your app idea into a market-ready product.",
                  icon: "fa-lightbulb",
                  link: "/process"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-primary-dark p-8 rounded-lg text-center"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(52, 152, 219, 0.4)",
                    backgroundColor: "rgba(21, 42, 64, 1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <div className="text-4xl text-accent-blue mb-4">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="mb-6">{feature.description}</p>
                  <Link href={feature.link}>
                    <motion.button 
                      className="px-6 py-2 bg-accent-blue text-white rounded-md"
                      whileHover={{ 
                        backgroundColor: "rgba(41, 128, 185, 1)",
                        scale: 1.05
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        
        {/* Call to action section */}
        <section className="py-16 bg-primary-light">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Orbitron']">
                Ready to <span className="text-accent-blue">Transform</span> Your App Idea?
              </h2>
              <p className="text-lg max-w-3xl mx-auto mb-8">
                Let's discuss how we can help you bring your vision to life. Our team of experts is ready to guide you through the entire app development journey.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-accent-blue hover:bg-accent-darkBlue text-white font-semibold rounded-md transition duration-300 text-lg">
                  Contact Us Today
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
