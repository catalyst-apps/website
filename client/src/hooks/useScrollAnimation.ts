import { useRef, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

/**
 * Hook that triggers animations when element comes into view
 * @returns Object containing the reference to attach to the element and animation controls
 */
export const useScrollAnimation = (threshold: number = 0.1) => {
  const ref = useRef(null);
  const controls = useAnimation();
  
  const inView = useInView(ref, {
    once: false,
    amount: threshold
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  
  return { ref, controls, inView };
};

export default useScrollAnimation;
