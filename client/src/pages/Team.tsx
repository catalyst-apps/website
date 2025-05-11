import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import profilePicturePath from "@assets/profile_picture.png";

export default function Team() {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Alex brings over 15 years of experience in software development and business leadership, with a passion for building applications that solve real-world problems.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Morgan Taylor",
      role: "CTO",
      bio: "Morgan leads our technical strategy and architecture decisions, ensuring we deliver cutting-edge solutions that are scalable and maintainable.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Jordan Rivera",
      role: "Creative Director",
      bio: "Jordan oversees all design aspects of our projects, crafting beautiful and intuitive user experiences that align with our clients' brand identities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Taylor Kim",
      role: "Lead Developer",
      bio: "Taylor specializes in complex frontend architectures and performance optimization, ensuring our applications deliver exceptional user experiences.",
      image: profilePicturePath,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Jamie Patel",
      role: "Backend Architect",
      bio: "Jamie designs robust, scalable backend systems that power our applications, with expertise in cloud architecture and database design.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Casey Johnson",
      role: "Product Manager",
      bio: "Casey works closely with clients to understand their needs and translate them into product requirements, ensuring we deliver solutions that exceed expectations.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
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
        <section className="py-20 bg-primary-light">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-['Orbitron']">
                Our <span className="text-accent-blue">Team</span>
              </h2>
              <p className="text-lg mb-8 text-gray-400">
                Meet the talented individuals who bring innovation, expertise, and passion to every project.
                Our diverse team of specialists collaborates to deliver exceptional digital solutions.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Team Grid */}
        <section className="py-20 bg-primary-dark">
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  className="bg-primary-light p-6 rounded-xl overflow-hidden card-hover"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 10px 25px rgba(52, 152, 219, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 relative group">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="rounded-lg w-full h-64 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-accent-blue bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <div className="text-accent-blue font-medium mb-3">{member.role}</div>
                  <p className="mb-4 text-gray-400">{member.bio}</p>
                  
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-accent-blue transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-accent-blue transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-accent-blue transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Join Us Section */}
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
                Join Our Growing Team
              </h2>
              <p className="text-lg mb-8 text-gray-400">
                We're always looking for talented individuals passionate about creating exceptional digital experiences.
                Check out our current openings and become part of our innovative team.
              </p>
              <motion.button 
                className="px-8 py-3 bg-accent-blue text-white font-semibold rounded-md hover:bg-accent-darkBlue transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Open Positions
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}