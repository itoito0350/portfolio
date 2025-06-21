import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  max-width: 1000px;
  margin: 80px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  
`;

const ProjectCard = styled(motion.div)`
  background-color: #000;  /* Fondo negro */
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s ease;
  cursor: pointer;

  h3 {
    font-size: 1.5rem;
    color: #4e8477;  /* Título en verde claro */
    font-family: ${(props) => props.theme.fontFamily.main};
  }

  p {
    color: white;  /* Texto blanco */
    margin-top: 10px;
    font-family: ${(props) => props.theme.fontFamily.main};
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    background-color: #333;  /* Fondo ligeramente más claro al hacer hover */
  }
`;
export { ProjectsContainer, ProjectCard };