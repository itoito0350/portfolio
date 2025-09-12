import React, { useEffect, useState } from 'react';
import { Overlay } from "../styles/PageTransitionStyles";
import { AnimatePresence } from 'framer-motion';
import GlitchBackground from './GlitchBackground'; 

const PageWrapper = ({ children, isAnimating, setIsAnimating }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    setShowContent(false);

    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 800);

    const contentTimeout = setTimeout(() => {
      setShowContent(true);
    }, 400);

    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(contentTimeout);
    };
  }, [setIsAnimating]);

  return (
    <>
      <GlitchBackground isAnimating={isAnimating} />

      <AnimatePresence mode="wait">
        {isAnimating && (
          <Overlay
            key="page-transition"
            initial={{ height: '0%', top: '50%', bottom: '50%' }}
            animate={{ height: '100%', top: '0%', bottom: '0%' }}
            exit={{ height: '0%', top: '50%', bottom: '50%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {showContent && children}
    </>
  );
};

export default PageWrapper;

