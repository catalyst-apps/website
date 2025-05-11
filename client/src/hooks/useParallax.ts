import { useRef, useEffect, useState } from 'react';
import { isBrowser } from '@/lib/utils';

interface ParallaxOptions {
  /**
   * Speed of the parallax effect (negative values move in opposite direction)
   */
  speed?: number;
  
  /**
   * Direction of the parallax movement
   */
  direction?: 'horizontal' | 'vertical';
  
  /**
   * Whether to only apply parallax when element is in viewport
   */
  onlyInView?: boolean;
}

/**
 * Hook that creates a parallax scrolling effect on an element
 */
export const useParallax = ({
  speed = 0.1,
  direction = 'vertical',
  onlyInView = true,
}: ParallaxOptions = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    if (!isBrowser()) return;
    
    const element = ref.current;
    if (!element) return;
    
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // If element is in viewport or we don't care about that constraint
      if (!onlyInView || (rect.top < windowHeight && rect.bottom > 0)) {
        // Calculate how far the element is from the center of the viewport
        const scrollPosition = window.scrollY;
        // Apply the parallax effect based on scroll position
        const newOffset = scrollPosition * speed;
        setOffset(newOffset);
      }
    };
    
    handleScroll(); // Initialize on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction, onlyInView]);
  
  // Return the ref to attach to the element and the transform style to apply
  return {
    ref,
    style: {
      transform: direction === 'vertical' 
        ? `translateY(${offset}px)` 
        : `translateX(${offset}px)`,
    },
  };
};

export default useParallax;
