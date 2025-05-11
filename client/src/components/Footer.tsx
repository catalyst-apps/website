import { Link } from "wouter";
import logoImage from "@assets/profile_picture.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    services: [
      { name: "Strategy & Planning", href: "/services" },
      { name: "UX/UI Design", href: "/services" },
      { name: "Development", href: "/services" },
      { name: "QA & Testing", href: "/services" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "/contact" }
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Guides", href: "#" },
      { name: "FAQ", href: "#" }
    ]
  };

  return (
    <footer className="bg-primary-darker py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="Catalyst Apps Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-lg font-bold tracking-tight text-white font-['Orbitron']">
                CATALYST <span className="text-accent-blue">APPS</span>
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-400 max-w-md">
              Bridging the gap between innovative ideas and technical execution. We transform concepts into market-ready products.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-white">Services</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href}>
                        <span className="text-gray-400 hover:text-accent-blue transition-colors cursor-pointer">
                          {link.name}
                        </span>
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-accent-blue transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href}>
                        <span className="text-gray-400 hover:text-accent-blue transition-colors cursor-pointer">
                          {link.name}
                        </span>
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-accent-blue transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-white">Resources</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href}>
                        <span className="text-gray-400 hover:text-accent-blue transition-colors cursor-pointer">
                          {link.name}
                        </span>
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-accent-blue transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Catalyst Apps. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-accent-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-accent-blue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
