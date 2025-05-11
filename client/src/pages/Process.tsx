import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { LightbulbIcon, CodeIcon, LayoutIcon, MessagesSquareIcon, RocketIcon, CheckCircleIcon } from "lucide-react";

export default function Process() {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <LightbulbIcon className="h-6 w-6 text-accent-blue" />,
      title: "Discovery",
      description: "We begin by understanding your business goals, target audience, and project requirements to establish a solid foundation for development.",
      details: ["Stakeholder interviews", "Requirement gathering", "Market research", "Competitor analysis"]
    },
    {
      icon: <LayoutIcon className="h-6 w-6 text-accent-blue" />,
      title: "UX/UI Design",
      description: "Our design team creates intuitive, engaging interfaces that align with your brand identity and optimize user experience.",
      details: ["Wireframing", "Interactive prototyping", "Visual design", "User testing"]
    },
    {
      icon: <CodeIcon className="h-6 w-6 text-accent-blue" />,
      title: "Development",
      description: "Our engineers build robust, scalable applications using cutting-edge technologies tailored to your specific needs.",
      details: ["Frontend development", "Backend systems", "API integration", "Database architecture"]
    },
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-accent-blue" />,
      title: "Testing & QA",
      description: "Comprehensive testing ensures your application performs flawlessly across all devices and scenarios.",
      details: ["Functional testing", "Performance testing", "Security audits", "Cross-platform compatibility"]
    },
    {
      icon: <RocketIcon className="h-6 w-6 text-accent-blue" />,
      title: "Deployment",
      description: "We handle the smooth transition from development to production, ensuring optimal performance and accessibility.",
      details: ["Infrastructure setup", "Continuous integration", "Deployment automation", "Performance optimization"]
    },
    {
      icon: <MessagesSquareIcon className="h-6 w-6 text-accent-blue" />,
      title: "Support & Evolution",
      description: "Our relationship continues after launch with ongoing support, maintenance, and feature enhancements.",
      details: ["24/7 technical support", "Regular updates", "Performance monitoring", "Feature expansion"]
    },
  ];

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
        {/* Hero Section */}
        <section className="py-20 section-gradient-top">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-['Orbitron']">
                Our <span className="text-accent-blue">Process</span>
              </h2>
              <p className="text-lg mb-8 text-gray-400">
                We follow a structured, proven methodology to transform your vision into a successful digital product.
                Our process ensures transparency, efficiency, and high-quality results at every stage.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Process Timeline */}
        <section className="py-20 bg-primary-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="mb-16 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Line connector */}
                  {index < steps.length - 1 && (
                    <div 
                      className="absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue to-primary-dark"
                      style={{ height: 'calc(100% - 4rem)' }}
                    ></div>
                  )}
                  
                  <div className="flex items-start">
                    {/* Step number */}
                    <div className="rounded-full h-14 w-14 flex-shrink-0 flex items-center justify-center bg-primary-light border-2 border-accent-blue glow z-10">
                      {index + 1}
                    </div>
                    
                    {/* Step content */}
                    <div className="ml-8">
                      <div className="flex items-center mb-3">
                        <div className="mr-3">{step.icon}</div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="mb-5 text-gray-400">{step.description}</p>
                      
                      {/* Details */}
                      <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                      >
                        {step.details.map((detail, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center p-3 bg-primary-light rounded-lg"
                          >
                            <div className="w-2 h-2 rounded-full bg-accent-blue mr-3"></div>
                            <span className="text-gray-400">{detail}</span>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary-light">
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Ready to start your development journey?
              </h2>
              <p className="text-lg mb-8 text-gray-400">
                Let us guide you through the process of turning your concept into a market-ready application.
              </p>
              <Link href="/contact">
                <motion.button 
                  className="px-8 py-3 bg-accent-blue text-white font-semibold rounded-md hover:bg-accent-darkBlue transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}