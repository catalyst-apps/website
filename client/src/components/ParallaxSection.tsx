import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
}

// Replaced parallax with a simple animated section
export default function AnimatedSection({
  children,
  className = '',
  backgroundColor = 'transparent',
}: SectionProps) {
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
