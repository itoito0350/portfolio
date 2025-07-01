import styled from 'styled-components';
import { motion } from 'framer-motion';

const TransitionContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 999;
`;

const TopLayer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: #4e8477;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0.03) 2px,
      transparent 4px,
      rgba(0, 255, 0, 0.04) 6px,
      transparent 8px
    );
    mix-blend-mode: overlay;
    animation: glitchLines 0.3s linear infinite;
  }
`;

const BottomLayer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: #4e8477;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      to top,
      rgba(255, 0, 0, 0.03) 2px,
      transparent 4px,
      rgba(0, 255, 0, 0.04) 6px,
      transparent 8px
    );
    mix-blend-mode: overlay;
    animation: glitchLines 0.3s linear infinite;
  }
`;

const GlitchLine = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2); /* Gris metálico */
  opacity: 0.7;
  pointer-events: none;
  z-index: -1; /* Las líneas estarán en el fondo */
  mix-blend-mode: overlay;

  &.horizontal {
    height: 1px;
    left: 0;
  }

  &.vertical {
    width: 1px;
    top: 0;
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000; /* Puedes personalizar el color aquí */
  z-index: 9999;
  pointer-events: none;
`;
export { TransitionContainer, TopLayer, BottomLayer, GlitchLine, Overlay };
