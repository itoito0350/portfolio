// src/styles/ProjectsStyles.js
import styled from 'styled-components';
import inter from '../assets/inter.jpg';


const ProjectsContainer = styled.section`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${inter});
  background-size: cover;
  background-position: center;
  transform: rotate(180deg);
  opacity: 0.2;
  z-index: 0;
}

  &.fade-out {
    animation: fadeOut 0.8s ease forwards;
  }

  button {
    margin-top: 2rem;
    padding: 0.6rem 1.5rem;
    background: #4e8477;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 0.95rem;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    button {
      margin-top: 1.5rem;
    }
  }
`;

const ProjectCard = styled.div`
  background: transparent;
  border: none;
  padding: 1.5rem;
  margin: 1rem 0;
  width: 100%;
  max-width: 600px;
  color: #ccc;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  backdrop-filter: blur(4px);
  position: relative;
  z-index: 2;

  h3 {
    font-size: 1.3rem;
    color: #ffffff;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #b3b3b3;
  }
`;

export { ProjectsContainer, ProjectCard };
