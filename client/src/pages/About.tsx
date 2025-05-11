import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function About() {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary-dark text-white font-sans antialiased min-h-screen flex flex-col"
    >
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-24 section-gradient-top">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-['Orbitron']">
                About <span className="text-accent-blue">Catalyst Apps</span>
              </h2>
            </motion.div>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p className="mb-6 text-lg">
                  At Catalyst Apps, we bridge the gap between innovative ideas and technical execution. We specialize in guiding organizations through the complex journey of app development, acting as the catalyst that transforms concepts into market-ready products.
                </p>
                <p className="mb-6 text-lg">
                  Our team combines deep technical expertise with strategic business insights to deliver applications that not only function flawlessly but also drive real business results.
                </p>
                
                <motion.div 
                  className="flex flex-wrap gap-4 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {[
                    { value: "100+", label: "Projects Completed" },
                    { value: "97%", label: "Client Satisfaction" },
                    { value: "15+", label: "Years Experience" },
                    { value: "24", label: "Industry Awards" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="bg-primary-dark/50 px-5 py-3 rounded-md"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 0 15px rgba(52, 152, 219, 0.3)" 
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.2 + (index * 0.1),
                        hover: { scale: 1.05, duration: 0.2 } 
                      }}
                    >
                      <span className="text-accent-blue font-bold text-xl">{stat.value}</span>
                      <p className="text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div>
                  {/* A modern tech office space with futuristic design elements */}
                  <motion.img 
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800&q=80" 
                    alt="Modern Catalyst Apps office space" 
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {/* A close-up of collaborative app development work */}
                    <motion.img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80" 
                      alt="Team collaborating on app development" 
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5,
                        hover: { scale: 1.05, duration: 0.3 }
                      }}
                    />
                    {/* A tech team meeting in progress */}
                    <motion.img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80" 
                      alt="Team meeting at Catalyst Apps" 
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.7,
                        hover: { scale: 1.05, duration: 0.3 }
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}