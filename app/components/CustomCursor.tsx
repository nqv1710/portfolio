'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // default true to avoid flash on SSR

  // High-performance motion values that bypass React state renders
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for the smooth trailing effect
  const springConfig = { damping: 28, stiffness: 500, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check for touch/mobile — only show cursor on pointer devices
    const mq = window.matchMedia('(pointer: fine) and (min-width: 769px)');
    setIsTouchDevice(!mq.matches);

    const handleMQChange = (e: MediaQueryListEvent) => setIsTouchDevice(!e.matches);
    mq.addEventListener('change', handleMQChange);
    return () => mq.removeEventListener('change', handleMQChange);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible, isTouchDevice]);

  // Don't render on touch/mobile devices
  if (isTouchDevice) return null;

  return (
    <motion.div
      animate={{
        width: isHovering ? 80 : 30,
        height: isHovering ? 80 : 30,
        left: isHovering ? -40 : -15,
        top: isHovering ? -40 : -15,
        background: isHovering 
          ? 'radial-gradient(circle, rgba(157,78,221,0.6) 0%, rgba(76,201,240,0.2) 60%, transparent 100%)'
          : 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(76,201,240,0.6) 30%, transparent 70%)',
        boxShadow: isHovering 
          ? '0 0 40px rgba(157,78,221,0.4)'
          : '0 0 20px rgba(76,201,240,0.3)',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
        position: 'fixed',
        borderRadius: '50%',
        mixBlendMode: 'screen',
        pointerEvents: 'none',
        zIndex: 9998,
      }}
    />
  );
}

