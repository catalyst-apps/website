import { useRef } from "react";
import { motion } from "framer-motion";
import ThreeScene from "@/components/ThreeScene";
import { Link } from "wouter";
import logoImage from "@assets/profile_picture.png";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      <div 
        ref={containerRef} 
        className="absolute inset-0 bg-primary-darker"
        id="three-container"
      >
        <ThreeScene containerRef={containerRef} />
        
        {/* Cybernetic grid overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, rgba(52, 152, 219, 0.1) 0%, transparent 40%), 
                              radial-gradient(circle at 70% 60%, rgba(78, 205, 196, 0.05) 0%, transparent 30%)`
          }}>
            <div className="grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] h-screen w-screen opacity-20">
              {/* Horizontal grid lines */}
              <div className="col-span-full h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent"></div>
              <div className="col-span-full h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent row-start-5"></div>
              <div className="col-span-full h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent row-start-10"></div>
              <div className="col-span-full h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent row-start-15"></div>
              <div className="col-span-full h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent row-start-20"></div>
              
              {/* Vertical grid lines */}
              <div className="row-span-full w-px bg-gradient-to-b from-transparent via-accent-blue to-transparent"></div>
              <div className="row-span-full w-px bg-gradient-to-b from-transparent via-accent-blue to-transparent col-start-5"></div>
              <div className="row-span-full w-px bg-gradient-to-b from-transparent via-accent-blue to-transparent col-start-10"></div>
              <div className="row-span-full w-px bg-gradient-to-b from-transparent via-accent-blue to-transparent col-start-15"></div>
              <div className="row-span-full w-px bg-gradient-to-b from-transparent via-accent-blue to-transparent col-start-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 text-white glow-text animate-float font-['Orbitron']"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Turn Your App Ideas
          </motion.span>
          <motion.span 
            className="block mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Into <span className="text-accent-blue">Reality</span>
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          We are the catalyst for your next digital breakthrough. Our team of expert developers transforms your vision into powerful, innovative applications.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/contact">
            <motion.button
              className="px-8 py-4 rounded-md bg-accent-blue hover:bg-accent-darkBlue transition duration-300 text-white font-semibold glow text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </Link>
          <Link href="/services">
            <motion.button
              className="px-8 py-4 rounded-md border-2 border-accent-blue bg-transparent hover:bg-accent-blue/10 transition duration-300 text-white font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </motion.button>
          </Link>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2
          }}
        >
          <i className="fas fa-chevron-down text-accent-blue text-2xl"></i>
        </motion.div>
      </div>
    </section>
  );
}
