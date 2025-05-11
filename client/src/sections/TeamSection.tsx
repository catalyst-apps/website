import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const teamStrengths = [
  {
    icon: "fa-brain",
    title: "Technical Expertise",
    description: "Our developers stay at the forefront of technology with expertise in iOS, Android, cross-platform development, backend systems, cloud services, and emerging technologies like AR/VR and AI."
  },
  {
    icon: "fa-chart-line",
    title: "Business Acumen",
    description: "We understand that great apps need more than just code. Our team brings experience in product strategy, market analysis, and business development to ensure your app achieves its commercial goals."
  },
  {
    icon: "fa-users",
    title: "User-Focused",
    description: "Our designers and UX specialists are obsessed with creating intuitive, engaging user experiences that delight your customers and keep them coming back to your application."
  },
  {
    icon: "fa-tasks",
    title: "Project Management",
    description: "Our experienced project managers ensure clear communication, on-time delivery, and transparent reporting throughout the development process, keeping your project on track and within budget."
  },
  {
    icon: "fa-shield-alt",
    title: "Quality Assurance",
    description: "Our dedicated QA team implements comprehensive testing protocols to ensure your app is robust, secure, and performs flawlessly across all devices and use cases."
  },
  {
    icon: "fa-handshake",
    title: "Client Partnership",
    description: "We view every project as a partnership. Our collaborative approach ensures your vision remains central throughout the development process, with your team involved at every stage."
  }
];

export default function TeamSection() {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <section id="team" className="py-24 bg-primary-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-['Orbitron']">
            Our <span className="text-accent-blue">Team</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Meet the experts who will guide your app from concept to success. Our team combines technical expertise with strategic business insights.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Section Image */}
          <motion.div 
            className="col-span-full mb-12"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* A diverse team collaborating in a modern office */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=800&q=80" 
              alt="The Catalyst Apps team collaborating" 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
            />
          </motion.div>
          
          {/* Team Strengths */}
          {teamStrengths.map((strength, index) => (
            <motion.div
              key={index}
              className="bg-primary-light rounded-lg p-8 card-hover"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px rgba(52, 152, 219, 0.3)" 
              }}
            >
              <div className="text-accent-blue text-3xl mb-4">
                <i className={`fas ${strength.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{strength.title}</h3>
              <p>{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
