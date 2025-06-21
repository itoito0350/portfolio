import styled from 'styled-components';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(78, 132, 119, 0.8); /* Verde semi-transparente */
  z-index: 99;
  pointer-events: none; /* Para que no interfiera con clics */
`;
