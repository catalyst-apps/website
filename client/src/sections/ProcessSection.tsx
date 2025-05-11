import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ParallaxSection";
import { Link } from "wouter";

const processSteps = [
  {
    number: "1",
    title: "Discovery & Strategy",
    description: "We start by deeply understanding your vision, goals, and requirements. Our team analyzes your target market, identifies key competitors, and defines the core value proposition of your app."
  },
  {
    number: "2",
    title: "Design & Prototype",
    description: "We create wireframes and interactive prototypes that visualize the user experience. This phase allows you to see and test your app's flow and functionality before development begins."
  },
  {
    number: "3",
    title: "Development & Testing",
    description: "Our developers build your application using clean, maintainable code while our QA team performs continuous testing to ensure quality. We follow agile methodologies with regular updates and iterations."
  },
  {
    number: "4",
    title: "Launch & Growth",
    description: "We handle the deployment process and help you with the market launch. Our relationship continues with ongoing support, maintenance, and feature enhancements to drive user adoption and growth."
  }
];

export default function ProcessSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <section id="process" className="py-24 bg-primary-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-blue/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-blue/5 rounded-tr-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-['Orbitron']">
            Our <span className="text-accent-blue">Process</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            We follow a proven methodology that ensures successful outcomes for every project, guiding you through each phase of the app development journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
          <AnimatedSection className="md:col-span-5">
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="App development planning session" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </AnimatedSection>
          
          <div className="md:col-span-7">
            <div className="relative pl-16 pb-12" ref={timelineRef}>
              <div className="timeline-connector"></div>
              
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="mb-12 relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                >
                  <motion.div 
                    className="absolute left-0 -translate-x-1/2 w-10 h-10 rounded-full bg-primary-dark border-2 border-accent-blue flex items-center justify-center glow"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(52, 152, 219, 0.7)" }}
                  >
                    <span className="text-accent-blue font-bold">{step.number}</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center p-8 bg-primary-dark/50 rounded-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to start your app development journey?</h3>
          <p className="mb-6 text-lg">Let's discuss how we can bring your vision to life.</p>
          <Link href="/contact">
            <motion.button 
              className="px-8 py-4 rounded-md bg-accent-blue hover:bg-accent-darkBlue transition duration-300 text-white font-semibold inline-block glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
