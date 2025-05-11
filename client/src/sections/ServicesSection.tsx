import { motion } from "framer-motion";

const services = [
  {
    icon: "fa-lightbulb",
    title: "Strategy & Planning",
    description: "We transform your vision into a comprehensive roadmap, defining clear objectives, target audience, and competitive positioning.",
    features: [
      "Market & competitor analysis",
      "Feature prioritization",
      "Technical feasibility assessment"
    ]
  },
  {
    icon: "fa-paint-brush",
    title: "UI/UX Design",
    description: "Our design team creates intuitive, engaging user experiences that not only look stunning but also drive user engagement and retention.",
    features: [
      "User flow mapping",
      "Interactive prototyping",
      "Visual identity development"
    ]
  },
  {
    icon: "fa-code",
    title: "Development",
    description: "Our expert development team builds robust, scalable applications using the latest technologies and best practices.",
    features: [
      "Native & cross-platform development",
      "Backend & API development",
      "Third-party integrations"
    ]
  },
  {
    icon: "fa-clipboard-check",
    title: "QA & Testing",
    description: "We ensure your application is flawless through rigorous testing across devices, platforms, and use cases.",
    features: [
      "Functional & regression testing",
      "Performance optimization",
      "Security testing"
    ]
  },
  {
    icon: "fa-rocket",
    title: "Launch & Deployment",
    description: "We handle all aspects of your app launch to ensure a smooth, successful release to your target audience.",
    features: [
      "App store optimization",
      "Release management",
      "Launch strategy planning"
    ]
  },
  {
    icon: "fa-cogs",
    title: "Maintenance & Growth",
    description: "We provide ongoing support to keep your app running smoothly and help you scale as your user base grows.",
    features: [
      "Performance monitoring",
      "Feature enhancements",
      "Analytics & user feedback integration"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-primary-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-['Orbitron']">
            Our <span className="text-accent-blue">Services</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            We provide end-to-end app development consulting services, guiding you from initial concept to successful market launch and beyond.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-primary-light rounded-lg p-8 card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * index,
                hover: { y: -5, duration: 0.005 }
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px rgba(52, 152, 219, 0.3)" 
              }}
            >
              <div className="text-accent-blue text-3xl mb-4">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="fas fa-check text-accent-blue mt-1 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
