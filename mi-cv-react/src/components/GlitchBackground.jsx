
import React from 'react';
import {Overlay} from "../styles/GlitchBackgroundStyles";




const GlitchBackground = ({ isAnimating }) => {
  return (
    <>
      {isAnimating && (
        <Overlay
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />
      )}
    </>
  );
};

export default GlitchBackground;
