import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Code, Sparkles, ArrowRight, Gauge, Smartphone, Database, CloudLightning, Shield } from "lucide-react";

export default function Services() {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Services data
  const services = [
    {
      icon: <Code className="h-8 w-8 text-accent-blue mb-4" />,
      title: "App Development",
      description: "End-to-end application development from concept to deployment for web, iOS, and Android platforms.",
      features: ["UI/UX Design", "Frontend & Backend", "API Integration", "Testing & QA"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-accent-blue mb-4" />,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "Responsive Web Apps"]
    },
    {
      icon: <CloudLightning className="h-8 w-8 text-accent-blue mb-4" />,
      title: "Cloud Architecture",
      description: "Scalable, resilient cloud-native architecture designed for your specific business needs.",
      features: ["AWS Solutions", "Database Solutions", "Easily Set Up Servers", "Microservices"]
    },
    {
      icon: <Database className="h-8 w-8 text-accent-blue mb-4" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics solutions.",
      features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Real-time Monitoring"]
    },
    {
      icon: <Shield className="h-8 w-8 text-accent-blue mb-4" />,
      title: "Security Solutions",
      description: "Robust security measures to protect your applications and sensitive data.",
      features: ["Encryption", "Authentication", "Penetration Testing", "Compliance"]
    },
    {
      icon: <Gauge className="h-8 w-8 text-accent-blue mb-4" />,
      title: "Performance Optimization",
      description: "Enhance your existing applications with improved speed, reliability, and user experience.",
      features: ["Code Optimization", "Load Testing", "Resource Management", "Caching Strategies"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4, 
        ease: "easeOut"
      } 
    }
  };

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
                Our <span className="text-accent-blue">Services</span>
              </h2>
              <p className="text-lg mb-12 text-gray-400">
                We provide end-to-end solutions that help organizations transform their ideas into 
                powerful digital solutions that drive success.
              </p>
              
              <motion.div 
                className="flex justify-center items-center space-x-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="h-5 w-5 text-accent-blue" />
                <p className="font-semibold">Advanced Technological Solutions</p>
                <Sparkles className="h-5 w-5 text-accent-blue" />
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-20 bg-primary-dark">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-primary-light p-8 rounded-xl card-hover border border-primary-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 20px rgba(52, 152, 219, 0.4)",
                    borderColor: "rgba(52, 152, 219, 0.9)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {service.icon}
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="mb-6 text-gray-400">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-accent-blue mr-2">•</span>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div 
                    className="mt-6 flex items-center text-accent-blue cursor-pointer group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-semibold">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}