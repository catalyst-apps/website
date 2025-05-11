import { motion } from "framer-motion";

export function Logo({ className = "h-10", animated = false }: { className?: string, animated?: boolean }) {
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      } 
    }
  };

  const pathVariants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(52, 152, 219, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(52, 152, 219, 1)",
      transition: { 
        duration: 2,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const BaseLogoSVG = () => (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M35,5 C20,5 10,20 10,30 C10,45 20,55 35,55 C40,55 45,50 50,45 C50,45 50,45 45,45 C40,45 35,50 30,50 C20,50 15,35 15,30 C15,20 25,10 35,10 C40,10 45,20 45,25 C45,30 40,35 35,35 L30,35 L30,30 L35,30 C38,30 40,28 40,25 C40,22 38,20 35,20 C32,20 25,25 25,30 C25,40 35,45 40,45 C50,45 55,35 55,25 C55,15 45,5 35,5 Z M25,25 C27,25 27,25 27,23 C27,21 27,21 25,21 C23,21 23,21 23,23 C23,25 23,25 25,25 Z M20,35 C22,35 22,35 22,33 C22,31 22,31 20,31 C18,31 18,31 18,33 C18,35 18,35 20,35 Z"
        fill="#3498DB"
      />
    </g>
  );

  if (animated) {
    return (
      <motion.svg
        width="80px"
        height="60px"
        viewBox="0 0 80 60"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        <motion.g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <motion.path
            d="M35,5 C20,5 10,20 10,30 C10,45 20,55 35,55 C40,55 45,50 50,45 C50,45 50,45 45,45 C40,45 35,50 30,50 C20,50 15,35 15,30 C15,20 25,10 35,10 C40,10 45,20 45,25 C45,30 40,35 35,35 L30,35 L30,30 L35,30 C38,30 40,28 40,25 C40,22 38,20 35,20 C32,20 25,25 25,30 C25,40 35,45 40,45 C50,45 55,35 55,25 C55,15 45,5 35,5 Z M25,25 C27,25 27,25 27,23 C27,21 27,21 25,21 C23,21 23,21 23,23 C23,25 23,25 25,25 Z M20,35 C22,35 22,35 22,33 C22,31 22,31 20,31 C18,31 18,31 18,33 C18,35 18,35 20,35 Z"
            variants={pathVariants}
            stroke="#3498DB"
            strokeWidth="2"
            initial="hidden"
            animate="visible"
          />
        </motion.g>
      </motion.svg>
    );
  }

  return (
    <svg 
      width="80px" 
      height="60px" 
      viewBox="0 0 80 60" 
      className={className}
    >
      <BaseLogoSVG />
    </svg>
  );
}

export default Logo;
