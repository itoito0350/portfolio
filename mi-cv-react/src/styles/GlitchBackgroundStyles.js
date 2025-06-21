import styled from 'styled-components';
import { motion } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 99;

  /* Añadimos las interferencias glitch */
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 255, 0, 0.03) 2px,
      transparent 4px,
      rgba(255, 0, 0, 0.04) 6px,
      transparent 8px
    );
    mix-blend-mode: overlay;
    animation: glitchLines 0.2s linear infinite;
  }

  /* RGB Distorsionado */
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 0, 0, 0.02) 10%,
      transparent 20%,
      rgba(0, 255, 0, 0.05) 30%,
      transparent 40%,
      rgba(0, 0, 255, 0.04) 50%
    );
    animation: glitchRGB 0.6s ease-in-out infinite alternate;
  }

  @keyframes glitchLines {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2px);
    }
  }

  @keyframes glitchRGB {
    0% {
      opacity: 0.08;
      filter: hue-rotate(0deg);
    }
    50% {
      opacity: 0.2;
      filter: hue-rotate(45deg);
    }
    100% {
      opacity: 0.08;
      filter: hue-rotate(-45deg);
    }
  }
`;
export {Overlay};