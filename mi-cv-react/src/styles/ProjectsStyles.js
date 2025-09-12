import styled from 'styled-components';
import interBackground from '../assets/inter.jpg';

const ProjectsContainer = styled.section`
  position: relative;
  overflow: hidden;

  max-width: 800px;
  margin: 1rem auto;
  padding: 1rem 2rem 3rem; /* poco padding arriba, nada exagerado */
  color: white;
  border-radius: 10px;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: url(${interBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(180deg);
    opacity: 0.15; /* fondo muy tenue */
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  h2 {
    font-family: ${(props) => props.theme.fontFamily.main};
    letter-spacing: 1.5px;
    margin-bottom: 1rem;
    font-size: 2.2rem;
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
    padding: 1rem 1rem 2rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
  }
`;

const ProjectCard = styled.div`
  background: transparent; /* sin cajas visibles */
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    color: white;
  }

  p {
    font-size: 1rem;
    color: #ccc;
  }

  a {
    color: #4CAF50;
    text-decoration: underline;
    font-weight: bold;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export { ProjectsContainer, ProjectCard };
