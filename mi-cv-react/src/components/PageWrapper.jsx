import React, { useEffect, useState } from 'react';
import { Overlay } from "../styles/PageTransitionStyles";
import { AnimatePresence } from 'framer-motion';
import GlitchBackground from './GlitchBackground'; 

const PageWrapper = ({ children, isAnimating, setIsAnimating }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    setShowContent(false);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
      setShowContent(true);
    }, 1200);  // Le damos un poco más de margen para que la animación sea suave

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <GlitchBackground isAnimating={isAnimating} />

      <AnimatePresence mode="wait" initial={false}>
        {isAnimating && (
          <Overlay
            key="page-transition"
            initial={{ height: '0%', top: '50%', bottom: '50%' }}  // Estado inicial para que no salte
            animate={{ height: '100%', top: '0%', bottom: '0%' }}
            exit={{ height: '0%', top: '50%', bottom: '50%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {showContent && children}
    </>
  );
};

export default PageWrapper;

