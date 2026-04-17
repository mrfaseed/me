import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeave = () => setIsVisible(false);
    const mouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', mouseMove);
    document.body.addEventListener('mouseleave', mouseLeave);
    document.body.addEventListener('mouseenter', mouseEnter);

    const handleMouseOver = (e) => {
      const target = e.target;
      // Elements that should trigger hover state
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-target')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.body.removeEventListener('mouseleave', mouseLeave);
      document.body.removeEventListener('mouseenter', mouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      opacity: isVisible ? 1 : 0,
      scale: 1,
      mixBlendMode: 'difference' // Inverts colors underneath
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      opacity: isVisible ? 1 : 0,
      scale: 2.4,
      mixBlendMode: 'difference'
    }
  };

  // Hide the default cursor in global CSS to use this properly
  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.5
      }}
    />
  );
};

export default CustomCursor;
