import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  const { ref, controls } = useScrollAnimation();
  
  const contactInfo = [
    {
      icon: "fa-map-marker-alt",
      title: "Visit Us",
      lines: ["123 Tech Boulevard, Suite 456", "Innovation District, CA 94103"]
    },
    {
      icon: "fa-envelope",
      title: "Email Us",
      lines: ["hello@catalystapps.com", "sales@catalystapps.com"]
    },
    {
      icon: "fa-phone-alt",
      title: "Call Us",
      lines: ["(555) 123-4567", "Mon-Fri, 9am-6pm PT"]
    }
  ];
  
  const socialLinks = [
    { icon: "fa-twitter", href: "#" },
    { icon: "fa-linkedin-in", href: "#" },
    { icon: "fa-instagram", href: "#" },
    { icon: "fa-github", href: "#" }
  ];

  return (
    <section id="contact" className="py-24 bg-primary-dark relative overflow-hidden" ref={ref}>
      {/* Decorative cybernetic elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 w-24 h-px bg-gradient-to-r from-accent-blue to-transparent"></div>
        <div className="absolute right-0 bottom-1/3 w-48 h-px bg-gradient-to-l from-accent-blue to-transparent"></div>
        <div className="absolute left-1/4 bottom-0 w-px h-24 bg-gradient-to-t from-accent-blue to-transparent"></div>
        <div className="absolute right-1/3 top-0 w-px h-48 bg-gradient-to-b from-accent-blue to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
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
            Contact <span className="text-accent-blue">Us</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Ready to bring your app idea to life? Get in touch with our team to start the conversation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-primary-light p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="text-accent-blue text-xl mt-1 mr-4">
                      <i className={`fas ${info.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a 
                        key={index}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center hover:bg-accent-blue transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className={`fab ${social.icon} text-white`}></i>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
