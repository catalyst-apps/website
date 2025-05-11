import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logoImage from "@assets/profile_picture.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on location change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/contact", label: "Contact" }
  ];

  const navbarClasses = cn(
    "fixed w-full top-0 z-50 transition-colors duration-300",
    scrolled 
      ? "bg-primary-dark py-3" 
      : "bg-primary-dark/90 py-5"
  );

  const currentPath = location || "/";

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img 
                  src={logoImage} 
                  alt="Catalyst Apps Logo" 
                  className="h-10 w-auto"
                />
                <span className="ml-2 text-xl font-bold tracking-tight text-white font-['Orbitron']">
                  CATALYST <span className="text-accent-blue">APPS</span>
                </span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
              >
                <div className={`nav-link text-white hover:text-accent-blue transition relative group cursor-pointer font-semibold ${
                  currentPath === link.href ? "text-accent-blue" : ""
                }`}>
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-blue transition-all duration-300 ${
                    currentPath === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </div>
              </Link>
            ))}
          </nav>
          
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 mt-4 pb-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                  >
                    <div className={`text-white hover:text-accent-blue transition cursor-pointer ${
                      currentPath === link.href ? "text-accent-blue" : ""
                    }`}>
                      {link.label}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
