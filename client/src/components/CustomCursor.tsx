import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth > 768) {
      setIsVisible(true);
      
      const moveCursor = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      
      const handleMouseDown = () => {
        setIsClicking(true);
      };
      
      const handleMouseUp = () => {
        setIsClicking(false);
      };
      
      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      
      // Set up hover effect for interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      
      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => setIsHovering(true));
        element.addEventListener('mouseleave', () => setIsHovering(false));
      });
      
      return () => {
        window.removeEventListener('mousemove', moveCursor);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        
        interactiveElements.forEach((element) => {
          element.removeEventListener('mouseenter', () => setIsHovering(true));
          element.removeEventListener('mouseleave', () => setIsHovering(false));
        });
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] mix-blend-difference rounded-full"
      animate={{
        x: position.x,
        y: position.y,
        scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        opacity: isHovering ? 0.4 : 0.7,
        backgroundColor: 'rgba(174, 131, 0, 0.7)'
      }}
      transition={{
        type: 'spring',
        damping: 40,
        stiffness: 500,
        mass: 0.15
      }}
      style={{
        width: 20,
        height: 20,
        transform: `translate(-50%, -50%)`
      }}
    />
  );
}
