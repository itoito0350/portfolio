import React from 'react';
import { Overlay } from "../styles/GlitchBackgroundStyles";

const GlitchBackground = ({ isAnimating }) => {
  return (
    <Overlay
      initial={{ y: '100%' }}
      animate={{ y: isAnimating ? '0%' : '-100%' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    />
  );
};

export default GlitchBackground;
