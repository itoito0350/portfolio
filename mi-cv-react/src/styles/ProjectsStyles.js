import styled from 'styled-components';
import interBackground from '../assets/inter.jpg';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding: 100px 20px 40px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: white;
  border-radius: 10px;
  scroll-margin-top: 120px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${interBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(180deg);
    opacity: 0.2;
    z-index: 0;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  h2 {
    font-family: ${(props) => props.theme.fontFamily.main};
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    font-size: 2.5rem;
  }

  button {
    margin-top: 2rem;
    padding: 0.8rem 2rem;
    background: #4e8477;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 80px 15px 30px;

    h2 {
      font-size: 2rem;
    }
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease-in-out;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #ffffff;
  }

  p {
    font-size: 1rem;
    color: #b3b3b3;
  }

  a {
    font-weight: bold;
    color: #4CAF50;
    text-decoration: underline;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    transform: translateY(-4px);
  }
`;

export { ProjectsContainer, ProjectCard };
